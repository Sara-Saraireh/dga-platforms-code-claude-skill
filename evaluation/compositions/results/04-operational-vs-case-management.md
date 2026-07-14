# Operational vs case management (distinction)

## Source brief

Two teams at one agency need tools that must not share a structure:

- **Team A (intake desk):** continuous, high-volume incoming requests; scan the queue, assign, move
  each through a few lightweight states (new → in progress → closed), resolve quickly; speed and
  place-keeping matter; each request is short-lived.
- **Team B (investigations):** complex, long-lived cases; each accumulates evidence over weeks, involves
  several parties, has a decision history and a timeline, and is understood by reading its full context
  before acting.

This case explicitly tests the Operational Workspace vs Case Management Split View distinction, so it
produces **two** composition decisions.

## Phase 1 direction context

- **Team A — Product class:** Operational management · **Profile:** Operational Command · **Family:**
  Operational Workspace · **Primary task:** triage a queue at speed · **Environment:** office desk,
  continuous, high volume.
- **Team B — Product class:** Regulatory verification / investigation (rich cases) · **Profile:**
  Regulatory Workspace · **Family:** Case Management Split View · **Primary task:** understand and
  progress one long-lived case · **Environment:** office desk, multi-session, weeks-long cases.

## Composition decision

**Team A**
- **Selected composition:** Operational Workspace.
- **Selected variant:** Queue and Detail.
- **Dominant element:** The work queue plus the active item.
- **Navigation model:** Master–detail (queue persists; item opens in a pane/drawer; return preserves
  place).
- **Density:** High.

**Team B**
- **Selected composition:** Case Management Split View.
- **Selected variant:** Case and Timeline.
- **Dominant element:** The active case context, organized by its timeline.
- **Navigation model:** Split (case list ↔ open case); timeline-led within the case.
- **Density:** Medium–high.

## Selection rationale

The distinction is decided by the **nature of a work item**, using the compositions' explicit selection
cues.

**Team A → Operational Workspace (Queue and Detail).** Brief evidence: "continuous, high volume",
"scan the queue, assign", "lightweight states (new → in progress → closed)", "resolve quickly", "each
request is short-lived", "speed and not losing their place matter most". These are the operational cues
verbatim — queue handling, assignment, lightweight state progression, rapid processing, frequent
transitions, short context. Queue and Detail keeps the queue persistent and opens each item without
losing place — exactly the place-keeping the brief demands. Task Board (state columns) and Command
Overview (operation-wide monitoring) were not chosen: the team works items, not a board of columns or a
whole-operation overview.

**Team B → Case Management Split View (Case and Timeline).** Brief evidence: "complex, long-lived
cases", "accumulates evidence over weeks", "several parties", "a decision history and a timeline",
"understood by reading its full context before acting". These are the case-management cues — rich
history, evidence, timeline, participants, extended context. Among its variants, Case and Timeline fits
best because the brief frames the case as understood by reading its **full context over weeks** with a
**decision history and timeline** — chronology is the organizing spine. Case and Evidence (documents
lead) and Multi-Party Case (relationships lead) were considered; both are secondary here because the
brief foregrounds the case's unfolding-over-time understanding rather than a single dominant document
set or a party-relationship structure. (Evidence and participants remain present as supporting tabs.)

## Structural model

**Team A — Queue and Detail:** filters · work queue (anchor) · active-item detail pane/drawer ·
persistent action bar · status context · counts strip. Priority: queue anchors → item detail on open →
actions always reachable → status supports → counts demoted. Flow: scan → open → act → return to queue
(place preserved). Progressive disclosure: item detail on selection; bulk actions on multi-select.

**Team B — Case and Timeline:** case list · case header (status/next action) · timeline (dominant) ·
evidence linked from events · participants · actions/decisions with reasons. Priority: open case
dominates → header orients → timeline carries understanding → evidence/participants support → actions
always reachable → case list supports navigation. Flow: pick case → read header → follow timeline →
drill an event to its evidence → act, recording a decision. Progressive disclosure: events expand to
evidence; participants/evidence as tabs.

## Responsive transformation

### Desktop
Team A: queue and detail side by side with a persistent action bar. Team B: case list beside the open
case, timeline central with header on top and actions/participants in panels or tabs.

### Tablet
Team A: detail collapses to a drawer over the queue; filters compact. Team B: case list collapses to a
drawer/rail; the open case takes the main area; timeline and participants become tabs.

