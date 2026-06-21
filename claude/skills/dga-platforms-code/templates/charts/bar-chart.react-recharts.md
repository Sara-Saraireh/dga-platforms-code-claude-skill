# Template — Bar (column) chart (React + Recharts, RTL)

Categorical comparison (values across a few categories). Aligned with the official chart types
(column/bar, الرسم البياني العمودي). Illustrative, **aligned with Platforms Code principles** — not an
official DGA component.

> **Recharts is optional.** Only use this if the host project **already uses Recharts** or the user
> **approves adding it**. **Do not install Recharts** as part of a UI task. If Recharts is not
> available, use the **fallback** below (no dependency).

**Notes**
- Wrap in `ChartContainer` (title, description, required text summary, states).
- Colors come from the chart-token CSS variables; never hardcode hex.
- RTL: render inside `dir="rtl"`; keep numeric ticks LTR; don't truncate Arabic category labels —
  if labels are long or many, use the **horizontal bar** template instead.

```tsx
// BarChartView.tsx — requires: react, recharts (peer; not bundled with this skill)
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export interface BarDatum { category: string; value: number; }
export interface BarChartViewProps { data: BarDatum[]; valueName?: string; }

export function BarChartView({ data, valueName = "القيمة" }: BarChartViewProps) {
  return (
    <ResponsiveContainer width="100%" height={288}>
      <BarChart data={data} margin={{ top: 8, right: 8, bottom: 8, left: 8 }}>
        <CartesianGrid stroke="var(--chart-grid)" vertical={false} />
        <XAxis dataKey="category" reversed tick={{ fill: "var(--chart-text)", fontSize: 12 }}
               stroke="var(--chart-axis)" interval={0} />
        <YAxis orientation="right" tick={{ fill: "var(--chart-text)", fontSize: 12 }}
               stroke="var(--chart-axis)" />
        <Tooltip cursor={{ fill: "var(--chart-grid)" }} />
        <Bar dataKey="value" name={valueName} fill="var(--chart-series-1)" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
```

**Fallback (no Recharts) — accessible CSS bars + data table**

```tsx
export function BarChartFallback({ data, valueName = "القيمة" }: BarChartViewProps) {
  const max = Math.max(1, ...data.map(d => d.value));
  return (
    <table dir="rtl" className="w-full text-start text-sm">
      <caption className="sr-only">{valueName} حسب الفئة</caption>
      <thead><tr><th scope="col" className="p-2 font-medium">الفئة</th><th scope="col" className="p-2 font-medium">{valueName}</th></tr></thead>
      <tbody>
        {data.map(d => (
          <tr key={d.category} className="border-t border-neutral-100">
            <td className="p-2 text-neutral-900">{d.category}</td>
            <td className="p-2">
              <span className="flex items-center gap-2">
                <span className="h-2 rounded bg-[--chart-series-1]" style={{ inlineSize: `${(d.value / max) * 100}%` }} aria-hidden="true" />
                <bdi className="tabular-nums text-neutral-700">{d.value}</bdi>
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
```

**When not to use**
- Trends over time → line chart. Part-to-whole → donut. Precise row-level review → table.
