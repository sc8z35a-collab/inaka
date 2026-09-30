import * as THREE from 'three';
import { plainsHeight, plainsFields } from './plains.js';
import { scatter, seeded } from './props.js';
import { box, cylinder, sphere, anchor, cable, palette, label, mesh } from './details-kit.js';
import { buildAmbient } from './ambient.js';
import { extraMaterials, keiTruckSimple, duskLightPool } from './details-plus.js';
import { torii, stoneLantern, jizo, postBox, busStop, well, laundry, woodpile, kura, persimmonTree, hydrangeas, hasa, scarecrow, bambooGrove } from './details.js';

// はるか野: 696 m of farmland gets the small things that make it feel lived in —
// power lines along the main roads, bus stops, a roadside shrine, sunflower rows,
// scarecrows, rice-drying racks, a kei-truck, an irrigation weir and scattered CC0 props.
const { random, range } = seeded(90210);
const roadX = col => -330 + col * 66, roadZ = row => -320 + row * 60;
const onRoad = (x, z, pad = 3.5) => {
  const cx = Math.round((x + 330) / 66), rz = Math.round((z + 320) / 60);
  return Math.abs(x - roadX(cx)) < pad || Math.abs(z - roadZ(rz)) < pad;
};

function powerLine(world) {
  // Along main road row 4 (z = -80), poles every 44 m, on the north verge.
  const p = palette(world), lines = [[], []], z = roadZ(4) - 4.3;
  for (let x = -330; x <= 330; x += 44) {
    // Every 3rd pole landed exactly on a north–south farm road (x = roadX(col)), blocking it.
    const px = onRoad(x, z + 4.3, 4) ? x + 6 : x;
    const y = plainsHeight(px, z), h = 9;
    cylinder(world, .12, .16, h, px, y + h / 2, z, p.creosote, { segments: 10 });
    box(world, 1.6, .12, .12, px, y + h - .5, z, p.creosote);
    [-.6, .6].forEach((dx, k) => { cylinder(world, .04, .05, .14, px + dx, y + h - .38, z, p.insulator, { segments: 8 }); lines[k].push(new THREE.Vector3(px + dx, y + h - .3, z)); });
    for (let s = 0; s < 6; s++) box(world, .22, .03, .03, px, y + 2.2 + s * .45, z, p.steel, { ry: s % 2 ? 0 : Math.PI / 2 });
    box(world, .03, .16, .5, px + .16, y + 1.2, z, p.yellow);
    world.colliders.push({ x: px, z, r: .25 });
  }
  for (const line of lines) world.scene.add(cable(line, p.wire, .025));
}
function sunflowers(world, x1, z1, length, rows = 3) {
  // A row of sunflowers along a field edge: stems, leaves and faces turned south-east.
  const stems = [], heads = [];
  for (let r = 0; r < rows; r++) for (let i = 0; i < length / .55; i++) {
    const x = x1 + i * .55 + range(-.1, .1), z = z1 + r * .6 + range(-.1, .1);
    stems.push({ x, z, h: range(1.5, 2.3) });
  }
  const d = new THREE.Object3D();
  const stemGeo = new THREE.CylinderGeometry(.025, .035, 1, 5); stemGeo.translate(0, .5, 0);
  const stem = new THREE.InstancedMesh(stemGeo, new THREE.MeshStandardMaterial({ color: 0x5c7d2e, roughness: .9 }), stems.length);
  const petalTex = document.createElement('canvas'); petalTex.width = petalTex.height = 128;
  const ctx = petalTex.getContext('2d');
  for (let k = 0; k < 22; k++) { const a = k / 22 * Math.PI * 2; ctx.save(); ctx.translate(64, 64); ctx.rotate(a); ctx.fillStyle = k % 2 ? '#f2c323' : '#e8ae17'; ctx.beginPath(); ctx.ellipse(0, -40, 8, 22, 0, 0, 7); ctx.fill(); ctx.restore(); }
  const g = ctx.createRadialGradient(64, 64, 4, 64, 64, 28); g.addColorStop(0, '#3a2412'); g.addColorStop(1, '#5a3a17');
  ctx.fillStyle = g; ctx.beginPath(); ctx.arc(64, 64, 27, 0, 7); ctx.fill();
  const tex = new THREE.CanvasTexture(petalTex); tex.colorSpace = THREE.SRGBColorSpace;
  const head = new THREE.InstancedMesh(new THREE.CircleGeometry(.24, 16), new THREE.MeshStandardMaterial({ map: tex, alphaTest: .4, side: THREE.DoubleSide, roughness: .8 }), stems.length);
  const leafGeo = new THREE.SphereGeometry(.13, 6, 4); leafGeo.scale(1.3, .25, 1);
  const leaf = new THREE.InstancedMesh(leafGeo, new THREE.MeshStandardMaterial({ color: 0x4c7327, roughness: .85 }), stems.length * 2);
  stems.forEach((s, i) => {
    const y = plainsHeight(s.x, s.z) + .1;
    d.position.set(s.x, y, s.z); d.rotation.set(0, 0, range(-.05, .05)); d.scale.set(1, s.h, 1); d.updateMatrix(); stem.setMatrixAt(i, d.matrix);
    d.position.set(s.x, y + s.h, s.z + .05); d.rotation.set(-.35 + range(-.15, .15), range(-.5, .5) + .3, 0); d.scale.setScalar(range(.85, 1.2)); d.updateMatrix(); head.setMatrixAt(i, d.matrix);
    for (let k = 0; k < 2; k++) { d.position.set(s.x + (k ? .12 : -.12), y + s.h * (.45 + k * .2), s.z); d.rotation.set(0, random() * 6, k ? -.4 : .4); d.scale.setScalar(1); d.updateMatrix(); leaf.setMatrixAt(i * 2 + k, d.matrix); }
  });
  for (const m of [stem, head, leaf]) { m.castShadow = m.receiveShadow = true; m.computeBoundingSphere(); world.scene.add(m); }
  world.sunflowerHeads = (world.sunflowerHeads ?? []).concat(head);
}
function keiTruck(world, x, z, ry) {
  // 軽トラ: the white mini-truck that belongs to every Japanese farm road.
  const g = anchor(world, x, z, ry), p = palette(world);
  const white = new THREE.MeshStandardMaterial({ color: 0xeef0ee, roughness: .35, metalness: .15 });
  const glass = new THREE.MeshStandardMaterial({ color: 0x2c3a40, roughness: .08, metalness: .6 });
  box(world, 1.45, .3, 3.3, 0, .55, 0, p.black, { parent: g });
  box(world, 1.45, 1.05, 1.15, 0, 1.18, 1.05, white, { parent: g });
  box(world, 1.3, .5, .05, 0, 1.4, 1.63, glass, { parent: g, rx: -.12 });
  for (const s of [-1, 1]) box(world, .04, .42, .8, s * .73, 1.4, 1.05, glass, { parent: g });
  box(world, 1.45, .06, 2.1, 0, .78, -.62, white, { parent: g });
  for (const s of [-1, 1]) box(world, .05, .38, 2.1, s * .7, .98, -.62, white, { parent: g });
  box(world, 1.45, .38, .05, 0, .98, -1.66, white, { parent: g });
  box(world, 1.45, .05, .05, 0, 1.7, .5, p.steel, { parent: g });
  for (const s of [-1, 1]) { box(world, .25, .14, .05, s * .5, .9, 1.64, new THREE.MeshStandardMaterial({ color: 0xfffbe6, emissive: 0x332d1e, roughness: .2 }), { parent: g }); box(world, .16, .1, .05, s * .58, .9, -1.69, p.red, { parent: g }); }
  for (const sx of [-1, 1]) for (const sz of [1.05, -1.05]) cylinder(world, .27, .27, .2, sx * .66, .27, sz, p.black, { parent: g, rz: Math.PI / 2, segments: 14 });
  label(world, g, '品川 480 あ 12-34', 0, .62, 1.68, .38, .19, { bg: '#f6f4ea', fg: '#1f5a36', font: 'bold 44px sans-serif' });
  world.colliders.push({ x, z, halfWidth: .8, halfDepth: 1.75, rotation: ry, r: 1.9 });
  scatter(world, 'wooden_crate_02', [{ x: x - .1, y: g.position.y + .82, z: z - .9, rotation: ry + Math.PI / 2, scale: .9 }], { size: .45 });
  scatter(world, 'wicker_basket_01', [{ x: x + .35, y: g.position.y + .82, z: z - .1, rotation: ry }], { size: .13 });
}
function weir(world, x, z) {
  // 用水路の堰: a concrete sluice gate with a wheel, feeding the water fields.
  const g = anchor(world, x, z, 0), m = world.materials, p = palette(world);
  for (const s of [-1, 1]) box(world, .4, 1.6, 1.4, s * 1.1, .5, 0, m.concrete, { parent: g });
  box(world, 2.6, .25, .4, 0, 1.4, 0, m.concrete, { parent: g });
  box(world, 1.8, .9, .1, 0, .6, 0, p.rust, { parent: g });
  cylinder(world, .04, .04, .9, 0, 1.9, 0, p.steel, { parent: g });
  mesh(world, new THREE.TorusGeometry(.32, .03, 6, 20), p.blue, 0, 2.35, 0, { parent: g, rx: Math.PI / 2 });
  world.colliders.push({ x, z, halfWidth: 1.35, halfDepth: .75, rotation: 0, r: 1.5 });
}
function dosojin(world, x, z, ry) {
  // 道祖神: a pair of travellers' guardian stones at a crossroads.
  const g = anchor(world, x, z, ry), m = world.materials, p = palette(world);
  box(world, 1.3, .2, .8, 0, .1, 0, m.granite, { parent: g });
  const stone = sphere(world, .45, 0, .75, 0, m.mossRock, { parent: g, segments: 10 }); stone.scale.set(1, 1.35, .5);
  label(world, g, '道祖神', 0, .8, .235, .36, .5, { bg: '#8b8878', fg: '#3c3a33', font: 'bold 100px serif' });
  cylinder(world, .05, .04, .16, -.45, .28, .25, m.bamboo, { parent: g });
  cylinder(world, .05, .04, .16, .45, .28, .25, m.bamboo, { parent: g });
  box(world, .22, .12, .02, 0, .42, .26, p.cloth, { parent: g });
  world.colliders.push({ x, z, r: .7 });
}

