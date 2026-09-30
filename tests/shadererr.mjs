// Prints full shader compile errors for a map. Usage: node tests/shadererr.mjs satoyama low
import { chromium } from '@playwright/test';
const [map = 'satoyama', quality = 'low'] = process.argv.slice(2);
const b = await chromium.launch({ args: ['--no-sandbox', '--enable-unsafe-swiftshader', '--use-angle=swiftshader'] });
try {
  const p = await b.newPage({ viewport: { width: 320, height: 180 } });
  p.on('pageerror', e => console.log('pageerror ' + e.message));
  p.on('console', m => { if (m.type() === 'error') console.log(m.text().slice(0, 3000)); });
  await p.route('https://fonts.**/**', r => r.fulfill({ body: '', contentType: 'text/css' }));
  await p.addInitScript(q => localStorage.setItem('satoyama-immersive', JSON.stringify({ quality: q, lightingVersion: 1 })), quality);
  await p.goto(`http://localhost:3000/?nogate&debug&map=${map}`);
  await p.waitForFunction(() => document.body.classList.contains('ready') || document.querySelector('#retry'), null, { timeout: 200000 });
  await p.waitForTimeout(4000);
} finally { await b.close(); }
