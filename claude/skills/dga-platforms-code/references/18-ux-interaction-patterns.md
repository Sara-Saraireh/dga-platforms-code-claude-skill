# 18 — UX interaction patterns

> Supporting design-review guidance. It aligns with — and never overrides — DGA Platforms Code
> and the verified references (`13`–`16`) and tokens (`tokens/`). It introduces no official DGA
> rules, tokens, spacing, or compliance claims. It is generic and product-agnostic.

Use this when judging *how an interface behaves* — whether the user always knows what to do, what is
happening, and how to recover. It complements `04-components.md`, `05-forms-and-inputs.md`, and
`06-service-patterns.md`; the component/form/service rules there remain authoritative.

## Task clarity

- Every screen makes one task and its next step obvious. Lead with the task, not the brand.
- State up front what the service does, what is required, and what the outcome will be.
- Keep one primary action per view; secondary paths stay visually quieter.

## Progressive disclosure

- Show what the user needs now; defer advanced or rare options until requested.
- Break long tasks into steps rather than one overwhelming screen; preserve entered data across steps.
- Don't hide essential instructions behind placeholders, tooltips, or hover — keep them visible.

## Feedback and system status

- Every action gets timely, visible feedback: pending, success, or failure.
- Long operations show progress or a clear loading state; never leave the user guessing.
- Reflect the server's source of truth; never fabricate an official outcome, status, or result on
  the client (see `06-service-patterns.md`).

## Error prevention and recovery

- Prevent errors before they happen: sensible defaults, clear formats/limits, inline constraints.
- When something fails, say what went wrong and how to fix it, specifically and politely
  (see `10-content-style-arabic.md`); don't expose codes or stack traces.
- Make errors recoverable: preserve input, move focus to the problem, and link the message to its
  field. Preserve existing validation behavior; improve only its presentation unless asked otherwise.

## Empty, loading, and error states

- Design these states deliberately — not just the happy path.
- Empty states explain what will appear and offer the next action.
- Loading states are calm and non-blocking where possible; error states offer a clear way forward.

## Forms and multi-step flow ergonomics

- Visible labels always; placeholders are not labels. Mark required vs optional consistently.
- For multi-step flows, show a stepper with current/completed/upcoming states and a
  review-before-submit step. Allow back navigation without data loss.
- Keep file/image/barcode inputs explicit about accepted formats, limits, progress, and recovery;
  keep codes and IDs LTR and bidi-isolated.

## Destructive and irreversible actions

- Never make a destructive action the loudest element. Require explicit confirmation that names the
  consequence.
- Offer undo or a clear recovery path where feasible; default to the safe option.

## Consistency

- Reuse established patterns, components, and terminology; do not invent one-off interactions.
- Keep behavior predictable across screens — the same control does the same thing everywhere.

## Quick review questions

- Does the user always know what to do next, what is happening, and how to recover?
- Are empty/loading/error states designed, not accidental?
- Are destructive actions confirmed and never emphasized?
- Is anything essential hidden behind a placeholder or hover?

See also: `12-design-review-checklist.md`, `19-design-critique-rubric.md`, `22-ui-anti-patterns.md`.
