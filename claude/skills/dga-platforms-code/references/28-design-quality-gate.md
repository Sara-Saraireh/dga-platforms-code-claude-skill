# 28 — Design quality gate

> Supporting design-review guidance. It aligns with — and never overrides — DGA Platforms Code
> and the verified references (`13`–`16`) and tokens (`tokens/`). This gate is an **internal review
> aid only** — **not** an official DGA score, certification, or compliance assessment. Use the
> phrase **"aligned with Platforms Code principles"**, never "officially compliant".

Apply this gate after UI changes, before declaring the work done. Score each item **1–5** as an
internal judgment, with a one-line justification and evidence (file/line) where possible.

## Scoring scale (internal only)

- **1** — basic/broken: fails the intent.
- **2** — weak: noticeable problems.
- **3** — acceptable: meets the baseline.
- **4** — strong: polished and clear.
- **5** — excellent: high-fidelity, government-grade.

This 1–5 scale is a working review aid. It is distinct from, and must not be presented as, the
Platforms Code Guide v1.0 evaluation levels in `12-design-review-checklist.md`, and it is never an
official compliance score.

## Items to score

| # | Item | What "good" looks like | Reference |
|---|------|------------------------|-----------|
| 1 | First impression | Calm, polished, government-grade within seconds | `17`, `24` |
| 2 | Government trust | Official, restrained tone; authorized marks; no SaaS gloss | `01`, `23` |
| 3 | Task clarity | The task and next step are obvious | `18`, `25` |
| 4 | Visual hierarchy | Correct RTL reading order; emphasis from verified type/color | `17` |
| 5 | CTA clarity | One primary action per decision area; quiet secondaries | `24` |
| 6 | Content clarity | Plain, formal, consistent Arabic; specific messages | `10`, `20` |
| 7 | Component polish | Full anatomy; consistent cards/alerts/results/tables | `26` |
| 8 | RTL correctness | Direction, mirroring, logical spacing, code/ID ordering | `07` |
| 9 | Accessibility | Contrast, focus, keyboard, semantics, labels, not color-only | `08` |
| 10 | Mobile readiness | Mobile-first; no overflow; not cramped; readable Arabic | `09` |
| 11 | State handling | Empty, loading, error states designed, not accidental | `18`, `26` |
| 12 | Motion appropriateness | Subtle, purposeful motion; respects reduced-motion; never state-by-motion-alone | `27` |
| 13 | Engineering safety | Logic/APIs/auth/validation preserved; reused tokens; checks run | `11` |

## Pass rule

- If **any** item scores **below 3**, identify a concrete fix and apply it (or list it explicitly as
  a blocking manual-review item) **before finishing**.
- Record the scores as an internal review aid only. Summarize them with the wording
  **"aligned with Platforms Code principles"**.

## Output shape

```
Design quality gate (internal aid — not official compliance)
1. First impression: <1–5> — <one line + evidence>
...
12. Motion appropriateness: <1–5> — <one line + evidence>
13. Engineering safety: <1–5> — <one line + evidence>
Below-3 items: <list + the fix applied or the blocking note>
Result: aligned with Platforms Code principles (not official compliance)
```

See also: `12-design-review-checklist.md`, `19-design-critique-rubric.md`,
`24-high-fidelity-polish-rules.md`, `27-motion-and-interaction-guidelines.md`.
