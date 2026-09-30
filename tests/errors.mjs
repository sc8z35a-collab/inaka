// Loads a map and reports readiness time, draw stats and unique console errors.
// Usage: node tests/errors.mjs plains|satoyama [quality]
import { chromium } from '@playwright/test';
const [map = 'satoyama', quality = 'low'] = process.argv.slice(2);
const b = await chromium.launch({ args: ['--no-sandbox', '--enable-unsafe-swiftshader', '--use-angle=swiftshader'] });
try {
  const p = await b.newPage({ viewport: { width: 320, height: 180 } });
  const logs = new Set();
  p.on('pageerror', e => logs.add('pageerror ' + e.message));
  p.on('console', m => { if (['error', 'warning'].includes(m.type())) logs.add(m.type() + ' ' + m.text().replace(/\s+/g, ' ').slice(0, 260)); });
  await p.route('https://fonts.**/**', r => r.fulfill({ body: '', contentType: 'text/css' }));
  await p.addInitScript(q => localStorage.setItem('satoyama-immersive', JSON.stringify({ quality: q, lightingVersion: 1 })), quality);
  const t = Date.now();
  await p.goto(`${process.env.BASE || 'http://localhost:3000'}/?nogate&debug&map=${map}`);
  await p.waitForFunction(() => document.body.classList.contains('ready') || document.querySelector('#retry'), null, { timeout: 200000 });
  const ready = Date.now() - t;
  await p.waitForFunction(() => window.__assets && window.__assets.pending === 0, null, { timeout: 100000 }).catch(() => logs.add('assets timeout'));
  await p.waitForTimeout(3000);
  console.log('ready', ready, 'ms; assets', Date.now() - t, 'ms');
  console.log(JSON.stringify(await p.evaluate(() => { const w = window.__satoyama; if (!w) return null; const gl = w.renderer.getContext(); return { calls: w.renderer.info.render.calls, tris: w.renderer.info.render.triangles, textures: w.renderer.info.memory.textures, geometries: w.renderer.info.memory.geometries, lost: gl.isContextLost(), colliders: w.colliders.length }; })));
  console.log([...logs].join('\n'));
} finally { await b.close(); }
