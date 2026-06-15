# 12 — Design review checklist

Use this checklist to review any screen or change before declaring it done. Items left unchecked
become manual-review items in the output report.

## Government-grade visual tone

- [ ] Calm, official, trustworthy; not commercial/SaaS or marketing styling.
- [ ] Restrained color and decoration; structure and typography carry the design.
- [ ] One clear primary action per view; hierarchy is obvious.

## Source alignment

- [ ] Consistent with the official DGA sources (foundations, components, templates).
- [ ] No invented token values; exact values verified or sourced from project tokens.
- [ ] No copied official logos/emblems without authorization.
- [ ] No claim or implication of official DGA compliance.

## Layout

- [ ] Predictable structure with semantic landmarks (`header`/`nav`/`main`/`footer`).
- [ ] Clear sections and grid alignment; calm density.
- [ ] Navigation indicates current location; breadcrumbs/steps where relevant.

## RTL

- [ ] `dir="rtl"` and `lang` set; layout mirrors correctly.
- [ ] Logical (start/end) spacing and alignment, not hardcoded left/right.
- [ ] Directional icons/arrows mirrored; logos/Latin/numbers/codes not mirrored.
- [ ] Mixed Arabic/Latin content and IDs stay correctly ordered (bidi-isolated).

## Accessibility

- [ ] Sufficient contrast in all states.
- [ ] Visible focus on every interactive element; logical focus order.
- [ ] Full keyboard operability; no traps.
- [ ] Semantic HTML; correct heading order; labeled inputs.
- [ ] Errors announced and tied to fields; status not by color alone.
- [ ] Adequate touch targets; reduced motion respected; accessible tables.

## Components

- [ ] Buttons, cards, badges, alerts, tabs, tables, modals follow the rules.
- [ ] Empty, loading, and error states exist and are handled.
- [ ] Result/status components state outcomes clearly (icon + label + color).

## Forms

- [ ] Visible labels; placeholders not used as labels.
- [ ] Required/optional marked consistently; help text near fields.
- [ ] Specific, actionable error messages; validation behavior preserved.
- [ ] File/image/barcode inputs show formats, limits, progress, recovery.
- [ ] Multi-step flows use a stepper and a review-before-submit step.

## Content

- [ ] Clear, direct, formal Arabic; consistent terminology.
- [ ] Action labels are precise verbs; status vocabulary consistent.
- [ ] No literal/awkward translation; English product names preserved and readable.

## Responsive behavior

- [ ] Mobile-first; single-column where appropriate; primary action reachable.
- [ ] No unintended horizontal overflow; long IDs/tables handled.
- [ ] Arabic readable on small screens; RTL correct at all breakpoints.

## Engineering safety

- [ ] Business logic, APIs, auth/authorization, and validation preserved.
- [ ] Reused tokens and components; no scattered one-off styles.
- [ ] No backend/security changes during UI-only work; no secrets/hardcoded tokens.
- [ ] Available checks (lint/typecheck/build/tests) run and reported honestly.

## Manual review items

- [ ] Branding/logo authorization confirmed by a human.
- [ ] Arabic content and RTL reviewed with real content.
- [ ] Accessibility verified with assistive technology where feasible.
- [ ] Security-sensitive surfaces reviewed (login, OTP, sessions, upload, external APIs, regulatory
      outputs).
- [ ] No real personal data present; examples/fixtures use fake data.
- [ ] Compliance disclaimer respected; no official-compliance claim made.
