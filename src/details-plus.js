import * as THREE from 'three';
import { groundHeight, pathX, roadZ, railZ, fields, fieldAt } from './terrain.js';
import { scatter, seeded } from './props.js';
import { canvasTexture, mesh, box, cylinder, sphere, anchor, local, cable, palette, label } from './details-kit.js';
import { pbrMaterial } from './materials.js';
import { buildAmbient } from './ambient.js';

// Second pass of hand-made detail for the satoyama valley: the everyday clutter, signage,
// lighting and small animals that make a Japanese village feel inhabited.
const { random, range, pick } = seeded(55120);
const gh = (world, x, z) => (world.groundHeight ?? groundHeight)(x, z);
export const houses = [[-26, -64, 13, 9, -.08], [10, -81, 10, 8, .03], [49, -65, 12, 8, -.2], [-63, -76, 11, 9, .12], [82, -83, 9, 7, -.13], [-88, -51, 8, 6, .17]];

export { duskLightPool };
export function extraMaterials(world) {
  const m = world.materials;
  if (m.tinRoof) return m;
  m.tinRoof = pbrMaterial(world, 'tin', { tile: 1.2, color: 0xa8b0ac, roughness: .5, metalness: .55, normal: 1 });
  m.rustRoof = pbrMaterial(world, 'rustmetal', { tile: 1.5, color: 0xb08a70, roughness: .8, metalness: .3, normal: .8 });
  m.pebbles = pbrMaterial(world, 'pebbles', { tile: 1.2, color: 0xc8c4b8, normal: 1 });
  m.mudLeaves = pbrMaterial(world, 'mudleaves', { tile: 2.2, color: 0xbab0a0, normal: .9 });
  m.mossWood = pbrMaterial(world, 'mosswood', { tile: 1.1, color: 0xb8b8a0, normal: .9 });
  m.shoji = new THREE.MeshStandardMaterial({ color: 0xf4efdf, roughness: .9, emissive: 0xffb866, emissiveIntensity: 0 });
  m.lamp = new THREE.MeshStandardMaterial({ color: 0xfff1cc, roughness: .4, emissive: 0xffd08a, emissiveIntensity: 0 });
  m.lanternPaper = new THREE.MeshStandardMaterial({ color: 0xf6e7c8, roughness: .8, emissive: 0xff9a40, emissiveIntensity: 0, side: THREE.DoubleSide });
  m.vending = new THREE.MeshStandardMaterial({ color: 0xe9eef2, roughness: .35, metalness: .2 });
  m.vendingFace = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: .3, emissive: 0xffffff, emissiveIntensity: .12 });
  // Everything that glows at dusk: one list, flipped by the time-of-day hook.
  world.glow = [[m.shoji, 1.3], [m.lamp, 2.6], [m.lanternPaper, 1.8], [m.vendingFace, .9]];
  world.timeHooks.push(time => {
    const k = time === 'evening' ? 1 : time === 'morning' ? .12 : 0;
    for (const [mat, max] of world.glow) mat.emissiveIntensity = mat === m.vendingFace ? .12 + k * max : k * max;
  });
  return m;
}

// Warm dusk light sources. Forward-rendered point lights are costly, and changing how many are
// visible recompiles every material, so a fixed pool of four always-present lights is moved to
// the sources nearest the walker; by day their intensity is simply zero.
function duskLight(world, x, y, z, color = 0xffb35c, intensity = 6, distance = 9) {
  (world.duskSources ??= []).push({ p: new THREE.Vector3(x, y, z), color: new THREE.Color(color), intensity, distance });
}
function duskLightPool(world, size = 4) {
  if (world.duskPool) return;
  const pool = world.duskPool = Array.from({ length: size }, () => { const l = new THREE.PointLight(0xffb35c, 0, 8, 2); l.castShadow = false; world.scene.add(l); return l; });
  let level = 0, last = -1;
  world.timeHooks.push(time => { level = time === 'evening' ? 1 : 0; last = -1; });
  world.detailUpdaters.push(t => {
    const sources = world.duskSources ?? [];
    if (!level || !sources.length) { if (last !== 0) { for (const l of pool) l.intensity = 0; last = 0; } return; }
    if (t - last < .5) return; last = t;          // re-rank twice a second
    const c = world.camera.position;
    const near = sources.map(s => [s, s.p.distanceToSquared(c)]).sort((a, b) => a[1] - b[1]);
    pool.forEach((l, i) => { const s = near[i]?.[0]; if (!s) { l.intensity = 0; return; } l.position.copy(s.p); l.color.copy(s.color); l.distance = s.distance; l.intensity = s.intensity * level; });
  });
}

