import './style.css';
import { createIcons, VolumeX, Volume2, SlidersHorizontal, Maximize, Minimize, Sun, Sprout, MoveUp, X, MapPin, Scan, Map, Camera, Footprints, Bike } from 'lucide';
import { Countryside, spots as originalSpots } from './scene.js';
import { plainsFields, plainsSpots, plainsBounds } from './plains.js';

const $ = selector => document.querySelector(selector);
const icons = () => createIcons({ icons: { VolumeX, Volume2, SlidersHorizontal, Maximize, Minimize, Sun, Sprout, MoveUp, X, MapPin, Scan, Map, Camera, Footprints, Bike } });
icons();
let world, toastTimer;
let saved = {};
try {
  const parsed = JSON.parse(localStorage.getItem('satoyama-immersive') || '{}');
  if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) saved = parsed;
} catch { /* Storage is optional. */ }
const params = new URLSearchParams(location.search);
const mapId = params.get('map') === 'satoyama' ? 'satoyama' : 'plains';
const isPlains = mapId === 'plains';
const activeSpots = isPlains ? plainsSpots : originalSpots;
const qualities = ['ultra', 'hdr', 'high', 'low', 'balanced'];
const settings = {
  quality: qualities.includes(params.get('quality')) ? params.get('quality')
    : saved.lightingVersion === 1 && qualities.includes(saved.quality) ? saved.quality : isPlains ? 'ultra' : 'hdr',
  plainsDiscovered: Array.isArray(saved.plainsDiscovered) ? saved.plainsDiscovered.filter(i => Number.isInteger(i) && i >= 0 && i < plainsSpots.length) : [],
  travelMode: saved.travelMode === 'cycle' ? 'cycle' : 'walk',
  lightingVersion: 1,
  sensitivity: Math.max(.3, Math.min(1.6, Number(saved.sensitivity) || .8)),
  volume: Number.isFinite(saved.volume) ? Math.max(0, Math.min(1, saved.volume)) : .5,
};
const persist = () => { try { localStorage.setItem('satoyama-immersive', JSON.stringify(settings)); } catch { /* Private mode. */ } };
function toast(message) {
  clearTimeout(toastTimer); $('#toast').textContent = message; $('#toast').classList.add('show');
  toastTimer = setTimeout(() => $('#toast').classList.remove('show'), 3200);
}

