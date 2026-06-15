# Template — Service card (React + Tailwind, RTL)

Illustrative selectable service/option card for a selection grid. Adapt to the project's tokens and
components. Use a real `<button>`/link for the action so it is keyboard accessible.

**Notes**
- Card is keyboard-focusable and has a clear accessible name.
- Status uses text + icon, not color alone.
- Disabled/unavailable state is honest and keeps layout consistent.

```jsx
// ServiceCard.jsx
export default function ServiceCard({ title, description, icon: Icon, available = true, onSelect }) {
  return (
    <button
      type="button"
      onClick={available ? onSelect : undefined}
      disabled={!available}
      aria-disabled={!available}
      className={[
        "flex w-full flex-col items-start gap-3 rounded-lg border p-5 text-start transition-colors",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--color-primary]",
        available
          ? "border-neutral-200 hover:border-[--color-primary] hover:bg-neutral-50"
          : "cursor-not-allowed border-neutral-200 bg-neutral-50 opacity-60",
      ].join(" ")}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-md bg-neutral-100 text-neutral-700">
        {Icon ? <Icon aria-hidden="true" className="h-5 w-5" /> : null}
      </span>

      <span className="text-base font-semibold text-neutral-900">{title}</span>
      <span className="text-sm leading-6 text-neutral-600">{description}</span>

      {!available && (
        <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-600">
          غير متاح حاليًا
        </span>
      )}
    </button>
  );
}
```

**Adaptation checklist**
- Replace `--color-primary` with the project token.
- Ensure the icon is decorative (`aria-hidden`) since the title conveys meaning.
- Keep all cards in a grid the same height/width for a calm layout.
- For unavailable options, state the reason where helpful, not just the badge.

**Tokens & spacing**
- Map colors/type to the verified tokens (`tokens/colors-v1.0.json`, `tokens/typography-v1.0.json`).
- Spacing here is **illustrative**, not official. Map it to approved project (or verified Platforms
  Code) spacing before production. Do not present it as official DGA spacing.
