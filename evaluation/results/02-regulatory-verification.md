# Regulatory verification

## Source prompt

A licensing entity needs a tool for officers to review submitted applications and rule on them. For
each case an officer examines uploaded documents, compares declared details against the record, checks
requirements, and records an authoritative decision (approve / reject / request changes) with a reason.
Officers work all day at a desk; the decision is traceable and auditable; the evidence must be easy to
read and compare. The brief prescribes no layout.

## Design direction decision

- **Product class:** Regulatory verification (`references/18`).
- **Secondary influence:** Operational management — officers move through a stream of cases, so a queue
  exists around the workbench.
- **Primary users:** Licensing officers / reviewers making authoritative rulings.
- **Primary task:** Examine evidence, compare against the record, and record a traceable decision with
  a reason.
- **Usage environment:** Office, desk-based, sustained sessions; internal.
- **Primary device:** Desktop.
- **Usage frequency:** Daily, repeated per case.
- **Information density:** Medium–high, concentrated on the evidence and the record under review.
- **Interaction complexity:** Expert workspace — read/compare evidence, then a decision with a required
  reason and audit trail.
- **Decision criticality:** Very high — authoritative and auditable.
- **Content type:** Evidence (documents + the declared record).
- **Selected visual profile:** Regulatory Workspace (`references/21`).
- **Selected composition archetype:** Verification Workbench (`references/20`).
- **Navigation model:** Case-scoped split (evidence beside record/metadata), reachable from a case
  queue.
- **Dominant screen element:** The evidence (document viewer / comparison), largest region.
- **Surface strategy:** Split panes and structured regions; cards only for discrete records/line items.
  No KPI header.
- **Data visualization priority:** Low — contextual figures only (e.g. counts of outstanding
  requirements), never decorative charts.
- **Motion character:** Minimal, functional.
- **Patterns to avoid:** KPI-card landing view; evidence shrunk into a small card; decision buried;
  marketing hero; equal-weight card grid over the case.
- **Assumptions requiring validation:** Document formats and the audit-trail/versioning model come from
  the server; decision states and reason codes are defined by the entity; SSO + role checks exist.
  Confirm whether multiple officers/second-review are in scope.
- **Short rationale:** The task is judging evidence and recording a traceable ruling, so the evidence
  must dominate and the decision + reason must be first-class. A dashboard would bury the evidence;
  Verification Workbench keeps it central and the audit trail explicit.

## Expected composition behavior

The evidence viewer takes the largest region, with the record/claim being checked adjacent for direct
comparison. Decision controls (approve / reject / request changes) with a required reason sit
persistently reachable, and an audit trail records who decided what and when. A case queue provides
entry and next-case flow without overtaking the evidence. Status uses badge + text, not color alone.

## Explicit anti-patterns

- No KPI dashboard or metrics wall as the landing view.
- No shrinking the evidence into a small card among equal cards.
- No decision action hidden below the fold or represented by color alone.
- No decorative charts; figures must be contextual.
- No accent change substituting for the evidence-first structure.
- Reference/record IDs isolated LTR within Arabic text.

## Rubric score

| # | Category | Score | Note |
|---|----------|-------|------|
| 1 | Product-classification accuracy | 5 | Regulatory verification with a justified Operational secondary. |
| 2 | Composition–task fit | 5 | Verification Workbench matches evidence-judgement-decision. |
| 3 | Visual-direction fit | 5 | Regulatory Workspace: serious, evidence-forward, light. |
| 4 | Distinction from generic dashboard | 5 | Evidence dominates; explicitly no KPI landing. |
| 5 | Dominant-element clarity | 5 | Single dominant element: the evidence. |
| 6 | Information hierarchy | 5 | Decision + reason + audit trail first-class; metrics contextual. |
| 7 | RTL awareness | 4 | Split panes RTL-ordered; IDs isolated — real-document RTL still a manual check. |
| 8 | Accessibility awareness | 4 | Status not color-alone; keyboard/focus addressed; assistive-tech pass manual. |
| 9 | DGA grounding | 5 | Verified tokens/components; server as source of truth; no compliance claim. |
| 10 | Misuse of cards | 5 | Cards only for discrete records/line items. |
| 11 | Misuse of visual effects | 5 | Minimal motion; no effects. |
| 12 | Color-only variation | 5 | Structural differentiation (split, evidence-dominant, high density). |

## Assessment

- **Result:** Pass. All thresholds met.
- **Strongest aspects:** Evidence-first hierarchy and explicit audit trail; correct handling of the
  queue as a secondary, not the dominant element.
- **Weakest aspects:** Real-document RTL and assistive-tech behavior are downstream manual checks.
- **Ambiguity:** Whether a second-officer review flow is in scope (recorded as an assumption).
- **Generic-dashboard fallback:** None — explicitly rejected.
