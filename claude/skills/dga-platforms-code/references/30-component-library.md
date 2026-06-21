# 30 — Component library

## A. What this is

A set of **illustrative React + CSS templates** in [`components/`](../components/), aligned with DGA
Platforms Code component anatomy and driven entirely by the repository's verified tokens (`tokens/`).
They are bundled with the skill so Claude (or you) can copy and adapt them into a host project.
Usage, props, and customization are documented in [`components/README.md`](../components/README.md).

This is implementation guidance. The templates are **aligned with Platforms Code principles** — they
are **not** a published npm package, **not** official DGA Figma/Storybook assets, and do **not**
assert official DGA compliance. No official code, assets, or fonts are copied.

## B. Official component inventory

**Count — source-status note.** The official Platforms Code Guide v1.0 PDF states **55 components**
(plus 6 foundations, 17 templates, 34 mobile elements). The live website `guidelines/components`
pages currently enumerate **~50** component pages (listed below). Do not treat either number as final
— this difference is a **source-status note requiring periodic review** (see `SOURCE_MATRIX.md` and
`tools/source-update-log.md`).

The official component pages live under `https://design.dga.gov.sa/guidelines/components/…`. They are
**Figma-delivered** (there is no official public code package — see `sources.md`). Each official page
documents the same anatomy: **Types (الأنواع) · Styles (الأنماط) · States/Behaviors (السلوكيات/
الحالات) · Anatomy (التركيب) · Accessibility (إمكانية الوصول)**. The templates here mirror that
structure but are illustrative, not official.

| Category | Components (official slug) |
|----------|----------------------------|
| Actions | `buttons`, `chip`, `dropdown`, `floating-Button`, `link` |
| Content display | `accordion`, `card`, `carousel`, `code-snippet`, `digital-stamp`, `divider`, `list`, `quote` |
| Data display | `avatar`, `charts`, `content-switcher`, `metric`, `structured-list`, `table` |
| Feedback | `modal`, `notification`, `rating`, `tooltip` |
| Forms & inputs | `checkbox`, `datepicker`, `file-uploader`, `input`, `number-input`, `radio`, `slider`, `steps`, `switch`, `textarea` |
| Loading & status | `loading`, `progress-bar`, `radial-stepper`, `skeleton` |
| Navigational | `breadcrumbs`, `menu`, `pagination`, `slide-out`, `tabs` |
| Search & filters | `filtration`, `search-box`, `tags` |
| UI shell | `footer`, `navigation-drawer`, `navigation-header`, `second-nav-header`, `table-of-content` |

## C. Coverage and roadmap

**Increment 1 (implemented):** `Button` (buttons), `Badge` (tags), `Input` (input), `Alert`
(notification), `Card` (card), `Stepper` (steps), `Breadcrumbs` (breadcrumbs), `Modal` (modal).

**Next increments (priority order):**

1. Forms: `Checkbox`, `Radio`, `Switch`, `Textarea`, `FileUploader`, `Datepicker`.
2. Data: `Table`, `Metric` card, `StructuredList`, `Avatar`.
3. Navigation/shell: `Tabs`, `Pagination`, `Footer`, `NavigationHeader`, `TableOfContent`.
4. Status: `Loading`, `ProgressBar`, `Skeleton`, `Tooltip`.
5. Content: `Accordion`, `Divider`, `Link`, `Dropdown`, `Quote`.

Each new component follows the same rules below.

## D. Build rules (apply to every component)

- **Tokens only.** Style exclusively via the `--pc-*` variables in `components/tokens.css` (verified
  colors, typography, spacing, elevation). Do not introduce raw colors, spacing, or shadows.
- **Anatomy first.** Read the official component page and reproduce its Types / States / Anatomy /
  Accessibility semantics generically — never copy its code, visuals, or assets.
- **RTL-first.** Use CSS logical properties; verify under `dir="rtl"`.
- **Accessible by default.** Semantic elements, visible focus, labelled controls, announced errors,
  status not by color alone, keyboard operability, reduced-motion respected.
- **States.** Provide default / hover / focus / disabled and, where relevant, empty / loading / error
  / selected.
- **No new dependencies.** Plain React + CSS; no animation or UI libraries unless the host project
  already uses them or the user approves.

## E. Prohibited

- Do not copy official Figma/Storybook component code, styles, or assets.
- Do not invent tokens (colors, spacing, type, radii, shadows) outside the verified set; `radius` is
  illustrative until verified.
- Do not present the library as official DGA compliance. Use "aligned with Platforms Code principles".

See also: `04-components.md`, `15-layout-and-spacing-page-extraction.md`,
`29-elevation-and-shadows-extraction.md`, `components/README.md`.
