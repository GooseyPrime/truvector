# Calculation reference

Current mathematical definitions and worked examples are maintained in [WP-01](WP-01-lane-vector-framework.md), [WP-02](WP-02-source-independence.md), and the [validation framework](Validation-framework.md).

For an equal-weight group, effective weight is m / (1 + lambda (m - 1)). At lambda = 0.5, five groups of 100 contribute 5 × 100/50.5 = 9.90099. At lambda = 0.9, 90 copies contribute 90/81.1 = 1.10974. At lambda = 0.95, 50 copies contribute 50/47.55 = 1.05152. These calculations assume a declared group map and dependence value; they do not establish those values from content.

With independent measurement errors of standard deviation sigma, a centered second difference has standard deviation sqrt(6) × sigma / h². Correlated errors require the covariance terms specified in WP-01.

Two comparable observations identify a change over an interval; at least three are required for a second difference. Predictive SEO requires longer comparable histories, recorded forecasts, and evaluation against later observations and suitable reference forecasts.
