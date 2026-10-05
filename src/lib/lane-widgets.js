// Interactive panels for the home page. Every panel follows one layout:
// a step label, a title with a reset button, a short lede, a large picture,
// two headline numbers, the controls, a plain-words reading of the result,
// and the formula it evaluates. All arithmetic comes from lane-math and is
// tested against the working papers. The drawing never invents a number.
import { effectiveSources, projectedContribution, accelerationNoise, accelerationSnr, wordCountDecision, meaningDecision } from './lane-math.js';

const NS = 'http://www.w3.org/2000/svg';
const STYLE_ID = 'lw-style';
const BLUE = '#8ab4f8';
const GREEN = '#81c995';
const PINK = '#f28b82';
const AMBER = '#fdd663';
const GREY = '#9aa0a6';
const INK = '#e8eaed';
const MUTED = '#bdc1c6';
const LINE = '#3c4043';

const CSS = `
.lw{background:#0e0e0e;color:${INK};border:1px solid #2a2b2e;border-radius:20px;padding:28px 28px 24px;font-family:"Google Sans",Inter,system-ui,sans-serif;min-width:0;container-type:inline-size}
.lw *{box-sizing:border-box}
.lw-step{font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:${GREY};margin:0 0 10px}
.lw-step b{color:${AMBER};font-weight:600;margin-right:8px}
.lw-head{display:flex;justify-content:space-between;align-items:center;gap:16px}
.lw-title{font-size:clamp(1.35rem,3.2vw,1.75rem);font-weight:400;line-height:1.2;margin:0;color:${INK};font-family:inherit;letter-spacing:-.01em}
.lw-reset{width:52px;height:38px;border-radius:19px;border:0;background:#2a2b2e;color:${INK};font-size:18px;cursor:pointer;flex:none}
.lw-reset:hover{background:#3a3b3f}
.lw-lede{color:${MUTED};font-size:15px;line-height:1.55;margin:12px 0 0;max-width:64ch}
.lw-stage{margin:20px 0 6px;position:relative}
.lw-stage svg{display:block;width:100%;height:auto;overflow:visible}
.lw-stage text{font-family:inherit}
.lw-halo{paint-order:stroke;stroke:#0e0e0e;stroke-width:4px;stroke-linejoin:round}
.lw-dot,.lw-move{transition:transform .8s cubic-bezier(.2,.7,.2,1),opacity .5s,r .4s}
.lw-fade{transition:opacity .6s,fill .4s,stroke .4s}
.lw-legend{display:inline-flex;flex-wrap:wrap;gap:6px 16px;background:#1b1c1e;border-radius:14px;padding:7px 14px;font-size:12px;color:${MUTED};margin-top:10px}
.lw-legend i{display:inline-block;width:9px;height:9px;border-radius:50%;margin-right:6px;vertical-align:0}
.lw-stats{display:grid;grid-template-columns:1fr 1px 1fr;align-items:center;margin:22px 0 24px;text-align:center}
.lw-stats>i{height:22px;background:#5f6368}
.lw-stats span{display:block;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:${MUTED}}
.lw-stats b{display:block;font-size:18px;font-weight:600;margin-top:5px;font-variant-numeric:tabular-nums}
.lw-row{display:grid;grid-template-columns:minmax(120px,190px) 1fr 84px;gap:16px;align-items:center;margin-top:12px}
.lw-row label{font-size:15px;color:${INK}}
.lw-pill{background:#1b1c1e;border-radius:12px;padding:11px 0;text-align:center;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:14px;font-variant-numeric:tabular-nums}
.lw input[type=range]{-webkit-appearance:none;appearance:none;width:100%;height:4px;border-radius:2px;background:linear-gradient(to right,#fff var(--p,50%),${LINE} var(--p,50%));outline-offset:8px;margin:0;cursor:pointer}
.lw input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:10px;height:22px;border-radius:5px;background:#fff;border:0}
.lw input[type=range]::-moz-range-thumb{width:10px;height:22px;border-radius:5px;background:#fff;border:0}
.lw-switch{width:44px;height:24px;border-radius:12px;border:2px solid ${GREY};background:transparent;position:relative;cursor:pointer;padding:0}
.lw-switch::after{content:"";position:absolute;top:2px;left:2px;width:16px;height:16px;border-radius:50%;background:${MUTED};transition:transform .2s}
.lw-switch[aria-checked=true]{background:${INK};border-color:${INK}}
.lw-switch[aria-checked=true]::after{transform:translateX(20px);background:#0e0e0e}
.lw-seg{display:flex;flex-wrap:wrap;gap:6px;grid-column:2/-1}
.lw-seg button{border:1px solid ${LINE};background:#1b1c1e;color:${MUTED};border-radius:999px;padding:7px 12px;font:inherit;font-size:13px;cursor:pointer;line-height:1.2;text-align:left}
.lw-seg button[aria-pressed=true]{background:${INK};color:#0e0e0e;border-color:${INK}}
.lw-note{margin:22px 0 0;font-size:15px;line-height:1.55;color:${INK};min-height:3.1em}
.lw-formula{margin:12px 0 0;font-size:13px;line-height:1.55;color:${GREY}}
.lw-formula code{font-family:ui-monospace,Menlo,Consolas,monospace;color:${MUTED};background:#1b1c1e;border-radius:6px;padding:2px 7px}
.lw button:focus-visible,.lw input:focus-visible{outline:2px solid ${BLUE}}
.lw-flow{stroke-dasharray:6 14;animation:lw-flow 1.4s linear infinite}
@keyframes lw-flow{to{stroke-dashoffset:-20}}
.lw-cmp{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.lw-card{background:#161719;border:1px solid #2a2b2e;border-radius:16px;padding:14px 14px 12px;min-width:0;display:flex;flex-direction:column;gap:10px}
.lw-card--meaning{border-color:#3a4a62}
.lw-card h4{margin:0;font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:${MUTED};display:flex;justify-content:space-between;align-items:center;gap:8px}
.lw-card h4 em{font-style:normal;font-size:10px;letter-spacing:.12em;padding:3px 7px;border-radius:6px;background:#2a2b2e;color:${GREY}}
.lw-card--meaning h4 em{background:#1e2a3f;color:${BLUE}}
.lw-reply{font-size:12.5px;line-height:1.45;color:${INK};background:#0e0e0e;border:1px solid #2a2b2e;border-radius:10px;padding:8px 10px;display:flex;flex-direction:column;gap:4px}
.lw-reply small{font-size:10.5px;color:${GREY};display:flex;justify-content:space-between;gap:8px}
.lw-reply mark{background:#3a1a18;color:${PINK};border-radius:4px;padding:0 3px}
.lw-reply .lw-stance{font-weight:600;font-size:11.5px}
.lw-card svg{display:block;width:100%;height:auto}
.lw-tiles{display:grid;grid-auto-flow:column;grid-auto-columns:1fr;gap:6px}
.lw-tiles div{background:#0e0e0e;border-radius:10px;padding:8px 6px;text-align:center}
.lw-tiles span{display:block;font-size:10px;letter-spacing:.06em;text-transform:uppercase;color:${GREY}}
.lw-tiles b{display:block;font-size:16px;font-weight:600;margin-top:3px;font-variant-numeric:tabular-nums}
.lw-verdict{display:flex;justify-content:space-between;align-items:center;gap:10px;border-top:1px solid #2a2b2e;padding-top:10px;margin-top:auto}
.lw-verdict p{margin:0;font-size:12px;line-height:1.45;color:${MUTED}}
.lw-badge{flex:none;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:5px 10px;border-radius:999px;border:1px solid}
@container (max-width:560px){.lw-row{grid-template-columns:1fr 72px}.lw-row label{grid-column:1/-1}.lw-seg{grid-column:1/-1}.lw-cmp{grid-template-columns:1fr}}
@media (max-width:560px){.lw{padding:20px 16px;border-radius:16px}}
@media (prefers-reduced-motion:reduce){.lw-dot,.lw-move,.lw-fade{transition:none}.lw-flow{animation:none}}
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

// Small repeatable random source so a picture is the same on every visit.
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

const whole = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 });
const fmt = (n) => (n >= 100 ? whole.format(Math.round(n)) : n >= 10 ? n.toFixed(1) : n.toFixed(2));
let uid = 0;

/** A rounded label box in an SVG. */
function tag(x, y, label, { anchor = 'middle', fill = '#202124', color = INK, W = 640 } = {}) {
  const g = s('g');
  const w = label.length * 7 + 22;
  const left = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  const cx = Math.max(4, Math.min(W - w - 4, left));
  g.append(s('rect', { x: cx, y: y - 14, width: w, height: 27, rx: 8, fill, stroke: LINE }));
  g.append(s('text', { x: cx + w / 2, y: y + 4, 'text-anchor': 'middle', fill: color, 'font-size': 12.5, 'font-weight': 600 }, label));
  return g;
}

function arrowDef(defs, id, color) {
  const m = s('marker', { id, viewBox: '0 0 10 10', refX: 8, refY: 5, markerWidth: 7, markerHeight: 7, orient: 'auto-start-reverse' });
  m.append(s('path', { d: 'M 0 0 L 10 5 L 0 10 z', fill: color }));
  defs.append(m);
}

/** Shared frame. */
function frame(root, text) {
  ensureStyle();
  root.textContent = '';
  root.classList.add('lw');
  if (text.step) {
    const step = h('p', { class: 'lw-step' });
    const [num, ...rest] = text.step.split(' ');
    step.append(h('b', {}, num), document.createTextNode(rest.join(' ')));
    root.append(step);
  }
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
    return { get: () => Number(input.value) };
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

  function choice(label, options, initial) {
    const row = h('div', { class: 'lw-row' });
    const seg = h('div', { class: 'lw-seg', role: 'group', 'aria-label': label });
    let current = initial;
    const buttons = options.map((opt, i) => {
      const b = h('button', { type: 'button', 'aria-pressed': String(i === initial) }, opt);
      b.addEventListener('click', () => {
        current = i;
        buttons.forEach((x, k) => x.setAttribute('aria-pressed', String(k === i)));
        onChange();
      });
      seg.append(b);
      return b;
    });
    resets.push(() => {
      current = initial;
      buttons.forEach((x, k) => x.setAttribute('aria-pressed', String(k === initial)));
    });
    row.append(h('label', {}, label), seg);
    rows.append(row);
    return { get: () => current };
  }

  function legend(items) {
    const box = h('div', { class: 'lw-legend' });
    for (const [color, label] of items) {
      const item = h('span');
      const mark = h('i');
      mark.style.background = color;
      item.append(mark, document.createTextNode(label));
      box.append(item);
    }
    stage.append(box);
  }

  return {
    stage,
    note,
    legend,
    setStats: (a, b) => {
      statEls[0].value.textContent = a;
      statEls[1].value.textContent = b;
    },
    slider,
    toggle,
    choice,
    start: (fn) => {
      onChange = fn;
      fn();
    },
  };
}

/* ------------------------------------------------------------------ */
/* 1. Words to coordinates                                              */
/* ------------------------------------------------------------------ */

const WORDS = [
  ['king', 118, 92, 0], ['queen', 152, 72, 0], ['prince', 100, 128, 0], ['throne', 168, 118, 0], ['palace', 136, 148, 0],
  ['apple', 138, 262, 1], ['banana', 176, 292, 1], ['pear', 108, 298, 1], ['grape', 162, 246, 1], ['orchard', 118, 230, 1],
  ['Apple Inc.', 466, 104, 2], ['Microsoft', 524, 82, 2], ['Google', 498, 152, 2], ['laptop', 448, 176, 2], ['iPhone', 556, 122, 2],
  ['bank', 478, 278, 3], ['loan', 516, 300, 3], ['invoice', 452, 312, 3], ['payment', 500, 252, 3], ['deposit', 540, 268, 3],
];
const WORD_COLORS = [AMBER, GREEN, BLUE, PINK];

/**
 * Words to coordinates. A map of words in two of an embedding's hundreds of
 * dimensions. A sentence becomes one arrow to one point. Nearness is meaning.
 */
export function mountEmbedding(root, text) {
  const f = frame(root, text);
  const W = 640;
  const H = 350;
  const ox = 44;
  const oy = 330;
  const svg = s('svg', { viewBox: `0 0 ${W} ${H}`, role: 'img', 'aria-label': text.aria });
  f.stage.append(svg);
  f.legend([[AMBER, text.groups[0]], [GREEN, text.groups[1]], [BLUE, text.groups[2]], [PINK, text.groups[3]]]);

  const which = f.choice(text.choiceLabel, text.sentences.map((x) => x.text), 0);
  const coords = f.toggle(text.toggle, false);

  const norm = (x, y) => [((x - ox) / (W - 20 - ox)), ((oy - y) / (oy - 20))];

  f.start(() => {
    const sentence = text.sentences[which.get()];
    const showCoords = coords.get();
    const [px, py] = sentence.at;
    svg.textContent = '';
    const defs = s('defs');
    arrowDef(defs, 'lw-emb-arrow', INK);
    svg.append(defs);
    for (let gx = ox; gx <= W - 20; gx += 72) svg.append(s('line', { x1: gx, y1: 20, x2: gx, y2: oy, stroke: '#1f2023' }));
    for (let gy = oy; gy >= 20; gy -= 62) svg.append(s('line', { x1: ox, y1: gy, x2: W - 20, y2: gy, stroke: '#1f2023' }));
    svg.append(s('line', { x1: ox, y1: oy, x2: W - 20, y2: oy, stroke: LINE }));
    svg.append(s('line', { x1: ox, y1: oy, x2: ox, y2: 20, stroke: LINE }));
    svg.append(s('text', { x: W - 20, y: oy + 16, 'text-anchor': 'end', fill: GREY, 'font-size': 11 }, text.axisX));
    svg.append(s('text', { x: ox - 6, y: 16, 'text-anchor': 'start', fill: GREY, 'font-size': 11 }, text.axisY));

    let nearest = null;
    for (const [word, x, y, group] of WORDS) {
      const d = Math.hypot(x - px, y - py);
      if (!nearest || d < nearest.d) nearest = { word, d };
      svg.append(s('circle', { cx: x, cy: y, r: 4.5, fill: WORD_COLORS[group], opacity: 0.95 }));
      svg.append(s('text', { x: x + 8, y: y + 4, fill: MUTED, 'font-size': 12 }, word));
      if (showCoords) {
        const [nx, ny] = norm(x, y);
        svg.append(s('text', { x: x + 8, y: y + 17, fill: GREY, 'font-size': 9.5, 'font-family': 'ui-monospace,Menlo,monospace' }, `(${nx.toFixed(2)}, ${ny.toFixed(2)})`));
      }
    }
    svg.append(s('line', { x1: px, y1: py, x2: px, y2: oy, stroke: GREY, 'stroke-dasharray': '3 5' }));
    svg.append(s('line', { x1: px, y1: py, x2: ox, y2: py, stroke: GREY, 'stroke-dasharray': '3 5' }));
    const [nx, ny] = norm(px, py);
    svg.append(s('text', { x: px, y: oy + 16, 'text-anchor': 'middle', fill: INK, 'font-size': 11, 'font-family': 'ui-monospace,Menlo,monospace' }, nx.toFixed(2)));
    svg.append(s('text', { x: ox - 6, y: py + 4, 'text-anchor': 'end', fill: INK, 'font-size': 11, 'font-family': 'ui-monospace,Menlo,monospace' }, ny.toFixed(2)));
    svg.append(s('line', { x1: ox, y1: oy, x2: px, y2: py, stroke: INK, 'stroke-width': 2.5, 'marker-end': 'url(#lw-emb-arrow)', class: 'lw-fade' }));
    svg.append(s('circle', { cx: px, cy: py, r: 7, fill: '#0e0e0e', stroke: INK, 'stroke-width': 2.5 }));
    // The sentence label sits in a fixed spot at the top, with a leader line
    // back to its point, so it never covers a word.
    const lx = 330;
    const ly = 42;
    svg.append(s('line', { x1: px, y1: py - 8, x2: lx, y2: ly + 14, stroke: GREY, 'stroke-dasharray': '2 4' }));
    svg.append(tag(lx, ly, sentence.short, { W }));

    f.setStats(`(${nx.toFixed(2)}, ${ny.toFixed(2)})`, nearest.word);
    f.note.textContent = sentence.note;
  });
}

/* ------------------------------------------------------------------ */
/* 2. Direction (cosine similarity)                                     */
/* ------------------------------------------------------------------ */

export function mountDial(root, text) {
  const f = frame(root, text);
  const W = 640;
  const H = 320;
  const cx = 320;
  const cy = 236;
  const R = 176;
  const svg = s('svg', { viewBox: `0 0 ${W} ${H}`, role: 'img', 'aria-label': text.aria });
  f.stage.append(svg);

  const theta = f.slider(text.angleLabel, { min: 0, max: 180, step: 1, value: 60, format: (v) => `${v}°` });
  const volume = f.slider(text.volumeLabel, { min: 1000, max: 20000, step: 500, value: 10000, format: (v) => whole.format(v) });

  f.start(() => {
    const deg = theta.get();
    const vol = volume.get();
    const rad = (deg * Math.PI) / 180;
    const cos = Math.cos(rad);
    const contribution = projectedContribution(vol, deg);
    const len = R * (0.5 + 0.5 * (vol / 20000));
    const bx = cx + len * Math.cos(rad);
    const by = cy - len * Math.sin(rad);
    const color = cos > 0.5 ? GREEN : cos > -0.2 ? AMBER : PINK;

    svg.textContent = '';
    const defs = s('defs');
    arrowDef(defs, 'lw-dial-a', BLUE);
    arrowDef(defs, 'lw-dial-b', color);
    svg.append(defs);
    svg.append(s('path', { d: `M ${cx - R} ${cy} A ${R} ${R} 0 0 1 ${cx + R} ${cy}`, fill: 'none', stroke: LINE, 'stroke-width': 1.5 }));
    for (const a of [0, 30, 60, 90, 120, 150, 180]) {
      const r1 = (a * Math.PI) / 180;
      svg.append(s('line', { x1: cx + (R - 6) * Math.cos(r1), y1: cy - (R - 6) * Math.sin(r1), x2: cx + (R + 4) * Math.cos(r1), y2: cy - (R + 4) * Math.sin(r1), stroke: GREY }));
      svg.append(s('text', { x: cx + (R + 18) * Math.cos(r1), y: cy - (R + 18) * Math.sin(r1) + 4, 'text-anchor': 'middle', fill: GREY, 'font-size': 10 }, `${a}°`));
    }
    svg.append(s('line', { x1: cx - R - 20, y1: cy, x2: cx + R + 20, y2: cy, stroke: LINE, 'stroke-dasharray': '4 4' }));
    svg.append(s('line', { x1: bx, y1: by, x2: bx, y2: cy, stroke: GREY, 'stroke-dasharray': '2 4' }));
    svg.append(s('line', { x1: cx, y1: cy, x2: bx, y2: cy, stroke: AMBER, 'stroke-width': 7, 'stroke-linecap': 'round', opacity: 0.85 }));
    svg.append(s('line', { x1: cx, y1: cy, x2: cx + R - 8, y2: cy, stroke: BLUE, 'stroke-width': 3, 'marker-end': 'url(#lw-dial-a)' }));
    svg.append(s('line', { x1: cx, y1: cy, x2: bx, y2: by, stroke: color, 'stroke-width': 3, 'marker-end': 'url(#lw-dial-b)', class: 'lw-fade' }));
    if (deg > 0) {
      const a = 36;
      svg.append(s('path', { d: `M ${cx + a} ${cy} A ${a} ${a} 0 0 0 ${cx + a * Math.cos(rad)} ${cy - a * Math.sin(rad)}`, fill: 'none', stroke: AMBER, 'stroke-width': 2 }));
      const mid = rad / 2;
      svg.append(s('text', { x: cx + 56 * Math.cos(mid), y: cy - 56 * Math.sin(mid) + 4, 'text-anchor': 'middle', fill: INK, 'font-size': 13 }, `θ = ${deg}°`));
    }
    svg.append(s('text', { x: cx, y: cy + 50, 'text-anchor': 'middle', fill: AMBER, 'font-size': 14, 'font-weight': 700 }, `cos θ = ${cos.toFixed(2)}`));
    svg.append(s('text', { x: cx, y: cy + 68, 'text-anchor': 'middle', fill: GREY, 'font-size': 11.5 }, text.projectionLabel(whole.format(vol), whole.format(Math.round(contribution)))));
    svg.append(tag(cx + R - 24, cy + 24, text.fixedLabel, { W }));
    svg.append(tag(bx, by - 26, text.movingLabel, { W }));

    f.setStats(cos.toFixed(2), whole.format(Math.round(contribution)));
    f.note.textContent = text.verdict({ deg, cos, vol, contribution });
  });
}

/* ------------------------------------------------------------------ */
/* 3. Astroturf detector (effective sources)                            */
/* ------------------------------------------------------------------ */

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
  f.legend([[GREEN, text.legendOrganic], [PINK, text.legendPlanted], [AMBER, text.legendOperator]]);

  const rand = seeded(7);
  const hubs = [[110, 95], [320, 60], [530, 100], [210, 250], [440, 255]];
  const hubEls = hubs.map(([x, y]) => {
    const g = s('g', { class: 'lw-fade', opacity: 0 });
    g.append(s('circle', { cx: x, cy: y, r: 12, fill: '#0e0e0e', stroke: AMBER, 'stroke-width': 2 }));
    g.append(s('circle', { cx: x, cy: y, r: 4, fill: AMBER }));
    hubLayer.append(g);
    return g;
  });
  const dots = [];
  for (let i = 0; i < TOTAL; i++) {
    const x = 16 + rand() * (W - 32);
    const y = 14 + rand() * (H - 28);
    const hub = hubs[i % OPERATORS];
    const link = s('line', { x1: hub[0], y1: hub[1], x2: x, y2: y, stroke: PINK, 'stroke-width': 0.35, class: 'lw-fade', opacity: 0 });
    linkLayer.append(link);
    const dot = s('circle', { r: 3.2, cx: x, cy: y, fill: GREEN, class: 'lw-fade' });
    dotLayer.append(dot);
    dots.push({ dot, link });
  }

  const mode = f.toggle(text.toggle, false);
  const lambda = f.slider(text.slider, { min: 0, max: 1, step: 0.01, value: 0.5, format: (v) => v.toFixed(2) });

  f.start(() => {
    const on = mode.get();
    const l = lambda.get();
    const m = on ? TOTAL / OPERATORS : 1;
    const origins = TOTAL / m;
    const perOrigin = effectiveSources(m, l);
    const eff = origins * perOrigin;
    const weight = perOrigin / m;
    for (const d of dots) {
      d.dot.setAttribute('fill', on ? PINK : GREEN);
      d.dot.style.opacity = String(0.14 + 0.86 * weight);
      d.link.setAttribute('opacity', on ? 0.3 : 0);
    }
    for (const g of hubEls) g.setAttribute('opacity', on ? 1 : 0);
    f.setStats(whole.format(TOTAL), fmt(eff));
    f.note.textContent = text.verdict({ on, lambda: l, eff, origins, total: TOTAL });
  });
}

/* ------------------------------------------------------------------ */
/* 4. Acceleration chart                                                */
/* ------------------------------------------------------------------ */

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
  f.legend([[BLUE, text.trueLabel], [PINK, text.estimateLabel], [GREEN, text.bandLabel]]);

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
      svg.append(s('text', { x: pad.l - 8, y: y(v) + 4, 'text-anchor': 'end', fill: GREY, 'font-size': 11 }, String(v)));
    }
    for (let t = 0; t <= T; t += 40) {
      svg.append(s('text', { x: x(t), y: H - 12, 'text-anchor': 'middle', fill: GREY, 'font-size': 11 }, String(t)));
    }
    svg.append(s('text', { x: W - pad.r, y: H - 2, 'text-anchor': 'end', fill: GREY, 'font-size': 10 }, text.axisX));
    const plot = s('g', { 'clip-path': `url(#${clipId})` });
    plot.append(s('rect', { x: pad.l, y: y(a + noise), width: W - pad.l - pad.r, height: Math.max(1, y(a - noise) - y(a + noise)), fill: GREEN, opacity: 0.13 }));
    let d = '';
    for (let t = step; t + step <= T; t += step) {
      const est = a + ((draws[t + step] - 2 * draws[t] + draws[t - step]) * sd) / (step * step);
      d += `${d ? 'L' : 'M'}${x(t).toFixed(1)} ${y(est).toFixed(1)} `;
    }
    plot.append(s('path', { d, fill: 'none', stroke: PINK, 'stroke-width': 1.8, 'stroke-linejoin': 'round' }));
    plot.append(s('line', { x1: pad.l, y1: y(a), x2: W - pad.r, y2: y(a), stroke: BLUE, 'stroke-width': 2.5 }));
    svg.append(plot);

    f.setStats(fmt(noise), fmt(snr));
    f.note.textContent = text.verdict({ snr, noise, step });
  });
}