export function buildPlainsDetails(world) {
  world.detailUpdaters ??= [];
  powerLine(world);
  // Bus stops on the two main roads; a post box and jizo by the farm village.
  busStop(world, roadX(5) + 6, roadZ(4) - 4.6, 0);
  busStop(world, -225, roadZ(3) + 4.8, Math.PI);
  postBox(world, -206, -196, 0);
  jizo(world, roadX(3) + 3.6, 0, -Math.PI / 2);
  dosojin(world, roadX(5) + 4, roadZ(6) + 4, -Math.PI / 4);
  dosojin(world, roadX(8) - 4, roadZ(2) - 4, Math.PI * .75);
  // A small hilltop shrine by the lookout.
  torii(world, -60, 298, Math.PI, 1);
  stoneLantern(world, -61.7, 302, 0); stoneLantern(world, -58.3, 302, 0);
  // Farmhouse life around the three farm clusters.
  for (const [x, z, a] of [[-225, -178, .06], [169, 8, 0], [39, -285, 0]]) {
    well(world, x + 9, z + 9); laundry(world, x - 3, z + 9.5, a); woodpile(world, x - 8, z - 6.5, a, 3);
    persimmonTree(world, x + 14, z - 6); hydrangeas(world, [[x - 5, z + 6], [x - 3.5, z + 6.4], [x + 5, z + 6]]);
  }
  kura(world, -206, -180, 0);
  kura(world, 188, 14, Math.PI / 2);
  // Rice-drying racks and scarecrows among the fields.
  for (const f of plainsFields) {
    if (f.kind === 'green' && random() < .45) hasa(world, f.x1 + 29, f.z2 + 2.4, 0, 12);
    if (f.kind !== 'soil' && random() < .5) { const g = anchor(world, f.x1 + range(10, 48), f.z1 + range(8, 44), 0, f.y); scarecrow(world, g, 0, 0, palette(world), random() * 6); }
  }
  // Sunflower rows along the flower fields' roadside edges.
  for (const f of plainsFields.filter(f => f.kind === 'flowers')) { sunflowers(world, f.x1 + 1, f.z2 - 2.2, 56, 3); }
  sunflowers(world, -40, 262, 28, 2);
  keiTruck(world, roadX(4) + 2.2, -150, .02);
  keiTruck(world, 160, roadZ(5) + 2.4, Math.PI / 2 - .03);
  for (const f of plainsFields.filter(f => f.kind === 'water')) weir(world, f.x1 - 2, f.z1 + 26);
  bambooGrove(world, -345, -120, 16, 90, (x, z) => onRoad(x, z) || Math.abs(x) > 358);
  bambooGrove(world, 300, 290, 14, 70, (x, z) => onRoad(x, z) || z > 330);
  // CC0 scans scattered on the verges and around farms.
  const at = (x, z, extra = {}) => ({ x, z, y: plainsHeight(x, z), rotation: random() * 6.28, ...extra });
  const verge = n => Array.from({ length: n }, () => {
    const vertical = random() < .5;
    const col = Math.floor(random() * 11), row = Math.floor(random() * 10);
    const along = range(-320, 320), side = (random() < .5 ? -1 : 1) * range(2.6, 4);
    return vertical ? at(roadX(col) + side, Math.min(220, along)) : at(along, roadZ(row) + side);
  });
  scatter(world, 'dandelion_01', verge(70), { size: .17, shadow: false });
  scatter(world, 'weed_plant_02', verge(70), { size: .1, shadow: false });
  scatter(world, 'nettle_plant', verge(50), { size: .22, shadow: false });
  scatter(world, 'shrub_04', verge(40), { size: .24, shadow: false });
  scatter(world, 'rock_07', verge(40).map(p => ({ ...p, scale: range(.8, 2.2) })), { size: .16 });
  scatter(world, 'tree_stump_01', [at(-335, 120), at(340, -250), at(-300, 330), at(250, 332), at(120, 336)], { size: .6, collider: .6 });
  scatter(world, 'rock_moss_set_01', [at(-352, 40, { scale: .5 }), at(352, 180, { scale: .6 }), at(-150, 342, { scale: .45 })], { size: 1.8 });
  scatter(world, 'wooden_crate_02', [at(-213, -206), at(-217.5, -206.2, { scale: .9 }), at(197, 22)], { size: .48, collider: .45 });
  scatter(world, 'wooden_bucket_02', [at(-219, -203), at(192, 15)], { size: .32 });
  scatter(world, 'watering_can_metal_01', [at(-212, -203)], { size: .3 });
  scatter(world, 'rusted_spade_01', [{ x: -246.5, y: plainsHeight(-246.5, -166), z: -166, rotation: .3, tilt: -.25 }], { size: 1.1 });
  scatter(world, 'fern_02', Array.from({ length: 30 }, () => at(range(-360, -340), range(-300, 300))), { size: .45 });
  // Second detail pass: yard clutter, verge grasses, ambient life and dusk glow.
  world.timeHooks ??= [];
  extraMaterials(world);
  duskLightPool(world);
  scatter(world, 'grass_bermuda_01', verge(90), { size: .22, shadow: false });
  scatter(world, 'grass_medium_02', verge(70), { size: .38, shadow: false });
  scatter(world, 'celandine_01', verge(40), { size: .2, shadow: false });
  scatter(world, 'old_tyre', [at(-243, -165), at(-243.2, -165.1, { y: plainsHeight(-243, -165) + .2 }), at(232, 18)], { size: .2 });
  scatter(world, 'plastic_crate_01', [at(-240, -166), at(240, 17), at(49, -228)], { size: .3 });
  scatter(world, 'propane_tank', [at(-237, -176), at(33, -281)], { size: .8, collider: .3 });
  scatter(world, 'compost_bags', [at(-239, -165.6), at(47, -227)], { size: .35 });
  scatter(world, 'rubber_boots', [at(-221, -172.5), at(172, 13.6), at(42, -279.4)], { size: .34, shadow: false });
  scatter(world, 'wooden_broom', [{ ...at(-218.5, -173), tilt: -.2 }], { size: 1.2, shadow: false });
  scatter(world, 'wicker_basket_02', [at(-214, -205), at(195, 20)], { size: .3 });
  keiTruckSimple(world, 176, 17, .4, 0x9fb4c4);
  const smoke = [[-225, -178, .06], [-190, -177, -.09], [169, 8, 0], [214, 6, .1], [39, -285, 0]].map(([x, z]) => ({ x, y: plainsHeight(x, z) + 8.1, z: z + 2.5 }));
  const water = plainsFields.filter(f => f.kind === 'water');
  const egretSpots = water.flatMap(f => [0, 1, 2].map(() => ({ x: range(f.x1 + 6, f.x2 - 6), z: range(f.z1 + 6, f.z2 - 6), y: f.y + .06 })));
  buildAmbient(world, {
    smoke,
    fireflyAnchors: water.map(f => ({ x: f.x1 - 2, z: f.z1 + 26, y: f.y, r: 8, n: 30 })).concat([{ x: -345, z: -120, y: plainsHeight(-345, -120), r: 12, n: 40 }]),
    egretSpots,
    dragonAccept: (x, z) => !onRoad(x, z, 1),
    butterflyAccept: (x, z) => !onRoad(x, z, 1.5),
  });
}
