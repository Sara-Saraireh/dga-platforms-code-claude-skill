# Template — Service home (React + Tailwind, RTL)

Illustrative starting point for a government service landing page. Adapt to the project's tokens,
components, and conventions. Replace placeholder Arabic copy and `<...>` slots. Do not invent token
values — use the project's Tailwind theme / CSS variables.

**Notes**
- Set `dir="rtl"` and `lang="ar"` at the layout/document root (shown here on the section for clarity).
- Use logical spacing utilities; the examples use start/end-aware classes (`ps-*`, `pe-*`, `text-start`).
- One primary action ("ابدأ الخدمة"). Keep secondary info secondary.
- Only render official logos/emblems with authorization.

```jsx
// ServiceHome.jsx
export default function ServiceHome({ service, onStart }) {
  // `service` is provided by the app; this component is presentational only.
  return (
    <main dir="rtl" lang="ar" className="mx-auto w-full max-w-3xl px-4 py-8 text-start">
      <header className="mb-6">
        <p className="text-sm text-neutral-500">{service.entityName}</p>
        <h1 className="mt-1 text-2xl font-bold text-neutral-900">{service.title}</h1>
        <p className="mt-3 leading-7 text-neutral-700">{service.description}</p>
      </header>

      <section aria-labelledby="requirements-title" className="mb-6 rounded-lg border border-neutral-200 p-5">
        <h2 id="requirements-title" className="mb-3 text-lg font-semibold text-neutral-900">
          متطلبات الخدمة
        </h2>
        <ul className="list-disc space-y-2 pe-5 text-neutral-700">
          {service.requirements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="steps-title" className="mb-8 rounded-lg border border-neutral-200 p-5">
        <h2 id="steps-title" className="mb-3 text-lg font-semibold text-neutral-900">خطوات الخدمة</h2>
        <ol className="space-y-2 text-neutral-700">
          {service.steps.map((step, i) => (
            <li key={step} className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-sm font-medium text-neutral-700">
                {i + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <button
        type="button"
        onClick={onStart}
        className="inline-flex h-11 items-center justify-center rounded-md bg-[--color-primary] px-6 text-base font-medium text-white transition-colors hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--color-primary]"
      >
        ابدأ الخدمة
      </button>
    </main>
  );
}
```

**Adaptation checklist**
- Map `bg-[--color-primary]` to the project's real primary token.
- Replace copy with the service's official Arabic wording.
- Ensure focus styles meet the project's accessibility standard.
- Confirm the page has exactly one `h1` and one primary action.
