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
