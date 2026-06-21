# DGA Platforms Code — illustrative component templates

Generic, reusable **React + CSS** code aligned with DGA Platforms Code component anatomy and driven
entirely by this repository's **verified tokens**. These are **illustrative implementation templates**
that ship with the skill so Claude (or you) can copy and adapt them into a host project.

> **Boundary.** These are illustrative, product-agnostic templates **aligned with Platforms Code
> principles** — they are **not** a published npm package, **not** official DGA Figma/Storybook
> assets, and do **not** assert official DGA compliance. They copy no official code, assets, or fonts.
> **Do not `npm install` this** — copy/adapt the files into your project and confirm against the
> official sources before release. The import lines below are illustrative; adjust the paths to
> wherever you place the copied files.

## What's included (increment 1)

| Component | File | Aligned with (official page) |
|-----------|------|------------------------------|
| `Button` | `Button.jsx` | actions/buttons — الأزرار |
| `Badge` (tag) | `Badge.jsx` | search-and-filters/tags — العلامات |
| `Input` | `Input.jsx` | forms-and-inputs/input — المدخلات |
| `Alert` (inline notification) | `Alert.jsx` | feedback/notification — الإشعارات |
| `Card` | `Card.jsx` | content-display/card — البطاقة |
| `Stepper` | `Stepper.jsx` | forms-and-inputs/steps — الخطوات |
| `Breadcrumbs` | `Breadcrumbs.jsx` | navigational/breadcrumbs — مسار التصفح |
| `Modal` | `Modal.jsx` | feedback/modal — النوافذ المنبثقة |

The official inventory and the roadmap for the next increments are in
`references/30-component-library.md`. (The official Platforms Code Guide v1.0 PDF states **55
components**; the live website currently enumerates ~50 component pages — see `SOURCE_MATRIX.md`.)

## Charts (increment 2)

Ready-to-use, **dependency-free** chart components in `components/charts/` — plain SVG/CSS, **no
Recharts or other library required**. Aligned with the official charts page (pie/donut, line,
column/bar) and driven by the `--pc-chart-*` role-mappings (implementation guidance built from the
verified color tokens — not an official DGA "chart token" set).

| Component | Use |
|-----------|-----|
| `ChartContainer` | Title, description, required accessible summary, legend, source, and empty/loading/error state switch. |
| `KpiCard` | Single-number indicator (trend = text + icon, never color alone). |
| `LineChart` | Trend over time (RTL time axis; up to two series — second is dashed). |
| `BarChart` | Categorical comparison; `orientation="horizontal"` for many/long Arabic labels. |
| `DonutChart` | Simple part-to-whole with a required `label — value (%)` legend. |
| `ChartEmpty` / `ChartLoading` / `ChartError` | Calm, accessible chart states. |

```jsx
// After copying this components/ folder into your project, import from your local copy
// (adjust the paths to wherever you placed it):
import "./components/tokens.css";
import "./components/components.css";
import "./components/charts/charts.css";
import { ChartContainer, LineChart, KpiCard } from "./components";

<div dir="rtl" lang="ar" data-pc-root>
  <KpiCard label="إجمالي الطلبات" value="12,480"
           trend={{ direction: "up", label: "+4% عن الشهر السابق" }} />

  <ChartContainer
    title="عدد المعاملات المعالَجة شهريًا"
    description="المعاملات المعالَجة مقابل قيد المراجعة، يناير–يونيو."
    summary="ارتفع عدد المعاملات المعالَجة من 1,500 في يناير إلى 2,400 في يونيو."
    source="المصدر: بيانات تجريبية"
    legend={<><span><i className="pc-chart__swatch" style={{ background: "var(--pc-chart-series-1)" }} /> معالَجة</span></>}
  >
    <LineChart data={[
      { period: "يناير", series1: 1500, series2: 300 },
      { period: "فبراير", series1: 1720, series2: 280 },
      { period: "يونيو", series1: 2400, series2: 275 },
    ]} />
  </ChartContainer>
</div>
```

