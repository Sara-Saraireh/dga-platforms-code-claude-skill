# Mobile Action Stack — variants

Structurally distinct variants of [`composition.md`](composition.md). Interpretive operational
guidance; structure only, no visual styling. Variants must differ in structure (dominant region,
ordering, split, navigation, drill-down, density, sequence, or responsive transformation), not in color,
spacing, radius, shadow, typography, or accent.

## Capture and Review

### Best for
Field tasks that capture evidence (photos/scans) and confirm it before submitting.

### Structural model
Capture step(s) followed by a compact review-before-submit; one action per screen, then a consolidated
confirm.

### Dominant element
The active capture control, then the review of captured items.

### Regions
Current context · capture control (dominant) · captured-items review · confirm/submit · sync/offline
state.

### Navigation
Stacked capture steps → review → submit; back preserves captures; submit terminal.

### Responsive behavior
Mobile: one capture per screen, large targets, sticky action; review as a stacked list. Tablet: same
stack, wider targets. Desktop: narrow centered column only.

### Distinction from other variants
Adds an explicit review-before-submit stage, unlike Quick Verification (no review) or Guided Inspection
(checklist-driven).

### Risks
Review step feeling heavy in the field; keep it to captured items and outcome only.

### Avoid when
The task is a single instantaneous check (Quick Verification) or a long structured checklist (Guided
Inspection).

## Guided Inspection

### Best for
Structured on-site inspections that work through a checklist against a location/asset.

### Structural model
A sequence of checklist items, each its own screen with capture where needed, tracked by progress; ends
in a submitted report.

### Dominant element
The current checklist item's action.

### Regions
Current context · checklist item action (dominant) · progress/status · per-item capture · confirmation ·
sync/offline state.

### Navigation
Stepped through the checklist; progress indicator shows position; back preserves entries.

### Responsive behavior
Mobile: one item per screen with progress "item X of N"; sticky primary. Tablet: same sequence, larger
targets. Desktop: narrow centered column.

### Distinction from other variants
Checklist-sequence structure with progress across many items — where Capture and Review centers on
capture+review and Quick Verification is a single action.

### Risks
Long checklists fatiguing users; support save/resume and clear progress.

### Avoid when
There is a single action (Quick Verification) or free-form capture without a checklist (Capture and
Review).

## Quick Verification

### Best for
A single fast on-site check (scan a code, confirm a status) with an immediate result.

### Structural model
One primary action (scan/confirm) with an immediate result state; minimal surrounding structure.

### Dominant element
The single verification action and its result.

### Regions
Current context · verification action (dominant) · immediate result · optional follow-up action ·
connectivity state.

### Navigation
Single screen; action → result; optional next.

### Responsive behavior
Mobile: full-screen action then result; large target; sticky. Tablet: same, centered. Desktop: narrow
centered column.

### Distinction from other variants
No sequence and no review — the leanest structure; a single action/result, unlike the multi-step Guided
Inspection or capture-plus-review flow.

### Risks
Ambiguous result state; make success/failure unmistakable and offline-aware.

### Avoid when
Multiple captures or a checklist are needed (use the other variants).
