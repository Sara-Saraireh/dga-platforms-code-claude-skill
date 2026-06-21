# Template — Chart error state (React + Tailwind, RTL)

Shown when chart data fails to load. Honest, non-blaming, and recoverable. Illustrative, **aligned
with Platforms Code principles**.

**Notes**
- Uses `role="alert"`; state colour is paired with text + icon (never colour alone).
- Offer a retry where possible; never expose technical codes/stack traces to the user.

```tsx
// ChartErrorState.tsx
export interface ChartErrorStateProps {
  message?: string;        // default: "تعذّر تحميل الرسم البياني"
  hint?: string;           // e.g. "يرجى المحاولة مرة أخرى."
  onRetry?: () => void;
}

export function ChartErrorState({
  message = "تعذّر تحميل الرسم البياني",
  hint = "يرجى المحاولة مرة أخرى.",
  onRetry,
}: ChartErrorStateProps) {
  return (
    <div dir="rtl" role="alert"
         className="flex min-h-[16rem] flex-col items-center justify-center gap-3 text-center">
      <p className="inline-flex items-center gap-2 text-sm font-medium text-[--chart-error]">
        <span aria-hidden="true">⚠</span>
        <span>{message}</span>
      </p>
      {hint ? <p className="max-w-sm text-sm text-neutral-600">{hint}</p> : null}
      {onRetry ? (
        <button type="button" onClick={onRetry}
          className="inline-flex h-10 items-center rounded-md border border-neutral-300 px-4 text-sm font-medium text-neutral-800 hover:bg-neutral-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--chart-info]">
          إعادة المحاولة
        </button>
      ) : null}
    </div>
  );
}
```

**Adaptation checklist**
- Keep the message plain and reassuring; put technical detail in logs, not the UI.
- Ensure the error colour also has the icon + text so it is not conveyed by colour alone.
