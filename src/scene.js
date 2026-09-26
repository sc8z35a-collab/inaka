import * as THREE from 'three';
import { Sky } from 'three/addons/objects/Sky.js';
import { HDRSuperLight } from './lighting.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { groundHeight, surfaceHeight, colliderContains, fields, fieldAt, railZ, railHeight, buildLand, fieldWaterGeometry } from './terrain.js';
import { buildVegetation, buildCumulus } from './nature.js';
import { VillageLife } from './life.js';
export { groundHeight } from './terrain.js';

// Procedural geometry, botanical atlases, and locally served photographic ground textures.
let seed = 1938;
const rand = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
const range = (a, b) => a + rand() * (b - a);
const clamp = THREE.MathUtils.clamp;
const smooth = x => { x = clamp(x, 0, 1); return x * x * (3 - 2 * x); };
function hash(x, y) { const n = Math.sin(x * 127.1 + y * 311.7) * 43758.5453; return n - Math.floor(n); }
function noise(x, y) {
  const ix = Math.floor(x), iy = Math.floor(y), u = smooth(x - ix), v = smooth(y - iy);
  return THREE.MathUtils.lerp(THREE.MathUtils.lerp(hash(ix, iy), hash(ix + 1, iy), u), THREE.MathUtils.lerp(hash(ix, iy + 1), hash(ix + 1, iy + 1), u), v);
}
function fbm(x, y) { return noise(x, y) * .55 + noise(x * 2.03, y * 2.03) * .27 + noise(x * 4.07, y * 4.07) * .12 + noise(x * 8.11, y * 8.11) * .06; }
export const spots = [
  { name: '水田を望む小径', subtitle: '水面に映る空と、稲を渡る風。', position: [13.45, groundHeight(13.45,18)+1.97, 18], look: [-12, 7, -65], map: [82, 94] },
  { name: '茅葺きの集落', subtitle: '懐かしい屋根の下に流れる、穏やかな時間。', position: [-4, surfaceHeight(-4,-29)+1.7, -29], look: [-21, 4.3, -58], map: [76, 49] },
  { name: '杉林の木陰', subtitle: '木漏れ日の中で、深呼吸をひとつ。', position: [57, surfaceHeight(57,-34)+1.7, -34], look: [40, 9, -76], map: [141, 47] },
];

