# Disclosure boundary — read before adding content

## The rule

**This site stops at the boundary of what the first funding phase is meant to
establish.** Nothing published here may present, imply, or illustrate capability
beyond that line as complete.

The reason is not modesty. A proposal asking to establish feasibility is
undermined by a public site that already claims the thing works at scale — the
reader concludes either that the work is done and does not need funding, or that
one of the two documents is overstating. Both readings are fatal. The site and
the proposal must describe the same programme at the same stage.

The funding body is never named on this site, and neither is the programme.

## Where the line sits

Publishable as **running today**:

- The evidence object and the Allow · Review · Block boundary
- Assertion evaluation against a stable corpus
- Contradiction and divergence detection, described as detected and measured
  but **not** as calibrated
- Independence-aware discounting, on the same terms
- The decision path, logged and reconstructable

Publishable only as **not yet built**, in these words or narrower:

- Quorum — specified, not built
- Multi-model triangulation — future stage
- Kinematic validation — a stated hypothesis with a stated way to be wrong
- AHE / HRA — a stated hypothesis, not demonstrated

Not publishable at all:

- Throughput, capacity, or cost-per-assertion figures
- Capital requirements, or dollar figures of any kind
- Named pilots, named customers, or named institutions
- Any claim that stage two or stage three capability exists in any form
- Benchmark results, until there is a protocol published alongside them

## How to keep it true

The capability table is defined once, in `src/pages/index.astro`, and the
pipeline stages in `src/pages/technology.astro` carry the state of the
capability each depends on. The same six states are published on the InTellMe
parent site. If the two ever disagree, the parent site is authoritative and this
site is the error.

When a capability moves state, it moves in three places in the same change: the
table here, the pipeline stage that depends on it, and the parent site. A
capability that has moved on one site and not the other is a discrepancy a
reader will find.
