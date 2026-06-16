# Prompt — Design polish pass

Copy/paste this prompt for a lightweight, low-risk design polish — small presentation improvements
to hierarchy, CTA clarity, spacing, and content — without redesigning or changing behavior.

---

Use the `dga-platforms-code` skill.

**Task:** Run a focused design-polish pass on `<path or route>`. Apply only small, low-risk
**presentation** improvements (visual hierarchy, CTA emphasis, grouping/spacing, Arabic copy,
obvious anti-patterns). Do **not** redesign and do **not** change behavior.

Do the following, in order:

1. **Audit first (brief).** Inspect the target and identify the framework, styling stack/tokens, and
   component structure. Map where UI ends and business logic, APIs, auth/authorization, and
   validation begin. Read the supporting references: `17-visual-hierarchy-and-composition.md`,
   `19-design-critique-rubric.md`, `22-ui-anti-patterns.md` (plus `20` for Arabic copy if relevant).
2. **List the polish items.** Note the small issues (competing CTAs, weak primary action, cramped
   spacing, color-only status, placeholder-as-label, vague Arabic copy, mirrored codes), each with a
   file/line reference and the aligned fix. Capture the "before" (`21-before-after-review.md`).
3. **Minimal plan.** Choose the smallest coherent set of changes. Reuse existing components and
   verified tokens; introduce no new tokens, spacing, type styles, or color shades.
4. **Preserve logic and security.** Do not change business logic, API contracts,
   authentication/authorization, or validation behavior. Improve only presentation.
5. **Implement incrementally** with focused, reviewable diffs that match the surrounding code.
6. **Run available checks** (lint, typecheck, build, tests) and fix issues your change introduces.
7. **Before/after summary.** Output: scope, before → after per item with evidence, confirmation that
   logic/APIs/auth/validation are preserved, checks run and results, and remaining manual-review
   items. Restate that this is **aligned with Platforms Code principles** and is **not** official
   compliance.

Do not claim official compliance, copy official logos, invent token or spacing values, present any
general UX practice as official DGA guidance, make it look like a SaaS product, overuse the
success/green color, or use real personal data.

---

**Design-excellence additions** (apply when design quality is in scope):

- **High-fidelity polish pass:** hero, section rhythm, card anatomy, CTA hierarchy, typography scale,
  header/footer trust, empty/loading/error states, mobile density, RTL, accessibility
  (`references/24-high-fidelity-polish-rules.md`, `references/26-component-anatomy-polish.md`).
- **Motion (only if purposeful):** subtle, accessible motion that supports feedback/loading/
  transitions; respect `prefers-reduced-motion`; never state-by-motion-alone; add no animation
  dependency without approval (`references/27-motion-and-interaction-guidelines.md`). For a dedicated
  motion-only pass, use `prompts/10-motion-polish-pass.md`.
- **Design direction (if it grows into a redesign):** propose 2–3 government-grade directions first
  (`references/23-design-direction-framework.md`).
- **Internal design quality gate:** score 1–5 per item; fix any item below 3 before finishing
  (`references/28-design-quality-gate.md`). Internal review aid only, not an official score.
- **Boundary:** this is **aligned with Platforms Code principles**, not official DGA compliance.