// ---------------------------------------------------------------- 民家の作り込み
// 縁側, 障子, 雨戸袋, 雨樋, 表札, 軒先の干し柿・玉ねぎ, 植木鉢, 自転車, 長靴
function houseLife(world, [x, z, w, d, r], i) {
  const g = anchor(world, x, z, r, Math.max(gh(world, x, z), 0)), m = world.materials, p = palette(world);
  const front = d / 2;
  // Warm paper screens behind the glass so houses glow at dusk.
  for (const lx of [-w * .31, w * .29]) box(world, w * .22, 1.3, .02, lx, 2.36, front + .03, m.shoji, { parent: g, shadow: false });
  // 雨戸袋 (shutter boxes) beside the windows.
  box(world, .35, 1.5, .22, -w * .31 - w * .135, 2.36, front + .15, m.darkWood, { parent: g });
  // 雨樋: gutters under the thatch eaves and a downpipe at one corner.
  cylinder(world, .06, .06, w + .6, 0, 3.42, front + 1.02, p.tin, { parent: g, rz: Math.PI / 2, segments: 8 });
  cylinder(world, .035, .035, 3.2, w / 2 + .2, 1.8, front + 1.02, p.tin, { parent: g, segments: 6 });
  // 表札 (name plate) by the door.
  label(world, g, ['田中', '佐藤', '山本', '鈴木', '高橋', '小林'][i % 6], .95, 2.2, front + .2, .14, .42, { bg: '#e8dcc0', fg: '#262626', font: 'bold 150px serif', ry: 0 });
  // Stepping stones and a shoe stone (沓脱石) at the engawa.
  box(world, .9, .22, .5, -w * .2, .12, front + 1.35, m.granite, { parent: g });
  for (let k = 0; k < 4; k++) box(world, range(.45, .6), .08, range(.4, .5), range(-.15, .15), .04, front + 2.2 + k * .75, m.granite, { parent: g, ry: range(-.4, .4) });
  // Dried persimmons (干し柿) and onions hanging from the eaves.
  const eaveY = 3.3;
  for (let k = 0; k < 5; k++) {
    const lx = -w * .45 + k * .22;
    cylinder(world, .006, .006, 1, lx, eaveY - .5, front + .95, p.rope, { parent: g, segments: 4, shadow: false });
    for (let j = 0; j < 7; j++) sphere(world, .04, lx, eaveY - .12 - j * .13, front + .95, i % 2 ? p.persimmon : m.onion ??= new THREE.MeshStandardMaterial({ color: 0xc89a5a, roughness: .6 }), { parent: g, segments: 6, shadow: false }).scale.y = 1.2;
  }
  // A glowing entrance lamp.
  box(world, .16, .22, .16, -1, 2.95, front + .25, m.lamp, { parent: g, shadow: false });
  box(world, .2, .03, .2, -1, 3.08, front + .25, p.black, { parent: g, shadow: false });
  const [lx, lz] = local(x, z, r, -1, front + .6); duskLight(world, lx, g.position.y + 2.8, lz, 0xffb566, 5, 8);
  // Potted plants lined along the wall.
  const pots = [];
  for (let k = 0; k < 5; k++) { const [px, pz] = local(x, z, r, w * .12 + k * .42, front + .55); pots.push({ x: px, z: pz, y: g.position.y + .55, rotation: random() * 6, scale: range(.8, 1.2) }); }
  scatter(world, 'planter_pot_clay', pots, { size: .22, shadow: false });
  const [bx, bz] = local(x, z, r, w / 2 - .4, front + 1.6);
  scatter(world, 'rubber_boots', [{ x: bx, z: bz, y: g.position.y + .4, rotation: r + range(-.3, .3) }], { size: .34, shadow: false });
  if (i % 2 === 0) bicycle(world, ...local(x, z, r, w / 2 + 1.1, front + .4), r + Math.PI / 2 + .2);
  // Smoke source above the roof ridge vent.
  const [sx, sz] = local(x, z, r, 0, d * .55);
  world.smokeSources.push({ x: sx, y: g.position.y + 8.1, z: sz });
  world.windowLights.push(local(x, z, r, 0, front + 2));
}

