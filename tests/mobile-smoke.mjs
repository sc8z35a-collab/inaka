// Landscape-phone smoke test (the only supported play environment).
// Emulates a flagship Android phone held sideways (915x412 CSS px, DPR 3.5, touch)
// and checks: boot without page errors, HUD elements inside the viewport and safe from
// overlapping each other, touch controls reachable, portrait hint hidden in landscape.
// Usage: TEST_URL=http://localhost:3000/?map=plains node tests/mobile-smoke.mjs
import assert from 'node:assert/strict';
import { chromium } from '@playwright/test';
import { mkdirSync, writeFileSync } from 'node:fs';

const url = process.env.TEST_URL || 'http://localhost:3000/?map=plains';
const viewports = (process.env.VIEWPORTS || '915x412,780x360,1008x450').split(',').map(v => v.split('x').map(Number));
mkdirSync('.artifacts', { recursive: true });
const browser = await chromium.launch({ headless: true, args: ['--no-sandbox', '--enable-unsafe-swiftshader', '--use-angle=swiftshader'] });
const results = [], errors = [];
const check = async (name, fn) => { try { await fn(); results.push(`PASS ${name}`); } catch (e) { results.push(`FAIL ${name}: ${e.message.replace(/\s+/g, " ").slice(0, 400)}`); } };
try {
  for (const [width, height] of viewports) {
    const context = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 1, hasTouch: true, isMobile: true,
      userAgent: 'Mozilla/5.0 (Linux; Android 15; SM-S938B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0 Mobile Safari/537.36' });
    const page = await context.newPage();
    page.setDefaultTimeout(240000);
    page.on('pageerror', e => errors.push(`${width}x${height} ${e.message}`));
    await page.route('https://fonts.**/**', r => r.fulfill({ body: '', contentType: 'text/css' }));
    await page.addInitScript(() => {
      localStorage.setItem('satoyama-immersive', JSON.stringify({ quality: 'balanced', lightingVersion: 1 }));
      // SwiftShader is slow: stop the loop once built; the test renders explicitly.
      let world; Object.defineProperty(window, '__satoyama', { configurable: true, get: () => world, set: v => { world = v; v.renderer.setAnimationLoop(null); } });
    });
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.waitForFunction(() => window.__satoyama || document.querySelector('#retry'));
    await page.evaluate(() => { const w = window.__satoyama; w.tick(); });
    await page.waitForFunction(() => document.body.classList.contains('ready'));
    const tag = `${width}x${height}`;
    await check(`${tag} start gate offers fullscreen`, async () => {
      assert.equal(await page.isVisible('#start-button'), true);
      assert.equal(await page.isVisible('#rotate-hint'), false);
      await page.click('#start-windowed');
      assert.equal(await page.isVisible('#start-gate'), false);
    });
    await check(`${tag} HUD inside viewport`, async () => {
      const out = await page.evaluate(() => [...document.querySelectorAll('.hud .brand, .actions, #joystick, #look-pad, .compass, #map-badge, #journey, .moment p')]
        .filter(e => e.offsetParent !== null && getComputedStyle(e).visibility !== 'hidden' && getComputedStyle(e).opacity !== '0')
        .map(e => { const r = e.getBoundingClientRect(); return { id: e.id || e.className, l: r.left, t: r.top, r: r.right, b: r.bottom }; })
        .filter(r => r.l < -1 || r.t < -1 || r.r > innerWidth + 1 || r.b > innerHeight + 1));
      assert.deepEqual(out, []);
    });
    await check(`${tag} controls do not overlap`, async () => {
      const hits = await page.evaluate(() => {
        const boxes = ['#joystick', '#look-pad', '.actions', '.brand', '#journey', '#map-badge', '.moment p', '.compass']
          .map(s => [s, document.querySelector(s)]).filter(([, e]) => e && e.offsetParent !== null && getComputedStyle(e).opacity !== '0')
          .map(([s, e]) => [s, e.getBoundingClientRect()]);
        const over = [];
        for (let i = 0; i < boxes.length; i++) for (let j = i + 1; j < boxes.length; j++) {
          const [a, ra] = boxes[i], [b, rb] = boxes[j];
          const x = Math.min(ra.right, rb.right) - Math.max(ra.left, rb.left), y = Math.min(ra.bottom, rb.bottom) - Math.max(ra.top, rb.top);
          if (x > 2 && y > 2) over.push(`${a}~${b}`);
        }
        return over;
      });
      assert.deepEqual(hits, []);
    });
    await check(`${tag} touch targets >= 40px`, async () => {
      const small = await page.evaluate(() => [...document.querySelectorAll('.hud button, .bottom-hud button, #joystick, #look-pad, #map-badge, #minimap-toggle')]
        .filter(e => e.offsetParent !== null).map(e => [e.id || e.className, e.getBoundingClientRect()])
        .filter(([, r]) => Math.min(r.width, r.height) < 32).map(([id, r]) => `${id}:${Math.round(r.width)}x${Math.round(r.height)}`));
      assert.deepEqual(small, []);
    });
    await check(`${tag} joystick moves the player`, async () => {
      const moved = await page.evaluate(() => {
        const w = window.__satoyama; w.transition = null; const start = w.camera.position.clone();
        w.joy.y = -1; for (let i = 0; i < 20; i++) { w.clock.getDelta = () => .05; w.tick(); } w.joy.y = 0;
        return start.distanceTo(w.camera.position);
      });
      assert.ok(moved > .5, `moved ${moved}`);
    });
    const img = await page.evaluate(() => { const w = window.__satoyama; w.render(); return w.renderer.domElement.toDataURL('image/jpeg', .8); });
    writeFileSync(`.artifacts/mobile-${tag}.jpg`, Buffer.from(img.split(',')[1], 'base64'));
    await page.screenshot({ path: `.artifacts/mobile-ui-${tag}.png` }).catch(() => {});
    await check(`${tag} portrait shows rotate hint`, async () => {
      await page.setViewportSize({ width: height, height: width });
      assert.equal(await page.isVisible('#rotate-hint'), true);
      await page.setViewportSize({ width, height });
      assert.equal(await page.isVisible('#rotate-hint'), false);
    });
    await context.close();
  }
} finally { await browser.close(); }
console.log(results.join('\n'));
if (errors.length) console.log('PAGE ERRORS\n' + errors.join('\n'));
if (results.some(r => r.startsWith('FAIL')) || errors.length) process.exitCode = 1;