/* ------------------------------------------------------------------ */
/* 5. Retrieval firewall (flow diagram)                                 */
/* ------------------------------------------------------------------ */

function ribbon(x1, t1, b1, x2, t2, b2) {
  const mx = (x1 + x2) / 2;
  return `M ${x1} ${t1} C ${mx} ${t1}, ${mx} ${t2}, ${x2} ${t2} L ${x2} ${b2} C ${mx} ${b2}, ${mx} ${b1}, ${x1} ${b1} Z`;
}
function ribbonMid(x1, t1, b1, x2, t2, b2) {
  const mx = (x1 + x2) / 2;
  const m1 = (t1 + b1) / 2;
  const m2 = (t2 + b2) / 2;
  return `M ${x1} ${m1} C ${mx} ${m1}, ${mx} ${m2}, ${x2} ${m2}`;
}

export function mountFirewall(root, text) {
  const f = frame(root, text);
  const W = 640;
  const H = 330;
  const ORGANIC = 50;
  const LAMBDA = 0.95;
  const svg = s('svg', { viewBox: `0 0 ${W} ${H}`, role: 'img', 'aria-label': text.aria });
  f.stage.append(svg);
  f.legend([[BLUE, text.legendOrganic], [PINK, text.legendPlanted], [AMBER, text.legendFilter]]);

  const attack = f.slider(text.attackLabel, { min: 0, max: 200, step: 5, value: 50, format: (v) => String(v) });
  const filter = f.toggle(text.toggle, true);

  const L = 30;
  const M = 318;
  const Rr = 598;
  const BAR = 12;
  const top = 26;
  const usable = 250;

  f.start(() => {
    const V = attack.get();
    const on = filter.get();
    const passedPlanted = V === 0 ? 0 : on ? effectiveSources(V, LAMBDA) : V;
    const setAside = V - passedPlanted;
    const total = ORGANIC + V;
    const unit = usable / Math.max(total, 60);
    const gap = 18;

    svg.textContent = '';
    const oT = top;
    const oB = oT + ORGANIC * unit;
    const pT = oB + gap;
    const pB = pT + V * unit;
    const mT = top + gap / 2;
    const mB = mT + total * unit;
    const mOrgB = mT + ORGANIC * unit;
    const mPassB = mOrgB + passedPlanted * unit;
    const rT = top;
    const rPassB = rT + (ORGANIC + passedPlanted) * unit;
    const sT = rPassB + gap;
    const sB = sT + setAside * unit;

    const flows = [
      [BLUE, L + BAR, oT, oB, M, mT, mOrgB],
      [PINK, L + BAR, pT, pB, M, mOrgB, mB],
      [BLUE, M + BAR, mT, mOrgB, Rr, rT, rT + ORGANIC * unit],
      [PINK, M + BAR, mOrgB, mPassB, Rr, rT + ORGANIC * unit, rPassB],
      [PINK, M + BAR, mPassB, mB, Rr, sT, sB],
    ];
    for (const [color, x1, t1, b1, x2, t2, b2] of flows) {
      if (b1 - t1 < 0.2) continue;
      svg.append(s('path', { d: ribbon(x1, t1, b1, x2, t2, b2), fill: color, opacity: 0.28, class: 'lw-fade' }));
      svg.append(s('path', { d: ribbonMid(x1, t1, b1, x2, t2, b2), fill: 'none', stroke: color, 'stroke-width': Math.max(1, Math.min(3, (b1 - t1) / 8)), opacity: 0.7, class: 'lw-flow' }));
    }
    svg.append(s('rect', { x: L, y: oT, width: BAR, height: Math.max(2, oB - oT), rx: 3, fill: BLUE }));
    svg.append(s('rect', { x: L, y: pT, width: BAR, height: Math.max(2, pB - pT), rx: 3, fill: PINK }));
    svg.append(s('rect', { x: M, y: mT, width: BAR, height: mB - mT, rx: 3, fill: on ? AMBER : LINE }));
    svg.append(s('rect', { x: Rr, y: rT, width: BAR, height: Math.max(2, rPassB - rT), rx: 3, fill: GREEN }));
    svg.append(s('rect', { x: Rr, y: sT, width: BAR, height: Math.max(2, sB - sT), rx: 3, fill: GREY }));

    svg.append(s('text', { x: L + BAR + 10, y: (oT + oB) / 2 + 4, fill: INK, 'font-size': 12.5, 'font-weight': 600, class: 'lw-halo' }, `${text.organic} (${ORGANIC})`));
    svg.append(s('text', { x: L + BAR + 10, y: Math.max(pT + 14, (pT + pB) / 2 + 4), fill: INK, 'font-size': 12.5, 'font-weight': 600, class: 'lw-halo' }, `${text.planted} (${V})`));
    svg.append(tag(M + BAR / 2, mB + 22, on ? text.filterOn : text.filterOff, { W, fill: on ? '#2a2206' : '#202124', color: on ? AMBER : GREY }));
    svg.append(s('text', { x: Rr - 10, y: (rT + rPassB) / 2 + 4, 'text-anchor': 'end', fill: INK, 'font-size': 12.5, 'font-weight': 600, class: 'lw-halo' }, text.reaches));
    svg.append(s('text', { x: Rr - 10, y: (rT + rPassB) / 2 + 20, 'text-anchor': 'end', fill: GREY, 'font-size': 11, class: 'lw-halo' }, text.reachesSub(ORGANIC, passedPlanted)));
    if (setAside > 0.2) {
      svg.append(s('text', { x: Rr - 10, y: Math.max(sT + 14, (sT + sB) / 2 + 4), 'text-anchor': 'end', fill: INK, 'font-size': 12.5, 'font-weight': 600, class: 'lw-halo' }, text.setAside));
      svg.append(s('text', { x: Rr - 10, y: Math.max(sT + 30, (sT + sB) / 2 + 20), 'text-anchor': 'end', fill: GREY, 'font-size': 11, class: 'lw-halo' }, text.setAsideSub(Math.round(setAside))));
    }

    const integrity = ORGANIC / (ORGANIC + passedPlanted);
    f.setStats(`${Math.round(integrity * 100)}%`, V === 0 ? '0' : fmt(passedPlanted));
    f.note.textContent = text.verdict({ on, V, passedPlanted, integrity, organic: ORGANIC });
  });
}

