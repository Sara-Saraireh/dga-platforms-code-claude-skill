# Operational management

## Source prompt

A service center needs a console for coordinators to work a continuous queue of incoming requests.
Throughout the day they scan new items, assign them, progress them through states, and resolve them,
returning to the queue each time. Volume is high, speed matters, and they must not lose their place or
context when they open an item. The team works at desks, often with two monitors, and relies on
keyboard shortcuts. The brief prescribes no layout.

## Design direction decision

- **Product class:** Operational management (`references/18`).
- **Secondary influence:** None dominant. (Individual items have states but no rich per-case history is
  described, so Case Management Split View is not warranted — see rationale.)
- **Primary users:** Coordinators / operators working a high-volume queue.
- **Primary task:** Triage and act on a continuous stream (scan → assign → progress → resolve) without
  losing context.
- **Usage environment:** Office desks, often dual-monitor, all-day.
- **Primary device:** Desktop (multi-monitor).
- **Usage frequency:** Continuous, all-day.
- **Information density:** High.
- **Interaction complexity:** Expert workspace; keyboard-driven, repetitive high-throughput actions.
- **Decision criticality:** Medium–high at high volume.
- **Content type:** Queue (stream of work items).
- **Selected visual profile:** Operational Command (`references/21`).
- **Selected composition archetype:** Operational Workspace (`references/20`).
- **Navigation model:** Master–detail; the queue stays visible or one step away, detail opens in a pane
  or drawer so context is never lost.
- **Dominant screen element:** The queue / work list and the active item.
- **Surface strategy:** Dense tables and panes over cards; a persistent action bar; filters. Minimal
  chrome.
- **Data visualization priority:** Supporting signals only (e.g. a thin counts strip), tied to the
  work — no full-width decorative charts above the queue.
- **Motion character:** Minimal — avoid animation that slows repeated use.
- **Patterns to avoid:** One-item-per-screen guided flow; hero banner; full-width decorative charts
  above the queue; over-carded rows; KPI-card header wall.
- **Assumptions requiring validation:** Item states/transitions and assignment rules come from the
  server; keyboard-shortcut map to be defined with the team; whether bulk actions are in scope; SSO +
  role checks exist.
- **Short rationale:** Continuous high-volume triage where losing context is the main risk points to a
  master–detail Operational Workspace with the queue dominant. Chose Operational Workspace over Case
  Management Split View because the brief describes lightweight state progression, not rich per-case
  history/timelines; if per-case history were central, Case Management Split View would be the fit.

## Expected composition behavior

The queue (with filters) is the primary, persistent region; opening an item shows detail in a pane or
drawer while the queue stays in view or one step back, preserving place and context. A persistent
action bar supports assign/progress/resolve, and the layout is keyboard-first for high throughput.
Metrics, if shown, are a thin supporting strip — never a KPI wall that pushes the queue down.

## Explicit anti-patterns

- No guided one-thing-per-screen flow for a triage tool.
- No hero banner or marketing chrome.
- No full-width decorative charts above the queue.
- No over-carding of queue rows; no KPI-card header wall.
- No accent change substituting for the dense master–detail structure.
- Item IDs isolated LTR within Arabic text.

## Rubric score

| # | Category | Score | Note |
|---|----------|-------|------|
| 1 | Product-classification accuracy | 5 | Operational management from continuous high-volume triage. |
| 2 | Composition–task fit | 5 | Operational Workspace (master–detail) fits queue triage. |
| 3 | Visual-direction fit | 5 | Operational Command: dense, utilitarian, light. |
| 4 | Distinction from generic dashboard | 4 | Clearly queue-first; some overlap with "admin console" look, mitigated by no-KPI-wall rule. |
| 5 | Dominant-element clarity | 5 | Queue + active item is the single dominant element. |
| 6 | Information hierarchy | 5 | Metrics demoted to a supporting strip; queue leads. |
| 7 | RTL awareness | 4 | RTL table alignment + LTR-isolated IDs; real-content RTL a manual check. |
| 8 | Accessibility awareness | 4 | Keyboard operability/focus emphasized; assistive-tech + dense-table a11y manual. |
| 9 | DGA grounding | 5 | Verified tokens/components; server source of truth; no compliance claim. |
| 10 | Misuse of cards | 5 | Tables/panes over cards; no over-carding. |
| 11 | Misuse of visual effects | 5 | Minimal motion; no effects. |
| 12 | Color-only variation | 5 | Structural differentiation (master–detail, high density) vs. other cases. |

## Assessment

- **Result:** Pass. All thresholds met.
- **Strongest aspects:** Correct queue-dominant master–detail with explicit context-preservation;
  metrics demoted rather than headlined.
- **Weakest aspects:** Closest of the six to a conventional "admin console," so distinction from a
  generic dashboard rests on discipline (no KPI wall, tables over cards) — scored 4 on category 4.
- **Ambiguity:** Operational Workspace vs. Case Management Split View — resolved by the brief's
  lightweight state model; documented in the rationale.
- **Generic-dashboard fallback:** None — the KPI-wall header is explicitly barred.
