# 17 — Visual hierarchy and composition

> Supporting design-review guidance. It aligns with — and never overrides — DGA Platforms Code
> and the verified references (`13`–`16`) and tokens (`tokens/`). It introduces no official DGA
> rules, tokens, spacing, or compliance claims. Where exact values matter, defer to the verified
> references and project tokens; invent nothing.

Use this when judging *how a screen reads* — what the eye lands on first, whether the task and the
primary action are obvious, and whether the composition feels calm and official. This complements
`01-design-principles.md`, `03-layout-and-navigation.md`, and `15-layout-and-spacing-page-extraction.md`.

## Scanning order and the RTL reading path

- The default audience reads Arabic, right-to-left, top-to-bottom. The strongest element should
  sit where the eye starts: the upper-right region of the content area.
- The intended order is **task title → context/what's needed → primary action → supporting detail**.
  Check that nothing louder competes with that order.
- Primary navigation, current-location cues (breadcrumbs/steps), and the page heading should be
  findable without hunting.
- Verify the visual path matches the RTL flow end-to-end (see `07-arabic-rtl.md`): steppers,
  breadcrumbs, and "next" advance toward the left edge.

## The tools of hierarchy (use, don't invent)

Hierarchy is built from contrast in **size, weight, spacing, and color** — using only verified
type styles (`14`/`tokens/typography-v1.0.json`), verified semantic colors
(`16`/`tokens/colors-v1.0.json`), and project/verified spacing. Do not introduce new type sizes,
weights, spacing values, or color shades to manufacture emphasis.

- **Size & weight:** Display styles for headings/large emphasis only; Text styles for body, labels,
  forms, tables, and UI. Do not use Display for long paragraphs.
- **Spacing:** group related elements with proximity; separate unrelated groups with more space.
  Prefer project spacing tokens or verified spacing; never repeat arbitrary one-off values.
- **Color:** reserve strong/semantic color for state and the primary action — not decoration.
  Pair any state color with text and/or an icon (never color alone).

## One primary action per view

- Exactly one element should read as the primary action. Everything else (secondary, tertiary,
  links) must be visually quieter.
- If two or more elements compete for "most important," the hierarchy has failed — demote all but one.
- Destructive actions are never the loudest element; confirm them rather than emphasize them.

## Grouping, proximity, and alignment

- Related fields, labels, and controls belong in one visual group; unrelated groups are clearly
  separated. Help text sits next to the field it explains.
- Maintain a consistent alignment grid; in RTL the baseline is right-aligned with logical
  (start/end) spacing, not hardcoded left/right.
- Cards hold one coherent idea — do not overload a single card with competing content or actions.

## Density, whitespace, and calm

- Calm density signals trust. Use generous, consistent whitespace; avoid cramped clusters,
  especially on mobile.
- Limit the number of simultaneous focal points; a screen shouting everywhere says nothing.
- Let structure and typography carry the design — no decorative gradients, illustrations, or motion
  that compete with content or the primary action.

## Quick review questions

- Within two seconds, is the task and the single primary action obvious?
- Does the visual order match the intended RTL reading order?
- Is every emphasis built from verified type/color/spacing — nothing invented?
- Are related things grouped and unrelated things separated?
- Is anything decorative competing with the content or the primary action?

See also: `12-design-review-checklist.md`, `19-design-critique-rubric.md`, `22-ui-anti-patterns.md`.
