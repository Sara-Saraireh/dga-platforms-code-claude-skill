# Template — KPI card (React + Tailwind, RTL)

A single-number indicator: **label → value → short context/trend**. Use for one important figure;
prefer a chart when the *shape* of data is the message, or a table for row-level review. Illustrative,
**aligned with Platforms Code principles** — not an official DGA component.

**Notes**
- Trend is conveyed by **text + icon**, not color alone.
- Keep the value prominent and numerals LTR (`<bdi>`); pure presentational component.

```tsx
// KpiCard.tsx
export interface KpiCardProps {
  label: string;                 // e.g. "إجمالي الطلبات"
  value: string;                 // pre-formatted, e.g. "12,480"
  trend?: { direction: "up" | "down" | "flat"; label: string }; // e.g. "+4% عن الشهر السابق"
  context?: string;              // e.g. "حتى نهاية يونيو"
  state?: "loaded" | "loading" | "empty" | "error";
}

const TREND = {
  up:   { icon: "▲", className: "text-[--chart-success]" },
  down: { icon: "▼", className: "text-[--chart-error]" },
  flat: { icon: "■", className: "text-neutral-500" },
};

export function KpiCard({ label, value, trend, context, state = "loaded" }: KpiCardProps) {
  return (
    <div dir="rtl" className="rounded-lg border border-neutral-200 bg-white p-5 text-start">
      <p className="text-sm text-neutral-500">{label}</p>

      {state === "loading" ? (
        <div className="mt-2 h-8 w-24 animate-pulse rounded bg-neutral-100" aria-hidden="true" />
      ) : state === "error" ? (
        <p className="mt-2 text-sm text-[--chart-error]">تعذّر تحميل القيمة.</p>
      ) : state === "empty" ? (
        <p className="mt-2 text-2xl font-bold text-neutral-400">—</p>
      ) : (
        <p className="mt-1 text-3xl font-bold text-neutral-900"><bdi>{value}</bdi></p>
      )}

      {state === "loaded" && trend ? (
        <p className={`mt-2 inline-flex items-center gap-1 text-sm ${TREND[trend.direction].className}`}>
          <span aria-hidden="true">{TREND[trend.direction].icon}</span>
          <span>{trend.label}</span>
        </p>
      ) : null}
      {state === "loaded" && context ? <p className="mt-1 text-xs text-neutral-500">{context}</p> : null}
    </div>
  );
}
```

**Adaptation checklist**
- Format the value/locale upstream; keep it LTR and isolated.
- Trend always has a text label (e.g. "+4%"), never color alone.
- For a row of KPIs, keep cards equal height; map spacing to the project scale (illustrative here).

**When not to use**
- For comparisons across many categories (use a bar chart) or trends over time (use a line chart).
