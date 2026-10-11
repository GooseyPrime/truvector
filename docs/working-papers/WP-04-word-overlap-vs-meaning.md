# TruVector: counting shared words against reading meaning

Working paper WP-04 | Michael Brandon Lane | InTellMe AI | 11 October 2026

## Abstract

Study TV-001 compares two ways of turning the replies of several language models (readers) into a decision of Allow, Review, or Block. Word-overlap scoring is the earlier word-count gate of WP-02 section 4: it measures how many words the replies share and how often nine marker words appear. Meaning-based scoring is the decision rule of WP-02 section 7: it uses the stance each reader returned, counts readers by origin, and applies fixed thresholds. Four readers from four companies read 300 statements whose labels are each backed by a quote from a public source. Every reply was stored once and scored both ways, and the analysis was fixed in a dated document before any reply was collected.

Word-overlap scoring made the right decision on 101 of 300 statements (33.7%, 95% interval 28.6% to 39.2%). Meaning-based scoring made the right decision on 282 of 300 (94.0%, 95% interval 90.7% to 96.2%). The paired difference is +60.3 points (95% interval 54.1 to 65.7 points); exact McNemar p = 1.1e-50. Neither method gave Allow to a refuted or unsettled statement (0 of 180 each). The set was built by the same team and carries no actions, so the result describes this set and is not an estimate of accuracy in use.

**In plain terms.** The same saved replies gave the right decision about one time in three when scored by shared words, and about nineteen times in twenty when scored by what the readers concluded.

## 1 The problem

A method that counts shared words fails in two ways. Readers who agree in their own words share few words, so agreement looks like disagreement. A sentence and its exact negation share nearly all their words, so opposite statements look alike. WP-02 reported a first comparison on 60 statements: 14 right decisions for the word-count gate and 58 for the replacement. That set was small and easy by design. This study asks the same question on 300 harder statements.

**In plain terms.** Two people can agree without using the same words, and two sentences can use the same words and say opposite things. Counting words sees neither.

## 2 What was done

**The plan came first.** The question, hypotheses, test set, reader panel, prompts, scoring settings, endpoints, tests, and exclusion rules were committed on 10 October 2026 before any reply of the study existed. Five amendments (A1 to A5) are dated and were each entered before any test-set data was collected: the Claude reader (A1), the embedding model (A2), a test fixture for the statistics code (A3), and a change of host for one reader after its first host did not answer (A4, A5).

**Test set.** 300 statements in five groups: plain 60, numbers 60, recent 40, contested 40, negation 100. Labels: supported 120, refuted 120, unsettled 60. Each label is backed by an exact quote from the public source named beside the statement. No model labelled anything, and no label changed after the plan was committed. The set also holds 210 reason pairs (70 agreeing, 70 disagreeing, 70 unrelated) and 50 negation pairs, each a sentence and its exact negation with a record of which one is true.

**Readers.** Four readers from four companies, so that origin counting has four origins to count: Anthropic Claude Opus 5.5, DeepSeek V4.1 Flash, Moonshot Kimi K3, and Meta Muse Glimmer 30B. Each reader was asked once per statement and returned a stance (supports, refutes, or uncertain), a confidence from 0 to 1, and a reason of one to three sentences. Quorum is three usable replies of four; below quorum the decision is Block under both methods.

**Two scorings of one set of replies.** Both methods were applied to the same stored replies. The thresholds of meaning-based scoring are the starting values set before the study and were not refitted. A decision is right when it matches the label: Allow for supported, Block for refuted, Review for unsettled.

**In plain terms.** The rules were set before the game, the answers were already known from public sources, and both scoring methods were handed the same saved replies. The only thing that differs is the scoring.

## 3 Results: right decisions

| Quantity | Word-overlap scoring | Meaning-based scoring |
| --- | --- | --- |
| Right decisions of 300 | 101 (33.7%) | 282 (94.0%) |
| 95% interval (Wilson) | 28.6% to 39.2% | 90.7% to 96.2% |
| Cohen's kappa (95% interval) | -0.044 (-0.085 to -0.003) | 0.907 (0.866 to 0.948) |
| Macro-F1 | 0.192 | 0.929 |

