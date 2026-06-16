# Prompt — Build a new page

Copy/paste this prompt to have Claude Code build a new government-grade page or flow that fits the
existing project.

---

Use the `dga-platforms-code` skill.

**Task:** Build a new `<page/flow name>` (e.g., service landing, service selection, multi-step form,
upload→review→result, results page, dashboard) at `<route>`. It must be government-grade, Arabic
RTL-correct, accessible, responsive, and consistent with the existing project.

Do the following, in order:

1. **Inspect first.** Identify framework, routing, styling stack/tokens, and existing components and
   conventions. Find existing patterns to reuse (buttons, cards, forms, steppers, status badges).
2. **Read the relevant references** in the skill (design principles, foundations, layout, components,
   forms, service patterns, RTL, accessibility, responsive, content). Use `templates/` as a starting
   point and adapt them to the project's conventions and tokens.
3. **Preserve contracts.** Integrate with existing APIs without changing their contracts; respect
   existing authentication, authorization, and validation. Do not add backend/security changes.
4. **Build incrementally.** Reuse components and tokens; centralize any new design decisions; design
   empty, loading, and error states, not just the happy path.
5. **Ensure RTL, responsive, and accessibility correctness** throughout.
6. **Run available checks** (lint, typecheck, build, tests) and fix issues your change introduces.
7. **Report.** Output: scope, new/changed files (one line each), confirmation that logic/APIs/auth/
   validation are preserved, checks run and results, and manual-review items. Restate the compliance
   disclaimer.

Do not claim official compliance, copy official logos, invent token values, make it look like a SaaS
product, overuse the success/green color, or use real personal data (use clearly fake data).

---

**Design-excellence additions** (apply when design quality is in scope):

- **Diagnose first:** page type, primary task, target user, and the main decision the user must make
  (`references/25-government-page-blueprints.md`).
- **Design direction:** pick a fitting government-grade direction (Conservative official, Modern
  official, or Data-service official) and state why (`references/23-design-direction-framework.md`).
- **High-fidelity polish pass:** hero, section rhythm, card anatomy, CTA hierarchy, typography scale,
  header/footer trust, empty/loading/error states, mobile density, RTL, accessibility
  (`references/24-high-fidelity-polish-rules.md`, `references/26-component-anatomy-polish.md`).
- **Before/after framing + quality gate:** summarize the polished result and score 1–5 per item;
  fix any item below 3 (`references/21-before-after-review.md`, `references/27-design-quality-gate.md`).
- **Boundary:** this is **aligned with Platforms Code principles**, not official DGA compliance.
