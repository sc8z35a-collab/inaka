import * as THREE from 'three';
import { groundHeight, pathX, roadZ, railZ, fields, fieldAt } from './terrain.js';
import { scatter, seeded } from './props.js';
import { canvasTexture, mesh, box, cylinder, sphere, anchor, local, cable, palette, shide, label } from './details-kit.js';

// Hand-placed village life for the original satoyama map.
const { random, range } = seeded(7310);
const gh = (world, x, z) => (world.groundHeight ?? groundHeight)(x, z);

// ---------------------------------------------------------------- 鳥居・祠・石灯籠・狐
export function torii(world, x, z, ry, s = 1) {
  const p = palette(world), g = anchor(world, x, z, ry), v = world.materials.vermilion;
  for (const side of [-1, 1]) {
    cylinder(world, .13 * s, .15 * s, 3.2 * s, side * 1.3 * s, 1.6 * s, 0, v, { parent: g });
    cylinder(world, .19 * s, .2 * s, .28 * s, side * 1.3 * s, .14 * s, 0, p.black, { parent: g });
  }
  box(world, 3.1 * s, .15 * s, .13 * s, 0, 2.55 * s, 0, v, { parent: g });
  box(world, 3.7 * s, .2 * s, .26 * s, 0, 3.12 * s, 0, v, { parent: g });
  box(world, 4.1 * s, .17 * s, .34 * s, 0, 3.33 * s, 0, p.black, { parent: g });
  for (const side of [-1, 1]) box(world, .5 * s, .17 * s, .34 * s, side * 2.2 * s, 3.4 * s, 0, p.black, { parent: g, rz: side * .22 });
  box(world, .22 * s, .55 * s, .1 * s, 0, 2.85 * s, 0, v, { parent: g });
  const plaque = canvasTexture((ctx, w, h) => {
    ctx.fillStyle = '#1d1d1d'; ctx.fillRect(0, 0, w, h); ctx.strokeStyle = '#c9a44c'; ctx.lineWidth = 8; ctx.strokeRect(6, 6, w - 12, h - 12);
    ctx.fillStyle = '#e2c46a'; ctx.font = 'bold 90px serif'; ctx.textAlign = 'center'; ctx.fillText('稲', w / 2, h * .42); ctx.fillText('荷', w / 2, h * .82);
  }, 128, 256);
  mesh(world, new THREE.PlaneGeometry(.2 * s, .4 * s), new THREE.MeshStandardMaterial({ map: plaque, roughness: .7 }), 0, 2.85 * s, .056 * s, { parent: g, merge: false, shadow: false });
  for (const side of [-1, 1]) { const [cx, cz] = local(x, z, ry, side * 1.3 * s, 0); world.colliders.push({ x: cx, z: cz, r: .22 * s }); }
}
export function stoneLantern(world, x, z, ry = 0) {
  const g = anchor(world, x, z, ry), m = world.materials.granite, p = palette(world);
  box(world, .62, .16, .62, 0, .08, 0, m, { parent: g });
  cylinder(world, .2, .26, .2, 0, .26, 0, m, { parent: g, segments: 6 });
  cylinder(world, .11, .12, .75, 0, .73, 0, m, { parent: g, segments: 10 });
  cylinder(world, .32, .2, .16, 0, 1.18, 0, m, { parent: g, segments: 6 });
  cylinder(world, .21, .21, .36, 0, 1.44, 0, m, { parent: g, segments: 6 });
  box(world, .2, .2, .44, 0, 1.45, 0, p.black, { parent: g });
  box(world, .44, .2, .2, 0, 1.45, 0, p.black, { parent: g });
  mesh(world, new THREE.ConeGeometry(.46, .3, 6), m, 0, 1.77, 0, { parent: g });
  sphere(world, .09, 0, 1.97, 0, m, { parent: g });
  world.colliders.push({ x, z, r: .38 });
  world.lanterns?.push(new THREE.Vector3(x, g.position.y + 1.45, z));
}
function kitsune(world, x, z, side) {
  const g = anchor(world, x, z, -side * .35), m = world.materials, p = palette(world);
  box(world, .55, .55, .7, 0, .27, 0, m.granite, { parent: g });
  sphere(world, .2, 0, .8, 0, m.whitePlaster, { parent: g }).scale.set(.9, 1.3, 1.1);
  sphere(world, .13, 0, 1.15, .1, m.whitePlaster, { parent: g }).scale.set(.9, .9, 1.3);
  mesh(world, new THREE.ConeGeometry(.07, .22, 8), m.whitePlaster, 0, 1.13, .3, { parent: g, rx: Math.PI / 2 });
  for (const e of [-1, 1]) mesh(world, new THREE.ConeGeometry(.045, .14, 6), m.whitePlaster, e * .07, 1.3, .06, { parent: g });
  mesh(world, new THREE.ConeGeometry(.09, .5, 8), m.whitePlaster, 0, .9, -.24, { parent: g, rx: -.9 });
  box(world, .2, .12, .02, 0, .96, .2, p.cloth, { parent: g, rx: .3 });
  world.colliders.push({ x, z, r: .4 });
}
function hokora(world, x, z, ry) {
  const g = anchor(world, x, z, ry), m = world.materials, p = palette(world);
  box(world, 1.9, .5, 1.6, 0, .25, 0, m.stone, { parent: g });
  box(world, 1.3, .12, 1.1, 0, .56, 0, m.granite, { parent: g });
  box(world, 1.0, .95, .8, 0, 1.1, -.05, m.hinoki, { parent: g });
  box(world, .72, .7, .03, 0, 1.08, .36, m.darkWood, { parent: g });
  box(world, .02, .7, .04, 0, 1.08, .38, p.black, { parent: g });
  for (const side of [-1, 1]) {
    box(world, .08, 1.1, .08, side * .52, 1.15, .36, m.hinoki, { parent: g });
    box(world, .82, .07, 1.5, side * .36, 1.83, -.02, p.copper, { parent: g, rz: side * -.52 });
    box(world, .06, .3, .06, side * .12, 2.12, .7, m.hinoki, { parent: g, rz: side * .6 });
    box(world, .06, .3, .06, side * .12, 2.12, -.74, m.hinoki, { parent: g, rz: side * .6 });
  }
  box(world, .14, .1, 1.5, 0, 2.03, -.02, p.copper, { parent: g });
  const rope = mesh(world, new THREE.TorusGeometry(.55, .045, 6, 24, Math.PI), p.rope, 0, 1.64, .42, { parent: g, rz: Math.PI });
  rope.scale.y = .2;
  for (const lx of [-.3, 0, .3]) shide(world, g, lx, 1.55, .44);
  box(world, .55, .32, .32, 0, .78, .78, m.darkWood, { parent: g });
  for (let i = -2; i <= 2; i++) box(world, .5, .02, .025, 0, .945, .78 + i * .05, p.black, { parent: g });
  cylinder(world, .04, .03, .06, .3, .65, .45, p.white, { parent: g });
  for (let i = 0; i < 3; i++) box(world, 1.5, .14, .45, 0, .07, 1.25 + i * .5, m.granite, { parent: g });
  world.colliders.push({ x, z, halfWidth: .95, halfDepth: .9, rotation: ry, r: 1.4 });
}
function shrine(world) {
  torii(world, 33, -79, 0, .9);
  hokora(world, 33, -89, 0);
  stoneLantern(world, 31, -84.5, 0); stoneLantern(world, 35, -84.5, 0);
  for (const side of [-1, 1]) kitsune(world, 33 + side * 1.9, -86.6, side);
  for (let i = 0; i < 8; i++) {
    const z = -71 - i * 1.05, x = 33 + Math.sin(i * .7) * .25;
    box(world, range(.55, .75), .08, range(.45, .6), x, gh(world, x, z) + .03, z, world.materials.granite, { ry: range(-.2, .2) });
  }
  // A great sacred cedar (御神木) wrapped in a shimenawa, beside the shrine.
  const cx = 38.5, cz = -88, cy = gh(world, cx, cz), p = palette(world);
  cylinder(world, .75, 1.05, 16, cx, cy + 8, cz, world.materials.bark, { segments: 16 });
  const band = mesh(world, new THREE.TorusGeometry(.98, .09, 8, 28), p.rope, cx, cy + 2, cz, { rx: Math.PI / 2 });
  for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2; const g = anchor(world, cx + Math.cos(a) * 1.02, cz + Math.sin(a) * 1.02, -a + Math.PI / 2, cy); shide(world, g, 0, 1.95, 0); }
  world.colliders.push({ x: cx, z: cz, r: 1.15 });
  world.bigCedar = { x: cx, z: cz, y: cy, h: 16 };
  band.userData.note = 'shimenawa';
}

