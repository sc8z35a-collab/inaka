import * as THREE from 'three';
import { colliderContains } from './terrain.js';
import { seeded } from './props.js';
import { canvasTexture } from './details-kit.js';

// Living ambience shared by both maps. Everything here is cheap: small instanced sets that
// follow the walker (butterflies, dragonflies), GPU-animated point sprites (kitchen smoke,
// fireflies) and a handful of grazing egrets. Time-of-day hooks switch dusk-only effects.
const { random, range } = seeded(4242);
const TAU = Math.PI * 2;

// Pixel size of one metre at distance 1 for gl_PointSize, kept in sync with the viewport.
function pointScale(world) {
  const h = world.renderer.domElement.height;
  return h / (2 * Math.tan(THREE.MathUtils.degToRad(world.camera.fov) / 2));
}

const puffTexture = () => canvasTexture((ctx, w, h) => {
  const g = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
  g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(.45, 'rgba(255,255,255,.55)'); g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
  // Break up the perfect disc so overlapping puffs read as smoke, not bubbles.
  ctx.globalCompositeOperation = 'destination-out';
  for (let i = 0; i < 40; i++) { ctx.fillStyle = `rgba(0,0,0,${range(.05, .18)})`; ctx.beginPath(); ctx.arc(range(0, w), range(0, h), range(4, 16), 0, TAU); ctx.fill(); }
}, 64, 64);

// ---------------------------------------------------------------- 炊煙 (kitchen / bath smoke)
function kitchenSmoke(world, sources) {
  const perSource = 26, pos = [], seedAttr = [];
  for (const s of sources) for (let i = 0; i < perSource; i++) { pos.push(s.x, s.y, s.z); seedAttr.push(i / perSource + random() * .02); }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('aSeed', new THREE.Float32BufferAttribute(seedAttr, 1));
  const uniforms = { uTime: { value: 0 }, uMap: { value: puffTexture() }, uScale: { value: 500 }, uWind: { value: new THREE.Vector2(.7, .25) }, uColor: { value: new THREE.Color(0xdcdad2) }, uOpacity: { value: .32 } };
  const material = new THREE.ShaderMaterial({
    uniforms, transparent: true, depthWrite: false, fog: false, toneMapped: false,
    vertexShader: /* glsl */`
      attribute float aSeed; uniform float uTime; uniform float uScale; uniform vec2 uWind; varying float vAlpha;
      void main() {
        float life = 9.0, age = fract(uTime / life + aSeed);
        vec3 p = position;
        p.y += age * 8.0;
        p.xz += uWind * age * age * 7.0 + vec2(sin(aSeed * 91.0 + uTime * .5), cos(aSeed * 57.0 + uTime * .43)) * age * .9;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = min(256.0, uScale * (.5 + age * 2.6) / max(.5, -mv.z));
        vAlpha = smoothstep(0.0, .08, age) * (1.0 - age);
      }`,
    fragmentShader: /* glsl */`
      uniform sampler2D uMap; uniform vec3 uColor; uniform float uOpacity; varying float vAlpha;
      void main() {
        float a = texture2D(uMap, gl_PointCoord).a * vAlpha * uOpacity;
        if (a < .004) discard;
        gl_FragColor = vec4(uColor, a);
      }`,
  });
  const points = new THREE.Points(geo, material); points.frustumCulled = false; points.renderOrder = 2; points.name = 'kitchen-smoke';
  world.scene.add(points);
  world.detailUpdaters.push(t => { uniforms.uTime.value = t % 9000; uniforms.uScale.value = pointScale(world); uniforms.uWind.value.set(.7 * world.wind, .25 * world.wind); });
  world.timeHooks.push(time => { uniforms.uColor.value.set(time === 'evening' ? 0xc9b7a4 : time === 'morning' ? 0xe8e6de : 0xdcdad2); uniforms.uOpacity.value = time === 'day' ? .22 : .38; });
}