// ママチャリ: the everyday step-through bicycle, with basket.
function bicycle(world, x, z, ry) {
  const g = anchor(world, x, z, ry), p = palette(world);
  const frame = world.materials.bikeFrame ??= new THREE.MeshStandardMaterial({ color: 0x6f8f9c, roughness: .4, metalness: .5 });
  for (const lx of [-.52, .52]) {
    mesh(world, new THREE.TorusGeometry(.33, .025, 6, 24), p.black, lx, .35, 0, { parent: g, merge: false });
    mesh(world, new THREE.TorusGeometry(.3, .006, 4, 20), p.steel, lx, .35, 0, { parent: g, merge: false, shadow: false });
  }
  box(world, .75, .035, .035, -.08, .52, 0, frame, { parent: g, rz: -.55 });
  box(world, .6, .035, .035, .12, .42, 0, frame, { parent: g, rz: .25 });
  cylinder(world, .018, .018, .5, -.2, .64, 0, frame, { parent: g, rz: .25, segments: 6 });
  box(world, .2, .05, .1, -.28, .9, 0, p.black, { parent: g });
  cylinder(world, .018, .018, .55, .42, .72, 0, frame, { parent: g, rz: .3, segments: 6 });
  box(world, .04, .04, .5, .35, .98, 0, p.steel, { parent: g });
  box(world, .3, .2, .28, .62, .86, 0, p.steel, { parent: g });
  box(world, .9, .02, .1, 0, .42, 0, p.tin, { parent: g, rz: .02 }).visible = false;
  world.colliders.push({ x, z, halfWidth: .9, halfDepth: .25, rotation: ry, r: .9 });
}

// ---------------------------------------------------------------- 自動販売機
function vendingMachine(world, x, z, ry) {
  const g = anchor(world, x, z, ry), m = world.materials, p = palette(world);
  box(world, 1.0, 1.85, .75, 0, .93, 0, m.vending, { parent: g });
  const face = canvasTexture((ctx, w, h) => {
    ctx.fillStyle = '#f5f7fa'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#1b5fae'; ctx.fillRect(0, 0, w, 40); ctx.fillStyle = '#fff'; ctx.font = 'bold 26px sans-serif'; ctx.textAlign = 'center'; ctx.fillText('つめた〜い', w / 2, 29);
    const colors = ['#c62d2d', '#1f7a3d', '#e6a118', '#2b4f9e', '#8b5a2b', '#e0e0e0', '#3aa0c9', '#d95b8b'];
    for (let row = 0; row < 3; row++) for (let col = 0; col < 6; col++) {
      const cx = 22 + col * 38, cy = 60 + row * 74;
      ctx.fillStyle = '#dde3ea'; ctx.fillRect(cx - 14, cy, 30, 60);
      ctx.fillStyle = colors[(row * 6 + col) % colors.length]; ctx.fillRect(cx - 10, cy + 6, 22, 44); ctx.fillStyle = '#fff'; ctx.fillRect(cx - 10, cy + 20, 22, 8);
      ctx.fillStyle = '#222'; ctx.font = '11px monospace'; ctx.fillText(row === 2 ? '160' : '130', cx + 1, cy + 58);
      ctx.fillStyle = row === 2 ? '#d22' : '#27c'; ctx.fillRect(cx - 7, cy + 62, 16, 5);
    }
    ctx.fillStyle = '#d92d2d'; ctx.fillRect(0, 290, w, 22); ctx.fillStyle = '#fff'; ctx.font = 'bold 16px sans-serif'; ctx.fillText('あったか〜い', w / 2, 306);
    ctx.fillStyle = '#333'; ctx.fillRect(40, 340, w - 80, 70); ctx.fillStyle = '#555'; ctx.fillRect(180, 440, 40, 30);
  }, 256, 512);
  mesh(world, new THREE.PlaneGeometry(.88, 1.7), m.vendingFace.clone(), 0, .98, .376, { parent: g, merge: false, shadow: false }).material.map = face;
  const faceMesh = g.children.at(-1); world.glow.push([faceMesh.material, .9]); faceMesh.material.emissiveMap = face;
  box(world, 1.05, .08, .8, 0, 1.89, 0, p.steel, { parent: g });
  // Recycling box beside it.
  box(world, .45, .75, .4, .8, .38, .1, m.vending, { parent: g });
  label(world, g, '空き缶', .8, .55, .305, .36, .14, { bg: '#1b5fae', fg: '#fff', font: 'bold 80px sans-serif' });
  const [lx, lz] = local(x, z, ry, 0, .9); duskLight(world, lx, g.position.y + 1.1, lz, 0xe8f4ff, 4, 6);
  world.colliders.push({ x, z, halfWidth: .8, halfDepth: .45, rotation: ry, r: 1 });
}

