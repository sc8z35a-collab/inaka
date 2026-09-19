import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { chromium } from '@playwright/test';

// Start `npm run dev -- --port 3000` first; TEST_URL can target another dev server.
// Browser artifacts and reports stay out of source control.
const benchmark = process.argv.includes('--benchmark');
const samples = Number(process.env.SAMPLES || 9);
assert.ok(Number.isInteger(samples) && samples >= 3, 'Use at least three benchmark samples');
const output = new URL('../.artifacts/', import.meta.url);
await mkdir(output, { recursive: true });
const browser = await chromium.launch({
  headless: true,
  args: ['--no-sandbox', '--enable-unsafe-swiftshader', '--renderer-process-limit=1'],
});
const errors = [];
const report = { method: 'CPU submission + synchronous GPU readback; warmup excluded; no FPS cap', samples, views: [] };
try {
  const page = await browser.newPage({ viewport: { width: 960, height: 540 }, deviceScaleFactor: 1 });
  page.setDefaultTimeout(120000);
  await page.route('https://fonts.googleapis.com/**', route => route.fulfill({ body: '', contentType: 'text/css' }));
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  await page.addInitScript(() => {
    if (!localStorage.getItem('satoyama-immersive')) {
      localStorage.setItem('satoyama-immersive', JSON.stringify({ quality: 'low', lightingVersion: 1 }));
    }
    // Freeze animation before the first frame: paired renders see identical content.
    let world;
    Object.defineProperty(window, '__satoyama', {
      get: () => world,
      set: value => { world = value; world.renderer.setAnimationLoop(null); },
    });
  });
  await page.goto(process.env.TEST_URL || 'http://localhost:3000', { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => !!window.__satoyama);
  await page.evaluate(async () => {
    const w = window.__satoyama;
    await Promise.all([w.materials.grass.map, w.materials.path.map].map(map => {
      if (map.image?.complete) return Promise.resolve();
      return new Promise((resolve, reject) => {
        const start = performance.now();
        const check = () => map.image?.complete ? resolve()
          : performance.now() - start > 30000 ? reject(new Error('Ground texture did not load')) : setTimeout(check, 50);
        check();
      });
    }));
    w.tick();
  });
  const invariants = await page.evaluate(() => {
    const w = window.__satoyama;
    const inventory = () => {
      const result = [];
      w.scene.traverse(o => {
        if (o.isMesh) result.push([o.uuid, o.geometry.uuid, o.count ?? 1, o.visible,
          ...[o.material].flat().map(m => `${m.uuid}:${m.map?.uuid ?? ''}`)]);
      });
      return JSON.stringify(result);
    };
    const before = inventory();
    const states = [];
    for (const quality of ['high', 'balanced', 'low', 'hdr', 'low']) {
      w.setQuality(quality);
      states.push({ quality: w.quality, shadows: w.renderer.shadowMap.enabled,
        maps: w.lighting.csm.lights.map(l => l.shadow.mapSize.x),
        ratio: w.renderer.getPixelRatio(), refractionScale: w.renderer.transmissionResolutionScale,
        hdr: w.lighting.enabled, toneMapping: w.renderer.toneMapping });
    }
    return { unchanged: before === inventory(), blades: w.rice.userData.bladeCount,
      water: w.water.material.transmission, states, hdrSupported: w.lighting.supported };
  });
  assert.equal(invariants.unchanged, true, 'Geometry, instances, visibility and texture IDs must not change');
  assert.equal(invariants.water, .58, 'Physical refraction must remain enabled');
  const low = invariants.states[2], high = invariants.states[0];
  assert.equal(low.shadows, true);
  assert.deepEqual(low.maps, [2048, 2048]);
  assert.equal(low.ratio, .9);
  assert.equal(low.refractionScale, .5);
  assert.equal(low.hdr, false);
  assert.equal(high.refractionScale, 1);
  assert.equal(invariants.states[1].shadows, false);
  if (invariants.hdrSupported) assert.equal(low.toneMapping, invariants.states[3].toneMapping);

  // Test invalidation without GPU work, using a deterministic scheduler clock.
  const cadence = await page.evaluate(() => {
    const w = window.__satoyama, l = w.lighting, r = w.renderer;
    const originalRender = r.render, originalUpdate = l.csm.update, originalComposer = l.useComposer;
    l.useComposer = false;
    const nowDescriptor = Object.getOwnPropertyDescriptor(performance, 'now');
    let now = 0, updates = 0;
    Object.defineProperty(performance, 'now', { configurable: true, value: () => now });
    r.render = () => { r.shadowMap.needsUpdate = false; };
    l.csm.update = () => { updates++; };
    try {
      l.lastShadowTime = -Infinity;
      r.shadowMap.needsUpdate = true;
      l.render(); const initial = updates;
      now = 10; l.render(); const cached = updates;
      now = 34; l.render(); const animated = updates;
      now = 35; w.camera.position.x += .01; l.render(); const moved = updates;
      now = 36; w.camera.rotation.y += .001; l.render(); const rotated = updates;
      now = 37; l.syncSun(); l.render(); const sun = updates;
      now = 38; w.resize(); l.render(); const resized = updates;
      return [initial, cached, animated, moved, rotated, sun, resized];
    } finally {
      r.render = originalRender; l.csm.update = originalUpdate; l.useComposer = originalComposer;
      if (nowDescriptor) Object.defineProperty(performance, 'now', nowDescriptor);
      else delete performance.now;
      r.shadowMap.needsUpdate = true;
    }
  });
  assert.deepEqual(cadence, [1, 1, 2, 3, 4, 5, 6]);
  await page.locator('#settings-button').click();
  await page.locator('#quality').selectOption('balanced');
  await page.locator('#quality').selectOption('low');
  await page.reload({ waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => !!window.__satoyama);
  assert.equal(await page.locator('#quality').inputValue(), 'low');
  assert.equal(await page.evaluate(() => window.__satoyama.quality), 'low');
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => window.__satoyama.resize());
  assert.deepEqual(await page.evaluate(() => {
    const w = window.__satoyama;
    return [w.renderer.domElement.width, w.renderer.domElement.height];
  }), [351, 759]);
  await page.setViewportSize({ width: 960, height: 540 });
  await page.evaluate(() => window.__satoyama.resize());
  report.invariants = invariants;
  console.log(`Regression checks passed: ${invariants.blades} rice blades retained, shadows, persistence, resize, invalidation.`);

  if (benchmark) {
    assert.ok(invariants.hdrSupported, 'An HDR-capable context is required for the comparison');
    report.environment = await page.evaluate(() => {
      const gl = window.__satoyama.renderer.getContext(), ext = gl.getExtension('WEBGL_debug_renderer_info');
      return { browser: navigator.userAgent, viewport: [innerWidth, innerHeight], dpr: devicePixelRatio,
        renderer: ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER) };
    });
    for (let spot = 0; spot < 3; spot++) {
      const view = { spot, modes: {} };
      // Alternate order across viewpoints to reduce ordering/warmup bias.
      for (const quality of spot % 2 ? ['low', 'hdr'] : ['hdr', 'low']) {
        console.log(`Measuring spot ${spot}, ${quality}...`);
        const result = await page.evaluate(async ({ spot, quality, samples }) => {
          const w = window.__satoyama;
          const { spots } = await import('/src/scene.js');
          w.goTo(spot, true); w.camera.position.copy(w.transition.end);
          w.camera.rotation.set(w.transition.endPitch, w.transition.endYaw, 0, 'YXZ');
          w.transition = null;
          w.setQuality(quality);
          const gl = w.renderer.getContext(), pixel = new Uint8Array(4);
          const sync = () => gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixel);
          const timings = [], calls = [], triangles = [];
          const autoReset = w.renderer.info.autoReset;
          w.renderer.info.autoReset = false;
          try {
            for (let i = -3; i < samples; i++) {
              // Conservative: redraw ALL shadows, even for this stationary camera.
              // The 30 Hz caching benefit is intentionally excluded from the claim.
              w.renderer.shadowMap.needsUpdate = true;
              w.renderer.info.reset(); sync();
              const start = performance.now();
              w.render(); sync();
              const ms = performance.now() - start;
              if (i >= 0) { timings.push(ms); calls.push(w.renderer.info.render.calls); triangles.push(w.renderer.info.render.triangles); }
            }
          } finally { w.renderer.info.autoReset = autoReset; }
          const sorted = [...timings].sort((a,b) => a-b);
          const image = w.renderer.domElement.toDataURL('image/png');
          return { name: spots[spot].name, medianMs: sorted[Math.floor(sorted.length/2)], timings, calls, triangles,
            shadowTexels: w.lighting.csm.lights.reduce((n,l) => n + l.shadow.mapSize.x ** 2, 0), image };
        }, { spot, quality, samples });
        await writeFile(new URL(`quality-${spot}-${quality}.png`, output), Buffer.from(result.image.split(',')[1], 'base64'));
        delete result.image;
        view.modes[quality] = result;
        console.log(JSON.stringify(result));
      }
      view.reductionPercent = 100 * (1 - view.modes.low.medianMs / view.modes.hdr.medianMs);
      report.views.push(view);
      await writeFile(new URL('quality-benchmark.json', output), JSON.stringify(report, null, 2));
      console.log(`Spot ${spot}: ${view.reductionPercent.toFixed(1)}% less rendering time`);
    }
    for (const view of report.views) assert.ok(view.reductionPercent >= 40, `Spot ${view.spot} misses the 40% rendering-time target`);
  }
  assert.deepEqual(errors, [], 'No browser or shader errors');
  console.log('All quality checks passed.');
} finally {
  await browser.close();
}
