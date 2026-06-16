# Changelog

All notable changes to this repository are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) principles, and the project uses Semantic
Versioning (see [GOVERNANCE.md](GOVERNANCE.md)).

## [1.3.0] - 2026-06-16

### Added
- Design-excellence layer (supporting guidance that aligns with — and never overrides — DGA
  Platforms Code and the verified references/tokens):
  - `references/23-design-direction-framework.md` (Conservative / Modern / Data-service official).
  - `references/24-high-fidelity-polish-rules.md` (hero, cards, CTA, spacing, icons, header/footer).
  - `references/25-government-page-blueprints.md` (completeness checklists per page type).
  - `references/26-component-anatomy-polish.md` (polished anatomy per component).
  - `references/27-design-quality-gate.md` (internal 1–5 quality gate; not an official score).
- `prompts/08-high-fidelity-redesign.md` (for functional-but-basic screens) and
  `prompts/09-ui-design-critique-only.md` (read-only critique).

### Changed
- `SKILL.md`: added the mandatory "Design Excellence Workflow" (diagnose → propose 2–3 directions →
  implement one → polish pass → before/after review) and listed references `23`–`27`.
- `prompts/01`–`07`: added design-direction, high-fidelity polish, before/after, and internal
  design-quality-gate steps, plus the explicit not-official-compliance boundary.
- `templates/`: stronger hero hierarchy and footer trust section (service home), fuller card anatomy
  and selection-first note (service card), and polish/states/mobile notes across templates. Spacing
  and Tailwind utilities remain illustrative; no unofficial colors, fonts, or spacing tokens added.
- `tools/manual-review-template.md`: added section 5h (design direction, first impression, CTA, card
  anatomy, footer/header trust, desktop/mobile density, state handling, polish) and the internal
  design-quality-gate score table.

### Notes
- No verified token files (`tokens/colors-v1.0.json`, `tokens/typography-v1.0.json`) or extraction
  references (`13`–`16`) were changed. No official DGA tokens, spacing, components, or compliance
  claims were added. No product-specific names were introduced. External design-system ideas are used
  only as general inspiration for critique/workflow structure and are never presented as official DGA
  guidance. Copyright and the "aligned with Platforms Code principles" wording are preserved.

## [1.2.0] - 2026-06-16

### Added
- Supplemental design-review layer (supporting guidance that aligns with — and never overrides —
  DGA Platforms Code and the verified references/tokens):
  - `references/17-visual-hierarchy-and-composition.md` (hierarchy, emphasis, grouping, calm density).
  - `references/18-ux-interaction-patterns.md` (task clarity, feedback, error recovery, states, flows).
  - `references/19-design-critique-rubric.md` (structured critique aid; internal, not an official score).
  - `references/20-government-service-content-patterns.md` (Arabic UX-writing patterns; complements `10`).
  - `references/21-before-after-review.md` (capture before → improve incrementally → honest after).
  - `references/22-ui-anti-patterns.md` (anti-patterns to flag with aligned corrective directions).
- `prompts/07-design-polish-pass.md`: lightweight, low-risk presentation-polish prompt.

### Changed
- `SKILL.md`: added a "Supplemental design-review layer" section and reframed the mandatory workflow
  as audit-first → design-plan-before-coding → incremental implementation → before/after review.
- `prompts/01-audit-existing-ui.md` and `prompts/02-redesign-existing-ui.md`: require visual
  hierarchy, CTA hierarchy, Arabic content, anti-pattern review, an implementation plan, and a
  before/after summary, citing references `17`–`22`.
- `tools/manual-review-template.md`: added sections 5d–5g (visual hierarchy, CTA hierarchy, Arabic
  content patterns, UI anti-patterns) as supporting design-review aids.

### Notes
- No verified token files (`tokens/colors-v1.0.json`, `tokens/typography-v1.0.json`) or extraction
  references (`13`–`16`) were changed. No official DGA tokens, spacing, components, templates, or
  compliance claims were added; no other design system is presented as official DGA guidance. The
  safe wording "aligned with Platforms Code principles" is preserved.

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
