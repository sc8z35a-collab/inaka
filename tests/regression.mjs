import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { chromium } from '@playwright/test';

// Run against Vite: TEST_URL=http://localhost:3000 node tests/regression.mjs.
// BASELINE=1 records failures without aborting; VISUAL=1 captures the view matrix.
const output = new URL(`../.artifacts/${process.env.BASELINE ? 'before' : 'after'}/`, import.meta.url);
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ args: ['--no-sandbox', '--enable-unsafe-swiftshader', '--renderer-process-limit=1'] });
const results = [], errors = [];
const test = async (name, run) => {
  try { await run(); results.push({ name, passed: true }); console.log(`PASS ${name}`); }
  catch (error) { results.push({ name, passed: false, error: error.message }); console.log(`FAIL ${name}: ${error.message}`); }
};
const page = await browser.newPage({ viewport: { width: 960, height: 640 } });
page.setDefaultTimeout(120000);
await page.route('https://fonts.googleapis.com/**', r => r.fulfill({ body: '', contentType: 'text/css' }));
page.on('pageerror', e => errors.push(e.message));
await page.addInitScript(() => {
  localStorage.setItem('satoyama-immersive', JSON.stringify({ quality: 'balanced', lightingVersion: 1 }));
  let world;
  Object.defineProperty(window, '__satoyama', { get: () => world, set: value => { world = value; world.renderer.setAnimationLoop(null); } });
});
const url = process.env.TEST_URL || 'http://localhost:3000';
try {
  await page.goto(url);
  await page.waitForFunction(() => !!window.__satoyama);
  await page.evaluate(() => window.__satoyama.tick());
  await page.waitForTimeout(1100);
  const check = (name, fn, arg) => test(name, async () => assert.equal(await page.evaluate(fn, arg), true));
  const pointerCheck = async (kind) => page.evaluate(kind => {
    const w = window.__satoyama, c = w.renderer.domElement;
    w.paused = false; w.resetInput();
    const capture = c.setPointerCapture; c.setPointerCapture = () => {};
    const send = (type, id, x, button = 0) => c.dispatchEvent(new PointerEvent(type, { pointerId: id, clientX: x, clientY: 100, button }));
    send('pointerup', 101, 100); send('pointerup', 202, 100);
    const start = w.yaw;
    try {
      send('pointerdown', 101, 100, kind === 'secondary' ? 2 : 0);
      if (kind === 'multi') { send('pointerdown', 202, 400); send('pointermove', 101, 120); return w.yaw !== start; }
      if (kind === 'unrelated') { send('pointerup', 202, 100); send('pointermove', 101, 120); return w.yaw !== start; }
      if (kind === 'lost') send('lostpointercapture', 101, 100);
      if (kind === 'reset') w.resetInput();
      send('pointermove', 101, 120); return w.yaw === start;
    } finally { send('pointerup', 101, 100); send('pointerup', 202, 100); c.setPointerCapture = capture; }
  }, kind);
  for (const [kind, name] of [
    ['multi', '01 canvas retains first pointer during multitouch'],
    ['lost', '02 lost pointer capture ends camera drag'],
    ['reset', '03 resetInput cancels camera drag'],
    ['secondary', '04 secondary mouse button does not rotate camera'],
    ['unrelated', '05 unrelated pointer release does not stop camera drag'],
  ]) await test(name, async () => assert.equal(await pointerCheck(kind), true));
  for (const [id, number] of [['joystick', '06'], ['look-pad', '07']]) await check(`${number} ${id} retains pointer on unrelated release`, id => {
    const w = window.__satoyama, el = document.getElementById(id), r = el.getBoundingClientRect();
    const capture = el.setPointerCapture; el.setPointerCapture = () => {};
    const send = (type, pointerId, x) => el.dispatchEvent(new PointerEvent(type, { pointerId, clientX: x, clientY: r.y + r.height / 2 }));
    const yaw = w.yaw;
    try { send('pointerdown', 11, r.x + r.width / 2); send('pointerup', 12, r.x); send('pointermove', 11, r.x + r.width * .8); return id === 'joystick' ? w.joy.x > .5 : w.yaw !== yaw; }
    finally { send('pointerup', 11, r.x); el.setPointerCapture = capture; }
  }, id);
  for (const [event, number] of [['blur', '08'], ['panel', '09']]) await check(`${number} look pad resets on ${event}`, event => {
    const w = window.__satoyama, el = document.querySelector('#look-pad');
    const capture = el.setPointerCapture; el.setPointerCapture = () => {};
    const send = (type, x) => el.dispatchEvent(new PointerEvent(type, { pointerId: 13, clientX: x, clientY: 100 }));
    try {
      send('pointerdown', 100);
      if (event === 'blur') window.dispatchEvent(new Event('blur'));
      else { document.querySelector('#settings-button').click(); document.querySelector('#close-settings').click(); }
      const yaw = w.yaw; send('pointermove', 200); return yaw === w.yaw;
    } finally { send('pointerup', 200); el.setPointerCapture = capture; }
  }, event);
  await check('10 modifier shortcuts are not intercepted as movement', () => {
    const w = window.__satoyama; w.resetInput(); w.renderer.domElement.focus();
    const e = new KeyboardEvent('keydown', { code: 'KeyA', key: 'a', ctrlKey: true, bubbles: true, cancelable: true });
    w.renderer.domElement.dispatchEvent(e); const ok = !e.defaultPrevented && !w.keys.size; w.resetInput(); return ok;
  });
  await check('11 focusing controls clears held movement', () => {
    const w = window.__satoyama; w.renderer.domElement.focus();
    w.renderer.domElement.dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyW', bubbles: true }));
    document.querySelector('#sound').focus(); const ok = !w.keys.size; w.resetInput(); return ok;
  });
  await check('12 zen mode still permits keyboard walking', () => {
    const w = window.__satoyama; document.querySelector('#hide-ui').click();
    document.activeElement.dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyW', bubbles: true }));
    const ok = w.keys.has('KeyW'); document.querySelector('#show-ui').click(); w.resetInput(); return ok;
  });
  await check('13 reset position synchronizes viewpoint selector', () => {
    const select = document.querySelector('#viewpoint'); select.value = '2'; select.dispatchEvent(new Event('change'));
    document.querySelector('#reset-position').click(); return select.value === '0';
  });
  await check('14 compass side labels rotate with heading', () => {
    const w = window.__satoyama; w.yaw = Math.PI; w.callbacks.onPosition();
    const spans = document.querySelector('.compass').querySelectorAll('span');
    return spans[0].textContent === 'E' && spans[2].textContent === 'S' && spans[4].textContent === 'W';
  });
  await test('15 responsive field of view updates after resize', async () => {
    await page.setViewportSize({ width: 390, height: 844 });
    assert.equal(await page.evaluate(() => { window.__satoyama.resize(); return window.__satoyama.camera.fov; }), 64);
    await page.setViewportSize({ width: 960, height: 640 });
  });
  await check('16 crossing occupant can leave after warning starts', () => {
    const l = window.__satoyama.life, old = l.warning; l.warning = true;
    try { return l.canEnter(l.cx, l.cz + 2.5, { x: l.cx, z: l.cz + 2 }); }
    finally { l.warning = old; }
  });
  await check('17 shed blocks walking through its walls', async () => {
    const w = window.__satoyama, { colliderContains } = await import('/src/terrain.js');
    return w.colliders.some(c => colliderContains(c, -46, -57, .25));
  });
  await check('18 bench blocks walking through its seat', async () => {
    const w = window.__satoyama, { colliderContains } = await import('/src/terrain.js');
    return w.colliders.some(c => colliderContains(c, 30, -26, .25));
  });
  await check('19 train wheels align with the rails', () => window.__satoyama.life.cars.every(c => c.wheels.every(w => Math.abs(Math.abs(w.position.z) - .6) < .01)));
  await check('20 clouds recycle instead of disappearing permanently', () => {
    const w = window.__satoyama, c = w.clouds[0], old = c.position.x, render = w.render, update = w.life.update;
    w.render = () => {}; w.life.update = () => {}; c.position.x = 2000;
    try { w.tick(); return c.position.x < 900; }
    finally { c.position.x = old; w.render = render; w.life.update = update; }
  });
  await check('21 walking height includes the path verge', async () => {
    const { surfaceHeight, groundHeight, pathX } = await import('/src/terrain.js');
    const x = pathX(20) + 2, z = 20;
    return Math.abs(surfaceHeight(x, z) - groundHeight(x, z) - .14) < .001;
  });
  await check('22 road height stops at rendered road endpoint', async () => {
    const { surfaceHeight, groundHeight, roadZ } = await import('/src/terrain.js');
    return surfaceHeight(115, roadZ(115)) === groundHeight(115, roadZ(115));
  });
  await check('23 terrace banks are included in walking surface', async () => {
    const { surfaceHeight, groundHeight, fields } = await import('/src/terrain.js');
    const f = fields[0], x = (f.x1 + f.x2) / 2, z = f.z2 + 1;
    return Math.abs(surfaceHeight(x, z) - groundHeight(x, z) - .12) < .001;
  });
  await check('24 browser zoom is not disabled', () => !document.querySelector('meta[name=viewport]').content.includes('maximum-scale=1'));
  await check('25 keyboard focus on scene has a visible indicator', () => {
    const canvas = window.__satoyama.renderer.domElement; canvas.focus();
    return getComputedStyle(canvas).outlineStyle !== 'none';
  });
  await test('26 quality selector fits narrow settings panel', async () => {
    await page.setViewportSize({ width: 320, height: 720 });
    await page.locator('#settings-button').click();
    assert.equal(await page.evaluate(() => {
      const panel = document.querySelector('#settings'), r = panel.getBoundingClientRect(), q = document.querySelector('#quality').getBoundingClientRect();
      return panel.scrollWidth <= panel.clientWidth && q.right <= r.right - 10;
    }), true);
    await page.locator('#close-settings').click();
  });
  await test('27 compact portrait header does not overlap season text', async () => {
    await page.setViewportSize({ width: 320, height: 480 });
    assert.equal(await page.evaluate(() => {
      const a = document.querySelector('.brand').getBoundingClientRect(), b = document.querySelector('.season').getBoundingClientRect();
      return a.bottom <= b.top || a.right <= b.left || a.top >= b.bottom;
    }), true);
  });
  await test('28 reduced motion suppresses automatic scene animation', async () => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    assert.equal(await page.evaluate(() => {
      const w = window.__satoyama, render = w.render, t = w.life.time, elapsed = w.elapsed;
      w.render = () => {};
      try { w.tick(); return w.life.time === t && w.elapsed === elapsed; }
      finally { w.render = render; }
    }), true);
    await page.emulateMedia({ reducedMotion: 'no-preference' });
  });
  await test('29 JSON null storage cannot crash startup', async () => {
    const p = await browser.newPage(); const failures = [];
    p.on('pageerror', e => failures.push(e.message));
    await p.route('https://fonts.googleapis.com/**', r => r.fulfill({ body: '', contentType: 'text/css' }));
    await p.route('**/src/scene.js', r => r.fulfill({ contentType: 'application/javascript', body: `export class Countryside { constructor(c, cb) { this.renderer={domElement:document.createElement('canvas')}; this.joy={}; c.append(this.renderer.domElement); queueMicrotask(cb.onReady); } setQuality(q){return q;} resetInput(){} }` }));
    await p.addInitScript(() => localStorage.setItem('satoyama-immersive', 'null'));
    try { await p.goto(url); await p.waitForTimeout(600); assert.deepEqual(failures, []); assert.equal(await p.locator('#world').getAttribute('data-ready'), 'true'); }
    finally { await p.close(); }
  });
  if (process.env.VISUAL) {
    await page.setViewportSize({ width: 960, height: 640 });
    await page.evaluate(() => { document.querySelector('#close-settings').click(); window.__satoyama.setQuality('low'); });
    for (const time of ['morning', 'day', 'evening']) for (let spot = 0; spot < 3; spot++) {
      await page.evaluate(({ time, spot }) => {
        const w = window.__satoyama; w.setTime(time); w.goTo(spot, true);
        w.camera.position.copy(w.transition.end); w.yaw = w.transition.endYaw; w.pitch = w.transition.endPitch;
        w.camera.rotation.set(w.pitch, w.yaw, 0, 'YXZ'); w.transition = null;
        document.querySelector('#time-of-day').value = time;
        document.querySelector('#time-label').textContent = { morning: '07:00', day: '14:32', evening: '17:30' }[time];
        w.callbacks.onPosition(); w.render();
      }, { time, spot });
      await page.screenshot({ path: new URL(`view-${time}-${spot}.png`, output).pathname });
    }
    for (const [width, height] of [[320, 480], [390, 844], [844, 390], [768, 1024], [1440, 900]]) {
      await page.setViewportSize({ width, height });
      await page.evaluate(() => { window.__satoyama.resize(); window.__satoyama.render(); });
      await page.screenshot({ path: new URL(`layout-${width}-${height}.png`, output).pathname });
      await page.locator('#settings-button').click();
      await page.screenshot({ path: new URL(`settings-${width}-${height}.png`, output).pathname });
      await page.locator('#close-settings').click();
    }
  }
  await test('30 no uncaught browser errors', () => assert.deepEqual(errors, []));
} finally {
  await writeFile(new URL('regression.json', output), JSON.stringify(results, null, 2));
  await browser.close();
}
console.log(`${results.filter(r => r.passed).length}/${results.length} checks passed`);
if (!process.env.BASELINE) assert.ok(results.every(r => r.passed), 'Regression failures; see .artifacts/after/regression.json');