// Quiet wind, water and birds are synthesized locally. Nothing plays without consent.
class NatureAudio {
  constructor() { this.enabled = false; this.ctx = null; this.timer = null; }
  async toggle() {
    if (!this.ctx) {
      const Audio = window.AudioContext || window.webkitAudioContext;
      if (!Audio) { toast('このブラウザは環境音に対応していません。'); return; }
      this.ctx = new Audio(); this.master = this.ctx.createGain();
      this.master.gain.value = 0; this.master.connect(this.ctx.destination);
      const buffer = this.ctx.createBuffer(1, this.ctx.sampleRate * 8, this.ctx.sampleRate);
      const data = buffer.getChannelData(0); let last = 0;
      for (let i = 0; i < data.length; i++) { last = (last + (Math.random() * 2 - 1) * .023) / 1.024; data[i] = last * 4; }
      for (const [frequency, volume, rate] of [[650, .3, 1], [2100, .055, 1.8]]) {
        const source = this.ctx.createBufferSource(), filter = this.ctx.createBiquadFilter(), gain = this.ctx.createGain();
        source.buffer = buffer; source.loop = true; source.playbackRate.value = rate;
        filter.type = frequency < 1000 ? 'lowpass' : 'bandpass'; filter.frequency.value = frequency;
        gain.gain.value = volume; source.connect(filter); filter.connect(gain); gain.connect(this.master); source.start();
      }
    }
    await this.ctx.resume(); this.enabled = !this.enabled;
    this.master.gain.setTargetAtTime(this.enabled ? settings.volume : 0, this.ctx.currentTime, .4);
    if (this.enabled) this.scheduleBird(); else clearTimeout(this.timer);
    $('#sound').innerHTML = `<i data-lucide="${this.enabled ? 'volume-2' : 'volume-x'}"></i>`;
    $('#sound').setAttribute('aria-pressed', String(this.enabled));
    $('#sound').setAttribute('aria-label', `環境音を${this.enabled ? 'オフ' : 'オン'}にする`);
    icons(); toast(this.enabled ? '鳥の声と、風の音。' : '環境音をオフにしました');
  }
  scheduleBird() {
    clearTimeout(this.timer);
    if (!this.enabled) return;
    const now = this.ctx.currentTime + .1, base = 1900 + Math.random() * 900;
    for (let j = 0; j < 3; j++) {
      const start = now + j * .18, osc = this.ctx.createOscillator(), gain = this.ctx.createGain();
      const pan = this.ctx.createStereoPanner();
      osc.frequency.setValueAtTime(base, start); osc.frequency.exponentialRampToValueAtTime(base * 1.6, start + .065); osc.frequency.exponentialRampToValueAtTime(base * .88, start + .13);
      gain.gain.setValueAtTime(0, start); gain.gain.linearRampToValueAtTime(.035, start + .018); gain.gain.exponentialRampToValueAtTime(.0001, start + .16);
      pan.pan.value = Math.random() * 1.6 - .8; osc.connect(gain); gain.connect(pan); pan.connect(this.master); osc.start(start); osc.stop(start + .18);
      osc.onended = () => { osc.disconnect(); gain.disconnect(); pan.disconnect(); };
    }
    this.timer = setTimeout(() => this.scheduleBird(), 4500 + Math.random() * 7000);
  }
  volume(value) { if (this.ctx && this.enabled) this.master.gain.setTargetAtTime(value, this.ctx.currentTime, .1); }
}
const audio = new NatureAudio();
$('#sound').addEventListener('click', () => audio.toggle().catch(() => toast('音声を再生できませんでした。もう一度お試しください。')));
document.addEventListener('visibilitychange', () => {
  resetTouchControls();
  if (audio.ctx) { if (document.hidden) audio.ctx.suspend().catch(() => {}); else if (audio.enabled) audio.ctx.resume().catch(() => {}); }
});

