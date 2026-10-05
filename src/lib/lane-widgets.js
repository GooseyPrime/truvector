// Three interactive panels for the home page: a copy detector, a direction
// dial and an acceleration chart. Layout follows one pattern throughout:
// title and reset, a large picture, two headline numbers, then the controls.
// All arithmetic comes from lane-math and is tested against the working papers.
import {
  effectiveSources,
  projectedContribution,
  accelerationNoise,
  accelerationSnr,
} from './lane-math.js';

const NS = 'http://www.w3.org/2000/svg';
const STYLE_ID = 'lw-style';
const BLUE = '#8ab4f8';
const GREEN = '#81c995';
const PINK = '#f2a6a0';
const AMBER = '#fbbc04';

const CSS = `
.lw{background:#0e0e0e;color:#e8eaed;border:1px solid #2a2b2e;border-radius:20px;padding:28px 28px 24px;font-family:"Google Sans",Inter,system-ui,sans-serif;min-width:0}
.lw *{box-sizing:border-box}
.lw-head{display:flex;justify-content:space-between;align-items:center;gap:16px}
.lw-title{font-size:clamp(1.35rem,3.2vw,1.75rem);font-weight:400;line-height:1.2;margin:0;color:#e8eaed;font-family:inherit}
.lw-reset{width:52px;height:38px;border-radius:19px;border:0;background:#2a2b2e;color:#e8eaed;font-size:18px;cursor:pointer;flex:none}
.lw-reset:hover{background:#3a3b3f}
.lw-lede{color:#bdc1c6;font-size:15px;line-height:1.55;margin:10px 0 0;max-width:62ch}
.lw-stage{margin:18px 0 6px}
.lw-stage svg{display:block;width:100%;height:auto;overflow:hidden}
.lw-dot{transition:transform .8s cubic-bezier(.2,.7,.2,1),opacity .4s}
.lw-link{transition:opacity .6s}
.lw-legend{display:inline-flex;flex-wrap:wrap;gap:14px;background:#1b1c1e;border-radius:14px;padding:6px 12px;font-size:12px;color:#bdc1c6}
.lw-legend i{display:inline-block;width:8px;height:8px;border-radius:50%;margin-right:6px}
.lw-stats{display:grid;grid-template-columns:1fr 1px 1fr;align-items:center;margin:22px 0 26px;text-align:center}
.lw-stats>i{height:20px;background:#5f6368}
.lw-stats span{display:block;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#bdc1c6}
.lw-stats b{display:block;font-size:17px;font-weight:600;margin-top:4px;font-variant-numeric:tabular-nums}
.lw-row{display:grid;grid-template-columns:minmax(120px,170px) 1fr 76px;gap:16px;align-items:center;margin-top:12px}
.lw-row label{font-size:15px;color:#e8eaed}
.lw-pill{background:#1b1c1e;border-radius:12px;padding:11px 0;text-align:center;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:14px;font-variant-numeric:tabular-nums}
.lw input[type=range]{-webkit-appearance:none;appearance:none;width:100%;height:4px;border-radius:2px;background:linear-gradient(to right,#fff var(--p,50%),#3c4043 var(--p,50%));outline-offset:8px;margin:0}
.lw input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:10px;height:22px;border-radius:5px;background:#fff;border:0;cursor:pointer}
.lw input[type=range]::-moz-range-thumb{width:10px;height:22px;border-radius:5px;background:#fff;border:0;cursor:pointer}
.lw-switch{width:42px;height:24px;border-radius:12px;border:2px solid #9aa0a6;background:transparent;position:relative;cursor:pointer;padding:0}
.lw-switch::after{content:"";position:absolute;top:2px;left:2px;width:16px;height:16px;border-radius:50%;background:#bdc1c6;transition:transform .2s}
.lw-switch[aria-checked=true]{background:#e8eaed;border-color:#e8eaed}
.lw-switch[aria-checked=true]::after{transform:translateX(18px);background:#0e0e0e}
.lw-note{margin:22px 0 0;font-size:15px;line-height:1.5;color:#e8eaed;min-height:3em}
.lw-formula{margin:10px 0 0;font-size:13px;line-height:1.55;color:#9aa0a6}
.lw-formula code{font-family:ui-monospace,Menlo,Consolas,monospace;color:#bdc1c6}
.lw button:focus-visible,.lw input:focus-visible{outline:2px solid ${BLUE}}
@media (max-width:560px){.lw{padding:20px 16px;border-radius:16px}.lw-row{grid-template-columns:1fr 64px}.lw-row label{grid-column:1/-1}}
@media (prefers-reduced-motion:reduce){.lw-dot,.lw-link{transition:none}}
`;

