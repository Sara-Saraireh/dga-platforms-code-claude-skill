# Example — Dashboard KPI cards (generic, RTL)

A row of single-number indicators at the top of a government dashboard. Generic public-sector **mock**
data only. Aligned with Platforms Code principles; not official DGA compliance.

## When to use
- The user needs a few headline figures at a glance before drilling into detail.

## When NOT to use
- For comparison across many categories (use a bar chart) or trends over time (use a line chart).
- For exact, row-level operational decisions (use a table).

## Layout (RTL)
Four equal cards in a responsive grid; cards stack to one column on mobile.

```
[ إجمالي الطلبات ]  [ قيد المراجعة ]  [ مكتملة ]  [ مرفوضة ]
     12,480              1,240           10,910        330
   +4% عن الشهر…       −2% …            +5% …         flat
```

## Mock data
```ts
const kpis = [
  { label: "إجمالي الطلبات", value: "12,480", trend: { direction: "up", label: "+4% عن الشهر السابق" }, context: "حتى نهاية يونيو" },
  { label: "قيد المراجعة",  value: "1,240",  trend: { direction: "down", label: "−2% عن الشهر السابق" } },
  { label: "مكتملة",       value: "10,910", trend: { direction: "up", label: "+5% عن الشهر السابق" } },
  { label: "مرفوضة",       value: "330",    trend: { direction: "flat", label: "بدون تغيير" } },
];
```

Use the `KpiCard` template (`templates/charts/kpi-card.react-tailwind.md`) in a grid:
`grid grid-cols-2 gap-4 sm:grid-cols-4`.

## States
- **Loading:** each card shows the skeleton value (`state="loading"`).
- **Empty:** show `—` for a metric with no data; don't fabricate a zero.
- **Error:** per-card "تعذّر تحميل القيمة." without failing the whole row.

## Accessibility notes
- Trend is text + icon (▲/▼/■), never colour alone.
- Numbers are LTR and isolated (`<bdi>`); labels are plain, formal Arabic.
- Cards are real content, not buttons, unless they navigate — then use a real link/button.

## RTL notes
- Grid flows right-to-left automatically under `dir="rtl"`; keep values LTR.
