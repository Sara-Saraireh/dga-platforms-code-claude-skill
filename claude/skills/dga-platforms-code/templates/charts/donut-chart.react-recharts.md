# Template — Donut chart (React + Recharts, RTL)

Simple **part-to-whole** composition with a **few** segments. Aligned with the official chart types
(pie/donut, الرسم البياني الدائري). Illustrative, **aligned with Platforms Code principles** — not an
official DGA component.

> **Recharts is optional.** Use only if the host project **already uses Recharts** or the user
> **approves adding it**. **Do not install Recharts.** Otherwise use the **fallback** below.

**Notes**
- Use only for a few segments and simple composition; for precise comparison use a bar chart.
- **Never rely on color alone** — show a legend with `label — value (%)` and a center total.
- Limit to verified roles; for more than two segments, add neutral grays + value labels rather than
  inventing a palette.

```tsx
// DonutChartView.tsx — requires: react, recharts (peer; not bundled with this skill)
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export interface DonutDatum { label: string; value: number; }
export interface DonutChartViewProps { data: DonutDatum[]; centerLabel?: string; }

const ROLE_FILLS = ["var(--chart-series-1)", "var(--chart-series-2)", "var(--chart-axis)", "var(--chart-grid)"];

export function DonutChartView({ data, centerLabel }: DonutChartViewProps) {
  const total = data.reduce((s, d) => s + d.value, 0);
  return (
    <div className="relative">
      <ResponsiveContainer width="100%" height={288}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="label" innerRadius={70} outerRadius={110} paddingAngle={2}>
            {data.map((d, i) => <Cell key={d.label} fill={ROLE_FILLS[i % ROLE_FILLS.length]} />)}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-neutral-900"><bdi>{total}</bdi></span>
        {centerLabel ? <span className="text-xs text-neutral-500">{centerLabel}</span> : null}
      </div>
    </div>
  );
}
```

**Legend (required — text + value, never color alone)**

```tsx
export function DonutLegend({ data }: { data: DonutDatum[] }) {
  const total = data.reduce((s, d) => s + d.value, 0) || 1;
  return (
    <>{data.map((d, i) => (
      <span key={d.label} className="inline-flex items-center gap-2">
        <span className="h-3 w-3 rounded-sm" style={{ background: ROLE_FILLS[i % ROLE_FILLS.length] }} aria-hidden="true" />
        <span className="text-neutral-700">{d.label} — <bdi>{d.value}</bdi> (<bdi>{Math.round((d.value / total) * 100)}%</bdi>)</span>
      </span>
    ))}</>
  );
}
```

**Fallback (no Recharts)** — list each segment as `label — value (%)` (the `DonutLegend` above works
standalone), or a small data table. The percentages carry the meaning without the ring.

**When not to use**
- Many segments or precise comparison → bar chart. Trend over time → line. Exact rows → table.
