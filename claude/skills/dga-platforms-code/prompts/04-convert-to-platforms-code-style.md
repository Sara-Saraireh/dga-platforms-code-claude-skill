# Prompt — Convert to Platforms Code-aligned style

Copy/paste this prompt to migrate an existing area toward a Platforms Code-aligned visual language
and component vocabulary, incrementally and safely.

---

Use the `dga-platforms-code` skill.

**Task:** Convert `<area/route(s)>` to a Platforms Code-aligned style: government-grade tone,
consistent components, centralized tokens, correct Arabic RTL, accessibility, and responsive
behavior. **Behavior must not change.**

Do the following, in order:

1. **Inspect first.** Identify framework, routing, styling stack/tokens, and component structure.
   Catalog current visual patterns and where they diverge from the skill's references. Map where
   business logic, APIs, authentication, authorization, and validation live.
2. **Read the relevant references** in the skill (foundations, layout, components, forms, service
   patterns, RTL, accessibility, responsive, content, engineering).
3. **Plan the migration** as small, reviewable steps. Prefer establishing/aligning shared tokens and
   components first, then applying them. Do not invent token values — use the project's tokens or
   verify against the official sources.
4. **Preserve logic and security.** Do not change business logic, API contracts, auth/authorization,
   or validation. No backend/security changes.
5. **Apply incrementally**, reusing components and tokens, removing one-off styles, and keeping each
   step focused. Maintain RTL, responsive, and accessibility correctness.
6. **Run available checks** (lint, typecheck, build, tests) after each meaningful step; fix issues
   your change introduces.
7. **Report.** Output: scope, changed files (one line each), confirmation that logic/APIs/auth/
   validation are preserved, checks run and results, and manual-review items. Restate the compliance
   disclaimer.

Do not claim official compliance, copy official logos, invent token values, make it look like a SaaS
product, overuse the success/green color, or use real personal data.
