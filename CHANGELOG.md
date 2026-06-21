# Changelog

All notable changes to this repository are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) principles, and the project uses Semantic
Versioning (see [GOVERNANCE.md](GOVERNANCE.md)).

## [1.7.0] - 2026-06-17

### Added
- **Chart components (component library increment 2)** in `components/charts/` — reusable,
  **dependency-free** React chart components (pure SVG/CSS, no Recharts):
  - `ChartContainer` (title, description, required accessible summary, legend, source,
    empty/loading/error state switch), `KpiCard`, `LineChart`, `BarChart`
    (`orientation="horizontal"` for long Arabic labels), `DonutChart`, and
    `ChartEmpty`/`ChartLoading`/`ChartError`; plus `charts/charts.css` and `charts/index.js`.
- `components/tokens.css`: added verified `--pc-chart-*` role variables (series 1/2, axis, grid,
  text, semantic states) mapped to existing verified color tokens.

### Changed
- `components/index.js`: re-export the chart components.
- `components/README.md`: added a "Charts (increment 2)" section with usage.

### Notes
- Charts are **illustrative and aligned with Platforms Code principles** — not official DGA
  Figma/Storybook assets, no official-compliance claim. **No charting dependency is added** (pure
  SVG). All chart colors use only verified `--pc-chart-*` roles (no invented palette); charts never
  rely on color alone (labels/legend/dashes), are RTL-correct, and require a text `summary` for
  screen readers. Verified color/typography/spacing/elevation tokens are unchanged.

## [1.6.0] - 2026-06-17

### Added
- Bundled, reusable **component library** in `claude/skills/dga-platforms-code/components/`, driven
  entirely by the verified tokens and aligned with Platforms Code component anatomy:
  - `tokens.css` — verified colors/typography/spacing/elevation as `--pc-*` CSS custom properties.
  - `components.css` — token-driven, RTL-aware (CSS logical properties) component styles.
  - Increment 1 components (React): `Button`, `Badge`, `Input`, `Alert`, `Card`, `Stepper`,
    `Breadcrumbs`, `Modal`; plus `index.js` and `README.md`.
- `references/30-component-library.md` — maps the library to the official 50-component inventory,
  with build rules, the boundary, and the roadmap for the next increments.

### Changed
- `SKILL.md`: added a "Bundled component library" subsection directing reuse of these components.

### Notes
- Components are **illustrative and aligned with Platforms Code principles** — not official DGA
  Figma/Storybook assets, and they assert no official compliance. No official code, assets, or fonts
  are copied (IBM Plex Sans Arabic is loaded by the host project). All styling uses verified tokens;
  `radius` is illustrative pending Figma confirmation. Framework-light (React + CSS, no Tailwind
  required), accessible by default, and RTL-first.

## [1.5.0] - 2026-06-16

### Added
- Verified tokens captured by rendering the official (client-side) DGA foundation pages on
  2026-06-16:
  - `tokens/spacing-v1.0.json` — spacing scale (`spacing-none`…`spacing-11xl`, px 0–160), widths,
    container padding/max-width, paragraph max-width, and breakpoints (px authoritative).
  - `tokens/elevation-v1.0.json` — 7-level shadow scale (`Shadows-shadow-xs`…`3xl`, color `#101828`)
    plus backdrop-blur levels.
  - `references/29-elevation-and-shadows-extraction.md` — verified elevation extraction.

### Changed
- `references/15-layout-and-spacing-page-extraction.md`: upgraded from "source status / unverified" to
  a **verified extraction** with the spacing scale table and a rem-vs-px caveat.
- `SKILL.md`: replaced "no verified spacing (none in repository)" with the verified spacing scale, and
  added an elevation/shadow rules section.
- `sources.md` and `tools/source-update-log.md`: recorded the layout-and-spacing and elevation pages
  as verified sources, added the developing/design-installation entry (delivery model = Figma
  libraries, not a code package), and listed the new token files.

### Notes
- Values were **read** from the official pages (rendered in a browser); no Figma/Storybook assets,
  fonts, code, or animations were copied. px values are authoritative; exact `rem` for the largest
  spacing steps, the `2xl` shadow Y value, and backdrop-blur level names are flagged to confirm in the
  official Figma library. Existing verified token files (colors, typography) and references `13`,`14`,
  `16` are unchanged. No official-compliance claim is made; the "aligned with Platforms Code
  principles" wording and copyright are preserved.

## [1.1.0] - 2026-06-15

### Added
- Verified extractions from official sources:
  - `references/13-platforms-code-guide-v1.0-extraction.md` (Platforms Code Guide v1.0, 17 Nov 2024).
  - `references/14-typography-page-extraction.md` (typography page content).
  - `references/15-layout-and-spacing-page-extraction.md` (layout & spacing source status).
  - `references/16-semantic-colors-extraction.md` (Semantic 600 values).
- Verified design tokens: `tokens/colors-v1.0.json` (Gray, Gold, SA, Semantic 600) and
  `tokens/typography-v1.0.json` (IBM Plex Sans Arabic / Saudi Font, weights, type scale, a11y).

### Changed
- Ownership: `LICENSE.md` copyright set to "Copyright (c) 2026 Sara Saraireh".
- Grounded `README.md`, `SKILL.md`, and references `00, 01, 02, 04, 06, 08, 11, 12` in the verified
  sources (objectives, libraries, typography rules, layout/spacing status, semantic colors,
  accessibility, evaluation criteria, future-outlook vision note).
- Updated `sources.md`, `tools/source-update-log.md`, and `tools/manual-review-template.md`.
- `GOVERNANCE.md` and `SECURITY.md` restate the implementation-alignment-only boundary and the
  no-redistribution rule for fonts, Figma/Storybook assets, logos, and marks.

### Notes
- Exact numeric **spacing** tokens remain unverified; no `spacing-v1.0.json` is created. Violet/black
  color values and semantic shades beyond 600 are not invented. No official-compliance claim is made.

## [1.0.0] - 2026-06-15

### Added
- Initial release of the `dga-platforms-code` Claude Code Skill.
- `claude/skills/dga-platforms-code/SKILL.md`: operational, implementation-ready Skill definition.
- `references/00-12`: operational summaries for source-of-truth, design principles, foundations,
  layout & navigation, components, forms & inputs, service patterns, Arabic RTL, accessibility,
  responsive/mobile, Arabic content style, engineering rules, and the design review checklist.
- `prompts/01-06`: reusable prompts for audit, redesign, new page, conversion, Arabic RTL review,
  and final quality gate.
- `templates/`: React + Tailwind illustrative templates (service home, service card, form page,
  results page, dashboard) and Arabic UX copy patterns.
- `examples/`: four generic, product-agnostic public-sector flows (service selection,
  upload-and-review, results, admin dashboard).
- Repository governance: `README.md`, `GOVERNANCE.md`, `SECURITY.md`, `sources.md`, `LICENSE.md`.
- `tools/`: link checklist, source update log template, and manual review template.

### Notes
- Foundations are described as implementation guidance only. No official token values are invented;
  exact values must be verified against the official DGA sources.
- This release aligns with DGA Platforms Code principles but does not claim official compliance.
