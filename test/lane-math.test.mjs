// Checks the home-page arithmetic against the figures published in the
// working papers (WP-01 §§2-3, WP-02 §§4, 6, 7 and the calculation appendix).
import {
  effectiveSources,
  effectiveCount,
  originCeiling,
  projectedContribution,
  accelerationNoise,
  accelerationSnr
} from '../src/lib/lane-math.js';

let failures = 0;
function near(name, got, want, tol = 5e-4) {
  if (!Number.isFinite(got) || Math.abs(got - want) > tol) {
    console.error(`FAIL  ${name}  — got ${got}, want ${want}`);
    failures++;
  } else {
    console.log(`PASS  ${name}`);
  }
}

// WP-02 §4 properties
near('a single item is never discounted', effectiveSources(1, 0.6), 1);
near('lambda 0 recovers plain counting', effectiveSources(12, 0), 12);
near('lambda 1 collapses an origin to one voice', effectiveSources(500, 1), 1);
near('no copies contribute nothing', effectiveSources(0, 0.6), 0);
near('ceiling at lambda 0.6', originCeiling(0.6), 1.6667);
near('ten thousand copies stay under the ceiling', effectiveSources(10000, 0.6), 1.6666, 1e-3);
if (originCeiling(0) !== Infinity) { console.error('FAIL  ceiling at lambda 0'); failures++; }

// Calculation appendix, table D
near('m=10, lambda=0.6', effectiveSources(10, 0.6), 1.5625);
near('m=5, lambda=0.3', effectiveSources(5, 0.3), 2.2727);
near('m=20, lambda=0.8', effectiveSources(20, 0.8), 1.2346);

// WP-02 §7 worked decision
near('origins 1,1,1', effectiveCount([1, 1, 1], 0.6), 3);
near('one origin, ten items', effectiveCount([10], 0.6), 1.5625);
near('origins 1 and 9', effectiveCount([1, 9], 0.6), 2.5517);
near('origins 1, 9, 1', effectiveCount([1, 9, 1], 0.6), 3.5517);

// WP-02 §6 over-merging
near('three independent sources merged', effectiveSources(3, 0.6), 1.3636);

// Calculation appendix, table A
near('V=10000 at 0 degrees', projectedContribution(10000, 0), 10000);
near('V=10000 at 45 degrees', projectedContribution(10000, 45), 7071.07, 0.01);
near('V=10000 at 60 degrees', projectedContribution(10000, 60), 5000, 0.01);
near('V=10000 at 80 degrees', projectedContribution(10000, 80), 1736.48, 0.01);
near('V=10000 at 90 degrees', projectedContribution(10000, 90), 0, 1e-6);

// Calculation appendix, table B (sigma = 20, a = 2)
near('noise floor at h=1', accelerationNoise(20, 1), 48.9898);
near('noise floor at h=6', accelerationNoise(20, 6), 1.3608);
near('noise floor at h=24', accelerationNoise(20, 24), 0.08505, 5e-5);
near('SNR at h=1', accelerationSnr(2, 20, 1), 0.0408);
near('SNR at h=6', accelerationSnr(2, 20, 6), 1.47, 5e-3);
near('SNR at h=24', accelerationSnr(2, 20, 24), 23.52, 5e-3);
near('doubling h quadruples SNR', accelerationSnr(2, 20, 4) / accelerationSnr(2, 20, 2), 4);

if (failures) process.exit(1);

// Reading a statement: the word-count gate as coded today against the meaning-based decision.
import { wordCountDecision, meaningDecision, wordOverlap } from '../src/lib/lane-math.js';
near('word overlap of identical sets is 1', wordOverlap(new Set(['a', 'b']), new Set(['a', 'b'])), 1);
near('word overlap of disjoint sets is 0', wordOverlap(new Set(['a']), new Set(['b'])), 0);
{
  // Three copies of one reply: perfect overlap, no markers → the word count allows it;
  // one origin repeated → the meaning-based decision holds it for a person.
  const copies = Array.from({ length: 3 }, () => ({ text: 'Yes, this is completely true.', stance: 'supports', confidence: 0.9, origin: 'A' }));
  const wc = wordCountDecision(copies);
  near('copies: overlap 1', wc.overlap, 1);
  near('copies: score 1', wc.score, 1);
  if (wc.gate !== 'ALLOW') { console.error('FAIL  copies: word count allows'); failures++; } else console.log('PASS  copies: word count allows');
  const md = meaningDecision(copies, 0.9);
  near('copies: 3 of one origin count as 3/(1+0.9·2)', md.effective, 3 / 2.8);
  near('copies: direction +1', md.direction, 1);
  if (md.gate !== 'REVIEW') { console.error('FAIL  copies: meaning holds for a person'); failures++; } else console.log('PASS  copies: meaning holds for a person');
}
{
  // "This is not false" counts "false" as a marker: 2 markers in 12 words → density 1 → score 0 → BLOCK.
  const trap = [
    { text: 'This is not false.', stance: 'supports', confidence: 0.9, origin: 'A' },
    { text: 'Nothing here is incorrect.', stance: 'supports', confidence: 0.85, origin: 'B' },
    { text: 'The figure is right.', stance: 'supports', confidence: 0.8, origin: 'C' }
  ];
  const wc = wordCountDecision(trap);
  near('marker trap: 2 markers', wc.markers, 2);
  near('marker trap: density 1', wc.density, 1);
  if (wc.gate !== 'BLOCK') { console.error('FAIL  marker trap: word count blocks'); failures++; } else console.log('PASS  marker trap: word count blocks');
  const md = meaningDecision(trap, 0.9);
  near('marker trap: three origins', md.effective, 3);
  near('marker trap: certainty 1', md.certainty, 1);
  if (md.gate !== 'ALLOW') { console.error('FAIL  marker trap: meaning allows'); failures++; } else console.log('PASS  marker trap: meaning allows');
}
{
  // Unanimous refutation from three origins: BLOCK with direction −1.
  const refute = [
    { text: 'This is false.', stance: 'refutes', confidence: 0.9, origin: 'A' },
    { text: 'The figure contradicts the record.', stance: 'refutes', confidence: 0.9, origin: 'B' },
    { text: 'Incorrect; the real figure is lower.', stance: 'refutes', confidence: 0.85, origin: 'C' }
  ];
  const md = meaningDecision(refute, 0.9);
  near('refutation: direction −1', md.direction, -1);
  if (md.gate !== 'BLOCK') { console.error('FAIL  refutation: meaning blocks'); failures++; } else console.log('PASS  refutation: meaning blocks');
  // Two-to-one split with equal confidence and separate origins: D = 1/3, C = 1 − H(2/3, 1/3, 0).
  const split = [
    { text: 'a', stance: 'supports', confidence: 0.9, origin: 'A' },
    { text: 'b', stance: 'supports', confidence: 0.9, origin: 'B' },
    { text: 'c', stance: 'refutes', confidence: 0.9, origin: 'C' }
  ];
  const sp = meaningDecision(split, 0.9);
  near('split: direction 1/3', sp.direction, 1 / 3);
  near('split: certainty', sp.certainty, 1 - (-(2 / 3) * Math.log(2 / 3) - (1 / 3) * Math.log(1 / 3)) / Math.log(3));
  if (sp.gate !== 'REVIEW') { console.error('FAIL  split: held for a person'); failures++; } else console.log('PASS  split: held for a person');
}

if (failures > 0) { console.error(`${failures} failure(s)`); process.exit(1); }
