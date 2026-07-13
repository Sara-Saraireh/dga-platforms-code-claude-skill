# Government service

## Source prompt

A national authority wants a digital service that lets residents request a certified copy of an
official record: sign in, confirm details, select the record and delivery option, pay a fee, and
receive a reference number and expected issue date. Most applicants use it once, are unfamiliar with
the process, and are on a phone. The outcome and requirements must be unmistakable; mistakes (wrong
record, wrong fee) are costly. The brief prescribes no layout.

## Design direction decision

- **Product class:** Government service (`references/18`).
- **Secondary influence:** None material. (A short explainer/eligibility intro borrows lightly from
  Public information, but the product is the procedure.)
- **Primary users:** Citizens and residents; mixed digital literacy; first-time on this task.
- **Primary task:** Complete one procedure end-to-end and reach a clear, certified outcome.
- **Usage environment:** Self-service, public, unsupervised; variable connectivity.
- **Primary device:** Mobile-first, then desktop.
- **Usage frequency:** Rare / one-off per user.
- **Information density:** Low — one decision per step.
- **Interaction complexity:** Multi-step form with review-before-submit and a payment step.
- **Decision criticality:** High for the user (fee, correct record, legal validity); low tolerance for
  ambiguity.
- **Content type:** Procedure.
- **Selected visual profile:** Government Service (`references/21`).
- **Selected composition archetype:** Guided Service Flow (`references/20`).
- **Navigation model:** Stepped; RTL-correct progression (advances toward the left edge), with back
  navigation that preserves entered data.
- **Dominant screen element:** The active step / current form field-set and its single primary action.
- **Surface strategy:** Flat sections with generous spacing; a card only for the final review summary
  and the result/receipt. Not a card grid.
- **Data visualization priority:** None (incidental at most — e.g. a plain fee breakdown, not a chart).
- **Motion character:** Minimal, functional only (step transitions, focus movement).
- **Patterns to avoid:** KPI cards / dashboard header; multi-column forms; competing CTAs; hero
  banner; analytics chrome; placeholder-as-label.
- **Assumptions requiring validation:** Authentication is handled by an existing national SSO;
  payment is delegated to an approved gateway (UI only); the record catalog and fees come from the
  server. Confirm whether an eligibility/what-you-need intro screen is required before step 1.
- **Short rationale:** A one-off, high-stakes procedure for unfamiliar mobile users demands one
  decision per screen, an explicit outcome, and a review step — the opposite of a dashboard. Guided
  Service Flow puts the current step in charge and keeps the reference number/issue date unambiguous
  at the end.

## Expected composition behavior

A progress indicator plus a single active step occupy the screen; contextual help sits beside or below
the field, never competing with it. Each step has exactly one primary action. A review-before-submit
step lets the user confirm details before payment. The result page states the outcome plainly with the
reference number and expected issue date isolated LTR for legibility. No summary metrics precede the
task.

## Explicit anti-patterns

- No hero + KPI-cards + card-grid dashboard.
- No wall of equal cards; no analytics tiles.
- No multi-column form crammed onto mobile.
- No decorative charts or gradients/glow to look "modern."
- No accent-only differentiation standing in for structure.
- Reference numbers, IDs, and fees must not be reordered by RTL — isolate them.

## Rubric score

| # | Category | Score | Note |
|---|----------|-------|------|
| 1 | Product-classification accuracy | 5 | Clear Government service from task + one-off self-service environment. |
| 2 | Composition–task fit | 5 | Guided Service Flow matches a one-decision-per-step procedure. |
| 3 | Visual-direction fit | 5 | Government Service profile: calm, light, low density. |
| 4 | Distinction from generic dashboard | 5 | Explicitly stepped, no KPI header, flat surfaces. |
| 5 | Dominant-element clarity | 5 | Single dominant element: the active step. |
| 6 | Information hierarchy | 5 | Help subordinate to the field; outcome explicit. |
| 7 | RTL awareness | 5 | Stepper flows RTL; numbers/IDs isolated LTR. |
| 8 | Accessibility awareness | 4 | Labels/focus/keyboard addressed; assistive-tech pass still a manual item. |
| 9 | DGA grounding | 5 | Uses verified tokens/components; interpretive guidance kept separate; no compliance claim. |
| 10 | Misuse of cards | 5 | Cards only for review summary/receipt. |
| 11 | Misuse of visual effects | 5 | Minimal functional motion; no gratuitous effects. |
| 12 | Color-only variation | 5 | Differentiation is structural (stepped, low density), not accent. |

## Assessment

- **Result:** Pass. All thresholds met (2, 9 ≥4; 7, 8 ≥4; 4, 12 ≥4; nothing below 3).
- **Strongest aspects:** Unambiguous dominant element and outcome; correct rejection of dashboard
  patterns for a one-off procedure.
- **Weakest aspects:** Accessibility depends on downstream implementation (contrast/assistive tech) —
  flagged as a manual-review item, not a direction defect.
- **Ambiguity:** Minor — whether an eligibility intro precedes step 1 (recorded as an assumption).
- **Generic-dashboard fallback:** None.
