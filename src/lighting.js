import * as THREE from 'three';
import { CSM } from 'three/addons/csm/CSM.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

// Directional-light PCSS: orthographic depths are linear. The radius passed by
// each cascade is tan(solar angular radius) * light-depth-range / cascade-width.
// This is a shadow-map approximation, not ray tracing or HDR display output.
const pcss = /* glsl */`
float superLightPCSS(sampler2D map, vec2 uv, float receiver, vec2 mapSize, float sunRadius) {
  float texel = 1.0 / mapSize.x;
  float searchRadius = max(texel * 2.0, sunRadius * 0.075);
  float blockers = 0.0;
  float depthSum = 0.0;
  // Shadow-texel anchored rotation avoids screen-space swimming while walking.
  float angle = fract(sin(dot(floor(uv * mapSize), vec2(12.9898,78.233))) * 43758.5453) * 6.283185;
  for (int i = 0; i < 24; i++) {
    float r = sqrt((float(i) + 0.5) / 24.0);
    float a = float(i) * 2.399963 + angle;
    vec2 sampleUV = clamp(uv + vec2(cos(a),sin(a)) * r * searchRadius, vec2(texel), vec2(1.0-texel));
    float d = unpackRGBAToDepth(texture2D(map, sampleUV));
    if (d < receiver) { depthSum += d; blockers += 1.0; }
  }
  if (blockers == 0.0) return 1.0;
  float penumbra = max(texel * 0.8, (receiver - depthSum / blockers) * sunRadius);
  float visibility = 0.0;
  for (int i = 0; i < 48; i++) {
    float r = sqrt((float(i) + 0.5) / 48.0);
    float a = float(i) * 2.399963 + angle;
    vec2 sampleUV = clamp(uv + vec2(cos(a),sin(a)) * r * penumbra, vec2(texel), vec2(1.0-texel));
    visibility += texture2DCompare(map, sampleUV, receiver);
  }
  return visibility / 48.0;
}
`;
const shadowChunk = THREE.ShaderChunk.shadowmap_pars_fragment
  .replace('float getShadow(', `${pcss}\nfloat getShadow(`)
  .replace('#if defined( SHADOWMAP_TYPE_PCF )', `#if defined( HDR_SUPER_LIGHT )
    shadow = superLightPCSS(shadowMap, shadowCoord.xy, shadowCoord.z, shadowMapSize, shadowRadius);
  #elif defined( SHADOWMAP_TYPE_PCF )`);

