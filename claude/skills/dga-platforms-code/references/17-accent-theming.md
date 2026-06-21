# 17 — Accent theming (per service / section)

Platforms Code is a **unified** national design system: the primary color is the Saudi green and
consistency is its core value. Prefer the default green. When a service or audience genuinely needs to
be distinguished, switch **only the primary accent** to another **verified** palette — never invent a
per-service brand hue.

## How

`components/tokens.css` ships opt-in presets keyed off a `data-pc-theme` attribute on a themed root
(typically the same element that carries `data-pc-root`):

```html
<main data-pc-root dir="rtl" lang="ar" data-pc-theme="gold">
  …components here use the gold accent…
</main>
```

| `data-pc-theme` | Primary | Hover | Text on accent | Tint | Focus ring |
|-----------------|---------|-------|----------------|------|------------|
| (none) / `green` | SA-600 `#1B8354` | SA-700 `#166A45` | white | SA-50 | SA-600 |
| `gold` | Gold-600 `#DBA102` | Gold-700 `#B87B02` | **gray-900 `#111927`** | Gold-50 | **Gold-700** |
| `lavender` | Lavender-500 `#80519F` | Lavender-600 `#6D428F` | white | Lavender-50 | Lavender-500 |

The presets only reassign the accent roles (`--pc-color-primary`, `--pc-color-primary-hover`,
`--pc-color-on-primary`, `--pc-color-primary-tint`, `--pc-focus-ring`), which the components already
consume (primary/tertiary buttons, stepper current/complete, interactive-card hover, focus rings).

## Guardrails (the compliance boundary)

- **Verified palettes only** — SA, Gold, Lavender. No invented hues (e.g. a custom blue) and no
  per-service one-off colors.
- **Accent only.** Semantic colors (success/error/warning/info), neutrals, typography, spacing, and
  the green chart scheme (`--pc-chart-*`) **stay fixed** across themes — state and data meaning must
  not shift with branding.
- **Contrast preserved.** Text-on-accent ≥ 4.5:1 and focus ring ≥ 3:1. White text fails on Gold-600
  (≈2.3:1), so the gold preset uses dark text (≈7.6:1) and a darker gold focus ring (Gold-700 ≈3.6:1).
- **Hierarchy holds.** One primary action per view; the accent supports the task, it is not decoration.
- Prefer the **default green** unless there is a clear reason to differentiate; the system's value is
  consistency.

## Verifying a new accent

If a project maps the accent to a different verified token, re-check contrast before use
(WebAIM contrast checker, or any WCAG tool): the accent must pass 4.5:1 with its on-accent text and
3:1 for the focus ring against the surface. If white text fails, switch the on-accent text to a dark
neutral (gray-900) as the gold preset does.
