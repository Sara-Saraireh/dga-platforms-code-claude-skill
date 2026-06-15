# Manual review template

Complete this review **before** an interface built or modified with the `dga-platforms-code` Skill is
released as a government or semi-government product. The Skill assists; it does not approve. Copy this
template per release/feature and record evidence.

- **Product / feature:** `<name>`
- **Scope reviewed:** `<routes / screens / changes>`
- **Reviewer(s):** `<name / role>`
- **Date:** `<YYYY-MM-DD>`
- **Version / commit:** `<value>`

## 1. Visual tone and branding

- [ ] Government-grade tone (calm, official, trustworthy); not commercial/SaaS styling.
- [ ] Any official logos/emblems used are **authorized**; no unauthorized marks.
- [ ] Color usage restrained; success/green not overused; hierarchy intact.

## 2. Source alignment and compliance boundary

- [ ] Consistent with the official DGA sources (foundations, components, templates).
- [ ] No invented token values; exact values verified or from project tokens.
- [ ] No statement or implication of official DGA compliance anywhere in the UI or docs.

## 3. Arabic RTL and content

- [ ] `dir="rtl"`/`lang` correct; layout mirrors; logical spacing used.
- [ ] Directional icons mirrored; logos/Latin/numbers/codes not mirrored; IDs isolated.
- [ ] Arabic content reviewed (ideally by a native speaker): clear, formal, consistent terminology.

## 4. Accessibility

- [ ] Contrast, visible focus, keyboard operability, semantic HTML, labeled inputs.
- [ ] Errors announced; status not conveyed by color alone; adequate touch targets.
- [ ] Verified with assistive technology where feasible; reduced motion respected.

## 5. Components, forms, and responsive behavior

- [ ] Components and forms follow the rules; empty/loading/error states present.
- [ ] Multi-step flows use a stepper and review-before-submit.
- [ ] Mobile-first; no unintended horizontal overflow; Arabic readable on small screens.

## 6. Engineering and security

- [ ] Business logic, API contracts, auth/authorization, and validation preserved.
- [ ] No backend/security changes made during UI-only work (or changes explicitly approved).
- [ ] No secrets/hardcoded tokens; no real personal data in code, fixtures, or screenshots.
- [ ] Security-sensitive surfaces reviewed: login, OTP, sessions, file upload, external APIs,
      regulatory outputs (see `SECURITY.md`).
- [ ] Available checks (lint/typecheck/build/tests) run and passing (or failures documented).

## 7. Outstanding items and sign-off

- **Open issues / risks:** `<list>`
- **Decision:** [ ] Approved for release  [ ] Approved with conditions  [ ] Not approved
- **Conditions (if any):** `<list>`
- **Reviewer signature / approval reference:** `<value>`

> Reminder: completing this checklist is an internal review. It is not, and must not be presented as,
> official DGA compliance, which requires formal review by the responsible entity.
