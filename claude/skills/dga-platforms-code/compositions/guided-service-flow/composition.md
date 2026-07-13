# Guided Service Flow

## Status and boundary

Interpretive operational guidance, secondary to official DGA sources and verified extractions. Defines
structure only — no visual styling, tokens, or code. Does not constitute official DGA compliance. See
[`../README.md`](../README.md) and [`../../references/20-composition-selection.md`](../../references/20-composition-selection.md).

## Purpose

Organize a procedure so the user completes one step at a time and reaches an explicit outcome, with the
active step always in charge.

## Use when

- Application or request submission, permits, licensing applications.
- Onboarding and eligibility-then-apply journeys.
- Guided, multi-step requests with a review-and-submit step.
- One-off or infrequent tasks where the user is unfamiliar with the process.

## Do not use when

- The user works repeatedly at speed or needs the whole picture at once (use
  [`../operational-workspace/composition.md`](../operational-workspace/composition.md)).
- The task is reading/navigation (use [`../narrative-portal/composition.md`](../narrative-portal/composition.md)).
- The task is judging evidence (use [`../verification-workbench/composition.md`](../verification-workbench/composition.md)).

## Primary task

Complete the current step and advance toward a clear, confirmable outcome.

## Dominant element

The **current task step** (the active field-set / form for this step) and its single primary action.

## Structural regions

In priority order:

1. **Service context** — what this service is and what the step contributes (concise).
2. **Progress context** — where the user is in the flow (current / completed / upcoming).
3. **Active task** — the current step's inputs; the largest, focal region.
4. **Supporting guidance** — help for the current step, beside or below the fields, never competing.
5. **Primary action** — one forward action; secondary (back/save) is quieter.
6. **Validation feedback** — inline, specific, tied to the field it concerns.

## Information hierarchy

Active step first and dominant → its primary action → progress context → service context → supporting
guidance. Nothing summary-like (metrics, KPIs, unrelated context) precedes the task.

## Navigation model

Stepped. Forward advances the flow; back is available and preserves entered data. In RTL, progression
advances toward the left edge.

## Density

Low — one decision or a tight group of related inputs per screen.

## Responsive transformation

### Desktop

Single centered column for the active step; progress indicator horizontal above or vertical beside the
step; guidance adjacent to the fields.

### Tablet

Same single-column step; progress may move above the step; guidance moves below the relevant field.

### Mobile

Fully linear: progress compresses to a "step X of N" indicator; guidance stacks below its field; the
primary action is thumb-reachable (sticky if the step is long). Dominant element (active step)
preserved.

## RTL behavior

`dir="rtl"`, right-aligned text, logical start/end properties. Stepper and progress flow right→left;
"next" advances toward the left. Keep reference numbers, IDs, amounts, and Latin strings isolated LTR
inside Arabic text.

## Accessibility requirements

- Landmarks: `main` for the active step; the step is a labeled region; progress uses an accessible
  step indicator.
- Each input has a programmatic label; errors are announced and linked to their field.
- Logical tab order top-to-start within the step; visible focus; no keyboard traps.
- Do not convey step state by color alone; pair with text/icon. Respect reduced motion on transitions.

## Suitable component categories

Stepper / progress indicator, form inputs, inline validation/alert, primary and secondary buttons,
review summary, confirmation/result panel. (Categories, not code — see `../../references/30-component-library.md`.)

## Variation dimensions

Ordering of context vs. progress, single-step vs. review-and-submit emphasis, presence of an assistance
region, drill-into-help pattern, and responsive collapse of the progress indicator. See
[`variants.md`](variants.md).

## Anti-patterns

- KPI dashboards or metric cards above the task.
- Unrelated summaries before the step begins.
- Showing all steps as full expanded cards instead of one active step.
- Dense sidebars competing with the step.
- Multiple primary actions; multi-column forms crammed onto mobile.

## Related compositions

- [`../narrative-portal/composition.md`](../narrative-portal/composition.md) — a public landing may
  precede the flow.
- [`../mobile-action-stack/composition.md`](../mobile-action-stack/composition.md) — the field-first,
  one-action-per-screen sibling for on-site capture.

## Selection cues

Choose Guided Service Flow when the deliverable is a completed procedure with a confirmable outcome and
the user needs to be led one step at a time. If the user instead needs an at-a-glance working surface
they return to repeatedly, choose Operational Workspace.
