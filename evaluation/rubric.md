# Evaluation rubric — Design Direction

Scores the skill's **design-direction decision** for a product brief, before any UI is built. Judge the
decision output (product class, brief, composition, dominant element, visual profile, anti-patterns) —
not finished visual code.

Each category is scored **1–5**:

- **5** — excellent; task-driven and fully justified.
- **4** — good; minor gaps.
- **3** — acceptable; noticeable weakness.
- **2** — weak; a real problem.
- **1** — fails the category.

## Categories

| # | Category | What a 5 looks like |
|---|----------|---------------------|
| 1 | Product classification accuracy | Correct primary class (+ optional secondary) from task and environment, not industry/color/AI. |
| 2 | Composition–task fit | Archetype matches the dominant task; dashboard/card-grid not used as a default. |
| 3 | Visual direction fit | Conceptual profile suits context; no cinematic/dark styling chosen just because it uses AI. |
| 4 | Distinction from generic dashboard | Clearly avoids hero + KPI-cards + card-grid unless the task genuinely requires it. |
| 5 | Dominant element clarity | Exactly one dominant element, and it matches the real primary task. |
| 6 | Information hierarchy | Supporting content clearly subordinate to the dominant element; no KPI wall above the task. |
| 7 | RTL awareness | Arabic-first / RTL treated as a baseline in the direction (flow, navigation, mixed content). |
| 8 | Accessibility awareness | Contrast, focus, keyboard, semantics, and status-not-by-color considered in the direction. |
| 9 | DGA grounding | Uses verified tokens/sources as authority; interpretive choices kept separate; no compliance claim. |
| 10 | Misuse of cards | Cards used only for discrete comparable items; tables/panes/flat sections used where they fit. |
| 11 | Misuse of visual effects | No gradients/glass/glow/particles without a functional or contextual reason. |
| 12 | Color-only variation | Variation is structural (≥3 dimensions where context permits), not just an accent change. |

## Passing expectations

A design-direction decision passes when:

- **Composition–task fit (2) ≥ 4**
- **DGA grounding (9) ≥ 4**
- **Accessibility awareness (8) ≥ 4** and **RTL awareness (7) ≥ 4**
- **Visual differentiation** — Distinction from generic dashboard (4) ≥ 4 and Color-only variation
  (12) ≥ 4
- **No category below 3**

Any category at 1–2, or any of the thresholds above unmet, is a fail for that brief.

## Cross-brief check

Across the six briefs in [`prompts/`](prompts/), the decisions must be **structurally distinct** —
differing in composition, hierarchy, navigation, or density. Six variations of the same dashboard with
different accents fails, regardless of individual scores.
