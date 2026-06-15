# Example — Results page (generic)

A product-agnostic worked example of a result/outcome page. All data is fake. The outcome must come
from the server — never fabricated on the client. No official logos or compliance claims.

## Scenario

After a verification/processing flow, the user sees a clear outcome with supporting details and a
reference number.

## Outcomes to handle

| Status | Arabic label | Tone |
|--------|--------------|------|
| verified | تم التحقق | success |
| notVerified | لم يتم التحقق | error |
| inconclusive | النتيجة غير حاسمة | warning |
| error | تعذّر إكمال العملية | error |

Every outcome the server can return is handled explicitly — including not-found and error.

## Layout (RTL)

- A prominent status block: icon + label + tone color (not color alone), announced via `role="status"`.
- The reference number rendered LTR and isolated (`<bdi>`, monospace).
- A details section (`<dl>`), then clear next-step actions.

```jsx
{/* Reuse the ResultPage template */}
<ResultPage
  status={result.status}        // from the server
  reference={result.reference}  // e.g., REF-2026-000123 (fake)
  details={[
    { label: "نوع الطلب", value: "نوع تجريبي" },
    { label: "التاريخ", value: "2026-06-15" },
  ]}
  onPrint={print}
  onBack={goToServices}
/>
```

## What makes it government-grade

- Outcome stated plainly and prominently; status conveyed by icon + label + color.
- Reference/identifier preserved exactly and kept LTR.
- Success tone reserved for genuine positive outcomes — not used as a generic accent.
- Calm layout; clear next steps; reflects server truth, no client-side fabrication.

## Manual-review items

- Confirm the wording of each outcome with the service owner.
- Verify contrast for each tone (success/warning/error) in all states.
- Confirm the reference format and that no real personal data appears.
- Verify regulatory/official outputs reflect the authoritative record (see `SECURITY.md`).
