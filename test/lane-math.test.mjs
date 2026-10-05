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
