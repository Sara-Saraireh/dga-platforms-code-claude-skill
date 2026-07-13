# 18 — Product experience classification

Classify the product **before** choosing any visual direction, composition, or accent. The class is
driven by what the user is trying to do and where they do it — not by industry name, brand color, or
whether the system happens to use AI. The class you pick here constrains the composition (`20`), the
visual profile (`21`), and the variation budget (`22`).

**Status:** Interpretive operational guidance
**Authority:** Secondary to official DGA sources and verified extractions
**Official DGA token override:** No
**Compliance claim:** No
**Purpose:** Design decision support for Claude Code

This is interpretive operational guidance, not an official DGA extraction. It does **not** override
verified tokens (`tokens/`) or constitute official DGA compliance.

## How to classify

- Classify by **user task and usage environment**, in that order of weight.
- Pick **one primary class** and, at most, **one secondary influence** (e.g. an operational system
  with a public-information landing page: primary Operational management, secondary Public
  information). Do not blend three or more classes — that is how everything collapses back into a
  generic dashboard.
- Do **not** classify by industry name alone ("it's a health platform" tells you nothing about the
  task).
- Do **not** classify a product as an "AI experience" only because it uses AI. AI is a capability,
  not a product class. A monitoring system that uses AI is still Operational management or Data
  intelligence.
- Do **not** classify by brand or accent color. Accent is chosen last (`references/17-accent-theming.md`),
  never a reason to pick a class.
- Distinguish **daily operational systems** (used repeatedly, speed and density matter) from **short
  exhibition experiences** (seen once, impact and clarity matter). They almost never share a layout.

## Product classes

### 1. Government service
- **Primary users:** citizens and residents, mixed digital literacy, often first-time on this task.
- **Dominant task:** complete one procedure (apply, renew, request, pay) and reach a clear outcome.
- **Information density:** low — one decision per step.
- **Usage frequency:** rare / one-off per user.
- **Decision criticality:** high for the user (money, eligibility, legal status); low cognitive load
  expected.
- **Interaction pattern:** linear, guided, forward-moving with review-before-submit.
- **Likely device:** mobile-first, then desktop.
- **Typical risks:** overwhelming the user, hidden requirements, unclear outcome, dead ends.
- **Unsuitable default patterns:** KPI dashboards, analytics grids, dense tables, multi-panel
  workspaces.

### 2. Regulatory verification
- **Primary users:** reviewers, auditors, licensing officers, inspectors making a ruling.
- **Dominant task:** examine evidence and record a verified decision (approve / reject / flag).
- **Information density:** medium–high — evidence plus the record under review.
- **Usage frequency:** daily, repeated per case.
- **Decision criticality:** very high — the decision is authoritative and traceable.
- **Interaction pattern:** evidence review → judgement → action, with an audit trail.
- **Likely device:** desktop.
- **Typical risks:** burying the evidence under chrome, unclear provenance, no audit trail, decorative
  KPIs above the actual case.
- **Unsuitable default patterns:** marketing hero, KPI-card wall as the landing view, equal-weight
  card grid that hides the evidence.

### 3. Operational management
- **Primary users:** operators, coordinators, case handlers working a queue.
- **Dominant task:** triage and act on a stream of items (assign, progress, resolve) efficiently.
- **Information density:** high.
- **Usage frequency:** continuous, all-day.
- **Decision criticality:** medium–high, high volume.
- **Interaction pattern:** scan queue → open item → act → return to queue; keyboard-friendly.
- **Likely device:** desktop, often multi-monitor.
- **Typical risks:** slow navigation, losing working context on drill-in, over-carding the queue.
- **Unsuitable default patterns:** one-thing-per-screen guided flow, hero banners, decorative
  full-width charts above the work.

### 4. Data intelligence and analytics
- **Primary users:** analysts, planners, policy and performance owners.
- **Dominant task:** answer a specific question from data and support a decision.
- **Information density:** high, but focused around the primary question.
- **Usage frequency:** regular (daily/weekly), long sessions.
- **Decision criticality:** medium–high (informs decisions rather than executing them).
- **Interaction pattern:** read the primary visualization, filter, compare, drill down.
- **Likely device:** desktop, large displays.
- **Typical risks:** decorative charts with no question behind them, KPI walls, equal-weight tiles
  with no dominant view.
- **Unsuitable default patterns:** every metric as an identical card; charts chosen for looks not for
  a question.

### 5. Field inspection
- **Primary users:** inspectors and field staff, on site, sometimes gloved, variable connectivity.
- **Dominant task:** capture findings and complete a checklist against a location or asset.
- **Information density:** low per screen, sequential.
- **Usage frequency:** daily, in short bursts on the move.
- **Decision criticality:** high (findings feed enforcement/records).
- **Interaction pattern:** step-through capture, photo/scan, offline-tolerant, large targets.
- **Likely device:** mobile / tablet, outdoors.
- **Typical risks:** dense desktop layouts on a phone, small targets, assuming connectivity, tiny text
  in sunlight.
- **Unsuitable default patterns:** multi-column dashboards, wide tables, hover-dependent interactions.

### 6. Public information
- **Primary users:** the general public seeking to read, understand, or find something.
- **Dominant task:** read and comprehend, or navigate to the right service/page.
- **Information density:** low–medium, editorial.
- **Usage frequency:** occasional.
- **Decision criticality:** low–medium.
- **Interaction pattern:** scroll, read, scan, follow a clear onward link.
- **Likely device:** mobile-first.
- **Typical risks:** dashboard chrome around what is really an article; burying the message in tiles.
- **Unsuitable default patterns:** KPI cards, admin tables, workspace panels.

### 7. Executive presentation or exhibition experience
- **Primary users:** leadership, visitors, an audience at a launch, briefing, or large display.
- **Dominant task:** absorb a headline message or a small set of signals quickly, once.
- **Information density:** very low — a few large, deliberate elements.
- **Usage frequency:** one-off / occasional, short session.
- **Decision criticality:** low (impression and clarity, not transaction).
- **Interaction pattern:** minimal or passive; often presented, not operated.
- **Likely device:** large screen / projector; sometimes tablet for a walkthrough.
- **Typical risks:** treating an all-day operational tool like an exhibition (and vice versa);
  cinematic styling applied to a system people actually work in.
- **Unsuitable default patterns:** dense operational tables, small text, working queues; also do not
  reuse this treatment for daily-use systems.

## Decision table

| If the user mainly… | in this environment… | Primary class |
|---------------------|----------------------|---------------|
| completes one procedure to an outcome | rarely, self-serve | Government service |
| examines evidence and records a ruling | daily, at a desk | Regulatory verification |
| works a queue of items continuously | all-day, at a desk | Operational management |
| answers a question from data | regularly, long sessions | Data intelligence and analytics |
| captures findings against a site/asset | on site, on the move | Field inspection |
| reads or navigates to find something | occasionally | Public information |
| absorbs a headline once, as an audience | at a launch / on a large display | Executive presentation / exhibition |

**Output of this step:** one primary class, an optional secondary influence, and the two or three
facts (task, environment, frequency) that decided it. Carry these into the design brief (`19`).

See also: `references/19-design-direction-framework.md`, `references/20-composition-selection.md`,
`references/21-visual-profile-selection.md`.
