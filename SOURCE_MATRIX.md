# Source matrix

Classification of every important token / reference / rule against **official DGA sources only**
(the official website pages and the official Platforms Code Guide v1.0 PDF). No third-party design
system is used as a source of truth.

## Status legend

- **verified — official PDF**: taken from the Platforms Code Guide v1.0 (DGA, 17 Nov 2024, public).
- **verified — official web page**: rendered and read from an official `design.dga.gov.sa` page on
  the date shown.
- **needs manual verification**: value is in use but a specific detail is unconfirmed (typically to be
  confirmed in the official Figma library).
- **unsupported**: not backed by an official source; must not be presented as official.

The site is client-side rendered and WAF-protected; values below come from dated extractions
recorded here and in `tools/source-update-log.md`. They were not silently changed during this
cleanup.

## Foundations — tokens

| Token group | Value summary | Status | Source | Date | File |
|-------------|---------------|--------|--------|------|------|
| Gray scale (25–950) | `#FCFCFD … #0D121C` | verified — official web page | color-system | 2026-06-21 | `tokens/colors-v1.0.json` |
| SA / primary green (25–950) | `#1B8354` @600 | verified — official web page | color-system | 2026-06-21 | `tokens/colors-v1.0.json` |
| Gold (secondary, 25–950) | `#DBA102` @600 ("Primary 600") | verified — official web page | color-system | 2026-06-21 | `tokens/colors-v1.0.json` |
| Lavender / الخزامى (secondary, 25–950) | `#80519F` @500 ("Primary 500") | verified — official web page | color-system | 2026-06-21 | `tokens/colors-v1.0.json` |
| Semantic Error (25–950) | `#D92D20` @600 | verified — official web page | color-system | 2026-06-21 | `tokens/colors-v1.0.json` |
| Semantic Warning (25–950) | `#DC6803` @600 | verified — official web page | color-system | 2026-06-21 | `tokens/colors-v1.0.json` |
| Semantic Info (25–950) | `#1570EF` @600 | verified — official web page | color-system | 2026-06-21 | `tokens/colors-v1.0.json` |
| Semantic Success (25–950) | `#079455` @600 | verified — official web page | color-system | 2026-06-21 | `tokens/colors-v1.0.json` |
| Typography family + weights | IBM Plex Sans Arabic; 400/500/600/700 | verified — official web page (manual) | typography | per ref 14 | `tokens/typography-v1.0.json` |
| Type scale (Display 2xl–xs, Text xl–2xs) | 72→10 px + line heights | verified — official web page (manual) | typography | per ref 14 | `tokens/typography-v1.0.json` |
| Spacing scale (`spacing-none…11xl`) | 0…160 px (px authoritative) | verified — official web page | layout-and-spacing | 2026-06-16 | `tokens/spacing-v1.0.json` |
| Widths / container / breakpoints | 320…1920; 1280 max; 600/960/1280 | verified — official web page | layout-and-spacing | 2026-06-16 | `tokens/spacing-v1.0.json` |
| Elevation (7 shadows, color `#101828`) | xs…3xl | verified — official web page | elevation | 2026-06-16 | `tokens/elevation-v1.0.json` |
| Radius scale | illustrative defaults | **unsupported** (not yet verified) | — | — | marked illustrative in `tokens.css` |

## Charts (data visualization)

| Item | Value | Status | Source | Date |
|------|-------|--------|--------|------|
| Donut colors | `#1B8354, #079455, #B8EACB, #54C08A` | verified — official web page (DgaChart example) | components/data-display/charts | 2026-06-21 |
| Line colors | `#1B8354, #079455` | verified — official web page (DgaChart example) | components/data-display/charts | 2026-06-21 |
| Bar colors | `#1B8354, #54C08A, #E5E7EB` | verified — official web page (DgaChart example) | components/data-display/charts | 2026-06-21 |
| `--pc-chart-series-1…4` / `--pc-chart-neutral` | role-mapping of the above verified colors | **implementation guidance** (not an official chart-token set) | derived | 2026-06-21 |

The `--pc-chart-*` variables are **implementation role-mappings** built from the verified color
tokens and the official `DgaChart` example; they are not published as official DGA "chart tokens".

## Counts (Platforms Code Guide v1.0)

| Item | Count | Status | Note |
|------|-------|--------|------|
| Foundations | 6 | verified — official PDF | — |
| Components | **55** | verified — official PDF | The PDF states 55. |
| Components (website public pages) | **~50** | verified — official web page | The live `guidelines/components` pages currently enumerate ~50. |
| Templates | 17 | verified — official PDF | Full readable list not in the extracted PDF. |
| Mobile application elements | 34 | verified — official PDF | — |

**Conflict (logged):** PDF says **55 components**; the website currently lists **~50** component
pages. Do not silently pick one — treat the difference as a **source-status note requiring periodic
review** (`tools/link-checklist.md`, `tools/source-update-log.md`).

## Open items — needs manual verification (confirm in official Figma library)

| Item | Issue | Source |
|------|-------|--------|
| Info 50 = `#ECFDF3` | Identical to Success 50 — appears to be a source typo for a blue palette | color-system, 2026-06-21 |
| `rem` for spacing steps > 6xl | Printed rem ≠ px ÷ 16 (apparent source typos); **px is authoritative** | layout-and-spacing, 2026-06-16 |
| `2xl` shadow Y | Rendered ambiguously ("240"); `24` used as consistent between xl and 3xl | elevation, 2026-06-16 |
| Backdrop-blur level names | Names rendered ambiguously; blur px values are clear (8/16/24/40) | elevation, 2026-06-16 |
| Radius scale | No verified official radius scale yet — values are illustrative | — |
| Templates (17) | Full official template names not yet enumerated from a live source | templates page |
