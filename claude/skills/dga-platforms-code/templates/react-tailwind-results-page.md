# Template — Results page (React + Tailwind, RTL)

Illustrative result summary that states the outcome plainly. Adapt to the project. The status must
reflect the server's source of truth — **never fabricate a result on the client**.

**Notes**
- Status uses icon + label + color (not color alone) and is announced.
- Reference/identifier kept LTR and isolated.
- Clear next-step actions.

```jsx
// ResultPage.jsx
const STATUS = {
  verified:     { label: "تم التحقق", tone: "success" },
  notVerified:  { label: "لم يتم التحقق", tone: "error" },
  inconclusive: { label: "النتيجة غير حاسمة", tone: "warning" },
};

const TONE = {
  success: "bg-[--color-success-soft] text-[--color-success] border-[--color-success]",
  error:   "bg-[--color-error-soft] text-[--color-error] border-[--color-error]",
  warning: "bg-[--color-warning-soft] text-[--color-warning] border-[--color-warning]",
};

export default function ResultPage({ status, reference, details, onPrint, onBack, Icon }) {
  const s = STATUS[status] ?? STATUS.inconclusive;

  return (
    <main dir="rtl" lang="ar" className="mx-auto w-full max-w-2xl px-4 py-8 text-start">
      <section
        role="status"
        className={`mb-6 flex items-center gap-3 rounded-lg border p-5 ${TONE[s.tone]}`}
      >
        {Icon ? <Icon aria-hidden="true" className="h-6 w-6 shrink-0" /> : null}
        <div>
          <h1 className="text-xl font-bold">{s.label}</h1>
          {reference && (
            <p className="mt-1 text-sm">
              الرقم المرجعي: <bdi className="font-mono">{reference}</bdi>
            </p>
          )}
        </div>
      </section>

      <section aria-labelledby="details-title" className="mb-8 rounded-lg border border-neutral-200 p-5">
        <h2 id="details-title" className="mb-3 text-lg font-semibold text-neutral-900">التفاصيل</h2>
        <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {details.map((d) => (
            <div key={d.label}>
              <dt className="text-sm text-neutral-500">{d.label}</dt>
              <dd className="text-neutral-900"><bdi>{d.value}</bdi></dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="flex flex-wrap gap-3">
        <button type="button" onClick={onPrint}
          className="inline-flex h-11 items-center rounded-md border border-neutral-300 px-5 font-medium text-neutral-800 hover:bg-neutral-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--color-primary]">
          حفظ / طباعة
        </button>
        <button type="button" onClick={onBack}
          className="inline-flex h-11 items-center rounded-md bg-[--color-primary] px-5 font-medium text-white hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--color-primary]">
          العودة إلى الخدمات
        </button>
      </div>
    </main>
  );
}
```

**Adaptation checklist**
- Map the status/tone tokens to real project values; verify contrast for each tone.
- Handle every real outcome the server can return (including not-found/error).
- Keep the reference and any IDs LTR and isolated (`<bdi>` / `font-mono`).
- Don't overuse the success tone; reserve it for genuine positive outcomes.

**Tokens & spacing**
- Map status tones to verified Semantic 600 tokens (`tokens/colors-v1.0.json`: Error `#D92D20`,
  Warning `#DC6803`, Success `#1B8354`, Info `#1570EF`) and type to `tokens/typography-v1.0.json`.
- Spacing here is **illustrative**, not official. Map it to approved project (or verified Platforms
  Code) spacing before production. Do not present it as official DGA spacing.
