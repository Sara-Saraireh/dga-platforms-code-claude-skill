# Scorecard — Phase 2 composition evaluation

Six briefs run through the composition step (`compositions/`) after the Phase 1 Design Direction Gate.
Scores use the 1–5 scale and thresholds in [`../rubric.md`](../rubric.md). Overall score is the mean of
the 12 categories (out of 5). Case 04 yields two composition decisions (Team A / Team B).

## Table 1 — Per-case summary

| Case | Product class | Composition | Variant | Dominant element | Navigation | Density | Mobile transformation | Overall | Pass/fail | Dashboard fallback | Card-grid fallback | Theme leakage |
|------|---------------|-------------|---------|------------------|------------|---------|-----------------------|---------|-----------|--------------------|--------------------|---------------|
| 01 Government service | Government service | Guided Service Flow | Review and Submit | Review summary | Stepped → review | Low→medium | Collapsible section recaps + sticky submit | 4.83 | **Pass** | No | No | No |
| 02 Regulatory verification | Regulatory verification | Verification Workbench | Comparison Review | Declared-vs-found comparison | Comparison-led, case-scoped | Medium–high | Stacked declared/found field pairs + mismatch filter | 4.92 | **Pass** | No | No | No |
| 03 AI monitoring | Data intelligence & analytics | Analytical Canvas | Geographic Monitoring | Map (spatial view) | Map-led + drill | High-focused | Map + bottom-sheet list; report full-screen | 4.83 | **Pass** | No | No | No |
| 04A Operational (Team A) | Operational management | Operational Workspace | Queue and Detail | Queue + active item | Master–detail | High | Queue-first; item full-screen w/ place-preserving back | 4.92 | **Pass** | No | No | No |
| 04B Case mgmt (Team B) | Regulatory / investigation | Case Management Split View | Case and Timeline | Case timeline/context | Split (list ↔ case) | Medium–high | Case-first; vertical timeline; tabs | 4.92 | **Pass** | No | No | No |
| 05 Field inspection | Field inspection | Mobile Action Stack | Guided Inspection | Current checklist-item action | Stepped (thumb) | Low | One item per screen; sticky advance; sync indicator | 4.92 | **Pass** | No | No | No |
| 06 Public information | Public information | Narrative Portal | Impact Report | Narrative + impact message | Linear + anchors | Low–medium | Inline figure statements in prose; sticky onward link | 4.92 | **Pass** | No | No | No |

Seven distinct composition decisions across six briefs; seven distinct dominant elements; six distinct
navigation models; six distinct mobile transformations. No two decisions share a structure.

## Table 2 — Rubric categories × cases

Rows are the 12 rubric categories; columns are the six briefs (case 04 shown as its combined decision;
both teams scored identically per category).

| # | Category | 01 | 02 | 03 | 04 | 05 | 06 |
|---|----------|----|----|----|----|----|----|
| 1 | Composition selection | 5 | 5 | 5 | 5 | 5 | 5 |
| 2 | Variant selection | 4 | 5 | 5 | 5 | 5 | 5 |
| 3 | Dominant element clarity | 5 | 5 | 4 | 5 | 5 | 5 |
| 4 | Structural differentiation | 5 | 5 | 5 | 5 | 5 | 5 |
| 5 | Responsive transformation | 5 | 5 | 5 | 5 | 5 | 5 |
| 6 | Card-grid avoidance | 5 | 5 | 5 | 5 | 5 | 5 |
| 7 | Operational vs case distinction | 5 | 5 | 5 | 5 | 5 | 5 |
| 8 | Consistency with Phase 1 | 5 | 5 | 5 | 5 | 5 | 5 |
| 9 | RTL awareness | 4 | 4 | 4 | 4 | 4 | 4 |
| 10 | Accessibility awareness | 5 | 5 | 5 | 5 | 5 | 5 |
| 11 | No visual-theme leakage | 5 | 5 | 5 | 5 | 5 | 5 |
| 12 | Provenance discipline | 5 | 5 | 5 | 5 | 5 | 5 |
| — | **Total (/60)** | **58** | **59** | **58** | **59** | **59** | **59** |
| — | **Mean (/5)** | **4.83** | **4.92** | **4.83** | **4.92** | **4.92** | **4.92** |

## Threshold check (from `rubric.md`)

Passing requires: 1 ≥4; 2 ≥4; 3 ≥4; 6 ≥4; 9 ≥4; 10 ≥4; 11 = 5; no category below 3. Case 04 also
requires 7 ≥4.

| Threshold | 01 | 02 | 03 | 04 | 05 | 06 |
|-----------|----|----|----|----|----|----|
| Composition selection (1) ≥4 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Variant selection (2) ≥4 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Dominant element (3) ≥4 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Card-grid avoidance (6) ≥4 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| RTL (9) ≥4 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Accessibility (10) ≥4 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| No theme leakage (11) = 5 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Op-vs-case (7) ≥4 [case 04] | — | — | — | ✅ | — | — |
| No category below 3 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

**All six briefs pass every threshold.**

## Aggregate

- **Briefs evaluated:** 6 (7 composition decisions) · **Passed:** 6 · **Failed:** 0
- **Total across briefs:** 352 / 360
- **Mean score:** **4.89 / 5**
- **Highest-scoring:** 02 Regulatory verification, 04 Operational-vs-case, 05 Field inspection, 06 Public
  information (4.92)
- **Most diagnostic (strongest):** 04 Operational-vs-case — the decisive Phase 2 test, passed with an
  explicit two-sided distinction.
- **Lowest-scoring:** 01 Government service and 03 AI monitoring (4.83)
- **Lowest category:** 9 RTL awareness (a consistent 4 across all six; mean 4.0) — structurally addressed
  but dependent on downstream real-content verification.
- **Dashboard fallback:** None. **Card-grid fallback:** None. **Theme leakage:** None.
