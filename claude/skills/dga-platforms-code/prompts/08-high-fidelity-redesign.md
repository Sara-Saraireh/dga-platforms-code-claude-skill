# Prompt — High-fidelity redesign

Copy/paste this prompt when a screen is **functional but looks basic** and you want a polished,
high-fidelity, government-grade result — without changing behavior.

---

Use the `dga-platforms-code` skill.

**Task:** Redesign the UI at `<path or route>` to a polished, high-fidelity, government-grade
standard. It works but looks basic — make it complete and trustworthy **without changing behavior**.

Do the following, in order:

1. **Inspect first.** Identify framework, routing, styling stack/tokens, and component structure.
   Map where UI ends and business logic, APIs, authentication, authorization, and validation begin.
2. **Diagnose why it looks basic.** Identify the page type, primary user task, target user, the main
   decision the user must make, and the current visual / UX / content / RTL-accessibility weaknesses.
   Read the references: `23-design-direction-framework.md`, `24-high-fidelity-polish-rules.md`,
   `25-government-page-blueprints.md`, `26-component-anatomy-polish.md`, plus `17` and `18`.
3. **Propose 2–3 design directions.** From the allowed government-grade directions (Conservative
   official, Modern official, Data-service official), propose 2–3 fitting this screen. For each give
   layout approach, visual hierarchy approach, CTA approach, card/form approach, risks, and a
   recommendation.
4. **Pick the best direction** (use the user's choice if given; otherwise choose and state why) and
   **implement incrementally.** Reuse existing components and verified tokens; introduce no new
   tokens, spacing, type styles, or color shades.
5. **Preserve logic and security.** Do not change business logic, API contracts,
   authentication/authorization, or validation behavior. Improve only presentation.
6. **Polish pass.** Improve hero hierarchy, section rhythm, card anatomy, CTA hierarchy, typography
   scale, header/footer trust signals, empty/loading/error states, mobile density, RTL alignment,
   and accessibility (`24`, `26`).
7. **Run available checks** (lint, typecheck, build, tests) and fix issues your change introduces.
8. **Before/after review + quality gate.** Summarize what looked basic before, what was improved,
   what still needs human design review, and what remains outside official compliance
   (`21-before-after-review.md`). Then score the **internal design quality gate**
   (`27-design-quality-gate.md`, 1–5 per item); if any item is below 3, apply or list a fix before
   finishing. Confirm logic/APIs/auth/validation are preserved.

Do not claim official compliance, copy official logos, invent token or spacing values, present any
third-party design system as official DGA guidance, make it look like a SaaS product, overuse the
success/green color, or use real personal data. This is **aligned with Platforms Code principles**,
not official DGA compliance.
