// Top-down layout render for placing details. Usage: X=0 Z=-40 SPAN=240 MAP=satoyama node tests/topdown.mjs
import { chromium } from '@playwright/test';
import { writeFileSync, mkdirSync } from 'node:fs';
mkdirSync('.artifacts', { recursive: true });
const browser = await chromium.launch({ headless: true, args: ['--no-sandbox', '--enable-unsafe-swiftshader', '--use-angle=swiftshader'] });
try {
  const size = Number(process.env.PX || 800);
  const page = await browser.newPage({ viewport: { width: size, height: size }, deviceScaleFactor: 1 });
  page.setDefaultTimeout(200000);
  page.on('pageerror', e => console.log('pageerror', e.message));
  await page.route('https://fonts.**/**', r => r.fulfill({ body: '', contentType: 'text/css' }));
  await page.addInitScript(() => {
    localStorage.setItem('satoyama-immersive', JSON.stringify({ quality: 'balanced', lightingVersion: 1 }));
    let world; Object.defineProperty(window, '__satoyama', { configurable: true, get: () => world, set: v => { world = v; v.renderer.setAnimationLoop(null); } });
  });
  await page.goto(`http://localhost:3000/?nogate&debug&map=${process.env.MAP || 'satoyama'}`, { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => window.__satoyama && window.__satoyama.materials.grass.map.image?.complete);
  await page.waitForTimeout(Number(process.env.WAIT || 4000));
  const img = await page.evaluate(({ x, z, span }) => {
    const w = window.__satoyama; w.transition = null; w.scene.fog.density = 0;
    const h = 1400; w.camera.far = 3000; w.camera.fov = 2 * Math.atan(span / 2 / h) * 180 / Math.PI; w.resize = () => {};
    w.camera.aspect = 1; w.camera.updateProjectionMatrix();
    w.camera.position.set(x, h, z); w.pitch = -Math.PI / 2; w.yaw = 0; w.tick();
    return w.renderer.domElement.toDataURL('image/jpeg', .9);
  }, { x: Number(process.env.X || 0), z: Number(process.env.Z || 0), span: Number(process.env.SPAN || 240) });
  writeFileSync(process.env.OUT || '.artifacts/topdown.jpg', Buffer.from(img.split(',')[1], 'base64'));
} finally { await browser.close(); }