// ---------------------------------------------------------------- お地蔵さま
export function jizo(world, x, z, ry) {
  const g = anchor(world, x, z, ry), m = world.materials, p = palette(world);
  for (const [lx, lz] of [[-1.05, -.45], [1.05, -.45], [-1.05, .45], [1.05, .45]]) box(world, .09, 1.55, .09, lx, .78, lz, m.darkWood, { parent: g });
  for (const side of [-1, 1]) box(world, 2.6, .05, .75, 0, 1.72, side * .3, m.kawara, { parent: g, rx: side * .38 });
  box(world, 2.6, .1, .1, 0, 1.86, 0, m.kawara, { parent: g });
  box(world, 2.3, .06, 1, 0, .03, 0, m.granite, { parent: g });
  const yellow = new THREE.MeshStandardMaterial({ color: 0xe8c33d, roughness: .9 });
  for (const i of [-1, 0, 1]) {
    const lx = i * .62, h = i === 0 ? 1 : .88;
    box(world, .34, .16, .3, lx, .14, 0, m.granite, { parent: g });
    mesh(world, new THREE.CapsuleGeometry(.13 * h, .3 * h, 4, 10), m.granite, lx, .22 + .28 * h, 0, { parent: g }).scale.z = .8;
    sphere(world, .115 * h, lx, .22 + .62 * h, .01, m.granite, { parent: g });
    mesh(world, new THREE.CylinderGeometry(.02, .17 * h, .2 * h, 12, 1, true, -Math.PI * .45, Math.PI * .9), p.cloth, lx, .22 + .44 * h, .005, { parent: g });
    mesh(world, new THREE.SphereGeometry(.122 * h, 12, 6, 0, Math.PI * 2, 0, Math.PI / 2), p.cloth, lx, .22 + .66 * h, .01, { parent: g });
  }
  for (const lx of [-.95, .95]) {
    cylinder(world, .05, .04, .16, lx, .14, .25, m.bamboo, { parent: g });
    for (let k = 0; k < 5; k++) sphere(world, .025, lx + range(-.04, .04), .27 + range(0, .06), .25 + range(-.04, .04), k % 2 ? p.white : yellow, { parent: g, shadow: false, segments: 6 });
  }
  world.colliders.push({ x, z, halfWidth: 1.2, halfDepth: .55, rotation: ry, r: 1.35 });
}

