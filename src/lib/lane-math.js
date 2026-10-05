// The three Lane Vector results the home page lets a visitor move by hand.
// Every function is a direct evaluation of a formula stated in WP-01 or WP-02.
// Nothing here is fitted to data.

/**
 * Effective number of independent sources contributed by one origin.
 * WP-02 §3: n_eff(m) = m / (1 + λ(m − 1)).
 * @param {number} m copies traced to the origin (0 or more)
 * @param {number} lambda intraclass correlation within the origin, 0 to 1
 * @returns {number}
 */
export function effectiveSources(m, lambda) {
  if (!(m > 0)) return 0;
  const l = clamp(lambda, 0, 1);
  return m / (1 + l * (m - 1));
}

/**
 * Effective count across several origins: the per-origin values added up.
 * @param {number[]} clusterSizes copies per origin
 * @param {number} lambda
 * @returns {number}
 */
export function effectiveCount(clusterSizes, lambda) {
  return clusterSizes.reduce((sum, m) => sum + effectiveSources(m, lambda), 0);
}

/**
 * The most one origin can ever count for, at any volume. WP-02 §4: 1/λ.
 * @param {number} lambda
 * @returns {number} Infinity when λ is 0
 */
export function originCeiling(lambda) {
  const l = clamp(lambda, 0, 1);
  return l === 0 ? Infinity : 1 / l;
}

/**
 * Expected contribution of a signal of magnitude V at angle θ to the outcome
 * direction, with ‖w‖ = 1. WP-01 §2: V cos θ.
 * @param {number} volume
 * @param {number} thetaDegrees
 * @returns {number}
 */
export function projectedContribution(volume, thetaDegrees) {
  return volume * Math.cos((thetaDegrees * Math.PI) / 180);
}

/**
 * Noise standard deviation of a second-difference acceleration estimate.
 * WP-01 §3: √6 · σ / h², independent noise.
 * @param {number} sigma noise standard deviation per sample
 * @param {number} h sampling interval
 * @returns {number}
 */
export function accelerationNoise(sigma, h) {
  return (Math.sqrt(6) * sigma) / (h * h);
}

/**
 * Signal-to-noise ratio of an acceleration estimate: a / (√6 · σ / h²).
 * @param {number} a acceleration to detect
 * @param {number} sigma
 * @param {number} h
 * @returns {number}
 */
export function accelerationSnr(a, sigma, h) {
  return a / accelerationNoise(sigma, h);
}

/**
 * @param {number} x
 * @param {number} lo
 * @param {number} hi
 * @returns {number}
 */
function clamp(x, lo, hi) {
  return Math.min(hi, Math.max(lo, x));
}

/* ------------------------------------------------------------------ */
/* Reading a statement: words against meaning                           */
/* ------------------------------------------------------------------ */

/**
 * @typedef {{ text: string, stance: 'supports' | 'refutes' | 'uncertain', confidence: number, origin: string }} Reply
 */

/** The nine marker words the word-count method treats as contradiction. */
const MARKERS = ['however', 'but', 'contradict', 'disagree', 'incorrect', 'wrong', 'false', 'not true', 'inaccurate'];

/**
 * @param {string} text
 * @returns {Set<string>}
 */
function wordSet(text) {
  return new Set(text.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/).filter((t) => t.length > 0));
}

/**
 * Jaccard overlap of two word sets: shared words over all words.
 * @param {Set<string>} a
 * @param {Set<string>} b
 * @returns {number}
 */
export function wordOverlap(a, b) {
  const inter = [...a].filter((x) => b.has(x)).length;
  const union = new Set([...a, ...b]).size;
  return union === 0 ? 0 : inter / union;
}

/**
 * The word-count gate, as the working prototype computes it today: one minus
 * the mean pairwise word overlap, minus a marker-word density, clamped to
 * [0, 1]; ALLOW at 0.75, REVIEW at 0.45, BLOCK below. It never reads the
 * stances. Reproduced exactly so the comparison is against the real thing.
 * @param {readonly Reply[]} replies
 * @returns {{ overlap: number, markers: number, words: number, density: number, score: number, gate: 'ALLOW' | 'REVIEW' | 'BLOCK' }}
 */
