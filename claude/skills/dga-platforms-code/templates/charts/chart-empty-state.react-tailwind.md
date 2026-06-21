# Template — Chart empty state (React + Tailwind, RTL)

Shown when a chart has **no data** (distinct from loading and error). Explain what will appear and,
where useful, offer a next action. Illustrative, **aligned with Platforms Code principles**.

**Notes**
- Calm, not alarming; never a blank box. Conveyed by text, not an illustration alone.
- Render inside `ChartContainer` in place of the chart.

```tsx
// ChartEmptyState.tsx
export interface ChartEmptyStateProps {
  message?: string;       // default: "لا توجد بيانات لعرضها"
  hint?: string;          // e.g. "ستظهر البيانات بعد اكتمال أول دورة مراجعة."
  action?: React.ReactNode; // optional next action (e.g. a button/link)
}

export function ChartEmptyState({
  message = "لا توجد بيانات لعرضها",
  hint,
  action,
}: ChartEmptyStateProps) {
  return (
    <div dir="rtl" className="flex min-h-[16rem] flex-col items-center justify-center gap-2 text-center">
      <p className="text-sm font-medium text-neutral-700">{message}</p>
      {hint ? <p className="max-w-sm text-sm text-neutral-500">{hint}</p> : null}
      {action ? <div className="mt-2">{action}</div> : null}
    </div>
  );
}
```

**Adaptation checklist**
- Keep the message specific to the metric; offer a next step when there is one.
- Do not show a misleading zero-value chart when data is simply absent — show this state instead.