// ---------------------------------------------------------------- ポスト・バス停・電柱
export function postBox(world, x, z, ry) {
  const g = anchor(world, x, z, ry), p = palette(world);
  box(world, .5, .08, .5, 0, .04, 0, world.materials.concrete, { parent: g });
  cylinder(world, .06, .06, .35, 0, .25, 0, p.red, { parent: g });
  cylinder(world, .22, .22, .95, 0, .9, 0, p.red, { parent: g, segments: 20 });
  mesh(world, new THREE.SphereGeometry(.22, 20, 8, 0, Math.PI * 2, 0, Math.PI / 2), p.red, 0, 1.37, 0, { parent: g });
  box(world, .2, .035, .05, 0, 1.18, .205, p.black, { parent: g });
  label(world, g, '〒', 0, .95, .223, .16, .16, { bg: '#f6f4ea', fg: '#c3302a', font: 'bold 380px sans-serif' });
  world.colliders.push({ x, z, r: .3 });
}
export function busStop(world, x, z, ry) {
  const g = anchor(world, x, z, ry), m = world.materials, p = palette(world);
  box(world, 3.4, .12, 1.6, 0, .06, -.3, m.concrete, { parent: g });
  for (const lx of [-1.6, 1.6]) for (const lz of [-1, .45]) box(world, .1, 2.3, .1, lx, 1.15, lz, m.wood, { parent: g });
  box(world, 3.3, 2.1, .06, 0, 1.05, -1.02, m.darkWood, { parent: g });
  for (const lx of [-1.62, 1.62]) box(world, .05, 1.4, 1.4, lx, 1.4, -.3, m.darkWood, { parent: g });
  box(world, 3.8, .06, 2.1, 0, 2.38, -.25, p.tin, { parent: g, rx: -.08 });
  box(world, 2.8, .07, .42, 0, .48, -.72, m.wood, { parent: g });
  for (const lx of [-1.2, 0, 1.2]) box(world, .07, .42, .35, lx, .24, -.72, m.darkWood, { parent: g });
  const poster = canvasTexture((ctx, w, h) => {
    ctx.fillStyle = '#efe7cf'; ctx.fillRect(0, 0, w, h); ctx.fillStyle = '#2d3d64'; ctx.font = 'bold 34px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('里山口', w / 2, 46); ctx.font = '16px sans-serif'; ctx.fillText('SATOYAMA-GUCHI', w / 2, 70);
    ctx.fillStyle = '#333'; ctx.font = '18px monospace'; ctx.textAlign = 'left';
    [' 7 : 12  48', ' 9 : 20', '12 : 05', '15 : 30', '17 : 10  55'].forEach((t, i) => ctx.fillText(t, 44, 110 + i * 26));
    ctx.fillStyle = '#a44'; ctx.font = '14px sans-serif'; ctx.fillText('日祝は運休', 44, 250);
  });
  mesh(world, new THREE.PlaneGeometry(.62, .62), new THREE.MeshStandardMaterial({ map: poster, roughness: .85 }), -.7, 1.45, -.985, { parent: g, merge: false, shadow: false });
  const sign = canvasTexture((ctx, w, h) => {
    ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(w / 2, h / 2, w / 2 - 8, 0, 7); ctx.fill();
    ctx.lineWidth = 14; ctx.strokeStyle = '#2b5aa0'; ctx.stroke();
    ctx.fillStyle = '#2b5aa0'; ctx.font = 'bold 48px sans-serif'; ctx.textAlign = 'center'; ctx.fillText('バス', w / 2, 112); ctx.font = 'bold 30px sans-serif'; ctx.fillText('里山口', w / 2, 160);
  });
  const sx = 2.3, sz = .4;
  box(world, .45, .12, .45, sx, .06, sz, m.concrete, { parent: g });
  cylinder(world, .035, .035, 2.4, sx, 1.2, sz, p.steel, { parent: g });
  mesh(world, new THREE.CircleGeometry(.3, 32), new THREE.MeshStandardMaterial({ map: sign, roughness: .5, side: THREE.DoubleSide }), sx, 2.25, sz + .04, { parent: g, merge: false });
  world.colliders.push({ x, z, halfWidth: 1.75, halfDepth: .95, rotation: ry, r: 2 });
  const [cx, cz] = local(x, z, ry, sx, sz); world.colliders.push({ x: cx, z: cz, r: .25 });
}
function utilityPoles(world) {
  const p = palette(world), lines = [[], [], []];
  [-100, -66, -33, -9, 24, 56, 90].forEach((x, i) => {
    const z = roadZ(x) - 2.9, y = gh(world, x, z), h = 8.6;
    cylinder(world, .11, .15, h, x, y + h / 2, z, p.creosote, { segments: 10 });
    box(world, 1.9, .12, .12, x, y + h - .45, z, p.creosote);
    for (const s of [-1, 1]) box(world, .05, .7, .05, x + s * .45, y + h - .78, z, p.steel, { rz: s * .9 });
    [-.8, 0, .8].forEach((dx, k) => { cylinder(world, .04, .05, .14, x + dx, y + h - .32, z, p.insulator, { segments: 8 }); lines[k].push(new THREE.Vector3(x + dx, y + h - .25, z)); });
    for (let s = 0; s < 6; s++) box(world, .22, .03, .03, x, y + 2.2 + s * .45, z, p.steel, { ry: s % 2 ? 0 : Math.PI / 2 });
    box(world, .03, .3, .12, x + .15, y + 1.7, z, i % 2 ? p.white : p.blue);
    box(world, .03, .16, .5, x + .15, y + 1.2, z, p.yellow);
    if (i === 2 || i === 5) { cylinder(world, .26, .26, .7, x, y + h - 1.6, z - .38, p.tin, { segments: 14 }); box(world, .08, .5, .08, x, y + h - 1.6, z - .15, p.steel); }
    if (i === 3) { box(world, .05, .05, 1.2, x, y + 5.3, z + .6, p.steel); box(world, .22, .09, .38, x, y + 5.24, z + 1.2, p.white); }
    world.colliders.push({ x, z, r: .25 });
  });
  for (const line of lines) world.scene.add(cable(line, p.wire));
  const drop = (x1, z1, x2, z2) => world.scene.add(cable([new THREE.Vector3(x1, gh(world, x1, z1) + 7.4, z1), new THREE.Vector3(x2, gh(world, x2, z2) + 3.4, z2)], p.wire, .05));
  drop(-33, roadZ(-33) - 2.9, -27, -59.4); drop(56, roadZ(56) - 2.9, 50, -60.8); drop(-9, roadZ(-9) - 2.9, 9, -76.8);
}