Charts use a **monochromatic green scheme** matching the official `DgaChart` example — the
`--pc-chart-series-1…4` greens plus `--pc-chart-neutral` (gray), with **no gold/lavender for data
series**. Pie/donut supports up to six categories (the four colors cycle). **No invented palette**,
never color alone (labels/legend/dashes carry meaning), RTL-correct, with a required text `summary`
for screen readers. The exact official color arrays and the role-mapping are recorded in
`references/30-component-library.md` and the `data_visualization` block of
`tokens/colors-v1.0.json`. **Recharts is not required** here; use it only if your host project
already uses it or you approve it.

## How it's built

- **Tokens, not magic values.** `tokens.css` exposes the verified tokens (colors, typography,
  spacing, elevation) as CSS custom properties (`--pc-*`). `components.css` styles every component
  using only those variables — no raw colors, spacing, or shadows are introduced.
- **RTL-first.** Styles use CSS **logical properties** (`inline-start/end`, `padding-inline`,
  `margin-block`), so everything mirrors correctly under `dir="rtl"`. Set `dir="rtl" lang="ar"` at
  your app/layout root.
- **Accessible by default.** Real semantic elements (`button`, `label`, `nav`, `dialog` role),
  visible focus rings, labelled inputs with announced errors, a focus-trapped modal that restores
  focus, and `prefers-reduced-motion` honored in `tokens.css`.
- **Framework-light.** Plain React + CSS classes — no Tailwind or CSS-in-JS required. Works in any
  React app.

## Usage

```jsx
// once, at your app root (paths point at your local copy of this components/ folder):
import "./components/tokens.css";
import "./components/components.css";

import { Button, Input, Alert, Stepper } from "./components";

export default function Example() {
  return (
    <main dir="rtl" lang="ar" data-pc-root>
      <Stepper steps={[{ label: "البيانات" }, { label: "المراجعة" }, { label: "الإرسال" }]} current={1} />

      <Input label="رقم الطلب" hint="مثال: 12345678" required />

      <Alert tone="success" title="تم الإرسال">يمكنك متابعة الحالة من صفحة طلباتي.</Alert>

      <Button variant="primary">ابدأ الخدمة</Button>
      <Button variant="secondary">حفظ كمسودة</Button>
    </main>
  );
}
```

## Customizing

### Accent theming (opt-in)

The default accent is the unified SA green. To give a service or section a different **primary
accent**, set `data-pc-theme` on a themed root — the presets switch only the accent, to another
**verified** palette:

```jsx
<main data-pc-root dir="rtl" lang="ar" data-pc-theme="gold">
  <Button variant="primary">ابدأ الخدمة</Button>   {/* gold accent, dark text */}
</main>
```

| `data-pc-theme` | Primary | Text on accent | Focus ring |
|-----------------|---------|----------------|------------|
| (none) / `green` | SA-600 | white | SA-600 |
| `gold` | Gold-600 | **gray-900** (white fails AA on gold) | Gold-700 |
| `lavender` | Lavender-500 | white | Lavender-500 |

Themes change **only** the primary accent. Semantic colors (success/error/warning/info), neutrals,
typography, spacing, and the green chart scheme stay fixed. Keep accents within the verified palettes
and preserve contrast (text-on-accent ≥ 4.5:1, focus ring ≥ 3:1). See
[`references/17-accent-theming.md`](../references/17-accent-theming.md).

### Manual overrides

You can also override the role variables directly (e.g. for a one-off mapping to a verified token):

```css
:root {
  --pc-color-primary: var(--pc-lavender-500);  /* still a verified token */
  --pc-color-primary-hover: var(--pc-lavender-600);
  --pc-color-on-primary: #FFFFFF;
}
```

Do **not** introduce colors, spacing, or shadows outside the verified tokens. Load **IBM Plex Sans
Arabic** in the host project (the skill does not redistribute font files).

## Notes / to verify in Figma

- `radius` values in `tokens.css` are illustrative (the official radius scale is not yet verified);
  map them to the project or the official Figma values before production.
- The verified spacing `rem` for the largest steps, the `2xl` shadow Y, and backdrop-blur names are
  pending Figma confirmation (see `tokens/spacing-v1.0.json`, `tokens/elevation-v1.0.json`).
