#!/usr/bin/env node
// Six-agent automated build pipeline for Satoyama Biyori.
//
//   node pipeline/agents.mjs --preflight        check LLM availability for all six agents
//   node pipeline/agents.mjs --goal "..."       run six agents in parallel, integrate, gate, commit
//   node pipeline/agents.mjs --offline          run the deterministic gates only
//
// Flow: 6 role agents run concurrently (Promise.allSettled) -> each returns JSON patches ->
// the integrator applies one agent at a time, runs gates (build, logic, optional browser smoke),
// commits accepted work immediately (the sandbox may be reset at any time) and reverts failures.
// Credentials are read from env / ~/.genspark_llm.yaml and never written to disk or logs.
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { homedir } from 'node:os';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const args = process.argv.slice(2);
const flag = name => args.includes(name);
const option = (name, fallback) => { const i = args.indexOf(name); return i >= 0 ? args[i + 1] : fallback; };
const sh = (cmd, opts = {}) => execSync(cmd, { cwd: root, stdio: 'pipe', encoding: 'utf8', maxBuffer: 64 << 20, ...opts });

// ---------- configuration ----------
function loadConfig() {
  let key = process.env.OPENAI_API_KEY, base = process.env.OPENAI_BASE_URL;
  const file = join(homedir(), '.genspark_llm.yaml');
  if (existsSync(file)) {
    const text = readFileSync(file, 'utf8');
    key ||= text.match(/api_key:\s*(\S+)/)?.[1];
    base ||= text.match(/base_url:\s*(\S+)/)?.[1];
  }
  return { key, base: (base || 'https://www.genspark.ai/api/llm_proxy/v1').replace(/\/$/, '') };
}
const config = loadConfig();

// ---------- the six agents ----------
export const AGENTS = [
  { id: 'A1-director', model: 'gpt-5.2', files: ['index.html', 'src/main.js', 'src/style.css'],
    role: 'Creative director / game designer. Owns the landscape-fullscreen phone experience: onboarding, orientation, HUD hierarchy, discoverability. Never breaks existing features.' },
  { id: 'A2-graphics', model: 'gpt-5.3-codex', files: ['src/lighting.js', 'src/scene.js'],
    role: 'Rendering engineer (three.js r180, WebGL2). Maximises visual fidelity for flagship Android GPUs (Adreno 7xx/8xx, Mali-G7xx): tone mapping, shadows, atmosphere, water, antialiasing.' },
  { id: 'A3-world', model: 'gpt-5.3-codex', files: ['src/plains.js', 'src/nature.js', 'src/terrain.js'],
    role: 'Environment artist. Enriches the countryside (vegetation variety, props, landmarks) with instancing so draw calls stay bounded.' },
  { id: 'A4-mobile', model: 'gpt-5.2-codex', files: ['src/main.js', 'src/style.css', 'index.html'],
    role: 'Mobile input & layout engineer. Landscape-only, fullscreen, safe areas, notches, multi-touch joystick/look, 360-480 px tall viewports.' },
  { id: 'A5-performance', model: 'gpt-5.2-codex', files: ['src/scene.js', 'src/lighting.js', 'src/life.js'],
    role: 'Performance engineer. Stable 60 fps on flagship phones without lowering the quality presets: culling, batching, allocation-free loops, thermal headroom.' },
  { id: 'A6-qa', model: 'gpt-5.2', files: ['tests/logic.mjs', 'tests/mobile-smoke.mjs', 'src/life.js', 'src/terrain.js'],
    role: 'QA / reviewer. Finds bugs and regressions, adds assertions to tests, rejects risky changes.' },
];

const SYSTEM = `You are one of six parallel agents improving a three.js countryside walking game played ONLY on a flagship Android phone in landscape fullscreen.
Respond with strict JSON: {"summary": string, "findings": string[], "patches": [{"file": string, "search": string, "replace": string, "why": string}]}.
Rules: "search" must be an exact, unique substring of the current file; keep patches small and independent; no new dependencies; never touch secrets; return patches: [] if unsure.`;