// ---------------------------------------------------------------- 井戸・物干し・薪・蔵・畑
export function well(world, x, z) {
  const g = anchor(world, x, z), m = world.materials, p = palette(world);
  cylinder(world, .72, .78, .8, 0, .4, 0, m.stone, { parent: g, segments: 18 });
  cylinder(world, .6, .6, .02, 0, .5, 0, p.wellWater, { parent: g, segments: 18 });
  for (const s of [-1, 1]) box(world, .1, 2.1, .1, s * .8, 1.05, 0, m.darkWood, { parent: g });
  box(world, 1.9, .1, .12, 0, 2.05, 0, m.darkWood, { parent: g });
  for (const s of [-1, 1]) box(world, 1.1, .04, 1.9, s * .42, 2.3, 0, m.kawara, { parent: g, rz: s * -.5 });
  cylinder(world, .07, .07, .12, 0, 1.9, 0, m.wood, { parent: g, rz: Math.PI / 2 }); // 滑車
  world.scene.add(Object.assign(new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(x, g.position.y + 1.88, z), new THREE.Vector3(x, g.position.y + .95, z)]), p.wire)));
  world.colliders.push({ x, z, r: .95 });
  scatter(world, 'wooden_bucket_01', [{ x: x + .15, y: g.position.y + .55, z: z + .1, rotation: 1 }], { size: .38 });
  scatter(world, 'wooden_bucket_02', [{ x: x + 1.1, y: g.position.y, z: z + .5, rotation: .4 }], { size: .32 });
}
export function laundry(world, x, z, ry) {
  const g = anchor(world, x, z, ry), m = world.materials, p = palette(world);
  for (const s of [-1, 1]) { cylinder(world, .045, .05, 2, s * 1.6, 1, 0, m.bamboo, { parent: g, segments: 8 }); box(world, .05, .05, .6, s * 1.6, 1.85, 0, m.bamboo, { parent: g }); }
  cylinder(world, .03, .03, 3.4, 0, 1.87, .2, m.bamboo, { parent: g, rz: Math.PI / 2, segments: 8 });
  cylinder(world, .03, .03, 3.4, 0, 1.87, -.2, m.bamboo, { parent: g, rz: Math.PI / 2, segments: 8 });
  const colors = [0xf2efe6, 0x5a7ca8, 0xe9d7a8, 0xf2efe6, 0xb8594a, 0x7d9b72, 0xf6f6f2];
  const cloths = [];
  colors.forEach((c, i) => {
    const w = [.55, .7, .45, .8, .5, .6, .4][i], h = [.75, .6, .5, .9, .55, .7, .35][i];
    const geo = new THREE.PlaneGeometry(w, h, 4, 4); geo.translate(0, -h / 2, 0);
    const cloth = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: c, roughness: 1, side: THREE.DoubleSide }));
    cloth.position.set(-1.35 + i * .44, 1.86, i % 2 ? .2 : -.2); cloth.castShadow = true; cloth.receiveShadow = true;
    cloth.userData.phase = i * 1.3; g.add(cloth); cloths.push(cloth);
  });
  world.colliders.push({ x, z, halfWidth: 1.7, halfDepth: .35, rotation: ry, r: 1.8 });
  world.detailUpdaters.push(t => { for (const c of cloths) { c.rotation.x = Math.sin(t * 1.7 + c.userData.phase) * .12 * world.wind + .06; c.rotation.y = Math.sin(t * 1.1 + c.userData.phase) * .05; } });
}
export function woodpile(world, x, z, ry, length = 3) {
  const g = anchor(world, x, z, ry), m = world.materials;
  const logs = new THREE.InstancedMesh(new THREE.CylinderGeometry(.075, .075, .45, 7), m.bark, 0);
  const matrices = [], d = new THREE.Object3D();
  for (let row = 0; row < 7; row++) for (let i = 0; i < Math.floor(length / .15); i++) {
    d.position.set(-length / 2 + i * .15 + (row % 2) * .075, .08 + row * .135, range(-.02, .02)); d.rotation.set(Math.PI / 2, range(-.1, .1), 0); d.updateMatrix(); matrices.push(d.matrix.clone());
  }
  const inst = new THREE.InstancedMesh(logs.geometry, m.bark, matrices.length);
  matrices.forEach((mat, i) => inst.setMatrixAt(i, mat)); inst.castShadow = inst.receiveShadow = true; g.add(inst);
  box(world, length + .3, .05, .7, 0, 1.08, -.05, m.kawara, { parent: g, rx: .12 });
  for (const s of [-1, 1]) box(world, .07, 1.05, .07, s * (length / 2 + .1), .52, .2, m.darkWood, { parent: g });
  world.colliders.push({ x, z, halfWidth: length / 2 + .2, halfDepth: .4, rotation: ry, r: length / 2 + .3 });
}
export function kura(world, x, z, ry) {
  // 土蔵: white-plastered storehouse with a tiled roof and a stone-clad base.
  const g = anchor(world, x, z, ry), m = world.materials, p = palette(world), w = 4.6, d = 3.6;
  box(world, w + .3, .9, d + .3, 0, .45, 0, m.stone, { parent: g });
  box(world, w, 3.6, d, 0, 2.7, 0, m.whitePlaster, { parent: g });
  box(world, w + .05, .5, d + .05, 0, 1.15, 0, m.darkWood, { parent: g });                   // 腰板
  for (const s of [-1, 1]) box(world, w + .9, .08, d * .64, 0, 4.9, s * d * .3, m.kawara, { parent: g, rx: s * .55 });
  box(world, w + 1, .24, .26, 0, 5.28, 0, m.kawara, { parent: g });
  for (const s of [-1, 1]) box(world, .3, .5, .26, s * (w / 2 + .45), 5.38, 0, m.kawara, { parent: g });  // 鬼瓦
  box(world, 1.3, 1.9, .2, 0, 1.85, d / 2 + .08, m.darkWood, { parent: g });
  box(world, 1.5, .12, .35, 0, 2.9, d / 2 + .12, m.whitePlaster, { parent: g });
  for (const lx of [-1.2, 1.2]) { box(world, .6, .6, .1, lx, 3.8, d / 2 + .02, p.black, { parent: g }); box(world, .72, .72, .06, lx, 3.8, d / 2 + .04, m.whitePlaster, { parent: g }); box(world, .6, .6, .1, lx, 3.8, d / 2 + .06, p.black, { parent: g }); }
  label(world, g, '〇', 0, 4.45, d / 2 + .01, .7, .7, { bg: '#f1efe6', fg: '#1f1f1f', font: 'bold 420px serif' });
  world.colliders.push({ x, z, halfWidth: w / 2 + .3, halfDepth: d / 2 + .35, rotation: ry, r: Math.hypot(w, d) / 2 + .4 });
}
function kitchenGarden(world, x, z, ry) {
  // 家庭菜園: ridged beds with bamboo cucumber trellises and eggplant / tomato rows.
  const g = anchor(world, x, z, ry), m = world.materials, p = palette(world);
  const soil = m.soilBed ??= new THREE.MeshStandardMaterial({ color: 0x8a6a4c, roughness: 1, map: m.soil?.map, normalMap: m.soil?.normalMap });
  const leaf = new THREE.MeshStandardMaterial({ color: 0x4e7a33, roughness: .85 });
  const red = new THREE.MeshStandardMaterial({ color: 0xd2402f, roughness: .4 }), purple = new THREE.MeshStandardMaterial({ color: 0x3b2346, roughness: .35 });
  for (let row = 0; row < 4; row++) {
    const lz = -2.4 + row * 1.6;
    box(world, 6, .25, .8, 0, .12, lz, soil, { parent: g });
    for (let i = 0; i < 9; i++) {
      const lx = -2.6 + i * .65;
      if (row === 0) { // cucumber trellis
        cylinder(world, .018, .02, 1.7, lx, 1.05, lz, m.bamboo, { parent: g, segments: 6, shadow: false });
        for (let k = 0; k < 4; k++) sphere(world, .13, lx + range(-.08, .08), .5 + k * .3, lz + range(-.08, .08), leaf, { parent: g, segments: 7 }).scale.y = .6;
      } else {
        for (let k = 0; k < 3; k++) sphere(world, .16, lx + range(-.07, .07), .38 + k * .1, lz + range(-.07, .07), leaf, { parent: g, segments: 7 }).scale.y = .7;
        if (random() < .6) sphere(world, .05, lx + .1, .38, lz + .12, row === 1 ? red : purple, { parent: g, segments: 8, shadow: false }).scale.y = row === 1 ? 1 : 1.8;
      }
    }
  }
  cylinder(world, .018, .018, 6, 0, 1.85, -2.4, m.bamboo, { parent: g, rz: Math.PI / 2, segments: 6 });
  // A scarecrow in a straw hat watches the beds.
  scarecrow(world, g, 3.4, .2, p);
  world.colliders.push({ x, z, halfWidth: 3.1, halfDepth: 3, rotation: ry, r: 4.3 });
}
export function scarecrow(world, parent, lx, lz, p, ry = .4) {
  const g = new THREE.Group(); g.position.set(lx, 0, lz); g.rotation.y = ry; parent.add(g);
  const m = world.materials;
  cylinder(world, .04, .05, 2, 0, 1, 0, m.bamboo, { parent: g, segments: 6 });
  cylinder(world, .03, .03, 1.6, 0, 1.45, 0, m.bamboo, { parent: g, rz: Math.PI / 2, segments: 6 });
  box(world, .9, .65, .22, 0, 1.2, 0, new THREE.MeshStandardMaterial({ color: 0x4f6b8a, roughness: 1 }), { parent: g });
  sphere(world, .17, 0, 1.78, 0, p.white, { parent: g });
  cylinder(world, .08, .36, .14, 0, 1.94, 0, p.straw, { parent: g, segments: 16 });
  box(world, .12, .03, .01, 0, 1.8, .165, p.black, { parent: g });
  cylinder(world, .012, .012, 1.2, -.7, 1.3, 0, m.bamboo, { parent: g, segments: 5 });
}

