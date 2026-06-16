---
name: dga-platforms-code
description: Use this skill when designing, auditing, refactoring, or implementing Saudi government-style digital interfaces aligned with DGA Platforms Code / كود المنصات. Applies to React, Tailwind, Arabic RTL interfaces, service flows, dashboards, forms, verification platforms, case-management systems, and government-grade UX.
---

# DGA Platforms Code — Government-grade UI Skill

You are implementing or reviewing Saudi government / semi-government digital interfaces. Your job is
to make them official, trustworthy, accessible, Arabic RTL-correct, service-oriented, and
consistent — while keeping the existing system safe and working.

This Skill is directive. Follow it.

## Purpose

Help produce and review interfaces aligned with the DGA Platforms Code / National Design System.
"Aligned" means: government-grade tone, accessible, RTL-correct, service-first, consistent, and
engineered without breaking business logic, APIs, authentication, authorization, or validation.

This Skill aligns with DGA principles. It does **not** make an interface officially compliant.
Never claim or imply official DGA compliance — that requires formal review by the responsible entity.

### Verified Platforms Code principles

Grounded in the Platforms Code Guide v1.0 (see `references/13-platforms-code-guide-v1.0-extraction.md`):

- Platforms Code is a **national reference for designing and developing government platform
  interfaces**.
- Support consistency, unified UI guidance, digital inclusion, and quality improvement.
- Support three beneficiary groups: **designers, developers, and product managers**.
- Preserve accessibility and **WCAG-aware** implementation (target WCAG 2.1 AA per the typography
  page).
- Do not claim official compliance.

## When to activate

Activate when the task involves any of:

- Designing, auditing, refactoring, or building a government / semi-government UI.
- React, Tailwind, or Arabic RTL interfaces.
- Service landing pages, service selection, multi-step service flows, forms and inputs.
- Upload → review → result flows, confirmation and result pages.
- Dashboards, admin review flows, verification flows, case-management flows.
- Government-grade UX review (tone, RTL, accessibility, content).

If the task is purely backend, data, or infrastructure with no UI surface, this Skill does not apply.

## Source-of-truth policy

- The authoritative references are the official DGA sources (see `references/00-source-of-truth.md`
  and the repository `sources.md`). The files in `references/` are operational summaries and are
  subordinate to the official sources.
- Read the relevant `references/` files before doing the work. Load only what the task needs.
- Do **not** invent official token values (colors, type scale, spacing, radii). Where exact values
  are required, use the project's existing tokens, or mark the value as "verify against the official
  source," rather than guessing.
- If a request conflicts with the official guidance, follow the guidance and say so.

## Mandatory workflow before editing code

Do these in order. Do not skip to editing. The flow is **audit-first → design-plan-before-coding →
incremental implementation → before/after review**.

1. **Audit first.** Inspect the project. Read the relevant files. Identify the framework, routing,
   styling stack (Tailwind config, design tokens, CSS variables), component library, and existing
   component structure and conventions. For design-quality work, run the critique
   (`references/19-design-critique-rubric.md`) and capture the "before"
   (`references/21-before-after-review.md`).
2. **Locate the seams.** Identify where UI ends and business logic, API calls, auth, authorization,
   and validation begin. You will preserve those.
3. **Read the references.** Pull the relevant `references/` files for the task (foundations, layout,
   components, forms, service patterns, RTL, accessibility, responsive, content, engineering, and
   the supplemental design-review layer `17`–`22` when judging design quality).
4. **Confirm scope.** State what you will and will not change. UI-only tasks stay UI-only.
5. **Design plan before coding.** Produce a short design plan first: the problems found, the aligned
   improvements, and the smallest coherent change. Reuse existing components and tokens before
   writing new ones. Introduce no new tokens, spacing, type styles, or color shades.
6. **Implement incrementally, then verify.** Make focused, reviewable changes, then run available
   checks.
7. **Before/after review and summarize.** Report changed files, the before → after improvement, and
   remaining manual-review items.

### What you must preserve

- **Business logic.** Do not change behavior, data flow, or computed results during UI work.
- **API contracts.** Do not change endpoints, request/response shapes, headers, or query keys.
- **Authentication and authorization.** Do not weaken, bypass, or disable login, sessions, roles, or
  permission checks.
- **Validation behavior.** Do not relax, remove, or alter validation rules unless explicitly asked.
  You may improve how validation is *presented* (labels, messages, focus) without changing what
  passes or fails.

## Government-grade design principles

- **Trust over flash.** Calm, official, restrained. No decorative noise, no marketing gloss.
- **Service-first.** Every screen makes the task and the next step obvious. Outcomes are explicit.
- **Accessibility-first.** Accessible by default, not as a later pass.
- **Arabic RTL correctness** is a baseline requirement, not an enhancement.
- **Consistency over novelty.** Reuse patterns; do not invent one-off visual treatments.
- **Clear hierarchy.** One primary action per view. Strong, legible typographic hierarchy.

