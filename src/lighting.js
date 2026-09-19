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
    this.csm = new CSM({
      camera: world.camera, parent: world.scene, cascades: 4,
      maxFar: 320, mode: 'custom',
      customSplitsCallback: (_count, _near, far, out) => out.push(16/far, 48/far, 128/far, 1),
      shadowMapSize: Math.min(4096, world.renderer.capabilities.maxTextureSize),
      lightDirection: world.sunDirection.clone().negate(),
      lightIntensity: world.sun.intensity, lightNear: 1, lightFar: 650, lightMargin: 240,
      shadowBias: -.000015,
    });
    this.csm.fade = true;
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
    this.enabled = value === 'hdr' && this.supported;
    const size = Math.min(this.enabled ? 4096 : 2048, this.world.renderer.capabilities.maxTextureSize);
    this.csm.shadowMapSize = size;
    for (const light of this.csm.lights) {
      if (light.shadow.mapSize.x !== size) {
        light.shadow.mapSize.set(size, size);
        light.shadow.map?.dispose(); light.shadow.map = null;
      }
      light.shadow.normalBias = .018;
    }
    for (const material of this.materials) {
      if (this.enabled) material.defines.HDR_SUPER_LIGHT = '';
      else delete material.defines.HDR_SUPER_LIGHT;
      material.needsUpdate = true;
    }
    this.world.renderer.shadowMap.enabled = value !== 'low';
    this.world.renderer.toneMapping = this.enabled ? THREE.AgXToneMapping : THREE.ACESFilmicToneMapping;
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
      this.composer.setPixelRatio(this.world.renderer.getPixelRatio());
      this.composer.setSize(width, height);
    }
  }
  render() {
    const w = this.world;
    w.camera.updateMatrixWorld();
    this.csm.update();
    w.renderer.shadowMap.needsUpdate = true; // Animated people, train AND wind, every frame.
    if (this.enabled) this.composer.render();
    else w.renderer.render(w.scene, w.camera);
  }
}
