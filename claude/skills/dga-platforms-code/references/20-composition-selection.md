# 20 — Composition selection

Choose the page composition from the product class and dominant task — not from habit. A dashboard is
**not** the default layout, and a card grid is **not** the default composition. This file defines the
archetypes and a matrix for picking one. Reuse the existing component primitives (`components/`) and
verified tokens (`tokens/`) inside whichever archetype you choose; vary the composition, not the
primitives.

**Status:** Interpretive operational guidance
**Authority:** Secondary to official DGA sources and verified extractions
**Official DGA token override:** No
**Compliance claim:** No
**Purpose:** Design decision support for Claude Code

This is interpretive operational guidance, not an official DGA extraction. It does **not** override
verified tokens (`tokens/`) or constitute official DGA compliance.

## Core principles

- **The dominant element owns the screen.** Every archetype has exactly one thing that must dominate;
  everything else supports it.
- **Not every section is a Card.** Cards are one surface among several (flat sections, tables, split
  panes, editorial blocks). Wrapping unrelated content in identical cards flattens hierarchy.
- **KPIs are not a mandatory header.** KPIs may appear as a thin strip, inline summary values, a table
  summary row, or contextual figures next to the thing they describe. Do **not** place a wall of
  decorative KPI cards above the actual user task.
- **Match density to the class** (`references/18-product-experience-classification.md`) and keep it
  responsive (`references/09-responsive-mobile.md`).

## Archetypes

### 1. Guided Service Flow

- **Use cases:** citizen procedures, applications, renewals, onboarding.
- **Dominant task:** complete the current step and move to the outcome.
- **Dominant page element:** the **active step / current form**.
- **Primary regions:** progress indicator, single active step, contextual help, primary action.
- **Navigation model:** stepped (RTL: advances toward the left).
- **Expected density:** low — one decision per screen.
- **Mobile transformation:** already near-linear; stack help below the field, keep one primary action.
- **Suitable components:** `Stepper`, `Input`, `Alert`, `Button`, review summary before submit.
- **Anti-patterns:** KPI header, side analytics, multi-column forms, competing CTAs.
- **When not to use:** anything the user does repeatedly at speed, or where they need the whole picture
  at once.

### 2. Verification Workbench

- **Use cases:** regulatory review, licensing, document/identity verification, audit rulings.
- **Dominant task:** examine evidence and record an authoritative decision.
- **Dominant page element:** the **evidence** (document, record, comparison).
- **Primary regions:** evidence viewer (largest), the record/claim being checked, decision + reason
  controls, audit trail.
- **Navigation model:** case-scoped, often split (evidence beside metadata).
- **Expected density:** medium–high, concentrated on the evidence.
- **Mobile transformation:** stack evidence over metadata; keep decision controls reachable; this
  archetype is desktop-first by nature.
- **Suitable components:** split panes, `Badge` for status, `Alert` for flags, tables for line items,
  decision `Button`s with a required reason.
- **Anti-patterns:** KPI cards as the landing view, evidence shrunk into a small card, decision buried.
- **When not to use:** high-volume triage with no per-item evidence (use Operational Workspace).

### 3. Operational Workspace

- **Use cases:** case queues, ticket/permit handling, coordination consoles.
- **Dominant task:** triage and act on a stream of items without losing context.
- **Dominant page element:** the **queue / work list** and the active item.
- **Primary regions:** queue (filters + list), detail pane or drawer, persistent action bar.
- **Navigation model:** master–detail; queue stays visible or one step away.
- **Expected density:** high.
- **Mobile transformation:** queue becomes the primary screen; item opens full-screen with a clear
  back to the queue.
- **Suitable components:** dense tables, filters, `Badge`, drawer/`Modal` detail, bulk actions.
- **Anti-patterns:** one-item-per-screen flow, hero banner, full-width decorative charts above the
  queue, over-carded rows.
- **When not to use:** single procedures (Guided Service Flow) or read-only reading (Narrative Portal).

### 4. Analytical Canvas

- **Use cases:** performance analytics, monitoring, planning, policy insight.
- **Dominant task:** answer a specific question from data and support a decision.
- **Dominant page element:** the **primary visualization** answering the lead question.
- **Primary regions:** one dominant chart/view, controls (filters/time), supporting secondary charts,
  contextual figures.
- **Navigation model:** top or side; a lead view with drill-downs.
- **Expected density:** high but focused; one clear focal chart, not a wall of equal tiles.
- **Mobile transformation:** primary chart first and full-width; secondary charts stack; simplify
  interactions.
