import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

export const clamp = THREE.MathUtils.clamp;
export const smooth = x => { x = clamp(x, 0, 1); return x * x * (3 - 2 * x); };
export function hash(x, y) { const n = Math.sin(x * 127.1 + y * 311.7) * 43758.5453; return n - Math.floor(n); }
export function noise(x, y) {
  const ix = Math.floor(x), iy = Math.floor(y), u = smooth(x - ix), v = smooth(y - iy);
  return THREE.MathUtils.lerp(THREE.MathUtils.lerp(hash(ix, iy), hash(ix + 1, iy), u), THREE.MathUtils.lerp(hash(ix, iy + 1), hash(ix + 1, iy + 1), u), v);
}
export function fbm(x, y) { return noise(x, y) * .56 + noise(x * 2.03, y * 2.03) * .27 + noise(x * 4.07, y * 4.07) * .12 + noise(x * 8.11, y * 8.11) * .05; }
export const pathX = z => 10 + 4.5 * Math.sin(z * .019) + 2 * Math.sin(z * .055);
export const roadZ = x => -29 + 1.3 * Math.sin(x * .04);
export const railZ = x => -39 + .00072 * x * x;
export const railHeight = x => 4.5 + .002 * x;
const valley = (x, z) => 1.8 - .025 * z + .0001 * x * x + .8 * noise(x * .026 + 6, z * .021);
export const fields = [];
for (const [row, [z1, z2]] of [[-24,-3],[3,29],[35,66],[72,113]].entries()) {
  for (const [column, [x1, x2]] of [[-106,-68],[-63,-27],[-22,6],[23,59],[64,107]].entries()) {
    const cx = (x1 + x2) / 2, cz = (z1 + z2) / 2;
    fields.push({ x1, x2, z1, z2, y: Math.round(valley(cx, cz) / .45) * .45 - .25, young: row === 0 && column === 3, row, column });
  }
}
export function fieldAt(x, z, margin = 0) { return fields.find(f => x > f.x1 - margin && x < f.x2 + margin && z > f.z1 - margin && z < f.z2 + margin); }
export function groundHeight(x, z) {
  const f = fieldAt(x, z, 2.2);
  let y = valley(x, z);
  if (f) {
    const outside = Math.max(f.x1 - x, x - f.x2, f.z1 - z, z - f.z2, 0);
    y = THREE.MathUtils.lerp(f.y, y + .18, smooth(outside / 2.2));
  }
  // Individual ridges and valleys, rather than a single smooth bowl.
  const edge = Math.max(smooth((-z - 84) / 160), smooth((Math.abs(x) - 118) / 135), smooth((z - 133) / 175));
  const ridge = 30 + 118 * fbm(x * .008 + 12, z * .007 + 7) + 25 * Math.sin(x * .014 + z * .006) ** 2;
  y += edge * ridge;
  const railDistance = Math.abs(z - railZ(x));
  if (Math.abs(x) < 235 && railDistance < 7) y = THREE.MathUtils.lerp(railHeight(x) - .48, y, smooth((railDistance - 2.6) / 4.4));
  // The village is gently terraced, leaving solid, level foundations.
  for (const [hx, hz, radius] of [[-26,-64,10],[10,-81,9],[49,-65,10],[-63,-76,9],[82,-83,9],[-88,-51,8]]) {
    const d = Math.hypot(x - hx, z - hz);
    if (d < radius + 3) y = THREE.MathUtils.lerp(valley(hx, hz) + 1.1, y, smooth((d - radius) / 3));
  }
  return y;
}

// Shared rendered walking surface; paths do not clamp negative terrace heights.
export function surfaceHeight(x,z) {
  let y=groundHeight(x,z);
  if(Math.abs(x-pathX(z))<1.375 || Math.abs(z-roadZ(x))<1.65) y+=.24;
  if(Math.abs(x-pathX(z))<1.5 && z>3.3 && z<6.5) y=Math.max(y,groundHeight(x,z)+.355);
  if(Math.abs(x-pathX(-39))<2.5 && Math.abs(z-railZ(pathX(-39)))<1.8) y=Math.max(y,railHeight(x)+.06);
  return y;
}
export function colliderContains(c,x,z,padding=0) {
  if(c.halfWidth) {
    const dx=x-c.x,dz=z-c.z,cos=Math.cos(c.rotation),sin=Math.sin(c.rotation);
    return Math.abs(cos*dx-sin*dz)<c.halfWidth+padding && Math.abs(sin*dx+cos*dz)<c.halfDepth+padding;
  }
  return Math.hypot(x-c.x,z-c.z)<c.r+padding;
}