export function wordCountDecision(replies) {
  const sets = replies.map((r) => wordSet(r.text));
  let total = 0;
  let pairs = 0;
  for (let i = 0; i < sets.length; i++) {
    for (let j = i + 1; j < sets.length; j++) {
      total += wordOverlap(sets[i], sets[j]);
      pairs++;
    }
  }
  const overlap = pairs > 0 ? total / pairs : 1;
  let markers = 0;
  let words = 0;
  for (const r of replies) {
    const text = r.text.toLowerCase();
    words += text.split(/\s+/).filter(Boolean).length;
    for (const m of MARKERS) {
      const hits = text.match(new RegExp(`\\b${m}\\b`, 'gi'));
      if (hits) markers += hits.length;
    }
  }
  const density = words === 0 ? 0 : Math.min((markers / words) * 10, 1);
  const score = clamp(1 - (1 - overlap) - density, 0, 1);
  const gate = score >= 0.75 ? 'ALLOW' : score >= 0.45 ? 'REVIEW' : 'BLOCK';
  return { overlap, markers, words, density, score, gate };
}

/**
 * Certainty's complement: normalised entropy over three shares, 0 = full
 * agreement, 1 = even split.
 * @param {number} s
 * @param {number} r
 * @param {number} u
 * @returns {number}
 */
export function stanceEntropy(s, r, u) {
  let h = 0;
  for (const p of [s, r, u]) if (p > 0) h -= p * Math.log(p);
  return clamp(h / Math.log(3), 0, 1);
}

/**
 * The meaning-based decision: the readers' stances, weighted by confidence
 * and by origin (WP-02 §3 with λ inside one origin), give direction D = S − R
 * and certainty C = 1 − H. BLOCK when D ≤ −0.5 with C ≥ 0.5; ALLOW when
 * D ≥ 0.5, C ≥ 0.5 and at least two effective origins; otherwise REVIEW.
 * The angle checks (reasons on the same subject, action on the instruction's
 * subject) need an embedding model and are not part of this arithmetic.
 * @param {readonly Reply[]} replies
 * @param {number} lambda intraclass correlation inside one origin
 * @returns {{ effective: number, support: number, refute: number, uncertain: number, direction: number, certainty: number, gate: 'ALLOW' | 'REVIEW' | 'BLOCK', reason: string }}
 */
export function meaningDecision(replies, lambda = 0.9) {
  const groups = new Map();
  for (const r of replies) groups.set(r.origin, (groups.get(r.origin) ?? 0) + 1);
  let effective = 0;
  for (const m of groups.values()) effective += effectiveSources(m, lambda);
  let s = 0;
  let rf = 0;
  let u = 0;
  for (const r of replies) {
    const m = groups.get(r.origin) ?? 1;
    const w = (effectiveSources(m, lambda) / m) * clamp(r.confidence, 0, 1);
    if (r.stance === 'supports') s += w;
    else if (r.stance === 'refutes') rf += w;
    else u += w;
  }
  const total = s + rf + u;
  const support = total > 0 ? s / total : 0;
  const refute = total > 0 ? rf / total : 0;
  const uncertain = total > 0 ? u / total : 1;
  const direction = support - refute;
  const certainty = 1 - stanceEntropy(support, refute, uncertain);
  let gate = 'REVIEW';
  let reason = 'mixed or unsure';
  if (replies.length === 0) {
    gate = 'BLOCK';
    reason = 'no readers';
  } else if (direction <= -0.5 && certainty >= 0.5) {
    gate = 'BLOCK';
    reason = 'the readers refute it';
  } else if (direction >= 0.5 && certainty >= 0.5) {
    if (effective >= 2) {
      gate = 'ALLOW';
      reason = 'the readers support it';
    } else {
      reason = 'too few independent origins';
    }
  }
  return { effective, support, refute, uncertain, direction, certainty, gate, reason };
}