function ensureStyle() {
  if (document.getElementById(STYLE_ID)) return;
  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = CSS;
  document.head.appendChild(style);
}

function h(tag, attrs = {}, text) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
  if (text !== undefined) el.textContent = text;
  return el;
}

function s(tag, attrs = {}, text) {
  const el = document.createElementNS(NS, tag);
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, String(v));
  if (text !== undefined) el.textContent = text;
  return el;
}

// Small repeatable random source so the picture is the same on every visit.
function seeded(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function gaussian(rand) {
  const u = Math.max(rand(), 1e-9);
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * rand());
}

let uid = 0;

/** Shared frame: title, reset, picture, two numbers, controls, note, formula. */
function frame(root, text) {
  ensureStyle();
  root.textContent = '';
  root.classList.add('lw');
  const head = h('div', { class: 'lw-head' });
  head.append(h('h3', { class: 'lw-title' }, text.title));
  const reset = h('button', { class: 'lw-reset', type: 'button', 'aria-label': 'Reset' }, '↺');
  head.append(reset);
  const lede = h('p', { class: 'lw-lede' }, text.lede);
  const stage = h('div', { class: 'lw-stage' });
  const stats = h('div', { class: 'lw-stats' });
  const statEls = text.stats.map((label) => {
    const box = h('div');
    box.append(h('span', {}, label));
    const value = h('b', { 'aria-live': 'polite' });
    box.append(value);
    return { box, value };
  });
  stats.append(statEls[0].box, h('i'), statEls[1].box);
  const rows = h('div', { class: 'lw-rows' });
  const note = h('p', { class: 'lw-note', 'aria-live': 'polite' });
  const formula = h('p', { class: 'lw-formula' });
  formula.append(h('code', {}, text.formula), document.createTextNode(` ${text.formulaNote}`));
  root.append(head, lede, stage, stats, rows, note, formula);

  const resets = [];
  let onChange = () => {};
  reset.addEventListener('click', () => {
    resets.forEach((fn) => fn());
    onChange();
  });

  function slider(label, { min, max, step, value, format }) {
    const id = `lw-${++uid}`;
    const row = h('div', { class: 'lw-row' });
    const input = h('input', { id, type: 'range', min, max, step, value });
    const pill = h('div', { class: 'lw-pill' });
    const paint = () => {
      input.style.setProperty('--p', `${((Number(input.value) - min) / (max - min)) * 100}%`);
      pill.textContent = format(Number(input.value));
    };
    input.addEventListener('input', () => {
      paint();
      onChange();
    });
    resets.push(() => {
      input.value = String(value);
      paint();
    });
    paint();
    row.append(h('label', { for: id }, label), input, pill);
    rows.append(row);
    return { get: () => Number(input.value), paint };
  }

  function toggle(label, initial) {
    const row = h('div', { class: 'lw-row' });
    const id = `lw-${++uid}`;
    const button = h('button', { id, class: 'lw-switch', type: 'button', role: 'switch', 'aria-checked': String(initial), 'aria-label': label });
    button.addEventListener('click', () => {
      button.setAttribute('aria-checked', String(button.getAttribute('aria-checked') !== 'true'));
      onChange();
    });
    resets.push(() => button.setAttribute('aria-checked', String(initial)));
    const holder = h('div');
    holder.append(button);
    row.append(h('label', { for: id }, label), holder, h('span'));
    rows.append(row);
    return { get: () => button.getAttribute('aria-checked') === 'true' };
  }

  return {
    stage,
    note,
    setStats: (a, b) => {
      statEls[0].value.textContent = a;
      statEls[1].value.textContent = b;
    },
    slider,
    toggle,
    start: (fn) => {
      onChange = fn;
      fn();
    },
  };
}

