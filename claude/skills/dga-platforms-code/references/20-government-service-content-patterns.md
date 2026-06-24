# 20 — Government-service content patterns

> Supporting design-review guidance. It aligns with — and never overrides — DGA Platforms Code
> and the verified references (`13`–`16`). It is generic and product-agnostic, names no product,
> and makes no compliance claim. All examples use clearly fake placeholder data.

Use this when reviewing or writing Arabic UX copy for a generic government service. It complements
`10-content-style-arabic.md` and `templates/ux-copy-patterns-ar.md`, which remain authoritative;
this file adds concrete, reusable patterns. Always have native-speaker review for real content.

## Principles (recap)

- Plain, formal, respectful Arabic; clear over clever; one idea per line.
- Use the official, commonly understood term for each service, action, and status.
- Be specific about what the user must do and what happens next. Avoid jargon and system terms.

## Page headings

- Name the task, not the system. Prefer a noun phrase the user recognizes.
- Good: «التحقق من المستند» · «اختيار الخدمة» · «مراجعة الطلب قبل الإرسال».
- Avoid: vague or internal labels like «الصفحة الرئيسية للوحدة» or «نموذج رقم ٣».

## CTAs and action verbs

- Start with a clear verb that matches the action: ابدأ، أرسل، حمّل، تحقّق، راجِع، أكِّد، عُد.
- Make the primary CTA specific: «ابدأ التحقق» beats «التالي»; «أرسل الطلب» beats «إرسال».
- One primary CTA per view; secondary actions use quieter labels (e.g. «حفظ كمسودة»، «إلغاء»).

## Helper and field text

- Short, unambiguous labels; the same thing has the same name everywhere.
- Put format and limits where the user needs them: «الصيغ المقبولة: PDF, JPG — الحد الأقصى ١٠ ميجابايت».
- Keep essential instructions visible — never only in a placeholder.

## Status vocabulary

- Use a stable, limited set and pair each with an icon and a consistent color mapping
  (semantic colors per `16-semantic-colors-extraction.md`; never color alone):
  - قيد المراجعة · مكتمل · مرفوض · غير متاح · بانتظار المستند.
- Keep wording identical across screens and components.

## Error messages

- Say what went wrong and how to fix it; be specific and polite. Avoid blame and «حدث خطأ».
  - Weak: «إدخال غير صحيح».
  - Better: «رقم الطلب يجب أن يتكوّن من ٨ أرقام. مثال: 12345678».
- Don't expose technical codes, internal field names, or stack traces.

## Success and confirmation

- Confirm what succeeded and what the user can do next; include any reference to keep.
  - «تم إرسال طلبك بنجاح. رقم الطلب: AB-000123. يمكنك متابعة الحالة من صفحة طلباتي.»
- Reserve strong success styling and the success color for genuine positive outcomes only.

## Review-before-submit copy

- Summarize the user's entries in plain language and offer a clear edit path per section.
- State plainly what submission does: «بالضغط على «أرسل الطلب» سيتم إرسال بياناتك للمراجعة.»

## Mixed Arabic/Latin and numbers

- Preserve Latin product/brand names and identifiers in their original form; bidi-isolate them so
  order stays correct inside Arabic text (see `07-arabic-rtl.md`).
- Keep IDs, codes, phone numbers, and reference numbers in natural LTR order.

## Quick review questions

- Does each heading name the task in a term the user recognizes?
- Is every primary CTA a specific verb, with one primary per view?
- Do errors say how to fix the problem? Do success messages give the next step and any reference?
- Is the status vocabulary stable and paired with icon + verified color (not color alone)?

See also: `10-content-style-arabic.md`, `19-design-critique-rubric.md`, `22-ui-anti-patterns.md`.
