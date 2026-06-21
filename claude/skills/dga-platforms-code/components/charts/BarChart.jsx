// BarChart — categorical comparison, pure SVG (no chart library). `orientation="horizontal"` for many
// categories or long Arabic labels (labels get full width, never truncated). RTL: first category on
// the right (vertical) / on top (horizontal). Illustrative, token-driven; not an official DGA asset.
import React from "react";

// data: [{ category: string, value: number }]
export default function BarChart({ data = [], max, orientation = "vertical", height }) {
  const n = data.length;
  const top = max ?? Math.max(1, ...data.map((d) => d.value));
  const niceTop = Math.ceil(top / (top > 100 ? 500 : 5)) * (top > 100 ? 500 : 5) || top;
  const gridVals = [];
  for (let g = 0; g <= niceTop; g += niceTop / 3) gridVals.push(Math.round(g));

  if (orientation === "horizontal") {
    const W = 720, rowH = 44, pad = 8, labelW = 200;
    const H = Math.max(height ?? 0, n * rowH + 16);
    const barRight = W - labelW;       // bars occupy [pad, barRight]; labels sit to the right
    const full = barRight - pad;
    return (
      <svg className="pc-chart__svg" viewBox={`0 0 ${W} ${H}`} role="img" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
        {data.map((d, i) => {
          const cy = 16 + i * rowH;
          const len = full * (d.value / niceTop);
          return (
            <g key={d.category}>
              {/* category label on the right (full width — long Arabic labels not truncated) */}
              <text x={W - pad} y={cy + 19} fontSize="12" fill="var(--pc-chart-text)" textAnchor="end">{d.category}</text>
              {/* bar grows from the right of the plot area toward the left */}
              <rect x={barRight - len} y={cy + 7} width={len} height="18" rx="4" fill="var(--pc-chart-series-1)" />
              <text x={barRight - len - 6} y={cy + 21} fontSize="11" fill="var(--pc-chart-text)" textAnchor="end" className="pc-num">{d.value}</text>
            </g>
          );
        })}
      </svg>
    );
  }

  const W = 460, H = height ?? 240, pad = 34, bw = 46;
  const slot = (W - 2 * pad) / n;
  const cx = (i) => pad + slot * (n - 1 - i) + slot / 2; // RTL: first category on the right
  const y = (v) => pad + (H - 2 * pad) * (1 - v / niceTop);
  return (
    <svg className="pc-chart__svg" viewBox={`0 0 ${W} ${H}`} role="img" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
      {gridVals.map((g) => (
        <g key={g}>
          <line x1={pad} x2={W - pad} y1={y(g)} y2={y(g)} stroke="var(--pc-chart-grid)" />
          <text x={W - pad + 6} y={y(g) + 4} fontSize="11" fill="var(--pc-chart-axis)" className="pc-num">{g}</text>
        </g>
      ))}
      {data.map((d, i) => (
        <g key={d.category}>
          <rect x={cx(i) - bw / 2} y={y(d.value)} width={bw} height={H - pad - y(d.value)} rx="4" fill="var(--pc-chart-series-1)" />
          <text x={cx(i)} y={H - 10} fontSize="11" fill="var(--pc-chart-axis)" textAnchor="middle">{d.category}</text>
          <text x={cx(i)} y={y(d.value) - 6} fontSize="11" fill="var(--pc-chart-text)" textAnchor="middle" className="pc-num">{d.value}</text>
        </g>
      ))}
    </svg>
  );
}
