# Analytical Canvas

## Status and boundary

Interpretive operational guidance, secondary to official DGA sources and verified extractions. Defines
structure only — no visual styling, tokens, or code. Does not constitute official DGA compliance. See
[`../README.md`](../README.md) and [`../../references/20-composition-selection.md`](../../references/20-composition-selection.md).

## Purpose

Organize an analytical screen so one primary view answers the lead question and everything else
supports it — not a wall of equal tiles.

## Use when

- Monitoring, analytics, early warning, anomaly detection.
- Data exploration and performance/policy insight.
- AI-assisted monitoring where the analyst's job is understanding and acting on data (this is a Data
  Intelligence context, not Cinematic AI — see `../../references/21-visual-profile-selection.md`).

## Do not use when

- Data is incidental to the task — do not manufacture an analytics page for a service or article.
- The task is queue throughput (use [`../operational-workspace/composition.md`](../operational-workspace/composition.md)).
- The task is evidence judgement (use [`../verification-workbench/composition.md`](../verification-workbench/composition.md)).

## Primary task

Answer a specific question from data and support a decision (including which items to investigate or
escalate).

## Dominant element

The **primary visualization** answering the lead question — a chart, map, network, timeline, or signal
field. Exactly one dominant view.

## Structural regions

In priority order:

1. **Global controls** — time range, filters, scope.
2. **Primary visualization** — the dominant, largest region.
3. **Contextual metrics** — a thin strip / inline figures supporting the primary view (not a KPI wall).
4. **Alerts or signals** — what needs attention now.
5. **Drill-down detail** — the item/segment view reached from the primary visualization.
6. **Source / freshness context** — provenance and last-updated, so the data can be trusted.

## Information hierarchy

Primary visualization dominates → global controls frame it → signals/alerts → contextual metrics
(supporting) → drill-down on demand → source/freshness always available. Metrics never headline above
the analysis.

## Navigation model

Top or side controls with a lead view and drill-downs. Filtering and time scoping are first-class;
drilling opens detail without losing the primary view's context.

## Density

High but focused around the lead question — one clear focal view, not many equally weighted charts.

## Responsive transformation

### Desktop

Primary visualization occupies the main canvas; controls above/beside; signals and contextual metrics
in supporting regions; drill-down as a panel/drawer.

### Tablet

Primary visualization stays full-width and first; controls collapse into a compact bar; supporting
regions move below; drill-down becomes a full-width panel.

### Mobile

Primary visualization first and full-width with simplified interaction; controls behind a filter
affordance; signals and metrics stack below; drill-down full-screen. Dominant view preserved.

## RTL behavior

`dir="rtl"` and logical properties for layout; axis/legend and time direction handled RTL-correctly;
numbers, units, and axis values kept in natural LTR order and isolated. Charts must not rely on color
alone (labels, legend, patterns) and require an accessible text summary.

## Accessibility requirements

- Every chart has a required text summary and a non-color encoding (labels/patterns/direct values).
- Controls are keyboard-operable; focus visible; drill-down is reachable and dismissible by keyboard.
- Landmarks separate controls, primary view, and detail; reading order reaches the primary view early.
- Respect reduced motion for transitions/animation on data updates.

## Suitable component categories

Chart container with required accessible summary, line/bar/donut and other visualization regions, filter
and time controls, signal/alert list, KPI/metric as *supporting* context only, drill-down panel, source
note. See `../../references/30-component-library.md` and the verified chart scheme in `../../tokens/`.

## Variation dimensions

Single dominant chart vs. signal-investigation vs. geographic/map-led; placement of drill-down;
ordering of signals vs. metrics; interaction sequence (overview → filter → drill). See
[`variants.md`](variants.md).

## Anti-patterns

- Four equal KPI cards above the visualization.
- Reducing every insight to a card.
- Decorative charts with no question behind them.
- Multiple equally dominant visualizations competing for the screen.
- Dark/cinematic styling chosen because the system "uses AI".

## Related compositions

- [`../operational-workspace/composition.md`](../operational-workspace/composition.md) — when "which
  item" and throughput dominate over "what does the data say".
- [`../case-management-split-view/composition.md`](../case-management-split-view/composition.md) — when
  a flagged item becomes a full investigated case.

## Selection cues

Choose Analytical Canvas when the primary deliverable is understanding data through one dominant view.
If the analyst spends most time working a ranked list of items rather than reading the visualization,
lead with Operational Workspace and keep the canvas as a supporting region.
