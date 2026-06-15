# Prompt — Redesign existing UI

Copy/paste this prompt to have Claude Code restyle an existing screen toward a government-grade,
Platforms Code-aligned look while preserving behavior.

---

Use the `dga-platforms-code` skill.

**Task:** Redesign the UI at `<path or route>` to be government-grade, calm, trustworthy, Arabic
RTL-correct, accessible, and consistent — **without changing behavior**.

Do the following, in order:

1. **Inspect first.** Identify framework, routing, styling stack/tokens, and component structure.
   Map where UI ends and business logic, APIs, authentication, authorization, and validation begin.
2. **Read the relevant references** in the skill (foundations, layout, components, forms, service
   patterns, RTL, accessibility, responsive, content, engineering).
3. **Preserve logic and security.** Do not change business logic, API contracts,
   authentication/authorization, or validation behavior. Improve only presentation.
4. **Make incremental changes.** Reuse existing components and tokens; centralize new design
   decisions. Avoid one-off styles. Keep diffs focused and reviewable.
5. **Ensure RTL and responsive correctness** and accessibility (contrast, focus, keyboard,
   semantics, labels, status not by color alone, touch targets, reduced motion).
6. **Run available checks** (lint, typecheck, build, tests) and fix issues your change introduces.
7. **Report.** Output: scope, changed files (one line each), confirmation that logic/APIs/auth/
   validation are preserved, checks run and results, and remaining manual-review items. Restate the
   compliance disclaimer.

Do not claim official compliance, copy official logos, invent token values, make it look like a SaaS
product, overuse the success/green color, or use real personal data.
