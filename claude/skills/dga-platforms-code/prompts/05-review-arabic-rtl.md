# Prompt — Review Arabic RTL

Copy/paste this prompt to have Claude Code review (and optionally fix) Arabic RTL correctness.

---

Use the `dga-platforms-code` skill.

**Task:** Review `<path or route(s)>` for Arabic RTL correctness and content quality. Default to a
**review with proposed fixes**; only apply fixes if I confirm or if I say "apply".

Do the following, in order:

1. **Inspect first.** Identify framework, routing, styling stack, and how direction/locale are set.
   Note where business logic, APIs, authentication, authorization, and validation live (you will
   preserve them).
2. **Read the relevant references** in the skill: `07-arabic-rtl.md` and `10-content-style-arabic.md`
   (plus accessibility and components as needed).
3. **Check RTL correctness:** `dir="rtl"`/`lang`; start/end (logical) spacing and alignment vs
   hardcoded left/right; mirrored directional icons/arrows; non-mirrored logos/Latin/numbers/codes;
   bidi isolation of mixed Arabic/Latin and IDs; RTL steppers/breadcrumbs; label/helper associations.
4. **Check Arabic content:** clear, formal, consistent terminology; precise verb labels; specific
   error/success/status messages; no awkward literal translation; English product names preserved.
5. **Preserve logic and security.** Any fixes are presentation-only; do not change business logic,
   APIs, auth/authorization, or validation.
6. If applying fixes: **make incremental changes**, reuse tokens/components, then **run available
   checks** (lint, typecheck, build, tests).
7. **Report.** Output: findings (with file/line), proposed or applied fixes, changed files if any,
   checks run and results, and manual-review items (review with real Arabic content / native
   speaker). Restate the compliance disclaimer.

Do not claim official compliance, copy official logos, invent token values, or use real personal data.

---

**Design-excellence additions** (apply when design quality is in scope):

- **Design direction (redesigns only):** if the task expands into a redesign, propose 2–3
  government-grade directions before coding (`references/23-design-direction-framework.md`).
- **High-fidelity polish:** check RTL alignment within hero, cards, CTA hierarchy, header/footer, and
  state handling (`references/24-high-fidelity-polish-rules.md`, `references/26-component-anatomy-polish.md`).
- **Before/after framing:** note what reads awkwardly now and what a polished RTL version improves
  (`references/21-before-after-review.md`).
- **Internal design quality gate:** score 1–5 per item (emphasis on RTL correctness and content);
  flag any item below 3 with a fix (`references/28-design-quality-gate.md`). Internal aid only.
- **Boundary:** this is **aligned with Platforms Code principles**, not official DGA compliance.
