# Example — Upload and review flow (generic)

A product-agnostic worked example of an upload → review → submit flow using a stepper. All data is
fake. No official logos, real personal data, or compliance claims.

## Scenario

A service requires the user to provide an input (a code and/or a file/image), confirm it, and submit.

## Steps (RTL stepper: right → left)

1. **الإدخال** — enter a code and/or upload a file/image.
2. **المراجعة** — review entered values before submitting.
3. **الإرسال** — submit and proceed to the result.

## Step 1 — Input

- Visible labels; required/optional marked; help text states accepted formats and limits.
- File/image upload shows selected file, progress, and recoverable errors; allows remove/replace.
- Any code/identifier is rendered LTR and isolated (`<bdi>`), kept exactly as entered.
- Validation behavior is preserved; client and server stay consistent (server is source of truth).

```jsx
<Stepper current={1} steps={["الإدخال", "المراجعة", "الإرسال"]} dir="rtl" />
{/* Reuse the TextField + file upload patterns from templates */}
<TextField id="code" label="الرمز التعريفي" required hint="أدخل الرمز كما هو دون مسافات." />
<FileUpload accept="image/*,application/pdf" maxSizeLabel="الحد الأقصى ٥ ميجابايت" />
```

## Step 2 — Review (review-before-submit)

- Read-only summary of all entered values, grouped and labeled.
- Each group has an «تعديل» action that returns to the relevant step without losing other data.
- The submit action is clearly labeled with its consequence.

```jsx
<dl className="grid gap-3 sm:grid-cols-2">
  <div><dt className="text-neutral-500">الرمز التعريفي</dt><dd><bdi className="font-mono">{code}</bdi></dd></div>
  <div><dt className="text-neutral-500">الملف المرفق</dt><dd>{fileName}</dd></div>
</dl>
<button type="button" onClick={goEditStep1}>تعديل</button>
<button type="button" onClick={submit}>تأكيد وإرسال</button>
```

## Step 3 — Submit

- Show a loading state («جارٍ الإرسال…»); disable the submit button while in flight.
- On success, navigate to the result page (see the results example).
- On failure, keep the user's data, explain what happened, and offer retry.

## What makes it government-grade

- Clear progress with a stepper; data preserved across steps; back navigation allowed.
- Explicit review before an irreversible action.
- Accessible inputs and announced errors; calm, official tone.
- RTL-correct flow and isolated codes/identifiers.

## Manual-review items

- Confirm accepted formats, size limits, and any server-side scanning.
- Verify upload behavior on mobile (camera capture, retake).
- Review security of file handling (see `SECURITY.md`); ensure no real data in fixtures.
