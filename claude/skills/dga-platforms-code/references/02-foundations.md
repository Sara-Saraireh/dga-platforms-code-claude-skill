# 02 — Foundations

This file is **implementation guidance**, not a token list. The official Foundations pages
(color, typography, iconography) are the source of truth for exact values. Do not invent values here.
Where an exact value is needed, use the project's existing tokens or verify against the official
source.

> Verify exact values against:
> - Color: https://design.dga.gov.sa/guidelines/foundations/color-system
> - Typography: https://design.dga.gov.sa/guidelines/foundations/typography
> - Iconography: https://design.dga.gov.sa/guidelines/foundations/iconography

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

- Use a typeface with strong Arabic support and clear Latin coverage for mixed content. Confirm the
  recommended family against the official typography guidance and the project's licensed fonts.
- Establish a clear scale: distinct display/heading levels and a readable body size. Maintain a
  comfortable line-height for Arabic readability.
- Limit the number of sizes and weights; hierarchy comes from disciplined contrast, not variety.
- Headings follow document order (`h1` → `h2` → `h3`) and are not chosen by size alone.

## Spacing

- Use a consistent spacing scale (a base unit and multiples). Avoid arbitrary one-off values.
- Prefer logical spacing (start/end) so RTL mirrors correctly.
- Use whitespace to group related content and separate sections; density should stay calm.

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

- Map semantic colors to meaning consistently: success, warning, error, info.
- Each status pairs color with a label and/or icon.
- Use the official semantic palette; do not invent status hues. Keep the same mapping everywhere.

## Hierarchy rules

- One primary action per view; secondary and tertiary actions are visibly quieter.
- Size, weight, color, and spacing combine to create one clear reading order.
- Emphasis is scarce by design — if everything is emphasized, nothing is.
- The most important outcome on a result/confirmation screen is the most prominent element.
