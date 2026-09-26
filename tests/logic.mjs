// Headless (no WebGL) invariants for terrain, walkable paths and spawn points.
import assert from 'node:assert/strict';
import { groundHeight, surfaceHeight, colliderContains, pathX, roadZ, railZ, railHeight, fields, fieldAt } from '../src/terrain.js';
const houses = [[-26,-64,13,9,-.08],[10,-81,10,8,.03],[49,-65,12,8,-.2],[-63,-76,11,9,.12],[82,-83,9,7,-.13],[-88,-51,8,6,.17]];
const colliders = houses.map(([x,z,w,d,rotation]) => ({ x,z,r:Math.hypot(w/2,d/2+1.65),halfWidth:w/2+.35,halfDepth:d/2+1.65,rotation }));
const report = [];
// 1. House foundations: y = max(groundHeight(centre),0). Corners must not float / sink much.
for (const [x,z,w,d,r] of houses) {
  const base = Math.max(groundHeight(x,z),0);
  let lo = Infinity, hi = -Infinity;
  for (const sx of [-1,1]) for (const sz of [-1,1]) {
    const lx = sx*w/2, lz = sz*d/2, gx = x + Math.cos(r)*lx + Math.sin(r)*lz, gz = z - Math.sin(r)*lx + Math.cos(r)*lz;
    const g = groundHeight(gx,gz); lo = Math.min(lo, g); hi = Math.max(hi, g);
  }
  report.push(['house', x, z, 'floatBy', +(base - lo).toFixed(2), 'buriedBy', +(hi - base).toFixed(2), 'centreGround', +groundHeight(x,z).toFixed(2)]);
}
// 2. Paths are walkable: no collider on the footpath or road.
let blocked = [];
for (let z = -75; z <= 126; z += .5) { const x = pathX(z); if (colliders.some(c => colliderContains(c,x,z,.25))) blocked.push(['path', +x.toFixed(1), z]); }
for (let x = -111; x <= 111; x += .5) { const z = roadZ(x); if (colliders.some(c => colliderContains(c,x,z,.25))) blocked.push(['road', x, +z.toFixed(1)]); }
report.push(['blocked path samples', blocked.length, blocked.slice(0,5)]);
// 3. Steps along the footpath: max height change per 0.5 m (> .45 m feels like a wall).
let steps = [];
for (let z = -75; z < 126; z += .5) { const a = surfaceHeight(pathX(z),z), b = surfaceHeight(pathX(z+.5),z+.5); if (Math.abs(a-b) > .3) steps.push([+z.toFixed(1), +(b-a).toFixed(2)]); }
report.push(['footpath steps > .3m per .5m', steps.length, steps.slice(0,10)]);
// 4. Spawn spots are walkable.
for (const [x,z] of [[13.45,18],[-4,-29],[57,-34]]) report.push(['spot', x, z, 'inCollider', colliders.some(c=>colliderContains(c,x,z,.25)), 'field', !!fieldAt(x,z)]);
// 5. Paddy water sits below the bank/verge.
for (const f of fields) { const bank = groundHeight((f.x1+f.x2)/2, f.z2 + 1); if (bank < f.y + .11) report.push(['water above bank', f.row, f.column, +(f.y+.11-bank).toFixed(2)]); }
for (const r of report) console.log(JSON.stringify(r));