const whole = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 });

/**
 * Astroturf detector. 500 accounts shown as dots. The crowd looks the same in
 * both modes, which is the point: a manufactured crowd is built to pass for a
 * real one. In organic mode each account speaks for itself. In astroturf mode
 * the same 500 are run by 5 hidden operators, and the strings are drawn in.
 */
export function mountDetector(root, text) {
  const f = frame(root, text);
  const W = 640;
  const H = 320;
  const TOTAL = 500;
  const OPERATORS = 5;
  const svg = s('svg', { viewBox: `0 0 ${W} ${H}`, role: 'img', 'aria-label': text.aria });
  const linkLayer = s('g');
  const dotLayer = s('g');
  const hubLayer = s('g');
  svg.append(linkLayer, dotLayer, hubLayer);
  f.stage.append(svg);

  const rand = seeded(7);
  const hubs = [[110, 95], [320, 60], [530, 100], [210, 250], [440, 255]];
  const hubEls = hubs.map(([x, y]) => {
    const g = s('g', { class: 'lw-link', opacity: 0 });
    g.append(s('circle', { cx: x, cy: y, r: 11, fill: '#0e0e0e', stroke: PINK, 'stroke-width': 2 }));
    g.append(s('circle', { cx: x, cy: y, r: 4, fill: PINK }));
    hubLayer.append(g);
    return g;
  });
  const dots = [];
  for (let i = 0; i < TOTAL; i++) {
    const x = 16 + rand() * (W - 32);
    const y = 14 + rand() * (H - 28);
    const hub = hubs[i % OPERATORS];
    const link = s('line', { x1: hub[0], y1: hub[1], x2: x, y2: y, stroke: PINK, 'stroke-width': 0.35, class: 'lw-link', opacity: 0 });
    linkLayer.append(link);
    const dot = s('circle', { r: 3.2, cx: x, cy: y, fill: GREEN, class: 'lw-dot' });
    dotLayer.append(dot);
    dots.push({ dot, link });
  }

  const mode = f.toggle(text.toggle, false);
  const lambda = f.slider(text.slider, { min: 0, max: 1, step: 0.01, value: 0.5, format: (v) => v.toFixed(2) });

  f.start(() => {
    const on = mode.get();
    const l = lambda.get();
    // Organic: every account is its own origin. Astroturf: 100 accounts per operator.
    const m = on ? TOTAL / OPERATORS : 1;
    const origins = TOTAL / m;
    const perOrigin = effectiveSources(m, l);
    const eff = origins * perOrigin;
    // Each account's share of its origin's effective count.
    const weight = perOrigin / m;
    for (const d of dots) {
      d.dot.setAttribute('fill', on ? PINK : GREEN);
      d.dot.style.opacity = String(0.14 + 0.86 * weight);
      d.link.setAttribute('opacity', on ? 0.3 : 0);
    }
    for (const g of hubEls) g.setAttribute('opacity', on ? 1 : 0);
    f.setStats(whole.format(TOTAL), eff >= 100 ? whole.format(eff) : eff.toFixed(1));
    f.note.textContent = text.verdict({ on, lambda: l, eff, origins, total: TOTAL });
  });
}

