# Example — Requests by category (bar chart, generic, RTL)

A bar chart comparing request counts across a few service categories. Generic public-sector **mock**
data only. Aligned with Platforms Code principles; not official DGA compliance.

## When to use
- Compare a measure across a small number of categories.

## When NOT to use
- Trends over time (use a line chart). Part-to-whole (use a donut). Exact rows (use a table).
- **Many categories or long Arabic labels** → use the horizontal bar example instead.

## Title & copy (RTL)
- **Title:** «الطلبات حسب نوع الخدمة»
- **Description:** «إجمالي الطلبات المستلمة لكل نوع خدمة خلال الربع.»
- **Summary (accessible):** «النوع «أ» هو الأعلى بـ 4,200 طلبًا، يليه «ب» بـ 3,100، ثم «ج» بـ 1,800،
  وأخيرًا «د» بـ 900.»
- **Source line:** «المصدر: بيانات تجريبية — الربع الثاني.»

## Mock data
```ts
const data = [
  { category: "خدمة أ", value: 4200 },
  { category: "خدمة ب", value: 3100 },
  { category: "خدمة ج", value: 1800 },
  { category: "خدمة د", value: 900 },
];
// valueName="عدد الطلبات"
```

Use `BarChartView` (or `BarChartFallback`) inside `ChartContainer`.

## States
- **Loading:** loading skeleton. **Empty:** empty state (no fabricated zero bars). **Error:** error + retry.

## Accessibility notes
- Single series; category labels carry meaning (not colour). Direct value in tooltip and in the
  fallback table.
- Numbers LTR-isolated; bars use the verified `--chart-series-1` role only.

## RTL notes
- Category axis is `reversed` (reads right-to-left); numeric axis on the right; don't truncate Arabic
  labels — switch to horizontal bar if they get long.
