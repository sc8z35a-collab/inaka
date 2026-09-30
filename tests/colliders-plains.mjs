// Headless: the plains details must not block roads or spawn spots. Usage: npx vite-node tests/colliders-plains.mjs
import assert from 'node:assert/strict';
import * as THREE from 'three';
globalThis.document = { createElement: () => ({ getContext: () => new Proxy({}, { get: (t, k) => k === 'getImageData' ? () => ({ data: new Uint8ClampedArray(4) }) : k.startsWith?.('create') ? () => ({ addColorStop() {} }) : k === 'measureText' ? () => ({ width: 1 }) : () => {}, set: () => true }) }) };
THREE.TextureLoader.prototype.load = () => new THREE.Texture();
const { GLTFLoader } = await import('three/addons/loaders/GLTFLoader.js');
GLTFLoader.prototype.loadAsync = () => new Promise(() => {});
const { colliderContains } = await import('../src/terrain.js');
const { plainsHeight, plainsSpots } = await import('../src/plains.js');
const { buildPlainsDetails } = await import('../src/plains-details.js');
const { upgradeMaterials } = await import('../src/materials.js');
const world = {
  scene: new THREE.Scene(), camera: new THREE.PerspectiveCamera(), colliders: [], staticMeshes: [], detailUpdaters: [], timeHooks: [],
  materials: Object.fromEntries(['roof', 'plaster', 'wood', 'darkWood', 'stone', 'glass'].map(k => [k, new THREE.MeshStandardMaterial()])),
  renderer: { capabilities: { getMaxAnisotropy: () => 4 }, shadowMap: {}, domElement: { height: 720 } },
  groundHeight: plainsHeight, bounds: { minX: -348, maxX: 348, minZ: -348, maxZ: 348 }, wind: 1, disposed: true,
};
upgradeMaterials(world);
buildPlainsDetails(world);
const blocked = [];
for (let col = 0; col <= 10; col++) { const x = -330 + col * 66; for (let z = -338; z <= 222; z += 1) if (world.colliders.some(c => colliderContains(c, x, z, .25))) blocked.push(['col', col, z]); }
for (let row = 0; row <= 9; row++) { const z = -320 + row * 60; for (let x = -338; x <= 338; x += 1) if (world.colliders.some(c => colliderContains(c, x, z, .25))) blocked.push(['row', row, x]); }
for (const s of plainsSpots) if (world.colliders.some(c => colliderContains(c, s.position[0], s.position[2], .25))) blocked.push(['spot', s.name]);
console.log('colliders', world.colliders.length, 'blocked', blocked.length, JSON.stringify(blocked.slice(0, 12)));
for (const u of world.detailUpdaters) u(1.5, .016);
for (const t of ['morning', 'day', 'evening']) for (const h of world.timeHooks) h(t);
assert.equal(blocked.length, 0);
console.log('ok');