// ---------------------------------------------------------------- 防犯灯 (street lamps on poles)
function streetLamps(world) {
  const m = world.materials, p = palette(world);
  for (const [x, z] of [[pathX(-5) - 2.4, -5], [pathX(40) + 2.4, 40], [pathX(85) - 2.4, 85], [-45, roadZ(-45) + 2.6], [35, roadZ(35) + 2.6], [70, roadZ(70) + 2.6]]) {
    const y = gh(world, x, z);
    cylinder(world, .07, .09, 5.2, x, y + 2.6, z, m.concrete, { segments: 8 });
    const dir = Math.sign(pathX(z) - x) || 1;
    box(world, .9, .05, .05, x + dir * .4, y + 5.05, z, p.steel);
    box(world, .38, .09, .16, x + dir * .8, y + 4.97, z, p.white);
    box(world, .32, .03, .12, x + dir * .8, y + 4.92, z, m.lamp, { shadow: false });
    world.colliders.push({ x, z, r: .15 });
  }
}

// ---------------------------------------------------------------- 野菜の無人販売所
function honestyStall(world, x, z, ry) {
  const g = anchor(world, x, z, ry), m = world.materials, p = palette(world);
  for (const lx of [-.9, .9]) for (const lz of [-.35, .35]) box(world, .07, 1.7, .07, lx, .85, lz, m.wood, { parent: g });
  box(world, 2, .05, .9, 0, .8, 0, m.wood, { parent: g });
  box(world, 2.3, .04, 1.2, 0, 1.75, 0, m.rustRoof, { parent: g, rx: -.12 });
  box(world, 2, .5, .03, 0, 1.2, -.45, m.darkWood, { parent: g });
  label(world, g, '無人販売 一袋百円', 0, 1.25, -.43, 1.4, .3, { bg: '#f3ecd2', fg: '#1f3a1f', font: 'bold 64px serif' });
  const veg = [0x3d7a2a, 0xd9451f, 0x6b2f5c, 0xe8d6a0, 0x6e9e2e];
  for (let k = 0; k < 5; k++) {
    const lx = -.75 + k * .37;
    box(world, .3, .08, .3, lx, .87, .05, p.straw, { parent: g });
    for (let j = 0; j < 4; j++) sphere(world, .055, lx + range(-.08, .08), .95, .05 + range(-.08, .08), new THREE.MeshStandardMaterial({ color: veg[k], roughness: .5 }), { parent: g, segments: 7, shadow: false });
  }
  box(world, .18, .2, .15, .8, .92, .25, m.hinoki, { parent: g }); // 料金箱
  world.colliders.push({ x, z, halfWidth: 1.1, halfDepth: .55, rotation: ry, r: 1.2 });
}

// ---------------------------------------------------------------- 提灯 (shrine approach lanterns on a rope)
function shrineLanterns(world) {
  const m = world.materials, p = palette(world);
  const pts = [];
  for (let i = 0; i < 9; i++) {
    const z = -70 - i * 1.3;
    for (const side of [-1, 1]) {
      const x = 33 + side * 1.7, y = gh(world, x, z);
      if (i % 2 === 0) { cylinder(world, .05, .06, 2.4, x, y + 1.2, z, m.bamboo, { segments: 6 }); world.colliders.push({ x, z, r: .1 }); }
      const lantern = mesh(world, new THREE.SphereGeometry(.17, 12, 8), m.lanternPaper, x, y + 2.05, z, { shadow: false });
      lantern.scale.y = 1.35;
      box(world, .16, .04, .16, x, y + 2.3, z, p.black, { shadow: false });
      box(world, .16, .04, .16, x, y + 1.8, z, p.black, { shadow: false });
    }
  }
  duskLight(world, 33, gh(world, 33, -75) + 2.1, -75, 0xff9a40, 6, 11);
  duskLight(world, 33, gh(world, 33, -84) + 1.7, -84, 0xffc27a, 4, 7);
}

