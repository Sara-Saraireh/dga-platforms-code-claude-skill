# Example — Verification trend (line chart, generic, RTL)

A line chart showing a processed-vs-pending trend over months in a generic government review flow.
Generic public-sector **mock** data only. Aligned with Platforms Code principles; not official DGA
compliance.

## When to use
- To show how a measure changes over time (a trend), e.g. monthly processed requests.

## When NOT to use
- For categorical comparison with no time axis (use a bar chart).
- For exact monthly figures users must act on row-by-row (use a table — or pair the chart with one).

## Title & copy (RTL)
- **Title:** «عدد المعاملات المعالَجة شهريًا»
- **Description:** «المعاملات المعالَجة مقابل قيد المراجعة، يناير–يونيو.»
- **Summary (accessible):** «ارتفع عدد المعاملات المعالَجة من 1,500 في يناير إلى 2,400 في يونيو، بينما
  بقيت المعاملات قيد المراجعة شبه مستقرة.»
- **Source line:** «المصدر: بيانات تجريبية — يناير إلى يونيو.»

## Mock data
```ts
const data = [
  { period: "يناير", series1: 1500, series2: 300 },
  { period: "فبراير", series1: 1720, series2: 280 },
  { period: "مارس",  series1: 1810, series2: 310 },
  { period: "أبريل", series1: 2050, series2: 260 },
  { period: "مايو",  series1: 2230, series2: 290 },
  { period: "يونيو", series1: 2400, series2: 275 },
];
// series1Name="معالَجة", series2Name="قيد المراجعة"
```

Use `LineChartView` (or `LineChartFallback`) inside `ChartContainer`.

## States
- **Loading:** chart loading skeleton.
- **Empty:** "لا توجد بيانات لعرضها" with a hint about when data appears.
- **Error:** "تعذّر تحميل الرسم البياني" with retry.

## Accessibility notes
- Two series differ by **label + line style** (solid vs dashed), not colour alone; legend shown.
- Provide the text summary above; offer the `LineChartFallback` table where feasible.
- Periods are LTR-isolated; ticks readable; sufficient contrast for lines/axes.

## RTL notes
- Time axis is `reversed` so it reads right-to-left; numeric axis on the right; numbers stay LTR.
