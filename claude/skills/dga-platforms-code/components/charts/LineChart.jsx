// LineChart — trends over time, pure SVG (no chart library). RTL: the time axis reads right-to-left
// (first period on the right). Up to two series (verified series roles); a second series is dashed so
// it is distinguishable without color. Illustrative, token-driven; not an official DGA asset.
import React from "react";

// data: [{ period: string, series1: number, series2?: number }]
export default function LineChart({ data = [], max, height = 240 }) {
  const W = 980, H = height, pad = 34;
  const n = data.length;
  const top = max ?? Math.max(1, ...data.map((d) => Math.max(d.series1, d.series2 ?? 0)));
  const niceTop = Math.ceil(top / 500) * 500 || top;
  const hasS2 = data.some((d) => typeof d.series2 === "number");

  // RTL: index 0 on the right
  const x = (i) => pad + (W - 2 * pad) * (n === 1 ? 0.5 : 1 - i / (n - 1));
  const y = (v) => pad + (H - 2 * pad) * (1 - v / niceTop);
  const line = (key) => data.map((d, i) => (i ? "L" : "M") + x(i) + " " + y(d[key] ?? 0)).join(" ");

  const gridVals = [];
  for (let g = 0; g <= niceTop; g += niceTop / 5) gridVals.push(Math.round(g));

  return (
    <svg className="pc-chart__svg" viewBox={`0 0 ${W} ${H}`} role="img" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
      {gridVals.map((g) => (
        <g key={g}>
          <line x1={pad} x2={W - pad} y1={y(g)} y2={y(g)} stroke="var(--pc-chart-grid)" />
          <text x={W - pad + 6} y={y(g) + 4} fontSize="11" fill="var(--pc-chart-axis)" className="pc-num">{g}</text>
        </g>
      ))}
      <path d={line("series1")} fill="none" stroke="var(--pc-chart-series-1)" strokeWidth="2.5" />
      {hasS2 ? <path d={line("series2")} fill="none" stroke="var(--pc-chart-series-2)" strokeWidth="2.5" strokeDasharray="6 4" /> : null}
      {data.map((d, i) => <circle key={i} cx={x(i)} cy={y(d.series1)} r="3" fill="var(--pc-chart-series-1)" />)}
      {data.map((d, i) => (
        <text key={`l${i}`} x={x(i)} y={H - 10} fontSize="11" fill="var(--pc-chart-axis)" textAnchor="middle">{d.period}</text>
      ))}
    </svg>
  );
}
