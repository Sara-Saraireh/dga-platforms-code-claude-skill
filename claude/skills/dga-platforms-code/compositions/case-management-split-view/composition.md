# Case Management Split View

## Status and boundary

Interpretive operational guidance, secondary to official DGA sources and verified extractions. Defines
structure only — no visual styling, tokens, or code. Does not constitute official DGA compliance. See
[`../README.md`](../README.md) and [`../../references/20-composition-selection.md`](../../references/20-composition-selection.md).

## Purpose

Organize a rich, long-lived case so its full context — history, evidence, timeline, and parties — is
understandable and the case can be moved forward.

## Use when

- Rich case history and evidence timelines.
- Multi-party case context and detailed investigation.
- Long-lived cases handled across many sessions.

## Do not use when

- The work is queue throughput and lightweight state changes (use
  [`../operational-workspace/composition.md`](../operational-workspace/composition.md)).
- A single-sitting evidence ruling with no extended history (use
  [`../verification-workbench/composition.md`](../verification-workbench/composition.md)).
- A one-step procedure (use [`../guided-service-flow/composition.md`](../guided-service-flow/composition.md)).

## Primary task

Understand one case in full and take the next action to progress it.

## Dominant element

The **active case context** — the case subject, its status, and its unfolding history.

## Structural regions

In priority order:

1. **Case list** — cases to move between (secondary to the open case).
2. **Case header** — subject, status, priority, ownership.
3. **Evidence / history** — documents and records attached to the case.
4. **Timeline** — chronological events and state changes.
5. **Participants** — parties, roles, and relationships.
6. **Actions and decisions** — next steps, with reasons and an audit trail.

## Information hierarchy

Open case dominates → header orients (status/next action visible) → history/evidence and timeline carry
the understanding → participants provide context → actions/decisions are always reachable. The case
list supports navigation but does not outweigh the open case.

## Navigation model

Split — case list on one side, the full case on the other; or case-scoped tabs within the open case.

## Density

Medium–high.

## Responsive transformation

### Desktop

Split: case list beside the open case; within the case, header on top with history/timeline,
participants, and actions arranged in panels or tabs.

### Tablet

Case list collapses to a drawer or a compact rail; the open case takes the main area; timeline and
participants may become tabs.

### Mobile

List → full case: the case list is the entry screen; opening a case shows it full-screen with the
header sticky, timeline vertical, participants and evidence in tabs/sections, and actions in a sticky
bar. The open case remains dominant.

## RTL behavior

`dir="rtl"`, logical start/end so the case list and case sit correctly; timeline reads right→left in
chronological order with clear direction; mirror directional controls. Case IDs, dates, and reference
numbers isolated LTR within Arabic text.

## Accessibility requirements

- Landmarks for case list, case header, and case body; a logical order that reaches status/next action
  early; focus moves predictably when switching cases and restores on return.
- Timeline is a semantic ordered structure; status uses text + icon, not color alone; participants and
  relationships are programmatically labeled.
- Full keyboard operability across list, tabs, and actions; visible focus; no traps.

## Suitable component categories

Case list, case header/status, timeline, tabs/sections, participant list, evidence/records table,
alerts, decision/action controls with reasons and history. See `../../references/30-component-library.md`.

## Variation dimensions

Case-and-timeline vs. case-and-evidence vs. multi-party emphasis; tabs vs. stacked panels; placement of
the case list; drill-into a timeline event. See [`variants.md`](variants.md).

## Anti-patterns

- Flattening a rich case into uniform cards.
- Hiding status or the next action.
- KPI header above the case.
- Treating the case like a quick queue item (losing its history and context).

## Related compositions

- [`../operational-workspace/composition.md`](../operational-workspace/composition.md) — the queue that
  may feed cases; use it when work is throughput, not deep context.
- [`../verification-workbench/composition.md`](../verification-workbench/composition.md) — when a single
  evidence decision is the whole task.

## Selection cues

Choose Case Management Split View when the case requires **rich history, evidence, timeline,
participants, and extended case context**. Choose Operational Workspace when the main task is **queue
handling, assignment, lightweight state changes, and rapid progression**.