export function buildLand(world) {
  const color = new THREE.Color();
  // High spatial resolution in the playable valley; lower resolution beyond it.
  const addTerrain = (size, segments, centerX, centerZ, near) => {
    const g = new THREE.PlaneGeometry(size, size, segments, segments); g.rotateX(-Math.PI / 2);
    const p = g.attributes.position, colors = [];
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i) + centerX, z = p.getZ(i) + centerZ;
      p.setXYZ(i, x, groundHeight(x, z) - (near ? 0 : .12), z);
      const n = fbm(x * .14, z * .14), f = fieldAt(x, z);
      color.setHSL(f ? .105 : .245 + n * .025, f ? .26 : .38, f ? .18 : .25 + n * .18);
      colors.push(color.r, color.g, color.b);
    }
    g.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3)); g.computeVertexNormals();
    const material = world.materials.grass.clone(); material.color.set(0xffffff); material.vertexColors = true;
    const mesh = new THREE.Mesh(g, material); mesh.castShadow = mesh.receiveShadow = true; world.scene.add(mesh);
    return mesh;
  };
  world.terrain = addTerrain(290, 290, 0, 0, true);
  // A coarse far mesh with its valley center removed avoids coplanar overlap.
  const far = addTerrain(1500, 150, 0, 0, false);
  const indices = far.geometry.index.array, pos = far.geometry.attributes.position, keep = [];
  for (let i = 0; i < indices.length; i += 3) {
    const x = (pos.getX(indices[i]) + pos.getX(indices[i+1]) + pos.getX(indices[i+2])) / 3;
    const z = (pos.getZ(indices[i]) + pos.getZ(indices[i+1]) + pos.getZ(indices[i+2])) / 3;
    if (Math.abs(x) > 140 || Math.abs(z) > 140) keep.push(indices[i], indices[i+1], indices[i+2]);
  }
  far.geometry.setIndex(keep);
  // Stone revetments support the higher terraces instead of floating field borders.
  const stones = [], matrix = new THREE.Matrix4();
  for (const f of fields) {
    for (let x = f.x1; x < f.x2; x += .95) {
      const top = groundHeight(x, f.z2 + 1.1), bottom = Math.min(f.y, top - .35);
      const g = new THREE.BoxGeometry(.84, .42, .62);
      matrix.makeTranslation(x, (top + bottom) / 2, f.z2 + 1.05); g.applyMatrix4(matrix); stones.push(g);
    }
  }
  const retaining = new THREE.Mesh(mergeGeometries(stones), world.materials.stone); retaining.castShadow = retaining.receiveShadow = true;
  world.scene.add(retaining); stones.forEach(g => g.dispose());
  // Blue-green distant silhouettes frame the wooded valley.
  for (let layer = 0; layer < 3; layer++) {
    const g = new THREE.PlaneGeometry(1900, 200, 160, 1), p = g.attributes.position;
    for (let i = 0; i < p.count; i++) p.setY(i, p.getY(i) > 0 ? 55 + layer * 20 + fbm(p.getX(i) * .006 + layer * 7, layer) * 145 : -30);
    const mesh = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ color: [0x5d8077,0x779890,0x91ada6][layer], side: THREE.DoubleSide }));
    mesh.position.z = -530 - layer * 170; world.scene.add(mesh);
  }
}

export function fieldWaterGeometry() {
  const geometries = fields.map(f => {
    const g = new THREE.PlaneGeometry(f.x2 - f.x1, f.z2 - f.z1);
    g.translate((f.x1 + f.x2)/2, -(f.z1 + f.z2)/2, f.y + .11);
    return g;
  });
  const merged = mergeGeometries(geometries); geometries.forEach(g => g.dispose()); return merged;
}
