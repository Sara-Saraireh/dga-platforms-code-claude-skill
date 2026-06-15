# 05 — Forms and inputs

Confirm form and Steps behavior against
https://design.dga.gov.sa/guidelines/components and
https://design.dga.gov.sa/guidelines/components/forms-and-inputs/steps

Preserve existing validation behavior. You may improve how validation is presented (labels,
messages, focus, announcement) without changing what passes or fails — unless explicitly asked to
change the rules.

## Labels

- Every input has a visible, programmatically associated label (`<label for>` or wrapping).
- Labels are short, in plain Arabic, and describe the expected value.
- Do not use placeholders as labels.

## Placeholder rules

- Placeholders show an example format only; they are optional and never carry essential instructions.
- Placeholder text disappears on input, so nothing required may live only there.
- Keep contrast sufficient if used; don't mistake low-contrast placeholders for help text.

## Required / optional indicators

- Mark required vs optional explicitly and consistently across the whole form.
- State the convention once (e.g., what the marker means) where helpful.
- Don't rely on an asterisk alone without an accessible name; ensure screen readers convey "required".

## Help text

- Place help text near its field, before the user makes an error where possible.
- Keep it concise and specific to that field (format, limits, examples).
- Associate it with the field (e.g., `aria-describedby`).

## Error messages

- Specific and actionable: say what's wrong and how to fix it, in plain Arabic.
- Appear next to the field, are announced to assistive tech, and link to the field.
- Move focus to the first error on submit; summarize errors for long forms.
- Don't use vague messages ("خطأ"), don't blame the user, don't expose technical detail.

## Validation

- Preserve existing rules and behavior. Improve only presentation unless asked to change rules.
- Validate at sensible moments (on blur and/or on submit); avoid punishing users mid-typing.
- Keep client and server validation consistent; the server remains the source of truth.

## File upload

- State accepted formats, size limits, and how many files before the user selects.
- Show selected files, upload progress, and clear, recoverable errors.
- Allow remove/replace; keep the rest of the form's data intact on error.
- Never bypass server-side validation/scanning from the UI (see `SECURITY.md`).

## Barcode input

- Keep barcode values LTR even within an Arabic interface; isolate them from surrounding text.
- Support both manual entry and scanning where applicable; validate format and give immediate,
  specific feedback.
- Show the captured value clearly for confirmation before submission.

## Image upload

- State accepted image types and size; show a preview/thumbnail and progress.
- Handle camera capture on mobile where relevant; allow retake/replace.
- Communicate processing (e.g., recognition/extraction) state and any failure clearly.

## Review-before-submit pattern

- Before final submission, show a read-only review of all entered values grouped by section.
- Let the user jump back to edit any section without losing other data.
- Clearly label the final submit action and its consequence.

## Multi-step forms

- Break long flows into logical steps; show progress with a Steps/stepper component.
- Preserve entered data when moving between steps and allow back navigation.
- Validate per step; don't advance past invalid required fields.
- End with a review-before-submit step where appropriate.

## Steps component usage

- States: current, completed, and upcoming — each visually and semantically distinct.
- Label steps with short, meaningful Arabic names; indicate the current step to assistive tech.
- In RTL, steps progress right-to-left; the connector and any arrows mirror accordingly.
- Keep the step count honest and stable; don't hide required steps.
