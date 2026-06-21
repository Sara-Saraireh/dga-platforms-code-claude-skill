# Example — Review status (donut chart, generic, RTL)

A donut chart showing the composition of review outcomes. Generic public-sector **mock** data only.
Aligned with Platforms Code principles; not official DGA compliance.

## When to use
- Simple **part-to-whole** with a few segments (here: three outcomes).

## When NOT to use
- Precise comparison or many segments (use a bar chart). Trend over time (use a line chart).
- When users need exact counts to act on (pair with, or use, a table).

## Title & copy (RTL)
- **Title:** «توزيع حالات المراجعة»
- **Description:** «نسبة الطلبات المكتملة وقيد المراجعة والمرفوضة.»
- **Summary (accessible):** «من أصل 12,480 طلبًا: 10,910 مكتملة (87%)، 1,240 قيد المراجعة (10%)،
  330 مرفوضة (3%).»
- **Center:** total «12,480» with label «إجمالي الطلبات».

## Mock data
```ts
const data = [
  { label: "مكتملة", value: 10910 },
  { label: "قيد المراجعة", value: 1240 },
  { label: "مرفوضة", value: 330 },
];
```

Use `DonutChartView` + `DonutLegend` inside `ChartContainer`. Keep to ≤4 segments.

## States
- **Loading:** loading skeleton. **Empty:** empty state. **Error:** error + retry.

## Accessibility notes
- **Legend is required** and shows `label — value (%)`; segments are not distinguished by colour
  alone. Center shows the total.
- For more than two non-primary segments, use neutral grays from the verified roles rather than
  inventing colours.

## RTL notes
- Legend and labels align right-to-left; values/percentages stay LTR and isolated (`<bdi>`).
