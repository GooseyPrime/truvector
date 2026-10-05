# TruVector source dependence and decisions from model readings

Working paper WP-02 | Michael Brandon Lane | InTellMe AI | 5 October 2026

## Abstract

TruVector is a proposed checkpoint between retrieved material and an AI action. Its decision procedure separates language reading from arithmetic. Readers supply a stance, confidence, and reason for a statement, and separately read whether a proposed action carries out its instruction. Arithmetic discounts repeated origins, forms support, refute, and unsure shares, and emits Allow, Review, or Block with a reconstructable record. Embedding similarity serves as a subject guard, not a test of agreement or permission.

The procedure replaces a word-overlap gate that does not use the readers' stances. The preliminary study summaries report a comparison of 14 correct decisions out of 60 for that gate and 58 out of 60 for the replacement. This preliminary, balanced 60-statement comparison establishes a focused feasibility signal. Item-level reproduction and independent evaluation on more demanding material are the next validation milestones. The decision score is a policy output, not a probability that a statement is true. The central research questions are whether the readings, origin grouping, confidence correction, and guard thresholds improve decisions on held-out material.

## 1 The problem

Five copies of one statement do not supply five independent confirmations. Nor do different words necessarily mean different conclusions. A useful checkpoint must read support and refutation, retain uncertainty, discount shared origins, and check the particular action. Repetition alone should not convert weak support into permission.

An independent numerical layer makes each decision reconstructable from reader outputs, source assignments, weights, and thresholds. Reader accuracy, source grouping, and confidence calibration are evaluated as distinct components, supporting targeted improvements and controlled comparisons.

## 2 Conditional dependence and likelihood structure

Let H be a statement and Z_1, Z_2 retrieved observations. Factorization is valid only under the required conditional independence:

$$P(Z_1, Z_2 | H) = P(Z_1 | H) P(Z_2 | H).$$

If a shared origin O explains their association, the correct expansion is

$$P(Z_1, Z_2 | H) = sum_O P(Z_1, Z_2 | H, O) P(O | H).$$

Conditional independence within each value of O does not generally restore independence after O is marginalized. Distinct URLs, accounts, providers, or model families are useful grouping signals, but do not prove statistical independence. A full posterior needs an explicit likelihood model, alternatives to H, and priors. The rule below is deliberately a decision policy rather than an implicit posterior.

## 3 Effective contribution of one origin

For m observations of equal variance sigma squared with exchangeable pairwise correlation lambda, the variance of their mean is sigma squared times (1 + lambda(m - 1)) / m. Equating this to the variance of a mean of independent observations gives

$$n_eff(m, lambda) = m / (1 + lambda(m - 1)).$$

TruVector uses the nonnegative dependence range 0 <= lambda <= 1. At zero, the formula returns m. At one, it returns one. For positive lambda, it approaches 1/lambda as m grows. Its derivative with respect to m is (1 - lambda) / (1 + lambda(m - 1)) squared, so additional copies give a diminishing increment. Lambda is a correlation parameter for a defined variable and population, not a cosine similarity or a subjective synonym for coordination.

For origin groups g, the policy totals E_origin = sum_g n_eff(m_g, lambda_g), and assigns each reply b_i = n_eff(m_g, lambda_g) / m_g. These contributions are effective weight units, not a discovered number of real operators. Summing them is a policy that assumes sufficient separation between groups; it is not automatically the exact effective sample size of an arbitrary weighted estimator.

The working defaults in the specification are lambda = 0.9 within one reader family on one prompt and zero across families. They are declared assumptions pending measurement. A family boundary does not eliminate shared training data, tools, retrieved documents, or prompts. Exact duplicated replies should also be tested at lambda = 1. A family-independent baseline is necessary to evaluate whether the discount actually helps.

![Origins illustration](figures/origins.png)

Figure 1. Origin-group contribution as copies are added. The curves calculate the formula for declared lambda values. Recovering origins and estimating lambda are separate tasks.

