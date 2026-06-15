# Prompt — Audit existing UI

Copy/paste this prompt to have Claude Code audit an existing interface against the DGA Platforms
Code-aligned rules without changing behavior.

---

Use the `dga-platforms-code` skill.

**Task:** Audit the existing UI at `<path or route>` for government-grade tone, Arabic RTL
correctness, accessibility, components/forms quality, content, and responsive behavior. This is a
**read-only audit** — do not change code yet.

Do the following, in order:

1. **Inspect first.** Identify the framework, routing, styling stack (Tailwind config / tokens),
   component structure, and conventions. Note where UI ends and business logic, API calls,
   authentication, authorization, and validation begin.
2. **Read the relevant references** in the skill: foundations, layout, components, forms, service
   patterns, Arabic RTL, accessibility, responsive, content, and the design review checklist.
3. **Evaluate** the target against `references/12-design-review-checklist.md`. For each area
   (tone, source alignment, layout, RTL, accessibility, components, forms, content, responsive,
   engineering safety), list concrete findings with file/line references.
4. **Preserve everything.** Do not modify business logic, API contracts, auth/authorization, or
   validation. Do not apply fixes in this audit.
5. **Prioritize.** Group findings into Critical / Important / Minor, with a short rationale each.
6. **Report.** Output: scope, findings by area and severity, and a recommended fix order. Add
   manual-review items (branding/logo authorization, accessibility with assistive tech,
   security-sensitive surfaces). Restate that this aligns with DGA principles and is not official
   compliance.

Do not claim official compliance, copy official logos, invent token values, or use real personal data.
