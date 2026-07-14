# AI monitoring (variant)

## Source brief

A utilities regulator monitors service outages and complaints nationwide. A model ranks incoming reports
by severity. Analysts need to see where problems are concentrating **geographically**, select a region
to see its reports, and open an individual report's details to decide whether to escalate. Location is
the primary way analysts reason about the data; the ranked reports and per-report detail support that
spatial view. ("AI" must not imply dark/cinematic styling.)

## Phase 1 direction context

- **Product class:** Data intelligence and analytics (secondary: Operational management).
- **Conceptual visual profile:** Data Intelligence (not Cinematic AI).
- **Expected composition family:** Analytical Canvas.
- **Primary task:** Answer "where is risk concentrating" from data and decide what to escalate.
- **Usage environment:** Operations/office, long sessions, possibly large displays.

## Composition decision

- **Selected composition:** Analytical Canvas.
- **Selected variant:** Geographic Monitoring.
- **Dominant element:** The map / spatial view of report concentration.
- **Navigation model:** Map-led; selecting a region filters a linked report list and opens report
  detail; list and map stay in sync.
- **Density:** High but focused around the spatial view.

## Selection rationale

The brief states location is *the* primary dimension analysts reason with, and the workflow is region →
reports → report detail. That is the Geographic Monitoring variant, whose dominant element is a map with
a linked location list and a detail panel. Chosen over Dominant Visualization (a single chart leads —
wrong when the question is inherently spatial) and Signal Investigation (a ranked signal list leads —
closer, because reports are severity-ranked, but the brief makes the *map* the primary reasoning surface
and the ranked list a support, so the list-led variant would invert the stated hierarchy).

## Structural model

- **Primary regions:** global + spatial filters (severity, time) · map (dominant) · linked region/report
  list · report detail panel · supporting severity metrics · source/freshness note.
- **Region priority:** map dominant → linked list (synced) → report detail on selection → supporting
  metrics (strip) → source/freshness always present.
- **User flow:** scope filters → read concentration on the map → select a region → scan its
  severity-ranked reports → open a report → decide/escalate.
- **Relationship between regions:** map selection drives the list; list selection drives the detail; the
  metric strip and freshness note contextualize the map, never headline above it.
- **Progressive disclosure:** map overview → region reports → single-report signals/detail on demand.

## Responsive transformation

### Desktop
Map as the main canvas with a side region/report list and a detail panel/drawer; filters in a top bar;
a thin supporting severity strip.

### Tablet
Map over list; detail becomes a full-width panel; filters collapse to a compact bar.

### Mobile
Map first and full-width with a **bottom-sheet** region/report list; selecting a region raises the
sheet's ranked reports; opening a report is full-screen with a back to the map — a purposeful spatial-
first restructuring, not a vertical stack of desktop panels. Filters behind an affordance; freshness
pinned.

## RTL behavior

- **Reading flow:** right→left for chrome, list, and detail; the map itself is geographic (not mirrored),
  but surrounding controls/labels follow RTL.
- **Leading/trailing regions:** filters/legend lead (right); detail panel opens toward the trailing edge.
- **Navigation order:** list items and report fields flow right→left.
- **Sequence/direction:** time filters and any trend sparkline respect RTL; severity ranking reads
  top-to-start.
- **Directional icons:** expand/close and pan controls mirrored where directional.
- **LTR isolation:** report IDs, coordinates, meter/asset numbers, timestamps, and numeric severity
  scores are isolated LTR within Arabic text.

## Accessibility requirements

- The map is not the sole channel: the linked list provides an equivalent, keyboard-navigable path to
  every region and report (map-not-color-alone; a non-spatial alternative to reach the data).
- Any chart/metric has a text summary and non-color encoding; severity uses text + icon, not color alone.
- Landmarks separate filters, map, list, and detail; focus moves predictably on selection and returns on
  close; reduced motion on map/pan/zoom transitions; adequate control target sizes.

## Related composition considered

- **Alternative:** Analytical Canvas → Signal Investigation.
- **Why considered:** reports are severity-ranked and analysts investigate and escalate items —
  list+detail behavior.
- **Why rejected:** the brief makes location the primary reasoning surface; leading with a ranked list
  would demote the map the analysts actually reason with. Signal Investigation's list+detail behavior is
  retained *inside* Geographic Monitoring (the linked list and report detail), without making it dominant.

## Explicit anti-patterns

- Four equal KPI cards above the map.
- A dark/cinematic treatment chosen because the system "uses AI".
- Multiple equally dominant visualizations (map + big charts competing).
- A decorative map with no linked data path, or a map with no non-spatial alternative.
- Reducing every insight to a uniform card.

## Rubric scoring

| # | Category | Score | Note |
|---|----------|-------|------|
| 1 | Composition selection | 5 | Analytical Canvas is correct. |
| 2 | Variant selection | 5 | Geographic Monitoring matches the spatial-primary task. |
| 3 | Dominant element clarity | 4 | Map dominant; the strong linked list must stay subordinate — a balance to hold. |
| 4 | Structural differentiation | 5 | Map-led, synced list+detail — distinct from all others. |
| 5 | Responsive transformation | 5 | Mobile is map + bottom sheet, a real restructuring. |
| 6 | Card-grid avoidance | 5 | Map/list/detail, no KPI grid; explicit anti-pattern. |
| 7 | Operational vs case distinction | 5 | Correctly analytical with an operational secondary, not a case tool. |
| 8 | Consistency with Phase 1 | 5 | Data Intelligence / Analytical Canvas; Cinematic AI rejected. |
| 9 | RTL awareness | 4 | RTL chrome + LTR isolation specified; map-label RTL a manual check. |
| 10 | Accessibility awareness | 5 | Non-spatial list alternative, chart summaries, non-color severity. |
| 11 | No visual-theme leakage | 5 | Structure only; explicitly no dark/cinematic. |
| 12 | Provenance discipline | 5 | Interpretive, subordinate; verified chart scheme referenced, not redefined. |

## Assessment

- **Result:** Pass (all thresholds met).
- **Strongest aspect:** Resists both the KPI-wall dashboard and the "AI ⇒ dark" reflex, choosing a
  spatial-primary structure with an accessible non-spatial alternative.
- **Weakest aspect:** Map vs. ranked-list dominance needs discipline so the list supports rather than
  competes (dominant-element scored 4).
- **Structural ambiguity:** How prominent the severity-ranked list is relative to the map.
- **Generic-dashboard fallback detected:** No.
- **Card-grid fallback detected:** No.
- **Visual-theme leakage detected:** No.
