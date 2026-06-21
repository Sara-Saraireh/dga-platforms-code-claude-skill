// KpiCard — a single-number indicator (label → value → trend → context). Trend is text + icon, never
// color alone. Illustrative, token-driven; not an official DGA asset.
import React from "react";

const TREND_ICON = { up: "▲", down: "▼", flat: "■" };

export default function KpiCard({ label, value, trend, context, state = "loaded", className = "" }) {
  return (
    <div dir="rtl" className={["pc-kpi", className].filter(Boolean).join(" ")}>
      <p className="pc-kpi__label">{label}</p>

      {state === "loading" ? (
        <div className="pc-chart__skeleton" style={{ minBlockSize: "2rem", marginBlockStart: "8px" }} aria-hidden="true"><i style={{ blockSize: "2rem", maxInlineSize: "6rem" }} /></div>
      ) : state === "error" ? (
        <p className="pc-kpi__value" style={{ fontSize: "var(--pc-text-md)", color: "var(--pc-chart-error)" }}>تعذّر تحميل القيمة.</p>
      ) : state === "empty" ? (
        <p className="pc-kpi__value" style={{ color: "var(--pc-gray-400)" }}>—</p>
      ) : (
        <p className="pc-kpi__value pc-num">{value}</p>
      )}

      {state === "loaded" && trend ? (
        <p className={`pc-kpi__trend pc-kpi__trend--${trend.direction}`}>
          <span aria-hidden="true">{TREND_ICON[trend.direction]}</span>
          <span>{trend.label}</span>
        </p>
      ) : null}
      {state === "loaded" && context ? <p className="pc-kpi__context">{context}</p> : null}
    </div>
  );
}