/* ------------------------------------------------------------------ */
/* 6. Consensus among agents                                            */
/* ------------------------------------------------------------------ */

export function mountConsensus(root, text) {
  const f = frame(root, text);
  const W = 640;
  const H = 330;
  const cx = 320;
  const cy = 165;
  const LAMBDA = 0.9;
  const svg = s('svg', { viewBox: `0 0 ${W} ${H}`, role: 'img', 'aria-label': text.aria });
  f.stage.append(svg);
  f.legend([[BLUE, text.legendHonest], [PINK, text.legendClone], [AMBER, text.legendOrigin]]);

  const honest = f.slider(text.honestLabel, { min: 1, max: 20, step: 1, value: 10, format: (v) => String(v) });
  const clones = f.slider(text.cloneLabel, { min: 0, max: 90, step: 1, value: 90, format: (v) => String(v) });
  const math = f.toggle(text.toggle, true);
  const rand = seeded(11);
  const jitter = Array.from({ length: 90 }, () => [rand(), rand()]);

  f.start(() => {
    const nH = honest.get();
    const nC = clones.get();
    const on = math.get();
    const cloneWeight = nC === 0 ? 0 : on ? effectiveSources(nC, LAMBDA) : nC;
    // Compare at the precision shown (one decimal), so a tie is a tie on screen too.
    const tie = Math.abs(nH - cloneWeight) < 0.05;
    const honestWins = !tie && nH > cloneWeight;

    svg.textContent = '';
    const origin = [560, 58];
    for (let i = 0; i < nC; i++) {
      const ang = (i / nC) * Math.PI * 2 + jitter[i][0] * 0.3;
      const r = 118 + jitter[i][1] * 36;
      const x = cx + r * Math.cos(ang);
      const y = cy + r * Math.sin(ang) * 0.9;
      svg.append(s('line', { x1: cx, y1: cy, x2: x, y2: y, stroke: PINK, 'stroke-width': 0.6, opacity: on ? 0.12 : 0.45, class: 'lw-fade' }));
      if (on) svg.append(s('line', { x1: origin[0], y1: origin[1], x2: x, y2: y, stroke: AMBER, 'stroke-width': 0.4, opacity: 0.35, class: 'lw-fade' }));
      svg.append(s('circle', { cx: x, cy: y, r: 4, fill: PINK, opacity: on ? 0.35 : 0.95, class: 'lw-fade' }));
    }
    for (let i = 0; i < nH; i++) {
      const ang = (i / nH) * Math.PI * 2 - Math.PI / 2;
      const x = cx + 78 * Math.cos(ang);
      const y = cy + 78 * Math.sin(ang) * 0.9;
      svg.append(s('line', { x1: cx, y1: cy, x2: x, y2: y, stroke: BLUE, 'stroke-width': 1.6, opacity: 0.8 }));
      svg.append(s('circle', { cx: x, cy: y, r: 7, fill: BLUE }));
    }
    const stateColor = honestWins ? GREEN : tie ? AMBER : PINK;
    svg.append(s('circle', { cx, cy, r: 22, fill: '#202124', stroke: stateColor, 'stroke-width': 2.5, class: 'lw-fade' }));
    svg.append(s('text', { x: cx, y: cy + 4, 'text-anchor': 'middle', fill: INK, 'font-size': 10.5, 'font-weight': 700 }, text.hub));
    if (on && nC > 0) {
      svg.append(s('circle', { cx: origin[0], cy: origin[1], r: 13, fill: '#0e0e0e', stroke: AMBER, 'stroke-width': 2 }));
      svg.append(s('circle', { cx: origin[0], cy: origin[1], r: 4.5, fill: AMBER }));
      svg.append(tag(origin[0], origin[1] - 28, text.originTag(nC), { W }));
    }
    svg.append(tag(cx, H - 14, honestWins ? text.stateHolds : tie ? text.stateTie : text.stateLost, { W, fill: honestWins ? '#12301c' : tie ? '#2a2206' : '#3a1a18', color: stateColor }));

    f.setStats(`${nH} : ${nC}`, `${nH.toFixed(1)} : ${fmt(cloneWeight)}`);
    f.note.textContent = text.verdict({ on, nH, nC, cloneWeight, honestWins, tie });
  });
}