// ---------------------------------------------------------------- 道しるべ・看板
function signs(world) {
  const m = world.materials, p = palette(world);
  const post = (x, z, ry, text, sub) => {
    const g = anchor(world, x, z, ry);
    box(world, .16, 1.4, .16, 0, .7, 0, m.hinoki, { parent: g });
    mesh(world, new THREE.ConeGeometry(.13, .12, 4), m.hinoki, 0, 1.46, 0, { parent: g, ry: Math.PI / 4 });
    label(world, g, text, 0, .85, .082, .13, .95, { bg: '#dcc9a3', fg: '#20180f', font: 'bold 200px serif' });
    world.colliders.push({ x, z, r: .15 });
    return g;
  };
  // Vertical text labels: draw each character on its own line.
  const vertical = (world2, parent, text, x, y, z, w, h, opts = {}) => {
    const tex = canvasTexture((ctx, cw, ch) => {
      ctx.fillStyle = opts.bg ?? '#dcc9a3'; ctx.fillRect(0, 0, cw, ch); ctx.fillStyle = opts.fg ?? '#20180f';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.font = `bold ${Math.floor(ch / (text.length + .6))}px serif`;
      [...text].forEach((c, i) => ctx.fillText(c, cw / 2, ch * (i + .8) / (text.length + .6)));
    }, 64, 512);
    return mesh(world2, new THREE.PlaneGeometry(w, h), new THREE.MeshStandardMaterial({ map: tex, roughness: .9 }), x, y, z, { parent, merge: false, shadow: false, ry: opts.ry ?? 0 });
  };
  for (const [x, z, ry, text] of [[pathX(30) + 2.1, 30, -Math.PI / 2, '稲荷神社'], [pathX(-26) - 2.1, -26, Math.PI / 2, '里山駅'], [-6, roadZ(-6) + 2.4, Math.PI, '火の見櫓']]) {
    const g = anchor(world, x, z, ry);
    box(world, .16, 1.5, .16, 0, .75, 0, m.hinoki, { parent: g });
    mesh(world, new THREE.ConeGeometry(.13, .12, 4), m.hinoki, 0, 1.56, 0, { parent: g, ry: Math.PI / 4 });
    vertical(world, g, text, 0, .92, .082, .13, 1);
    world.colliders.push({ x, z, r: .15 });
  }
  // Rusty enamel ads on the barn and a "飛び出し注意" kid sign by the road.
  const ad = (x, z, y, ry, text, bg, fg) => { const g = anchor(world, x, z, ry, y); label(world, g, text, 0, 0, 0, .45, 1.2, { bg, fg, font: 'bold 70px sans-serif' }); };
  const gx = -46, gz = -57, gy = gh(world, gx, gz);
  const enamel = canvasTexture((ctx, w, h) => {
    ctx.fillStyle = '#1f3c7a'; ctx.fillRect(0, 0, w, h); ctx.fillStyle = '#f2d23a'; ctx.textAlign = 'center';
    ctx.font = 'bold 76px serif'; ['金', '鳥', '蚊', '取'].forEach((c, i) => ctx.fillText(c, w / 2, 90 + i * 92));
    ctx.fillStyle = 'rgba(120,70,30,.55)'; for (let i = 0; i < 60; i++) { ctx.beginPath(); ctx.arc(range(0, w), range(0, h), range(1, 7), 0, 7); ctx.fill(); }
  }, 128, 420);
  mesh(world, new THREE.PlaneGeometry(.38, 1.25), new THREE.MeshStandardMaterial({ map: enamel, roughness: .5, metalness: .3 }), gx + 2.52, gy + 1.15, gz + .6, { ry: Math.PI / 2, merge: false, shadow: false });
  const kid = canvasTexture((ctx, w, h) => {
    ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, w, h); ctx.fillStyle = '#d7262a'; ctx.font = 'bold 44px sans-serif'; ctx.textAlign = 'center'; ctx.fillText('とび出し', w / 2, 56); ctx.fillText('注意!', w / 2, 108);
    ctx.fillStyle = '#e8b52a'; ctx.beginPath(); ctx.arc(w / 2, 190, 34, 0, 7); ctx.fill(); ctx.fillStyle = '#3a6fc0'; ctx.fillRect(w / 2 - 30, 226, 60, 110); ctx.fillStyle = '#222'; ctx.fillRect(w / 2 - 28, 336, 22, 90); ctx.fillRect(w / 2 + 6, 336, 22, 90);
  }, 256, 512);
  const kx = 22, kz = roadZ(22) - 2.5, kg = anchor(world, kx, kz, .15);
  mesh(world, new THREE.PlaneGeometry(.5, 1), new THREE.MeshStandardMaterial({ map: kid, roughness: .7, side: THREE.DoubleSide }), 0, .55, 0, { parent: kg, merge: false });
  box(world, .04, .1, .04, 0, .03, 0, p.black, { parent: kg });
}

