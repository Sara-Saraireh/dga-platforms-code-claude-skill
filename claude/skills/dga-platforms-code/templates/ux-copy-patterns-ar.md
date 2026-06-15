# Template — Arabic UX copy patterns

Reusable Arabic microcopy patterns for government services. Adapt wording to the service's official
terminology. Keep tone formal, clear, and consistent. These are patterns, not fixed strings.

## Buttons and actions (precise verbs)

| Intent | Pattern |
|--------|---------|
| Start a service | ابدأ الخدمة |
| Continue / next step | متابعة |
| Go back | رجوع |
| Submit / send | إرسال الطلب |
| Upload a file | رفع الملف |
| Verify / check | تحقّق |
| Review before submit | مراجعة البيانات |
| Confirm | تأكيد |
| Save / print | حفظ / طباعة |
| Return to services | العودة إلى الخدمات |

## Field labels and help

- Label pattern: short noun phrase — e.g., «رقم الطلب»، «تاريخ الميلاد»، «الرمز التعريفي».
- Required marker: add « *» with an accessible « (مطلوب)»; optional: « (اختياري)».
- Help text pattern: «أدخل ... بالصيغة ...» — state format/limits, e.g., «الحد الأقصى لحجم الملف ٥ ميجابايت».

## Error messages (specific + how to fix)

| Situation | Pattern |
|-----------|---------|
| Required field empty | «هذا الحقل مطلوب.» |
| Invalid format | «الصيغة غير صحيحة. الرجاء إدخال ... بالشكل ...» |
| File too large | «حجم الملف يتجاوز الحد المسموح. الحد الأقصى ... .» |
| Unsupported file type | «نوع الملف غير مدعوم. الأنواع المسموحة: ... .» |
| Generic recoverable failure | «تعذّر إكمال العملية. الرجاء المحاولة مرة أخرى.» |

Avoid: «حدث خطأ» بمفرده، أو لغة تُحمّل المستخدم المسؤولية، أو إظهار تفاصيل تقنية/أكواد.

## Success messages (confirm + next step)

| Situation | Pattern |
|-----------|---------|
| Submission received | «تم استلام طلبك بنجاح.» مع الرقم المرجعي. |
| Action completed | «تم تنفيذ العملية.» مع الخطوة التالية إن وُجدت. |

Reserve strong success styling and the success color for genuine positive outcomes only.

## Status vocabulary (consistent everywhere)

| State | Pattern |
|-------|---------|
| Pending review | قيد المراجعة |
| In progress | قيد المعالجة |
| Completed | مكتمل |
| Rejected | مرفوض |
| Not available | غير متاح حاليًا |
| Verified | تم التحقق |
| Not verified | لم يتم التحقق |
| Inconclusive | النتيجة غير حاسمة |

Pair each status with an icon and a consistent color mapping; never rely on color alone.

## Empty and loading states

- Loading: «جارٍ التحميل…» / «جارٍ الإرسال…» / «جارٍ التحقق…».
- Empty (with next step): «لا توجد عناصر لعرضها.» + إجراء مقترح عند الاقتضاء.

## Mixed Arabic/English guidance

- Keep product/brand names and identifiers in their original Latin form; isolate within Arabic
  (`<bdi>` / bidi isolation) so order stays correct.
- Keep numbers, codes, and IDs LTR; don't let them reorder surrounding Arabic.
- Translate meaning, not words; avoid literal renderings that read awkwardly in Arabic.