// ---------------------------------------------------------------- 竹林・柿の木・花
export function bambooGrove(world, cx, cz, radius, count, blocked = (x, z) => fieldAt(x, z, 1) || Math.abs(z - railZ(x)) < 6 || Math.abs(x - pathX(z)) < 3) {
  const m = world.materials, stalks = [], leaves = [];
  for (let i = 0; i < count; i++) {
    const a = random() * Math.PI * 2, r = Math.sqrt(random()) * radius, x = cx + Math.cos(a) * r, z = cz + Math.sin(a) * r;
    if (blocked(x, z) || world.colliders.some(c => Math.hypot(x - c.x, z - c.z) < (c.r ?? 1) + .3)) continue;
    stalks.push({ x, z, h: range(9, 14), lean: range(-.06, .06), dir: random() * 6.28 });
  }
  const stalkMat = new THREE.MeshStandardMaterial({ color: 0x8aa35a, roughness: .55, map: m.bamboo.map, normalMap: m.bamboo.normalMap });
  const geo = new THREE.CylinderGeometry(.055, .075, 1, 8, 6); geo.translate(0, .5, 0);
  const inst = new THREE.InstancedMesh(geo, stalkMat, stalks.length), d = new THREE.Object3D();
  stalks.forEach((s, i) => { d.position.set(s.x, gh(world, s.x, s.z) - .1, s.z); d.rotation.set(Math.cos(s.dir) * s.lean, 0, Math.sin(s.dir) * s.lean); d.scale.set(1, s.h, 1); d.updateMatrix(); inst.setMatrixAt(i, d.matrix); });
  inst.castShadow = inst.receiveShadow = true; world.scene.add(inst);
  // Leaf sprays as alpha cards clustered on the upper third of each culm.
  const leafTex = canvasTexture((ctx, w, h) => {
    for (let k = 0; k < 70; k++) {
      const x = range(20, w - 20), y = range(20, h - 20), a = range(-.9, .9) + (x < w / 2 ? Math.PI : 0), l = range(28, 56);
      ctx.save(); ctx.translate(x, y); ctx.rotate(a); ctx.fillStyle = `hsl(${range(78, 96)} ${range(38, 55)}% ${range(26, 44)}%)`;
      ctx.beginPath(); ctx.moveTo(0, 0); ctx.quadraticCurveTo(l * .5, -l * .13, l, 0); ctx.quadraticCurveTo(l * .5, l * .13, 0, 0); ctx.fill(); ctx.restore();
    }
  });
  const leafMat = new THREE.MeshLambertMaterial({ map: leafTex, alphaTest: .45, side: THREE.DoubleSide });
  const cards = new THREE.InstancedMesh(new THREE.PlaneGeometry(1.6, 1.6), leafMat, stalks.length * 7);
  let n = 0;
  for (const s of stalks) for (let k = 0; k < 7; k++) {
    const y = gh(world, s.x, s.z) + s.h * range(.55, 1);
    d.position.set(s.x + range(-.7, .7), y, s.z + range(-.7, .7)); d.rotation.set(range(-.6, .6), random() * 6.28, range(-.4, .4)); d.scale.setScalar(range(.8, 1.4)); d.updateMatrix(); cards.setMatrixAt(n++, d.matrix);
  }
  cards.castShadow = cards.receiveShadow = true; world.scene.add(cards);
  world.bamboo = (world.bamboo ?? []).concat(cards);
  for (const s of stalks) world.colliders.push({ x: s.x, z: s.z, r: .12 });
}
export function persimmonTree(world, x, z) {
  const m = world.materials, p = palette(world), y = gh(world, x, z);
  cylinder(world, .16, .24, 2.4, x, y + 1.2, z, m.bark, { segments: 9 });
  const leaf = new THREE.MeshStandardMaterial({ color: 0x4b6d2c, roughness: .8 });
  for (let i = 0; i < 5; i++) {
    const a = i * 1.26, len = range(1.4, 2.2);
    const branch = cylinder(world, .025, .06, len, x + Math.cos(a) * len * .35, y + 2.4 + len * .3, z + Math.sin(a) * len * .35, m.bark, { segments: 6 });
    branch.rotation.set(Math.sin(a) * .9, 0, -Math.cos(a) * .9);
  }
  for (let i = 0; i < 22; i++) {
    const a = random() * 6.28, r = Math.sqrt(random()) * 2.3;
    sphere(world, range(.55, .9), x + Math.cos(a) * r, y + 3.2 + range(-.4, .9), z + Math.sin(a) * r, leaf, { segments: 7 }).scale.y = .7;
  }
  for (let i = 0; i < 28; i++) {
    const a = random() * 6.28, r = range(1.5, 2.5);
    sphere(world, .075, x + Math.cos(a) * r, y + 2.7 + range(0, 1.2), z + Math.sin(a) * r, p.persimmon, { segments: 8, shadow: false });
  }
  world.colliders.push({ x, z, r: .35 });
}
export function hydrangeas(world, points) {
  const colors = [0x6c86c9, 0x8e7cc4, 0xb7c3e6, 0xd48bb0, 0x7aa2d6].map(c => new THREE.MeshStandardMaterial({ color: c, roughness: .8 }));
  const leaf = new THREE.MeshStandardMaterial({ color: 0x3f6a2f, roughness: .85 });
  for (const [x, z] of points) {
    const y = gh(world, x, z);
    sphere(world, .55, x, y + .4, z, leaf, { segments: 8 }).scale.y = .75;
    for (let k = 0; k < 6; k++) sphere(world, .17, x + range(-.4, .4), y + .6 + range(0, .25), z + range(-.4, .4), colors[Math.floor(random() * colors.length)], { segments: 8 });
    world.colliders.push({ x, z, r: .5 });
  }
}