/** Direction dial: a fixed arrow, a moving arrow, and the angle between them. */
export function mountDial(root, text) {
  const f = frame(root, text);
  const W = 640;
  const H = 320;
  const cx = 320;
  const cy = 230;
  const R = 170;
  const svg = s('svg', { viewBox: `0 0 ${W} ${H}`, role: 'img', 'aria-label': text.aria });
  f.stage.append(svg);

  const theta = f.slider(text.angleLabel, { min: 0, max: 180, step: 1, value: 60, format: (v) => String(v) });
  const volume = f.slider(text.volumeLabel, { min: 1000, max: 20000, step: 500, value: 10000, format: (v) => whole.format(v) });

  const tag = (x, y, label, anchor = 'middle') => {
    const g = s('g');
    const w = label.length * 7.2 + 22;
    const left = anchor === 'middle' ? x - w / 2 : x;
    const clamped = Math.max(4, Math.min(W - w - 4, left));
    g.append(s('rect', { x: clamped, y: y - 15, width: w, height: 28, rx: 8, fill: '#202124', stroke: '#3c4043' }));
    g.append(s('text', { x: clamped + w / 2, y: y + 4, 'text-anchor': 'middle', fill: '#e8eaed', 'font-size': 13, 'font-weight': 600 }, label));
    return g;
  };

  f.start(() => {
    const deg = theta.get();
    const vol = volume.get();
    const rad = (deg * Math.PI) / 180;
    const cos = Math.cos(rad);
    const contribution = projectedContribution(vol, deg);
    const len = R * (0.45 + 0.55 * (vol / 20000));
    const bx = cx + len * Math.cos(rad);
    const by = cy - len * Math.sin(rad);

    svg.textContent = '';
    svg.append(s('path', { d: `M ${cx - R} ${cy} A ${R} ${R} 0 0 1 ${cx + R} ${cy}`, fill: 'none', stroke: '#3c4043', 'stroke-width': 1.5 }));
    svg.append(s('line', { x1: cx - R - 30, y1: cy, x2: cx + R + 30, y2: cy, stroke: '#5f6368', 'stroke-dasharray': '4 4' }));
    svg.append(s('line', { x1: cx, y1: cy + 30, x2: cx, y2: cy - R - 22, stroke: '#5f6368', 'stroke-dasharray': '4 4' }));
    // The part of the moving arrow that lies along the fixed one.
    svg.append(s('line', { x1: bx, y1: by, x2: bx, y2: cy, stroke: '#9aa0a6', 'stroke-dasharray': '2 4' }));
    svg.append(s('line', { x1: cx, y1: cy, x2: bx, y2: cy, stroke: AMBER, 'stroke-width': 6, 'stroke-linecap': 'round', opacity: 0.9 }));
    svg.append(s('line', { x1: cx, y1: cy, x2: cx + R, y2: cy, stroke: BLUE, 'stroke-width': 2.5, 'stroke-linecap': 'round' }));
    svg.append(s('line', { x1: cx, y1: cy, x2: bx, y2: by, stroke: GREEN, 'stroke-width': 3, 'stroke-linecap': 'round' }));
    svg.append(s('circle', { cx: bx, cy: by, r: 5, fill: GREEN }));
    svg.append(s('circle', { cx: cx + R, cy, r: 4, fill: BLUE }));
    if (deg > 0) {
      const a = 34;
      svg.append(s('path', { d: `M ${cx + a} ${cy} A ${a} ${a} 0 0 0 ${cx + a * Math.cos(rad)} ${cy - a * Math.sin(rad)}`, fill: 'none', stroke: AMBER, 'stroke-width': 2 }));
      const mid = rad / 2;
      svg.append(s('text', { x: cx + 54 * Math.cos(mid), y: cy - 54 * Math.sin(mid) + 4, 'text-anchor': 'middle', fill: '#e8eaed', 'font-size': 13 }, `${deg}°`));
    }
    svg.append(s('text', { x: cx, y: cy + 52, 'text-anchor': 'middle', fill: AMBER, 'font-size': 14, 'font-weight': 700 }, `cos(θ) = ${cos.toFixed(2)}`));
    svg.append(tag(cx + R - 20, cy + 26, text.fixedLabel));
    svg.append(tag(bx, by - 26, text.movingLabel));

    f.setStats(cos.toFixed(2), whole.format(Math.round(contribution)));
    f.note.textContent = text.verdict({ deg, cos, vol, contribution });
  });
}

