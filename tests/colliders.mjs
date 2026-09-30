// Headless check that the hand-placed details never block the walkable footpath, road or
// spawn spots. Builds the satoyama details against a stub world (no WebGL needed).
// Usage: node tests/colliders.mjs
import assert from 'node:assert/strict';
import * as THREE from 'three';
globalThis.document = { createElement: () => ({ getContext: () => new Proxy({}, { get: (t, k) => k === 'getImageData' ? () => ({ data: new Uint8ClampedArray(4) }) : k === 'createLinearGradient' || k === 'createRadialGradient' ? () => ({ addColorStop() {} }) : k === 'measureText' ? () => ({ width: 1 }) : () => {}, set: () => true }) }) };
globalThis.matchMedia = () => ({ matches: false });
const { groundHeight, colliderContains, pathX, roadZ, PATH_NORTH_END } = await import('../src/terrain.js');
const { buildSatoyamaDetails } = await import('../src/details.js');
const { buildSatoyamaPlus } = await import('../src/details-plus.js');
const { upgradeMaterials } = await import('../src/materials.js');
THREE.TextureLoader.prototype.load = () => new THREE.Texture();
// glTF props never resolve in this headless check.
const { GLTFLoader } = await import('three/addons/loaders/GLTFLoader.js');
GLTFLoader.prototype.loadAsync = () => new Promise(() => {});
const world = {
  scene: new THREE.Scene(), camera: new THREE.PerspectiveCamera(), colliders: [], staticMeshes: [], detailUpdaters: [], timeHooks: [],
  materials: { roof: new THREE.MeshStandardMaterial(), plaster: new THREE.MeshStandardMaterial(), wood: new THREE.MeshStandardMaterial(), darkWood: new THREE.MeshStandardMaterial(), stone: new THREE.MeshStandardMaterial(), glass: new THREE.MeshStandardMaterial() },
  renderer: { capabilities: { getMaxAnisotropy: () => 4 }, shadowMap: {}, domElement: { height: 720 } },
  groundHeight, bounds: { minX: -116, maxX: 116, minZ: -106, maxZ: 126 }, wind: 1, disposed: true,
};
upgradeMaterials(world);
buildSatoyamaDetails(world);
const before = world.colliders.length;
buildSatoyamaPlus(world);
console.log('colliders', before, '->', world.colliders.length, 'updaters', world.detailUpdaters.length, 'timeHooks', world.timeHooks.length);
const blocked = [];
for (let z = PATH_NORTH_END + .5; z <= 126; z += .5) { const x = pathX(z); if (world.colliders.some(c => colliderContains(c, x, z, .25))) blocked.push(['path', +x.toFixed(1), z]); }
for (let x = -111; x <= 111; x += .5) { const z = roadZ(x); if (world.colliders.some(c => colliderContains(c, x, z, .25))) blocked.push(['road', x, +z.toFixed(1)]); }
for (const [x, z] of [[13.45, 18], [-4, -29], [57, -34]]) if (world.colliders.some(c => colliderContains(c, x, z, .25))) blocked.push(['spot', x, z]);
console.log('blocked', blocked.length, JSON.stringify(blocked.slice(0, 12)));
// Every updater and time hook must run without throwing.
for (const u of world.detailUpdaters) u(1.5, .016);
for (const t of ['morning', 'day', 'evening']) for (const h of world.timeHooks) h(t);
assert.equal(blocked.length, 0, 'details block the walkable network');
console.log('ok');