- **Suitable components:** `LineChart`, `BarChart`, `DonutChart`, `ChartContainer` with a required
  accessible summary, `KpiCard` as _supporting_ context only.
- **Anti-patterns:** equal-weight KPI-card grid with no dominant view; decorative charts with no
  question; every metric an identical tile.
- **When not to use:** when data is incidental — don't manufacture an analytics page for a service.

### 5. Case Management Split View

- **Use cases:** investigations, complaints, multi-stage cases with history and actions.
- **Dominant task:** understand one case in full and move it forward.
- **Dominant page element:** the **case context** (subject + status + history) with actions.
- **Primary regions:** case header/status, timeline/history, related evidence/parties, action panel.
- **Navigation model:** split — list of cases on one side, full case on the other; or case-scoped tabs.
- **Expected density:** medium–high.
- **Mobile transformation:** collapse to case list → full case; timeline vertical; actions in a sticky
  bar.
- **Suitable components:** timeline, `Badge`, tabs/sections, `Alert`, tables for related items.
- **Anti-patterns:** flattening a rich case into uniform cards; hiding status/next action; KPI header.
- **When not to use:** simple queues without per-case history (Operational Workspace).

### 6. Narrative Portal

- **Use cases:** public information, editorial pages, guidance, service discovery landing.
- **Dominant task:** read/understand, or navigate to the right destination.
- **Dominant page element:** the **content / message and its primary onward action**.
- **Primary regions:** clear heading and lead, readable body with rhythm, prominent onward links.
- **Navigation model:** top nav + in-page anchors; simple.
- **Expected density:** low–medium, editorial spacing.
- **Mobile transformation:** single readable column; generous type; sticky primary link if needed.
- **Suitable components:** headings/type scale, `Card` only for genuine choices, `Button` links.
- **Anti-patterns:** admin tables, KPI tiles, workspace chrome around what is really an article.
- **When not to use:** anything transactional or operational.

### 7. Mobile Action Stack

- **Use cases:** field inspection, on-the-go capture, quick single-purpose mobile tasks.
- **Dominant task:** capture or act quickly on one thing at a time, hands/context constrained.
- **Dominant page element:** the **current action / capture control**.
- **Primary regions:** one action per screen, large targets, sequential steps, offline-tolerant state.
- **Navigation model:** stacked / stepped, thumb-reachable.
- **Expected density:** low.
- **Mobile transformation:** this _is_ the mobile form; on larger screens, center a narrow column —
  do not spread into a desktop dashboard.
- **Suitable components:** large `Button`s, `Input`, photo/scan capture, `Stepper`, `Alert` for sync
  state.
- **Anti-patterns:** multi-column layouts, wide tables, hover-only interactions, tiny targets.
- **When not to use:** desk-based analysis or review (use the workbench/canvas archetypes).

## Composition selection matrix

| Primary class                           | Dominant task                 | Archetype                                             | Dominant element         |
| --------------------------------------- | ----------------------------- | ----------------------------------------------------- | ------------------------ |
| Government service                      | Complete a procedure          | Guided Service Flow                                   | Active step / form       |
| Regulatory verification                 | Judge evidence, record ruling | Verification Workbench                                | The evidence             |
| Operational management                  | Triage a queue                | Operational Workspace                                 | Queue + active item      |
| Data intelligence & analytics           | Answer a question from data   | Analytical Canvas                                     | Primary visualization    |
| Regulatory / investigation (rich cases) | Move one case forward         | Case Management Split View                            | Case context             |
| Public information                      | Read / navigate               | Narrative Portal                                      | Content + onward action  |
| Field inspection                        | Capture on site               | Mobile Action Stack                                   | Current action           |
| Executive / exhibition                  | Absorb a headline once        | Narrative Portal (large-scale) or a single focal view | The message / one signal |

Executive/exhibition experiences are usually a large-scale, low-density focal view rather than a
standalone archetype — one message or a few big signals dominate; see the Cinematic AI notes in
`references/21-visual-profile-selection.md`.

**Output of this step:** one archetype, its single dominant element, the primary regions, and the
mobile transformation. Record the anti-patterns you are explicitly avoiding in the brief (`19`) and
enforce them via `references/22-variation-and-repetition-control.md`.

See also: `references/03-layout-and-navigation.md`, `references/09-responsive-mobile.md`,
`references/30-component-library.md`.

Choose Case Management Split View when each case requires rich history,
evidence, timeline, participants, or extended case context.

Choose Operational Workspace when the primary task is managing a queue,
changing lightweight states, assigning work, and progressing items quickly.
