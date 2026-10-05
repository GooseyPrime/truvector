# Lane Vector signal direction rate and source structure

Working paper WP-01 | Michael Brandon Lane | InTellMe AI | 5 October 2026

## Abstract

Lane Vector studies information using three quantities that a count alone cannot describe: direction relative to an outcome, change over time, and dependence among origins. A projection is a useful mathematical representation when the outcome mapping and coordinate basis are stated. Finite differences describe rate and acceleration, but amplify measurement noise. Repeated observations from one origin contain less independent information than the same number of observations from separate origins. The research contribution is the application and evaluation of these tools within a unified information assessment framework.

The new research path separates reading from calculation. Language models read a statement and supply a stance, confidence, and reason. Embeddings supply coordinates for checking whether texts concern the same subject. Arithmetic combines those inputs under an explicit decision rule. A high cosine similarity between texts does not establish agreement: a sentence and its negation can be close in an embedding space. This paper derives the signal arithmetic and its limits. WP-02 describes the corresponding TruVector decision procedure.

## 1 Scope and quantities

A signal is an observation represented in a specified coordinate system. A statement is the particular proposition being read. A story is information spreading through a population. An origin is the source against which dependence is assessed; it can be a document producer, shared publication source, or reader model family. These objects must not be substituted for one another. Five documents can contain one statement, and four readers can evaluate the same document without creating four new document origins.

Lane Vector applies an engineering approach: define variables and units, state assumptions, propagate uncertainty, and evaluate predictions against prespecified criteria. Its information models use explicit statistical definitions rather than physical analogies.

Coordinates learned by an embedding model are numerical representations. Their dimensions are not automatically interpretable axes such as urgency or risk. The basis includes the provider, model identifier, accessible version, vector dimension, preprocessing, and normalization. Comparisons must use one compatible basis. A model change can alter the geometry and therefore requires a new measurement of the guard thresholds.

## 2 Direction relative to an outcome

Let x be a nonzero signal vector, let V = ||x||, and let w be a nonzero vector specifying a linear outcome mapping in the same basis. Suppose the conditional mean has the stated form E[y | x] = w transpose x, with no intercept. The dot product identity gives

$$E[y | x] = w^T x = V ||w|| cos(theta).$$

This is exact under the stated linear conditional-mean model. With an intercept b, the expression is b + V ||w|| cos(theta). A nonlinear outcome mapping requires its own model; the projection identity alone does not establish prediction accuracy. If V means a count of documents rather than the norm of x, multiplying it by cosine is a separate policy or modeling assumption that must be tested.

For a normalized outcome vector, the directional component is V cos(theta). Ten thousand units at 80 degrees yield about 1,736.5 projected units; eight hundred at 15 degrees yield about 772.7. The first is still larger in this example. The comparison reflects both magnitude and direction. At 60 degrees, 10,000 projected units become 5,000. These are geometrical calculations, not counts of verified support.

An outcome vector must be learned against observed outcomes or explicitly defined as a policy direction. A text embedding of a question is not automatically a fitted outcome vector. Likewise, cosine between a reader's reason and a statement does not supply the support or refute sign in WP-02. That sign comes from the reading.

![Projection illustration](figures/projection.png)

Figure 1. Projection in a declared two dimensional basis. The projected length is geometrical; using it as an outcome estimate additionally requires the linear model above.

## 3 Rate acceleration and sampling noise

For a vector series x_t sampled at interval h, a backward difference estimates rate and a second difference estimates acceleration:

$$v_t = (x_t - x_(t-h))/h.$$

$$a_t = (x_t - 2x_(t-h) + x_(t-2h))/h^2.$$

These are analytical quantities with units of the selected signal per time and per time squared. A second difference of a quadratic trajectory equals its constant acceleration. More generally, finite differences approximate derivatives with discretization error that depends on smoothness and the location to which the estimate is assigned. A backward second difference is naturally centered on the middle observation.

Let each scalar measurement error have variance sigma squared, independently across the three observations. Applying the second difference to the errors gives variance (1 + 4 + 1) sigma squared divided by h to the fourth power. Consequently,

$$sd(a_noise) = sqrt(6) sigma / h^2.$$