See `references/01-design-principles.md` and `references/02-foundations.md`.

## Typography rules

Grounded in the typography page (`references/14-typography-page-extraction.md`,
`tokens/typography-v1.0.json`):

- Use **IBM Plex Sans Arabic** as the general-purpose platform typography family when implementing
  Platforms Code-aligned interfaces, unless the host project has approved typography tokens.
- Use **Display** styles for headings and large visual emphasis only.
- Use **Text** styles for body text, labels, helper text, tables, forms, navigation, and UI content.
- Do not use Display styles for long paragraphs.
- Do not use **Saudi Font** as the default product font. Saudi Font is limited to national or
  seasonal contexts and **main headings only**, subject to licensing and approval.
- Do not include or redistribute font files.

## Layout and spacing rules

Grounded in the layout-and-spacing source status (`references/15-layout-and-spacing-page-extraction.md`):

- Treat layout and spacing as a **core quality gate**.
- Preserve consistent section spacing, component spacing, form spacing, and mobile spacing.
- Do not use arbitrary one-off spacing unless required to resolve a specific layout defect.
- Prefer project spacing tokens or verified official Platforms Code spacing tokens.
- Do not invent official DGA spacing values (none are verified in this repository).

## Semantic color rules

Grounded in the semantic color extraction (`references/16-semantic-colors-extraction.md`,
`tokens/colors-v1.0.json`). Use semantic colors for state communication:

- Error 600 `#D92D20`
- Warning 600 `#DC6803`
- Success 600 `#1B8354`
- Info 600 `#1570EF`

Do not rely on semantic colors alone — pair state color with labels, icons, and accessible text.
Do not invent missing semantic shades.

## Source-boundary rules

- Use verified tokens from the repository token files (`tokens/`) when available.
- Do not invent official design tokens (colors, type scale, spacing, radii).
- Do not copy DGA logos, government logos, Figma files, Storybook assets, font files, or visual marks.
- Do not claim official compliance.

## Arabic RTL rules

- Set direction at the document or layout root with `dir="rtl"` and `lang="ar"`.
- Default text alignment is right; the visual flow mirrors left↔right.
- Use logical CSS properties / RTL-aware utilities (start/end) instead of hardcoded left/right.
- Mirror directional icons and arrows (back, forward, chevrons). Do **not** mirror inherently
  non-directional or LTR content: logos, Latin product names, barcodes, registration codes, phone
  numbers, emails, URLs, and code.
- Keep numbers, IDs, codes, and Latin strings in their natural LTR reading order even inside Arabic
  text; isolate them so they don't reorder surrounding text.
- Steppers, breadcrumbs, and progress flow right-to-left; "next" advances toward the left edge.

See `references/07-arabic-rtl.md`.

## Accessibility rules

- Meet sufficient color contrast for text, icons, and interactive states.
- Provide visible, clear focus states for every interactive element; never remove focus outlines
  without an equal or better replacement.
- Full keyboard operability and a logical tab order; no keyboard traps.
- Use semantic HTML (`button`, `a`, `nav`, `main`, `table`, `label`, headings in order).
- Every input has an associated, programmatic label. Errors are announced and linked to their field.
- Do not rely on color alone to convey status — pair it with text and/or an icon.
- Adequate touch-target size; respect reduced-motion preferences; tables have proper headers/scope.

See `references/08-accessibility.md`.

## Component rules

- Buttons: one primary action per view; secondary/tertiary are visually quieter. Real `<button>`s.
- Cards: consistent padding, radius, and elevation; do not overload a single card.
- Badges/status indicators: text + icon, not color alone; consistent vocabulary.
- Alerts: match severity to meaning; concise, actionable text; correct ARIA role.
- Tables: semantic headers, RTL-aware alignment, accessible sort, sensible empty/loading states.
- Modals: focus trap while open, restore focus on close, escape to dismiss, labeled.
- Always design empty, loading, and error states — not just the happy path.
- Result summary cards state the outcome plainly with a clear status and supporting detail.

See `references/04-components.md`.

## Forms and inputs rules

- Visible labels always; placeholders are not labels and must not carry essential instructions.
- Mark required vs optional consistently and explicitly. Help text sits near its field.
- Error messages are specific, in plain Arabic, and tell the user how to fix the problem.
- Preserve existing validation behavior; improve only its presentation unless asked otherwise.
- File/image/barcode inputs: clear accepted formats and limits, visible progress, and recoverable
  errors. Keep barcodes and codes LTR.
- For multi-step flows, use a Steps/stepper component with clear current/completed/upcoming states,
  and offer a review-before-submit step. See `references/05-forms-and-inputs.md`.

