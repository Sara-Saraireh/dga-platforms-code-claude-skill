# Prompt — Redesign existing UI

Copy/paste this prompt to have Claude Code restyle an existing screen toward a government-grade,
Platforms Code-aligned look while preserving behavior.

---

Use the `dga-platforms-code` skill.

**Task:** Redesign the UI at `<path or route>` to be government-grade, calm, trustworthy, Arabic
RTL-correct, accessible, and consistent — **without changing behavior**.

Do the following, in order:

1. **Design audit first.** Identify framework, routing, styling stack/tokens, and component
   structure. Map where UI ends and business logic, APIs, authentication, authorization, and
   validation begin. Read the references (foundations, layout, components, forms, service patterns,
   RTL, accessibility, responsive, content, engineering) and the supporting design-review layer
   `references/17-visual-hierarchy-and-composition.md` and
   `references/18-ux-interaction-patterns.md`. Capture the "before" using
   `references/21-before-after-review.md` and the rubric `references/19-design-critique-rubric.md`.
2. **Implementation plan.** Before coding, write a short plan: the problems found and the smallest
   coherent set of aligned improvements. Reuse existing components and verified tokens; introduce no
   new tokens, spacing, type styles, or color shades.
3. **Preserve logic and security.** Do not change business logic, API contracts,
   authentication/authorization, or validation behavior. Improve only presentation.
4. **Make incremental changes.** Reuse existing components and tokens; centralize new design
   decisions. Avoid one-off styles. Keep diffs focused and reviewable.
5. **Ensure RTL and responsive correctness** and accessibility (contrast, focus, keyboard,
   semantics, labels, status not by color alone, touch targets, reduced motion).
6. **Run available checks** (lint, typecheck, build, tests) and fix issues your change introduces.
7. **Before/after report.** Output: scope, changed files (one line each), the before → after
   improvement per area (`references/21-before-after-review.md`), confirmation that logic/APIs/auth/
   validation are preserved, checks run and results, and remaining manual-review items. Restate the
   compliance disclaimer.

Do not claim official compliance, copy official logos, invent token values, make it look like a SaaS
product, overuse the success/green color, or use real personal data.

---

**Design-excellence additions** (apply when design quality is in scope):

- **Design direction (required for redesigns):** propose 2–3 government-grade directions before
  coding — Conservative official, Modern official, or Data-service official — each with layout,
  hierarchy, CTA, card/form approach, risks, and a recommendation
  (`references/23-design-direction-framework.md`).
- **High-fidelity polish pass:** hero, section rhythm, card anatomy, CTA hierarchy, typography scale,
  header/footer trust, empty/loading/error states, mobile density, RTL, accessibility
  (`references/24-high-fidelity-polish-rules.md`, `references/26-component-anatomy-polish.md`).
- **Before/after review:** what looked basic, what improved, what still needs human design review
  (`references/21-before-after-review.md`).
- **Internal design quality gate:** score 1–5 per item; fix any item below 3 before finishing
  (`references/27-design-quality-gate.md`). Internal review aid only, not an official score.
- **Boundary:** this is **aligned with Platforms Code principles**, not official DGA compliance.
