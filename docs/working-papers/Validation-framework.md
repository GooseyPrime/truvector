# Lane Vector and TruVector validation framework

Companion research methods | InTellMe AI | 5 October 2026

## Purpose

This companion defines the validation milestones for Lane Vector and TruVector. WP-01 develops signal direction, temporal differences, sampling noise, and source structure. WP-02 specifies the reader-based decision procedure. WP-03 presents the research thesis, preliminary results, and prospective applications. Together they connect mathematical definitions to reproducible measurements and workflow-level acceptance criteria.

## Research contribution

The program evaluates an integrated procedure in which readers interpret meaning, embeddings assess subject relevance, and arithmetic combines classifications under dependence-aware weights. The established mathematical components are projection, finite differences, cluster-sampling design effects, and entropy. The research contribution lies in their operational integration and measured performance against simpler alternatives.

Document grouping and reader grouping are separate layers. A document's source structure persists across multiple readings. Reader families supply initial grouping information, with empirical dependence measurements used to evaluate that policy. The method records assumptions so improvements can be attributed to specific components.

## Mathematical specification

Projection uses a declared linear outcome mapping in a compatible coordinate basis. Finite-difference acceleration includes measurement-noise propagation; correlated errors use the corresponding covariance expression. Effective contribution is defined per origin group as m/(1 + lambda(m - 1)), with a ceiling of 1/lambda when lambda is positive. Summed contributions are decision weights under the stated grouping policy.

Direction D measures the difference between normalized support and refutation. Concentration C describes the distribution of support, refutation, and uncertainty labels. C is distinct from calibrated correctness probability. Equal common confidence factors cancel in normalized shares; absolute reliability is therefore a separate evaluation dimension.

Cosine similarity is a subject guard. Explicit readings supply stance and action interpretation. The unsupported-reader flag is an independent Allow veto. Proposed policies for zero-weight sets and action-input completeness are documented separately from verified implementation behavior and require conformance checks.

## Preliminary comparison

The reported 60-statement comparison is balanced across true, false, and unsettled labels. The reported totals are 14/60 for the earlier gate and 58/60 for the replacement, with 239 valid replies from 240 requests and quorum on every item. The comparison is statement-only and does not evaluate the action policy.

Two labels require independent review of the exact item wording. The original 58/60 total remains the reporting basis. Raw item records, label provenance, full prompts, model replies, and intermediate scores are required for independent reproduction. The current figures are preliminary reported results rather than estimates of deployment accuracy.

The embedding summary covers 30 reason pairs and 20 exact-negation pairs per model across five models. These measurements motivate the subject-guard design. Broader evaluation will vary wording overlap, entity and quantity changes, scope, and negation structure. Pair-level inputs, vectors, score definitions, and uncertainty estimates complete the reproduction package.

## Reproducibility package

Each study maintains a versioned manifest containing item wording, label instructions, original labels, review history, filenames, hashes, dates, model identifiers, full prompts, dimensions, preprocessing, and inclusion rules. Reader records contain raw replies, routing, retries, confidence values, source assignments, dependence parameters, flags, and action assessments where applicable.

A reference calculation recomputes effective weights, normalized shares, D, C, guards, quorum, thresholds, and final decisions from stored inputs. Conformance is checked at each intermediate quantity. Model substitutions and prompt revisions are recorded as changes to the study configuration.

## Evaluation design

Independent labels are established before scoring. Label instructions distinguish support in available material, statement correctness, and uncertainty. Multi-rater agreement is measured where multiple labelers are used. Topic, source, and time splits address related-item leakage.

Confidence corrections and thresholds are fitted on development data and frozen before evaluation. Identical cached replies isolate the effect of scoring changes. Prompt changes are tested in a separate arm. A further untouched holdout is reserved when the method changes after an evaluation.

Baselines include unweighted reader majority, label-only weights, aggregation without origin discounts, retrieval deduplication, and specialist entailment or contradiction methods where relevant. Reporting includes false Allow, false Block, Review rate, action errors, missing replies, subgroup performance, and uncertainty intervals. Coverage and error are evaluated together.

## Validation workstreams

| Workstream | Measurement | Acceptance focus |
| --- | --- | --- |
| Subject relevance | Same-subject and unrelated pairs with varied wording | Holdout improvement over word overlap |
| Negation and instruction reading | Negation, entities, quantities, conditions and reversals | Improvement over cosine-only decisions |
| Confidence calibration | Reader corrections fitted on development data | Holdout calibration relative to label-only weights |
| Reader dependence | Within-family and across-family response or error correlations | Decision improvement after accounting for item difficulty |
| Basis sensitivity | Frozen readings evaluated across embedding bases | Prespecified stability and error criteria |
| Reason relevance | Ordinary and deliberately off-subject replies | Incremental decision value beyond labels |
| Origin recovery | Known source maps, copies, paraphrases and syndication | Repetition resistance while preserving separate support |
| Threshold policy | Frozen rules compared with majority and deduplication | Prespecified error and Review coverage targets |

## Workflow-level testing

Retrieval tests examine representative passage selection, contradictory passages, ordering, and the actual context delivered to the model. Controlled origin maps test false splits and over-merges. Repetition weights and prompt-injection resistance are evaluated separately.

Action tests include changes to recipient, amount, date, entity, scope, negation, and side effects. Subject guards, explicit action readings, and application permissions are assessed as distinct checks. Missing inputs and quorum failures produce recorded reasons consistent with the decision policy.

Temporal tests define signal units, sampling interval, noise model, alert horizon, and future evaluation period. Projection is compared with volume alone. Acceleration is compared with volume thresholds at matched false-alarm rates. These tests determine predictive utility for the selected domain.

Company-specific predictive search testing establishes a baseline, defines a repeat measurement interval, and holds metric definitions consistent. Two observations establish change and at least three support acceleration. Forecasts are recorded before the next interval and evaluated against subsequent outcomes; longer histories support seasonality and uncertainty analysis.

## Figures and quantitative presentation

The figures are calculated illustrations or explicitly labeled schematics. Source structure and dependence parameters accompany effective-weight totals. Retrieval shares represent normalized weights; they do not represent a measured safety percentage. Consensus illustrations assume a declared origin map and do not infer source authenticity from a count.

Graphical minimum widths are treated as display properties rather than substituted into numerical calculations. Study figures preserve original labels and totals. Definitions, assumptions, reported observations, and prospective measurements are identified consistently throughout the research package.

## Validation milestones

The next milestones are item-level reproduction of the preliminary comparison, independent label documentation, completion of the expanded pair and statement sets, implementation conformance, and frozen holdout evaluation. Workflow tests then establish application-specific operating criteria for retrieval, reader aggregation, and action assessment.

Completion of each milestone produces a versioned record with the configuration, acceptance criterion, result, uncertainty, and resulting policy decision. This structure supports technical diligence and gives research progress a concrete, reviewable basis.

## Methodological references

HEROS. Revealing the Blind Spot of Sentence Encoder Evaluation. 2023. https://arxiv.org/abs/2306.05083.

SparseCL. Sparse Contrastive Learning for Contradiction Retrieval. 2024. https://arxiv.org/abs/2406.10746.

Campbell, M. K., et al. CONSORT 2010 statement extension to cluster randomised trials. BMJ 345, e5661. 2012. https://www.bmj.com/content/345/bmj.e5661.

Guo, C., et al. On Calibration of Modern Neural Networks. ICML 2017. https://proceedings.mlr.press/v70/guo17a.html.