// ---------------------------------------------------------------- 畦の彼岸花・土手の草・田の水口
function higanbana(world, count) {
  const stem = new THREE.CylinderGeometry(.006, .008, .42, 4); stem.translate(0, .21, 0);
  const petals = [];
  for (let k = 0; k < 6; k++) { const pg = new THREE.BoxGeometry(.01, .005, .09); pg.translate(0, 0, .045); pg.rotateX(-.7); pg.rotateY(k / 6 * Math.PI * 2); pg.translate(0, .43, 0); petals.push(pg); }
  const red = new THREE.MeshStandardMaterial({ color: 0xd8261c, roughness: .5, emissive: 0x3a0503 });
  const green = new THREE.MeshStandardMaterial({ color: 0x3f6a2a, roughness: .8 });
  const merged = petals.reduce((a, g) => { a.push(...g.toNonIndexed().attributes.position.array); return a; }, []);
  const flowerGeo = new THREE.BufferGeometry(); flowerGeo.setAttribute('position', new THREE.Float32BufferAttribute(merged, 3)); flowerGeo.computeVertexNormals();
  const stems = new THREE.InstancedMesh(stem, green, count), heads = new THREE.InstancedMesh(flowerGeo, red, count), d = new THREE.Object3D();
  let n = 0;
  for (let i = 0; i < count * 3 && n < count; i++) {
    const f = pick(fields); const x = range(f.x1 + .5, f.x2 - .5), z = f.z2 + 1 + range(-.45, .45);
    if (Math.abs(x - pathX(z)) < 2.5) continue;
    // Clumps: a few stems together, the way they come up along the levees in September.
    for (let k = 0; k < 4 && n < count; k++) {
      d.position.set(x + range(-.25, .25), gh(world, x, z) + .1, z + range(-.08, .08)); d.rotation.set(range(-.15, .15), random() * 6.3, range(-.15, .15)); d.scale.setScalar(range(.8, 1.2)); d.updateMatrix();
      stems.setMatrixAt(n, d.matrix); heads.setMatrixAt(n, d.matrix); n++;
    }
  }
  stems.count = heads.count = n; heads.castShadow = true;
  world.scene.add(stems, heads);
}

// ---------------------------------------------------------------- 軽トラ at the shed, 耕運機, ビニールハウス
export function keiTruckSimple(world, x, z, ry, color = 0xf2f2ee) {
  const g = anchor(world, x, z, ry), p = palette(world);
  const body = new THREE.MeshStandardMaterial({ color, roughness: .35, metalness: .3 });
  const glass = world.materials.glass;
  box(world, 1.4, .5, 3.35, 0, .72, 0, body, { parent: g });
  box(world, 1.38, .72, 1.1, 0, 1.33, 1.05, body, { parent: g });
  box(world, 1.3, .5, .04, 0, 1.4, 1.61, glass, { parent: g, rx: -.15 });
  for (const s of [-1, 1]) box(world, .03, .42, .8, s * .7, 1.42, 1.05, glass, { parent: g });
  for (const s of [-1, 1]) box(world, .04, .38, 2.1, s * .69, 1.14, -.55, body, { parent: g });
  box(world, 1.38, .38, .04, 0, 1.14, -1.64, body, { parent: g });
  box(world, 1.4, .16, .08, 0, .46, 1.7, p.black, { parent: g });
  for (const s of [-1, 1]) box(world, .2, .1, .04, s * .5, .82, 1.69, world.materials.lamp, { parent: g, shadow: false });
  for (const [lx, lz] of [[-.62, 1.05], [.62, 1.05], [-.62, -1.05], [.62, -1.05]]) { const t = cylinder(world, .26, .26, .18, lx, .27, lz, p.black, { parent: g, rz: Math.PI / 2, segments: 14 }); }
  // A little load in the bed: sacks and a crate.
  for (let k = 0; k < 3; k++) sphere(world, .22, range(-.35, .35), 1.1, -1 + k * .45, world.materials.sack ??= new THREE.MeshStandardMaterial({ color: 0xcdbb91, roughness: 1 }), { parent: g, segments: 8 }).scale.set(1.2, .6, .9);
  world.colliders.push({ x, z, halfWidth: .8, halfDepth: 1.8, rotation: ry, r: 1.9 });
}
function greenhouse(world, x, z, ry, len = 10) {
  const g = anchor(world, x, z, ry), m = world.materials, p = palette(world);
  const film = m.film ??= new THREE.MeshStandardMaterial({ color: 0xe6efe9, roughness: .3, transparent: true, opacity: .45, side: THREE.DoubleSide, depthWrite: false });
  const geo = new THREE.CylinderGeometry(2.2, 2.2, len, 18, 1, true, -Math.PI / 2, Math.PI); geo.rotateX(Math.PI / 2);
  mesh(world, geo, film, 0, 0, 0, { parent: g, merge: false, shadow: false });
  for (let k = 0; k <= len; k += 1.25) mesh(world, new THREE.TorusGeometry(2.21, .02, 4, 18, Math.PI), p.steel, 0, 0, -len / 2 + k, { parent: g });
  const leaf = new THREE.MeshStandardMaterial({ color: 0x4f8a33, roughness: .8 });
  for (let row = -1; row <= 1; row++) for (let k = 0; k < len / .5 - 1; k++) sphere(world, .2, row * .9, .18, -len / 2 + .5 + k * .5, leaf, { parent: g, segments: 6 }).scale.y = .7;
  world.colliders.push({ x, z, halfWidth: 2.25, halfDepth: len / 2, rotation: ry, r: len / 2 + 1 });
}

