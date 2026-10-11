# Lane Vector and TruVector validation framework

Companion research methods | Michael Brandon Lane | InTellMe AI | 11 October 2026

## Purpose

This companion defines how the Lane Vector and TruVector research is measured. WP-01 develops signal direction, temporal differences, sampling noise, and source structure. WP-02 specifies the reading-based decision procedure. WP-03 presents the research in plain language. This document connects the mathematical definitions to reproducible measurements and to acceptance criteria at the level of a whole workflow, and it states each criterion before the measurement is made.

**In plain terms.** This is the rule book for the experiments: what gets measured, what counts as passing, and what has to be written down so that someone else can repeat it.

## Research contribution

The program evaluates an integrated procedure in which readers interpret meaning, embeddings check subject relevance, and arithmetic combines the readings under dependence-aware weights. The mathematical components (projection, finite differences, the cluster-sampling design effect, entropy) are established. The research contribution is their operational integration and its measured performance against simpler alternatives.

Document grouping and reader grouping are separate layers. A document's source structure persists across multiple readings. Reader families supply the initial grouping; empirical dependence measurements test that policy. Every assumption is recorded so that an improvement can be attributed to a specific component.

## Mathematical specification

Projection uses a declared linear outcome mapping in a compatible coordinate basis. Finite-difference acceleration carries measurement-noise propagation; correlated errors use the corresponding covariance expression. Effective contribution is defined per origin group as $m/(1 + \lambda(m - 1))$, with a ceiling of $1/\lambda$ for positive $\lambda$. Summed contributions are decision weights under the stated grouping policy.

Direction $D$ is the difference between the normalized support and refute shares. Certainty $C$ describes how concentrated the support, refute, and unsure shares are; it is distinct from a calibrated probability of correctness. A common confidence factor cancels in normalized shares, so absolute reliability is a separate evaluation dimension.

Cosine similarity is a subject guard. Explicit readings supply stance and action interpretation. The unsupported-reader flag is an independent veto on Allow. Policies for zero-weight sets and for action-input completeness are documented separately from verified implementation behavior and are checked for conformance.

## First comparison

The first comparison of 60 statements is balanced across true, false, and unsettled labels. The totals are 14 of 60 for the earlier word-count gate and 58 of 60 for the reading-based rule, with 239 valid replies from 240 requests and quorum on every item. The comparison is statement-only and does not evaluate the action policy.

Two unsettled items state an unproven result as proven and were refuted by the readers; they are counted as misses under the original labels, and the labeling rule for later sets is to label the statement as worded. The item records, labels, full prompts, model replies, and intermediate scores exist as files and accompany any reproduction. The figures describe this set; they are not estimates of accuracy in use.

The angle measurement was made twice across five embedding models: on 30 reason pairs and 20 exact-negation pairs, and on a larger set of 210 reason pairs and 50 negation pairs built so that shared words could not decide the result. Both support the subject-guard design: same-subject separation of 0.997 to 1.000 against 0.977 for word overlap, and no usable separation of a point from its opposite. Pair texts, per-pair cosines, and score definitions are kept with the records.

## Reproducibility package

Each study keeps a versioned manifest: item wording, label instructions, original labels, review history, file names, hashes, dates, model identifiers, full prompts, dimensions, preprocessing, and inclusion rules. Reader records hold raw replies, routing, retries, confidence values, origin assignments, dependence parameters, flags, and action readings where applicable.

A reference calculation recomputes effective weights, normalized shares, $D$, $C$, guards, quorum, thresholds, and final decisions from the stored inputs, and conformance is checked at every intermediate quantity. Model substitutions and prompt revisions are recorded as changes to the study configuration.

## Evaluation design

Independent labels are established before scoring. Label instructions distinguish support in the available material, correctness of the statement, and uncertainty. Agreement between labelers is measured and reported where several are used. Splits by topic, source, and time address leakage between related items.

Confidence corrections and thresholds are fitted on development data and frozen before evaluation. Identical cached replies isolate the effect of a scoring change; a prompt change is tested in a separate arm. A further untouched holdout is reserved whenever the method changes after an evaluation.

Baselines include an unweighted reader majority, label-only weights, aggregation without origin discounts, retrieval deduplication, and specialist entailment or contradiction methods where relevant. Reporting covers false Allow, false Block, Review rate, action errors, missing replies, subgroup performance, and uncertainty intervals. Coverage and error are read together.

