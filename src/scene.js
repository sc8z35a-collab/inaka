import * as THREE from 'three';
import { Sky } from 'three/addons/objects/Sky.js';
import { Water } from 'three/addons/objects/Water.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { groundHeight, fields, fieldAt, railZ, railHeight, buildLand, fieldWaterGeometry } from './terrain.js';
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
  { name: '茅葺きの集落', subtitle: '懐かしい屋根の下に流れる、穏やかな時間。', position: [-4, 2.3, -29], look: [-21, 4.3, -58], map: [76, 49] },
  { name: '杉林の木陰', subtitle: '木漏れ日の中で、深呼吸をひとつ。', position: [57, 2.4, -34], look: [40, 9, -76], map: [141, 47] },
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
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, this.mobile ? 1.4 : 1.7));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    // Buildings and trees are static: only recompute shadows after lighting changes.
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
    this.quality = 'high';
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
    this.bindControls();
    this.resize();
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(container);
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
    for (const kind of ['grass', 'path', 'roof', 'wood', 'plaster', 'leaf']) {
      const map = this.texture(kind);
      this.materials[kind] = new THREE.MeshStandardMaterial({ map, roughness: kind === 'leaf' ? .88 : 1, bumpMap: map, bumpScale: kind === 'roof' ? .3 : .1 });
    }
    const loader = new THREE.TextureLoader();
    // Image-search sources: OpenGameArt ground textures and EveryTexture gravel.
    for (const [kind,file] of [['grass','grass.jpg'],['path','gravel.jpg']]) {
      const map=loader.load(`${import.meta.env.BASE_URL}textures/${file}`,()=>{this.renderer.shadowMap.needsUpdate=true;});
      map.wrapS=map.wrapT=THREE.RepeatWrapping;map.colorSpace=THREE.SRGBColorSpace;
      map.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy());
      this.materials[kind].map=map;this.materials[kind].bumpMap=map;this.materials[kind].bumpScale=kind==='path'?.16:.10;
    }
    this.materials.grass.map.repeat.set(75,75);
    this.materials.darkWood = new THREE.MeshStandardMaterial({ color: 0x383729, roughness: .97, map: this.materials.wood.map });
    this.materials.stone = new THREE.MeshStandardMaterial({ color: 0x858475, roughness: 1 });
    this.materials.glass = new THREE.MeshStandardMaterial({ color: 0x555c48, metalness: .35, roughness: .24 });
  }
  buildLights() {
    this.hemi = new THREE.HemisphereLight(0xd5e9ff, 0x455b2c, 1.55);
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
    this.sunDirection = new THREE.Vector3(-.45, .74, .3).normalize();
    u.sunPosition.value.copy(this.sunDirection);
    const generator = new THREE.PMREMGenerator(this.renderer);
    this.environment = generator.fromScene(this.sky, .08, .1, 1600);
    this.scene.environment = this.environment.texture;
    this.scene.environmentIntensity = .4;
    generator.dispose();
  }
  addBox(w, h, d, x, y, z, material, parent = this.scene) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
    mesh.position.set(x, y, z); mesh.castShadow = true; mesh.receiveShadow = true;
    parent.add(mesh); this.staticMeshes.push(mesh); return mesh;
  }
  buildTerrain() { buildLand(this); }
  buildWater() {
    this.water = new Water(fieldWaterGeometry(), {
      textureWidth: this.mobile ? 256 : 512, textureHeight: this.mobile ? 256 : 512,
      waterNormals: this.texture('normal',128),sunDirection:this.sunDirection,
      sunColor:0xfff3dc,waterColor:0x56743d,distortionScale:.17,fog:true,
    });
    this.water.rotation.x=-Math.PI/2;this.water.material.uniforms.size.value=3;
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
      for (const s of [-1, 1]) { const x = p[0] - dz / len * width / 2 * s, z = p[1] + dx / len * width / 2 * s; vertices.push(x, height + Math.max(0, groundHeight(x, z)), z); uvs.push((s + 1) / 2, distance / 4); }
      if (i < points.length - 1) { const j = i * 2; indices.push(j, j + 1, j + 2, j + 1, j + 3, j + 2); }
    }
    const geometry = new THREE.BufferGeometry(); geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3)); geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2)); geometry.setIndex(indices); geometry.computeVertexNormals();
    const mesh = new THREE.Mesh(geometry, material); mesh.receiveShadow = true; this.scene.add(mesh); return mesh;
  }
  buildPaths() {
    const path=[],side=[];
    for(let z=126;z>=-106;z-=1)path.push([this.pathX(z),z]);
    const verge=new THREE.MeshStandardMaterial({color:0x6f8543,roughness:1,map:this.materials.grass.map});
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
    const material = this.materials.roof; material.side = THREE.DoubleSide;
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
    this.colliders.push({ x,z,r:Math.max(w,d)*.6 });
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
    // Dark triangular smoke vent in the upper front of the thatched roof.
    const triangle = new THREE.BufferGeometry();
    triangle.setAttribute('position',new THREE.Float32BufferAttribute([-1.6,6.3,d*.47+.6,1.6,6.3,d*.47+.6,0,8.05,d*.47-.4],3));triangle.computeVertexNormals();
    const vent = new THREE.Mesh(triangle,this.materials.darkWood);house.add(vent);this.staticMeshes.push(vent);
    for(let s=0;s<6;s++)this.addBox(.07,.66,.08,-.64+s*.26,6.75,d*.47+.4,this.materials.wood,house);
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
    material.onBeforeCompile=shader=>{
      shader.uniforms.uWind=this.windUniform;shader.uniforms.uStrength=this.windStrength;
      shader.vertexShader='uniform float uWind; uniform float uStrength; varying float vHeight;\n'+shader.vertexShader;
      shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>
        vHeight = position.y;
        vec4 root = instanceMatrix * vec4(0.,0.,0.,1.);
        transformed.x += sin(uWind * 1.4 + root.x*.4 + root.z*.18) * position.y * position.y * .15 * uStrength;
        transformed.z += cos(uWind + root.x*.22 + root.z*.24) * position.y * position.y * .08 * uStrength;`);
      shader.fragmentShader='varying float vHeight;\n'+shader.fragmentShader;
      shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>','#include <color_fragment>\n diffuseColor.rgb *= mix(vec3(.38,.55,.2), vec3(1.15,1.13,.73), smoothstep(0.,.95,vHeight));');
    };
    const positions=[];
    const spacing=this.mobile?.75:.64;
    for(const f of fields)for(let z=f.z1+.35;z<f.z2-.35;z+=spacing)for(let x=f.x1+.35;x<f.x2-.35;x+=spacing){
      if(Math.abs(x-this.pathX(z))<2.3)continue;
      const young=f.young;
      if(young&&(Math.round(x/spacing)%2||Math.round(z/spacing)%2))continue;
      positions.push({x:x+range(-.07,.07),z:z+range(-.07,.07),y:f.y+.12,height:young?range(.28,.42):range(.72,1.02)});
    }
    const perClump=this.mobile?3:4;
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
        c.setHSL(range(.195,.245), range(.62,.81), range(.46,.63));
        tile.setColorAt(i++, c);
      }
      tile.receiveShadow = true;
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
      if(this.paused)return;drag={id:e.pointerId,x:e.clientX,y:e.clientY};canvas.setPointerCapture(e.pointerId);canvas.style.cursor='grabbing';
    });
    canvas.addEventListener('pointermove',e=>{
      if(!drag||drag.id!==e.pointerId||this.paused)return;
      this.transition=null;
      this.yaw-=(e.clientX-drag.x)*.003*(this.sensitivity??.8);
      this.pitch=clamp(this.pitch-(e.clientY-drag.y)*.0024*(this.sensitivity??.8),-1.18,1.1);
      drag.x=e.clientX;drag.y=e.clientY;
    });
    const release=()=>{drag=null;canvas.style.cursor='grab';};
    canvas.addEventListener('pointerup',release);canvas.addEventListener('pointercancel',release);canvas.style.cursor='grab';
    window.addEventListener('keydown',e=>{
      if(this.paused||e.target.matches('input,button,a,select,textarea'))return;
      if(['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','ShiftLeft','ShiftRight'].includes(e.code)){
        e.preventDefault();
        if (!this.walking) this.setWalking(true);
        this.transition=null;
        this.keys.add(e.code);
      }
    });
    window.addEventListener('keyup',e=>this.keys.delete(e.code));
    window.addEventListener('blur',()=>this.resetInput());
    document.addEventListener('visibilitychange',()=>{if(document.hidden)this.resetInput();});
    canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();this.callbacks.onError?.('グラフィックの接続が中断されました。ページを再読み込みしてください。');});
  }
  resetInput(){this.keys.clear();this.joy.x=this.joy.y=0;}
  setWalking(value) {
    this.walking=value;this.resetInput();this.callbacks.onWalking?.(value);
    if(value){this.transition={start:this.camera.position.clone(),end:new THREE.Vector3(this.camera.position.x,groundHeight(this.camera.position.x,this.camera.position.z)+1.96,this.camera.position.z),startYaw:this.yaw,endYaw:this.yaw,startPitch:this.pitch,endPitch:0,elapsed:0,duration:1.5};}
    else this.goTo(0,false);
  }
  goTo(index,walk=this.walking){
    const spot=spots[index],target=new THREE.Vector3().fromArray(spot.position);
    if(walk)target.y=groundHeight(target.x,target.z)+1.96;
    const dummy=new THREE.PerspectiveCamera();dummy.rotation.order='YXZ';dummy.position.copy(target);dummy.lookAt(...spot.look);
    let endYaw=dummy.rotation.y;while(endYaw-this.yaw>Math.PI)endYaw-=Math.PI*2;while(endYaw-this.yaw<-Math.PI)endYaw+=Math.PI*2;
    this.transition={start:this.camera.position.clone(),end:target,startYaw:this.yaw,endYaw,startPitch:this.pitch,endPitch:dummy.rotation.x,elapsed:0,duration:2};
    this.callbacks.onSpot?.(index);
  }
  setTime(value){
    this.timeOfDay=value;
    const settings={morning:{sun:[-95,35,-10],color:0xffecd0,intensity:2.8,hemi:1.75,fog:0xc8d9ce,density:.0038,exposure:1.03,sky:2.8},day:{sun:[-70,110,35],color:0xfff2d1,intensity:3.5,hemi:2.1,fog:0xc3d3c2,density:.0025,exposure:1.12,sky:2.6},evening:{sun:[-130,21,30],color:0xffb45e,intensity:3.2,hemi:1.1,fog:0xd9b68e,density:.0032,exposure:1.05,sky:7}}[value];
    this.sun.position.fromArray(settings.sun);this.sun.color.set(settings.color);this.sun.intensity=settings.intensity;this.hemi.intensity=settings.hemi;
    this.hemi.color.set(value==='evening'?0xe3c4a1:0xd8edff);
    this.scene.fog.color.set(settings.fog);this.scene.fog.density=settings.density;
    this.renderer.toneMappingExposure=settings.exposure;
    this.sunDirection.copy(this.sun.position).normalize();
    this.sky.material.uniforms.sunPosition.value.copy(this.sunDirection);this.sky.material.uniforms.turbidity.value=settings.sky;
    this.water.material.uniforms.sunDirection.value.copy(this.sunDirection);this.water.material.uniforms.sunColor.value.set(settings.color);
    this.clouds.forEach(c=>c.material.color.set(value==='evening'?0xffd0a1:0xffffff));
    this.renderer.shadowMap.needsUpdate = true;
  }
  setQuality(value){
    this.quality=value;
    const ratio={low:.8,high:this.mobile?1.4:1.7,ultra:2}[value];
    this.renderer.setPixelRatio(Math.min(devicePixelRatio,ratio));
    this.renderer.shadowMap.enabled=value!=='low';
    const size=value==='ultra'?4096:2048;
    this.sun.shadow.mapSize.set(size,size);
    if(this.sun.shadow.map){this.sun.shadow.map.dispose();this.sun.shadow.map=null;}
    this.renderer.shadowMap.needsUpdate = true;
    this.resize();
  }
  resize(){const w=this.container.clientWidth,h=this.container.clientHeight;this.camera.aspect=w/h;this.camera.updateProjectionMatrix();this.renderer.setSize(w,h);}
  screenshot(){this.renderer.render(this.scene,this.camera);return this.renderer.domElement.toDataURL('image/png');}
  thumbnails(){
    const position=this.camera.position.clone(),rotation=this.camera.rotation.clone();const result=[];
    const width=this.container.clientWidth,height=this.container.clientHeight,ratio=this.renderer.getPixelRatio();
    this.renderer.setPixelRatio(1);this.renderer.setSize(480,240,false);this.camera.aspect=2;this.camera.updateProjectionMatrix();
    for(const spot of spots){this.camera.position.fromArray(spot.position);this.camera.lookAt(...spot.look);this.renderer.render(this.scene,this.camera);result.push(this.renderer.domElement.toDataURL('image/jpeg',.82));}
    this.camera.position.copy(position);this.camera.rotation.copy(rotation);this.renderer.setPixelRatio(ratio);this.renderer.setSize(width,height,false);this.camera.aspect=width/height;this.camera.updateProjectionMatrix();return result;
  }
  tick(){
    const dt=Math.min(this.clock.getDelta(),.06);if(document.hidden)return;
    this.elapsed+=dt;
    if(!this.paused)this.life.update(dt);
    if(Math.floor(this.elapsed*8)!==this.lastShadowTick){this.lastShadowTick=Math.floor(this.elapsed*8);this.renderer.shadowMap.needsUpdate=true;}
    this.windUniform.value=this.elapsed;this.windStrength.value=this.wind;
    this.water.material.uniforms.time.value+=dt*.32*this.wind;
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
        const allowed=(x,z)=>!this.colliders.some(c=>Math.hypot(x-c.x,z-c.z)<c.r)&&this.life.canEnter(x,z);
        if(allowed(pos.x+dx,pos.z))pos.x=clamp(pos.x+dx,-116,116);
        if(allowed(pos.x,pos.z+dz))pos.z=clamp(pos.z+dz,-106,126);
        pos.y=THREE.MathUtils.lerp(pos.y,groundHeight(pos.x,pos.z)+1.96+Math.sin(this.elapsed*7)*.023,Math.min(1,dt*10));
      }
    }
    this.camera.rotation.set(this.pitch,this.yaw,0,'YXZ');
    for(const bird of this.birds){const d=bird.userData,t=this.elapsed*.07+d.offset;bird.position.set(Math.sin(t)*d.radius,d.height+Math.sin(t*2)*2,-64+Math.cos(t)*d.radius*.5);bird.rotation.y=-t;bird.children.forEach((w,i)=>w.rotation.z=Math.sin(this.elapsed*5+d.offset)*(i===0?1:-1)*.35);}
    this.clouds.forEach((c,i)=>c.position.x+=dt*.13*(1+i%3));
    if(this.callbacks.onPosition&&Math.floor(this.elapsed*5)!==this.lastMapTick){this.lastMapTick=Math.floor(this.elapsed*5);this.callbacks.onPosition(this.camera.position);}
    this.renderer.render(this.scene,this.camera);
    if(!this.ready){this.ready=true;this.callbacks.onReady?.();}
  }
}