export class HDRSuperLight {
  constructor(world) {
    this.world = world;
    this.supported = world.renderer.extensions.has('EXT_color_buffer_float');
    this.materials = new Set();
    this.lastShadowTime = -Infinity;
    this.shadowPosition = new THREE.Vector3(Infinity, Infinity, Infinity);
    this.shadowRotation = new THREE.Quaternion();
    this.csm = new CSM({
      camera: world.camera, parent: world.scene, cascades: 4,
      maxFar: 320, mode: 'custom',
      customSplitsCallback: (count, _near, far, out) => {
        if (count === 1) out.push(1);
        else if (count === 2) out.push(32/far, 1);
        else out.push(16/far, 48/far, 128/far, 1);
      },
      shadowMapSize: Math.min(4096, world.renderer.capabilities.maxTextureSize),
      lightDirection: world.sunDirection.clone().negate(),
      lightIntensity: world.sun.intensity, lightNear: 1, lightFar: 650, lightMargin: 240,
      shadowBias: -.000015,
    });
    this.csm.fade = true;
    // CSM snaps every cascade with one global map size. With per-cascade sizes the
    // snap must use each light's own texel size, otherwise shadows shimmer while walking.
    const csmUpdate = this.csm.update.bind(this.csm);
    this.csm.update = () => {
      const lights = this.csm.lights, frustums = this.csm.frustums, global = this.csm.shadowMapSize;
      for (let i = 0; i < frustums.length; i++) {
        this.csm.lights = [lights[i]]; this.csm.frustums = [frustums[i]];
        this.csm.shadowMapSize = lights[i].shadow.mapSize.x;
        csmUpdate();
      }
      this.csm.lights = lights; this.csm.frustums = frustums; this.csm.shadowMapSize = global;
    };
    this.cascadeLights = [...this.csm.lights];
    // Only cascades illuminate the scene; do not multiply sunlight by five.
    world.sun.removeFromParent(); world.sun.target.removeFromParent();
    world.scene.traverse(object => {
      for (const material of [object.material].flat().filter(Boolean)) {
        if (this.materials.has(material) || !(material.isMeshStandardMaterial || material.isMeshLambertMaterial || material.isMeshPhongMaterial)) continue;
        this.materials.add(material);
        const original = material.onBeforeCompile;
        const originalCacheKey = material.customProgramCacheKey();
        this.csm.setupMaterial(material);
        const cascadeCompile = material.onBeforeCompile;
        material.onBeforeCompile = (shader, renderer) => {
          original.call(material, shader, renderer); // Preserve rice vertex animation.
          cascadeCompile(shader, renderer);
          shader.fragmentShader = shader.fragmentShader.replace('#include <shadowmap_pars_fragment>', shadowChunk);
        };
        // Keep wind-deformed rice separate from static instanced materials.
        material.customProgramCacheKey = () => `super-light-v2-${material.type}-${originalCacheKey}`;
        material.needsUpdate = true;
      }
    });
    if (this.supported) {
      const target = new THREE.WebGLRenderTarget(1, 1, {
        type: THREE.HalfFloatType, samples: Math.min(4, world.renderer.capabilities.maxSamples),
      });
      this.composer = new EffectComposer(world.renderer, target);
      this.composer.addPass(new RenderPass(world.scene, world.camera));
      this.bloom = new UnrealBloomPass(new THREE.Vector2(1,1), .075, .35, 1.6);
      this.composer.addPass(this.bloom);
      this.composer.addPass(new OutputPass());
    }
    this.setQuality('hdr');
  }
  setQuality(value) {
    this.low = value === 'low';
    this.enabled = ['ultra', 'hdr'].includes(value) && this.supported;
    this.useComposer = (this.enabled || this.low) && this.supported;
    // Two overlapping cascades retain nearby contact shadows and the full 320 m range.
    // Reuse the same CSM instance so wind shader hooks and uniforms survive toggles.
    // "balanced" draws no shadows: one cascade light is enough, and freeing the other
    // maps releases up to ~100 MB of GPU memory that stayed allocated from HDR/high.
    const balanced = value === 'balanced';
    const count = this.low ? 2 : balanced ? 1 : 4;
    this.csm.cascades = count;
    this.csm.lights = this.cascadeLights.slice(0, count);
    for (const [index, light] of this.cascadeLights.entries()) {
      if (index < count) this.world.scene.add(light, light.target);
      else {
        light.removeFromParent(); light.target.removeFromParent();
        light.shadow.map?.dispose(); light.shadow.map = null;
      }
    }
    // Four 4096^2 RGBA depth maps (~256 MB + depth buffers) exhausted GPU memory and
    // lost the WebGL context on common laptops/phones. Only the nearest cascade needs
    // 4K texels; distant cascades are drawn at progressively lower resolutions.
    const max = this.world.renderer.capabilities.maxTextureSize;
    const sizes = this.enabled ? [4096, 2048, 2048, 1024] : [2048, 2048];
    this.csm.shadowMapSize = Math.min(sizes[0], max);
    if (balanced) for (const light of this.csm.lights) { light.shadow.map?.dispose(); light.shadow.map = null; }
    for (const [index, light] of this.csm.lights.entries()) {
      const cascadeSize = Math.min(sizes[index] ?? sizes.at(-1), max);
      if (light.shadow.mapSize.x !== cascadeSize) {
        light.shadow.mapSize.set(cascadeSize, cascadeSize);
        light.shadow.map?.dispose(); light.shadow.map = null;
      }
      light.shadow.normalBias = .018;
    }
    for (const material of this.materials) {
      material.defines.CSM_CASCADES = count;
      if (this.enabled) material.defines.HDR_SUPER_LIGHT = '';
      else delete material.defines.HDR_SUPER_LIGHT;
      material.needsUpdate = true;
    }
    this.world.renderer.shadowMap.enabled = value !== 'balanced';
    // Keep fog/transparent blending in linear HDR before the common output transform.
    // Direct-to-canvas AgX changed distant haze: LOW still needs this cheap output pass.
    if (this.composer) {
      this.bloom.enabled = this.enabled;
      for (const target of [this.composer.renderTarget1, this.composer.renderTarget2]) {
        const samples = this.enabled ? Math.min(value === 'ultra' ? 2 : 4, this.world.renderer.capabilities.maxSamples) : 0;
        if (target.samples !== samples) { target.dispose(); target.samples = samples; }
      }
    }
    this.world.renderer.toneMapping = this.enabled || this.low ? THREE.AgXToneMapping : THREE.ACESFilmicToneMapping;
    // Keep physical water/refraction; only its offscreen sampling buffer shrinks.
    this.world.renderer.transmissionResolutionScale = this.low ? .5 : 1;
    this.lastShadowTime = -Infinity;
    this.updateFrustums();
    this.syncSun();
  }
  syncSun() {
    const w = this.world;
    this.csm.lightDirection.copy(w.sunDirection).negate();
    for (const light of this.csm.lights) {
      light.color.copy(w.sun.color); light.intensity = w.sun.intensity;
    }
    w.renderer.shadowMap.needsUpdate = true;
  }
  updateFrustums() {
    this.csm.updateFrustums();
    this.world.renderer.shadowMap.needsUpdate = true;
    for (const light of this.csm.lights) {
      const camera = light.shadow.camera;
      light.shadow.radius = this.enabled
        ? Math.tan(THREE.MathUtils.degToRad(.266)) * (camera.far-camera.near) / (camera.right-camera.left)
        : 1.5;
    }
  }
  resize(width, height) {
    this.updateFrustums();
    if (this.composer) {
      // Do not retain full-size HDR buffers while rendering directly.
      this.composer.setPixelRatio(this.useComposer ? this.world.renderer.getPixelRatio() : 1);
      this.composer.setSize(this.useComposer ? width : 32, this.useComposer ? height : 32);
    }
  }
  render() {
    const w = this.world;
    w.camera.updateMatrixWorld();
    const now = performance.now();
    const moved = !this.shadowPosition.equals(w.camera.position) || !this.shadowRotation.equals(w.camera.quaternion);
    // Never move CSM matrices without redrawing their maps: cached maps would swim.
    // Camera motion, resize, quality/time changes and texture loads invalidate immediately.
    // Only stationary LOW views reuse shadows between 30 Hz animation updates.
    const refresh = !this.low || moved || w.renderer.shadowMap.needsUpdate || now - this.lastShadowTime >= 1000 / 30;
    if (refresh && w.renderer.shadowMap.enabled) {
      this.csm.update();
      w.renderer.shadowMap.needsUpdate = true;
      this.lastShadowTime = now;
      this.shadowPosition.copy(w.camera.position);
      this.shadowRotation.copy(w.camera.quaternion);
    }
    if (this.useComposer) this.composer.render();
    else w.renderer.render(w.scene, w.camera);
  }
}
