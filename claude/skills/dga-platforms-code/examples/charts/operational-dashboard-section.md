# Example — Operational dashboard section (generic, RTL)

How the chart pieces compose into one calm, government-style dashboard section. Generic public-sector
**mock** data only; no product name. Aligned with Platforms Code principles; not official DGA
compliance.

## Composition (RTL, top → bottom)
1. **KPI card row** — headline figures (`dashboard-kpi-cards.md`).
2. **Line chart** — the main trend (`verification-trend-line-chart.md`).
3. **Bar chart + Donut** — comparison and composition side by side
   (`category-bar-chart.md`, `review-status-donut-chart.md`).
4. **Table** — exact, row-level review (the operational source of truth).

```
الصف: بطاقات المؤشرات (٤)
الصف: الاتجاه الشهري (رسم خطي)            ← العرض الكامل
الصف: [ الطلبات حسب النوع (أعمدة) ] [ توزيع الحالات (دائري) ]
الصف: جدول الطلبات (مراجعة دقيقة على مستوى الصف)
```

## Layout notes
- Use a responsive grid: full-width line chart, then a two-column row (`grid sm:grid-cols-2 gap-4`)
  for bar + donut, then the table.
- Each chart sits in a `ChartContainer` with title, description, summary, and its own
  empty/loading/error state — one failing chart must not blank the page.

## Why a table is included
- Charts answer "what's the shape?"; the **table** answers "what exactly, and act on which row?".
  Operational decisions need the table; the charts orient the user first.

## States
- Load KPIs and each chart independently; show per-widget loading/empty/error so the dashboard
  degrades gracefully.

## Accessibility notes
- Every widget: clear title, text summary, labels/legends (not colour alone), sufficient contrast.
- Provide table fallbacks for charts where feasible; the operational table is fully semantic
  (`<th scope>`), keyboard-navigable, with status as text + icon.

## RTL notes
- Whole section is `dir="rtl"`; charts mirror (reversed category/time axes, right-side numeric axis);
  numbers, dates, and IDs stay LTR and isolated.

## Tone
- Calm, editorial, decision-supporting. No 3D, neon, gradients, or attention-seeking animation;
  any motion is subtle and respects `prefers-reduced-motion`.
