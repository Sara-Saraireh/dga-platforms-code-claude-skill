# Narrative Portal

## Status and boundary

Interpretive operational guidance, secondary to official DGA sources and verified extractions. Defines
structure only — no visual styling, tokens, or code. Does not constitute official DGA compliance. See
[`../README.md`](../README.md) and [`../../references/20-composition-selection.md`](../../references/20-composition-selection.md).

## Purpose

Organize public-facing content so a reader understands the message quickly and follows a clear onward
action.

## Use when

- Public initiatives, awareness, and editorial storytelling.
- Reports and public information pages.
- Service discovery landings that lead into a service.

## Do not use when

- The task is operational (use [`../operational-workspace/composition.md`](../operational-workspace/composition.md)).
- The task is a transaction/procedure (use [`../guided-service-flow/composition.md`](../guided-service-flow/composition.md)).
- The task is data monitoring (use [`../analytical-canvas/composition.md`](../analytical-canvas/composition.md)).

## Primary task

Read and understand the content, then follow a clear onward action.

## Dominant element

The **narrative content and its primary onward action** — the message and where to go next.

## Structural regions

In priority order:

1. **Narrative opening** — heading and lead that orient the reader.
2. **Key messages** — the few points that matter, in readable rhythm.
3. **Evidence or impact** — supporting facts/figures where they aid comprehension (illustrative, not a
   dashboard).
4. **Supporting content** — detail, background, related links.
5. **Onward action** — one or two prominent links to the relevant service or contact.

## Information hierarchy

Opening and message dominate → key messages → evidence/impact (supporting) → supporting content →
onward action prominent throughout. No metrics or operational chrome precede the message.

## Navigation model

Top nav plus in-page anchors; simple. Longer pages use anchored sections; the onward action stays
reachable.

## Density

Low–medium, with editorial spacing and rhythm.

## Responsive transformation

### Desktop

Readable centered column (constrained measure) with generous spacing; key messages and impact in the
flow; onward action prominent; optional anchored section nav.

### Tablet

Same single readable column; section nav collapses; impact figures reflow inline.

### Mobile

Single readable column with generous type; anchors compress to a menu or are omitted; a sticky primary
onward link if the page is long. Content + onward action remain dominant.

## RTL behavior

`dir="rtl"`, right-aligned readable text, logical properties; correct Arabic typographic rhythm. Mixed
Arabic/Latin runs and any figures kept in natural order with LTR isolation where needed.

## Accessibility requirements

- Semantic headings in order (single `h1`, then structured `h2`/`h3`); landmarks for main content and
  nav; readable line length and spacing.
- Links have descriptive text (not "click here"); onward actions are clearly labeled controls.
- Any figures/illustrations have text alternatives; do not encode meaning by color alone.

## Suitable component categories

Headings and body type scale, in-page anchor nav, illustrative figure/stat callouts (supporting only),
`Card` for genuinely distinct choices, prominent link/button for the onward action. See
`../../references/30-component-library.md`.

## Variation dimensions

Editorial story vs. initiative overview vs. impact report; single-column vs. sectioned-with-anchors;
where impact/evidence sits; number and placement of onward actions. See [`variants.md`](variants.md).

## Anti-patterns

- Operational dashboards or KPI-card walls.
- Excessive service-form behavior on a reading page.
- Treating all sections as identical cards.
- Admin tables or workspace chrome around an article.

## Related compositions

- [`../guided-service-flow/composition.md`](../guided-service-flow/composition.md) — where the onward
  action leads when it starts a procedure.
- [`../analytical-canvas/composition.md`](../analytical-canvas/composition.md) — if the page is
  genuinely a data product rather than an article.

## Selection cues

Choose Narrative Portal when the deliverable is understanding and onward navigation. If the page must
support ongoing operational work or a transaction, it is not a portal — choose the matching operational
or service composition instead.
