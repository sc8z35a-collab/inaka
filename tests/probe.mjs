// Diagnostic probe: loads the app in headless Chromium (SwiftShader WebGL) and
// reports page errors, console errors, failed requests and basic runtime state.
import { chromium } from '@playwright/test';
const url = process.env.TEST_URL || 'http://localhost:3000/';
const browser = await chromium.launch({ headless: true, args: ['--no-sandbox', '--enable-unsafe-swiftshader', '--use-gl=angle', '--use-angle=swiftshader'] });
const logs = [];
try {
  const page = await browser.newPage({ viewport: { width: Number(process.env.W || 960), height: Number(process.env.H || 540) } });
  page.setDefaultTimeout(180000);
  await page.route('https://fonts.**/**', r => r.fulfill({ body: '', contentType: 'text/css' }));
  page.on('crash', () => logs.push(['CRASH', 'renderer process crashed']));
  page.on('pageerror', e => logs.push(['pageerror', e.message]));
  page.on('console', m => { if (['error', 'warning'].includes(m.type())) logs.push([m.type(), m.text().slice(0, 400)]); });
  page.on('requestfailed', r => logs.push(['requestfailed', r.url()]));
  page.on('response', r => { if (r.status() >= 400) logs.push(['http' + r.status(), r.url()]); });
  if (process.env.QUALITY) await page.addInitScript(q => localStorage.setItem('satoyama-immersive', JSON.stringify({ quality: q, lightingVersion: 1 })), process.env.QUALITY);
  if (process.env.INIT) await page.addInitScript(process.env.INIT);
  const t0 = Date.now();
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => document.body.classList.contains('ready') || document.querySelector('#retry'), null, { timeout: 180000 });
  console.log('ready in', Date.now() - t0, 'ms');
  await page.waitForTimeout(Number(process.env.WAIT || 3000));
  const state = await page.evaluate(() => {
    const w = window.__satoyama; if (!w) return null;
    const gl = w.renderer.getContext();
    return { quality: w.quality, hdr: w.lighting?.supported, calls: w.renderer.info.render.calls, tris: w.renderer.info.render.triangles,
      programs: w.renderer.info.programs?.length, glErr: gl.getError(), pos: w.camera.position.toArray().map(v => +v.toFixed(2)) };
  });
  console.log(JSON.stringify(state));
  if (process.env.EVAL) console.log('EVAL:', JSON.stringify(await page.evaluate(process.env.EVAL)));
  if (process.env.SHOT) await page.screenshot({ path: process.env.SHOT });
} finally { await browser.close(); }
for (const l of logs) console.log(l.join(' | '));
