// DonutChart — simple part-to-whole (few segments), pure SVG (no chart library). A legend with
// `label — value (%)` is rendered next to the ring so segments are never distinguished by color
// alone. Illustrative, token-driven; not an official DGA asset.
import React from "react";

// Official DgaChart donut colors, in order: ["#1B8354","#079455","#B8EACB","#54C08A"].
// The palette cycles when there are more segments than colors.
const ROLE_FILLS = [
  "var(--pc-chart-series-1)",
  "var(--pc-chart-series-2)",
  "var(--pc-chart-series-3)",
  "var(--pc-chart-series-4)",
];

// data: [{ label: string, value: number }]
export default function DonutChart({ data = [], centerLabel, fmt = (n) => n.toLocaleString("en-US") }) {
  const total = data.reduce((s, d) => s + d.value, 0) || 1;
  const R = 70, C = 2 * Math.PI * R;
  let offset = 0;

  return (
    <div className="pc-donut" dir="rtl">
      <svg viewBox="0 0 200 200" width="180" height="180" role="img" aria-hidden="true">
        {data.map((d, i) => {
          const frac = d.value / total;
          const dash = `${frac * C} ${C - frac * C}`;
          const el = (
            <circle key={d.label} cx="100" cy="100" r={R} fill="none" strokeWidth="26"
                    stroke={ROLE_FILLS[i % ROLE_FILLS.length]} strokeDasharray={dash}
                    strokeDashoffset={-offset * C} transform="rotate(-90 100 100)" />
          );
          offset += frac;
          return el;
        })}
        <text x="100" y="98" textAnchor="middle" fontSize="22" fontWeight="700" fill="var(--pc-chart-text-strong)" className="pc-num">{fmt(total)}</text>
        {centerLabel ? <text x="100" y="118" textAnchor="middle" fontSize="11" fill="var(--pc-chart-axis)">{centerLabel}</text> : null}
      </svg>

      <div className="pc-donut__legend">
        {data.map((d, i) => (
          <div key={d.label}>
            <span className="pc-chart__swatch" style={{ background: ROLE_FILLS[i % ROLE_FILLS.length] }} aria-hidden="true" />
            <span>{d.label} — <bdi className="pc-num">{fmt(d.value)}</bdi> (<bdi className="pc-num">{Math.round((d.value / total) * 100)}%</bdi>)</span>
          </div>
        ))}
      </div>
    </div>
  );
}