## Measurement workstreams

| Workstream | Measurement | What passing means |
| --- | --- | --- |
| Subject relevance | Same-subject and unrelated pairs with varied wording | Held-out improvement over word overlap |
| Negation and instruction reading | Negation, entities, quantities, conditions, reversals | Improvement over cosine-only decisions |
| Confidence calibration | Reader corrections fitted on development data | Held-out calibration better than label-only weights |
| Reader dependence | Within-family and across-family response or error correlation | Decision improvement after accounting for item difficulty |
| Basis sensitivity | Frozen readings scored under two embedding bases | Fewer than five percent of decisions flip |
| Reason relevance | Ordinary and deliberately off-subject replies | Decision value beyond labels alone |
| Origin recovery | Known source maps, copies, paraphrases, syndication | Repetition resistance while preserving separate support |
| Threshold policy | Frozen rules against majority and deduplication | Prespecified error and Review-coverage targets |

## Workflow-level testing

Retrieval tests examine representative passage selection, contradictory passages, ordering, and the context actually delivered to the model. Controlled origin maps test false splits and over-merges. Repetition weights and prompt-injection resistance are evaluated separately.

Action tests include changes to recipient, amount, date, entity, scope, negation, and side effects. Subject guards, explicit action readings, and application permissions are assessed as distinct checks. Missing inputs and quorum failures produce recorded reasons consistent with the decision policy.

Temporal tests define signal units, sampling interval, noise model, alert horizon, and the future evaluation period. Projection is compared with volume alone. Acceleration is compared with volume thresholds at matched false-alarm rates.

A predictive search study for one organization establishes a baseline, defines a repeat interval, and holds metric definitions constant. Two observations establish change and at least three support acceleration. Forecasts are recorded before the next interval and evaluated against what follows; longer histories support seasonality and uncertainty analysis.

## Figures and quantitative presentation

Figures are calculated illustrations or explicitly labeled schematics. Source structure and dependence parameters accompany every effective-weight total. Retrieval shares are normalized weights, not a measured safety percentage. Consensus illustrations assume a declared origin map and do not infer source authenticity from a count.

Graphical minimum widths are display properties and are never substituted into calculations. Study figures preserve original labels and totals. Definitions, assumptions, measured observations, and planned measurements are identified consistently throughout the research package.

## Planned measurements and their records

Reported in WP-04 (Study TV-001): the 300-statement comparison, 282 of 300 right decisions for meaning-based scoring against 101 of 300 for word-overlap scoring on the same stored replies, held in the study record (the dated plan and its amendments, the 300 statements with labels and sources, the reason pairs and negation pairs, every stored reply, the per-statement decisions under both scorings, the per-pair scores, and the analysis code); the set was built by the same team, so the result describes that set.

The next measurements are, in order: the same comparison, with the same frozen settings, on a public benchmark of labelled statements assembled by other researchers, disproved as a general result if meaning-based scoring does not make more right decisions than word-overlap scoring on such a set; the confidence correction, the reader-dependence estimate, and the basis-sensitivity count on the 300-statement set; the planted-copy test; and the frozen threshold refit with its held-out evaluation. Workflow tests then establish operating criteria for retrieval, reader aggregation, and action assessment in a particular application.

Each completed measurement produces a versioned record with its configuration, its acceptance criterion as written beforehand, the result, its uncertainty, and the policy decision that followed. That record, not a summary, is the unit of progress.

## Methodological references

Campbell, M. K., Piaggio, G., Elbourne, D. R., and Altman, D. G. Consort 2010 statement: extension to cluster randomised trials. BMJ 345, e5661. 2012. https://www.bmj.com/content/345/bmj.e5661.

Chiang, C.-H., Chuang, Y.-S., Glass, J., and Lee, H. Revealing the Blind Spot of Sentence Encoder Evaluation by HEROS. 2023. https://arxiv.org/abs/2306.05083.

Xu, H., Lin, Z., Sun, Y., Chang, K.-W., and Indyk, P. SparseCL: Sparse Contrastive Learning for Contradiction Retrieval. 2024. https://arxiv.org/abs/2406.10746.

Guo, C., Pleiss, G., Sun, Y., and Weinberger, K. Q. On Calibration of Modern Neural Networks. ICML 2017, PMLR 70, 1321–1330. https://proceedings.mlr.press/v70/guo17a.html.