### Retrieved origins and reader origins

Document grouping and reader grouping are two distinct layers. Four families reading one syndicated document remain four readings of one document origin. Retrieved grouping should use content hashes, document identity, original publication, byline, upstream feed, timestamps, and shared-copy indicators. Reader grouping should record family, exact model, prompt, provider route, and repeated run identity. Uncertain group assignments need sensitivity checks rather than silently assuming separation.

The source-origin ceiling protects against repetition within a correctly recovered group. Splitting one copying campaign into ten false groups can increase the summed contribution; a formula evaluated on the wrong groups cannot recover the missing relationship. Hierarchical sharing is therefore a measurement problem, not a reason to multiply several discounts without deriving the resulting weight.

## 4 The word-count method being replaced

The frozen method described in the specification requests stance, confidence, and reason from N readers and requires K valid replies. Below quorum it returns Block. Let W_i be the word set of reply i and J the mean pairwise Jaccard overlap. Let M be the number of occurrences of the nine markers and T the total number of words. The gate uses

$$J = mean_(i<j) |W_i intersection W_j| / |W_i union W_j|.$$

$$delta = min(10 M / T, 1); p_0 = clamp(J - delta, 0, 1).$$

The nine markers are however, but, contradict, disagree, incorrect, wrong, false, not true, and inaccurate. Allow begins at 0.75, Review at 0.45, and Block is below 0.45. Exact tokenization, phrase matching, empty word-set behavior, and case handling belong in the frozen implementation record; the simplified equations cannot reconstruct those details by themselves.

The method also reports p_1 = 0.5 S + 0.3 C + 0.2(1 - delta), using confidence-weighted stance shares. The specification says p_1 does not drive the gate. Unanimous refutation without markers gives p_1 = 0.50, as does unanimous uncertainty. Accordingly, p_1 is retained as descriptive telemetry rather than a correctness probability.

Three paraphrased supportive reasons with J = 0.15 and delta = 0.08 yield p_0 = 0.07 and Block. Three literal copies with J = 1 and no markers yield Allow. A phrase such as "not false" can raise marker density despite supporting the statement. The replacement therefore uses the supplied stance and a separate action reading instead of treating word overlap or marker occurrence as meaning.

## 5 Readings and coordinates

Each stance request asks only whether a statement is supported, refuted, or unsure in the supplied context. It returns a stance, raw confidence, and reason. It should distinguish support in retrieved material from an answer based on the model's internal knowledge. An action request separately asks whether the proposed action carries out the instruction, returning yes, no, or partly, with confidence and a reason. Instruction-following is a different question from whether an action is safe or authorized in the application.

One pinned embedding model maps the statement, each reason, instruction, and action to vectors. Cosine similarity is dot(x,y) / (||x|| ||y||). Missing, nonfinite, zero-length, or incompatible vectors do not produce a usable similarity. Within a record, comparisons must use one basis; a fallback to a different embedding model requires re-embedding all compared texts and recording the change.

For reply i, let f_i be the recorded correction of its raw confidence and let t_i be a subject factor. The v2.1 starting factor is 0.25 if cosine(reason_i, statement) is below 0.4 and 1 otherwise. The decision weight is

$$w_i = b_i f_i t_i; W = sum_i w_i.$$

If W is positive, support S, refutation R, and uncertainty U are the sums of these weights for each stance divided by W. They sum to one. At W = 0, shares and entropy are undefined. The proposed policy routes a zero-weight set with valid quorum to Review, subject to implementation conformance testing.

The mean pairwise cosine between reasons, G_reason, guards whether the reasons concern the same subject. Its starting threshold is 0.6. It does not show that they agree on why: reasons for support and refutation can concern the same subject. Reason validity or logical entailment requires a separate reading and its own evaluation.

## 6 Direction and concentration

Direction and entropy-based concentration are kept separate:

$$D = S - R.$$

$$C = 1 + (S ln S + R ln R + U ln U) / ln 3.$$

The convention is 0 ln 0 = 0. D lies between -1 and 1, and C between zero and one. C measures concentration of the three labels. All support yields D = 1 and C = 1; all refute yields D = -1 and C = 1; all unsure yields D = 0 and C = 1. Equal thirds yield D = 0 and C = 0. Thus unanimous uncertainty is concentrated uncertainty, not a reliable answer.

Normalizing equal confidences removes their common magnitude. Four supporting replies at confidence 0.1 produce the same S, D, and C as four at confidence 0.9. Absolute confidence and total usable weight are separate evaluation dimensions. C is reported as label concentration; confidence calibration is assessed independently.

## 7 The action reading and decision rule

Let A_yes, A_no, and A_partly be weighted shares of valid action readings, formed with documented origin and confidence weights. The stance-specific reason factor should not silently be reused for the action question; any action-specific factor must be defined separately. Let G_action be cosine(instruction, action). Its starting subject threshold is 0.7. High G_action is insufficient when the action reverses the instruction or changes a critical field.

![Action illustration](figures/action.png)

Figure 2. An action check combines an explicit reading with a subject guard. A high similarity cannot override a reading that the action does not carry out the instruction.

The v2.1 rule is evaluated in the following order. Preserve the specification's quorum requirement: fewer than K valid stance replies gives Block with a quorum reason. With a valid quorum, Block if A_no >= 0.5, or if D <= -0.5 and C >= 0.5. Otherwise, Allow only if D >= 0.5, C >= 0.5, E_origin >= 2, G_reason >= 0.6, no unsupported-reader flag is set, G_action >= 0.7, and A_yes >= 0.5. Every other outcome is Review, with each failed condition listed.

These initial thresholds define the reference research policy. Deployment-specific threshold selection uses development data, followed by a frozen policy and independent holdout evaluation.

The proposed action-input policy requires K valid action replies for Allow. Missing instructions or actions, invalid action denominators, and unavailable guards prevent Allow. Implementation conformance to this policy remains a validation milestone. Application permissions and safety constraints are checked separately.

In a statement-only measurement there is no action to permit. A separate assessment can report the stance-derived Allow, Review, or Block category with action checks explicitly marked not applicable. Such a category must not be presented as permission to execute. The reported 60-statement comparison has no actions and cannot measure the action rule.

## 8 Support in retrieved material

When retrieved material is supplied, readers should identify which document passages support or refute the statement and distinguish their internal knowledge from those passages. Documents must be counted by their origins before document support is summarized. The unsupported-reader flag means a reader supports the statement without support in the available independently grouped material; it does not mean the statement is necessarily false.

The unsupported-reader flag is reported separately from C and vetoes Allow. This preserves the defined concentration measure. Any additional numerical penalty is evaluated as a versioned policy extension.

![Firewall illustration](figures/firewall.png)

Figure 3. Fifty separate singleton document origins and fifty copies from one known origin at lambda = 0.95 give contributions 50 and 1.051525. Their normalized shares are about 97.94 and 2.06 percent. These are weights, not a measured percentage of safe text or a guarantee that a model will ignore the repeated content.

A retrieval gateway can use the weights to select or annotate material. That requires a concrete policy for representative passages, contradictory passages, ordering, and actual context delivery. A fractional contribution is not a fractional document automatically removed by a formula. Discounting a copied document also does not neutralize instructions embedded in that document. Prompt-injection resistance and source authenticity need separate evaluation.

## 9 Worked comparisons

These cases are analytical examples using declared inputs. They do not substitute for the stored reader replies. Quorum is satisfied; action readings are yes, subject guards pass, and the unsupported-reader flag is absent unless noted. Confidence is equal at 0.9. The six core cases are A to F; a separate marker-scope example uses explicit illustrative word counts.