The paired difference is +60.3 points (Newcombe 95% interval 54.1 to 65.7 points). On 184 statements only meaning-based scoring was right; on 3 only word-overlap scoring was right; both were right on 98 and both wrong on 15. Exact McNemar test, two-sided: p = 1.1e-50. This is the one test named in advance, and it meets the stated condition (p at or below 0.05, difference in favour of meaning-based scoring).

Decisions under word-overlap scoring (rows: what the label calls for; columns: decision given):

| Label calls for | Allow | Review | Block | Total |
| --- | --- | --- | --- | --- |
| Allow (supported) | 1 | 31 | 88 | 120 |
| Review (unsettled) | 0 | 1 | 59 | 60 |
| Block (refuted) | 0 | 21 | 99 | 120 |

Decisions under meaning-based scoring:

| Label calls for | Allow | Review | Block | Total |
| --- | --- | --- | --- | --- |
| Allow (supported) | 108 | 12 | 0 | 120 |
| Review (unsettled) | 0 | 57 | 3 | 60 |
| Block (refuted) | 0 | 3 | 117 | 120 |

**In plain terms.** Word-overlap scoring gave Allow to one statement in 300 and blocked most of what was true. Meaning-based scoring put 282 of 300 where the label said they belong, and every one of its 18 misses was one step away, never two.

## 4 Results: error types and groups

| Error | Word-overlap scoring | Meaning-based scoring |
| --- | --- | --- |
| Refuted or unsettled statement given Allow | 0 of 180 (0.0%; 0.0% to 2.1%) | 0 of 180 (0.0%; 0.0% to 2.1%) |
| Supported statement given Block | 88 of 120 (73.3%; 64.8% to 80.4%) | 0 of 120 (0.0%; 0.0% to 3.1%) |

| Group | n | Word overlap right | Meaning right | Difference (95% interval) | Holm-adjusted p |
| --- | --- | --- | --- | --- | --- |
| Plain | 60 | 13 (21.7%) | 59 (98.3%) | +76.7 points (62.7 to 85.3) | 1.1e-13 |
| Numbers | 60 | 24 (40.0%) | 60 (100.0%) | +60.0 points (46.0 to 71.4) | 5.8e-11 |
| Recent | 40 | 15 (37.5%) | 25 (62.5%) | +25.0 points (5.8 to 41.5) | 0.0213 |
| Contested | 40 | 1 (2.5%) | 38 (95.0%) | +92.5 points (77.0 to 96.7) | 4.4e-11 |
| Negation | 100 | 48 (48.0%) | 100 (100.0%) | +52.0 points (41.6 to 61.5) | 2.2e-15 |

Recent events are the weak spot of meaning-based scoring: 25 of 40, with the smallest gain and the widest interval, and all 3 statements on which only word-overlap scoring was right are in this group. The readers received each statement alone, with no retrieved material, and answered on what they knew. That is a likely reason for the weakness; the study did not measure it.

**In plain terms.** Neither method waved through something false. The word-count method was safe only because it said no to nearly everything. The new scoring is clearly weaker on recent events than on the rest.

## 5 Results: negation pairs and reason pairs

**Negation pairs.** Of 50 pairs, word-overlap scoring gave opposite decisions (one Allow, one Block) to 0 and meaning-based scoring to 50; difference +100.0 points (95% interval 89.9 to 100.0 points), exact McNemar p = 1.8e-15. Under meaning-based scoring all 50 pairs also had Allow for the true sentence and Block for the false one. Example pair from the set: "Mercury is the closest planet to the Sun." and "Mercury is not the closest planet to the Sun."

**Reason pairs.** Three scores were graded on separating the 70 agreeing pairs from the 70 disagreeing pairs. The grade is the AUROC: the chance that a randomly chosen agreeing pair scores above a randomly chosen disagreeing pair. 0.5 is a coin toss and 1.0 is perfect.

