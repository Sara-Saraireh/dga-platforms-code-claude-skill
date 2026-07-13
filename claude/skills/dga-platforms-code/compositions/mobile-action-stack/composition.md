# Mobile Action Stack

## Status and boundary

Interpretive operational guidance, secondary to official DGA sources and verified extractions. Defines
structure only — no visual styling, tokens, or code. Does not constitute official DGA compliance. See
[`../README.md`](../README.md) and [`../../references/20-composition-selection.md`](../../references/20-composition-selection.md).

## Purpose

Organize an on-the-move task so one action fills the screen at a time, with large targets and
offline-tolerant state.

## Use when

- Field inspection and on-site capture.
- Scanning, photo capture, and short mobile tasks.
- Step-through verification performed on a phone or tablet, often one-handed.

## Do not use when

- The task is desk-based analysis or review (use the workbench/canvas compositions).
- The user needs the whole picture at once or dense multi-region layouts.
- The primary device is desktop.

## Primary task

Capture or act on one thing at a time and confirm it, in the field.

## Dominant element

The **current action** — the active capture/confirm control for this step.

## Structural regions

In priority order:

1. **Current context** — what/where is being acted on (concise).
2. **Main action** — the focal capture/confirm control; the largest target.
3. **Task status** — progress through the sequence and what remains.
4. **Capture / upload controls** — camera, scan, attach.
5. **Confirmation** — clear success/record state after each action.
6. **Offline or connectivity state** — sync status where applicable.

## Information hierarchy

Current action dominates → context orients briefly → status shows progress → capture controls are
immediate → confirmation is explicit → connectivity/sync state always visible when relevant. One action
per screen.

## Navigation model

Stacked / stepped, thumb-reachable. Forward advances the sequence; back is available; state persists
across steps and across connectivity loss.

## Density

Low.

## Responsive transformation

### Desktop

Rare for this composition; if shown, center a single narrow column — do not spread into a desktop grid
or add sidebars.

### Tablet

Single-column stack with larger targets; optional side context only if it does not compete with the
action.

### Mobile

The native form: one action per screen, large thumb-reachable targets, high-contrast controls for
outdoor legibility, sticky primary action, and a persistent sync indicator. Dominant action preserved.

## RTL behavior

`dir="rtl"`, logical start/end; mirror directional controls; keep steps flowing right→left. Scanned
codes, asset IDs, and Latin/derived values kept LTR and isolated within Arabic text.

## Accessibility requirements

- Large touch targets meeting minimum size; high contrast for sunlight; reduced-motion respected.
- Each control is labeled; capture results and errors are announced; sync/offline state is conveyed by
  text + icon, not color alone.
- Logical focus order top-to-start; visible focus; no reliance on hover.

## Suitable component categories

Large primary buttons, single inputs, camera/scan/upload capture controls, stepper/progress, sync/offline
status indicator, confirmation panel. See `../../references/30-component-library.md`.

## Variation dimensions

Capture-and-review vs. guided inspection vs. quick verification; per-item vs. checklist sequence; amount
of review before submit; offline emphasis. See [`variants.md`](variants.md).

## Anti-patterns

- Desktop sidebars or dense multi-column layouts on mobile.
- Tiny action targets; hover-dependent controls.
- Long tables; excessive text entry in the field.
- Hiding sync/offline state.

## Related compositions

- [`../guided-service-flow/composition.md`](../guided-service-flow/composition.md) — the desk-oriented
  stepped sibling for procedures.
- [`../verification-workbench/composition.md`](../verification-workbench/composition.md) — where
  captured evidence may later be reviewed at a desk.

## Selection cues

Choose Mobile Action Stack when the task happens on site, on a phone, one action at a time. If the same
domain has a desk-based review or analysis surface, that surface is a different composition — do not
force the field stack onto the desktop.
