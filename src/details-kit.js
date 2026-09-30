import * as THREE from 'three';
import { groundHeight } from './terrain.js';

// Small construction kit shared by the hand-placed details on both maps.
// Static parts go to world.staticMeshes (merged by material into a handful of draws).
export const canvasTexture = (draw, w = 256, h = 256) => {
  const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t;
};
export function mesh(world, geometry, material, x, y, z, { parent = world.scene, rx = 0, ry = 0, rz = 0, shadow = true, merge = true } = {}) {
  const m = new THREE.Mesh(geometry, material);
  m.position.set(x, y, z); m.rotation.set(rx, ry, rz);
  m.castShadow = shadow; m.receiveShadow = true;
  parent.add(m); if (merge) world.staticMeshes.push(m);
  return m;
}
export const box = (world, w, h, d, x, y, z, material, options) => mesh(world, new THREE.BoxGeometry(w, h, d), material, x, y, z, options);
export const cylinder = (world, rt, rb, h, x, y, z, material, options = {}) =>
  mesh(world, new THREE.CylinderGeometry(rt, rb, h, options.segments ?? 12), material, x, y, z, options);
export const sphere = (world, r, x, y, z, material, options = {}) =>
  mesh(world, new THREE.SphereGeometry(r, options.segments ?? 12, Math.max(6, (options.segments ?? 12) - 2)), material, x, y, z, options);
// A group standing on the ground at (x, z), facing `ry` (local +z is the front).
export function anchor(world, x, z, ry = 0, y) {
  const g = new THREE.Group(); g.position.set(x, y ?? world.groundHeight?.(x, z) ?? groundHeight(x, z), z); g.rotation.y = ry; world.scene.add(g); return g;
}
// Local (lx, lz) of a footprint rotated by ry to world coordinates (matches Object3D.rotation.y).
export const local = (x, z, ry, lx, lz) => [x + Math.cos(ry) * lx + Math.sin(ry) * lz, z - Math.sin(ry) * lx + Math.cos(ry) * lz];
// Sagging cables between consecutive points, as one LineSegments.
export function cable(points, material, sagRatio = .03) {
  const vertices = [];
  for (let i = 0; i < points.length - 1; i++) {
    const a = points[i], b = points[i + 1], sag = a.distanceTo(b) * sagRatio;
    for (let j = 0; j < 16; j++) for (const t of [j / 16, (j + 1) / 16]) {
      vertices.push(THREE.MathUtils.lerp(a.x, b.x, t), THREE.MathUtils.lerp(a.y, b.y, t) - sag * 4 * t * (1 - t), THREE.MathUtils.lerp(a.z, b.z, t));
    }
  }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  return new THREE.LineSegments(g, material);
}
export function palette(world) {
  const m = world.materials;
  return m.detail ??= {
    red: new THREE.MeshStandardMaterial({ color: 0xb8322a, roughness: .5 }),
    cloth: new THREE.MeshStandardMaterial({ color: 0xc03a2e, roughness: 1 }),
    white: new THREE.MeshStandardMaterial({ color: 0xf3f1ea, roughness: .9 }),
    paper: new THREE.MeshStandardMaterial({ color: 0xfbfaf4, roughness: .9, side: THREE.DoubleSide }),
    rope: new THREE.MeshStandardMaterial({ color: 0xcdb77e, roughness: 1 }),
    straw: new THREE.MeshStandardMaterial({ color: 0xc9ad63, roughness: 1, map: m.roof.map, normalMap: m.roof.normalMap }),
    black: new THREE.MeshStandardMaterial({ color: 0x24262a, roughness: .6 }),
    steel: new THREE.MeshStandardMaterial({ color: 0x6d7473, roughness: .5, metalness: .6 }),
    rust: new THREE.MeshStandardMaterial({ color: 0x7c4a33, roughness: .8, metalness: .3 }),
    tin: new THREE.MeshStandardMaterial({ color: 0x8e9a95, roughness: .45, metalness: .55 }),
    creosote: new THREE.MeshStandardMaterial({ color: 0x5a4a38, roughness: .95, map: m.darkWood.map, normalMap: m.darkWood.normalMap }),
    insulator: new THREE.MeshStandardMaterial({ color: 0xeeeeea, roughness: .25 }),
    blue: new THREE.MeshStandardMaterial({ color: 0x2f5f9a, roughness: .5 }),
    yellow: new THREE.MeshStandardMaterial({ color: 0xe4b830, roughness: .6 }),
    copper: new THREE.MeshStandardMaterial({ color: 0x5f8f7c, roughness: .6, metalness: .35 }),
    wire: new THREE.LineBasicMaterial({ color: 0x2c302c }),
    wellWater: new THREE.MeshStandardMaterial({ color: 0x1b2d2a, roughness: .05, metalness: .3 }),
    persimmon: new THREE.MeshStandardMaterial({ color: 0xe8792a, roughness: .45 }),
    leafDark: new THREE.MeshStandardMaterial({ color: 0x3f5e2a, roughness: .9 }),
  };
}
// 紙垂: a zig-zag strip of white paper marking a sacred boundary.
export function shide(world, parent, x, y, z) {
  const w = .06, s = new THREE.Shape();
  s.moveTo(0, 0); s.lineTo(w, 0); s.lineTo(w, -.08); s.lineTo(w * 2, -.08); s.lineTo(w * 2, -.18); s.lineTo(w * 3, -.18); s.lineTo(w * 3, -.3);
  s.lineTo(w * 2, -.3); s.lineTo(w * 2, -.2); s.lineTo(w, -.2); s.lineTo(w, -.1); s.lineTo(0, -.1); s.closePath();
  return mesh(world, new THREE.ShapeGeometry(s), palette(world).paper, x - .09, y, z, { parent, shadow: false });
}
// Painted board text as a textured plane (kept un-merged: it has its own texture).
export function label(world, parent, text, x, y, z, w, h, { bg = '#efe7cf', fg = '#2d3d64', font = 'bold 60px sans-serif', ry = 0, sub, subFont = '24px sans-serif' } = {}) {
  const tex = canvasTexture((ctx, cw, ch) => {
    ctx.fillStyle = bg; ctx.fillRect(0, 0, cw, ch); ctx.fillStyle = fg; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.font = font; ctx.fillText(text, cw / 2, sub ? ch * .42 : ch / 2);
    if (sub) { ctx.font = subFont; ctx.fillText(sub, cw / 2, ch * .78); }
  }, 512, Math.round(512 * h / w));
  return mesh(world, new THREE.PlaneGeometry(w, h), new THREE.MeshStandardMaterial({ map: tex, roughness: .85 }), x, y, z, { parent, ry, merge: false, shadow: false });
}