// ---------------------------------------------------------------- 蛍 (fireflies at dusk)
function fireflies(world, anchors) {
  const pos = [], seedAttr = [];
  for (const a of anchors) for (let i = 0; i < a.n; i++) { pos.push(a.x + range(-a.r, a.r), a.y + range(.3, 1.6), a.z + range(-a.r, a.r)); seedAttr.push(random()); }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('aSeed', new THREE.Float32BufferAttribute(seedAttr, 1));
  const uniforms = { uTime: { value: 0 }, uScale: { value: 500 } };
  const material = new THREE.ShaderMaterial({
    uniforms, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false, toneMapped: false,
    vertexShader: /* glsl */`
      attribute float aSeed; uniform float uTime; uniform float uScale; varying float vGlow;
      void main() {
        vec3 p = position + vec3(sin(uTime * .31 + aSeed * 40.0), sin(uTime * .47 + aSeed * 17.0) * .4, cos(uTime * .27 + aSeed * 29.0)) * 1.1;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        float blink = pow(max(0.0, sin(uTime * (1.3 + aSeed) + aSeed * 60.0)), 5.0);
        vGlow = blink;
        gl_PointSize = clamp(uScale * .07 / max(.3, -mv.z), 1.5, 24.0);
      }`,
    fragmentShader: /* glsl */`
      varying float vGlow;
      void main() {
        float d = length(gl_PointCoord - .5) * 2.0;
        float a = smoothstep(1.0, 0.0, d) * vGlow;
        if (a < .01) discard;
        gl_FragColor = vec4(vec3(.75, 1.0, .35) * a * 2.4, a);
      }`,
  });
  const points = new THREE.Points(geo, material); points.frustumCulled = false; points.visible = false; points.name = 'fireflies';
  world.scene.add(points);
  world.detailUpdaters.push(t => { if (points.visible) { uniforms.uTime.value = t % 6000; uniforms.uScale.value = pointScale(world); } });
  world.timeHooks.push(time => { points.visible = time === 'evening'; });
}

// Walker-following swarm: members wander around a home point and are re-homed into a ring
// around the camera once they fall too far behind, so density stays where it is seen.
function relocate(world, home, accept, rMin, rMax) {
  const c = world.camera.position;
  for (let k = 0; k < 12; k++) {
    const a = random() * TAU, r = range(rMin, rMax), x = c.x + Math.cos(a) * r, z = c.z + Math.sin(a) * r;
    if (x < world.bounds.minX || x > world.bounds.maxX || z < world.bounds.minZ || z > world.bounds.maxZ) continue;
    if (!accept(x, z) || world.colliders.some(col => colliderContains(col, x, z, 1))) continue;
    home.set(x, world.groundHeight(x, z), z); return true;
  }
  return false;
}

// ---------------------------------------------------------------- 蝶 (cabbage whites, yellow sulphurs)
function butterflies(world, count, accept) {
  const wingTex = canvasTexture((ctx, w, h) => {
    ctx.fillStyle = '#fff';
    ctx.beginPath(); ctx.moveTo(2, h * .5); ctx.bezierCurveTo(w * .2, -h * .05, w * .98, h * .02, w * .95, h * .38); ctx.bezierCurveTo(w * .9, h * .52, w * .5, h * .52, w * .5, h * .52);
    ctx.bezierCurveTo(w * .85, h * .6, w * .8, h * .98, w * .45, h * .95); ctx.bezierCurveTo(w * .2, h * .92, w * .08, h * .7, 2, h * .5); ctx.fill();
    ctx.fillStyle = 'rgba(40,40,40,.85)'; ctx.beginPath(); ctx.arc(w * .62, h * .3, w * .07, 0, TAU); ctx.fill();
    ctx.fillStyle = 'rgba(60,60,60,.6)'; ctx.beginPath(); ctx.ellipse(w * .88, h * .2, w * .08, h * .1, .6, 0, TAU); ctx.fill();
  }, 64, 64);
  const geo = new THREE.PlaneGeometry(.075, .075); geo.translate(.0375, 0, 0); geo.rotateX(-Math.PI / 2);
  const material = new THREE.MeshLambertMaterial({ map: wingTex, alphaTest: .5, side: THREE.DoubleSide });
  const mesh = new THREE.InstancedMesh(geo, material, count * 2); mesh.frustumCulled = false; mesh.castShadow = false; mesh.name = 'butterflies';
  const tints = [0xffffff, 0xfdfbf0, 0xf6e27a, 0xffffff, 0xf2d15c];
  const color = new THREE.Color();
  const flock = Array.from({ length: count }, (_, i) => ({ home: new THREE.Vector3(1e6, 0, 0), phase: random() * 100, speed: range(.5, .9), r: range(.8, 2.4), h: range(.35, 1.4) }));
  flock.forEach((b, i) => { color.set(tints[i % tints.length]); mesh.setColorAt(i * 2, color); mesh.setColorAt(i * 2 + 1, color); });
  world.scene.add(mesh);
  const d = new THREE.Object3D(); d.rotation.order = 'YXZ';
  world.detailUpdaters.push((t, dt) => {
    const c = world.camera.position;
    for (let i = 0; i < flock.length; i++) {
      const b = flock[i];
      if (Math.hypot(b.home.x - c.x, b.home.z - c.z) > 45) relocate(world, b.home, accept, 6, 38);
      const u = t * b.speed + b.phase;
      const x = b.home.x + Math.sin(u * .9) * b.r + Math.sin(u * 2.3) * .25, z = b.home.z + Math.cos(u * .7) * b.r + Math.cos(u * 1.9) * .25;
      const y = b.home.y + b.h + Math.sin(u * 3.1) * .18 + Math.sin(u * 7.3) * .05;
      const heading = Math.atan2(Math.cos(u * .9) * .9 * b.r, -Math.sin(u * .7) * .7 * b.r);
      const flap = Math.sin(t * 17 + b.phase * 5) * 1.05 + .25;
      for (const side of [0, 1]) {
        d.position.set(x, y, z); d.rotation.set(0, heading + Math.PI / 2, side ? -flap : flap); d.scale.set(side ? -1 : 1, 1, 1);
        d.updateMatrix(); mesh.setMatrixAt(i * 2 + side, d.matrix);
      }
    }
    mesh.instanceMatrix.needsUpdate = true;
  });
}

