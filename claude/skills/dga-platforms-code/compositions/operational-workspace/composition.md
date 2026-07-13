# Operational Workspace

## Status and boundary

Interpretive operational guidance, secondary to official DGA sources and verified extractions. Defines
structure only — no visual styling, tokens, or code. Does not constitute official DGA compliance. See
[`../README.md`](../README.md) and [`../../references/20-composition-selection.md`](../../references/20-composition-selection.md).

## Purpose

Organize a high-throughput working surface so a queue and the active item stay in view and context is
never lost between actions.

## Use when

- Work queues, ticket/permit handling, coordination consoles.
- Lightweight state progression, assignment, and task management.
- Fast operational handling where speed and place-keeping matter.

## Do not use when

- Each item is a rich, long-lived case with history/participants (use
  [`../case-management-split-view/composition.md`](../case-management-split-view/composition.md)).
- The task is a single guided procedure (use [`../guided-service-flow/composition.md`](../guided-service-flow/composition.md)).
- The task is reading/navigation (use [`../narrative-portal/composition.md`](../narrative-portal/composition.md)).

## Primary task

Triage and act on a stream of items (scan → assign → progress → resolve) without losing context.

## Dominant element

The **queue / work list plus the active work item** — the pair, not one alone.

## Structural regions

In priority order:

1. **Work queue** — the list of items; the persistent anchor.
2. **Filters** — scope the queue (status, owner, type).
3. **Active item** — detail pane or drawer for the opened item.
4. **Actions** — assign / progress / resolve; a persistent action bar.
5. **Status context** — state, ownership, SLA/priority signals.
6. **Secondary operational summary** — a thin supporting counts strip (not an executive KPI wall).

## Information hierarchy

Queue is the anchor and stays visible or one step away → active item opens without hiding the queue →
actions are always reachable → status context supports the item → any summary is a demoted strip.

## Navigation model

Master–detail. The queue persists; opening an item shows detail in a pane/drawer; returning to the
queue preserves scroll/place. Keyboard-first for repeated actions.

## Density

High.

## Responsive transformation

### Desktop

Queue and detail side by side (master–detail); persistent action bar; filters inline above or beside
the queue.

### Tablet

Queue and detail may become a two-pane split that collapses the detail to a drawer; filters move into a
compact bar.

### Mobile

Queue is the primary screen; opening an item shows detail full-screen with a clear back to the queue
that preserves place; actions in a sticky bar. The queue remains the dominant anchor.

## RTL behavior

`dir="rtl"`, logical start/end so the queue and detail sit correctly; tables right-aligned with
RTL-aware sort; mirror directional controls. Item IDs, codes, and timestamps isolated LTR within Arabic
text.

## Accessibility requirements

- Queue is a semantic list/table with headers and scope; row focus and keyboard navigation; opening an
  item moves focus predictably and returning restores it.
- Actions are real controls with labels; status uses text + icon, not color alone.
- Landmarks separate queue, detail, and actions; visible focus throughout; no keyboard traps.

## Suitable component categories

Dense data table / list, filters, status badges, drawer or detail pane, action bar / bulk actions,
counts strip. See `../../references/30-component-library.md`.

## Variation dimensions

Queue-and-detail split vs. command overview vs. task board (columns by state); drawer vs. inline detail;
bulk vs. per-item actions; density; responsive collapse. See [`variants.md`](variants.md).

## Anti-patterns

- Executive KPI walls above the queue.
- Content-first / marketing layouts.
- Excessive modal workflows that break flow.
- Treating every task as a detailed case record.
- Over-carding queue rows; full-width decorative charts above the queue.

## Related compositions

- [`../case-management-split-view/composition.md`](../case-management-split-view/composition.md) — when
  items need rich history and context.
- [`../verification-workbench/composition.md`](../verification-workbench/composition.md) — when opening
  an item means judging evidence.

## Selection cues

Choose Operational Workspace when the main task is **queue handling, assignment, lightweight state
changes, and rapid progression**. Choose Case Management Split View when the case requires **rich
history, evidence, timeline, participants, and extended case context**.
