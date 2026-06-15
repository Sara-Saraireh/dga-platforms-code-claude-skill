# Example — Service selection page (generic)

A product-agnostic worked example of a government service-selection screen. All data is fake and
illustrative. No official logos, no real personal data, no compliance claims.

## Scenario

A public-sector portal offers several digital services. The user lands on a selection screen and
chooses one. Some services are not yet available.

## Layout (RTL)

- `dir="rtl"`, `lang="ar"`, one `h1`: «اختر الخدمة».
- A short intro line describing the portal's purpose.
- A responsive grid of equal service cards; unavailable cards are clearly marked.
- One calm, official tone; no marketing styling.

## Content (fake, illustrative)

| Service (label) | Description | State |
|-----------------|-------------|-------|
| خدمة أ | وصف مختصر للخدمة وما تقدّمه للمستفيد. | متاح |
| خدمة ب | وصف مختصر يوضّح الغرض من الخدمة. | متاح |
| خدمة ج | وصف مختصر للخدمة. | غير متاح حاليًا |

## Structure (illustrative)

```jsx
<main dir="rtl" lang="ar" className="mx-auto max-w-5xl px-4 py-8 text-start">
  <h1 className="text-2xl font-bold text-neutral-900">اختر الخدمة</h1>
  <p className="mt-2 text-neutral-700">اختر إحدى الخدمات الرقمية المتاحة للبدء.</p>

  <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {services.map((s) => (
      <li key={s.id}>
        {/* Reuse the ServiceCard template */}
        <ServiceCard
          title={s.title}
          description={s.description}
          available={s.available}
          onSelect={() => goToService(s.id)}
        />
      </li>
    ))}
  </ul>
</main>
```

## What makes it government-grade

- Equal, scannable choices; one clear action per card; accessible buttons.
- Honest "غير متاح حاليًا" state that preserves layout, status not by color alone.
- Calm spacing, restrained color, no decoration competing with the task.
- RTL-correct grid and alignment; consistent terminology.

## Manual-review items

- Confirm official service names and Arabic wording.
- Confirm any logos/emblems are authorized before use.
- Verify accessibility (focus order, keyboard, contrast) with real content.