With sigma = 20 and h = 2, the standard deviation is 12.247. A true acceleration of 2 then has a signal to noise ratio of about 0.163. At h = 10, the noise standard deviation is about 0.490 and that ratio is about 4.082. A longer interval reduces this measurement-noise term but also changes resolution and can hide fast changes. It is not an instruction to sample as slowly as possible.

For stationary errors with lag-one correlation rho_1 and lag-two correlation rho_2,

$$Var(a_noise) = sigma^2 (6 - 8 rho_1 + 2 rho_2) / h^4.$$

For general covariance matrix Sigma over the three errors, the variance is c transpose Sigma c divided by h to the fourth power, where c = (1, -2, 1). The h scaling is conditional on how the covariance and measurement variance vary with sampling interval; a universal fixed constant cannot be assumed for every noise process.

![Acceleration illustration](figures/acceleration.png)

Figure 2. Noise in a second difference under independent errors. This curve is a calculation from sigma = 20, not a measured forecasting result.

A vector autoregression can model lagged associations among defined time series. Its fitted coefficients are not automatically causal effects. A forecasting test must separate fitting from future evaluation, define the alert horizon, and compare lead time at matched false-alarm rates. Temporal leakage, revised historical data, and changing embedding models can make an apparent early warning unreliable.

## 4 What the angle between texts carries

The preliminary comparison summaries report 30 reason pairs across five embedding models: ten pairs expressing the same point in different words, ten expressing opposite points, and ten unrelated pairs. The reported ranking measure for same-point versus opposite-point pairs is 0.29, 0.47, 0.74, 0.38, and 0.54 respectively. Every tested model reportedly separated same-subject pairs from unrelated pairs at 1.00 on that small set. These results support investigating a subject guard; they do not establish a universal direction detector or perfect separation on new material.

For 20 sentence-and-exact-negation pairs, the reported mean cosine similarities are 0.90, 0.78, 0.78, 0.93, and 0.90. All 100 model-pair evaluations reportedly exceeded 0.6. These are cosine values, not angles in degrees. The summaries do not include the individual vectors, pair texts, dispersion, or complete ranking calculations, so the values remain reported measurements pending reproduction from the underlying records.

The opposite-point examples reuse much of their partner's wording and change a clause. That construction limits generalization. The proposed 200-pair measurement needs varied paraphrases, numerical changes, entity substitutions, scope changes, and both high and low word overlap. HEROS documents negation sensitivity differences across sentence encoders [1]. SparseCL explores a specialized representation and metric for contradiction retrieval [2]. The justified conclusion is that the tested general embeddings should not be used as a standalone directional reading; it is not that every possible embedding method must fail.

![Embedding illustration](figures/embedding.png)

Figure 3. Same subject does not imply the same instruction. Both example texts can be close in a subject representation while requiring different readings. No measured coordinates are assigned to this schematic.

The working embedding choice is OpenAI text-embedding-3-small with 1,536 dimensions, subject to the full comparison. The embedding of a reason checks whether the reason concerns the statement; it cannot certify the logical adequacy of that reason. A separately versioned reading supplies support, refutation, or uncertainty. An action requires a separate reading of whether it carries out the instruction, because negation, recipient, amount, and scope can change without a large geometrical separation.

## 5 Dependence among origins

If two retrieved items share a latent origin, their agreement is not necessarily two independent observations. Conditional independence requires P(Z_1, Z_2 | H) = P(Z_1 | H) P(Z_2 | H). When an origin O is relevant, the joint quantity instead expands over O as the sum of P(Z_1, Z_2 | H, O) P(O | H). A posterior would also require the corresponding likelihood under alternatives to H and a prior. TruVector's current decision scores are not such a posterior.

WP-02 uses the cluster-sampling design effect to define an effective contribution for an origin group. Under equal marginal variance and exchangeable nonnegative within-group correlation lambda, a group of m observations has variance-equivalent size m / (1 + lambda(m - 1)). Its limiting value is 1/lambda for positive lambda. Treating a sum of these group contributions as a decision weight is an operational policy; it requires reliable grouping and examination of dependence between groups.

## 6 Research hypotheses and acceptance criteria