function setPanel(open) {
  $('#settings').hidden = !open;
  document.body.classList.toggle('panel-open', open);
  $('#settings-button').setAttribute('aria-expanded', String(open));
  if (world) { world.paused = open; world.resetInput(); }
  resetTouchControls();
  if (open) $('#close-settings').focus(); else world?.renderer.domElement.focus({ preventScroll: true });
}
$('#settings-button').addEventListener('click', () => setPanel($('#settings').hidden));
$('#close-settings').addEventListener('click', () => setPanel(false));
$('#world').addEventListener('pointerdown', () => { if (!$('#settings').hidden) setPanel(false); });
$('#quality').value = settings.quality;
$('#sensitivity').value = settings.sensitivity;
$('#volume').value = settings.volume;
$('#quality').addEventListener('change', e => { settings.quality = e.target.value; const actual=world?.setQuality(settings.quality); if(actual) settings.quality=actual; $('#quality').value=settings.quality; updateResolution(); persist(); });
$('#sensitivity').addEventListener('input', e => { settings.sensitivity = Number(e.target.value); if (world) world.sensitivity = settings.sensitivity; persist(); });
$('#volume').addEventListener('input', e => { settings.volume = Number(e.target.value); audio.volume(settings.volume); persist(); });
$('#time-of-day').addEventListener('change',e=>{world?.setTime(e.target.value);$('#time-label').textContent={morning:'07:00',day:'14:32',evening:'17:30'}[e.target.value];});
$('#viewpoint').addEventListener('change',e=>{world?.goTo(Number(e.target.value),true);setPanel(false);});
$('#reset-position').addEventListener('click', () => { setPanel(false); world?.goTo(0, true); toast(isPlains ? '見晴らしの丘へ。' : 'いつものあぜ道へ。'); });
$('.brand').addEventListener('click', e => { e.preventDefault(); world?.renderer.domElement.focus({ preventScroll: true }); });
const fullscreenElement = () => document.fullscreenElement || document.webkitFullscreenElement;
let fullscreenBusy = false;
function syncFullscreen() {
  const enabled = !!fullscreenElement() || document.body.classList.contains('fullscreen-fallback');
  const label = enabled ? '全画面を終了' : '全画面表示';
  $('#fullscreen').innerHTML = `<i data-lucide="${enabled ? 'minimize' : 'maximize'}"></i>`;
  $('#fullscreen').setAttribute('aria-label', label); $('#fullscreen').title = label;
  $('#fullscreen').setAttribute('aria-pressed', String(enabled));
  $('#leave-fullscreen').hidden = !enabled;
  icons(); resetTouchControls(); world?.resetInput();
  requestAnimationFrame(() => { world?.resize(); updateResolution(); });
}
async function toggleFullscreen() {
  if (fullscreenBusy) return;
  fullscreenBusy = true;
  try {
    if (fullscreenElement()) {
      const exit = document.exitFullscreen || document.webkitExitFullscreen;
      await exit.call(document);
    } else if (document.body.classList.contains('fullscreen-fallback')) {
      document.body.classList.remove('fullscreen-fallback');
    } else {
      const root = document.documentElement, request = root.requestFullscreen || root.webkitRequestFullscreen;
      if (!request) throw new Error('Fullscreen API unavailable');
      await request.call(root);
    }
  } catch {
    if (!fullscreenElement()) {
      document.body.classList.add('fullscreen-fallback');
      toast('画面内のワイド表示に切り替えました。ブラウザの全画面は非対応または制限されています。');
    } else toast('全画面を終了できませんでした。Escキーまたはブラウザの終了操作をお試しください。');
  } finally {
    fullscreenBusy = false; syncFullscreen();
    world?.renderer.domElement.focus({ preventScroll: true });
  }
}
$('#fullscreen').addEventListener('click', toggleFullscreen);
$('#leave-fullscreen').addEventListener('click', toggleFullscreen);
for (const event of ['fullscreenchange', 'webkitfullscreenchange']) document.addEventListener(event, syncFullscreen);
window.addEventListener('resize', updateResolution);
function setZen(value) {
  setPanel(false); document.body.classList.toggle('zen', value); $('#show-ui').hidden = !value;
  $('.hud').inert = value; $('.bottom-hud').inert = value;
  $('#journey').inert = value; $('#map-badge').inert = value;
  // Keep WASD available in scenery-only mode; the restore button remains tabbable.
  world?.renderer.domElement.focus({ preventScroll: true });
}
$('#hide-ui').addEventListener('click', () => setZen(true));
$('#show-ui').addEventListener('click', () => setZen(false));
window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (document.body.classList.contains('fullscreen-fallback')) { document.body.classList.remove('fullscreen-fallback'); syncFullscreen(); } if (!$('#settings').hidden) setPanel(false); if (document.body.classList.contains('zen')) setZen(false); }
  if (e.code === 'KeyF' && !e.repeat && !e.ctrlKey && !e.metaKey && !e.altKey && !e.isComposing && !e.target.isContentEditable && !e.target.closest?.('input,select,textarea,button,a')) {
    e.preventDefault(); toggleFullscreen();
  }
});

