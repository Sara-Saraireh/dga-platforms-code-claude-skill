# Template — Line chart (React + Recharts, RTL)

Trends over time. Aligned with the official chart types (line, الرسم البياني الخطي). Illustrative,
**aligned with Platforms Code principles** — not an official DGA component.

> **Recharts is optional.** Use only if the host project **already uses Recharts** or the user
> **approves adding it**. **Do not install Recharts.** Otherwise use the **fallback** below.

**Notes**
- Wrap in `ChartContainer`; provide the required text summary (state the trend in words).
- RTL: time axis reads right-to-left (use `reversed`); numeric ticks stay LTR.
- Up to two series via the verified series roles; for more, add labels/markers — never color alone.

```tsx
// LineChartView.tsx — requires: react, recharts (peer; not bundled with this skill)
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export interface LinePoint { period: string; series1: number; series2?: number; }
export interface LineChartViewProps { data: LinePoint[]; series1Name: string; series2Name?: string; }

export function LineChartView({ data, series1Name, series2Name }: LineChartViewProps) {
  return (
    <ResponsiveContainer width="100%" height={288}>
      <LineChart data={data} margin={{ top: 8, right: 8, bottom: 8, left: 8 }}>
        <CartesianGrid stroke="var(--chart-grid)" vertical={false} />
        <XAxis dataKey="period" reversed tick={{ fill: "var(--chart-text)", fontSize: 12 }} stroke="var(--chart-axis)" />
        <YAxis orientation="right" tick={{ fill: "var(--chart-text)", fontSize: 12 }} stroke="var(--chart-axis)" />
        <Tooltip />
        {series2Name ? <Legend /> : null}
        <Line type="monotone" dataKey="series1" name={series1Name} stroke="var(--chart-series-1)" strokeWidth={2} dot={false} />
        {series2Name ? (
          <Line type="monotone" dataKey="series2" name={series2Name} stroke="var(--chart-series-2)" strokeWidth={2} strokeDasharray="5 4" dot={false} />
        ) : null}
      </LineChart>
    </ResponsiveContainer>
  );
}
```

**Fallback (no Recharts)** — a data table is the most accessible substitute:

```tsx
export function LineChartFallback({ data, series1Name, series2Name }: LineChartViewProps) {
  return (
    <table dir="rtl" className="w-full text-start text-sm">
      <caption className="sr-only">{series1Name} عبر الزمن</caption>
      <thead><tr>
        <th scope="col" className="p-2 font-medium">الفترة</th>
        <th scope="col" className="p-2 font-medium">{series1Name}</th>
        {series2Name ? <th scope="col" className="p-2 font-medium">{series2Name}</th> : null}
      </tr></thead>
      <tbody>
        {data.map(d => (
          <tr key={d.period} className="border-t border-neutral-100">
            <td className="p-2 text-neutral-900"><bdi>{d.period}</bdi></td>
            <td className="p-2 tabular-nums"><bdi>{d.series1}</bdi></td>
            {series2Name ? <td className="p-2 tabular-nums"><bdi>{d.series2 ?? "—"}</bdi></td> : null}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
```

**When not to use**
- Categorical comparison (no time axis) → bar chart. Part-to-whole → donut. Exact rows → table.
