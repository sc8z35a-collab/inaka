import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { noise, smooth } from './terrain.js';
import { foliageTexture, buildCumulus } from './nature.js';

// Metres, not scaled scenery: 696² / 232² = nine times the original walking area.
export const plainsBounds = { minX: -348, maxX: 348, minZ: -348, maxZ: 348 };
const baseHeight = (x, z) => 2 + noise(x * .007 + 4, z * .009) * 3 + z * .002;
const villages = new Set(['1,2', '2,2', '7,5', '8,5', '5,0', '5,1']);
const types = ['wheat', 'green', 'soil', 'green', 'water', 'flowers', 'green', 'wheat', 'soil'];
export const plainsFields = [];
const grid = new Map();
for (let row = 0; row < 9; row++) for (let col = 0; col < 10; col++) {
  if (villages.has(`${col},${row}`)) continue;
  const x1 = -326 + col * 66, z1 = -316 + row * 60;
  const f = { x1, x2: x1 + 58, z1, z2: z1 + 52, row, col,
    kind: types[(col * 3 + row * 5 + Math.floor(col / 3)) % types.length] };
  if (col === 0 && row === 5) f.kind = 'wheat';
  if (col === 3 && row === 3) f.kind = 'water';
  if (col === 8 && row === 7) f.kind = 'flowers';
  f.y = baseHeight(x1 + 29, z1 + 26);
  plainsFields.push(f); grid.set(`${col},${row}`, f);
}
export function plainsHeight(x, z) {
  let y = baseHeight(x, z);
  const f = grid.get(`${Math.floor((x + 330) / 66)},${Math.floor((z + 320) / 60)}`);
  if (f) {
    const outside = Math.max(f.x1 - x, x - f.x2, f.z1 - z, z - f.z2, 0);
    y = THREE.MathUtils.lerp(f.y, y, smooth(outside / 4));
  }
  // A walkable southern lookout, with low ridges well outside the open plain.
  y += smooth((z - 216) / 124) * (34 + 18 * noise(x * .009, z * .007));
  const edge = Math.max(smooth((Math.abs(x) - 365) / 240), smooth((-z - 355) / 260));
  return y + edge * (35 + 90 * noise(x * .005 + 8, z * .004));
}
export const plainsSurface = (x, z) => plainsHeight(x, z) + .17;
const spot = (name, subtitle, x, z, look) => ({ name, subtitle, position: [x, plainsSurface(x, z) + 1.7, z], look });
export const plainsSpots = [
  spot('大地を見渡す丘', 'どこまでも続く、パッチワークの田園。', 12, 310, [-30, 3, -170]),
  spot('黄金の麦畑', '穂先を揺らす風と、まっすぐな農道。', -264, 38, [-295, 4, 7]),
  spot('農家の小さな集落', '畑の向こうに、いつもの暮らし。', -230, -200, [-214, 5, -179]),
  spot('空を映す水田', '水面にも、もうひとつの青空。', -132, -80, [-100, 3, -112]),
  spot('花畑の散歩道', '夏色の花と、丘を渡る風。', 198, 100, [225, 4, 126]),
  spot('ポプラの並木道', '木陰から木陰へ、のんびり歩く。', 330, 8, [330, 5, -140]),
];
const palette = { wheat: '#baa444', green: '#467827', soil: '#816348', water: '#658a91', flowers: '#c1ad43' };
let seed = 518293;
function random() { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296; }
const between = (a, b) => a + random() * (b - a);
function texture(canvas, world) {
  const map = new THREE.CanvasTexture(canvas); map.colorSpace = THREE.SRGBColorSpace;
  map.anisotropy = Math.min(16, world.renderer.capabilities.getMaxAnisotropy());
  return map;
}
function fieldTexture(kind, world) {
  const canvas = document.createElement('canvas'); canvas.width = canvas.height = 2048;
  const ctx = canvas.getContext('2d'); ctx.fillStyle = palette[kind]; ctx.fillRect(0, 0, 2048, 2048);
  for (let x = 0; x < 2048; x += 64) {
    const gradient = ctx.createLinearGradient(x, 0, x + 64, 0);
    gradient.addColorStop(0, '#18241655'); gradient.addColorStop(.4, '#ffffc51c'); gradient.addColorStop(1, '#151a153a');
    ctx.fillStyle = gradient; ctx.fillRect(x, 0, 64, 2048);
  }
  for (let i = 0; i < 52000; i++) {
    ctx.fillStyle = random() > .5 ? '#f7edaa28' : '#19290f32';
    ctx.fillRect(random() * 2048, random() * 2048, between(1, 5), between(2, 10));
  }
  const map = texture(canvas, world); map.wrapS = map.wrapT = THREE.RepeatWrapping; map.repeat.set(2, 3);
  return map;
}
function cropTexture(kind, world) {
  const canvas = document.createElement('canvas'); canvas.width = canvas.height = 1024;
  const ctx = canvas.getContext('2d');
  for (let i = 0; i < 32; i++) {
    const x = between(40, 980), top = between(100, 490), bend = between(-90, 90);
    ctx.strokeStyle = kind === 'wheat' ? '#a48c33' : '#4c772c'; ctx.lineWidth = between(3, 6);
    ctx.beginPath(); ctx.moveTo(x, 1024); ctx.quadraticCurveTo(x, 550, x + bend, top); ctx.stroke();
    for (let j = 0; j < 4; j++) {
      const y = 930 - j * 125, side = j % 2 ? -1 : 1;
      ctx.fillStyle = kind === 'wheat' ? '#b8a443' : ['#719a36', '#92ad45', '#356828'][j % 3];
      ctx.beginPath(); ctx.moveTo(x, y); ctx.quadraticCurveTo(x + side * 100, y - 140, x + side * 140, y - 100); ctx.quadraticCurveTo(x + side * 35, y - 50, x, y + 12); ctx.fill();
    }
    if (kind === 'wheat') {
      for (let j = 0; j < 11; j++) {
        ctx.fillStyle = j % 2 ? '#e9cf72' : '#c3a54b';
        ctx.beginPath(); ctx.ellipse(x + bend + (j % 2 ? 9 : -9), top + j * 9, 8, 15, j % 2 ? .5 : -.5, 0, Math.PI * 2); ctx.fill();
      }
    } else if (kind === 'flowers') {
      for (let j = 0; j < 8; j++) {
        const a = j * Math.PI / 4; ctx.fillStyle = '#f5d34c'; ctx.beginPath();
        ctx.ellipse(x + bend + Math.cos(a) * 26, top + Math.sin(a) * 26, 13, 24, a - Math.PI / 2, 0, Math.PI * 2); ctx.fill();
      }
      ctx.fillStyle = '#644a2a'; ctx.beginPath(); ctx.arc(x + bend, top, 17, 0, Math.PI * 2); ctx.fill();
    }
  }
  return texture(canvas, world);
}
function sign(world, x, z, title, subtitle, rotation = 0) {
  const group = new THREE.Group(); group.position.set(x, plainsHeight(x, z), z); group.rotation.y = rotation; world.scene.add(group);
  const c = document.createElement('canvas'); c.width = 1024; c.height = 384;
  const ctx = c.getContext('2d'); ctx.fillStyle = '#eff0dc'; ctx.fillRect(0, 0, c.width, c.height);
  ctx.strokeStyle = '#59714d'; ctx.lineWidth = 14; ctx.strokeRect(18, 18, 988, 348);
  ctx.fillStyle = '#344e3c'; ctx.textAlign = 'center'; ctx.font = '500 78px sans-serif'; ctx.fillText(title, 512, 162);
  ctx.font = '34px sans-serif'; ctx.fillText(subtitle, 512, 260);
  const board = new THREE.Mesh(new THREE.BoxGeometry(3.7, 1.38, .14), world.materials.wood); board.position.y = 2.1; group.add(board);
  const face = new THREE.Mesh(new THREE.PlaneGeometry(3.6, 1.3), new THREE.MeshStandardMaterial({ map: texture(c, world), roughness: .9 }));
  face.position.set(0, 2.1, .08); group.add(face);
  for (const dx of [-1.25, 1.25]) world.addBox(.12, 2.2, .12, dx, 1.1, 0, world.materials.wood, group);
  world.colliders.push({ x, z, halfWidth: 1.9, halfDepth: .16, rotation });
}
function bench(world, x, z, angle = 0) {
  const group = new THREE.Group(); group.position.set(x, plainsHeight(x, z), z); group.rotation.y = angle; world.scene.add(group);
  world.addBox(2.7, .15, .75, 0, .62, 0, world.materials.wood, group);
  world.addBox(2.7, .5, .1, 0, 1.1, -.34, world.materials.wood, group);
  for (const s of [-1, 1]) world.addBox(.14, .62, .65, s * 1.05, .31, 0, world.materials.darkWood, group);
  world.colliders.push({ x, z, halfWidth: 1.4, halfDepth: .4, rotation: angle });
}
function buildGround(world) {
  const landMap = world.materials.grass.map.clone(); landMap.repeat.set(28, 28);
  const landMaterial = new THREE.MeshStandardMaterial({ map: landMap, color: 0x829459, roughness: 1, vertexColors: true });
  const color = new THREE.Color();
  // Nine one-metre terrain tiles. Distant rings have their centre removed.
  const tile = (size, segments, cx, cz, cutout = false) => {
    const geometry = new THREE.PlaneGeometry(size, size, segments, segments); geometry.rotateX(-Math.PI / 2);
    const p = geometry.attributes.position, colors = [];
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i) + cx, z = p.getZ(i) + cz;
      p.setXYZ(i, x, plainsHeight(x, z), z);
      color.setHSL(.22 + noise(x * .014, z * .014) * .025, .32, .58 + noise(x * .08, z * .08) * .2);
      colors.push(color.r, color.g, color.b);
    }
    if (cutout) {
      const indices = geometry.index.array, keep = [];
      for (let i = 0; i < indices.length; i += 3) {
        const x = (p.getX(indices[i]) + p.getX(indices[i + 1]) + p.getX(indices[i + 2])) / 3;
        const z = (p.getZ(indices[i]) + p.getZ(indices[i + 1]) + p.getZ(indices[i + 2])) / 3;
        if (Math.abs(x) >= 360 || Math.abs(z) >= 360) keep.push(indices[i], indices[i + 1], indices[i + 2]);
      }
      geometry.setIndex(keep);
    }
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3)); geometry.computeVertexNormals();
    const mesh = new THREE.Mesh(geometry, landMaterial); mesh.receiveShadow = true; world.scene.add(mesh);
  };
  for (let z = -240; z <= 240; z += 240) for (let x = -240; x <= 240; x += 240) tile(240, 240, x, z);
  tile(2400, 240, 0, 0, true);
  const fieldMaterials = Object.fromEntries(Object.keys(palette).map(kind => {
    const map = fieldTexture(kind, world);
    return [kind, new THREE.MeshStandardMaterial({ map, roughness: .94, bumpMap: map, bumpScale: kind === 'soil' ? .22 : .07 })];
  }));
  for (const f of plainsFields) {
    const plane = new THREE.PlaneGeometry(58, 52); plane.rotateX(-Math.PI / 2);
    const field = new THREE.Mesh(plane, fieldMaterials[f.kind]); field.position.set(f.x1 + 29, f.y + .025, f.z1 + 26);
    field.receiveShadow = true; world.scene.add(field);
  }
  for (let layer = 0; layer < 3; layer++) {
    const g = new THREE.PlaneGeometry(2600, 160, 200, 1), p = g.attributes.position;
    for (let i = 0; i < p.count; i++) p.setY(i, p.getY(i) > 0 ? 60 + layer * 16 + noise(p.getX(i) * .007, layer + 2) * 85 : -25);
    const mesh = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ color: [0x587e83, 0x73979f, 0x96b9c4][layer], side: THREE.DoubleSide }));
    mesh.position.z = -750 - layer * 190; world.scene.add(mesh);
  }
}
function buildRoads(world) {
  const gravel = world.materials.path.clone(); gravel.color.set(0xc0b797);
  const verge = new THREE.MeshStandardMaterial({ color: 0x829b4b, roughness: 1 });
  const road = (points, width = 3.7) => { world.ribbon(points, width + 1.5, verge, .06); world.ribbon(points, width, gravel, .14); };
  for (let col = 0; col <= 10; col++) {
    const x = -330 + col * 66, points = [];
    for (let z = -338; z <= 222; z += 2) points.push([x, z]);
    road(points, col === 5 || col === 10 ? 4.6 : 3.3);
  }
  for (let row = 0; row <= 9; row++) {
    const z = -320 + row * 60, points = [];
    for (let x = -338; x <= 338; x += 2) points.push([x, z]);
    road(points, row === 4 || row === 9 ? 4.6 : 3.3);
  }
  // Gentle meandering paths connect the lookout to both sides of the fields.
  for (const side of [-1, 1]) {
    const points = [];
    for (let i = 0; i <= 130; i++) { const t = i / 130; points.push([side * 330 * t, 310 - 90 * t + 15 * Math.sin(t * Math.PI * 2)]); }
    road(points, 3);
  }
  const path = []; for (let z = 220; z <= 344; z++) path.push([0, z]); road(path, 3.5);
}
function buildCrops(world) {
  world.windUniform = { value: 0 }; world.windStrength = { value: 1 };
  world.cropTiles = [];
  const geometry = new THREE.PlaneGeometry(1.3, 1, 1, 3); geometry.translate(0, .5, 0);
  const materials = new Map();
  for (const kind of ['wheat', 'green', 'flowers']) {
    const material = new THREE.MeshStandardMaterial({ map: cropTexture(kind, world), alphaTest: .42, side: THREE.DoubleSide, roughness: .95 });
    material.onBeforeCompile = shader => {
      shader.uniforms.uWind = world.windUniform; shader.uniforms.uStrength = world.windStrength;
      shader.vertexShader = 'uniform float uWind; uniform float uStrength;\n' + shader.vertexShader;
      shader.vertexShader = shader.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>
        vec4 root = instanceMatrix * vec4(0.,0.,0.,1.);
        transformed.x += sin(uWind * 1.3 + root.x * .17 + root.z * .12) * position.y * position.y * .13 * uStrength;`);
    };
    materials.set(kind, material);
  }
  const dummy = new THREE.Object3D(), color = new THREE.Color();
  for (const f of plainsFields) {
    if (f.kind === 'soil') continue;
    const kind = f.kind === 'water' ? 'green' : f.kind;
    const spacing = f.kind === 'water' ? 2.1 : 1.45, positions = [];
    for (let z = f.z1 + .8; z < f.z2 - .7; z += spacing) for (let x = f.x1 + .8; x < f.x2 - .7; x += spacing) positions.push([x, z]);
    const mesh = new THREE.InstancedMesh(geometry, materials.get(kind), positions.length * 2);
    let i = 0;
    for (const [x, z] of positions) for (let side = 0; side < 2; side++) {
      dummy.position.set(x + between(-.12, .12), f.y + .04, z + between(-.12, .12));
      dummy.rotation.set(0, side * Math.PI / 2 + .12, 0);
      dummy.scale.set(1, (f.kind === 'water' ? .3 : kind === 'flowers' ? 1.15 : .85) * between(.8, 1.15), 1);
      dummy.updateMatrix(); mesh.setMatrixAt(i, dummy.matrix);
      color.setRGB(between(.86, 1), between(.91, 1), between(.8, .97)); mesh.setColorAt(i++, color);
    }
    mesh.receiveShadow = true; // Alpha crop shadows intentionally omitted; avoid hundreds of thousands of shadow casters.
    mesh.computeBoundingSphere(); mesh.boundingSphere.radius += .3;
    mesh.userData.center = new THREE.Vector2(f.x1 + 29, f.z1 + 26);
    world.scene.add(mesh); world.cropTiles.push(mesh);
  }
  const waterGeometries = plainsFields.filter(f => f.kind === 'water').map(f => {
    const g = new THREE.PlaneGeometry(58, 52); g.rotateX(-Math.PI / 2); g.translate(f.x1 + 29, f.y + .08, f.z1 + 26); return g;
  });
  const normal = world.texture('normal', 512); normal.repeat.set(28, 28);
  world.water = new THREE.Mesh(mergeGeometries(waterGeometries), new THREE.MeshStandardMaterial({ color: 0x72989a, metalness: .55, roughness: .23, normalMap: normal, normalScale: new THREE.Vector2(.045, .045), envMapIntensity: 1.3 }));
  world.water.receiveShadow = true; world.scene.add(world.water); waterGeometries.forEach(g => g.dispose());
}
function buildTrees(world) {
  const map = foliageTexture(true), leafMap = foliageTexture();
  const treeMaterial = new THREE.MeshLambertMaterial({ map, alphaTest: .42, side: THREE.DoubleSide, color: 0xaac08e });
  const leafMaterial = new THREE.MeshLambertMaterial({ map: leafMap, alphaTest: .4, side: THREE.DoubleSide, color: 0xb6cc98 });
  const plane = new THREE.PlaneGeometry(1, 1); plane.translate(0, .5, 0);
  const tiles = new Map(), trunks = [];
  const tree = (x, z, h, narrow = false, solid = false) => {
    const key = `${Math.floor(x / 100)},${Math.floor(z / 100)}`;
    if (!tiles.has(key)) tiles.set(key, []);
    tiles.get(key).push({ x, z, h, narrow });
    if (solid) { trunks.push({ x, z, h, narrow }); world.colliders.push({ x, z, r: .32 }); }
  };
  for (let z = -650; z < 640; z += 13) for (let x = -700; x < 700; x += 13) {
    if (Math.abs(x) < 365 && z > -355 && z < 352) continue;
    if (random() < .15) continue;
    tree(x + between(-4, 4), z + between(-4, 4), between(8, 19));
  }
  for (let z = -302; z <= 215; z += 19) tree(338, z, between(14, 19), true, true);
  for (let x = -315; x <= 315; x += 26) {
    if (Math.abs(x) < 28) continue;
    tree(x, 335 + Math.sin(x * .02) * 5, between(9, 14), false, true);
  }
  for (const [cx, cz] of [[-228, -183], [170, 9], [37, -282]]) {
    for (let i = 0; i < 7; i++) tree(cx - 21 + i * 6, cz + 23, between(8, 12), false, true);
  }
  const d = new THREE.Object3D();
  for (const points of tiles.values()) {
    const mesh = new THREE.InstancedMesh(plane, treeMaterial, points.length * 3); let i = 0;
    for (const p of points) for (let side = 0; side < 3; side++) {
      d.position.set(p.x, plainsHeight(p.x, p.z), p.z); d.rotation.set(0, side * Math.PI / 3, 0);
      d.scale.set(p.h * (p.narrow ? .36 : .83), p.h, 1); d.updateMatrix(); mesh.setMatrixAt(i++, d.matrix);
    }
    mesh.castShadow = mesh.receiveShadow = true; mesh.computeBoundingSphere(); world.scene.add(mesh);
  }
  const bark = new THREE.InstancedMesh(new THREE.CylinderGeometry(.15, .28, 1, 8), world.materials.wood, trunks.length);
  const leaves = new THREE.InstancedMesh(new THREE.PlaneGeometry(1, 1), leafMaterial, trunks.length * 16); let n = 0;
  trunks.forEach((t, i) => {
    const y = plainsHeight(t.x, t.z); d.position.set(t.x, y + t.h * .27, t.z); d.rotation.set(0, 0, 0); d.scale.set(1, t.h * .54, 1); d.updateMatrix(); bark.setMatrixAt(i, d.matrix);
    for (let j = 0; j < 16; j++) {
      const a = j * 2.4, radius = t.h * (t.narrow ? .08 : .18);
      d.position.set(t.x + Math.cos(a) * radius, y + t.h * between(.5, .88), t.z + Math.sin(a) * radius);
      d.rotation.set(between(-.7, .7), a, between(-.5, .5)); d.scale.setScalar(t.h * (t.narrow ? .23 : .35)); d.updateMatrix(); leaves.setMatrixAt(n++, d.matrix);
    }
  });
  bark.castShadow = bark.receiveShadow = leaves.castShadow = leaves.receiveShadow = true; world.scene.add(bark, leaves);
}
function buildFarms(world) {
  for (const [x, z, w, d, r] of [[-225,-178,12,8,.06],[-190,-177,10,7,-.09],[169,8,12,8,0],[214,6,10,8,.1],[39,-285,12,9,0]]) world.house(x, z, w, d, r);
  const red = new THREE.MeshStandardMaterial({ color: 0x864b3c, roughness: .85 });
  const metal = new THREE.MeshStandardMaterial({ color: 0xc2c7b8, roughness: .55, metalness: .3 });
  for (const [x, z] of [[-245,-170],[237,13],[44,-232]]) {
    const y = plainsHeight(x, z);
    world.addBox(11, 4, 7, x, y + 2, z, red);
    world.addBox(12, .25, 8.2, x, y + 4.2, z, metal).rotation.z = .08;
    world.addBox(3, 3.2, .08, x, y + 1.6, z + 3.55, world.materials.darkWood);
    world.colliders.push({ x, z, halfWidth: 5.6, halfDepth: 3.6, rotation: 0 });
    const silo = new THREE.Mesh(new THREE.CylinderGeometry(2, 2, 7, 20), metal); silo.position.set(x + 9, y + 3.5, z); silo.castShadow = true; world.scene.add(silo);
    const cap = new THREE.Mesh(new THREE.ConeGeometry(2.1, 1.6, 20), metal); cap.position.set(x + 9, y + 7.8, z); cap.castShadow = true; world.scene.add(cap);
    world.colliders.push({ x: x + 9, z, r: 2.1 });
  }
  // Tunnel greenhouses and visible ribs, placed inside the reserved farm plots.
  const film = new THREE.MeshStandardMaterial({ color: 0xe1ece5, roughness: .38, metalness: .08, transparent: true, opacity: .64, side: THREE.DoubleSide, depthWrite: false });
  for (const x of [-198, -187, -176]) {
    const z = -155, y = plainsHeight(x, z);
    const g = new THREE.CylinderGeometry(3.5, 3.5, 16, 24, 1, true, -Math.PI / 2, Math.PI); g.rotateX(-Math.PI / 2);
    const roof = new THREE.Mesh(g, film); roof.position.set(x, y + .1, z); world.scene.add(roof);
    for (let dz = -8; dz <= 8; dz += 2) {
      const pts = []; for (let i = 0; i <= 24; i++) { const a = i / 24 * Math.PI; pts.push(new THREE.Vector3(x + Math.cos(a) * 3.52, y + .12 + Math.sin(a) * 3.52, z + dz)); }
      world.scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: 0x98a9a1 })));
    }
    world.colliders.push({ x, z, halfWidth: 3.55, halfDepth: 8.1, rotation: 0 });
  }
  // Hay bales, small tractor, and a roadside produce stall reward exploring.
  const straw = new THREE.MeshStandardMaterial({ color: 0xc8ab61, map: world.materials.roof.map, roughness: 1 });
  for (let i = 0; i < 12; i++) {
    const x = -308 + (i % 4) * 6, z = -247 + Math.floor(i / 4) * 5;
    const bale = new THREE.Mesh(new THREE.CylinderGeometry(.95, .95, 1.5, 16), straw); bale.rotation.z = Math.PI / 2; bale.position.set(x, plainsHeight(x, z) + .95, z); bale.castShadow = true; world.scene.add(bale); world.colliders.push({ x, z, r: 1 });
  }
  const tractor = new THREE.Group(), ty = plainsHeight(195, 18); tractor.position.set(195, ty, 18); world.scene.add(tractor);
  const green = new THREE.MeshStandardMaterial({ color: 0x44734b, roughness: .55 });
  world.addBox(1.45, .75, 2.7, 0, 1.2, 0, green, tractor); world.addBox(1.7, .12, 1.7, 0, 2.6, -.65, green, tractor);
  for (const side of [-1, 1]) {
    world.addBox(.08, 1.4, .08, side * .68, 1.9, -.9, metal, tractor);
    for (const z of [-.85, 1]) {
      const radius = z < 0 ? .72 : .45;
      const wheel = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, .38, 16), world.materials.darkWood); wheel.rotation.z = Math.PI / 2; wheel.position.set(side * .88, radius, z); wheel.castShadow = true; tractor.add(wheel);
    }
  }
  world.colliders.push({ x: 195, z: 18, halfWidth: 1.2, halfDepth: 1.7, rotation: 0 });
  const x = -215, z = -204, y = plainsHeight(x, z);
  world.addBox(3.2, .2, 1.4, x, y + .95, z, world.materials.wood);
  for (const dx of [-1.4, 1.4]) world.addBox(.12, 2.4, .12, x + dx, y + 1.2, z, world.materials.wood);
  world.addBox(3.7, .16, 2, x, y + 2.5, z, green).rotation.x = .1;
  world.colliders.push({ x, z, halfWidth: 1.9, halfDepth: 1, rotation: 0 });
  const produce = new THREE.MeshStandardMaterial({ color: 0xcaa83e, roughness: .8 });
  for (let i = 0; i < 12; i++) {
    const fruit = new THREE.Mesh(new THREE.SphereGeometry(.13, 10, 8), produce); fruit.position.set(x - 1.1 + (i % 6) * .4, y + 1.16, z - .25 + Math.floor(i / 6) * .5); world.scene.add(fruit);
  }
}
function buildLandmarks(world) {
  sign(world, 6, 314, 'はるか野の丘', 'PATCHWORK COUNTRYSIDE  /  696 × 696 m');
  sign(world, -257, 34, '黄金の麦畑', '風の音を聴きながら、ひと休み。');
  sign(world, -220, -207, '畑の直売所', '丘の展望台  ↑  /  並木道  →');
  sign(world, 204, 98, '夏の花畑', '花畑の先に、ポプラの並木。');
  for (const [x, z, a] of [[-7,310,Math.PI],[22,308,Math.PI],[-258,44,0],[324,95,-Math.PI/2],[194,104,0]]) bench(world,x,z,a);
  // A fence behind the outlook never blocks the panoramic view or the paths.
  for (let x = -45; x <= 45; x += 3) {
    if (Math.abs(x) < 4) continue;
    const y = plainsHeight(x, 321); world.addBox(.12, 1.05, .12, x, y + .525, 321, world.materials.wood);
    if (x < 45 && Math.abs(x + 1.5) > 4) for (const h of [.45, .88]) world.addBox(3, .08, .09, x + 1.5, plainsHeight(x + 1.5,321) + h, 321, world.materials.wood);
    world.colliders.push({ x: x + 1.5, z: 321, halfWidth: 1.5, halfDepth: .1, rotation: 0 });
  }
}
export function buildPlains(world) {
  seed = 518293;
  buildGround(world); buildRoads(world); buildCrops(world); buildTrees(world); buildFarms(world); buildLandmarks(world);
  buildCumulus(world);
  // Clouds cover the whole horizon, not only the original valley's north face.
  for (let i = 0; i < 18; i++) {
    const source = world.clouds[i % 14], cloud = source.clone(); cloud.material = source.material.clone();
    const a = i / 18 * Math.PI * 2; cloud.position.set(Math.cos(a) * 1050, between(190, 340), Math.sin(a) * 1050);
    cloud.scale.set(between(140, 250), between(65, 100), 1); world.scene.add(cloud); world.clouds.push(cloud);
  }
  world.life = { update() {}, canEnter: () => true };
  world.updateLandscape = () => {
    if ((world.navigationElapsed ?? 0) - (world.lastCropUpdate ?? -1) < .25) return;
    world.lastCropUpdate = world.navigationElapsed ?? 0;
    const radius = world.quality === 'ultra' ? 230 : world.quality === 'low' ? 115 : 175;
    const { x, z } = world.camera.position;
    for (const mesh of world.cropTiles) mesh.visible = Math.hypot(x - mesh.userData.center.x, z - mesh.userData.center.y) < radius + 40;
  };
}