H1. Direction beats volume. A projection-weighted signal predicts conversion better than volume alone. Acceptance requires out-of-sample improvement over a volume baseline on a stated basis. The evaluation must identify the outcome, fitting procedure, uncertainty interval, and split by time or origin where appropriate.

H2. Acceleration is an early warning. The second derivative of mention volume identifies statements that will reach wide circulation, earlier than volume thresholds do. Acceptance requires improved lead time over volume-triggered alerts at matched false-alarm rates. Sampling noise, alert horizon, and retrospective selection must be controlled.

The domain-specific lambda hypothesis fails if estimated dependence does not improve held-out weighting or calibration relative to a single stated baseline. The origin-recovery hypothesis fails if missed shared origins or erroneous merges defeat the promised resistance to planted copies or suppress genuinely separate support. The multiple-level sharing hypothesis fails if an explicit hierarchy of document, publisher, and upstream origin does not improve held-out outcomes over one-level grouping.

The September paper also proposed stiff-aware models, least-effort paths, and symbolic recovery. Those remain optional, separately testable modeling questions: respectively, improvement over standard sequence models on held-out multiscale series; improvement over a Markov transition baseline; and expressions that generalize beyond their fitting set. None is needed to derive the projection, second difference, or design effect, and none is established by the embedding comparison.

## 7 Measurement requirements

A reproducible Lane Vector study needs a defined population, sampling interval, signal units, coordinate basis, origin definition, outcome labels, baselines, and frozen evaluation protocol. A propagation model additionally needs named states and transition rates. It may conserve a population assigned to states; copying text does not conserve the number of copies. A correction does not necessarily restore the prior belief state.

The eight reading measurements in WP-02 examine subject separation, negation, confidence calibration, reader dependence, basis sensitivity, off-subject reasons, planted support, and threshold selection. They connect the numerical representation to the decision procedure without assuming that similarity is truth or that a time derivative predicts events.

For a company-specific predictive search study, establish a baseline and repeat comparable measurements at a defined interval. Two observations measure change; at least three estimate a second difference. A longer series supports forecasting and seasonality controls. Record forecasts before subsequent observations and compare forecast error and business outcomes with a frozen baseline.

## Calculation appendix

The projection examples use cos(60 degrees) = 0.5, cos(80 degrees) approximately 0.173648, and cos(15 degrees) approximately 0.965926. Multiplying by the stated magnitudes gives 5,000, 1,736.48, and 772.74 respectively when ||w|| = 1.

For the second difference, independent errors have coefficients 1, -2, 1; the squared coefficients sum to 6. With sigma = 20, sqrt(6) sigma is 48.9898. Dividing by 2 squared gives 12.2474; dividing by 10 squared gives 0.489898. Correlated errors add twice each covariance product: -4 Cov(e_0,e_1) -4 Cov(e_1,e_2) +2 Cov(e_0,e_2), yielding the stationary expression in section 3.

For five known groups of 100 observations at lambda = 0.5, each group contributes 100 / 50.5 = 1.980198 and their summed policy weight is 9.900990. For 250 known groups of two at the same lambda, the sum is 250 times 2/1.5 = 333.333333. For 500 singleton groups, the sum is 500. These different scenarios explain the different detector figures; they are not competing estimates of one observed crowd.

## References

[1] Revealing the Blind Spot of Sentence Encoder Evaluation by HEROS. 2023. https://arxiv.org/abs/2306.05083. Examines negation and word-overlap diagnostics in sentence encoders.

[2] SparseCL Sparse Contrastive Learning for Contradiction Retrieval. 2024. https://arxiv.org/abs/2406.10746. A comparison direction for specialized contradiction retrieval.

[3] Campbell, M. K., et al. CONSORT 2010 statement extension to cluster randomised trials. BMJ 345, e5661. 2012. https://www.bmj.com/content/345/bmj.e5661. The equal-cluster design effect and its assumptions.

[4] Lane, M. B. TruVector Decision Engine v2 Meaning Not Words; Writer's Brief TruVector and Lane Vector working papers the new research path. 5 October 2026. Internal source documents for the reported comparisons and revised architecture.

## Suggested citation

Lane, M. B. (2026). Lane Vector signal direction rate and source structure (Working paper WP-01, revised 5 October 2026). InTellMe AI.
