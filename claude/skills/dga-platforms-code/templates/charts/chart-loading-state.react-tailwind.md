# Template — Chart loading state (React + Tailwind, RTL)

Shown while chart data is being fetched. Calm and predictable; announce status to assistive tech.
Illustrative, **aligned with Platforms Code principles**.

**Notes**
- Use a quiet skeleton, not a flashy spinner. Respect `prefers-reduced-motion` (Tailwind
  `motion-reduce:animate-none`).
- Expose `role="status"` + a visually-hidden label so screen readers know it's loading.

```tsx
// ChartLoadingState.tsx
export function ChartLoadingState({ label = "جارٍ تحميل الرسم البياني…" }: { label?: string }) {
  return (
    <div dir="rtl" role="status" className="min-h-[16rem]">
      <span className="sr-only">{label}</span>
      <div className="flex h-full min-h-[16rem] flex-col justify-end gap-3" aria-hidden="true">
        {/* skeleton bars */}
        <div className="flex items-end gap-3">
          {[60, 90, 45, 75, 55].map((h, i) => (
            <div key={i} className="flex-1 rounded-t bg-neutral-100 motion-safe:animate-pulse"
                 style={{ blockSize: `${h}%` }} />
          ))}
        </div>
        <div className="h-px w-full bg-neutral-200" />
      </div>
    </div>
  );
}
```

**Adaptation checklist**
- Keep the skeleton shape close to the real chart so layout doesn't jump on load.
- `motion-safe:animate-pulse` (or `motion-reduce:animate-none`) so reduced-motion users get a static skeleton.