// ---------------------------------------------------------------- 物置・トタン小屋
function tinShed(world, x, z, ry) {
  const g = anchor(world, x, z, ry), m = world.materials, p = palette(world);
  box(world, 3.2, 2.2, 2.4, 0, 1.1, 0, m.rustRoof, { parent: g });
  box(world, 3.7, .06, 3, 0, 2.35, 0, m.tinRoof, { parent: g, rx: .12 });
  box(world, 1.4, 1.9, .05, -.6, .95, 1.22, m.oldwood ?? m.darkWood, { parent: g });
  for (const lx of [-1.4, 1.4]) box(world, .08, 2.2, .08, lx, 1.1, 1.22, m.darkWood, { parent: g });
  world.colliders.push({ x, z, halfWidth: 1.7, halfDepth: 1.35, rotation: ry, r: 2.2 });
  const at = (lx, lz, extra) => { const [wx, wz] = local(x, z, ry, lx, lz); return { x: wx, z: wz, y: g.position.y, rotation: ry + range(-.4, .4), ...extra }; };
  scatter(world, 'old_tyre', [at(1.2, 1.7), at(1.25, 1.7, { y: g.position.y + .2 })], { size: .2 });
  scatter(world, 'wooden_ladder', [{ ...at(-1.75, .2), tilt: 0, tiltZ: .22, rotation: ry + Math.PI / 2 }], { size: 2.6 });
  scatter(world, 'propane_tank', [at(1.9, -.6)], { size: .8, collider: .3 });
  scatter(world, 'plastic_crate_01', [at(.4, 1.8), at(.4, 1.8, { y: g.position.y + .3, rotation: ry + .1 })], { size: .3 });
  scatter(world, 'compost_bags', [at(-.3, 1.9)], { size: .35 });
}

// ---------------------------------------------------------------- 薪割り場 / 縁台
function choppingBlock(world, x, z) {
  const y = gh(world, x, z);
  scatter(world, 'tree_stump_02', [{ x, z, y, rotation: 1, scale: .6 }], { size: .45, collider: .4 });
  scatter(world, 'hatchet', [{ x: x + .05, z: z + .05, y: y + .42, rotation: .6, tilt: -1.1 }], { size: .4, shadow: false });
  scatter(world, 'folding_wooden_stool', [{ x: x + 1.1, z: z - .4, y, rotation: 2 }], { size: .45 });
}

