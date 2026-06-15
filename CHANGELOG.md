# Changelog

All notable changes to this repository are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) principles, and the project uses Semantic
Versioning (see [GOVERNANCE.md](GOVERNANCE.md)).

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