| Case | Declared readings and groups | p0 | Old result | Effective weight | D | C | Revised result |
| --- | --- | --- | --- | --- | --- | --- | --- |
| A | Three refute, groups of 2 and 1; J 0.15, density 0.50 | 0.00 | Block | 2.0526 | -1.0000 | 1.0000 | Block |
| B | Three support, groups of 2 and 1; J 0.15, density 0.08 | 0.07 | Block | 2.0526 | 1.0000 | 1.0000 | Allow |
| C | Three copied support replies, one family; J 1, no markers | 1.00 | Allow | 1.0714 | 1.0000 | 1.0000 | Review |
| D | Three refute, groups of 2 and 1; J 0.15, no markers | 0.15 | Block | 2.0526 | -1.0000 | 1.0000 | Block |
| E | Two support, one refute; three families; J 0.15, density 0.08 | 0.07 | Block | 3.0000 | 0.3333 | 0.4206 | Review |
| F | Two support in one family, one refute in another | - | - | 2.0526 | 0.0256 | 0.3694 | Review |

Case F specifies the revised calculation only. An earlier-gate score additionally requires word-overlap and marker-density inputs.

For the marker trap, three supportive 40-word replies with J = 0.15 and exactly one total occurrence of "false" inside "not false" would have density 10/120 = 0.083333 and p_0 = 0.066667. The revised result would be Allow if the readers are grouped as 2 and 1 and all other conditions pass. These counts define the analytical illustration.

Two additional cases illustrate guard behavior. Three supports with G_reason = 0.3 produce Review despite D = C = 1. This is an off-subject concern, not demonstrated disagreement about reasoning. A supported statement paired with an action at cosine 0.26 produces Review if action readings do not already require Block. Conversely, an action with cosine 0.9 but a weighted no share of 0.6 produces Block.

![Consensus illustration](figures/consensus.png)

Figure 4. Ten singleton supporting origins versus 90 refuting replies in one correctly identified origin at lambda = 0.9. The weights are 10 versus 1.109741. The directional weight favors the singleton side; arithmetic alone does not establish that those ten are honest or independent.

## 10 Reported comparison and subject measurements

The source summaries report 60 statements, with 20 labeled true, 20 false, and 20 unsettled, read by four pinned readers. They report 239 valid returns from 240 requests and quorum on all 60. Old scoring allowed none of the true group, blocked 14 and held 6; it blocked 14 of the false group and held 6; and it blocked all 20 unsettled items. The replacement allowed all 20 true items, blocked all 20 false items, and held 18 unsettled items while blocking two. The reported totals are therefore 14/60 and 58/60 under those labels.

The two disputed unsettled items reportedly state an unproven result as proven. The proposed labeling correction is to label the statement as worded, rather than its broader subject. This is a legitimate question for label review, but correcting labels after seeing predictions must be recorded separately. The reported total remains 58/60 under the original labels. Subsequent evaluations use independently established labels and a frozen corpus.

The preliminary items were described as drafted from public records. Independent label provenance and inter-rater agreement are designated requirements for the next evaluation; the current comparison is reported under its original study labels.

| Embedding model | Same point mean | Opposite point mean | Unrelated mean | Same versus opposite ranking | Negation mean |
| --- | --- | --- | --- | --- | --- |
| OpenAI text-embedding-3-small | 0.73 | 0.77 | 0.06 | 0.29 | 0.90 |
| OpenAI text-embedding-3-large | 0.75 | 0.74 | 0.06 | 0.47 | 0.78 |
| Qwen3 embedding 8B | 0.84 | 0.80 | 0.21 | 0.74 | 0.78 |
| Google gemini-embedding-001 | 0.85 | 0.87 | 0.51 | 0.38 | 0.93 |
| BAAI bge-m3 | 0.81 | 0.81 | 0.35 | 0.54 | 0.90 |