/** Acceleration chart: the true value as a flat line, the estimate as a jagged one. */
export function mountChart(root, text) {
  const f = frame(root, text);
  const W = 640;
  const H = 320;
  const pad = { l: 44, r: 16, t: 16, b: 34 };
  const T = 240;
  const yMin = -10;
  const yMax = 14;
  const clipId = `lw-clip-${++uid}`;
  const svg = s('svg', { viewBox: `0 0 ${W} ${H}`, role: 'img', 'aria-label': text.aria });
  f.stage.append(svg);
  const legend = h('div', { class: 'lw-legend' });
  for (const [color, label] of [[BLUE, text.trueLabel], [PINK, text.estimateLabel], [GREEN, text.bandLabel]]) {
    const item = h('span');
    const mark = h('i');
    mark.style.background = color;
    item.append(mark, document.createTextNode(label));
    legend.append(item);
  }
  f.stage.append(legend);

  // One fixed noise draw per time step, scaled by the noise slider.
  const rand = seeded(42);
  const draws = Array.from({ length: T + 1 }, () => gaussian(rand));

  const interval = f.slider(text.intervalLabel, { min: 1, max: 24, step: 1, value: 2, format: (v) => String(v) });
  const sigma = f.slider(text.noiseLabel, { min: 5, max: 40, step: 1, value: 20, format: (v) => String(v) });
  const accel = f.slider(text.accelLabel, { min: 0.5, max: 5, step: 0.5, value: 2, format: (v) => v.toFixed(1) });

  const x = (t) => pad.l + (t / T) * (W - pad.l - pad.r);
  const y = (v) => pad.t + ((yMax - v) / (yMax - yMin)) * (H - pad.t - pad.b);

  f.start(() => {
    const step = interval.get();
    const sd = sigma.get();
    const a = accel.get();
    const noise = accelerationNoise(sd, step);
    const snr = accelerationSnr(a, sd, step);

    svg.textContent = '';
    const defs = s('defs');
    const clip = s('clipPath', { id: clipId });
    clip.append(s('rect', { x: pad.l, y: pad.t, width: W - pad.l - pad.r, height: H - pad.t - pad.b }));
    defs.append(clip);
    svg.append(defs);
    for (let v = -8; v <= 12; v += 4) {
      svg.append(s('line', { x1: pad.l, y1: y(v), x2: W - pad.r, y2: y(v), stroke: '#2a2b2e' }));
      svg.append(s('text', { x: pad.l - 8, y: y(v) + 4, 'text-anchor': 'end', fill: '#9aa0a6', 'font-size': 11 }, String(v)));
    }
    for (let t = 0; t <= T; t += 40) {
      svg.append(s('text', { x: x(t), y: H - 12, 'text-anchor': 'middle', fill: '#9aa0a6', 'font-size': 11 }, String(t)));
    }
    const plot = s('g', { 'clip-path': `url(#${clipId})` });
    plot.append(s('rect', { x: pad.l, y: y(a + noise), width: W - pad.l - pad.r, height: Math.max(1, y(a - noise) - y(a + noise)), fill: GREEN, opacity: 0.13 }));
    // Second difference of (true curve + noise) at spacing `step`. The true
    // part gives exactly `a`; the noise part is what the formula describes.
    let d = '';
    for (let t = step; t + step <= T; t += step) {
      const est = a + ((draws[t + step] - 2 * draws[t] + draws[t - step]) * sd) / (step * step);
      d += `${d ? 'L' : 'M'}${x(t).toFixed(1)} ${y(est).toFixed(1)} `;
    }
    plot.append(s('path', { d, fill: 'none', stroke: PINK, 'stroke-width': 1.8, 'stroke-linejoin': 'round' }));
    plot.append(s('line', { x1: pad.l, y1: y(a), x2: W - pad.r, y2: y(a), stroke: BLUE, 'stroke-width': 2.5 }));
    svg.append(plot);

    f.setStats(noise >= 10 ? noise.toFixed(1) : noise.toFixed(2), snr >= 10 ? snr.toFixed(1) : snr.toFixed(2));
    f.note.textContent = text.verdict({ snr, noise, step });
  });
}
