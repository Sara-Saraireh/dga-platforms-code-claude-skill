# 19 — Design critique rubric

> Supporting design-review guidance. It aligns with — and never overrides — DGA Platforms Code
> and the verified references (`13`–`16`) and tokens (`tokens/`). This rubric is an **internal
> review aid only**. It is **not** an official DGA score, certification, or compliance assessment.
> Use the phrase **"aligned with Platforms Code principles"**, never "officially compliant".

Use this to structure a design critique so feedback is consistent, concrete, and actionable. Score
nothing officially. For the evaluation goals and the optional internal level scale, reuse the one
already defined in `12-design-review-checklist.md` (Platforms Code Guide v1.0) and
`tools/manual-review-template.md` — do not invent a new scale.

## How to use

- Walk each dimension below. For each, write **what works**, **what's weak**, and a **concrete fix**
  with a file/line reference where possible.
- Keep findings observable and specific ("the secondary button competes with the primary CTA at
  `X:42`"), not vague ("looks off").
- Tie every recommendation back to a verified reference or token. If a value isn't verified, say
  "verify against the official source" rather than inventing one.
- Group findings into **Critical / Important / Minor** (see `01-audit-existing-ui.md`).

## Dimensions

1. **Task clarity** — Is the screen's job and next step obvious within seconds? Lead with the task.
   (See `18-ux-interaction-patterns.md`, `06-service-patterns.md`.)
2. **Visual hierarchy** — Does the eye land in the right RTL order? Is emphasis built only from
   verified type/color/spacing? (See `17-visual-hierarchy-and-composition.md`.)
3. **CTA hierarchy** — Exactly one primary action per view; secondary/tertiary visibly quieter;
   destructive actions not emphasized. Labels are precise verbs.
4. **Content & Arabic UX quality** — Plain, formal, consistent Arabic; specific error/success/status
   copy; English names readable and bidi-isolated. (See `10-content-style-arabic.md`,
   `20-government-service-content-patterns.md`.)
5. **Layout & spacing** — Clear sections, grouping, consistent padding/field spacing, calm density;
   no repeated arbitrary spacing. (See `15-layout-and-spacing-page-extraction.md`.)
6. **RTL behavior** — Direction, mirroring, logical spacing, correct mixed Arabic/Latin and code/ID
   ordering. (See `07-arabic-rtl.md`.)
7. **Accessibility** — Contrast, visible focus, keyboard, semantics, labels, error announcement,
   status not by color alone, touch targets, reduced motion. (See `08-accessibility.md`.)
8. **Consistency** — Reused patterns/components/tokens and stable terminology; no one-off treatments.

## Critique output shape

For each dimension, record:

- **Rating (internal aid):** a short qualitative descriptor — e.g. *strong* / *adequate* /
  *needs work* / *blocking*. This is a review aid, not an official score.
- **Findings:** what works, what's weak, with evidence.
- **Fix:** the smallest aligned change, referencing the governing verified file/token.

If a numeric level is recorded at all, document it as an internal review aid only, using the
existing Guide v1.0 scale in `12-design-review-checklist.md`, with the wording
**"aligned with Platforms Code principles"**.

## Boundaries

- Do not present this rubric, or any general UX practice, as official DGA guidance.
- Do not invent tokens, spacing, type styles, color shades, components, or templates.
- Do not claim or imply official compliance, certification, or approval.

See also: `12-design-review-checklist.md`, `21-before-after-review.md`.
