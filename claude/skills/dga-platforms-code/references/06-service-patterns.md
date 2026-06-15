# 06 — Service patterns

Government interfaces are organized around services. These patterns make the task, progress, and
outcome obvious. Confirm reference structures against
https://design.dga.gov.sa/guidelines/templates

## What templates are (Platforms Code Guide v1.0)

- Templates are **ready structures that help designers and developers build consistent, easy-to-use
  pages**. They improve user experience by organizing content and elements effectively and uniformly
  across pages.
- The guide confirms there are **17 templates** but does not provide a fully readable list in the
  extracted guide.
- **Do not invent template names** in this repository unless verified from official live sources.
- Keep repository templates generic and clearly marked as implementation examples aligned with
  Platforms Code principles, **not** official DGA templates.
- **Template spacing is illustrative** and must be mapped to verified project tokens or verified
  Platforms Code spacing tokens before production use. Do not present template spacing as official
  numeric DGA spacing (none are verified — see `15-layout-and-spacing-page-extraction.md`).

## Service landing page

- State the service name, what it does, who it's for, and what's required before starting.
- Provide a single, clear "start" action; keep secondary information secondary.
- Set expectations: steps involved, documents needed, and likely outcome.

## Service selection

- Present available services/options as equal, scannable, accessible choices (cards or list).
- Each option has a clear name, short description, and obvious entry action.
- Mark unavailable options honestly (e.g., disabled with a reason / "غير متاح حاليًا"); keep layout
  consistent.

## Eligibility / introduction

- Before the flow, explain eligibility, prerequisites, and what the user needs to have ready.
- Be explicit about required documents, identifiers, or conditions.
- Let the user confirm understanding before proceeding where appropriate.

## Start service CTA

- One primary call to action that clearly begins the service.
- Label it with a precise verb; place it where the eye lands after reading the intro.
- Avoid competing primary actions on the same view.

## Multi-step service flow

- Use a Steps component with current/completed/upcoming states; show progress at all times.
- Preserve data across steps; allow back navigation; validate per step.
- Keep step labels short and consistent; end with review-before-submit where applicable.

## Upload / review / result flow

1. **Upload/input** — collect inputs (files, images, codes, fields) with clear formats and limits.
2. **Review** — show a read-only summary; allow edits before submission.
3. **Result** — show an explicit, trustworthy outcome reflecting the server's source of truth.

Keep each stage distinct, with clear navigation and recoverable errors.

## Confirmation pages

- Confirm the action succeeded, what happened, and what comes next.
- Show a reference/identifier the user can keep; offer print/save/download where relevant.
- Provide clear onward actions (return to services, view status, start another).

## Result pages

- Lead with the outcome and its status (icon + label + color), prominently.
- Show supporting details and any official reference; explain next steps.
- Never fabricate or compute official results on the client; reflect server truth. Handle
  not-found / inconclusive outcomes explicitly and calmly.

## Admin review flows

- Make the item's state, owner, and required next action obvious.
- Provide clear actions (approve, reject, request changes) with confirmation and audit-friendly
  feedback; show history/status where relevant.
- Preserve authorization: only permitted roles see and perform privileged actions.

## Verification flows

- Make the verification subject, method (e.g., code, image, lookup), and result unambiguous.
- Show clear states: verified, not verified, inconclusive, error — each with text and icon, not color
  alone.
- Reflect the authoritative record; do not imply official validity beyond what the server confirms.

## Case-management flows

- Represent cases with clear status, identifiers, timestamps, and ownership.
- Support list → detail navigation; keep filters, sorting, and statuses consistent.
- Make the next required action per case obvious; preserve history and reflect server state.
- Respect authorization at every action; never expose cases or actions beyond the user's role.
