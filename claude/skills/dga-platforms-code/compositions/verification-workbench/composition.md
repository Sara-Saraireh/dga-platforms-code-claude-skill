# Verification Workbench

## Status and boundary

Interpretive operational guidance, secondary to official DGA sources and verified extractions. Defines
structure only — no visual styling, tokens, or code. Does not constitute official DGA compliance. See
[`../README.md`](../README.md) and [`../../references/20-composition-selection.md`](../../references/20-composition-selection.md).

## Purpose

Organize a review so the evidence dominates and a human records an authoritative, traceable decision —
kept distinct from any system recommendation.

## Use when

- Regulatory review and licensing decisions.
- Evidence, document, or identity verification.
- Product / submission validation against requirements.
- System-recommendation-plus-human-decision flows where a person makes the final ruling.

## Do not use when

- High-volume triage with no per-item evidence (use [`../operational-workspace/composition.md`](../operational-workspace/composition.md)).
- Rich, long-lived cases with history/participants (use [`../case-management-split-view/composition.md`](../case-management-split-view/composition.md)).
- The task is data monitoring (use [`../analytical-canvas/composition.md`](../analytical-canvas/composition.md)).

## Primary task

Examine evidence, compare it against the record/requirements, and record a decision with a reason.

## Dominant element

The **evidence and findings** — the source material under review and what was extracted or matched from
it.

## Structural regions

In priority order:

1. **Subject context** — who/what is under review (concise header).
2. **Source evidence** — the documents/records themselves; the largest region.
3. **Extracted or matched information** — declared vs. found values, aligned for comparison.
4. **Findings** — checks, flags, and requirement results.
5. **System recommendation** — advisory only, clearly labeled and visually separable.
6. **Human decision controls** — approve / reject / request changes with a required reason.
7. **Audit or review history** — who did what, when.

## Information hierarchy

Evidence first and dominant → findings → recommendation (advisory) → decision controls → audit trail.
Subject context orients but never outweighs the evidence. The **system recommendation and the final
human decision are never merged**.

## Navigation model

Case-scoped, typically split (evidence beside extracted info / findings). Reachable from a queue but
the case owns the screen once open.

## Density

Medium–high, concentrated on the evidence and comparison.

## Responsive transformation

### Desktop

Split: evidence pane largest (often start side), extracted info / findings adjacent; decision controls
persistent and reachable; audit history in a secondary panel or tab.

### Tablet

Two-region split may reduce to evidence over findings; decision controls remain sticky/reachable;
history moves to a tab.

### Mobile

Stack: evidence first, then extracted info, findings, recommendation, then decision controls in a
sticky action area; history behind a clear affordance. Evidence stays the dominant element; do not
hide it behind a modal.

## RTL behavior

`dir="rtl"`, logical start/end for the split so the evidence pane sits correctly; mirror directional
controls. Keep document IDs, reference numbers, and Latin/derived values isolated LTR within Arabic
text. Comparison rows align declared vs. found consistently in reading order.

## Accessibility requirements

- Landmarks for evidence, findings, and decision regions; a logical reading order that reaches evidence
  before decision controls.
- Status/flags use text + icon, not color alone; findings are programmatically associated with the
  evidence they reference.
- Full keyboard operability across panes; visible focus; the required decision reason is a labeled,
  validated field.

## Suitable component categories

Split panes, document/record viewer region, comparison table, status badges, alerts/flags, a clearly
separated recommendation panel, decision buttons with a required reason field, audit/history list.

## Variation dimensions

Single-pane evidence-first vs. two-pane split vs. side-by-side comparison; placement of recommendation;
drill-into a finding; density of the comparison. See [`variants.md`](variants.md).

## Anti-patterns

- Hiding evidence behind modals.
- Placing KPI cards above the evidence.
- Merging the system recommendation with the final human decision.
- Decorative dashboards or metric walls as the landing view.
- Shrinking the evidence into a small equal-weight card.

## Related compositions

- [`../operational-workspace/composition.md`](../operational-workspace/composition.md) — the queue that
  feeds cases in.
- [`../case-management-split-view/composition.md`](../case-management-split-view/composition.md) — when
  the item is a rich, long-lived case rather than a single-sitting review.

## Selection cues

Choose Verification Workbench when a person must look at evidence and record a ruling in one sitting. If
the item carries extended history, a timeline, and multiple parties across a long life, choose Case
Management Split View. If there is no per-item evidence and the work is throughput, choose Operational
Workspace.
