# 11 — Engineering rules

Government interfaces must be maintainable and safe to change. These rules keep UI work disciplined
and prevent collateral damage to logic and security.

## React / Tailwind implementation rules

- Match the project's existing conventions (component style, file structure, naming, state approach).
- Build accessible, semantic markup; use Tailwind utilities consistently with the project's config.
- Use RTL-aware utilities / logical properties (start/end) rather than hardcoded left/right.
- Keep components focused; separate presentational UI from data/logic where the codebase does.
- Prefer composition and existing primitives over bespoke markup.

## Component reuse

- Reuse existing components before creating new ones; extend rather than duplicate.
- If a needed pattern is missing, create one reusable component and use it everywhere it applies.
- Keep a single source for each shared pattern (buttons, cards, alerts, steppers, status badges).

## Design token centralization

- Source colors, type scale, spacing, radii, and shadows from central tokens (Tailwind config / CSS
  variables), not inline magic values.
- When the official foundations require specific values, set them once in the token layer.
- Do not invent token values; verify against the official sources or use the project's existing tokens.
- **Verified tokens** are available in [`../tokens/colors-v1.0.json`](../tokens/colors-v1.0.json) and
  [`../tokens/typography-v1.0.json`](../tokens/typography-v1.0.json). Map them into the project's token
  layer rather than hardcoding hex values across components. **Spacing tokens are not verified** — use
  the project's approved spacing scale; do not invent official DGA spacing.

## Official libraries

Platforms Code provides official libraries; use them as source references when the project has access:

- **Figma design library** — tested, ready-to-use design tools and components.
- **Storybook developer tool** — build and document UI components independently from the main
  application, viewing/testing each component in isolation before integration.
- **Mobile application library** — mobile UI elements and additional components (navigation bars,
  dynamic mobile icons, and other mobile-specific needs).

Rules:

- Do not copy or redistribute Figma assets.
- Do not copy or redistribute Storybook assets.
- Do not claim access to official libraries unless the project actually has access.
- Use these libraries as official source references when available (e.g., for exact anatomy, states,
  and spacing tokens).

## Avoiding one-off UI code

- Don't scatter ad hoc styles that diverge from the system.
- Replace duplicated snippets with shared components/utilities.
- Keep variants explicit (props/variants), not copy-pasted forks.

## Preserving logic

- UI tasks must not change business logic, computed results, or data flow.
- Don't alter API calls, endpoints, request/response shapes, or query keys.
- Keep authentication, authorization, and validation behavior intact (improve presentation only).

## Safe refactoring

- Make small, reviewable, incremental changes; keep diffs focused.
- Refactor structure without changing behavior; verify before and after.
- When a UI task appears to require a logic/security change, stop and flag it for explicit approval.

## Lint / build / test expectations

- Run the project's available checks: lint, typecheck, build, and tests.
- Fix issues your change introduces; report any pre-existing failures rather than hiding them.
- Don't disable lint rules or type checks to force a change through.

## No backend / security modifications during UI tasks

- Do not modify server logic, auth, sessions, or security configuration during UI-only work.
- Do not weaken validation, expose secrets, or hardcode tokens (see `SECURITY.md`).
- If backend work is genuinely required, separate it, flag it, and get explicit approval first.
