# Template — Form page (React + Tailwind, RTL)

Illustrative accessible form field group with visible labels, required marking, help text, and
error association. Adapt to the project's form library and validation — **preserve existing
validation behavior**; this template only shows presentation.

**Notes**

- Visible `<label>` associated via `htmlFor`/`id`. Placeholders are examples only.
- Required marked accessibly; help text and error linked with `aria-describedby`.
- Error is announced (`role="alert"`) and focus moves to the first error on submit (handled by app).

```jsx
// TextField.jsx
export function TextField({
  id,
  label,
  required = false,
  hint,
  error,
  value,
  onChange,
  type = "text",
  placeholder,
}) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className="mb-5 text-start">
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-medium text-neutral-900"
      >
        {label}
        {required ? (
          <span className="text-[--color-error]">
            {" "}
            *<span className="sr-only"> (مطلوب)</span>
          </span>
        ) : (
          <span className="text-neutral-500"> (اختياري)</span>
        )}
      </label>

      {hint && (
        <p id={hintId} className="mb-1.5 text-sm text-neutral-600">
          {hint}
        </p>
      )}

      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        aria-required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy}
        className={[
          "block w-full rounded-md border bg-white px-3 py-2 text-neutral-900",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--color-primary]",
          error ? "border-[--color-error]" : "border-neutral-300",
        ].join(" ")}
      />

      {error && (
        <p
          id={errorId}
          role="alert"
          className="mt-1.5 text-sm text-[--color-error]"
        >
          {error}
        </p>
      )}
    </div>
  );
}

// FormPage.jsx — structure only; wire to the project's submit/validation logic.
export default function FormPage({ fields, onSubmit, submitting }) {
  return (
    <main dir="rtl" lang="ar" className="mx-auto w-full max-w-xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold text-neutral-900">بيانات الطلب</h1>
      <form noValidate onSubmit={onSubmit}>
        {fields}
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex h-11 items-center justify-center rounded-md bg-[--color-primary] px-6 font-medium text-white hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--color-primary] disabled:opacity-60"
        >
          {submitting ? "جارٍ الإرسال…" : "متابعة"}
        </button>
      </form>
    </main>
  );
}
```

**Adaptation checklist**

- Map `--color-primary` and `--color-error` to project tokens.
- Keep client-side validation consistent with the server; the server is the source of truth.
- For barcodes/codes, render values LTR and isolate them (see RTL reference).
- For long forms, add an error summary and move focus to the first error on submit.

**Polish, states & mobile**

- **Form section anatomy:** section heading → grouped fields → help/errors; group related fields by
  proximity (`references/26-component-anatomy-polish.md`).
- **CTA hierarchy:** one primary action ("متابعة"); keep "حفظ كمسودة" / "إلغاء" secondary.
- **States:** show default, focus, error (specific message), disabled, and a submitting state (shown);
  for long forms add an error summary and move focus to the first error.
- **Review-before-submit:** for multi-step flows, follow the review page blueprint before submission
  (`references/25-page-blueprints.md`).
- **Mobile:** single-column fields, comfortable spacing, large touch targets; verify RTL alignment.
- **Motion:** keep validation/error feedback in text + accessible semantics (`role="alert"`), not
  animation; any transition is subtle and respects `prefers-reduced-motion`
  (`references/27-motion-and-interaction-guidelines.md`).

**Tokens & spacing**

- Map colors/type to the verified tokens (`tokens/colors-v1.0.json`, `tokens/typography-v1.0.json`);
  use Text styles for labels, inputs, and helper text.
- Spacing and the Tailwind utility scale here are **illustrative**, not official. Map them to approved
  project (or verified Platforms Code) spacing before production. Do not present them as official DGA
  spacing, and do not introduce unofficial colors, fonts, or spacing tokens.
