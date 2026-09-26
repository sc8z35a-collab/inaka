import './style.css';
import { createIcons, VolumeX, Volume2, SlidersHorizontal, Maximize, Minimize, Sun, Sunrise, Sunset, Sprout, MoveUp, X, MapPin, Scan } from 'lucide';
import { Countryside } from './scene.js';

const $ = selector => document.querySelector(selector);
const icons = () => createIcons({ icons: { VolumeX, Volume2, SlidersHorizontal, Maximize, Minimize, Sun, Sunrise, Sunset, Sprout, MoveUp, X, MapPin, Scan } });
icons();
let world, toastTimer;
let saved = {};
try { saved = JSON.parse(localStorage.getItem('satoyama-immersive') || '{}'); } catch { /* Storage is optional. */ }
const settings = {
  quality: saved.lightingVersion === 1 && ['hdr','high','low','balanced'].includes(saved.quality) ? saved.quality : 'hdr',
  lightingVersion: 1,
  sensitivity: Math.max(.3, Math.min(1.6, Number(saved.sensitivity) || .8)),
  volume: Number.isFinite(saved.volume) ? Math.max(0, Math.min(1, saved.volume)) : .5,
  time: ['morning', 'day', 'evening'].includes(saved.time) ? saved.time : 'day',
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
    this.enabled = !this.enabled;
    clearTimeout(this.suspendTimer);
    if (this.enabled) {
      try { await this.ctx.resume(); } catch (error) { this.enabled = false; throw error; }
    }
    this.master.gain.setTargetAtTime(this.enabled ? settings.volume : 0, this.ctx.currentTime, .4);
    if (this.enabled) this.scheduleBird();
    else {
      clearTimeout(this.timer);
      // Muted noise sources kept burning CPU/battery; suspend after the fade-out.
      this.suspendTimer = setTimeout(() => { if (!this.enabled) this.ctx.suspend().catch(() => {}); }, 2000);
    }
    $('#sound').innerHTML = `<i data-lucide="${this.enabled ? 'volume-2' : 'volume-x'}"></i>`;
    $('#sound').setAttribute('aria-pressed', String(this.enabled));
    $('#sound').setAttribute('aria-label', `環境音を${this.enabled ? 'オフ' : 'オン'}にする`);
    icons(); toast(this.enabled ? '鳥の声と、風の音。' : '環境音をオフにしました');
  }
  scheduleBird() {
    clearTimeout(this.timer);
    if (!this.enabled) return;
    // Hidden tabs: skip this chirp (the context is suspended) but keep the schedule alive.
    if (document.hidden || this.ctx.state !== 'running') { this.timer = setTimeout(() => this.scheduleBird(), 4000); return; }
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
  resetJoystick();
  if (audio.ctx) { if (document.hidden) audio.ctx.suspend().catch(() => {}); else if (audio.enabled) audio.ctx.resume().catch(() => {}); }
});

