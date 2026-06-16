# Prompt — Motion polish pass

Copy/paste this prompt **only** for subtle motion and interaction feedback — adding small,
purposeful, accessible motion to an existing screen without changing behavior or visual style.

---

Use the `dga-platforms-code` skill.

**Task:** Add subtle, government-grade motion and interaction feedback to `<path or route>`. Keep it
restrained and accessible. Do **not** change behavior, layout, or visual style.

Do the following, in order:

1. **Inspect the existing animation/motion stack first.** Identify what the project already uses
   (CSS transitions, a motion library, etc.), and where UI ends and business logic, APIs,
   auth/authorization, validation, routing, and state begin. Read
   `references/27-motion-and-interaction-guidelines.md`.
2. **Do not add new animation dependencies** (e.g. GSAP, Motion, Lottie, Rive) unless the project
   already uses them or the user explicitly approves. Do not copy external animation code or assets.
3. **Prefer CSS transitions** for simple hover, focus, expand/collapse, and show/hide interactions.
4. **Add only subtle, purposeful motion** that supports **feedback, hierarchy, loading, or
   transitions**. Do not add decorative, playful, or flashy animation.
5. **Respect `prefers-reduced-motion`.** Disable or substantially reduce non-essential motion when
   requested. **Motion must never be the only way to communicate state** — success/error/warning/
   loading must remain clear through text and accessible semantics.
6. **Preserve all functionality.** Keep focus management correct through transitions; do not break
   keyboard or screen-reader flow. Change presentation only.
7. **Run available checks** (lint, typecheck, build, tests) and fix issues your change introduces.
8. **Summarize.** Output: scope, changed files (one line each), where motion was added and why,
   confirmation that `prefers-reduced-motion` is respected and state is never motion-only, checks run
   and results, and remaining manual-review items.

Do not claim official compliance, add animation dependencies without approval, copy external
animation assets, present any third-party motion skill as official DGA guidance, use decorative or
flashy motion, or use real personal data. This is **aligned with Platforms Code principles**, not
official DGA compliance.