// Each control owns its pointer, allowing simultaneous movement and camera rotation.
const joystick = $('#joystick'), thumb = $('#joystick-thumb'); let joyPointer = null;
function updateJoystick(e) {
  if (!world || world.paused) return;
  const r = joystick.getBoundingClientRect(), max = r.width * .3;
  let x = e.clientX - r.left - r.width / 2, y = e.clientY - r.top - r.height / 2;
  const len = Math.hypot(x, y); if (len > max) { x = x / len * max; y = y / len * max; }
  thumb.style.transform = `translate(${x}px,${y}px)`;
  world.transition = null; world.joy.x = x / max; world.joy.y = y / max;
}
joystick.addEventListener('pointerdown', e => { if (joyPointer !== null || !world || world.paused || e.button !== 0) return; e.preventDefault(); joyPointer = e.pointerId; joystick.setPointerCapture(e.pointerId); updateJoystick(e); });
joystick.addEventListener('pointermove', e => { if (e.pointerId === joyPointer) updateJoystick(e); });
function releaseCapture(element, id) {
  if (id != null && element.hasPointerCapture(id)) element.releasePointerCapture(id);
}
function resetJoystick(event) {
  if (event && event.pointerId !== joyPointer) return;
  const id = joyPointer; joyPointer = null;
  thumb.style.transform = ''; if (world) world.joy.x = world.joy.y = 0;
  releaseCapture(joystick, id);
}
for (const event of ['pointerup', 'pointercancel', 'lostpointercapture']) joystick.addEventListener(event, resetJoystick);
window.addEventListener('blur', () => resetTouchControls());
const look = $('#look-pad'); let lookPointer = null;
look.addEventListener('pointerdown', e => { if (lookPointer || !world || world.paused || e.button !== 0) return; e.preventDefault(); lookPointer = { id: e.pointerId, x: e.clientX, y: e.clientY }; look.setPointerCapture(e.pointerId); });
look.addEventListener('pointermove', e => {
  if (!lookPointer || e.pointerId !== lookPointer.id || !world || world.paused) return;
  world.transition = null; world.yaw -= (e.clientX - lookPointer.x) * .003 * settings.sensitivity;
  world.pitch = Math.max(-1.18, Math.min(1.1, world.pitch - (e.clientY - lookPointer.y) * .0024 * settings.sensitivity));
  lookPointer.x = e.clientX; lookPointer.y = e.clientY;
});
function resetLook(event) {
  if (event && event.pointerId !== lookPointer?.id) return;
  const id = lookPointer?.id; lookPointer = null;
  releaseCapture(look, id);
}
function resetTouchControls() { resetJoystick(); resetLook(); }
for (const event of ['pointerup', 'pointercancel', 'lostpointercapture']) look.addEventListener(event, resetLook);

// Reloading on map changes releases the previous map's GPU resources and controls.
// Quality, volume, discoveries and movement preferences survive in optional storage.
$('#map-select').value = mapId;
function describeMap() {
  const selected = $('#map-select').value;
  $('#map-description').textContent = selected === 'plains' ? '696 × 696 m・既存マップの9倍の面積。丘、麦畑、水田と並木道。' : '232 × 232 m・茅葺きの集落、棚田と小さな鉄道。';
  $('#change-map').disabled = selected === mapId;
  $('#change-map').textContent = selected === mapId ? 'このマップを散策中' : 'このマップへ出かける';
}
describeMap();
$('#map-select').addEventListener('change', describeMap);
$('#change-map').addEventListener('click', () => {
  const destination = new URL(location.href); destination.searchParams.set('map', $('#map-select').value);
  destination.searchParams.delete('quality');
  persist(); location.assign(destination.href);
});
$('#map-badge').addEventListener('click', () => { setPanel(true); $('#map-select').focus(); });
$('#map-label').textContent = isPlains ? 'はるか野の田園' : '夏の里山';
$('#map-badge span').textContent = isPlains ? 'はるか野' : '里山日和';
$('#map-badge b').textContent = isPlains ? '9×' : 'ORIGINAL';
$('#reset-label').textContent = isPlains ? 'はじめの丘へ' : 'はじめのあぜ道へ';
$('#loading-caption').textContent = isPlains ? 'はるか野に、風が吹く。' : '里山に、風が吹く。';
$('#journey').hidden = !isPlains;
document.body.dataset.map = mapId;
if (isPlains) {
  document.title = 'はるか野 — どこまでも、田園。 | 里山日和';
  $('.brand p').textContent = 'どこまでも、田園。';
  $('.moment p').textContent = 'いつもより、遠くへ。';
  $('.moment-caption').textContent = 'A WIDER HORIZON. A SLOWER DAY.';
  $('#world').setAttribute('aria-label', '696メートル四方の広大な田園を自由に散策');
}
$('#viewpoint').replaceChildren(...activeSpots.map((spot, index) => new Option(spot.name, index)));
function updateResolution() {
  if (world) requestAnimationFrame(() => { $('#render-resolution').textContent = world.renderResolution; });
}
function setTravelMode(value) {
  settings.travelMode = value === 'cycle' ? 'cycle' : 'walk';
  if (world) { world.travelMode = settings.travelMode; world.resetInput(); }
  $('#travel-mode').value = settings.travelMode;
  const fast = settings.travelMode === 'cycle';
  $('#travel-toggle').innerHTML = `<i data-lucide="${fast ? 'bike' : 'footprints'}"></i><span>${fast ? '風を切って移動 · 3×' : 'のんびり歩く'}</span>`;
  $('#travel-toggle').setAttribute('aria-pressed', String(fast)); icons(); persist();
}
$('#travel-mode').addEventListener('change', e => setTravelMode(e.target.value));
$('#travel-toggle').addEventListener('click', () => { setTravelMode(settings.travelMode === 'cycle' ? 'walk' : 'cycle'); world?.renderer.domElement.focus({ preventScroll: true }); });
setTravelMode(settings.travelMode);
$('#save-view').addEventListener('click', () => {
  if (!world?.ready) { toast('風景の準備ができるまでお待ちください。'); return; }
  try {
    const link = document.createElement('a'); link.download = `${mapId}_${new Date().toISOString().replace(/[:.]/g, '-')}.png`;
    link.href = world.screenshot(); document.body.append(link); link.click(); link.remove(); toast(`${world.renderResolution} の風景を保存しました。`);
  } catch { toast('風景を保存できませんでした。ブラウザのダウンロード設定をご確認ください。'); }
});

