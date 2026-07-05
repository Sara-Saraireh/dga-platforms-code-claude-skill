# 15 — Layout and spacing page — verified extraction

## A. Source

- **Page:** https://design.dga.gov.sa/guidelines/foundations/layout-and-spacing
- **Source status:** official Platforms Code foundation page (version label on page: الإصدار 1.0).
- **Extraction status:** page rendered and read on 2026-06-16; the spacing, width, container,
  paragraph, and breakpoint tables were captured.
- **Tokens stored as data:** `tokens/spacing-v1.0.json`.

## B. Verified purpose

The layout and spacing system in Platforms Code establishes a clear framework for government
applications and platforms. It organizes components spatially and helps focus attention on the most
important elements.

## C. Verified spacing scale (px authoritative, base 16px)

| Token | px | Token | px |
|-------|----|-------|----|
| `spacing-none` | 0 | `spacing-4xl` | 32 |
| `spacing-xxs` | 2 | `spacing-5xl` | 40 |
| `spacing-xs` | 4 | `spacing-6xl` | 48 |
| `spacing-sm` | 6 | `spacing-7xl` | 64 |
| `spacing-md` | 8 | `spacing-8xl` | 80 |
| `spacing-lg` | 12 | `spacing-9xl` | 96 |
| `spacing-xl` | 16 | `spacing-10xl` | 128 |
| `spacing-2xl` | 20 | `spacing-11xl` | 160 |
| `spacing-3xl` | 24 | | |

Other verified values: **widths** `width-xxs`…`width-6xl` (320 → 1920px); **container padding**
mobile 16 / desktop 32; **container-max-width-desktop** 1280; **paragraph-max-width** 720;
**breakpoints** mobile 0–599 (600), tablet 600–959 (960), desktop 960–1279 (1280), xl 1280+. Full
data in `tokens/spacing-v1.0.json`.

> **rem caveat:** the official page also prints a rem column. For `spacing-7xl`–`9xl`, `spacing-11xl`,
> and a few width/paragraph rows, the printed rem ≠ px ÷ 16 (apparent source typos). **px is
> authoritative**; confirm exact rem in the official Figma library before encoding rem.

## D. Operational rules

- Treat layout and spacing as a core foundation, not a cosmetic detail.
- Use spacing to create clear hierarchy between page sections, cards, forms, navigation, and actions.
- Keep spacing consistent across repeated components.
- Avoid arbitrary one-off margins and padding.
- Prefer these verified Platforms Code spacing tokens, or the host project's approved spacing scale
  mapped to them; do not introduce values outside the verified scale.
- For React/Tailwind, map the project's spacing scale to these tokens (e.g. via the Tailwind theme)
  rather than scattering raw px values.

## E. Implementation guidance

When auditing or implementing a UI, check:

- Section spacing.
- Card padding.
- Form field spacing.
- Button group spacing.
- Navigation spacing.
- Vertical rhythm between headings, descriptions, and actions.
- Mobile spacing (avoid cramped layouts).
- Horizontal overflow (avoid it).
- Excessive density in Arabic RTL interfaces (avoid it).

## F. Still to verify in Figma

The numeric scale above is verified from the official page. Confirm the following against the official
Figma library before relying on them:

- Exact **rem** values for `spacing-7xl`–`9xl` and `spacing-11xl` (page rem column appears mislabeled;
  px is authoritative here).
- Per-breakpoint **grid** details (column counts, margins, gutters), which the page describes but does
  not fully tabulate here.

## G. Prohibited

- Do not invent spacing tokens beyond the verified scale.
- Do not copy unofficial spacing scales from third-party implementations.
- Do not assume Tailwind default spacing equals official Platforms Code spacing — map to the verified
  tokens.
- Do not hardcode spacing values repeatedly across components; reference the tokens.

> Verified spacing values are stored in `tokens/spacing-v1.0.json` (px authoritative). Do not add
> values outside the verified scale, and do not present their use as official DGA compliance.
