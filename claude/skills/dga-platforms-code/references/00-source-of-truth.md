# 00 — Source of truth

## The hierarchy

1. **Official DGA sources** — authoritative. Always win.
2. **This repository's `references/`** — operational summaries that translate the official guidance
   into concrete implementation rules. Convenience only.
3. **Your local interpretation** — never overrides the above.

When the official source and a local summary disagree, follow the official source and fix the
summary (see `GOVERNANCE.md`).

## Why summaries exist

The official portal is the design system. These summaries exist so Claude Code can apply the
guidance quickly and consistently during implementation, without copying official pages. They are
deliberately written as rules ("do this", "avoid that"), not as a reproduction of the source.

## Official sources and how to use each

| Source | Use it for |
|--------|-----------|
| https://design.dga.gov.sa/ | Entry point; navigate to foundations, components, templates. |
| https://design.dga.gov.sa/about-platforms-code | Intent and scope of the Platforms Code / كود المنصات. Read first. |
| https://dga.gov.sa/ar/digital-knowledge/national-design-system-of-Saudi-Arabia | Official context for the National Design System. |
| https://oss.dga.gov.sa/ar/products/dga-ac319-national-design-system | The published product; goals: accessibility, consistency, efficiency, flexibility. |
| https://design.dga.gov.sa/guidelines/templates | Page/screen templates and reference structures. |
| https://design.dga.gov.sa/guidelines/foundations/color-system | **Exact** color values, roles, semantic/status colors, contrast. |
| https://design.dga.gov.sa/guidelines/foundations/typography | **Exact** type scale, Arabic typeface guidance, hierarchy. |
| https://design.dga.gov.sa/guidelines/foundations/iconography | Icon style and usage. |
| https://design.dga.gov.sa/guidelines/components | Component inventory, anatomy, states. |
| https://design.dga.gov.sa/guidelines/components/forms-and-inputs/steps | The Steps (stepper) component for multi-step flows. |
| https://my.gov.sa/en/content/accessibility | Public-sector accessibility expectations. |

## Rules for using sources

- Read **About** and the **National Design System** context before individual guidelines.
- Treat **Foundations** as the source of truth for exact values. Do not invent them here.
- Confirm component **anatomy and states** against the Components pages before implementing.
- Use the **Steps** page for any multi-step service flow.
- Do not copy full pages into the repository. Summarize and link back.
- Record any observed change to a source in `tools/source-update-log.md`.

## Compliance boundary

These summaries help align with DGA principles. They do not constitute official compliance. Official
compliance requires formal review by the responsible entity.