const discovered = new Set(settings.plainsDiscovered);
const mini = $('#minimap'), miniContext = mini.getContext('2d');
const mapBackground = document.createElement('canvas'); mapBackground.width = mapBackground.height = 360;
const mapContext = mapBackground.getContext('2d');
const mapPoint = (x, z) => [12 + (x - plainsBounds.minX) / 696 * 336, 12 + (z - plainsBounds.minZ) / 696 * 336];
mapContext.fillStyle = '#344c39'; mapContext.fillRect(0, 0, 360, 360);
mapContext.fillStyle = '#789352'; mapContext.fillRect(12, 12, 336, 336);
for (const f of plainsFields) {
  const [x, y] = mapPoint(f.x1, f.z1);
  mapContext.fillStyle = { wheat: '#d0bc6d', green: '#53844b', soil: '#a08565', water: '#7aa4ac', flowers: '#d8c151' }[f.kind];
  mapContext.fillRect(x, y, 58 / 696 * 336, 52 / 696 * 336);
}
mapContext.strokeStyle = '#e3d9b37f'; mapContext.lineWidth = 1;
for (let col = 0; col <= 10; col++) {
  const [x, y] = mapPoint(-330 + col * 66, -320), [, end] = mapPoint(0, 220);
  mapContext.beginPath(); mapContext.moveTo(x, y); mapContext.lineTo(x, end); mapContext.stroke();
}
for (let row = 0; row <= 9; row++) {
  const [x, y] = mapPoint(-330, -320 + row * 60), [end] = mapPoint(330, 0);
  mapContext.beginPath(); mapContext.moveTo(x, y); mapContext.lineTo(end, y); mapContext.stroke();
}
for (const [x, z] of [[-225,-178],[-190,-177],[169,8],[214,6],[39,-285]]) {
  const [px, py] = mapPoint(x, z); mapContext.fillStyle = '#f5ece0'; mapContext.fillRect(px - 3, py - 2, 6, 4);
}
mapContext.fillStyle = '#f4efda'; mapContext.font = '16px sans-serif'; mapContext.fillText('N', 331, 28);
for (const [index, spot] of plainsSpots.entries()) {
  const button = document.createElement('button'); button.textContent = index + 1; button.title = spot.name;
  button.setAttribute('aria-label', `${index + 1}. ${spot.name}へ移動`); button.dataset.spot = index;
  button.addEventListener('click', () => { if (!world) return; world.goTo(index, true); world.renderer.domElement.focus({ preventScroll: true }); });
  $('#map-spots').append(button);
}
function updateJourney() {
  if (!isPlains || !world) return;
  const pos = world.camera.position;
  let nearest = 0, distance = Infinity;
  plainsSpots.forEach((spot, i) => {
    const d = Math.hypot(pos.x - spot.position[0], pos.z - spot.position[2]);
    if (d < distance) { nearest = i; distance = d; }
    if (d < 22 && !world.transition && !discovered.has(i)) {
      discovered.add(i); settings.plainsDiscovered = [...discovered]; persist();
      if (i !== 0) toast(`散策スポットを発見：${spot.name}`);
    }
  });
  $('#nearby-spot').textContent = `${plainsSpots[nearest].name} · ${Math.round(distance)} m`;
  $('#discovery-count').textContent = `${discovered.size} / 6`;
  $('#map-spots').querySelectorAll('button').forEach((button, i) => {
    button.classList.toggle('discovered', discovered.has(i));
    if (i === nearest) button.setAttribute('aria-current', 'location'); else button.removeAttribute('aria-current');
  });
  if ($('#minimap-content').hidden) return;
  miniContext.drawImage(mapBackground, 0, 0);
  plainsSpots.forEach((spot, i) => {
    const [x, y] = mapPoint(spot.position[0], spot.position[2]);
    miniContext.fillStyle = discovered.has(i) ? '#f0dc99' : '#f1f0d9';
    miniContext.beginPath(); miniContext.arc(x, y, 8, 0, Math.PI * 2); miniContext.fill();
    miniContext.fillStyle = '#304a3a'; miniContext.font = 'bold 11px sans-serif'; miniContext.textAlign = 'center'; miniContext.fillText(i + 1, x, y + 4);
  });
  const [x, y] = mapPoint(pos.x, pos.z); miniContext.save(); miniContext.translate(x, y); miniContext.rotate(-world.yaw);
  miniContext.shadowColor = '#172c20'; miniContext.shadowBlur = 4; miniContext.fillStyle = '#ffffff'; miniContext.strokeStyle = '#274b36'; miniContext.lineWidth = 2;
  miniContext.beginPath(); miniContext.moveTo(0, -11); miniContext.lineTo(7, 8); miniContext.lineTo(0, 4); miniContext.lineTo(-7, 8); miniContext.closePath(); miniContext.fill(); miniContext.stroke(); miniContext.restore();
}
function toggleMinimap(open) {
  $('#minimap-content').hidden = !open; $('#minimap-toggle').setAttribute('aria-expanded', String(open)); updateJourney();
}
$('#minimap-toggle').addEventListener('click', () => toggleMinimap($('#minimap-content').hidden));
toggleMinimap(!matchMedia('(max-width: 760px), (max-height: 550px)').matches);

