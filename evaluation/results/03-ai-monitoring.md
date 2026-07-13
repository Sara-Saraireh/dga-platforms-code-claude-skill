# AI monitoring

## Source prompt

A regulator operates a system that continuously monitors a large volume of transactions and uses a
model to score them for risk. Analysts watch the incoming stream, investigate the highest-risk items,
and decide which to escalate. They work long sessions and need to answer questions from the data —
where risk is concentrating, how it is trending, and what a flagged item's signals are. The system is
AI-assisted, but the analysts' job is understanding and acting on the data. The brief prescribes no
layout and explicitly warns against assuming "AI" implies a dark/cinematic treatment.

## Design direction decision

- **Product class:** Data intelligence and analytics (`references/18`).
- **Secondary influence:** Operational management — analysts also work a risk-ranked queue and escalate
  items.
- **Primary users:** Risk analysts / investigators, long sessions.
- **Primary task:** Answer questions from the data (where risk concentrates, how it trends, what an
  item's signals are) and decide what to escalate.
- **Usage environment:** Office / operations desk, sustained daily use; possibly a shared wall display
  for the live stream.
- **Primary device:** Desktop, large displays.
- **Usage frequency:** Continuous / daily, long sessions.
- **Information density:** High but focused around the lead question, not a wall of equal tiles.
- **Interaction complexity:** Expert workspace — read the primary view, filter, compare, drill into a
  flagged item's signals.
- **Decision criticality:** Medium–high (informs and triggers escalation).
- **Content type:** Dataset (with a per-item signal view).
- **Selected visual profile:** Data Intelligence (`references/21`) — **not Cinematic AI.**
- **Selected composition archetype:** Analytical Canvas (`references/20`), with a queue region from the
  Operational secondary.
- **Navigation model:** Top/side controls (time + filters) with a lead view and drill-down to item
  signals.
- **Dominant screen element:** The primary visualization answering the lead risk question (e.g. risk
  concentration/trend), with the risk-ranked queue as a strong supporting region.
- **Surface strategy:** One dominant analytical view with restrained surrounding surfaces; queue as a
  dense list; KPIs only as supporting context, not a header wall.
- **Data visualization priority:** High — but every chart answers a stated question; no decorative
  charts.
- **Motion character:** Functional (filter/drill transitions); not expressive; no glow/particles.
- **Patterns to avoid:** Cinematic AI / dark theme "because it uses AI"; equal-weight KPI-card grid
  with no dominant view; decorative charts; gradients/glow signalling "AI"; sidebar + four KPI cards +
  one chart + one table as a reflex layout.
- **Assumptions requiring validation:** Scores/signals and thresholds come from the model/service (UI
  reads them, does not compute rulings); whether a live wall-display mode is required (would justify a
  hybrid/darker analytical surface **by environment, not by AI**); escalation workflow/roles exist
  server-side.
- **Short rationale:** The analysts' job is understanding data and acting on it — Data Intelligence /
  Analytical Canvas, led by the chart that answers the key question, with a risk queue for action. AI
  is a capability here, not a reason for cinematic styling; the profile is chosen from long-use
  analytical work.

## Expected composition behavior

One dominant visualization answers the lead question (risk concentration and trend) and owns the
screen; time and filter controls sit above/beside it. A risk-ranked queue lets analysts move from
"where is risk" to "which item," and drilling into an item reveals its signals. Supporting figures
appear as a thin strip or inline, never as a KPI wall above the analysis. Every chart carries an
accessible text summary and does not rely on color alone.

## Explicit anti-patterns

- No Cinematic AI, dark theme, gradients, glow, or particles used as "AI" signaling.
- No equal-weight KPI-card grid with no dominant chart.
- No decorative charts with no question behind them.
- No reflexive sidebar + four KPI cards + chart + table.
- No accent change substituting for analytical hierarchy.
- Charts must not convey meaning by color alone; dashes/labels/legend required.

## Rubric score

| # | Category | Score | Note |
|---|----------|-------|------|
| 1 | Product-classification accuracy | 5 | Data intelligence (+ Operational secondary), not "AI experience". |
| 2 | Composition–task fit | 5 | Analytical Canvas + queue matches understand-then-escalate. |
| 3 | Visual-direction fit | 5 | Data Intelligence chosen; Cinematic AI explicitly rejected. |
| 4 | Distinction from generic dashboard | 5 | One dominant view, no KPI wall; reflex layout named and avoided. |
| 5 | Dominant-element clarity | 4 | Dominant is the lead chart; the strong secondary queue must stay subordinate — a real risk to manage. |
| 6 | Information hierarchy | 5 | Lead question dominates; KPIs demoted to supporting. |
| 7 | RTL awareness | 4 | RTL layout + LTR-isolated IDs noted; chart RTL a manual check. |
| 8 | Accessibility awareness | 4 | Text summaries, no-color-alone, keyboard addressed; assistive-tech pass manual. |
| 9 | DGA grounding | 5 | Verified green chart scheme/tokens; UI reads model output; no compliance claim. |
| 10 | Misuse of cards | 5 | KPIs as strip/inline, not a card wall. |
| 11 | Misuse of visual effects | 5 | Functional motion only; effects explicitly barred. |
| 12 | Color-only variation | 5 | Structural differentiation (analytical canvas + queue, high focused density). |

## Assessment

- **Result:** Pass. All thresholds met.
- **Strongest aspects:** This case most validates Phase 1 — it resists the "AI ⇒ cinematic/dark" and
  "KPI-wall dashboard" defaults and instead chooses Data Intelligence driven by the lead question.
- **Weakest aspects:** The dominant-element balance (lead chart vs. strong risk queue) needs discipline
  in implementation so the queue supports rather than competes; scored 4 on clarity for that reason.
- **Ambiguity:** Whether a live wall-display mode is in scope — recorded as an assumption; if so, a
  hybrid/darker surface would be justified by environment, not by AI.
- **Generic-dashboard fallback:** None — actively prevented.
