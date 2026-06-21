// Chart empty / loading / error states. Calm, accessible, dependency-free.
import React from "react";

export function ChartEmpty({ message = "لا توجد بيانات لعرضها", hint, action }) {
  return (
    <div className="pc-chart__state" dir="rtl">
      <p className="pc-chart__state-msg">{message}</p>
      {hint ? <p className="pc-chart__state-hint">{hint}</p> : null}
      {action || null}
    </div>
  );
}

export function ChartLoading({ label = "جارٍ تحميل الرسم البياني…" }) {
  return (
    <div role="status" dir="rtl">
      <span className="pc-sr-only">{label}</span>
      <div className="pc-chart__skeleton" aria-hidden="true">
        {[60, 90, 45, 75, 55].map((h, i) => (
          <i key={i} style={{ blockSize: `${h}%` }} />
        ))}
      </div>
    </div>
  );
}

export function ChartError({ message = "تعذّر تحميل الرسم البياني", hint = "يرجى المحاولة مرة أخرى.", onRetry }) {
  return (
    <div className="pc-chart__state pc-chart__state--error" role="alert" dir="rtl">
      <p className="pc-chart__state-msg"><span aria-hidden="true">⚠</span><span>{message}</span></p>
      {hint ? <p className="pc-chart__state-hint">{hint}</p> : null}
      {onRetry ? (
        <button type="button" className="pc-button pc-button--secondary pc-button--sm" onClick={onRetry}>
          إعادة المحاولة
        </button>
      ) : null}
    </div>
  );
}
