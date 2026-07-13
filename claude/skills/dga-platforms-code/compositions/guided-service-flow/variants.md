# Guided Service Flow — variants

Structurally distinct variants of [`composition.md`](composition.md). Interpretive operational
guidance; structure only, no visual styling. Variants must differ in structure (dominant region,
ordering, split, navigation, drill-down, density, sequence, or responsive transformation), not in color,
spacing, radius, shadow, typography, or accent.

## Focused Step

### Best for
Long or unfamiliar procedures where each step needs full attention (applications, permits).

### Structural model
One active step per screen; progress reduced to a compact indicator; guidance on demand rather than
always-open.

### Dominant element
The single active step's field-set.

### Regions
Compact progress indicator · active step (dominant) · on-demand help · single primary action · inline
validation.

### Navigation
Stepped, one step per screen; back preserves data; forward gated by validation.

### Responsive behavior
Already linear; on mobile the progress indicator becomes "step X of N" and the action sticks. Structure
is unchanged across breakpoints.

### Distinction from other variants
Minimizes everything except the current step — no persistent review panel, no assistance rail. Purest
one-thing-per-screen model.

### Risks
Users lose sense of overall length if progress is over-compressed; mitigate with a clear step count.

### Avoid when
The flow is short (2–3 fields) — a single form is simpler; or the user needs to see and edit a full
summary continuously.

## Review and Submit

### Best for
The final stage of a procedure, or short flows where confirming all entries before submission is the
priority.

### Structural model
A consolidated, editable summary of all entered data with per-section edit affordances, ending in one
submit action.

### Dominant element
The review summary of all captured data.

### Regions
Summary sections (grouped by step) · per-section edit links · outstanding-requirement notices · single
submit action · post-submit confirmation/result.

### Navigation
Mostly single-screen; edit links jump back to a step and return to the summary; submit is terminal.

### Responsive behavior
Desktop shows grouped summary sections; mobile stacks them vertically with sticky submit; edit links
remain inline.

### Distinction from other variants
Dominant element is the *summary*, not a single step — the opposite emphasis to Focused Step. Enables
whole-picture verification before commit.

### Risks
Can feel dense if every field is shown flat; group by step and keep sections scannable.

### Avoid when
The user is mid-procedure and should focus on one step (use Focused Step); or there is nothing
meaningful to review.

## Assisted Service Flow

### Best for
Complex or eligibility-sensitive services where contextual guidance materially reduces errors.

### Structural model
Active step paired with a persistent assistance region (contextual help, eligibility notes, examples)
that supports — never competes with — the step.

### Dominant element
The active step; the assistance region is explicitly secondary.

### Regions
Progress context · active step (dominant) · persistent assistance region · primary action · inline
validation.

### Navigation
Stepped; the assistance region updates per step; help does not become a second primary path.

### Responsive behavior
Desktop places assistance beside the step; tablet moves it below the relevant field; mobile collapses it
into expandable help per field so the step stays dominant.

### Distinction from other variants
Adds a dedicated, persistent assistance region — a structural region Focused Step deliberately omits —
while keeping the step dominant.

### Risks
Assistance can grow into a competing column; enforce its secondary weight and collapse it on small
screens.

### Avoid when
The procedure is simple and self-explanatory (assistance adds noise); or guidance would be better as a
one-time intro (use a Narrative Portal landing before the flow).