### Mobile
Team A: the **queue is the primary screen**; opening an item is full-screen with a clear place-preserving
back; actions sticky. Team B: **case list → full case**; the case opens full-screen with a sticky header,
a **vertical timeline**, participants/evidence in tabs, and sticky actions. Neither is a stacked desktop
page — Team A leads with the list, Team B leads with the single case's timeline.

## RTL behavior

- **Reading flow:** right→left for both; queue rows / case list lead on the right, detail/case opens
  toward the trailing (left) edge.
- **Leading/trailing regions:** Team A queue leads, detail trails; Team B case list leads, open case
  trails.
- **Navigation order:** row/case focus moves top-to-start; master→detail transitions move focus toward
  the trailing edge and return on close.
- **Timeline/sequence direction:** Team B's timeline reads right→left in chronological order with a clear
  direction indicator; Team A's state progression (new → in progress → closed) reads right→left.
- **Directional icons:** back/forward, expand/collapse mirrored.
- **LTR isolation:** request/case IDs, dates, reference numbers, and any Latin/technical values isolated
  LTR within Arabic text.

## Accessibility requirements

- **Team A:** queue is a semantic list/table with headers and scope; row focus and keyboard navigation;
  opening/returning manages focus predictably; actions are labeled controls; status text + icon, not
  color alone; no traps.
- **Team B:** landmarks for case list, header, and body; a reading order that reaches status/next action
  early; the timeline is a semantic ordered structure; participants/relationships programmatically
  labeled; status text + icon; full keyboard operability across list, tabs, and actions; reduced motion
  on transitions.

## Related composition considered

- **Team A alternative:** Case Management Split View — **rejected** because requests are short-lived with
  lightweight states and no rich per-case history; imposing a case split would slow high-volume triage.
- **Team B alternative:** Operational Workspace — **rejected** because cases are long-lived with evidence,
  parties, timeline, and decision history; a queue-and-detail model would flatten the context needed to
  act. (Team B may still have a *queue* to pick cases, but the working surface is the case, not the
  queue.)

## Explicit anti-patterns

- Team A: one-item-per-screen guided flow; executive KPI wall above the queue; over-carded rows; heavy
  modal workflows.
- Team B: flattening a rich case into uniform cards; hiding status/next action; a KPI header above the
  case; treating the case like a quick queue item and losing its history.
- Both: giving the two teams the same structure; wrapping every region in an equal container.

## Rubric scoring

| # | Category | Score | Note |
|---|----------|-------|------|
| 1 | Composition selection | 5 | Correct and *different* compositions for the two teams. |
| 2 | Variant selection | 5 | Queue and Detail / Case and Timeline both justified by brief evidence. |
| 3 | Dominant element clarity | 5 | Queue+item vs case timeline — clearly different dominants. |
| 4 | Structural differentiation | 5 | The two decisions are structurally opposite by design. |
| 5 | Responsive transformation | 5 | Distinct mobile models (queue-first vs case-first timeline). |
| 6 | Card-grid avoidance | 5 | Queue/detail and split/timeline; no card grid. |
| 7 | Operational vs case distinction | 5 | Explicit selection + rejection + brief evidence for each side. |
| 8 | Consistency with Phase 1 | 5 | Matches the two Phase 1 classes/directions. |
| 9 | RTL awareness | 4 | Flow, timeline direction, LTR isolation specified; real-content RTL a manual check. |
| 10 | Accessibility awareness | 5 | Semantic queue/timeline, focus management, non-color status. |
| 11 | No visual-theme leakage | 5 | Structure only. |
| 12 | Provenance discipline | 5 | Interpretive, subordinate; no tokens; no compliance claim. |

## Assessment

- **Result:** Pass (all thresholds met, including the required category 7 ≥ 4 — scored 5).
- **Strongest aspect:** The operational-vs-case distinction is decided by explicit brief evidence and the
  compositions' own selection cues, with the rejected alternative justified on both sides.
- **Weakest aspect:** Team B's variant (Case and Timeline vs Case and Evidence) is the one genuinely
  arguable sub-choice; rationale is given and evidence/participants are retained as tabs.
- **Structural ambiguity:** Whether Team B also needs a lightweight case-picking queue (noted; the
  working surface remains the case).
- **Generic-dashboard fallback detected:** No.
- **Card-grid fallback detected:** No.
- **Visual-theme leakage detected:** No.
- **Assumptions requiring validation:** (1) Team A's states are genuinely lightweight
  (new → in progress → closed) with no per-request history that would pull it toward case management;
  (2) for Team B, confirm whether chronology or evidence is the stronger day-to-day organizing axis —
  the latter would swap the Team B variant to Case and Evidence.