export class Countryside {
  constructor(container, callbacks = {}) {
    this.container = container;
    this.callbacks = callbacks;
    this.mobile = matchMedia('(max-width: 760px)').matches;
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0xb9d3ca, .0018);
    this.camera = new THREE.PerspectiveCamera(this.mobile ? 64 : 59, 1, .15, 1800);
    this.camera.rotation.order = 'YXZ';
    this.camera.position.fromArray(spots[0].position);
    this.camera.lookAt(...spots[0].look);
    this.yaw = this.camera.rotation.y;
    this.pitch = this.camera.rotation.x;
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance', preserveDrawingBuffer: true });
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    // Lighting refreshes animated shadows at the selected quality cadence.
    this.renderer.shadowMap.autoUpdate = false;
    this.renderer.shadowMap.needsUpdate = true;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.0;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.domElement.setAttribute('aria-label', '3Dの田んぼ、茅葺きの家、山々。ドラッグで視点を動かせます。');
    this.renderer.domElement.tabIndex = 0;
    container.append(this.renderer.domElement);
    this.walking = false;
    this.paused = false;
    this.keys = new Set();
    this.joy = { x: 0, y: 0 };
    this.speed = 4;
    this.wind = 1;
    this.elapsed = 0;
    this.timeOfDay = 'day';
    this.quality = 'hdr';
    this.staticMeshes = [];
    this.colliders = [];
    this.birds = [];
    this.materials = {};
    this.buildLights();
    this.buildTextures();
    this.buildTerrain();
    this.buildWater();
    this.buildPaths();
    this.buildVillage();
    this.buildForest();
    this.buildRice();
    this.buildDetails();
    this.buildClouds();
    this.life = new VillageLife(this);
    this.mergeStaticMeshes();
    this.lighting = new HDRSuperLight(this);
    this.setTime('day');
    this.bindControls();
    this.resize();
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(container);
    // Moving the window to another monitor / zooming changes DPR without resizing the element.
    const watchRatio=()=>{const query=matchMedia(`(resolution: ${devicePixelRatio}dppx)`);query.addEventListener('change',()=>{this.resize();watchRatio();},{once:true});};
    watchRatio();
    this.clock = new THREE.Clock();
    this.renderer.setAnimationLoop(() => this.tick());
  }
  texture(kind, size = 512) {
    const canvas = document.createElement('canvas'); canvas.width = canvas.height = size;
    const ctx = canvas.getContext('2d');
    const base = { grass: '#626d2c', path: '#a9a58b', roof: '#7c7256', wood: '#504c37', plaster: '#d5cfb4', leaf: '#72864a', normal: '#8080ff' }[kind];
    ctx.fillStyle = base; ctx.fillRect(0, 0, size, size);
    if (kind === 'normal') {
      const image = ctx.getImageData(0, 0, size, size);
      for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) { const i = (y * size + x) * 4; image.data[i] = 128 + 22 * Math.sin(x * .16 + Math.sin(y * .05) * 3); image.data[i + 1] = 128 + 22 * Math.cos(y * .19 + Math.cos(x * .04) * 3); image.data[i + 2] = 248; }
      ctx.putImageData(image, 0, 0);
    } else {
      const count = kind === 'roof' ? 24000 : 33000;
      for (let i = 0; i < count; i++) {
        const x = rand() * size, y = rand() * size;
        const l = range(-35, 38);
        if (kind === 'roof') { ctx.strokeStyle = `rgba(${135 + l},${123 + l},${91 + l},${range(.3,.8)})`; ctx.lineWidth = range(.3,1.5); ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + range(-2,2), y + range(5,33)); ctx.stroke(); }
        else if (kind === 'wood') { ctx.fillStyle = `rgba(${90 + l},${85 + l},${65 + l},.3)`; ctx.fillRect(x, y, range(.5, 2), range(10, 100)); }
        else { const c = kind === 'grass' ? [103,115,51] : kind === 'path' ? [175,170,143] : kind === 'leaf' ? [113,139,68] : [216,211,187]; ctx.fillStyle = `rgba(${c[0] + l},${c[1] + l},${c[2] + l},${range(.15,.7)})`; ctx.beginPath(); ctx.ellipse(x, y, range(.5, kind === 'leaf' ? 5 : 2.5), range(.5,3.5), rand() * 6, 0, 7); ctx.fill(); }
      }
    }
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.colorSpace = kind === 'normal' ? THREE.NoColorSpace : THREE.SRGBColorSpace;
    texture.anisotropy = Math.min(8, this.renderer.capabilities.getMaxAnisotropy());
    return texture;
  }
  buildTextures() {
    // grass/path canvases were painted (33k strokes each) and immediately replaced by photos.
    for (const kind of ['grass', 'path', 'roof', 'wood', 'plaster', 'leaf']) {
      const map = kind === 'grass' || kind === 'path' ? null : this.texture(kind);
      this.materials[kind] = new THREE.MeshStandardMaterial({ map, roughness: kind === 'leaf' ? .88 : 1, bumpMap: map, bumpScale: kind === 'roof' ? .3 : .1 });
    }
    const loader = new THREE.TextureLoader();
    this.groundClones = [];
    // Image-search sources: OpenGameArt ground textures and EveryTexture gravel.
    for (const [kind,file] of [['grass','grass.jpg'],['path','gravel.jpg']]) {
      const map=loader.load(`${import.meta.env.BASE_URL}textures/${file}`,()=>{
        // Clones share the image but have their own version; they must be re-uploaded too.
        for(const clone of this.groundClones)if(clone.source===map.source)clone.needsUpdate=true;
        this.renderer.shadowMap.needsUpdate=true;
      });
      map.wrapS=map.wrapT=THREE.RepeatWrapping;map.colorSpace=THREE.SRGBColorSpace;
      map.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy());
      this.materials[kind].map=map;this.materials[kind].bumpMap=map;this.materials[kind].bumpScale=kind==='path'?.16:.10;
    }
    this.materials.grass.map.repeat.set(75,75);
    this.groundTexture = (kind, repeat = 1) => {
      const map = this.materials[kind].map, clone = map.clone(); clone.repeat.set(repeat, repeat);
      if (map.image?.complete) clone.needsUpdate = true; else this.groundClones.push(clone);
      return clone;
    };
    this.materials.darkWood = new THREE.MeshStandardMaterial({ color: 0x383729, roughness: .97, map: this.materials.wood.map });
    this.materials.stone = new THREE.MeshStandardMaterial({ color: 0x858475, roughness: 1 });
    this.materials.glass = new THREE.MeshStandardMaterial({ color: 0x555c48, metalness: .35, roughness: .24 });
  }
  buildLights() {
    this.hemi = new THREE.HemisphereLight(0xd5e9ff, 0x455b2c, .65);
    this.scene.add(this.hemi);
    this.sun = new THREE.DirectionalLight(0xfff2d1, 3.5);
    this.sun.position.set(-70, 110, 35);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(2048, 2048);
    Object.assign(this.sun.shadow.camera, { left: -78, right: 78, top: 78, bottom: -78, near: 1, far: 350 });
    this.sun.shadow.normalBias = .05;
    this.sun.shadow.bias = -.00025;
    this.sun.shadow.radius = 3;
    this.sun.target.position.set(0, 0, -30);
    this.scene.add(this.sun, this.sun.target);
    this.sky = new Sky(); this.sky.scale.setScalar(1500); this.scene.add(this.sky);
    const u = this.sky.material.uniforms;
    u.turbidity.value = 2.6; u.rayleigh.value = 1.15; u.mieCoefficient.value = .004; u.mieDirectionalG.value = .78;
    this.sunDirection = this.sun.position.clone().sub(this.sun.target.position).normalize();
    u.sunPosition.value.copy(this.sunDirection);
    // The environment map is generated once by setTime(); generating it here as well
    // doubled startup PMREM work.
    this.scene.environmentIntensity = .4;
  }
  addBox(w, h, d, x, y, z, material, parent = this.scene) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
    mesh.position.set(x, y, z); mesh.castShadow = true; mesh.receiveShadow = true;
    parent.add(mesh); this.staticMeshes.push(mesh); return mesh;
  }
  buildTerrain() { buildLand(this); }
  buildWater() {
    // Every terrace has its own world-space height. A single Water reflector
    // incorrectly reflected all 20 paddies about y=0. Use physical Fresnel / sky
    // reflections and shallow refraction instead of that invalid planar mirror.
    const normal = this.texture('normal', 256); normal.repeat.set(35,35);
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x687b54, roughness: .17, metalness: 0, ior: 1.333,
      transmission: .58, thickness: .11, attenuationColor: 0x858554,
      attenuationDistance: .8, normalMap: normal, normalScale: new THREE.Vector2(.055,.055),
      clearcoat: 1, clearcoatRoughness: .12, envMapIntensity: 1.1,
    });
    this.water = new THREE.Mesh(fieldWaterGeometry(), material);
    this.water.rotation.x = -Math.PI/2;
    this.water.receiveShadow = true;
    this.scene.add(this.water);
  }

  pathX(z) { return 10 + 4.5 * Math.sin(z * .019) + 2 * Math.sin(z * .055); }
  ribbon(points, width, material, height = .22) {
    const vertices = [], uvs = [], indices = [];
    let distance = 0;
    for (let i = 0; i < points.length; i++) {
      const a = points[Math.max(0, i - 1)], b = points[Math.min(points.length - 1, i + 1)], p = points[i];
      const dx = b[0] - a[0], dz = b[1] - a[1], len = Math.hypot(dx, dz);
      if (i) distance += Math.hypot(p[0] - points[i - 1][0], p[1] - points[i - 1][1]);
      for (const s of [-1, 1]) { const x = p[0] - dz / len * width / 2 * s, z = p[1] + dx / len * width / 2 * s; vertices.push(x, height + groundHeight(x, z), z); uvs.push((s + 1) / 2, distance / 4); }
      if (i < points.length - 1) { const j = i * 2; indices.push(j, j + 1, j + 2, j + 1, j + 3, j + 2); }
    }
    const geometry = new THREE.BufferGeometry(); geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3)); geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2)); geometry.setIndex(indices); geometry.computeVertexNormals();
    const mesh = new THREE.Mesh(geometry, material); mesh.receiveShadow = true; this.scene.add(mesh); return mesh;
  }
  buildPaths() {
    const path=[],side=[];
    for(let z=126;z>=-106;z-=1)path.push([this.pathX(z),z]);
    // Ribbon UVs are metric (1 tile / 4 m); the terrain's 75x repeat made verges shimmer.
    const vergeMap=this.groundTexture('grass');
    const verge=new THREE.MeshStandardMaterial({color:0x6f8543,roughness:1,map:vergeMap});
    this.ribbon(path,4.7,verge,.14);this.ribbon(path,2.75,this.materials.path,.24);
    const road=this.materials.path.clone();road.color.set(0x96978b);
    for(let x=-111;x<=111;x+=1)side.push([x,-29+1.3*Math.sin(x*.04)]);
    this.ribbon(side,4.6,verge,.13);this.ribbon(side,3.3,road,.24);
    for(const f of fields){
      const bank=[];for(let x=f.x1;x<=f.x2;x+=1)bank.push([x,f.z2+1]);this.ribbon(bank,1.05,verge,.12);
    }
    for(let i=0;i<13;i++){const z=3.5+i*.23;this.addBox(3,.11,.21,this.pathX(z),groundHeight(this.pathX(z),z)+.30,z,this.materials.wood);}
  }
  roof(w, d, eave, peak, parent) {
    const a = [-w,eave,d], b = [w,eave,d], c = [w,eave,-d], e = [-w,eave,-d], f = [0,peak,d*.44], h = [0,peak,-d*.44];
    const faces = [[a,b,f],[b,c,h,f],[c,e,h],[e,a,f,h]];
    const pos = [], uv = [], idx = [];
    for (const face of faces) { const start = pos.length / 3; face.forEach((p, i) => { pos.push(...p); uv.push(i === 0 || i === 3 ? 0 : 1, i < 2 ? 0 : 1); }); idx.push(start,start+1,start+2); if(face.length===4)idx.push(start,start+2,start+3); }
    const geom = new THREE.BufferGeometry(); geom.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));geom.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));geom.setIndex(idx);geom.computeVertexNormals();
    const material = this.materials.roof; material.side = THREE.DoubleSide; material.shadowSide = THREE.DoubleSide;
    const roof = new THREE.Mesh(geom,material); roof.castShadow = true; roof.receiveShadow = true; parent.add(roof);this.staticMeshes.push(roof);
    // Thick thatch eaves, bundled ridge and the traditional timber roof fasteners.
    this.addBox(w*2,.48,.35,0,eave-.12,d,this.materials.roof,parent);
    this.addBox(w*2,.48,.35,0,eave-.12,-d,this.materials.roof,parent);
    this.addBox(.35,.48,d*2,-w,eave-.12,0,this.materials.roof,parent);
    this.addBox(.35,.48,d*2,w,eave-.12,0,this.materials.roof,parent);
    this.addBox(.64,.43,d*.94,0,peak,0,this.materials.darkWood,parent);
    for(let z=-d*.42;z<=d*.42;z+=.8)this.addBox(.92,.16,.18,0,peak+.25,z,this.materials.wood,parent);
  }
  house(x,z,w=11,d=8,rotation=0) {
    const house = new THREE.Group();house.position.set(x,Math.max(groundHeight(x,z),0),z);house.rotation.y=rotation;this.scene.add(house);
    house.name = '民家';
    this.colliders.push({ x,z,r:Math.hypot(w/2,d/2+1.65),halfWidth:w/2+.35,halfDepth:d/2+1.65,rotation });
    this.addBox(w+.7,.55,d+.65,0,.2,0,this.materials.stone,house);
    this.addBox(w,3.1,d,0,1.9,0,this.materials.plaster,house);
    this.addBox(w,1.35,d+.07,0,1,0,this.materials.wood,house);
    this.roof(w*.64,d*.69,3.7,8.9,house);
    for(let xx=-w/2;xx<=w/2;xx+=w/6){
      this.addBox(.18,3.4,.18,xx,1.85,d/2+.09,this.materials.darkWood,house);
      this.addBox(.18,3.4,.18,xx,1.85,-d/2-.09,this.materials.darkWood,house);
    }
    for(const yy of [.5,1.65,3.2])this.addBox(w+.15,.15,d+.18,0,yy,0,this.materials.darkWood,house);
    for(const xx of [-w*.31,w*.29]){
      this.addBox(w*.23,1.38,.04,xx,2.36,d/2+.07,this.materials.glass,house);
      for(let t=-2;t<=2;t++)this.addBox(.055,1.44,.075,xx+t*w*.043,2.36,d/2+.11,this.materials.wood,house);
      this.addBox(w*.24,.06,.1,xx,2.35,d/2+.13,this.materials.wood,house);
    }
    this.addBox(1.5,2.45,.13,0,1.7,d/2+.1,this.materials.darkWood,house);
    for(let t=-3;t<=3;t++)this.addBox(.055,2.2,.16,t*.19,1.7,d/2+.18,this.materials.wood,house);
    this.addBox(w*.75,.16,1.15,0,.53,d/2+.6,this.materials.wood,house);
    this.addBox(1.8,.25,.65,0,.24,d/2+1.3,this.materials.stone,house);
    // The smoke opening and its slats must lie ON the sloping thatch plane.
    const roofZ = y => d*.69 * (1 - .56 * (y-3.7) / (8.9-3.7)) + .035;
    const triangle = new THREE.BufferGeometry();
    triangle.setAttribute('position',new THREE.Float32BufferAttribute([-1.05,6.3,roofZ(6.3),1.05,6.3,roofZ(6.3),0,7.9,roofZ(7.9)],3));
    triangle.computeVertexNormals();
    const vent = new THREE.Mesh(triangle,this.materials.darkWood);
    vent.castShadow = vent.receiveShadow = true;
    house.add(vent);this.staticMeshes.push(vent);
    for(let i=-2;i<=2;i++) {
      const y=6.62, slat=this.addBox(.065,.57,.065,i*.25,y,roofZ(y)+.045,this.materials.wood,house);
      slat.rotation.x=-Math.atan(d*.69*.56/5.2);
    }
  }

  buildVillage() {
    for(const [x,z,w,d,r] of [[-26,-64,13,9,-.08],[10,-81,10,8,.03],[49,-65,12,8,-.2],[-63,-76,11,9,.12],[82,-83,9,7,-.13],[-88,-51,8,6,.17]])this.house(x,z,w,d,r);
    const y=groundHeight(-46,-57);this.addBox(5,2.1,4,-46,y+1.05,-57,this.materials.wood);
    const shed=this.addBox(5.8,.22,5,-46,y+2.5,-57,this.materials.darkWood);shed.rotation.z=.11;
    const soil=new THREE.MeshStandardMaterial({color:0x69543c,roughness:1});
    for(let j=0;j<5;j++){const z=-50+j*1.4;this.addBox(13,.12,.65,-59,groundHeight(-59,z)+.12,z,soil);}
    for(let x=-67;x<-49;x+=1.5)this.addBox(.12,.9,.12,x,groundHeight(x,-28)+.5,-28,this.materials.wood);
  }
  buildForest() { buildVegetation(this); }
  buildRice() {
    const geom=new THREE.BufferGeometry();
    geom.setAttribute('position',new THREE.Float32BufferAttribute([-.045,0,0,.045,0,0,-.029,.44,.025,.029,.44,.025,-.012,.83,.12,.012,.83,.12,.01,1.04,.27],3));
    geom.setAttribute('uv',new THREE.Float32BufferAttribute([0,0,1,0,0,.44,1,.44,0,.83,1,.83,.5,1],2));
    geom.setIndex([0,1,2,1,3,2,2,3,4,3,5,4,4,5,6]);geom.computeVertexNormals();
    const material=new THREE.MeshStandardMaterial({color:0xe8efb2,side:THREE.DoubleSide,roughness:.86});
    this.windUniform={value:0};this.windStrength={value:1};
    const animateRice=shader=>{
      shader.uniforms.uWind=this.windUniform;shader.uniforms.uStrength=this.windStrength;
      shader.vertexShader='uniform float uWind; uniform float uStrength; varying float vHeight;\n'+shader.vertexShader;
      shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>
        vHeight = position.y;
        vec4 root = instanceMatrix * vec4(0.,0.,0.,1.);
        transformed.x += sin(uWind * 1.4 + root.x*.4 + root.z*.18) * position.y * position.y * .15 * uStrength;
        transformed.z += cos(uWind + root.x*.22 + root.z*.24) * position.y * position.y * .08 * uStrength;`);
    };
    material.onBeforeCompile=shader=>{
      animateRice(shader);
      shader.fragmentShader='varying float vHeight;\n'+shader.fragmentShader;
      shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>','#include <color_fragment>\n diffuseColor.rgb *= mix(vec3(.38,.55,.2), vec3(1.15,1.13,.73), smoothstep(0.,.95,vHeight));');
    };
    const depthMaterial=new THREE.MeshDepthMaterial({depthPacking:THREE.RGBADepthPacking,side:THREE.DoubleSide});
    depthMaterial.onBeforeCompile=animateRice;
    depthMaterial.customProgramCacheKey=()=> 'rice-wind-depth-v1';
    material.shadowSide=THREE.DoubleSide;
    const positions=[];
    const spacing=.64;
    for(const f of fields)for(let z=f.z1+.35;z<f.z2-.35;z+=spacing)for(let x=f.x1+.35;x<f.x2-.35;x+=spacing){
      if(Math.abs(x-this.pathX(z))<2.3)continue;
      const young=f.young;
      if(young&&(Math.round(x/spacing)%2||Math.round(z/spacing)%2))continue;
      positions.push({x:x+range(-.07,.07),z:z+range(-.07,.07),y:f.y+.005,height:young?range(.28,.42):range(.72,1.02)});
    }
    const perClump=5;
    // Small spatial batches preserve every blade while culling off-screen paddies.
    const tiles = new Map();
    for (const p of positions) {
      const key = `${Math.floor(p.x / 22)},${Math.floor(p.z / 22)}`;
      if (!tiles.has(key)) tiles.set(key, []);
      tiles.get(key).push(p);
    }
    this.rice = new THREE.Group();
    this.rice.userData.bladeCount = positions.length * perClump;
    const dummy = new THREE.Object3D(), c = new THREE.Color();
    for (const points of tiles.values()) {
      const tile = new THREE.InstancedMesh(geom, material, points.length * perClump);
      let i = 0;
      for (const p of points) for (let k = 0; k < perClump; k++) {
        dummy.position.set(p.x + range(-.085,.085), p.y, p.z + range(-.085,.085));
        dummy.rotation.set(range(-.22,.22), rand() * Math.PI * 2, range(-.26,.26));
        dummy.scale.set(range(1.0,1.7), p.height * range(.8,1.1), 1);
        dummy.updateMatrix(); tile.setMatrixAt(i, dummy.matrix);
        c.setHSL(range(.195,.245), range(.46,.64), range(.36,.49));
        tile.setColorAt(i++, c);
      }
      tile.castShadow = tile.receiveShadow = true;
      tile.customDepthMaterial = depthMaterial;
      tile.computeBoundingSphere();
      tile.boundingSphere.radius += .5; // Include wind displacement in culling bounds.
      this.rice.add(tile);
    }
    this.scene.add(this.rice);
  }
  buildDetails() {
    const dummy=new THREE.Object3D(),color=new THREE.Color();
    const rocks=new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1,0),this.materials.stone,620);
    for(let i=0;i<620;i++){
      const z=range(-64,127),x=this.pathX(z)+(rand()>.5?1:-1)*range(1.6,2.3);
      dummy.position.set(x,groundHeight(x,z)+range(.12,.23),z);dummy.scale.set(range(.04,.18),range(.04,.13),range(.05,.19));dummy.rotation.set(rand()*3,rand()*3,rand()*3);dummy.updateMatrix();rocks.setMatrixAt(i,dummy.matrix);color.setHSL(.13,.07,range(.34,.6));rocks.setColorAt(i,color);
    }rocks.receiveShadow=true;this.scene.add(rocks);
    // Wildflowers and weeds follow the banks, rather than being scattered in the water.
    const blade=new THREE.PlaneGeometry(.07,.55);blade.translate(0,.275,0);
    const weeds=new THREE.InstancedMesh(blade,new THREE.MeshStandardMaterial({color:0x6e8b31,side:THREE.DoubleSide,roughness:1}),8000);
    const flowers=new THREE.InstancedMesh(new THREE.IcosahedronGeometry(.045,0),new THREE.MeshStandardMaterial({color:0xf4eed1,roughness:1}),700);
    for(let i=0;i<8000;i++){
      const z=range(-64,130),x=this.pathX(z)+(rand()>.5?1:-1)*range(1.55,2.34);
      dummy.position.set(x,groundHeight(x,z)+.17,z);dummy.rotation.set(range(-.4,.4),range(0,6.2),range(-.45,.45));dummy.scale.setScalar(range(.45,1.2));dummy.updateMatrix();weeds.setMatrixAt(i,dummy.matrix);
      if(i<700){dummy.position.y+=range(.2,.4);dummy.scale.setScalar(range(.6,1.3));dummy.updateMatrix();flowers.setMatrixAt(i,dummy.matrix);}
    }this.scene.add(weeds,flowers);
    const by=groundHeight(30,-26);
    this.addBox(2.6,.13,.7,30,by+.65,-26,this.materials.wood);
    this.addBox(2.6,.35,.1,30,by+1.12,-26.32,this.materials.wood);
    for(const x of [29.1,30.9])this.addBox(.16,.64,.55,x,by+.32,-26,this.materials.darkWood);
    // Distant swallows, animated as small silhouettes.
    const birdMat=new THREE.MeshBasicMaterial({color:0x3d5145,side:THREE.DoubleSide});
    for(let i=0;i<7;i++){
      const bird=new THREE.Group();
      for(const side of [-1,1]){
        const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute([0,0,0,side*.55,.1,.12,side*.25,0,-.17],3));geo.computeVertexNormals();const wing=new THREE.Mesh(geo,birdMat);bird.add(wing);
      }
      bird.userData={offset:rand()*Math.PI*2,radius:range(22,40),height:range(17,27)};this.birds.push(bird);this.scene.add(bird);
    }
  }
  buildClouds() { buildCumulus(this); }
  mergeStaticMeshes() {
    this.scene.updateMatrixWorld(true);
    const groups=new Map();
    for(const mesh of this.staticMeshes){
      const key=mesh.material.uuid;if(!groups.has(key))groups.set(key,{material:mesh.material,geometries:[]});
      let g=mesh.geometry.clone().applyMatrix4(mesh.matrixWorld);
      if(g.index)g=g.toNonIndexed();
      g.deleteAttribute('normal');g.computeVertexNormals();
      if(!g.attributes.uv)g.setAttribute('uv',new THREE.BufferAttribute(new Float32Array(g.attributes.position.count*2),2));
      groups.get(key).geometries.push(g);mesh.removeFromParent();mesh.geometry.dispose();
    }
    for(const {material,geometries} of groups.values()){
      const geometry=mergeGeometries(geometries);const mesh=new THREE.Mesh(geometry,material);mesh.castShadow=mesh.receiveShadow=true;this.scene.add(mesh);geometries.forEach(g=>g.dispose());
    }
    this.staticMeshes=[];
  }
  bindControls() {
    const canvas=this.renderer.domElement;let drag=null;
    canvas.addEventListener('pointerdown',e=>{
      // Ignore secondary pointers/buttons: a second finger must not steal the drag.
      if(this.paused||drag||e.button>0)return;drag={id:e.pointerId,x:e.clientX,y:e.clientY};canvas.setPointerCapture(e.pointerId);canvas.style.cursor='grabbing';
    });
    canvas.addEventListener('pointermove',e=>{
      if(!drag||drag.id!==e.pointerId||this.paused)return;
      this.transition=null;
      this.yaw-=(e.clientX-drag.x)*.003*(this.sensitivity??.8);
      this.pitch=clamp(this.pitch-(e.clientY-drag.y)*.0024*(this.sensitivity??.8),-1.18,1.1);
      drag.x=e.clientX;drag.y=e.clientY;
    });
    // Only the pointer that started the drag may end it (multi-touch safety).
    const release=e=>{if(drag&&e.pointerId!==drag.id)return;drag=null;canvas.style.cursor='grab';};
    for(const type of ['pointerup','pointercancel','lostpointercapture'])canvas.addEventListener(type,release);canvas.style.cursor='grab';
    this.releaseDrag=()=>{drag=null;canvas.style.cursor='grab';};
    window.addEventListener('keydown',e=>{
      // Buttons keep focus after a click; movement keys must still walk. Only text-entry
      // controls (and selects/ranges, which use arrows) keep their own keyboard handling.
      if(this.paused||e.target.matches?.('input,select,textarea,[contenteditable]'))return;
      // Browser shortcuts (Ctrl/Cmd+S, Ctrl+D...) are not movement, and their keyup is often lost.
      if(e.ctrlKey||e.metaKey||e.altKey)return;
      if(e.target.matches?.('button,a')&&e.code.startsWith('Arrow'))return;
      if(['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','ShiftLeft','ShiftRight'].includes(e.code)){
        e.preventDefault();
        if (!this.walking) this.setWalking(true);
        this.transition=null;
        this.keys.add(e.code);
      }
    });
    window.addEventListener('keyup',e=>{
      this.keys.delete(e.code);
      // macOS never sends keyup for keys released while Cmd is held.
      if(e.key==='Meta')this.keys.clear();
    });
    window.addEventListener('blur',()=>this.resetInput());
    document.addEventListener('visibilitychange',()=>{if(document.hidden)this.resetInput();});
    canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();this.contextLost=true;this.callbacks.onContextLost?.();this.callbacks.onError?.('グラフィックの接続が中断されました。軽い描画で復帰を試みます。');});
    canvas.addEventListener('webglcontextrestored',()=>{
      this.contextLost=false;
      // Restored contexts lose every GPU resource; recompile and redraw shadows at a lighter preset.
      const fallback=this.quality==='hdr'||this.quality==='high'?'low':this.quality;
      this.callbacks.onContextRestored?.(this.setQuality(fallback));
      this.renderer.shadowMap.needsUpdate=true;
    });
  }
  resetInput(){this.keys.clear();this.joy.x=this.joy.y=0;this.releaseDrag?.();}
  setWalking(value) {
    this.walking=value;this.resetInput();this.callbacks.onWalking?.(value);
    if(value){this.transition={start:this.camera.position.clone(),end:new THREE.Vector3(this.camera.position.x,surfaceHeight(this.camera.position.x,this.camera.position.z)+1.7,this.camera.position.z),startYaw:this.yaw,endYaw:this.yaw,startPitch:this.pitch,endPitch:0,elapsed:0,duration:1.5};}
    else this.goTo(0,false);
  }
  goTo(index,walk=this.walking){
    const spot=spots[index],target=new THREE.Vector3().fromArray(spot.position);
    if(walk)target.y=surfaceHeight(target.x,target.z)+1.7;
    const dummy=new THREE.PerspectiveCamera();dummy.rotation.order='YXZ';dummy.position.copy(target);dummy.lookAt(...spot.look);
    let endYaw=dummy.rotation.y;while(endYaw-this.yaw>Math.PI)endYaw-=Math.PI*2;while(endYaw-this.yaw<-Math.PI)endYaw+=Math.PI*2;
    this.transition={start:this.camera.position.clone(),end:target,startYaw:this.yaw,endYaw,startPitch:this.pitch,endPitch:dummy.rotation.x,elapsed:0,duration:2};
    this.callbacks.onSpot?.(index);
  }
  setTime(value){
    this.timeOfDay=value;
    const settings={morning:{sun:[-95,35,-10],color:0xffecd0,intensity:2.8,hemi:.65,fog:0xc8d9ce,density:.0038,exposure:1.03,sky:2.8},day:{sun:[-70,110,35],color:0xfff2d1,intensity:3.5,hemi:.65,fog:0xc3d3c2,density:.0025,exposure:1.12,sky:2.6},evening:{sun:[-130,21,30],color:0xffb45e,intensity:3.2,hemi:.4,fog:0xd9b68e,density:.0032,exposure:1.05,sky:7}}[value];
    this.sun.position.fromArray(settings.sun);this.sun.color.set(settings.color);this.sun.intensity=settings.intensity;this.hemi.intensity=settings.hemi;
    this.hemi.color.set(value==='evening'?0xe3c4a1:0xd8edff);
    this.scene.fog.color.set(settings.fog);this.scene.fog.density=settings.density;
    this.renderer.toneMappingExposure=settings.exposure;
    this.sunDirection.copy(this.sun.position).sub(this.sun.target.position).normalize();
    this.sky.material.uniforms.sunPosition.value.copy(this.sunDirection);this.sky.material.uniforms.turbidity.value=settings.sky;
    this.lighting?.syncSun();
    const generator = new THREE.PMREMGenerator(this.renderer);
    // sigma .08 exceeded PMREM's 20-tap limit (console warnings, clipped blur).
    const environment = generator.fromScene(this.sky,.035,.1,1600);
    this.scene.environment = environment.texture;
    this.environment?.dispose(); this.environment = environment; generator.dispose();
    this.clouds.forEach(c=>c.material.color.set(value==='evening'?0xffd0a1:0xffffff));
    this.renderer.shadowMap.needsUpdate = true;
  }
  setQuality(value){
    const requested = value === 'ultra' ? 'hdr' : value;
    this.quality = ['hdr','high','low','balanced'].includes(requested) ? requested : 'hdr';
    if(this.quality === 'hdr' && !this.lighting.supported) {
      this.quality = 'high';
      this.callbacks.onError?.('このブラウザは16bit HDRに非対応のため、高画質で表示します。');
    }
    this.lighting.setQuality(this.quality);
    this.resize();
    return this.quality;
  }
  resize(){
    const w=Math.max(1,this.container.clientWidth),h=Math.max(1,this.container.clientHeight);
    // Keep UI at native resolution; only the 3D drawing buffer is scaled.
    // Re-evaluate DPR on resize (monitor changes and browser zoom included).
    // DPR 3 phones allocated 9x-sized MSAA HDR buffers; beyond 2x the gain is invisible.
    const ratio = this.quality === 'low' ? Math.min(devicePixelRatio, 1.5) * .9
      : this.quality === 'balanced' ? Math.min(devicePixelRatio, 1) : Math.min(devicePixelRatio, 2);
    this.renderer.setPixelRatio(ratio);
    this.camera.aspect=w/h;this.camera.updateProjectionMatrix();this.renderer.setSize(w,h);
    this.lighting?.resize(w,h);
  }
  render(){this.lighting.render();}
  screenshot(){this.render();return this.renderer.domElement.toDataURL('image/png');}
  thumbnails(){
    const position=this.camera.position.clone(),rotation=this.camera.rotation.clone(),result=[];
    const ratio=this.renderer.getPixelRatio();
    try {
      this.renderer.setPixelRatio(1);this.renderer.setSize(480,240,false);
      this.camera.aspect=2;this.camera.updateProjectionMatrix();this.lighting.resize(480,240);
      for(const spot of spots){this.camera.position.fromArray(spot.position);this.camera.lookAt(...spot.look);this.render();result.push(this.renderer.domElement.toDataURL('image/jpeg',.82));}
    } finally {
      this.camera.position.copy(position);this.camera.rotation.copy(rotation);this.renderer.setPixelRatio(ratio);this.resize();this.render();
    }
    return result;
  }
  tick(){
    const dt=Math.min(this.clock.getDelta(),.06);if(document.hidden||this.contextLost)return;
    this.elapsed+=dt;
    if(!this.paused)this.life.update(dt);
    // Keep shader time small: float32 precision in GLSL makes wind jitter after hours.
    // 2π·1000 s is a common period of every sin/cos term used by the rice shader.
    this.windUniform.value=this.elapsed%(Math.PI*2000);this.windStrength.value=this.wind;
    this.water.material.normalMap.offset.set((this.elapsed*.003*this.wind)%1,(this.elapsed*.002*this.wind)%1);
    if(this.transition&&!this.paused){
      const t=this.transition;t.elapsed+=dt;const a=smooth(t.elapsed/t.duration);
      this.camera.position.lerpVectors(t.start,t.end,a);this.yaw=THREE.MathUtils.lerp(t.startYaw,t.endYaw,a);this.pitch=THREE.MathUtils.lerp(t.startPitch,t.endPitch,a);
      if(a===1)this.transition=null;
    }else if(this.walking&&!this.paused){
      let forward=(this.keys.has('KeyW')||this.keys.has('ArrowUp')?1:0)-(this.keys.has('KeyS')||this.keys.has('ArrowDown')?1:0)-this.joy.y;
      let side=(this.keys.has('KeyD')||this.keys.has('ArrowRight')?1:0)-(this.keys.has('KeyA')||this.keys.has('ArrowLeft')?1:0)+this.joy.x;
      const len=Math.hypot(forward,side);if(len>1){forward/=len;side/=len;}
      if(len>.01){
        const speed=this.speed*(this.keys.has('ShiftLeft')||this.keys.has('ShiftRight')?1.8:1)*dt;
        const dx=(-Math.sin(this.yaw)*forward+Math.cos(this.yaw)*side)*speed,dz=(-Math.cos(this.yaw)*forward-Math.sin(this.yaw)*side)*speed;
        const pos=this.camera.position;
        // A player already inside a blocked zone (crossing closed around them, a villager
        // stepping close) was frozen forever. Blocked zones may always be left.
        const trapped=!this.life.canEnter(pos.x,pos.z);
        const allowed=(x,z)=>!this.colliders.some(c=>colliderContains(c,x,z,.25))&&(trapped||this.life.canEnter(x,z));
        if(allowed(pos.x+dx,pos.z))pos.x=clamp(pos.x+dx,-116,116);
        if(allowed(pos.x,pos.z+dz))pos.z=clamp(pos.z+dz,-106,126);
        pos.y=THREE.MathUtils.lerp(pos.y,surfaceHeight(pos.x,pos.z)+1.7+Math.sin(this.elapsed*7)*.023,Math.min(1,dt*10));
      }
    }
    // Trains used to pass straight through a player standing on the rails.
    if(!this.transition)this.life.clearTrack(this.camera.position,dt);
    this.camera.rotation.set(this.pitch,this.yaw,0,'YXZ');
    for(const bird of this.birds){const d=bird.userData,t=this.elapsed*.07+d.offset;bird.position.set(Math.sin(t)*d.radius,d.height+Math.sin(t*2)*2,-64+Math.cos(t)*d.radius*.5);bird.rotation.y=Math.atan2(Math.cos(t)*d.radius,-Math.sin(t)*d.radius*.5)+Math.PI;bird.children.forEach((w,i)=>w.rotation.z=Math.sin(this.elapsed*5+d.offset)*(i===0?1:-1)*.35);}
    // Wrap clouds: before, every cloud slowly drifted out of the sky after a long visit.
    this.clouds.forEach((c,i)=>{c.position.x+=dt*.13*(1+i%3);if(c.position.x>760)c.position.x-=1520;});
    if(this.callbacks.onPosition&&Math.floor(this.elapsed*5)!==this.lastMapTick){this.lastMapTick=Math.floor(this.elapsed*5);this.callbacks.onPosition(this.camera.position);}
    this.render();
    if(!this.ready){this.ready=true;this.callbacks.onReady?.();}
  }
}