/* ------------------------------------------------------------------ */
/* 7. Instruction and action (output alignment)                         */
/* ------------------------------------------------------------------ */

export function mountAlignment(root, text) {
  const f = frame(root, text);
  const W = 640;
  const H = 330;
  // Half-circle dial centred in the picture, so the arc runs the full 0° to 180°.
  const ox = 320;
  const oy = 262;
  const R = 236;
  const svg = s('svg', { viewBox: `0 0 ${W} ${H}`, role: 'img', 'aria-label': text.aria });
  f.stage.append(svg);
  f.legend([[BLUE, text.legendInstruction], [GREEN, text.legendRuns], [AMBER, text.legendHeld], [PINK, text.legendBlocked]]);

  const drift = f.slider(text.driftLabel, { min: 0, max: 180, step: 1, value: 15, format: (v) => `${v}°` });
  const bar = f.slider(text.barLabel, { min: 0.3, max: 0.95, step: 0.05, value: 0.7, format: (v) => v.toFixed(2) });

  f.start(() => {
    const deg = drift.get();
    const limit = bar.get();
    const rad = (deg * Math.PI) / 180;
    const cos = Math.cos(rad);
    const limitDeg = (Math.acos(limit) * 180) / Math.PI;
    // Decide on the angle itself: cos θ ≥ limit is the same as θ ≤ acos(limit),
    // and exactly 90° is the zero line, not a hair above it.
    const decision = deg <= limitDeg + 1e-9 ? 'runs' : 'held';
    const color = decision === 'runs' ? GREEN : decision === 'held' ? AMBER : PINK;
    const lr = Math.acos(limit);
    const example = text.examples.find((e) => deg <= e.upTo) || text.examples[text.examples.length - 1];
    const leftX = ox - R;
    const leftY = oy;

    svg.textContent = '';
    const defs = s('defs');
    arrowDef(defs, 'lw-al-i', BLUE);
    arrowDef(defs, 'lw-al-a', color);
    svg.append(defs);
    svg.append(s('path', { d: `M ${ox} ${oy} L ${ox + R} ${oy} A ${R} ${R} 0 0 0 ${ox + R * Math.cos(lr)} ${oy - R * Math.sin(lr)} Z`, fill: GREEN, opacity: 0.12, class: 'lw-fade' }));
    svg.append(s('path', { d: `M ${ox} ${oy} L ${ox + R * Math.cos(lr)} ${oy - R * Math.sin(lr)} A ${R} ${R} 0 0 0 ${ox} ${oy - R} Z`, fill: AMBER, opacity: 0.08 }));
    svg.append(s('path', { d: `M ${ox} ${oy} L ${ox} ${oy - R} A ${R} ${R} 0 0 0 ${leftX} ${leftY} Z`, fill: PINK, opacity: 0.07 }));
    svg.append(s('path', { d: `M ${leftX} ${leftY} A ${R} ${R} 0 0 1 ${ox + R} ${oy}`, fill: 'none', stroke: LINE }));
    svg.append(s('line', { x1: ox, y1: oy, x2: ox + R * Math.cos(lr), y2: oy - R * Math.sin(lr), stroke: AMBER, 'stroke-dasharray': '4 5', opacity: 0.8 }));
    svg.append(s('text', { x: ox + (R + 10) * Math.cos(lr), y: oy - (R + 10) * Math.sin(lr), fill: AMBER, 'font-size': 11 }, `cos θ = ${limit.toFixed(2)}`));
    svg.append(s('line', { x1: ox, y1: oy, x2: ox, y2: oy - R, stroke: LINE, 'stroke-dasharray': '4 5' }));
    svg.append(s('text', { x: ox, y: oy - R - 8, 'text-anchor': 'middle', fill: GREY, 'font-size': 11 }, text.ninetyLabel));
    svg.append(s('line', { x1: ox, y1: oy, x2: ox + R - 10, y2: oy, stroke: BLUE, 'stroke-width': 3.5, 'marker-end': 'url(#lw-al-i)' }));
    const ax = ox + (R - 24) * Math.cos(rad);
    const ay = oy - (R - 24) * Math.sin(rad);
    svg.append(s('line', { x1: ox, y1: oy, x2: ax, y2: ay, stroke: color, 'stroke-width': 3.5, 'marker-end': 'url(#lw-al-a)', class: 'lw-fade' }));
    svg.append(s('circle', { cx: ox, cy: oy, r: 5, fill: INK }));
    svg.append(tag(ox + R - 40, oy + 26, text.instructionTag, { W }));
    svg.append(tag(ax, ay - 26, text.actionTag, { W }));
    svg.append(tag(W - 10, 24, text.decisionTag[decision], { W, anchor: 'end', fill: decision === 'runs' ? '#12301c' : decision === 'held' ? '#2a2206' : '#3a1a18', color }));
    svg.append(s('text', { x: ox + 60, y: oy + 50, fill: INK, 'font-size': 13 }, `θ = ${deg}°, cos θ = ${cos.toFixed(2)}`));

    f.setStats(cos.toFixed(2), text.decisionWord[decision]);
    f.note.textContent = text.verdict({ decision, deg, cos, limit, limitDeg, example: example.text });
  });
}

