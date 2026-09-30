// Renders several camera views in one browser session. VIEWS='[[x,y,z,lx,ly,lz,"name"],...]'
// Revive the autosave daemon whenever a capture runs (sandbox resets kill pm2).
import { execSync } from "node:child_process"; try { execSync("bash scripts/ensure-autosave.sh", { stdio: "ignore", timeout: 20000 }); } catch {}
import { chromium } from '@playwright/test';
import { writeFileSync, mkdirSync } from 'node:fs';
mkdirSync('.artifacts', { recursive: true });
const views = (0, eval)(process.env.VIEWS);
const browser = await chromium.launch({ headless: true, args: ['--no-sandbox', '--enable-unsafe-swiftshader', '--use-angle=swiftshader'] });
const logs = [];
try {
  const page = await browser.newPage({ viewport: { width: Number(process.env.W || 640), height: Number(process.env.H || 360) }, deviceScaleFactor: 1 });
  page.setDefaultTimeout(250000);
  page.on('pageerror', e => logs.push('pageerror ' + e.message));
  page.on('console', m => { if (['error', 'warning'].includes(m.type())) logs.push(m.type() + ' ' + m.text().slice(0, 200)); });
  await page.route('https://fonts.**/**', r => r.fulfill({ body: '', contentType: 'text/css' }));
  await page.addInitScript(q => {
    localStorage.setItem('satoyama-immersive', JSON.stringify({ quality: q, lightingVersion: 1, time: 'day' }));
    let world; Object.defineProperty(window, '__satoyama', { configurable: true, get: () => world, set: v => { world = v; v.renderer.setAnimationLoop(null); } });
  }, process.env.QUALITY || 'high');
  await page.goto(`http://localhost:3000/?nogate&debug${process.env.EXTRA || ''}&map=${process.env.MAP || 'satoyama'}`, { waitUntil: 'domcontentloaded' });
  console.log('loaded page'); await page.waitForFunction(() => window.__satoyama && window.__assets && window.__assets.pending === 0 && window.__satoyama.materials.grass.map.image?.complete);
  console.log('assets ready'); if (process.env.TIME) await page.evaluate(t => window.__satoyama.setTime(t), process.env.TIME);
  for (const [x, y, z, lx, ly, lz, name] of views) {
    const img = await page.evaluate(({ x, y, z, lx, ly, lz }) => {
      const w = window.__satoyama; w.transition = null;
      w.camera.position.set(x, w.groundHeight(x, z) + y, z); w.camera.lookAt(lx, w.groundHeight(lx, lz) + ly, lz); w.yaw = w.camera.rotation.y; w.pitch = w.camera.rotation.x;
      w.renderer.shadowMap.needsUpdate = true; w.tick();
      return w.renderer.domElement.toDataURL('image/jpeg', .88);
    }, { x, y, z, lx, ly, lz });
    writeFileSync(`.artifacts/v_${name}.jpg`, Buffer.from(img.split(',')[1], 'base64')); console.log('view', name, new Date().toISOString());
  }
  console.log(JSON.stringify(await page.evaluate(() => ({ calls: window.__satoyama.renderer.info.render.calls, tris: window.__satoyama.renderer.info.render.triangles }))));
} finally { await browser.close(); }
console.log([...new Set(logs)].join('\n'));