// ---------------------------------------------------------------- 用水路と小橋・はさ掛け
function irrigation(world) {
  // A stone-lined channel along the east edge of the terraces, crossing under the path.
  const m = world.materials, p = palette(world), x0 = 61.5;
  const water = new THREE.MeshStandardMaterial({ color: 0x3e5a52, roughness: .08, metalness: .1, normalMap: world.water?.material.normalMap, normalScale: new THREE.Vector2(.25, .25), transparent: true, opacity: .9 });
  const geo = [];
  for (let z = -22; z < 112; z += 2) {
    const y = gh(world, x0, z) - .25;
    for (const s of [-1, 1]) box(world, .25, .45, 2.02, x0 + s * .5, y + .05, z + 1, m.stone);
    const g = new THREE.PlaneGeometry(.8, 2.02); g.rotateX(-Math.PI / 2); g.translate(x0, y + .02, z + 1); geo.push(g);
  }
  const channel = new THREE.Mesh(mergeAll(geo), water);
  channel.receiveShadow = true; world.scene.add(channel); world.channel = channel;
  world.detailUpdaters.push(t => { if (water.normalMap) water.normalMap.offset.y = (t * .12) % 1; });
  // Small wooden foot-bridges where banks cross the channel.
  for (const f of fields.filter(f => f.column === 3)) {
    const z = f.z2 + 1, y = gh(world, x0, z) + .08;
    box(world, 1.7, .08, 1, x0, y, z, m.darkWood);
    for (let i = -3; i <= 3; i++) box(world, .12, .03, .98, x0 + i * .22, y + .05, z, m.wood);
  }
  // 水口: a sluice board between the channel and each paddy.
  for (const f of fields.filter(f => f.column === 3)) box(world, .06, .35, .5, x0 - .6, f.y + .15, (f.z1 + f.z2) / 2, m.oldwood ?? m.darkWood);
}
function mergeAll(list) {
  const pos = [], nor = [], uv = [];
  for (let g of list) { g = g.toNonIndexed(); pos.push(...g.attributes.position.array); nor.push(...g.attributes.normal.array); uv.push(...g.attributes.uv.array); g.dispose(); }
  const out = new THREE.BufferGeometry();
  out.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); out.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3)); out.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  return out;
}
export function hasa(world, x, z, ry, length = 9) {
  // はさ掛け: rice sheaves drying on a bamboo rack.
  const g = anchor(world, x, z, ry), m = world.materials, p = palette(world);
  for (let i = 0; i <= Math.round(length / 1.8); i++) {
    const lx = -length / 2 + i * 1.8;
    for (const s of [-1, 1]) box(world, .06, 2.2, .06, lx, 1.05, s * .28, m.bamboo, { parent: g, rx: s * -.25 });
  }
  for (const h of [1.05, 1.7]) cylinder(world, .03, .03, length + .4, 0, h, 0, m.bamboo, { parent: g, rz: Math.PI / 2, segments: 6 });
  const sheaf = new THREE.ConeGeometry(.16, .75, 7); sheaf.translate(0, -.37, 0);
  const inst = new THREE.InstancedMesh(sheaf, p.straw, Math.floor(length / .2) * 2), d = new THREE.Object3D();
  let n = 0;
  for (const h of [1.1, 1.75]) for (let i = 0; i < Math.floor(length / .2); i++) {
    d.position.set(-length / 2 + .1 + i * .2, h, 0); d.rotation.set(0, 0, range(-.08, .08)); d.scale.set(1, range(.9, 1.1), range(.8, 1.2)); d.updateMatrix(); inst.setMatrixAt(n++, d.matrix);
  }
  inst.castShadow = inst.receiveShadow = true; g.add(inst);
  world.colliders.push({ x, z, halfWidth: length / 2 + .2, halfDepth: .45, rotation: ry, r: length / 2 + .4 });
}
function fireLookout(world, x, z) {
  // 火の見櫓: steel lattice tower with a bell and a ladder, a village landmark.
  const g = anchor(world, x, z), p = palette(world), H = 10;
  const leg = (sx, sz) => { const len = Math.hypot(H, .7); const b = box(world, .09, len, .09, sx * .95, H / 2, sz * .95, p.rust, { parent: g }); b.rotation.set(-sz * .07, 0, sx * .07); };
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) leg(sx, sz);
  for (let k = 1; k < 7; k++) {
    const y = k * H / 7, w = 1.9 - y * .14;
    for (const s of [-1, 1]) { box(world, w, .05, .05, 0, y, s * w / 2, p.rust, { parent: g }); box(world, .05, .05, w, s * w / 2, y, 0, p.rust, { parent: g }); }
    for (const s of [-1, 1]) box(world, .03, 1.9, .03, 0, y - .7, s * w / 2, p.rust, { parent: g, rz: .6 });
  }
  box(world, 1.6, .08, 1.6, 0, H, 0, p.rust, { parent: g });
  for (const s of [-1, 1]) { box(world, 1.6, .5, .03, 0, H + .3, s * .8, p.rust, { parent: g }); box(world, .03, .5, 1.6, s * .8, H + .3, 0, p.rust, { parent: g }); }
  mesh(world, new THREE.ConeGeometry(1.2, .9, 4), p.rust, 0, H + 1.9, 0, { parent: g, ry: Math.PI / 4 });
  for (const s of [-1, 1]) box(world, .05, 1.4, .05, s * .7, H + .9, s * .7, p.rust, { parent: g });
  const bell = mesh(world, new THREE.CylinderGeometry(.14, .24, .38, 14, 1, true), p.copper, 0, H + 1.05, 0, { parent: g, merge: false });
  bell.material = p.copper; bell.material.side = THREE.DoubleSide;
  for (let k = 0; k < 24; k++) box(world, .3, .025, .025, .6, .3 + k * .4, 1.05, p.steel, { parent: g });
  world.colliders.push({ x, z, halfWidth: 1.05, halfDepth: 1.05, rotation: 0, r: 1.5 });
  world.fireBell = bell;
}

