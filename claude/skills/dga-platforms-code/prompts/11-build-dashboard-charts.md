# Prompt — Build dashboard charts

Copy/paste this prompt when adding charts or dashboard visualizations to a government-style interface.

---

Use the `dga-platforms-code` skill.

**Task:** Add data visualizations to `<path or route>` that support understanding and
decision-making — government-grade, Arabic RTL-correct, accessible — **without changing behavior**.

Do the following, in order:

1. **Inspect first.** Identify the framework, routing, styling stack/tokens, and component structure.
   Map where UI ends and business logic, APIs, authentication, authorization, validation, routing,
   and state begin — you will preserve all of these.
2. **Detect existing chart libraries.** Check the project for an existing charting library (e.g.
   Recharts, Chart.js, ECharts, D3, Nivo). **Do not add a charting dependency** without explicit
   approval — if none exists, use the no-dependency fallbacks (semantic table / CSS bars / text
   summary) from `templates/charts/`.
3. **Read the references:** `references/29-data-visualization-and-charts.md`,
   `tokens/chart-tokens-v1.0.json`, `references/08-accessibility.md`, and `templates/charts/` +
   `examples/charts/`.
4. **Choose the right visualization.** KPI card for a single number; **bar** for categorical
   comparison; **line** for trends over time; **simple donut/pie** for part-to-whole with few
   segments; **horizontal bar** for many categories or long Arabic labels; **table** when users need
   exact, row-level review. Avoid decorative or overly complex charts.
5. **Use DGA-aligned chart tokens and components from the skill.** Map colors via the role variables
   in `tokens/chart-tokens-v1.0.json` (verified tokens only) — **do not invent DGA chart tokens or a
   palette**. Reuse the `templates/charts/` components (container, KPI, bar/line/donut, states).
6. **Preserve logic and security.** Do not change business logic, API contracts,
   authentication/authorization, validation, routing, or state management. Charts are presentational.
7. **Include states.** Every chart has loading, empty, and error states (not just the happy path),
   and a clear title, short description, and accessible text summary.
8. **Accessibility & RTL checks.** Not color alone (labels/legend/patterns + status text); sufficient
   contrast; keyboard/screen-reader considerations; Arabic titles/labels aligned and **not
   truncated**; numbers/percentages/dates/codes readable and LTR-isolated.
9. **Run available checks** (lint, typecheck, build, tests) and fix issues your change introduces.
10. **Report.** Output: scope, changed/added files (one line each), confirmation that
    logic/APIs/auth/validation/routing/state are preserved, checks run and results, and manual-review
    items (Arabic content with a native speaker, accessibility with assistive tech, data-source/date
    correctness). Restate that this is **aligned with Platforms Code principles**, not official DGA
    compliance.

Do not claim official compliance, copy official logos/Figma/Storybook assets, invent chart tokens,
spacing, or palettes, add chart dependencies without approval, make charts decorative/3D/playful, or
use real personal data (use clearly fake mock data).