| Score | AUROC | 95% interval (DeLong) | Mean, agreeing | Mean, disagreeing | Mean, unrelated |
| --- | --- | --- | --- | --- | --- |
| Word overlap (Jaccard) | 0.296 | 0.203 to 0.388 | 0.261 | 0.498 | 0.052 |
| Embedding cosine | 0.465 | 0.363 to 0.568 | 0.770 | 0.761 | 0.240 |
| Readers' judgement | 0.997 | 0.993 to 1.000 | 0.887 | -0.814 | 0.000 |

Readers against word overlap: difference in AUROC 0.702 (95% interval 0.609 to 0.795), DeLong p = 1.8e-49. Readers against embedding cosine: 0.532 (0.430 to 0.635), p = 2.7e-24.

**In plain terms.** Shared words pointed the wrong way more often than not. The map of meaning could tell that two texts were on the same subject and could not tell which side each took. Asking readers what the texts say separated agreement from disagreement almost perfectly.

## 6 Data quality

One statement (s179) had fewer than three usable replies and is Block under both methods; it stays in every analysis. On the 299 statements at quorum the result is 101 of 299 (33.8%) against 282 of 299 (94.3%), difference +60.5 points (54.3 to 65.9 points), exact McNemar p = 1.1e-50. Usable replies in scored statements, by reader: Claude Opus 5.5 299, DeepSeek V4.1 Flash 291, Kimi K3 238, Muse Glimmer 30B 299. Where meaning-based scoring did not allow a supported statement (12 statements), the recorded reason was mixed or unsure readings in every case. The reason pairs drew 749 usable reader votes over 210 pairs. The embedding model is OpenAI text-embedding-3-small, 1,536 dimensions, the model the subject thresholds were set with.

## 7 What the study does not show

- One test set, built by the same team. The choice of statements and groups is the authors'. Results describe this set; they are not an estimate for all statements an agent may meet.
- The groups are not a random sample. One third of the set is negation pairs, so overall accuracy depends on this mix; the group table shows each part.
- Word-overlap scoring was applied to the text of structured replies. This is the fair same-replies comparison, and it is one way of using that method.
- Thresholds were not fitted here. They are the starting values and were not refitted on this set.
- Readers are AI models and may share training sources. Independence between the four companies' models is assumed, not measured.
- One reading per reader. Three readers ran at temperature 0; the Claude reader ran at its API defaults. Run-to-run variation was not measured.
- The unsettled label is the hardest to assign. It rests on a source saying the matter is unsettled; a reader that knows more or less than the source can be marked wrong for a defensible answer.
- Only the primary comparison has a single test named in advance. Group results are Holm-corrected among themselves; other secondary results are reported with intervals and are not corrected across families.
- The reason pairs were written for the purpose. Agreeing pairs share few words and disagreeing pairs avoid the word "not"; on ordinary text the AUROC of word overlap could be higher.
- The set carries no instruction and no proposed action. Allow here is the stance-derived category, not permission to carry out an action.

**Research direction.** The same comparison, with the same frozen settings, on a public benchmark of labelled statements assembled by other researchers. It would be disproved as a general result if meaning-based scoring does not make more right decisions than word-overlap scoring on such a set.

**In plain terms.** This is a careful result on a test the team wrote itself. It shows the scoring change does what it was designed to do. It does not yet show how the method does on a test somebody else wrote.

## 8 How to repeat it

The study record holds the dated plan and its amendments, the 300 statements with labels and sources, the reason pairs and negation pairs, every stored reply, the per-statement decisions under both scorings, the per-pair scores, and the analysis code. Scoring the stored replies, scoring the pairs, and running the analysis call no reader, so the same files reproduce every number in this paper. The statistics (Wilson, Newcombe, exact McNemar, Holm, Cohen's kappa, DeLong) are tested against published worked examples. Data and code are available on request from the author.

## Suggested citation

Lane, M. B. (2026). TruVector: counting shared words against reading meaning (Working paper WP-04, 11 October 2026). InTellMe AI.
