# Government service (variant)

## Source brief

A municipality's online building-permit application: eligibility questions, property and applicant
details across several sections, document uploads, and — because errors are costly and applications
are often returned — the ability to check everything before paying and submitting. Most applicants are
first-time users on a phone.

## Phase 1 direction context

- **Product class:** Government service.
- **Conceptual visual profile:** Government Service (light, low density, flat surfaces).
- **Expected composition family:** Guided Service Flow.
- **Primary task:** Complete a procedure and reach a confirmable outcome.
- **Usage environment:** Self-service, public, mobile-first, one-off per user.

## Composition decision

- **Selected composition:** Guided Service Flow.
- **Selected variant:** Review and Submit.
- **Dominant element:** The consolidated, editable review summary of all entered data before payment.
- **Navigation model:** Stepped for entry, resolving to a single review screen; edit links jump back to
  a section and return to the summary.
- **Density:** Low (entry) rising to medium on the review summary (grouped, scannable).

## Selection rationale

The decisive requirement is that a first-time applicant can **verify everything before paying**, on a
returns-prone process where mistakes are costly. That is exactly the Review and Submit variant: a
consolidated, editable summary is the dominant region, with per-section edit affordances and one submit
action. Section entry uses the Guided Service Flow's Focused Step model, but the variant that
characterizes this product — and the screen that carries the risk — is the review. Chosen over Focused
Step (which minimizes everything except the current step and offers no whole-picture verification) and
Assisted Service Flow (guidance-heavy; the brief stresses confirmation, not hand-holding).

## Structural model

- **Primary regions:** grouped summary sections (by entry step) · per-section edit links · outstanding-
  requirement notices · single submit action · post-submit confirmation/result.
- **Region priority:** review summary dominant → outstanding-requirement notices → submit → (entry
  steps precede it as Focused Step screens).
- **User flow:** eligibility → section-by-section entry (Focused Step) → consolidated review → fix via
  edit links → submit → confirmation with reference number.
- **Relationship between regions:** the summary aggregates every entry step; edit links are the only
  bridge back into a step and always return to the summary; submit is gated by outstanding requirements.
- **Progressive disclosure:** entry steps disclose one section at a time; the review discloses the whole
  application at once for verification; requirement notices surface only unmet items.

## Responsive transformation

### Desktop
Grouped summary sections in a readable column (optionally two columns for short paired fields); edit
links inline per section; sticky submit; entry steps are single centered-column forms.

### Tablet
Single-column grouped summary; progress for entry compresses above the step; submit sticky.

### Mobile
The review becomes a vertical sequence of collapsible section summaries with a persistent "step X of N"
during entry and a sticky submit on the review — **not** a stack of desktop columns. Each section shows a
compact read-only recap that expands to edit in place, so the applicant verifies without losing the
overview. Outstanding-requirement notices pin to the top of the review.

## RTL behavior

- **Reading flow:** right→left; summary section labels lead on the right, values trail.
- **Leading/trailing regions:** section title leads (right), edit affordance trails (left).
- **Navigation order:** stepper advances toward the left; "next"/"submit" sits at the trailing edge.
- **Sequence direction:** entry steps progress right→left.
- **Directional icons:** back/forward chevrons mirrored.
- **LTR isolation:** permit/application reference numbers, national IDs, fees/amounts, coordinates, and
  any Latin document names are isolated LTR within Arabic text.

## Accessibility requirements

- Landmarks: `main` for the review; each summary section is a labeled region; the stepper is an
  accessible step indicator.
- Keyboard order follows visual order; edit links move focus to the target field and return focus to the
  section on completion; visible focus throughout; no traps.
- Every field retains a programmatic label; outstanding requirements are announced and linked to the
  field/section they concern.
- Status of a section (complete / needs attention) uses text + icon, not color alone. Adequate touch
  targets; reduced motion on step/expand transitions.

## Related composition considered

- **Alternative:** Guided Service Flow → Focused Step.
- **Why considered:** the product is a multi-section entry flow, and Focused Step is the natural entry
  model.
- **Why rejected:** Focused Step offers no consolidated verification before an irreversible pay/submit,
  which is the brief's explicit priority. Focused Step is retained *inside* this decision for entry, but
  it is not the characterizing variant.

## Explicit anti-patterns

- A KPI/dashboard header or metrics above the application.
- Presenting all steps as full expanded cards instead of one active step during entry.
- A flat, ungrouped field dump as the "review".
- Multiple primary actions on the review; multi-column forms crammed onto mobile.
- Wrapping each summary section in an identical decorative card that flattens hierarchy.

## Rubric scoring

| # | Category | Score | Note |
|---|----------|-------|------|
| 1 | Composition selection | 5 | Guided Service Flow is correct for a procedure. |
| 2 | Variant selection | 4 | Review and Submit fits the decisive requirement; entry still uses Focused Step, a defensible composite rather than a single pure variant. |
| 3 | Dominant element clarity | 5 | The review summary clearly dominates the risk-bearing screen. |
| 4 | Structural differentiation | 5 | Summary-dominant, edit-link navigation — distinct from all other cases. |
| 5 | Responsive transformation | 5 | Mobile is collapsible section recaps, not stacked columns. |
| 6 | Card-grid avoidance | 5 | Grouped sections, no card grid; explicit anti-pattern. |
| 7 | Operational vs case distinction | 5 | Not applicable-by-conflation; correctly not an operational/case tool. |
| 8 | Consistency with Phase 1 | 5 | Matches Government service / Guided Service Flow direction. |
| 9 | RTL awareness | 4 | Flow, stepper, and LTR isolation specified; real-content RTL still a manual check. |
| 10 | Accessibility awareness | 5 | Focus return on edit, announced requirements, non-color status. |
| 11 | No visual-theme leakage | 5 | Structure only; no color/theme/CSS. |
| 12 | Provenance discipline | 5 | Interpretive, subordinate; no tokens; no compliance claim. |

## Assessment

- **Result:** Pass (all thresholds met: 1,2,3,6,9,10 ≥4; 11 = 5; none below 3).
- **Strongest aspect:** Correctly makes verification-before-commit the dominant structure.
- **Weakest aspect:** The entry-vs-review split means the product uses two variant behaviors; the
  characterizing choice is sound but not a single pure variant (variant scored 4).
- **Structural ambiguity:** Where the boundary between Focused Step entry and the Review screen sits.
- **Generic-dashboard fallback detected:** No.
- **Card-grid fallback detected:** No.
- **Visual-theme leakage detected:** No.
