# 29 — Elevation and shadows — verified extraction

## A. Source

- **Page:** https://design.dga.gov.sa/guidelines/foundations/elevation
- **Source status:** official Platforms Code foundation page (version label on page: الإصدار 1.0).
- **Extraction status:** page rendered and read on 2026-06-16; shadow token table captured.
- **Tokens stored as data:** `tokens/elevation-v1.0.json`.

This is an implementation-alignment extraction. It does **not** constitute official DGA compliance.

## B. Verified purpose

Shadows in Platforms Code represent the visual distance between elements (or element containers) and
the background, using shadow and light to create a visual hierarchy of importance, organize elements,
and aid comprehension. Shadow is shaped by **direction (x/y)**, **color**, **spread**, and **blur**.

## C. Verified shadow tokens

Platforms Code defines **7 shadow effects**. All layers use shadow color **#101828** (rgb 16, 24, 40)
at the per-layer opacity below. `sm`–`xl` are two-layer shadows; `xs`, `2xl`, `3xl` are single-layer.

Each layer maps to CSS as `<x>px <y>px <blur>px <spread>px rgba(16,24,40,<opacity>)`.

| Token | Layers (x, y, blur, spread, opacity) |
|-------|--------------------------------------|
| `Shadows-shadow-xs` | 0, 1, 2, 0, 5% |
| `Shadows-shadow-sm` | 0, 1, 3, 0, 10% · 0, 1, 2, 0, 6% |
| `Shadows-shadow-md` | 0, 4, 8, −2, 10% · 0, 2, 4, −2, 6% |
| `Shadows-shadow-lg` | 0, 12, 16, −6, 8% · 0, 4, 6, −2, 3% |
| `Shadows-shadow-xl` | 0, 20, 24, −4, 8% · 0, 8, 8, −4, 3% |
| `Shadows-shadow-2xl` | 0, 24, 48, −12, 18% |
| `Shadows-shadow-3xl` | 0, 32, 64, −12, 14% |

Backdrop-blur effects are also defined; blur values `8, 16, 24, 40` px (level names to confirm in
Figma).

## D. Verification notes

- The official table rendered the **2xl** Y value ambiguously (shown as "240"); **24** is used here as
  it sits consistently between `xl` (y=20) and `3xl` (y=32). Confirm in the official Figma library.
- Confirm the backdrop-blur level names in Figma.

## E. Operational rules

- Use elevation to communicate depth and hierarchy — sparingly. Government-grade UI is calm; prefer
  the lighter levels (`xs`–`md`) for cards and surfaces, heavier levels only for overlays/modals.
- Do not use shadow as decoration or to manufacture emphasis; emphasis comes from hierarchy, type,
  and verified color (see `01-design-principles.md`, `02-foundations.md`).
- Pair elevation with the project's surface/background tokens; do not invent shadow colors or
  opacities beyond the verified set.
- Map these tokens to the host project's shadow scale or the official Figma values before production.

## F. Prohibited

- Do not invent additional shadow levels, colors, or opacities.
- Do not copy official Figma/Storybook assets, components, or files.
- Do not present elevation usage as official DGA compliance.

See also: `15-layout-and-spacing-page-extraction.md`, `tokens/elevation-v1.0.json`,
`02-foundations.md`, `04-components.md`.
