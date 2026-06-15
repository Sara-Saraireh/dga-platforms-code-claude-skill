# 02 — Foundations

This file is **implementation guidance**. Some verified tokens now exist (see `tokens/`); where an
exact value is not verified, use the project's existing tokens or verify against the official source.
Do not invent values.

> Verify exact values against:
> - Color: https://design.dga.gov.sa/guidelines/foundations/color-system
> - Typography: https://design.dga.gov.sa/guidelines/foundations/typography
> - Iconography: https://design.dga.gov.sa/guidelines/foundations/iconography
> - Layout and spacing: https://design.dga.gov.sa/guidelines/foundations/layout-and-spacing

## Verified foundations (Platforms Code Guide v1.0)

Foundations include **colors, typography, icons, spacing, accessibility guidance, and user
experience**. Verified tokens:

- Color tokens: [`tokens/colors-v1.0.json`](../tokens/colors-v1.0.json).
- Typography tokens: [`tokens/typography-v1.0.json`](../tokens/typography-v1.0.json).

National identity references **green, black, gold, and violet**. Verified token palettes from the
PDF are **Gray, Gold, and SA**; verified **Semantic 600** values are **Error, Warning, Success, and
Info**. Exact **violet** and **black** token values are **not** verified — do not invent them.

Color usage anchors:

- Use **SA 600 `#1B8354`** as the core verified green token when a government-green primary token is
  needed, unless the host project has an approved token system.
- Use **Gold / Primary 600 `#DBA102`** only where a gold accent is appropriate.
- Use **Gray** tokens for surfaces, text, borders, and neutral UI structure.
- Use **semantic** tokens only for states.
- Do not overuse green. Do not invent violet or black token values. Do not invent missing semantic
  shades.

## Visual tone

Calm, official, high-clarity. Neutral surfaces, restrained accent use, strong typographic hierarchy,
generous spacing. The interface should feel institutional and trustworthy, never promotional.

## Color usage

- Define colors as **roles**, not raw values: surface, on-surface (text), primary/brand, secondary,
  border, and semantic statuses (success, warning, error, info).
- Keep a neutral base. Use the brand/primary color deliberately for primary actions and key
  emphasis, not as a background flood.
- **Status colors carry meaning.** Use success/green for genuine positive outcomes only. Do not use
  green as a general accent — overusing green weakens hierarchy and dilutes the real "success"
  signal.
- Always pair color with text and/or icon for status; never rely on color alone (see accessibility).
- Ensure text and interactive elements meet contrast requirements in every state.
- Source the actual palette and semantic values from the official color system; centralize them as
  tokens in the project.

## Typography

Verified from the typography page (see `14-typography-page-extraction.md`,
`tokens/typography-v1.0.json`):

- Use **IBM Plex Sans Arabic** as the general-purpose platform font, unless the host project has
  approved typography tokens. Verified weights: Regular 400, Medium 500, Semibold 600, Bold 700.
- Use the **Display** scale for headings and large visual emphasis. Use the **Text** scale for body,
  labels, helper text, forms, tables, navigation, and UI content. Do not use Display for long content.
- **Saudi Font** is for national and seasonal occasions only, and **main headings only**. It must not
  be used for body text, forms, tables, labels, or long-form content, and is subject to licensing and
  approval.
- Do not include or redistribute font files.
- Headings follow document order (`h1` → `h2` → `h3`) and are not chosen by size alone; maintain
  comfortable line-height for Arabic readability.

## Spacing

- Layout and spacing exists as an official Platforms Code foundation (see
  `15-layout-and-spacing-page-extraction.md`).
- **Exact numeric spacing tokens are not verified in this repository.** Use official
  Figma/Storybook/live-source values when available.
- Until exact values are verified, use the host project's approved spacing tokens and keep spacing
  consistent. Prefer logical spacing (start/end) so RTL mirrors correctly.
- Avoid arbitrary one-off values. **Do not invent official spacing values.**

## Borders

- Thin, low-contrast borders to delineate inputs, cards, and table rows.
- Use borders to communicate structure and focus, not decoration.
- Keep border treatment consistent across similar components.

## Radius

- Use a small, consistent set of corner radii (for example: inputs/buttons share one, cards another).
- Avoid mixing many radii. Verify any specific radius values against the project's tokens or the
  official guidance.

## Shadows

- Use elevation sparingly and consistently to indicate layering (cards, popovers, modals).
- Prefer soft, subtle shadows over heavy ones; government-grade surfaces stay calm.
- Do not use shadow as decoration where a border would communicate structure better.

## Icons

- Follow the official iconography style; keep stroke weight, size, and corner treatment consistent.
- Icons support text; they rarely replace it for critical meaning.
- Mirror directional icons for RTL; never mirror logos or LTR glyphs (see RTL).
- Size icons to align with text and keep adequate touch targets for interactive icons.

## Surfaces

- Establish a clear surface hierarchy: page background, raised cards, overlays/modals.
- Keep content on neutral surfaces; reserve stronger color for actions and status.
- Maintain consistent padding within a given surface type.

## Status colors

Verified Semantic 600 values (see `16-semantic-colors-extraction.md`):

- Error 600 `#D92D20`, Warning 600 `#DC6803`, Success 600 `#1B8354`, Info 600 `#1570EF`.
- Success 600 matches SA 600 `#1B8354`.
- Each status pairs color with a label and/or icon; never rely on color alone.
- Use semantic tokens only for states. Keep the same mapping everywhere. **Do not invent missing
  semantic shades** beyond the verified 600 values.

## Hierarchy rules

- One primary action per view; secondary and tertiary actions are visibly quieter.
- Size, weight, color, and spacing combine to create one clear reading order.
- Emphasis is scarce by design — if everything is emphasized, nothing is.
- The most important outcome on a result/confirmation screen is the most prominent element.
