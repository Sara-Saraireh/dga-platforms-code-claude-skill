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
   patterns, Arabic RTL, accessibility, responsive, content, and the design review checklist. For
   design quality, also read the supporting design-review layer:
   `references/17-visual-hierarchy-and-composition.md`, `references/19-design-critique-rubric.md`,
   `references/20-government-service-content-patterns.md`, and `references/22-ui-anti-patterns.md`.
3. **Evaluate** the target against `references/12-design-review-checklist.md` and the critique
   rubric `references/19-design-critique-rubric.md`. For each area (tone, source alignment, layout,
   **visual hierarchy, CTA hierarchy**, RTL, accessibility, components, forms, **Arabic content
   patterns**, responsive, **UI anti-patterns**, engineering safety), list concrete findings with
   file/line references.
4. **Preserve everything.** Do not modify business logic, API contracts, auth/authorization, or
   validation. Do not apply fixes in this audit.
5. **Prioritize.** Group findings into Critical / Important / Minor, with a short rationale each.
6. **Report.** Output: scope, findings by area and severity, and a recommended fix order. Add
   manual-review items (branding/logo authorization, accessibility with assistive tech,
   security-sensitive surfaces). Restate that this aligns with DGA principles and is not official
   compliance.

Do not claim official compliance, copy official logos, invent token values, or use real personal data.

---

**Design-excellence additions** (apply when design quality is in scope):

- **Design direction (redesigns only):** if the task expands into a redesign, propose 2–3
  government-grade directions before coding — Conservative official, Modern official, or Data-service
  official (`references/23-design-direction-framework.md`).
- **High-fidelity polish:** assess hero, section rhythm, card anatomy, CTA hierarchy, typography
  scale, header/footer trust, empty/loading/error states, mobile density, RTL, and accessibility
  (`references/24-high-fidelity-polish-rules.md`, `references/26-component-anatomy-polish.md`).
- **Before/after framing:** note what looks basic now and what a polished version would improve
  (`references/21-before-after-review.md`).
- **Internal design quality gate:** score 1–5 per item; flag any item below 3 with a fix
  (`references/27-design-quality-gate.md`). Internal review aid only, not an official score.
- **Boundary:** this is **aligned with Platforms Code principles**, not official DGA compliance.
