# Template — Horizontal bar chart (React + Recharts, RTL)

Comparison across **many categories** or with **long Arabic labels** that need room to read without
truncation. Same comparison as a column/bar chart, rotated so labels sit on the (right-hand) category
axis. Illustrative, **aligned with Platforms Code principles** — not an official DGA component.

> **Recharts is optional.** Use only if the host project **already uses Recharts** or the user
> **approves adding it**. **Do not install Recharts.** Otherwise use the **fallback** below.

**Notes**
- Best when Arabic labels are long — bars run horizontally so labels have full width.
- RTL: categories list right-to-left/top-down with labels on the right; numeric axis stays LTR.
- Wrap in `ChartContainer`; provide the required text summary.

```tsx
// HBarChartView.tsx — requires: react, recharts (peer; not bundled with this skill)
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export interface HBarDatum { category: string; value: number; }
export interface HBarChartViewProps { data: HBarDatum[]; valueName?: string; }

export function HBarChartView({ data, valueName = "القيمة" }: HBarChartViewProps) {
  return (
    <ResponsiveContainer width="100%" height={Math.max(288, data.length * 40)}>
      <BarChart layout="vertical" data={data} margin={{ top: 8, right: 8, bottom: 8, left: 8 }}>
        <CartesianGrid stroke="var(--chart-grid)" horizontal={false} />
        <XAxis type="number" orientation="top" tick={{ fill: "var(--chart-text)", fontSize: 12 }} stroke="var(--chart-axis)" />
        {/* Category axis on the right for RTL; give long Arabic labels width and don't truncate */}
        <YAxis type="category" dataKey="category" orientation="right" width={160}
               tick={{ fill: "var(--chart-text)", fontSize: 12 }} stroke="var(--chart-axis)" />
        <Tooltip cursor={{ fill: "var(--chart-grid)" }} />
        <Bar dataKey="value" name={valueName} fill="var(--chart-series-1)" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
```

**Fallback (no Recharts)** — reuse the accessible CSS-bar table from `bar-chart.react-recharts.md`
(`BarChartFallback`); it already gives long labels full width and includes the values.

**When not to use**
- Few short categories → vertical bar reads fine. Trends over time → line. Part-to-whole → donut.