// ---------------------------------------------------------------- 赤とんぼ (red dragonflies)
function dragonflies(world, count, accept) {
  const parts = [];
  const body = new THREE.BoxGeometry(.012, .012, .085); body.translate(0, 0, -.01); parts.push([body, 0xb8341f]);
  const head = new THREE.SphereGeometry(.011, 6, 4); head.translate(0, 0, .036); parts.push([head, 0x6c1c12]);
  for (const [z, len] of [[.018, .07], [.004, .064]]) for (const s of [-1, 1]) {
    const wing = new THREE.PlaneGeometry(len, .014); wing.rotateX(-Math.PI / 2); wing.translate(s * (len / 2 + .005), .004, z); parts.push([wing, 0xe8eef0]);
  }
  const geos = parts.map(([g, c]) => {
    g = g.index ? g.toNonIndexed() : g; const col = new THREE.Color(c), arr = [];
    for (let i = 0; i < g.attributes.position.count; i++) arr.push(col.r, col.g, col.b);
    g.setAttribute('color', new THREE.Float32BufferAttribute(arr, 3)); g.deleteAttribute('uv'); return g;
  });
  const pos = [], nor = [], colr = [];
  for (const g of geos) { pos.push(...g.attributes.position.array); nor.push(...g.attributes.normal.array); colr.push(...g.attributes.color.array); }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); geo.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3)); geo.setAttribute('color', new THREE.Float32BufferAttribute(colr, 3));
  const material = new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide, transparent: true, opacity: .92 });
  const mesh = new THREE.InstancedMesh(geo, material, count); mesh.frustumCulled = false; mesh.name = 'dragonflies';
  world.scene.add(mesh);
  const swarm = Array.from({ length: count }, () => ({ home: new THREE.Vector3(1e6, 0, 0), p: new THREE.Vector3(), target: new THREE.Vector3(), wait: 0, heading: 0 }));
  const d = new THREE.Object3D(), c = world.camera.position;
  world.detailUpdaters.push((t, dt) => {
    for (const f of swarm) {
      if (Math.hypot(f.home.x - c.x, f.home.z - c.z) > 50) { if (relocate(world, f.home, accept, 5, 42)) { f.p.set(f.home.x, f.home.y + 1, f.home.z); f.target.copy(f.p); } }
      f.wait -= dt;
      if (f.wait <= 0) {
        // Hover, then dart a few metres: the stop-start flight of akatombo over the paddies.
        f.target.set(f.home.x + range(-5, 5), f.home.y + range(.6, 2.2), f.home.z + range(-5, 5));
        f.wait = range(.8, 3.2);
      }
      const dx = f.target.x - f.p.x, dz = f.target.z - f.p.z;
      if (dx * dx + dz * dz > .01) f.heading = THREE.MathUtils.lerp(f.heading, Math.atan2(dx, dz), Math.min(1, dt * 8));
      f.p.x = THREE.MathUtils.damp(f.p.x, f.target.x, 3.2, dt); f.p.y = THREE.MathUtils.damp(f.p.y, f.target.y, 3.2, dt); f.p.z = THREE.MathUtils.damp(f.p.z, f.target.z, 3.2, dt);
    }
    swarm.forEach((f, i) => { d.position.set(f.p.x, f.p.y + Math.sin(t * 9 + i) * .015, f.p.z); d.rotation.set(0, f.heading, Math.sin(t * 40 + i) * .05); d.updateMatrix(); mesh.setMatrixAt(i, d.matrix); });
    mesh.instanceMatrix.needsUpdate = true;
  });
}