/* ------------------------------------------------------------------ */
/* 8. Reading a statement: words against meaning                       */
/* ------------------------------------------------------------------ */

const MARKER_RE = /\b(however|but|contradict|disagree|incorrect|wrong|false|not true|inaccurate)\b/gi;

function badgeColor(gate) {
  return gate === 'ALLOW' ? GREEN : gate === 'BLOCK' ? PINK : AMBER;
}
function badgeFill(gate) {
  return gate === 'ALLOW' ? '#12301c' : gate === 'BLOCK' ? '#3a1a18' : '#2a2206';
}

/**
 * Two ways of reading the same three replies, side by side: the word-count
 * gate as the working prototype computes it today, and the meaning-based
 * decision that replaces it. Every number is computed live from the replies.
 */
export function mountReading(root, text) {
  const f = frame(root, text);
  const LAMBDA = 0.9;
  const grid = h('div', { class: 'lw-cmp' });
  f.stage.append(grid);

  function card(kind, title, tagText) {
    const el = h('div', { class: `lw-card${kind === 'meaning' ? ' lw-card--meaning' : ''}` });
    const head = h('h4', {}, title);
    head.append(h('em', {}, tagText));
    const replies = h('div', { class: 'lw-replies' });
    const svg = s('svg', { viewBox: '0 0 300 120', role: 'img', 'aria-label': kind === 'words' ? text.wordsAria : text.meaningAria });
    const tiles = h('div', { class: 'lw-tiles' });
    const verdict = h('div', { class: 'lw-verdict' });
    const why = h('p');
    const badge = h('span', { class: 'lw-badge' });
    verdict.append(why, badge);
    el.append(head, replies, svg, tiles, verdict);
    grid.append(el);
    return { el, replies, svg, tiles, why, badge };
  }
  const words = card('words', text.wordsTitle, text.wordsTag);
  const meaning = card('meaning', text.meaningTitle, text.meaningTag);

  const which = f.choice(text.choiceLabel, text.scenarios.map((x) => x.name), 0);

  function tile(label, value) {
    const d = h('div');
    d.append(h('span', {}, label), h('b', {}, value));
    return d;
  }
  function setBadge(badge, gate) {
    badge.textContent = text.gateWord[gate];
    badge.style.color = badgeColor(gate);
    badge.style.borderColor = badgeColor(gate);
    badge.style.background = badgeFill(gate);
  }

  f.start(() => {
    const sc = text.scenarios[which.get()];
    const replies = sc.replies;
    const wc = wordCountDecision(replies);
    const md = meaningDecision(replies, LAMBDA);

    // Left: the replies with their marker words lit, a word-overlap picture, the word-count numbers.
    words.replies.textContent = '';
    replies.forEach((r, i) => {
      const row = h('div', { class: 'lw-reply' });
      row.append(h('small', {}, `${text.reader} ${i + 1}`));
      const body = h('span');
      let last = 0;
      for (const m of r.text.matchAll(MARKER_RE)) {
        body.append(document.createTextNode(r.text.slice(last, m.index)));
        body.append(h('mark', {}, m[0]));
        last = m.index + m[0].length;
      }
      body.append(document.createTextNode(r.text.slice(last)));
      row.append(body);
      words.replies.append(row);
    });
    words.svg.textContent = '';
    {
      // Three circles, pulled together by the mean word overlap: 1 = one circle, 0 = three apart.
      const cx = 150;
      const cy = 60;
      const d = (1 - wc.overlap) * 34;
      const r = 30;
      const spots = [[cx - d, cy - d * 0.5], [cx + d, cy - d * 0.5], [cx, cy + d]];
      const cols = [BLUE, PINK, GREEN];
      spots.forEach(([x, y], i) => words.svg.append(s('circle', { cx: x, cy: y, r, fill: cols[i], opacity: 0.28, stroke: cols[i], 'stroke-width': 1, class: 'lw-move' })));
      words.svg.append(s('text', { x: cx, y: 112, 'text-anchor': 'middle', fill: GREY, 'font-size': 10 }, text.overlapCaption(Math.round(wc.overlap * 100))));
    }
    words.tiles.textContent = '';
    words.tiles.append(tile(text.tileOverlap, `${Math.round(wc.overlap * 100)}%`), tile(text.tileMarkers, String(wc.markers)), tile(text.tileScore, wc.score.toFixed(2)));
    words.why.textContent = sc.wordsWhy;
    setBadge(words.badge, wc.gate);

    // Right: what each reader read, drawn on the support/refute line, grouped by origin; the meaning numbers.
    meaning.replies.textContent = '';
    replies.forEach((r, i) => {
      const row = h('div', { class: 'lw-reply' });
      const head = h('small');
      head.append(h('span', {}, `${text.reader} ${i + 1}`), h('span', {}, `${text.origin} ${r.origin}`));
      const stance = h('span', { class: 'lw-stance' }, `${text.stanceWord[r.stance]} · ${Math.round(r.confidence * 100)}%`);
      stance.style.color = r.stance === 'supports' ? GREEN : r.stance === 'refutes' ? PINK : AMBER;
      row.append(head, stance);
      meaning.replies.append(row);
    });
    meaning.svg.textContent = '';
    {
      const cx = 150;
      const cy = 62;
      const L = 110;
      const svg = meaning.svg;
      const defs = s('defs');
      arrowDef(defs, 'lw-rd-s', GREEN);
      arrowDef(defs, 'lw-rd-r', PINK);
      arrowDef(defs, 'lw-rd-u', AMBER);
      svg.append(defs);
      svg.append(s('line', { x1: cx - L - 10, y1: cy, x2: cx + L + 10, y2: cy, stroke: LINE, 'stroke-dasharray': '4 4' }));
      svg.append(s('text', { x: cx + L + 10, y: cy + 16, 'text-anchor': 'end', fill: GREEN, 'font-size': 9.5 }, text.axisSupport));
      svg.append(s('text', { x: cx - L - 10, y: cy + 16, 'text-anchor': 'start', fill: PINK, 'font-size': 9.5 }, text.axisRefute));
      // One ring per origin that holds more than one reply.
      const byOrigin = new Map();
      replies.forEach((r, i) => byOrigin.set(r.origin, [...(byOrigin.get(r.origin) ?? []), i]));
      // Arrows fan upward from the line so none covers another or the labels.
      const angleOf = (stance, k) => (stance === 'supports' ? 6 + k * 13 : stance === 'refutes' ? 174 - k * 13 : 78 + k * 12);
      const seen = { supports: 0, refutes: 0, uncertain: 0 };
      replies.forEach((r) => {
        const ang = (angleOf(r.stance, seen[r.stance]++) * Math.PI) / 180;
        const len = 30 + 60 * r.confidence;
        const color = r.stance === 'supports' ? GREEN : r.stance === 'refutes' ? PINK : AMBER;
        const marker = r.stance === 'supports' ? 'lw-rd-s' : r.stance === 'refutes' ? 'lw-rd-r' : 'lw-rd-u';
        svg.append(s('line', { x1: cx, y1: cy, x2: cx + len * Math.cos(ang), y2: cy - len * Math.sin(ang), stroke: color, 'stroke-width': 2.5, 'stroke-linecap': 'round', 'marker-end': `url(#${marker})`, class: 'lw-fade' }));
      });
      for (const [origin, idx] of byOrigin) {
        if (idx.length < 2) continue;
        // Ring around the fan of arrows that share one origin.
        const r0 = replies[idx[0]];
        const mid = angleOf(r0.stance, (idx.length - 1) / 2);
        const ang = (mid * Math.PI) / 180;
        const len = (30 + 60 * r0.confidence) * 0.78;
        const x = cx + len * Math.cos(ang);
        const y = cy - len * Math.sin(ang);
        svg.append(s('circle', { cx: x, cy: y, r: 22, fill: AMBER, opacity: 0.1, stroke: AMBER, 'stroke-dasharray': '3 3' }));
        svg.append(s('text', { x: cx + (r0.stance === 'refutes' ? -1 : 1) * 60, y: 112, 'text-anchor': 'middle', fill: AMBER, 'font-size': 9.5, 'font-weight': 600 }, text.oneOrigin(idx.length, origin)));
      }
      svg.append(s('circle', { cx, cy, r: 3.5, fill: INK }));
    }
    meaning.tiles.textContent = '';
    meaning.tiles.append(tile(text.tileOrigins, fmt(md.effective)), tile(text.tileDirection, (md.direction >= 0 ? '+' : '') + md.direction.toFixed(2)), tile(text.tileCertainty, md.certainty.toFixed(2)));
    meaning.why.textContent = sc.meaningWhy;
    setBadge(meaning.badge, md.gate);

    f.setStats(text.gateWord[wc.gate], text.gateWord[md.gate]);
    f.note.textContent = sc.note;
  });
}
