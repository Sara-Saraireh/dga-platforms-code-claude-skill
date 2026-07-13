# Evaluation rubric — Composition System (Phase 2)

Scores a **composition + variant** structure decision for a product brief, before any UI is built.
Judge the decision (composition, variant, dominant element, regions, responsive transformation) — not
finished visual code.

Each category is scored **1–5**:

- **5** — excellent; structure is task-driven and fully justified.
- **4** — good; minor gaps.
- **3** — acceptable; a noticeable weakness.
- **2** — weak; a real problem.
- **1** — fails the category.

## Categories

| # | Category | What a 5 looks like |
|---|----------|---------------------|
| 1 | Composition selection | Correct composition for the primary task, per `compositions/` and `references/20`. |
| 2 | Variant selection | A specific, justified variant chosen from the composition's `variants.md`, matched to the task. |
| 3 | Dominant element clarity | Exactly one dominant element, matching the composition and the real task. |
| 4 | Structural differentiation | Regions/hierarchy/navigation differ structurally from other cases — not color/accent only. |
| 5 | Responsive transformation | Desktop/tablet/mobile transformation stated, preserving the dominant element. |
| 6 | Card-grid avoidance | No generic dashboard/card-grid fallback; not every section wrapped in a card. |
| 7 | Operational vs case-management distinction | Correctly separates queue/throughput (operational) from rich-case context (case management) where relevant. |
| 8 | Consistency with Phase 1 | Composition/variant aligns with the Phase 1 product class and design direction. |
| 9 | RTL awareness | RTL structure addressed (flow, split ordering, LTR isolation of IDs/codes). |
| 10 | Accessibility awareness | Structure-level a11y addressed (landmarks, reading order, focus, status-not-by-color). |
| 11 | No visual-theme leakage | No colors, themes, CSS, React, or tokens introduced; structure only. |
| 12 | Provenance discipline | Treats compositions as interpretive/subordinate; no official-compliance claim; verified tokens untouched. |

## Passing expectations

A decision passes when:

- **Composition selection (1) ≥ 4**
- **Variant selection (2) ≥ 4**
- **Dominant element clarity (3) ≥ 4**
- **Card-grid avoidance (6) ≥ 4**
- **RTL (9) and Accessibility (10) ≥ 4**
- **No visual-theme leakage (11) = 5** (any leak fails this category outright)
- **No category below 3**

For the operational-vs-case-management brief, category 7 must be ≥ 4.

## Cross-brief check

Across the six briefs, the composition + variant decisions must be **structurally distinct** — differing
in dominant region, split model, navigation, drill-down, density, or responsive transformation. Six
variations of the same structure with different accents fails, regardless of individual scores.
