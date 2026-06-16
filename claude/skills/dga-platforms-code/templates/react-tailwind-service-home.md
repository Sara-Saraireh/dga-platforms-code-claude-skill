# Template — Service home (React + Tailwind, RTL)

Illustrative starting point for a government service landing page. Adapt to the project's tokens,
components, and conventions. Replace placeholder Arabic copy and `<...>` slots. Do not invent token
values — use the project's Tailwind theme / CSS variables.

**Notes**
- Set `dir="rtl"` and `lang="ar"` at the layout/document root (shown here on the section for clarity).
- Use logical spacing utilities; the examples use start/end-aware classes (`ps-*`, `pe-*`, `text-start`).
- **Hero hierarchy:** eyebrow (entity) → concise title → one-line lead → the primary task **above the
  fold**. Keep the lead short; no long paragraphs.
- **CTA hierarchy:** one primary action ("ابدأ الخدمة") plus one quiet secondary link. Do not repeat
  the primary action lower on the page.
- **Footer trust:** support / accessibility / privacy-style links; only render official
  logos/emblems with authorization.

```jsx
// ServiceHome.jsx
export default function ServiceHome({ service, onStart }) {
  // `service` is provided by the app; this component is presentational only.
  return (
    <main dir="rtl" lang="ar" className="mx-auto w-full max-w-3xl px-4 py-8 text-start">
      {/* Hero: clear identity, the task, and the primary action above the fold */}
      <header className="mb-8">
        <p className="text-sm font-medium text-neutral-500">{service.entityName}</p>
        <h1 className="mt-1 text-3xl font-bold leading-tight text-neutral-900">{service.title}</h1>
        <p className="mt-3 max-w-2xl leading-7 text-neutral-700">{service.summary}</p>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={onStart}
            className="inline-flex h-11 items-center justify-center rounded-md bg-[--color-primary] px-6 text-base font-medium text-white transition-colors hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--color-primary]"
          >
            ابدأ الخدمة
          </button>
          <a
            href="#requirements-title"
            className="inline-flex h-11 items-center justify-center rounded-md px-2 text-base font-medium text-[--color-primary] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--color-primary]"
          >
            عرض المتطلبات
          </a>
        </div>
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

      {/* Footer: reinforce trust; deliberate, not an afterthought */}
      <footer className="mt-10 border-t border-neutral-200 pt-6">
        <nav aria-label="روابط الدعم" className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-600">
          <a href="<support-url>" className="hover:text-neutral-900 hover:underline">الدعم والمساعدة</a>
          <a href="<accessibility-url>" className="hover:text-neutral-900 hover:underline">إمكانية الوصول</a>
          <a href="<privacy-url>" className="hover:text-neutral-900 hover:underline">سياسة الخصوصية</a>
        </nav>
        <p className="mt-3 text-xs text-neutral-500">{service.entityName}</p>
      </footer>
    </main>
  );
}
```

**Adaptation checklist**
- Map `bg-[--color-primary]` to the project's real primary token.
- Replace copy with the service's official Arabic wording. `service.summary` is a short lead — keep
  it to one or two lines (no long paragraphs).
- Ensure focus styles meet the project's accessibility standard.
- Confirm the page has exactly one `h1` and one primary action.
- Wire the footer links to real support / accessibility / privacy destinations.

**Polish, states & mobile**
- **Hero:** explain the service and surface the primary task above the fold; don't let the hero feel
  empty on desktop — the requirements/steps sections balance it (`references/24-high-fidelity-polish-rules.md`).
- **States:** add an unavailable/maintenance state for the service where relevant, and a loading
  state if `service` is fetched (`references/26-component-anatomy-polish.md`).
- **Mobile:** the hero actions stack (`flex-col sm:flex-row`); keep comfortable spacing so the layout
  is neither cramped nor sparse. Verify RTL alignment at every breakpoint.
- See the page blueprint for completeness: `references/25-government-page-blueprints.md` (service landing).

**Tokens & spacing**
- Map colors to verified tokens (`tokens/colors-v1.0.json`: e.g. SA 600 `#1B8354`, Gray scale) and
  typography to `tokens/typography-v1.0.json` (IBM Plex Sans Arabic; Display for headings, Text for body).
- Spacing and the Tailwind utility scale here are **illustrative**, not official. Map them to the host
  project's approved spacing scale (or verified Platforms Code spacing) before production. Do not
  present them as official DGA spacing, and do not introduce unofficial colors, fonts, or spacing tokens.
