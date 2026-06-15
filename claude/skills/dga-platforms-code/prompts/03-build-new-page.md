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