The reported reason comparison uses 30 pairs and the negation comparison 20 pairs per model. Every model reportedly separates subject-related from unrelated pairs at 1.00 in that small set, and all 100 negation evaluations exceed 0.6. The opposite-point pairs retain substantial word overlap, limiting the direction finding. A ranking measure of 0.74 for Qwen3 suggests some separation in this set; directional separation is therefore model-specific in this comparison. The working design still reserves direction for readers because these measurements do not justify a general cosine-only decision rule.

## 11 Study configuration and reproducibility

The specified readers are openai/gpt-5.4-mini, anthropic/claude-haiku-4.5, google/gemini-2.5-flash, and deepseek/deepseek-v3.2, with N = 4, K = 3, and temperature zero. These identifiers describe the reported study configuration. Stance prompt version is stance-only-2026-10-05; action prompt version is action-check-2026-10-05. Full prompt text, model revision where available, routing, retries, and raw replies must accompany a reproduction. A fallback model changes the reader set and must be disclosed.

The working basis is OpenAI text-embedding-3-small, 1,536 dimensions. A record includes all compared vectors or a stable archived reference, normalization, raw and corrected confidences, group assignment, lambda and its status, weights, S/R/U, D/C, subject scores, action readings, flags, quorum, thresholds, and every reason for the decision. Temperature zero alone does not guarantee identical outputs across provider revisions or routes.

The old and revised scoring must operate on identical stored replies to isolate scoring differences. A change from the old combined statement-and-action prompt to the stance-only prompt is a second intervention. Compare scoring on a frozen reply corpus first; compare prompt changes in a separate controlled arm. Comparisons should report per-category errors and abstention or Review rates, not accuracy alone.

## 12 Eight research questions

R1. Subject guard. Compare at least three embedding models from two providers on same-point, opposite-point, and unrelated pairs, controlling word overlap. The subject-guard hypothesis fails if the best model separates same-subject from unrelated no better than word overlap on held-out pairs. Direction separation is measured separately and does not redefine subject separation.

R2. Negation. Compare reader classifications with a cosine-threshold baseline on the same negation pairs. The proposed advantage of reading fails if readers are no more accurate. Examine double negation, modal verbs, quantifiers, changed entities, numerical conditions, and instruction reversals. Specialized entailment or contradiction methods are additional baselines. The expanded negation set is sized and frozen before evaluation.

R3. Confidence correction. Fit each reader's correction on development data and evaluate Brier score and reliability on held-out items. The correction fails if it does not improve the prespecified score; use label-only weights as the baseline. A scalar confidence in the selected label supports a binary correctness Brier score. A multiclass Brier score requires a full three-class probability vector, which the present reply schema does not provide. Alternative confidence policies are evaluated separately.

R4. Reader dependence. Measure repeated-reader correlations within families and across families on a defined response or error variable, accounting for item difficulty. The family-grouping hypothesis fails if within-family dependence is not higher or the grouped policy does not improve held-out decisions. Common dependence and covariance-aware alternatives are assessed alongside family grouping.

R5. Basis sensitivity. Re-score frozen readings using two bases and compare decision flips. More than five percent flips defeats the proposed stability criterion and calls for basis-specific guard calibration. Report which decisions flip and whether they improve or worsen errors; stability alone is not correctness.

R6. Off-subject reasons. Test whether the reason guard distinguishes deliberately off-subject readings from ordinary readings and improves held-out decisions beyond labels alone. The proposed benefit fails if the guard does not distinguish these groups or produces no prespecified decision improvement. A logical-quality test is separate from subject relevance.

R7. Planted copies. Add dependent documents from controlled origins, including paraphrases and origin disguises. The within-origin bound fails operationally if a correctly counted controlled origin exceeds 1/lambda; that arithmetic condition alone is not a security test. The complete method also fails if false Allow rates rise beyond the prespecified tolerance, or if origin errors defeat repetition resistance. Preserve legitimate separate support and contradictory passages. An attack at ten, thirty, or fifty percent of retrieved material tests the pipeline, not merely the formula.