## Service-flow rules

- Service landing pages explain the service, eligibility/what's needed, and a single clear start CTA.
- Service selection presents options as equal, scannable, accessible choices.
- Multi-step flows show progress, allow back navigation, and preserve entered data.
- Upload → review → result: confirm inputs before submission; show explicit, trustworthy results.
- Confirmation and result pages state outcome, reference/identifier, and next steps clearly.
- Admin review, verification, and case-management flows make state, ownership, and the next action
  obvious; reflect the server's source of truth and never fabricate official results on the client.

See `references/06-service-patterns.md`.

## Supplemental design-review layer

In addition to the verified rules above, this Skill ships a **supporting design-review layer** for
judging design quality — visual hierarchy, CTA hierarchy, task clarity, Arabic UX writing, layout
quality, RTL behavior, accessibility, common anti-patterns, and structured before/after improvement.

- `references/17-visual-hierarchy-and-composition.md` — scanning order, emphasis, grouping, calm density.
- `references/18-ux-interaction-patterns.md` — task clarity, feedback, error recovery, states, flows.
- `references/19-design-critique-rubric.md` — a structured critique aid (internal, not an official score).
- `references/20-government-service-content-patterns.md` — Arabic UX-writing patterns (complements `10`).
- `references/21-before-after-review.md` — capture before → improve incrementally → honest after.
- `references/22-ui-anti-patterns.md` — things to flag, each with the aligned corrective direction.

These files are **supporting design-review guidance**. They align with — and never override — DGA
Platforms Code and the verified references (`13`–`16`) and tokens (`tokens/`). They are generic and
product-agnostic. They introduce no official DGA rules, tokens, spacing, components, templates, or
compliance claims. Any general UX best practice they contain is supporting guidance, not an official
DGA rule; never present another design system as official DGA guidance. The safe wording for any
review-aid judgment is **"aligned with Platforms Code principles."**

## Engineering safety rules

- Reuse existing components, tokens, and utilities before creating new ones; avoid one-off UI code.
- Centralize design decisions in tokens/config; do not scatter magic values.
- Make incremental, reviewable changes that match the surrounding code's conventions.
- Do not modify backend or security logic during UI-only tasks (see `SECURITY.md`).
- Run available checks (lint, typecheck, build, tests) and report results honestly.

See `references/11-engineering-rules.md`.

## Prohibited behavior

Do not:

- Copy or embed DGA, government, or entity logos, emblems, or official marks without explicit
  authorization.
- Claim, state, or imply official DGA compliance, certification, or approval.
- Invent official rules, tokens, or values that are not in the official sources.
- Change backend, API, authentication, authorization, or security logic during a UI-only task.
- Upload sensitive or personal data to external tools, or expose/hardcode secrets or tokens.
- Use real personal data (names, national IDs, phone numbers, addresses, record numbers) in
  examples or fixtures — use clearly fake data.
- Make the interface look like a commercial SaaS or marketing product when a governmental tone is
  requested.
- Overuse green (or any single accent) to the point that visual hierarchy weakens and the primary
  action or true success state is no longer distinct.

## Required output format after each task

End every task with a concise report:

1. **Scope** — what was requested and what you changed (UI-only vs. broader).
2. **Changed files** — list each file and a one-line description of the change.
3. **Preserved** — confirmation that logic, APIs, auth/authorization, and validation are unchanged
   (or an explicit note and justification if a change was explicitly requested).
4. **Checks** — which checks ran (lint/typecheck/build/tests) and their results, honestly reported.
5. **Manual-review items** — what a human must still verify (tone, logos/branding authorization,
   RTL with real content, accessibility with assistive tech, security-sensitive surfaces).
6. **Compliance note** — restate that this aligns with DGA principles and is not official compliance.

## Final quality gate checklist

Before declaring a task done, confirm:

- [ ] Government-grade tone: calm, official, trustworthy; not SaaS/marketing styling.
- [ ] Aligned with the official sources; no invented tokens; no compliance claims; no copied logos.
- [ ] Layout and hierarchy clear; one primary action per view.
- [ ] Arabic RTL correct, including mixed Arabic/Latin, numbers, codes, and mirrored icons.
- [ ] Accessibility: contrast, focus, keyboard, semantics, labels, error announcements, no
      color-only status, adequate touch targets, reduced motion respected.
- [ ] Components and forms follow the rules; empty/loading/error states exist.
- [ ] Content is clear, direct Arabic; messages are specific and helpful.
- [ ] Responsive: works mobile-first; no horizontal overflow; readable Arabic on small screens.
- [ ] Engineering safety: logic/APIs/auth/validation preserved; reused tokens/components; checks run.
- [ ] Output report delivered with changed files and manual-review items.

For the full checklist, see `references/12-design-review-checklist.md`.
