// Lists the heaviest scene objects (triangles × instances) without rendering.
// Usage: MAP=satoyama node tests/tris.mjs
import { chromium } from '@playwright/test';
const b = await chromium.launch({ args: ['--no-sandbox', '--enable-unsafe-swiftshader', '--use-angle=swiftshader'] });
try {
  const p = await b.newPage({ viewport: { width: 160, height: 90 } });
  p.setDefaultTimeout(300000);
  await p.route('https://fonts.**/**', r => r.fulfill({ body: '', contentType: 'text/css' }));
  await p.addInitScript(() => { localStorage.setItem('satoyama-immersive', JSON.stringify({ quality: 'balanced', lightingVersion: 1 }));
    let world; Object.defineProperty(window, '__satoyama', { configurable: true, get: () => world, set: v => { world = v; v.renderer.setAnimationLoop(null); } }); });
  await p.goto(`http://localhost:${process.env.PORT || 3000}/?nogate&debug&map=${process.env.MAP || 'satoyama'}`);
  await p.waitForFunction(() => window.__satoyama && window.__assets && window.__assets.pending === 0);
  await p.waitForTimeout(1500);
  const rows = await p.evaluate(() => {
    const out = [];
    window.__satoyama.scene.traverse(o => {
      if (!o.isMesh && !o.isPoints) return;
      const g = o.geometry, tris = (g.index ? g.index.count : g.attributes.position.count) / 3, n = o.isInstancedMesh ? o.count : 1;
      let path = o.name || ''; for (let q = o.parent; q && !path.includes(':'); q = q.parent) if (q.name) path = q.name + '/' + path;
      out.push([Math.round(tris * n), Math.round(tris), n, o.material.type, path, o.castShadow]);
    });
    const total = out.reduce((s, r) => s + r[0], 0), groups = {};
    for (const r of out) { const k = r[4].split('/')[0] || `${r[3]} x${r[2] > 1 ? 'inst' : '1'}`; groups[k] = (groups[k] || 0) + r[0]; }
    return [[total, 'TOTAL']].concat(Object.entries(groups).sort((a, b) => b[1] - a[1]).slice(0, 30).map(([k, v]) => [v, k]));
  });
  for (const r of rows) console.log(r.join('\t'));
} finally { await b.close(); }