async function chat(model, messages, { timeout = 240000 } = {}) {
  if (!config.key) throw Object.assign(new Error('No LLM API key in env or ~/.genspark_llm.yaml'), { code: 'no_key' });
  const res = await fetch(`${config.base}/chat/completions`, {
    method: 'POST', signal: AbortSignal.timeout(timeout),
    headers: { Authorization: `Bearer ${config.key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ model, messages }),
  });
  const body = await res.json().catch(() => ({}));
  const content = body?.choices?.[0]?.message?.content ?? '';
  // The Genspark proxy answers 200 with an explanatory message when credits are unavailable.
  if (!res.ok || body.x_genspark?.code || /Free-plan credits can't be used/i.test(content)) {
    throw Object.assign(new Error(content || body.error?.message || `HTTP ${res.status}`), { code: body.x_genspark?.code || 'llm_unavailable' });
  }
  return content;
}

async function preflight() {
  const rows = await Promise.all(AGENTS.map(async agent => {
    const started = Date.now();
    try { await chat(agent.model, [{ role: 'user', content: 'Reply with OK' }], { timeout: 90000 }); return { agent: agent.id, model: agent.model, ok: true, ms: Date.now() - started }; }
    catch (e) { return { agent: agent.id, model: agent.model, ok: false, code: e.code, error: e.message.slice(0, 160) }; }
  }));
  console.table(rows);
  return rows;
}

// ---------- deterministic gates ----------
const GATES = [
  { name: 'build', cmd: 'npx vite build --logLevel error' },
  { name: 'logic', cmd: 'node tests/logic.mjs' },
  { name: 'mobile-smoke', cmd: 'node tests/mobile-smoke.mjs', optional: !flag('--browser') },
];
function runGates() {
  const results = [];
  for (const gate of GATES) {
    if (gate.optional) { results.push({ gate: gate.name, skipped: true }); continue; }
    const started = Date.now();
    try { const out = sh(gate.cmd, { timeout: 900000 }); results.push({ gate: gate.name, ok: true, ms: Date.now() - started, tail: out.split('\n').slice(-4).join('\n') }); }
    catch (e) { results.push({ gate: gate.name, ok: false, ms: Date.now() - started, tail: String(e.stdout || e.message).split('\n').slice(-12).join('\n') }); break; }
  }
  return { ok: results.every(r => r.ok || r.skipped), results };
}

// ---------- integration ----------
function applyPatches(patches) {
  const touched = new Map();
  for (const p of patches) {
    const path = join(root, p.file);
    if (!p.file || p.file.includes('..') || !existsSync(path)) throw new Error(`invalid file ${p.file}`);
    const text = touched.get(path) ?? readFileSync(path, 'utf8');
    const count = text.split(p.search).length - 1;
    if (count !== 1) throw new Error(`${p.file}: search text matched ${count} times`);
    touched.set(path, text.replace(p.search, () => p.replace));
  }
  for (const [path, text] of touched) writeFileSync(path, text);
  return [...touched.keys()];
}
const commit = message => { sh('git add -A src index.html tests public pipeline'); try { sh(`git commit -q -m ${JSON.stringify(message)}`); return true; } catch { return false; } };

async function runAgent(agent, goal) {
  const files = agent.files.filter(f => existsSync(join(root, f)))
    .map(f => `=== ${f} ===\n${readFileSync(join(root, f), 'utf8').slice(0, 60000)}`).join('\n\n');
  const content = await chat(agent.model, [
    { role: 'system', content: SYSTEM },
    { role: 'user', content: `Your role: ${agent.role}\nTeam goal: ${goal}\n\n${files}` },
  ]);
  const json = JSON.parse(content.slice(content.indexOf('{'), content.lastIndexOf('}') + 1));
  return { agent: agent.id, ...json };
}

async function main() {
  const reportDir = join(root, '.artifacts/pipeline'); mkdirSync(reportDir, { recursive: true });
  const report = { started: new Date().toISOString(), agents: [], gates: null };
  if (flag('--preflight')) { report.preflight = await preflight(); }
  else if (flag('--offline')) { report.gates = runGates(); console.log(JSON.stringify(report.gates, null, 1)); }
  else {
    const goal = option('--goal', 'Raise visual quality and landscape-phone playability without regressions.');
    const status = await preflight();
    if (!status.some(r => r.ok)) {
      console.error('LLM agents unavailable (see table). Running deterministic gates only.');
      report.gates = runGates();
    } else {
      const active = AGENTS.filter(a => status.find(r => r.agent === a.id)?.ok);
      // All agents think in parallel; integration is serial so every commit is individually gated.
      const proposals = await Promise.allSettled(active.map(a => runAgent(a, goal)));
      for (const [i, p] of proposals.entries()) {
        const entry = { agent: active[i].id };
        if (p.status === 'rejected') { entry.error = p.reason.message; report.agents.push(entry); continue; }
        Object.assign(entry, { summary: p.value.summary, findings: p.value.findings, patches: p.value.patches?.length || 0 });
        try {
          const files = applyPatches(p.value.patches || []);
          if (!files.length) { entry.result = 'no-op'; }
          else {
            const gates = runGates(); entry.gates = gates.results;
            if (gates.ok) { entry.result = commit(`feat(agent:${active[i].id}): ${String(p.value.summary).slice(0, 72)}`) ? 'committed' : 'unchanged'; }
            else { sh(`git checkout -- ${files.map(f => JSON.stringify(f)).join(' ')}`); entry.result = 'reverted (gate failure)'; }
          }
        } catch (e) { entry.result = `rejected: ${e.message}`; sh('git checkout -- src index.html tests'); }
        report.agents.push(entry); console.log(entry.agent, entry.result);
      }
    }
  }
  report.finished = new Date().toISOString();
  const file = join(reportDir, `run-${Date.now()}.json`);
  writeFileSync(file, JSON.stringify(report, null, 2));
  console.log('report:', file);
  if (report.gates && !report.gates.ok) process.exitCode = 1;
}
main().catch(e => { console.error(e); process.exitCode = 1; });
