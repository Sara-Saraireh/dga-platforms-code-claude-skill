# Analytical Canvas — variants

Structurally distinct variants of [`composition.md`](composition.md). Interpretive operational
guidance; structure only, no visual styling. Variants must differ in structure (dominant region,
ordering, split, navigation, drill-down, density, sequence, or responsive transformation), not in color,
spacing, radius, shadow, typography, or accent.

## Dominant Visualization

### Best for
Answering one lead question from a single primary chart/view (trend, distribution, performance).

### Structural model
One large visualization owns the canvas; controls frame it; contextual metrics and signals are thin
supporting regions.

### Dominant element
The single primary chart/view.

### Regions
Global controls · primary visualization (dominant) · supporting metric strip · signals list ·
drill-down panel · source/freshness note.

### Navigation
Top/side controls; drill from the visualization into a detail panel without losing the view.

### Responsive behavior
Desktop: large focal chart. Tablet: full-width chart, controls collapse to a bar. Mobile: chart first
and full-width, supporting regions stack, drill-down full-screen.

### Distinction from other variants
A single dominant chart, not an investigation queue (Signal Investigation) or a map (Geographic
Monitoring).

### Risks
Sliding back toward a KPI grid; enforce one dominant view and demote metrics to a strip.

### Avoid when
The main task is triaging flagged items (Signal Investigation) or the data is inherently spatial
(Geographic Monitoring).

## Signal Investigation

### Best for
Monitoring where analysts move from "where is risk" to "which item" and inspect a flagged item's
signals.

### Structural model
A ranked signal/alert list paired with an item-signal detail region; a supporting overview
visualization sits above or beside, not dominant.

### Dominant element
The signal list plus the selected item's signal detail.

### Regions
Global controls · ranked signals list (dominant) · item signal detail · supporting overview chart ·
escalation actions · source/freshness note.

### Navigation
Master–detail over signals; selecting a signal opens its detail; escalate/act from the detail.

### Responsive behavior
Desktop: list beside detail with a supporting chart. Tablet: list over detail. Mobile: signals list is
primary; item detail full-screen with back.

### Distinction from other variants
Blends Analytical Canvas with an operational signal queue — the *list+detail* dominates, unlike
Dominant Visualization where a chart leads.

### Risks
Can drift into a pure Operational Workspace; keep the analytical overview and per-signal evidence
present.

### Avoid when
There is one clear question best answered by a chart (Dominant Visualization), or data is spatial
(Geographic Monitoring).

## Geographic Monitoring

### Best for
Data whose primary dimension is location (coverage, incidents, regional performance).

### Structural model
A map is the dominant canvas; a linked list/legend and a detail panel accompany it; filters scope the
map.

### Dominant element
The map / spatial view.

### Regions
Global + spatial filters · map (dominant) · linked location list/legend · location detail panel ·
supporting metrics · source/freshness note.

### Navigation
Map-led; selecting a region/point filters the list and opens detail; list and map stay in sync.

### Responsive behavior
Desktop: map dominant with a side list/detail. Tablet: map over list. Mobile: map first with a
bottom-sheet list/detail; selection drives both.

### Distinction from other variants
The dominant element is a map, not a chart or a signal list — a spatial navigation model the others lack.

### Risks
Map as decoration when location is not central; only use when geography is the real question.

### Avoid when
Location is incidental (use Dominant Visualization or Signal Investigation).
