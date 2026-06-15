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

## 5a. Layout and spacing

- [ ] Page sections have clear hierarchy; related elements grouped visually.
- [ ] Cards use consistent padding; forms have consistent field spacing.
- [ ] Button groups have clear spacing; navigation spacing is consistent.
- [ ] Mobile layout is not cramped; RTL layout has no awkward gaps/misalignment.
- [ ] No repeated arbitrary spacing introduced; numeric spacing verified or mapped to approved tokens.

## 5b. Semantic color

- [ ] Error/Warning/Success/Info use the verified 600 values where appropriate.
- [ ] State is not communicated by color alone; each state has text and/or icon support.
- [ ] Error/warning not used for normal actions; success not overused as decoration.
- [ ] No semantic shades beyond the verified 600 values were invented.

## 5c. Typography

- [ ] IBM Plex Sans Arabic (or approved project font) used; Display for headings, Text for body/UI.
- [ ] Saudi Font not used as default; only national/seasonal main headings, with license/approval.
- [ ] No font files included or redistributed.

## 6. Engineering and security

- [ ] Business logic, API contracts, auth/authorization, and validation preserved.
- [ ] No backend/security changes made during UI-only work (or changes explicitly approved).
- [ ] No secrets/hardcoded tokens; no real personal data in code, fixtures, or screenshots.
- [ ] Security-sensitive surfaces reviewed: login, OTP, sessions, file upload, external APIs,
      regulatory outputs (see `SECURITY.md`).
- [ ] Available checks (lint/typecheck/build/tests) run and passing (or failures documented).

## 7. Evaluation (manual review aid)

Evaluation goals (Platforms Code Guide v1.0): ضمان الامتثال (alignment with unified guidance and best
practices), الحفاظ على الجودة (UX quality and interface consistency), تسهيل التحسين (clear criteria
and feedback for continuous improvement).

Optional compliance-level aid — **internal only, not an official score**:
غير ممتثل 1–1.9 · امتثال ضعيف جدًا 2–2.9 · امتثال ضعيف 3–3.9 · امتثال أقل من المتوسط 4–4.9 ·
امتثال عادل 5–5.9 · امتثال متوسط 6–6.9 · امتثال جيد 7–7.9 · امتثال جيد جدًا 8–8.9 ·
امتثال ممتاز 9–9.9 · امتثال متميز 10.

- [ ] If a level is recorded, it is documented as an internal review aid only, using the phrase
      "aligned with Platforms Code principles" (not "officially compliant").

## 8. Outstanding items and sign-off

- **Open issues / risks:** `<list>`
- **Decision:** [ ] Approved for release  [ ] Approved with conditions  [ ] Not approved
- **Conditions (if any):** `<list>`
- **Reviewer signature / approval reference:** `<value>`

> Reminder: completing this checklist is an internal review. It is not, and must not be presented as,
> official DGA compliance, which requires formal review by the responsible entity.
