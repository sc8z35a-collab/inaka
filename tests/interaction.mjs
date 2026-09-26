// UI / input regression checks (SwiftShader, tiny viewport, rendering throttled).
import assert from 'node:assert/strict';
import { chromium } from '@playwright/test';
const browser = await chromium.launch({ headless: true, args: ['--no-sandbox', '--enable-unsafe-swiftshader', '--use-angle=swiftshader'] });
const errors = [];
const results = [];
const check = async (name, fn) => { try { await fn(); results.push(`PASS ${name}`); } catch (e) { results.push(`FAIL ${name}: ${e.message.split('\n')[0]}`); } };
try {
  const page = await browser.newPage({ viewport: { width: 800, height: 450 }, deviceScaleFactor: 1, hasTouch: true });
  page.setDefaultTimeout(100000);
  page.on('pageerror', e => errors.push(e.message));
  page.on('console', m => { if (m.type() === 'error') errors.push(m.text().slice(0, 200)); });
  await page.route('https://fonts.**/**', r => r.fulfill({ body: '', contentType: 'text/css' }));
  await page.addInitScript(() => {
    localStorage.setItem('satoyama-immersive', JSON.stringify({ quality: 'balanced', lightingVersion: 1 }));
    // Keep the simulation running but render at most every 400 ms to stay responsive.
    let world; Object.defineProperty(window, '__satoyama', { configurable: true, get: () => world, set: v => {
      world = v; const render = v.render.bind(v); let last = 0;
      v.render = () => { const t = performance.now(); if (t - last > 400) { last = t; render(); } };
    } });
  });
  await page.goto('http://localhost:3000/', { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => document.body.classList.contains('ready'));
  const pos = () => page.evaluate(() => window.__satoyama.camera.position.toArray());
  const settle = () => page.evaluate(() => { const w = window.__satoyama; w.transition = null; });
  await settle();

  await check('WASD walks while a HUD button has focus', async () => {
    await page.focus('#sound');
    const a = await pos();
    await page.keyboard.down('KeyW'); await page.waitForTimeout(1200); await page.keyboard.up('KeyW');
    const b = await pos();
    assert.ok(Math.hypot(a[0] - b[0], a[2] - b[2]) > .3, `moved ${Math.hypot(a[0] - b[0], a[2] - b[2])}`);
  });
  await check('Ctrl+S does not leave movement key stuck', async () => {
    await page.focus('canvas');
    await page.keyboard.down('Control'); await page.keyboard.down('KeyS'); await page.keyboard.up('Control'); await page.keyboard.up('KeyS');
    assert.equal(await page.evaluate(() => window.__satoyama.keys.size), 0);
  });
  await check('compass side labels follow heading', async () => {
    await page.evaluate(() => { window.__satoyama.yaw = Math.PI; });
    await page.waitForTimeout(600);
    const labels = await page.$$eval('.compass > span:not(.compass-tick)', els => els.map(e => e.textContent));
    assert.deepEqual(labels, ['E', 'S', 'W']);
    await page.evaluate(() => { window.__satoyama.yaw = 0; });
  });
  await check('second touch lifting does not reset joystick', async () => {
    const box = await page.locator('#joystick').boundingBox();
    const cx = box.x + box.width / 2, cy = box.y + box.height / 2;
    await page.evaluate(({ cx, cy }) => {
      const j = document.querySelector('#joystick');
      const ev = (type, id, x, y) => j.dispatchEvent(new PointerEvent(type, { pointerId: id, clientX: x, clientY: y, bubbles: true, isPrimary: id === 1, pointerType: 'touch' }));
      ev('pointerdown', 1, cx, cy - 30); ev('pointermove', 1, cx, cy - 30);
      ev('pointerdown', 2, cx + 10, cy); ev('pointerup', 2, cx + 10, cy);
    }, { cx, cy });
    const joy = await page.evaluate(() => window.__satoyama.joy.y);
    assert.ok(joy < -.5, `joy.y=${joy}`);
    await page.evaluate(() => document.querySelector('#joystick').dispatchEvent(new PointerEvent('pointerup', { pointerId: 1, bubbles: true })));
    assert.equal(await page.evaluate(() => window.__satoyama.joy.y), 0);
  });
  await check('settings dialog focus + label', async () => {
    await page.click('#settings-button');
    assert.equal(await page.getAttribute('#settings-button', 'aria-label'), '設定を閉じる');
    await page.keyboard.press('Escape');
    assert.equal(await page.evaluate(() => document.activeElement.id), 'settings-button');
    assert.equal(await page.getAttribute('#settings-button', 'aria-label'), '設定を開く');
  });
  await check('time of day persists and swaps icon', async () => {
    await page.click('#settings-button');
    await page.selectOption('#time-of-day', 'evening');
    assert.equal(await page.evaluate(() => JSON.parse(localStorage.getItem('satoyama-immersive')).time), 'evening');
    assert.equal(await page.getAttribute('.sun-icon', 'data-lucide') ?? await page.evaluate(() => document.querySelector('.sun-icon').classList.contains('lucide-sunset') ? 'sunset' : 'x'), 'sunset');
    await page.keyboard.press('Escape');
  });
  await check('balanced frees extra shadow lights', async () => {
    const n = await page.evaluate(() => window.__satoyama.lighting.csm.lights.length);
    assert.equal(n, 1);
  });
  await check('player is not trapped inside a house after interrupted teleport', async () => {
    await page.evaluate(() => { const w = window.__satoyama; w.transition = null; w.camera.position.set(-26, 6, -64); });
    const a = await pos();
    await page.focus('canvas');
    await page.keyboard.down('KeyS'); await page.waitForTimeout(1500); await page.keyboard.up('KeyS');
    const b = await pos();
    assert.ok(Math.hypot(a[0] - b[0], a[2] - b[2]) > .3);
  });
  await check('train pushes player off the rails', async () => {
    const r = await page.evaluate(async () => {
      const w = window.__satoyama; w.transition = null;
      const x = w.life.cars[0].group.position.x + 3, z = -39 + .00072 * x * x;
      w.camera.position.set(x, 6, z);
      // Deterministic: SwiftShader ticks are too sparse to rely on real time here.
      for (let i = 0; i < 45; i++) { w.life.update(1 / 30); w.life.clearTrack(w.camera.position, 1 / 30); }
      const p = w.camera.position; return [Math.abs(p.z - (-39 + .00072 * p.x * p.x)), x, z, p.x, p.z, w.paused, !!w.transition, document.hidden, w.elapsed];
    });
    assert.ok(r[0] > 1.8, `distance from rail centre ${JSON.stringify(r)}`);
  });
} finally { await browser.close(); }
console.log(results.join('\n'));
console.log('errors:', JSON.stringify(errors));
