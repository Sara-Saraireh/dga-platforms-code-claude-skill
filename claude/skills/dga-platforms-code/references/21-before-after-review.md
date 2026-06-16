# 21 — Before/after review

> Supporting design-review guidance. It aligns with — and never overrides — DGA Platforms Code
> and the verified references (`13`–`16`) and tokens (`tokens/`). It introduces no official DGA
> rules, tokens, spacing, or compliance claims.

Use this to drive *measurable improvement*: capture the prior state, name concrete problems, propose
aligned improvements, implement incrementally, and write an honest before/after summary. This makes
design work reviewable and ties it back to preserved logic and the checklist.

## The method

1. **Capture the "before."** Record the current state of the target screen(s): structure, hierarchy,
   CTA layout, Arabic content, RTL behavior, accessibility, and any anti-patterns
   (`22-ui-anti-patterns.md`). Note file/line references and, where useful, a screenshot path. Do
   not use real personal data — use clearly fake placeholders.
2. **Name the problems.** Run the rubric (`19-design-critique-rubric.md`). For each finding, state
   what's weak and why, grouped Critical / Important / Minor.
3. **Plan the "after."** Propose the smallest coherent set of aligned changes. Reuse existing
   components and verified tokens; introduce no new tokens, spacing, type styles, or color shades.
   Map each proposed change to the verified reference that governs it.
4. **Preserve logic and security.** Before touching code, locate the seams where UI ends and
   business logic, API contracts, authentication, authorization, and validation begin. These do not
   change during UI work (see `SECURITY.md`, `11-engineering-rules.md`). You may improve how
   validation is *presented*, not what passes or fails.
5. **Implement incrementally.** Make focused, reviewable changes that match the surrounding code.
   Centralize design decisions in tokens/config; avoid one-off styles.
6. **Verify.** Run available checks (lint, typecheck, build, tests). Re-check RTL, responsive, and
   accessibility. Confirm the primary action is still singular and obvious.
7. **Summarize before/after.** Report honestly (see shape below).

## Before/after summary shape

- **Scope** — what was reviewed and changed (UI-only vs broader).
- **Before → After** — per area (hierarchy, CTA, content/Arabic, layout, RTL, accessibility), the
  concrete problem and the aligned improvement, with evidence (file/line).
- **Preserved** — confirmation that business logic, API contracts, auth/authorization, and
  validation are unchanged (or an explicit, justified note if a change was explicitly requested).
- **Checks** — which checks ran and their results, honestly reported (including pre-existing failures).
- **Manual-review items** — what a human must still verify: branding/logo authorization, Arabic
  content and RTL with real content, accessibility with assistive technology, security-sensitive
  surfaces.
- **Compliance note** — restate that this is **aligned with Platforms Code principles** and is **not**
  official DGA compliance.

## Honesty rules

- Claim only improvements you can show. If something was skipped or a check failed, say so.
- Do not describe a change as "compliant" or "certified"; the safe wording is
  **"aligned with Platforms Code principles."**
- Do not overstate impact or invent metrics.

See also: `12-design-review-checklist.md`, `19-design-critique-rubric.md`, `prompts/07-design-polish-pass.md`.