// ---------------------------------------------------------------- scanned CC0 props
function scanProps(world) {
  const gy = (x, z) => gh(world, x, z);
  const at = (x, z, extra = {}) => ({ x, z, y: gy(x, z), rotation: random() * 6.28, ...extra });
  const around = (cx, cz, n, rMin, rMax, extra) => Array.from({ length: n }, () => { const a = random() * 6.28, r = range(rMin, rMax); return at(cx + Math.cos(a) * r, cz + Math.sin(a) * r, extra); });
  // Farmyard clutter by each house's door and the shed.
  scatter(world, 'wooden_crate_02', [at(-40.5, -56.5), at(-41.2, -57.6, { scale: .9 }), at(15.5, -75.5)], { size: .48, collider: .45 });
  scatter(world, 'wicker_basket_01', [at(-41, -55.3, { y: gy(-41, -55.3) + .47 }), at(-20, -59), at(53.5, -60.5)], { size: .14 });
  scatter(world, 'watering_can_metal_01', [at(-53, -50.5), at(-21.5, -59.2)], { size: .3 });
  scatter(world, 'rusted_spade_01', [{ x: -47.8, y: gy(-47.8, -54.6), z: -54.6, rotation: .2, tilt: -.25 }, { x: 44.4, y: gy(44.4, -61), z: -61, rotation: 1.4, tilt: -.28 }], { size: 1.1 });
  scatter(world, 'planter_pot_clay', [at(-22.5, -59.6), at(-21.8, -59.8, { scale: .8 }), at(6.5, -76.4), at(7.2, -76.6, { scale: 1.2 }), at(46.3, -60.9)], { size: .28 });
  scatter(world, 'wooden_stool_01', [at(-24.6, -58.9), at(13.3, -76.2)], { size: .45, collider: .25 });
  scatter(world, 'wooden_lantern_01', [at(-27.5, -59.2, { scale: .9 })], { size: .5 });
  scatter(world, 'wooden_bucket_02', [at(12.8, -75.9), at(-85, -47.2)], { size: .32 });
  // Nature: stumps and fallen trunks at the forest edge, mossy stones by the paths and shrine.
  scatter(world, 'tree_stump_01', [at(-78, -74), at(95, -58), at(-104, 20), at(108, 70), at(44, -92), at(-60, -88)], { size: .6, collider: .6 });
  scatter(world, 'dead_tree_trunk', [at(-96, -66, { scale: 1.3 }), at(103, 40, { scale: 1.1 }), at(72, -96)], { size: .32, collider: 0 });
  scatter(world, 'rock_moss_set_01', [at(28, -92, { scale: .35 }), at(-108, -20, { scale: .5 }), at(111, 100, { scale: .45 }), at(-70, 120, { scale: .5 })], { size: 1.8 });
  scatter(world, 'rock_07', around(33, -80, 10, 3, 8, { scale: 1 }).concat(Array.from({ length: 40 }, () => { const z = range(-60, 120); return at(pathX(z) + (random() > .5 ? 2.6 : -2.6), z, { scale: range(.8, 2) }); })), { size: .16 });
  scatter(world, 'stone_01', Array.from({ length: 60 }, () => { const z = range(-60, 120); return at(pathX(z) + range(-1.3, 1.3), z, { y: gy(pathX(z), z) + .22, scale: range(.6, 1.6) }); }), { size: .06, shadow: false });
  // Ground cover: ferns in the shade, weeds & dandelions on the verges, sorrel by the paddies.
  const verge = n => Array.from({ length: n }, () => { const z = range(-60, 124); let x = pathX(z) + (random() > .5 ? 1 : -1) * range(2.4, 3.6); if (fieldAt(x, z, .3)) x = 2 * pathX(z) - x; return at(x, z, { scale: range(.7, 1.3) }); });
  scatter(world, 'fern_02', around(33, -86, 14, 3, 9).concat(around(-80, -80, 16, 2, 14), around(96, -70, 16, 2, 14), around(-107, 40, 12, 1, 8)), { size: .45 });
  scatter(world, 'dandelion_01', verge(40), { size: .17, shadow: false });
  scatter(world, 'weed_plant_02', verge(40), { size: .1, shadow: false });
  scatter(world, 'nettle_plant', verge(30), { size: .22, shadow: false });
  scatter(world, 'shrub_04', verge(24), { size: .24, shadow: false });
  scatter(world, 'periwinkle_plant', around(-26, -64, 10, 7, 10).concat(around(49, -65, 10, 7, 10)), { size: .4, shadow: false });
  const bankPoints = [];
  for (const f of fields) for (let i = 0; i < 6; i++) { const x = range(f.x1 + 1, f.x2 - 1), z = f.z2 + 1 + range(-.25, .25); bankPoints.push(at(x, z, { scale: range(.8, 1.3) })); }
  scatter(world, 'shrub_sorrel_01', bankPoints.filter((_, i) => i % 2 === 0), { size: .07, shadow: false });
}