// ---------------------------------------------------------------- 苔・落ち葉・下草 in the forest edge
function groundCover(world) {
  const at = (x, z, extra = {}) => ({ x, z, y: gh(world, x, z), rotation: random() * 6.28, ...extra });
  const ring = (cx, cz, n, r1, r2, extra) => Array.from({ length: n }, () => { const a = random() * 6.28, r = range(r1, r2); return at(cx + Math.cos(a) * r, cz + Math.sin(a) * r, extra); });
  const forestEdge = n => Array.from({ length: n }, () => {
    const side = random();
    if (side < .33) { const x = range(-112, 112); return at(x, range(-100, -92), { scale: range(.7, 1.4) }); }
    const s = side < .66 ? -1 : 1; return at(s * range(113, 118), range(-90, 125), { scale: range(.7, 1.4) });
  });
  scatter(world, 'moss_01', forestEdge(60).concat(ring(38.5, -88, 12, 1.2, 3)), { size: .1, shadow: false });
  scatter(world, 'grass_medium_02', forestEdge(40), { size: .45, shadow: false });
  scatter(world, 'shrub_02', forestEdge(18), { size: .8 });
  scatter(world, 'shrub_03', forestEdge(16), { size: .6, shadow: false });
  scatter(world, 'celandine_01', ring(33, -80, 14, 2.5, 7), { size: .2, shadow: false });
  const verge = n => Array.from({ length: n }, () => { const z = range(-60, 124); let x = pathX(z) + (random() > .5 ? 1 : -1) * range(2.4, 3.8); if (fieldAt(x, z, .3)) x = 2 * pathX(z) - x; return at(x, z, { scale: range(.7, 1.3) }); });
  scatter(world, 'grass_bermuda_01', verge(60), { size: .22, shadow: false });
  scatter(world, 'grass_medium_02', verge(30), { size: .38, shadow: false });
}

// ---------------------------------------------------------------- 家まわりの細々
function yardProps(world) {
  const at = (x, z, extra = {}) => ({ x, z, y: gh(world, x, z), rotation: random() * 6.28, ...extra });
  scatter(world, 'wooden_broom', [{ ...at(-19.5, -59.2), tilt: -.18 }, { ...at(8.4, -76.3), tilt: -.2 }], { size: 1.2, shadow: false });
  scatter(world, 'garden_gloves_01', [at(-79, -33.5, { y: gh(world, -79, -33.5) + .03 })], { size: .05, shadow: false });
  scatter(world, 'seeding_tray_01', [at(-77, -34), at(-76.4, -34.2)], { size: .08 });
  scatter(world, 'sweet_potato', [at(-76.8, -33.6), at(-76.6, -33.5), at(-76.9, -33.4)], { size: .06, shadow: false });
  scatter(world, 'wicker_basket_02', [at(-78.2, -33.2), at(12.2, -76.9)], { size: .3 });
  scatter(world, 'wooden_bowl_01', [at(-34.6, -54.2, { y: gh(world, -34.6, -54.2) + .8 })], { size: .08, shadow: false });
  scatter(world, 'metal_jerrycan', [at(-43.6, -55.1)], { size: .45 });
}

export function buildSatoyamaPlus(world) {
  world.detailUpdaters ??= []; world.timeHooks ??= [];
  world.smokeSources = []; world.windowLights = [];
  extraMaterials(world);
  duskLightPool(world);
  houses.forEach((h, i) => houseLife(world, h, i));
  vendingMachine(world, -16.5, roadZ(-16.5) - 3.3, 0);
  streetLamps(world);
  honestyStall(world, pathX(55) + 2.8, 55, -Math.PI / 2);
  shrineLanterns(world);
  signs(world);
  higanbana(world, world.mobile ? 500 : 900);
  keiTruckSimple(world, -41, -60.5, Math.PI / 2 + .1);
  greenhouse(world, -74, -24.5, Math.PI / 2 + .17, 9);
  tinShed(world, 19, -84, -.1);
  choppingBlock(world, -37.2, -66);
  groundCover(world);
  yardProps(world);
  // Egrets wade in the flooded terraces; kitchen smoke rises from every thatched roof.
  const egretSpots = [];
  for (const f of [fields[6], fields[8], fields[12], fields[17]].filter(Boolean)) egretSpots.push({ x: range(f.x1 + 5, f.x2 - 5), z: range(f.z1 + 4, f.z2 - 4), y: f.y + .08 });
  buildAmbient(world, {
    smoke: world.smokeSources,
    fireflyAnchors: [{ x: 61.5, z: 40, y: gh(world, 61.5, 40), r: 6, n: 40 }, { x: 61.5, z: 90, y: gh(world, 61.5, 90), r: 6, n: 30 }, { x: -100, z: -84, y: gh(world, -100, -84), r: 10, n: 40 }, { x: 33, z: -80, y: gh(world, 33, -80), r: 6, n: 20 }],
    egretSpots,
    dragonAccept: (x, z) => !!fieldAt(x, z, 2) || Math.abs(x - pathX(z)) < 6,
    butterflyAccept: (x, z) => !fieldAt(x, z, -.5) && Math.abs(z - railZ(x)) > 3,
  });
}
