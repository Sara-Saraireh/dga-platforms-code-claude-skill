# Template — Service card (React + Tailwind, RTL)

Illustrative selectable service/option card for a selection grid. Adapt to the project's tokens and
components. Use a real `<button>`/link for the action so it is keyboard accessible.

**Notes**
- Card is keyboard-focusable and has a clear accessible name.
- **Full anatomy:** icon/status → title → short description → supporting metadata → action affordance.
  Scannable within ~2 seconds.
- Status uses text + icon, not color alone.
- Disabled/unavailable state is honest and keeps layout consistent.
- **CTA pattern:** this card is itself the selectable control (selection-first). Prefer one global
  CTA after selection over repeating an identical primary button on every card.

```jsx
// ServiceCard.jsx
export default function ServiceCard({
  title, description, icon: Icon, meta, statusLabel,
  available = true, selected = false, onSelect,
}) {
  return (
    <button
      type="button"
      onClick={available ? onSelect : undefined}
      disabled={!available}
      aria-disabled={!available}
      aria-pressed={selected}
      className={[
        "flex h-full w-full flex-col items-start gap-3 rounded-lg border p-5 text-start transition-colors",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--color-primary]",
        !available
          ? "cursor-not-allowed border-neutral-200 bg-neutral-50 opacity-60"
          : selected
          ? "border-[--color-primary] ring-1 ring-[--color-primary]"
          : "border-neutral-200 hover:border-[--color-primary] hover:bg-neutral-50",
      ].join(" ")}
    >
      {/* Icon + status row */}
      <span className="flex w-full items-start justify-between gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-md bg-neutral-100 text-neutral-700">
          {Icon ? <Icon aria-hidden="true" className="h-5 w-5" /> : null}
        </span>
        {statusLabel && (
          <span className="inline-flex items-center gap-1 rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-600">
            {statusLabel}
          </span>
        )}
      </span>

      <span className="text-base font-semibold text-neutral-900">{title}</span>
      <span className="text-sm leading-6 text-neutral-600">{description}</span>

      {/* Supporting metadata (e.g. duration, fees, category) */}
      {meta && (
        <span className="mt-auto pt-1 text-xs text-neutral-500"><bdi>{meta}</bdi></span>
      )}

      {!available && (
        <span className="inline-flex items-center gap-1 rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-600">
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
- Keep all cards in a grid the same height/width (`h-full`, `mt-auto` metadata) for a calm layout.
- For unavailable options, state the reason where helpful, not just the badge.
- If you must put an action button on each card, review whether selection-first + one global CTA
  reads more clearly (`references/24-high-fidelity-polish-rules.md`).

**Polish, states & mobile**
- **Anatomy:** keep the order icon/status → title → description → metadata so cards scan fast
  (`references/26-component-anatomy-polish.md`).
- **States:** default, hover, focus, `selected` (shown), and unavailable are all represented; keep
  them layout-stable.
- **Mobile:** in a grid, let cards stack to one column on small screens; avoid cramped padding.
- **Motion:** the `transition-colors` hover/focus is enough; keep motion subtle, respect
  `prefers-reduced-motion`, and keep selected/unavailable conveyed by text/semantics not motion
  (`references/27-motion-and-interaction-guidelines.md`).

**Tokens & spacing**
- Map colors/type to the verified tokens (`tokens/colors-v1.0.json`, `tokens/typography-v1.0.json`).
- Spacing and the Tailwind utility scale here are **illustrative**, not official. Map them to approved
  project (or verified Platforms Code) spacing before production. Do not present them as official DGA
  spacing, and do not introduce unofficial colors, fonts, or spacing tokens.
