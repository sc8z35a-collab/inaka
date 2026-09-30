import * as THREE from 'three';

// Photographic CC0 PBR surfaces (Poly Haven, see public/CREDITS.md), served locally as WebP.
// Textures stream in after start-up; three.js uploads each one as soon as its image decodes,
// so the world is usable immediately and sharpens a moment later.
const loader = new THREE.TextureLoader();
const cache = new Map();
// Pending photographic loads (textures + glTF), exposed for capture tools and the loader UI.
export const assetState = { pending: 0, loaded: 0 };
export const trackAsset = promise => { assetState.pending++; return promise.finally(() => { assetState.pending--; assetState.loaded++; }); };
export function pbrTexture(world, name, kind = 'diff') {
  const key = `${name}_${kind}`;
  if (cache.has(key)) return cache.get(key);
  assetState.pending++;
  const done = () => { assetState.pending--; assetState.loaded++; world.renderer.shadowMap.needsUpdate = true; };
  const texture = loader.load(`${import.meta.env.BASE_URL}textures/pbr/${key}.webp`, done, undefined, done);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.colorSpace = kind === 'diff' ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  texture.anisotropy = Math.min(8, world.renderer.capabilities.getMaxAnisotropy());
  cache.set(key, texture);
  return texture;
}

// Metres covered by one texture tile when geometry receives world-space UVs.
export function pbrMaterial(world, name, { color = 0xffffff, roughness = 1, metalness = 0, normal = .8, tile = 1.5, side } = {}) {
  const material = new THREE.MeshStandardMaterial({
    map: pbrTexture(world, name), normalMap: pbrTexture(world, name, 'nor'),
    normalScale: new THREE.Vector2(normal, normal), color, roughness, metalness,
  });
  if (side !== undefined) material.side = side;
  material.userData.worldUV = tile;
  return material;
}

// Box-projected world-space UVs: every face of a merged, rotated or scaled box gets
// texels of the same physical size (the old per-face 0..1 UVs stretched one plank texture
// across an 11 m wall). `geometry` must be non-indexed with face normals.
export function applyWorldUV(geometry, tile = 1.5) {
  const p = geometry.attributes.position, n = geometry.attributes.normal;
  if (!n) geometry.computeVertexNormals();
  const normal = geometry.attributes.normal;
  const uv = new Float32Array(p.count * 2);
  for (let i = 0; i < p.count; i += 3) {
    // One projection per triangle keeps the triangle's texels continuous.
    let nx = 0, ny = 0, nz = 0;
    for (let k = 0; k < 3 && i + k < p.count; k++) { nx += normal.getX(i + k); ny += normal.getY(i + k); nz += normal.getZ(i + k); }
    const ax = Math.abs(nx), ay = Math.abs(ny), az = Math.abs(nz);
    for (let k = 0; k < 3 && i + k < p.count; k++) {
      const x = p.getX(i + k), y = p.getY(i + k), z = p.getZ(i + k), j = (i + k) * 2;
      if (ay >= ax && ay >= az) { uv[j] = x / tile; uv[j + 1] = z / tile; }
      else if (ax >= az) { uv[j] = z / tile; uv[j + 1] = y / tile; }
      else { uv[j] = x / tile; uv[j + 1] = y / tile; }
    }
  }
  geometry.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  return geometry;
}

// Upgrades the procedural canvas materials in place so every existing house, fence,
// bench and sign picks up the photographic surfaces without touching its geometry code.
export function upgradeMaterials(world) {
  const m = world.materials;
  const swap = (material, name, { tile, normal = .8, color, roughness }) => {
    material.map = pbrTexture(world, name); material.normalMap = pbrTexture(world, name, 'nor');
    material.normalScale = new THREE.Vector2(normal, normal);
    material.bumpMap = null; material.bumpScale = 0;
    if (color !== undefined) material.color.set(color);
    if (roughness !== undefined) material.roughness = roughness;
    material.userData.worldUV = tile; material.needsUpdate = true;
  };
  swap(m.roof, 'thatch', { tile: 2.4, normal: 1.1, color: 0xd6c9aa });
  swap(m.plaster, 'plaster', { tile: 2.2, normal: .6, color: 0xfff4de });
  swap(m.wood, 'cedar', { tile: 1.6, normal: .5, color: 0x7d7064, roughness: .9 });
  swap(m.darkWood, 'oldwood', { tile: 1.4, normal: .7, color: 0x9a8a78, roughness: .95 });
  swap(m.stone, 'stonewall', { tile: 1.7, normal: 1, color: 0xd8d4c8 });
  // Extra surfaces used by the new village details.
  m.kawara = pbrMaterial(world, 'kawara', { tile: 1.6, color: 0x9ea3a8, roughness: .7, normal: 1 });
  m.hinoki = pbrMaterial(world, 'hinoki', { tile: 1.2, color: 0xe8d2b4, roughness: .8, normal: .4 });
  m.bamboo = pbrMaterial(world, 'bamboo', { tile: 1, color: 0xe0cfa0, roughness: .8, normal: .6 });
  m.mossRock = pbrMaterial(world, 'mossrock', { tile: 1.4, color: 0xc4c8b4, normal: 1.1 });
  m.bark = pbrMaterial(world, 'bark', { tile: 1, color: 0x8f8176, normal: 1 });
  m.soil = pbrMaterial(world, 'soil', { tile: 2, color: 0xb09a86, normal: 1 });
  m.whitePlaster = new THREE.MeshStandardMaterial({ color: 0xf1efe6, roughness: .92, normalMap: pbrTexture(world, 'plaster', 'nor'), normalScale: new THREE.Vector2(.35, .35) });
  m.whitePlaster.userData.worldUV = 2;
  m.vermilion = new THREE.MeshStandardMaterial({ color: 0xc8432b, roughness: .6, normalMap: pbrTexture(world, 'hinoki', 'nor'), normalScale: new THREE.Vector2(.3, .3) });
  m.vermilion.userData.worldUV = 1.2;
  m.granite = pbrMaterial(world, 'mossrock', { tile: 1.1, color: 0xb9b8ae, normal: .9, roughness: .95 });
  m.concrete = new THREE.MeshStandardMaterial({ color: 0xa9a79c, roughness: .95, normalMap: pbrTexture(world, 'stonewall', 'nor'), normalScale: new THREE.Vector2(.15, .15) });
  m.concrete.userData.worldUV = 3;
  return m;
}
