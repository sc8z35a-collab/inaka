import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { trackAsset } from './materials.js';

// CC0 photo-scanned props from Poly Haven (see public/CREDITS.md), pre-optimised with
// gltf-transform (simplify + WebP + meshopt). Each model is fetched once and drawn with one
// InstancedMesh per primitive, however many copies are scattered over the map.
const loader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
const sources = new Map();
function source(name) {
  if (!sources.has(name)) {
    sources.set(name, trackAsset(loader.loadAsync(`${import.meta.env.BASE_URL}models/${name}.glb`).then(gltf => {
      gltf.scene.updateMatrixWorld(true);
      const box = new THREE.Box3().setFromObject(gltf.scene);
      const parts = [];
      gltf.scene.traverse(o => { if (o.isMesh) parts.push({ geometry: o.geometry, material: o.material, matrix: o.matrixWorld.clone() }); });
      return { box, parts };
    })));
  }
  return sources.get(name);
}

// placements: [{ x, y, z, rotation?, scale?, tilt? }]. `size` is the target height in metres
// (the scans come in at real-world scale, but a few need adjusting to read well in-game).
// Models are grounded on their lowest point, so each copy sits on the terrain.
export function scatter(world, name, placements, { size, shadow = true, receive = true, tint, sink = 0, collider = 0 } = {}) {
  if (!placements.length) return Promise.resolve(null);
  for (const p of placements) if (collider) world.colliders.push({ x: p.x, z: p.z, r: collider * (p.scale ?? 1) });
  return source(name).then(({ box, parts }) => {
    if (world.disposed) return null;
    const height = box.max.y - box.min.y || 1;
    const base = size ? size / height : 1;
    const group = new THREE.Group(); group.name = `props:${name}`;
    const place = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), t = new THREE.Vector3(), e = new THREE.Euler();
    const ground = new THREE.Matrix4().makeTranslation(-(box.min.x + box.max.x) / 2, -box.min.y - sink * height, -(box.min.z + box.max.z) / 2);
    for (const part of parts) {
      const material = part.material.clone();
      if (tint) material.color.multiply(new THREE.Color(tint));
      // Scanned foliage uses alpha masks; keep them crisp and two-sided.
      if (material.alphaTest > 0 || material.transparent) { material.transparent = false; material.alphaTest = Math.max(material.alphaTest, .45); material.side = THREE.DoubleSide; }
      material.envMapIntensity = .8;
      const mesh = new THREE.InstancedMesh(part.geometry, material, placements.length);
      placements.forEach((p, i) => {
        const k = base * (p.scale ?? 1);
        e.set(p.tilt ?? 0, p.rotation ?? 0, (p.tiltZ ?? 0)); q.setFromEuler(e); s.set(k, k, k); t.set(p.x, p.y, p.z);
        place.compose(t, q, s).multiply(ground).multiply(part.matrix);
        mesh.setMatrixAt(i, place);
      });
      mesh.castShadow = shadow; mesh.receiveShadow = receive;
      mesh.computeBoundingSphere();
      group.add(mesh);
    }
    world.scene.add(group);
    world.lighting?.registerMaterials(group);
    world.renderer.shadowMap.needsUpdate = true;
    return group;
  }).catch(error => { console.warn(`prop ${name} unavailable`, error); return null; });
}

// Deterministic scatter helpers shared by both maps.
export function seeded(seed) {
  let s = seed >>> 0;
  const random = () => { s = (Math.imul(s, 1664525) + 1013904223) >>> 0; return s / 4294967296; };
  return { random, range: (a, b) => a + random() * (b - a), pick: list => list[Math.floor(random() * list.length)] };
}
