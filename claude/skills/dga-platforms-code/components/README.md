# DGA Platforms Code — component library

Generic, reusable **React + CSS** components aligned with DGA Platforms Code component anatomy and
driven entirely by this repository's **verified tokens**. They ship with the skill so they are
available on every install.

> **Boundary.** These are illustrative, product-agnostic components **aligned with Platforms Code
> principles** — they are **not** official DGA Figma/Storybook assets and do **not** assert official
> DGA compliance. They copy no official code, assets, or fonts. Confirm against the official sources
> and complete the manual review before release.

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

The full official inventory (50 components) and the roadmap for the next increments are in
`references/30-component-library.md`.

## Charts (increment 2)

Ready-to-use, **dependency-free** chart components in `components/charts/` — plain SVG/CSS, **no
Recharts or other library required**. Aligned with the official charts page (pie/donut, line,
column/bar) and driven by the verified chart-role tokens.

| Component | Use |
|-----------|-----|
| `ChartContainer` | Title, description, required accessible summary, legend, source, and empty/loading/error state switch. |
| `KpiCard` | Single-number indicator (trend = text + icon, never color alone). |
| `LineChart` | Trend over time (RTL time axis; up to two series — second is dashed). |
| `BarChart` | Categorical comparison; `orientation="horizontal"` for many/long Arabic labels. |
| `DonutChart` | Simple part-to-whole with a required `label — value (%)` legend. |
| `ChartEmpty` / `ChartLoading` / `ChartError` | Calm, accessible chart states. |

```jsx
import "dga-platforms-code/components/tokens.css";
import "dga-platforms-code/components/components.css";
import "dga-platforms-code/components/charts/charts.css";
import { ChartContainer, LineChart, KpiCard } from "dga-platforms-code/components";

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

Charts use only the verified `--pc-chart-*` roles (SA-600, Gold-600, grays, semantic 600) — **no
invented palette**, never color alone (labels/legend/dashes carry meaning), RTL-correct, with a
required text `summary` for screen readers. For a Recharts-based variant and detailed guidance, see
the chart **templates** (`templates/charts/`), **examples** (`examples/charts/`), reference
`29-data-visualization-and-charts.md`, and `tokens/chart-tokens-v1.0.json`.

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
// once, at your app root:
import "dga-platforms-code/components/tokens.css";
import "dga-platforms-code/components/components.css";

import { Button, Input, Alert, Stepper } from "dga-platforms-code/components";

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

Override the role variables in your own CSS to map the library to a project palette — for example to
set a different primary color from the verified palette:

```css
:root {
  --pc-color-primary: var(--pc-gold-600);     /* still a verified token */
  --pc-color-primary-hover: var(--pc-gold-700);
}
```

Do **not** introduce colors, spacing, or shadows outside the verified tokens. Load **IBM Plex Sans
Arabic** in the host project (the skill does not redistribute font files).

## Notes / to verify in Figma

- `radius` values in `tokens.css` are illustrative (the official radius scale is not yet verified);
  map them to the project or the official Figma values before production.
- The verified spacing `rem` for the largest steps, the `2xl` shadow Y, and backdrop-blur names are
  pending Figma confirmation (see `tokens/spacing-v1.0.json`, `tokens/elevation-v1.0.json`).