export function buildSatoyamaDetails(world) {
  world.detailUpdaters ??= [];
  world.lanterns ??= [];
  shrine(world);
  jizo(world, pathX(-20) + 3.6, -20, -Math.PI / 2);
  postBox(world, -22.5, -31.3, 0);
  busStop(world, -12, roadZ(-12) - 3.4, 0);
  utilityPoles(world);
  well(world, -34, -55);
  laundry(world, -19, -57.5, .1);
  laundry(world, 54, -58, -.2);
  woodpile(world, -35, -67, .05, 3.2); woodpile(world, 44, -69, -.2, 2.6); woodpile(world, -69.5, -79, .12, 2.4);
  kura(world, 64, -72, -.25);
  kitchenGarden(world, -80, -36, .17);
  bambooGrove(world, -100, -84, 14, 90);
  bambooGrove(world, 104, -38, 11, 60);
  persimmonTree(world, -14, -67); persimmonTree(world, 60, -54); persimmonTree(world, -92, -62);
  hydrangeas(world, [[-33.5, -61], [-31.5, -60.5], [2, -78], [3.6, -79], [41, -62], [16.5, -79], [-56.5, -72]]);
  irrigation(world);
  hasa(world, -86, -1, 0, 9); hasa(world, 86, 70, Math.PI / 2 - .03, 8);
  fireLookout(world, -48, -40);
  scanProps(world);
}
