// Visual check under SwiftShader: small canvas, animation loop stopped, explicit renders.
// Usage: QUALITY=low SPOT=0 TIME=day OUT=.artifacts/x.jpg node tests/shot.mjs
import { chromium } from '@playwright/test';
import { writeFileSync, mkdirSync } from 'node:fs';
mkdirSync('.artifacts', { recursive: true });
const browser = await chromium.launch({ headless: true, args: ['--no-sandbox', '--enable-unsafe-swiftshader', '--use-angle=swiftshader'] });
const logs = [];
try {
  const page = await browser.newPage({ viewport: { width: Number(process.env.W || 320), height: Number(process.env.H || 180) }, deviceScaleFactor: 1 });
  page.setDefaultTimeout(Number(process.env.TIMEOUT || 100000));
  page.on('crash', () => logs.push('CRASH'));
  page.on('pageerror', e => logs.push('pageerror ' + e.message));
  page.on('console', m => { if (['error', 'warning'].includes(m.type())) logs.push(m.type() + ' ' + m.text().slice(0, 300)); });
  await page.route('https://fonts.**/**', r => r.fulfill({ body: '', contentType: 'text/css' }));
  await page.addInitScript(q => {
    localStorage.setItem('satoyama-immersive', JSON.stringify({ quality: q, lightingVersion: 1 }));
    let world; Object.defineProperty(window, '__satoyama', { configurable: true, get: () => world, set: v => { world = v; v.renderer.setAnimationLoop(null); } });
  }, process.env.QUALITY || 'low');
  await page.goto(process.env.URL || 'http://localhost:3000/', { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => window.__satoyama && window.__satoyama.materials.grass.map.image?.complete);
  const data = await page.evaluate(async ({ spot, time, script }) => {
    const w = window.__satoyama;
    if (time) w.setTime(time);
    w.goTo(spot, true); w.camera.position.copy(w.transition.end); w.yaw = w.transition.endYaw; w.pitch = w.transition.endPitch; w.transition = null;
    let extra = null;
    if (script) extra = await (0, eval)(script)(w);
    w.tick();
    const gl = w.renderer.getContext();
    return { img: w.renderer.domElement.toDataURL('image/jpeg', .9), calls: w.renderer.info.render.calls, err: gl.getError(), lost: gl.isContextLost(), extra };
  }, { spot: Number(process.env.SPOT || 0), time: process.env.TIME, script: process.env.SCRIPT });
  writeFileSync(process.env.OUT || '.artifacts/shot.jpg', Buffer.from(data.img.split(',')[1], 'base64'));
  console.log(JSON.stringify({ calls: data.calls, err: data.err, lost: data.lost, extra: data.extra }));
} finally { await browser.close(); }
console.log(logs.join('\n'));