function setPanel(open, returnFocus = false) {
  const wasOpen = !$('#settings').hidden;
  $('#settings').hidden = !open;
  $('#settings-button').setAttribute('aria-expanded', String(open));
  if (world) { world.paused = open; world.resetInput(); }
  resetJoystick();
  // Keyboard users closing the dialog return to the button that opened it (WAI-ARIA);
  // setZen() etc. no longer steal focus when the panel was not even open.
  if (open) $('#close-settings').focus();
  else if (wasOpen) (returnFocus ? $('#settings-button') : world?.renderer.domElement)?.focus({ preventScroll: true });
}
$('#settings-button').addEventListener('click', () => setPanel($('#settings').hidden));
$('#close-settings').addEventListener('click', () => setPanel(false, true));
$('#world').addEventListener('pointerdown', () => { if (!$('#settings').hidden) setPanel(false); });
$('#quality').value = settings.quality;
$('#sensitivity').value = settings.sensitivity;
$('#volume').value = settings.volume;
$('#quality').addEventListener('change', e => { settings.quality = e.target.value; const actual=world?.setQuality(settings.quality); if(actual) settings.quality=actual; $('#quality').value=settings.quality; persist(); });
$('#sensitivity').addEventListener('input', e => { settings.sensitivity = Number(e.target.value); if (world) world.sensitivity = settings.sensitivity; persist(); });
$('#volume').addEventListener('input', e => { settings.volume = Number(e.target.value); audio.volume(settings.volume); persist(); });
function applyTime(value) {
  world?.setTime(value);
  $('#time-label').textContent = { morning: '07:00', day: '14:32', evening: '17:30' }[value];
  // The HUD always showed a midday sun, even at dawn or dusk.
  const icon = document.querySelector('.sun-icon');
  icon.outerHTML = `<i data-lucide="${{ morning: 'sunrise', day: 'sun', evening: 'sunset' }[value]}" class="sun-icon"></i>`;
  icons();
}
$('#time-of-day').addEventListener('change', e => { applyTime(e.target.value); settings.time = e.target.value; persist(); });
$('#viewpoint').addEventListener('change',e=>{
  world?.goTo(Number(e.target.value),true);setPanel(false);
  toast(`${e.target.selectedOptions[0].textContent}へ。`);
});
$('#reset-position').addEventListener('click', () => { setPanel(false); world?.goTo(0, true); $('#viewpoint').value = '0'; toast('いつものあぜ道へ。'); });
$('.brand').addEventListener('click', e => { e.preventDefault(); world?.renderer.domElement.focus({ preventScroll: true }); });
// Safari/iPadOS only expose the prefixed API; previously the button did nothing there.
const fullscreenElement = () => document.fullscreenElement || document.webkitFullscreenElement;
$('#fullscreen').addEventListener('click', async () => {
  const root = document.documentElement;
  try {
    if (fullscreenElement()) await (document.exitFullscreen || document.webkitExitFullscreen).call(document);
    else if (root.requestFullscreen) await root.requestFullscreen();
    else if (root.webkitRequestFullscreen) root.webkitRequestFullscreen();
    else toast('スマホを横向きにすると、より広い景色を楽しめます。');
  } catch { toast('別のタブで開くと、全画面を利用できます。'); }
});
const onFullscreenChange = () => {
  const enabled = !!fullscreenElement();
  $('#fullscreen').innerHTML = `<i data-lucide="${enabled ? 'minimize' : 'maximize'}"></i>`;
  $('#fullscreen').setAttribute('aria-label', enabled ? '全画面を終了' : '全画面表示');
  $('#fullscreen').title = enabled ? '全画面を終了' : '全画面表示'; icons();
};
document.addEventListener('fullscreenchange', onFullscreenChange);
document.addEventListener('webkitfullscreenchange', onFullscreenChange);
function setZen(value) {
  setPanel(false); document.body.classList.toggle('zen', value); $('#show-ui').hidden = !value;
  $('.hud').inert = value; $('.bottom-hud').inert = value;
  if (value) $('#show-ui').focus();
}
$('#hide-ui').addEventListener('click', () => setZen(true));
$('#show-ui').addEventListener('click', () => setZen(false));
window.addEventListener('keydown', e => {
  if (e.key === 'Escape') { if (!$('#settings').hidden) setPanel(false, true); if (document.body.classList.contains('zen')) setZen(false); }
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
joystick.addEventListener('pointerdown', e => { if (joyPointer !== null) return; e.preventDefault(); joyPointer = e.pointerId; joystick.setPointerCapture(e.pointerId); updateJoystick(e); });
joystick.addEventListener('pointermove', e => { if (e.pointerId === joyPointer) updateJoystick(e); });
function resetJoystick() { joyPointer = null; thumb.style.transform = ''; if (world) world.joy.x = world.joy.y = 0; }
// A second finger lifting from the joystick must not reset the finger still steering.
for (const event of ['pointerup', 'pointercancel', 'lostpointercapture']) joystick.addEventListener(event, e => { if (e.pointerId === joyPointer) resetJoystick(); });
window.addEventListener('blur', resetJoystick);
const look = $('#look-pad'); let lookPointer = null;
look.addEventListener('pointerdown', e => { if (lookPointer) return; e.preventDefault(); lookPointer = { id: e.pointerId, x: e.clientX, y: e.clientY }; look.setPointerCapture(e.pointerId); });
look.addEventListener('pointermove', e => {
  if (!lookPointer || e.pointerId !== lookPointer.id || !world || world.paused) return;
  world.releaseView(); world.yaw -= (e.clientX - lookPointer.x) * .003 * settings.sensitivity;
  world.pitch = Math.max(-1.18, Math.min(1.1, world.pitch - (e.clientY - lookPointer.y) * .0024 * settings.sensitivity));
  lookPointer.x = e.clientX; lookPointer.y = e.clientY;
});
for (const event of ['pointerup', 'pointercancel', 'lostpointercapture']) look.addEventListener(event, e => { if (lookPointer?.id === e.pointerId) lookPointer = null; });

requestAnimationFrame(() => setTimeout(() => {
  try {
    world = new Countryside($('#world'), {
      onReady: () => { document.body.classList.add('ready'); $('#world').dataset.ready = 'true'; },
      onError: message => toast(message),
      onContextRestored: quality => { settings.quality = quality; $('#quality').value = quality; persist(); },
      onPosition: () => {
        if (!world) return;
        const yaw = ((world.yaw * 180 / Math.PI) % 360 + 360) % 360;
        const names = ['N', 'NW', 'W', 'SW', 'S', 'SE', 'E', 'NE'], index = Math.round(yaw / 45) % 8;
        const [left, center, right] = document.querySelectorAll('.compass > span:not(.compass-tick)');
        // Side labels previously stayed "W"/"E" even when facing south.
        center.textContent = names[index]; left.textContent = names[(index + 2) % 8]; right.textContent = names[(index + 6) % 8];
      },
    });
    world.walking = true; world.sensitivity = settings.sensitivity;
    $('#time-of-day').value = settings.time;
    if (settings.time !== 'day') applyTime(settings.time);
    const actual=world.setQuality(settings.quality);
    settings.quality=actual;
    $('#quality').value=settings.quality;
    persist();
    if (import.meta.env.DEV) window.__satoyama = world;
  } catch (error) {
    console.error('Countryside initialization failed:', error);
    $('#loading').innerHTML = '<span>3Dの風景を表示できませんでした。</span><span style="font-size:11px;max-width:280px;text-align:center;line-height:2">WebGL 2 対応の最新版 Chrome / Safari でお試しください。</span><button id="retry">もう一度読み込む</button>';
    $('#retry').addEventListener('click', () => location.reload());
  }
}, 80));