requestAnimationFrame(() => setTimeout(() => {
  try {
    world = new Countryside($('#world'), {
      onReady: () => { document.body.classList.add('ready'); $('#world').dataset.ready = 'true'; },
      onError: message => toast(message),
      onSpot: index => { $('#viewpoint').value = String(index); toast(activeSpots[index].subtitle); },
      onPosition: () => {
        if (!world) return;
        const yaw = ((world.yaw * 180 / Math.PI) % 360 + 360) % 360;
        const directions = ['N', 'NW', 'W', 'SW', 'S', 'SE', 'E', 'NE'];
        const heading = Math.round(yaw / 45) % 8;
        const labels = $('.compass').querySelectorAll('span');
        labels[0].textContent = directions[(heading + 2) % 8];
        labels[2].textContent = directions[heading];
        labels[4].textContent = directions[(heading + 6) % 8];
        updateJourney();
      },
    }, mapId);
    world.walking = true; world.sensitivity = settings.sensitivity; world.travelMode = settings.travelMode;
    world.paused = !$('#settings').hidden;
    if (world.timeOfDay !== $('#time-of-day').value) world.setTime($('#time-of-day').value);
    const actual=world.setQuality(settings.quality);
    settings.quality=actual;
    $('#quality').value=settings.quality;
    updateResolution(); updateJourney(); persist();
    if (import.meta.env.DEV) window.__satoyama = world;
  } catch (error) {
    console.error('Countryside initialization failed:', error);
    $('#loading').innerHTML = '<span>3Dの風景を表示できませんでした。</span><span style="font-size:11px;max-width:280px;text-align:center;line-height:2">WebGL 2 対応の最新版 Chrome / Safari でお試しください。</span><button id="retry">もう一度読み込む</button>';
    $('#retry').addEventListener('click', () => location.reload());
  }
}, 80));
