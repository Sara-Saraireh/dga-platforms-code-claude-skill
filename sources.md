# Official sources

These are the authoritative references. The summaries in
`claude/skills/dga-platforms-code/references/` are operational restatements of this guidance and are
subordinate to it. Do not copy full pages; summarize and link back. Verify exact token values
(colors, type scale, spacing, radii) against these sources rather than inventing them.

| # | Source | URL | Used for |
|---|--------|-----|----------|
| 1 | DGA Design portal (home) | https://design.dga.gov.sa/ | Entry point to the Platforms Code / National Design System guidance; navigation to foundations, components, and templates. |
| 2 | About the Platforms Code | https://design.dga.gov.sa/about-platforms-code | Purpose, scope, and intent of the Platforms Code / كود المنصات. Frames the "why" behind the principles. |
| 3 | National Design System of Saudi Arabia (DGA knowledge) | https://dga.gov.sa/ar/digital-knowledge/national-design-system-of-Saudi-Arabia | Official context and positioning of the National Design System. |
| 4 | DGA AC319 — National Design System (open-source product) | https://oss.dga.gov.sa/ar/products/dga-ac319-national-design-system | The published product entry; goals of accessibility, consistency, efficiency, and flexibility for the public sector. |
| 5 | Templates | https://design.dga.gov.sa/guidelines/templates | Page and screen templates; reference structures for service pages and flows. |
| 6 | Foundations — Color system | https://design.dga.gov.sa/guidelines/foundations/color-system | Color roles, semantic/status colors, and contrast guidance. Source of truth for exact color values. |
| 7 | Foundations — Typography | https://design.dga.gov.sa/guidelines/foundations/typography | Typeface guidance (including Arabic), hierarchy, and sizing. Source of truth for exact type scale. |
| 8 | Foundations — Iconography | https://design.dga.gov.sa/guidelines/foundations/iconography | Icon style, usage, and consistency rules. |
| 9 | Components | https://design.dga.gov.sa/guidelines/components | Component inventory, anatomy, states, and usage. |
| 10 | Components — Forms & inputs — Steps | https://design.dga.gov.sa/guidelines/components/forms-and-inputs/steps | The Steps (stepper) component for multi-step service flows, including states and labeling. |
| 11 | Foundations — Layout and spacing | https://design.dga.gov.sa/guidelines/foundations/layout-and-spacing | Confirms layout and spacing as an official foundation. Numeric spacing tokens are **not verified** in this repository; do not invent them. |
| 12 | Accessibility (my.gov.sa) | https://my.gov.sa/en/content/accessibility | Public-sector accessibility commitments and reference standards. |

## Verified provided sources

| Source | Type | Used for |
|--------|------|----------|
| **Platforms Code Guide v1.0** — كود المنصات، نظام التصميم الموحد للمملكة العربية السعودية (DGA, 17 November 2024, version 1.0, classification: public) | Official DGA introductory guide (PDF) | Definition, objectives, component counts, beneficiary groups, national identity, foundations/components/templates/libraries framing, verified Gray/Gold/SA color tokens, accessibility framing, evaluation criteria. Extracted in [`references/13-platforms-code-guide-v1.0-extraction.md`](claude/skills/dga-platforms-code/references/13-platforms-code-guide-v1.0-extraction.md). |
| **Typography page content** (provided manually) | Official page extraction | Typography classification, IBM Plex Sans Arabic usage, Saudi Font usage restrictions, verified type scale, and text accessibility guidance. Extracted in [`references/14-typography-page-extraction.md`](claude/skills/dga-platforms-code/references/14-typography-page-extraction.md). The page is extracted manually because the live page may be slow or client-side rendered. |
| **Layout and spacing page** | Official source, numeric tokens unverified | Confirms layout and spacing as an official foundation. Does **not** provide numeric spacing tokens to this repository. See [`references/15-layout-and-spacing-page-extraction.md`](claude/skills/dga-platforms-code/references/15-layout-and-spacing-page-extraction.md). |
| **Semantic color screenshot** (provided manually) | Verified extraction (Semantic 600 only) | Grounds Error/Warning/Success/Info **600** values only. Extracted in [`references/16-semantic-colors-extraction.md`](claude/skills/dga-platforms-code/references/16-semantic-colors-extraction.md). |

Verified tokens are stored as data in
[`claude/skills/dga-platforms-code/tokens/colors-v1.0.json`](claude/skills/dga-platforms-code/tokens/colors-v1.0.json)
and
[`claude/skills/dga-platforms-code/tokens/typography-v1.0.json`](claude/skills/dga-platforms-code/tokens/typography-v1.0.json).

## How to use these sources

- Read the **About** and **National Design System** entries first to understand intent before
  reading individual guidelines.
- Treat **Foundations** (color, typography, iconography) as the source of truth for exact values.
  The local foundations summary intentionally avoids specifying values.
- Use **Templates** and **Components** to confirm structure, anatomy, and states before implementing.
- Use the **Steps** component page when building any multi-step service flow.
- Use the **Accessibility** source to anchor accessibility expectations; supplement with WCAG where
  the project requires a specific conformance level.
- The **Platforms Code Guide v1.0** (PDF) is an official DGA introductory guide; version 1.0, dated
  17 November 2024. Use it for definition, objectives, counts, foundations/libraries framing, and the
  verified Gray/Gold/SA color tokens.
- The **typography page** grounds typography classification, IBM Plex Sans Arabic usage, Saudi Font
  restrictions, the type scale, and text accessibility guidance.
- The **layout and spacing page** confirms spacing as an official foundation but does not add numeric
  spacing tokens here.
- The **semantic screenshot** grounds Semantic 600 color values only.
- Official website links remain the live source for the latest guidance.
- If sources conflict, record the conflict in the source update log and require manual review before
  updating repository rules.

## Maintenance

- Periodically verify these links and detect changes using [tools/link-checklist.md](tools/link-checklist.md).
- Record any change in [tools/source-update-log.md](tools/source-update-log.md) and update the
  affected summaries per [GOVERNANCE.md](GOVERNANCE.md).
