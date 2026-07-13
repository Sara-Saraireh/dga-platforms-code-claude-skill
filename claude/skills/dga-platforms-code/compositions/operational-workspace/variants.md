# Operational Workspace — variants

Structurally distinct variants of [`composition.md`](composition.md). Interpretive operational
guidance; structure only, no visual styling. Variants must differ in structure (dominant region,
ordering, split, navigation, drill-down, density, sequence, or responsive transformation), not in color,
spacing, radius, shadow, typography, or accent.

## Queue and Detail

### Best for
Continuous triage where operators open items, act, and return to the queue at speed.

### Structural model
Master–detail: persistent queue with a detail pane/drawer for the active item; persistent action bar.

### Dominant element
The queue plus the active item.

### Regions
Filters · work queue (anchor) · active-item detail · action bar · status context · counts strip.

### Navigation
Master–detail; item opens in a pane/drawer; returning preserves place; keyboard-first.

### Responsive behavior
Desktop: queue and detail side by side. Tablet: detail collapses to a drawer. Mobile: queue primary,
item full-screen with back.

### Distinction from other variants
Item detail is the working surface (list+detail), unlike Task Board (state columns) or Command Overview
(monitoring-led).

### Risks
Detail can hide the queue on small screens; guarantee a clear, place-preserving return.

### Avoid when
Work is best seen as movement across states (Task Board) or the priority is watching the whole operation
(Command Overview).

## Command Overview

### Best for
Coordination consoles where an operator watches the whole operation and drills into hotspots.

### Structural model
A compact operational overview (queues by status, load, attention items) leads; drilling opens a focused
queue-and-detail.

### Dominant element
The operational overview (state of the operation) with drill-down to items.

### Regions
Overview of queues/states (dominant) · attention/exception list · drill-down queue+detail · actions ·
source/freshness.

### Navigation
Overview-led; drilling narrows to a specific queue and item; return to overview.

### Responsive behavior
Desktop: overview with side exception list. Tablet: overview over list. Mobile: overview summary first,
drill into a full-screen queue.

### Distinction from other variants
Leads with an operation-wide overview (supporting signals tied to work), not a single queue (Queue and
Detail) or state columns (Task Board). The overview is operational, not an executive KPI wall.

### Risks
Overview slipping into a decorative KPI wall; keep every figure actionable and tied to a queue.

### Avoid when
There is only one queue to work (Queue and Detail), or throughput is about moving items across states
(Task Board).

## Task Board

### Best for
Work whose progress is best seen as movement across states (intake → in progress → review → done).

### Structural model
Columns by state with items as cards moved between columns; item detail opens on demand.

### Dominant element
The board of state columns and their items.

### Regions
Filters · state columns (dominant) · item cards · item detail (drawer) · actions · counts per column.

### Navigation
Board-led; move items across columns; open detail in a drawer; act.

### Responsive behavior
Desktop: horizontal columns. Tablet: fewer columns with horizontal scroll. Mobile: one column at a time
with a state switcher; detail full-screen.

### Distinction from other variants
A state-flow board — the only variant here whose structure is columns-by-status rather than
list-and-detail or overview.

### Risks
Cards multiplying into visual clutter; keep card content minimal and state-focused (this is the one
place cards are structural, not decorative).

### Avoid when
Items need deep per-item work each time (Queue and Detail), or the operation needs whole-picture
monitoring (Command Overview).