// ---------------------------------------------------------------- 白鷺 (egrets wading in the fields)
function egrets(world, spots) {
  const white = new THREE.MeshStandardMaterial({ color: 0xf4f3ee, roughness: .8 });
  const beak = new THREE.MeshStandardMaterial({ color: 0xd9a92c, roughness: .6 });
  const leg = new THREE.MeshStandardMaterial({ color: 0x2b2a26, roughness: .7 });
  const birds = [];
  for (const s of spots) {
    const root = new THREE.Group(); root.position.set(s.x, s.y, s.z); root.rotation.y = random() * TAU; root.name = '白鷺';
    const bodyGeo = new THREE.SphereGeometry(.13, 12, 8); bodyGeo.scale(.85, .8, 1.7);
    const bodyMesh = new THREE.Mesh(bodyGeo, white); bodyMesh.position.set(0, .62, 0); bodyMesh.rotation.x = -.25; root.add(bodyMesh);
    const tail = new THREE.Mesh(new THREE.ConeGeometry(.07, .22, 8), white); tail.position.set(0, .57, -.26); tail.rotation.x = -1.9; root.add(tail);
    for (const x of [-.04, .04]) { const l = new THREE.Mesh(new THREE.CylinderGeometry(.008, .008, .58, 5), leg); l.position.set(x, .29, 0); root.add(l); }
    const neck = new THREE.Group(); neck.position.set(0, .7, .16); root.add(neck);
    const n1 = new THREE.Mesh(new THREE.CylinderGeometry(.03, .04, .26, 7), white); n1.position.set(0, .11, .03); n1.rotation.x = .35; neck.add(n1);
    const headG = new THREE.Group(); headG.position.set(0, .24, .08); neck.add(headG);
    headG.add(Object.assign(new THREE.Mesh(new THREE.SphereGeometry(.045, 10, 8), white), {}));
    const b = new THREE.Mesh(new THREE.ConeGeometry(.014, .14, 6), beak); b.rotation.x = Math.PI / 2; b.position.set(0, -.005, .09); headG.add(b);
    root.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
    world.scene.add(root);
    birds.push({ root, neck, home: root.position.clone(), phase: random() * 50, target: root.position.clone(), timer: range(2, 6), peck: 0 });
  }
  world.detailUpdaters.push((t, dt) => {
    const c = world.camera.position;
    for (const e of birds) {
      e.timer -= dt;
      const close = Math.hypot(e.root.position.x - c.x, e.root.position.z - c.z) < 7;
      if (e.timer <= 0) {
        e.timer = range(3, 8);
        if (random() < .45) e.peck = 1.2; else e.target.set(e.home.x + range(-4, 4), e.home.y, e.home.z + range(-4, 4));
      }
      // Egrets step away from a walker who comes too close.
      if (close) { const a = Math.atan2(e.root.position.x - c.x, e.root.position.z - c.z); e.target.set(e.root.position.x + Math.sin(a) * 3, e.home.y, e.root.position.z + Math.cos(a) * 3); }
      const dx = e.target.x - e.root.position.x, dz = e.target.z - e.root.position.z, dist = Math.hypot(dx, dz);
      if (dist > .05) {
        const want = Math.atan2(dx, dz); let diff = want - e.root.rotation.y; diff = Math.atan2(Math.sin(diff), Math.cos(diff));
        e.root.rotation.y += diff * Math.min(1, dt * 3);
        const step = Math.min(dist, dt * (close ? .9 : .35));
        e.root.position.x += Math.sin(e.root.rotation.y) * step; e.root.position.z += Math.cos(e.root.rotation.y) * step;
      }
      e.peck = Math.max(0, e.peck - dt);
      const peck = e.peck > 0 ? Math.sin((1.2 - e.peck) / 1.2 * Math.PI) : 0;
      e.neck.rotation.x = peck * 1.35 + Math.sin(t * .8 + e.phase) * .05;
      e.neck.position.z = .16 + Math.sin(t * 3 + e.phase) * (dist > .05 ? .02 : 0);
    }
  });
}

export function buildAmbient(world, { smoke = [], fireflyAnchors = [], egretSpots = [], dragonAccept, butterflyAccept }) {
  world.detailUpdaters ??= []; world.timeHooks ??= [];
  if (typeof location !== 'undefined' && new URLSearchParams(location.search).has('noambient')) return;
  if (smoke.length) kitchenSmoke(world, smoke);
  if (fireflyAnchors.length) fireflies(world, fireflyAnchors);
  const reduced = world.mobile ? .6 : 1;
  butterflies(world, Math.round(26 * reduced), butterflyAccept ?? (() => true));
  dragonflies(world, Math.round(34 * reduced), dragonAccept ?? (() => true));
  if (egretSpots.length) egrets(world, egretSpots);
}
