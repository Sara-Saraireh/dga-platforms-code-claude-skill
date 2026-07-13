# Scorecard — Phase 1 design-direction evaluation

Six product briefs run through the Design Direction Gate (`references/18`–`22`, `prompts/00`). Scores
use the 1–5 scale and passing thresholds in [`../rubric.md`](../rubric.md). Overall score is the mean
of the 12 categories (out of 5).

## Table 1 — Per-case summary

| Case | Product class | Visual profile | Composition archetype | Dominant element | Navigation | Density | Overall | Pass/fail | Generic-dashboard fallback |
|------|---------------|----------------|-----------------------|------------------|------------|---------|---------|-----------|----------------------------|
| 01 Government service | Government service | Government Service | Guided Service Flow | Active step / form | Stepped (RTL) | Low | 4.92 | **Pass** | No |
| 02 Regulatory verification | Regulatory verification | Regulatory Workspace | Verification Workbench | The evidence | Case-scoped split | Medium–high | 4.83 | **Pass** | No |
| 03 AI monitoring | Data intelligence & analytics | Data Intelligence | Analytical Canvas (+ queue) | Primary visualization | Top/side + drill | High (focused) | 4.75 | **Pass** | No |
| 04 Operational management | Operational management | Operational Command | Operational Workspace | Queue + active item | Master–detail | High | 4.75 | **Pass** | No |
| 05 Field inspection | Field inspection | Field Mobile | Mobile Action Stack | Current action / capture | Stacked / stepped | Low | 4.92 | **Pass** | No |
| 06 Public information | Public information | Public Editorial | Narrative Portal | Content + onward action | Top nav + anchors | Low–medium | 4.83 | **Pass** | No |

Six distinct product classes, six distinct profiles, six distinct compositions, six distinct dominant
elements, and five distinct navigation models (stepped appears once for service and once, as a variant,
for field capture — justified by the shared step-through capture model; see
[`findings.md`](findings.md)).

## Table 2 — Rubric categories × cases

Rows are the 12 rubric categories; columns are the six cases; cells are 1–5.

| # | Category | 01 | 02 | 03 | 04 | 05 | 06 |
|---|----------|----|----|----|----|----|----|
| 1 | Product-classification accuracy | 5 | 5 | 5 | 5 | 5 | 5 |
| 2 | Composition–task fit | 5 | 5 | 5 | 5 | 5 | 5 |
| 3 | Visual-direction fit | 5 | 5 | 5 | 5 | 5 | 5 |
| 4 | Distinction from generic dashboard | 5 | 5 | 5 | 4 | 5 | 5 |
| 5 | Dominant-element clarity | 5 | 5 | 4 | 5 | 5 | 5 |
| 6 | Information hierarchy | 5 | 5 | 5 | 5 | 5 | 5 |
| 7 | RTL awareness | 5 | 4 | 4 | 4 | 4 | 4 |
| 8 | Accessibility awareness | 4 | 4 | 4 | 4 | 5 | 4 |
| 9 | DGA grounding | 5 | 5 | 5 | 5 | 5 | 5 |
| 10 | Misuse of cards | 5 | 5 | 5 | 5 | 5 | 5 |
| 11 | Misuse of visual effects | 5 | 5 | 5 | 5 | 5 | 5 |
| 12 | Color-only variation | 5 | 5 | 5 | 5 | 5 | 5 |
| — | **Total (/60)** | **59** | **58** | **57** | **57** | **59** | **58** |
| — | **Mean (/5)** | **4.92** | **4.83** | **4.75** | **4.75** | **4.92** | **4.83** |

## Threshold check (from `rubric.md`)

Passing requires: category 2 ≥4; category 9 ≥4; categories 7 and 8 ≥4; categories 4 and 12 ≥4; and no
category below 3.

| Threshold | 01 | 02 | 03 | 04 | 05 | 06 |
|-----------|----|----|----|----|----|----|
| Composition–task fit (2) ≥ 4 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| DGA grounding (9) ≥ 4 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| RTL (7) ≥ 4 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Accessibility (8) ≥ 4 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Distinction from dashboard (4) ≥ 4 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Color-only variation (12) ≥ 4 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| No category below 3 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

**All six cases pass every threshold.**

## Aggregate

- **Cases evaluated:** 6 · **Passed:** 6 · **Failed:** 0
- **Overall mean across cases:** **4.83 / 5**
- **Highest-scoring:** Government service and Field inspection (4.92)
- **Lowest-scoring:** AI monitoring and Operational management (4.75)
- **Lowest single category:** 4 (never below the "no category under 3" rule; the only 4s are RTL,
  accessibility, and two differentiation/clarity notes).
- **Generic-dashboard fallback:** None detected in any case.