R8. Decision thresholds. Fit thresholds only on development data and freeze them for held-out comparison against unweighted reader majority, starting thresholds, and a plain retrieval deduplication baseline. The proposed rule fails if it does not outperform the prespecified majority baseline under the selected error criterion. Report false Allow, false Block, Review, action-error, and subgroup rates with uncertainty. Reserve a separate final holdout if development choices continue after the first evaluation.

## 13 Decision interpretation and operating scope

The decision record exposes reader outputs, source assignments, weights, subject checks, and action assessments. It identifies unsupported readings, off-subject responses, and disagreement. The operating scope is policy-based assessment: source authenticity, reader dependence, logical adequacy, and adversarial robustness are separately evaluated properties.

Quorum defines input completeness; correlated-error evaluation establishes the value of reader diversity. Allow means the specified policy conditions passed. Review identifies uncertainty or missing conditions. Block stops execution under the checkpoint policy and can result from a technical quorum failure as well as substantive refutation. The record must distinguish those reasons.

## Calculation appendix

For a two-reply family at lambda = 0.9, n_eff = 2/1.9 = 1.05263158 and each reply's base weight is 0.52631579. Adding a singleton gives E_origin = 2.05263158. Three copies from one family give 3/2.8 = 1.07142857. Equal confidence multiplies every weight by 0.9 and cancels in normalized shares.

Cases A and D have R = 1, S = U = 0; hence D = -1 and C = 1. B and C have S = 1; hence D = C = 1. B passes the effective-origin condition; C does not. In E, S = 2/3 and R = 1/3, so D = 1/3 and C = 1 + ((2/3)ln(2/3) + (1/3)ln(1/3))/ln(3) = 0.42061984.

In F, the two supporters total 20/19 weight and the refuter has 1. Thus S = 20/39 = 0.51282051, R = 19/39 = 0.48717949, D = 1/39 = 0.02564103, and C = 0.36936950. Cases E and F therefore produce Review under the stated bars.

For the retrieval example, 50/(1 + 0.95 times 49) = 1.05152471. Total weight with 50 singleton sources is 51.05152471, so the singleton share is 0.97940268. For 90 cloned readings at lambda = 0.9, n_eff = 90/81.1 = 1.10974106. With ten singleton supports and these refuting clones, S = 0.90011099, R = 0.09988901, and D = 0.80022198. These calculations assume the origin map is correct.

## References

[1] Campbell, M. K., et al. CONSORT 2010 statement extension to cluster randomised trials. BMJ 345, e5661. 2012. https://www.bmj.com/content/345/bmj.e5661. Supports the cluster-sampling design effect; transferring it to decision weights requires the assumptions stated here.

[2] Revealing the Blind Spot of Sentence Encoder Evaluation by HEROS. 2023. https://arxiv.org/abs/2306.05083. Negation sensitivity differs among encoders and training conditions.

[3] SparseCL Sparse Contrastive Learning for Contradiction Retrieval. 2024. https://arxiv.org/abs/2406.10746. Specialized contradiction retrieval offers a relevant comparison method.

[4] Guo, C., Pleiss, G., Sun, Y., and Weinberger, K. Q. On Calibration of Modern Neural Networks. ICML 2017, PMLR 70, 1321-1330. https://proceedings.mlr.press/v70/guo17a.html. Provides the methodological basis for empirical confidence calibration.

[5] Lane, M. B. TruVector Decision Engine v2 Meaning Not Words; Writer's Brief TruVector and Lane Vector working papers the new research path. 5 October 2026. Sources of the replacement procedure and reported comparison summaries.

## Suggested citation

Lane, M. B. (2026). TruVector source dependence and decisions from model readings (Working paper WP-02, revised 5 October 2026). InTellMe AI.
