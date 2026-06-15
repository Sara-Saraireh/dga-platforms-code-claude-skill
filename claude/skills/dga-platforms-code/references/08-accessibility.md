# 08 — Accessibility

Public-sector interfaces must be usable by everyone. The Platforms Code Guide v1.0 connects Platforms
Code with accessibility and WCAG-aware design, and the typography page states the target is
**WCAG 2.1 AA**. Anchor expectations to the official accessibility guidance
(https://my.gov.sa/en/content/accessibility) and apply WCAG at the conformance level the project
requires.

Interface changes must consider contrast, keyboard navigation, semantic HTML, focus states, labels,
screen-reader-friendly text, clear errors, and status messages that do not rely on color alone.
Accessibility must be part of the final quality gate.

## Contrast

- Ensure sufficient contrast for body text, large text, icons, and interactive states.
- Check disabled, placeholder, and hover/focus states too — not just the default.
- Don't place text over busy backgrounds or low-contrast accent colors.

### Verified text-color and contrast guidance (typography page)

- For **light backgrounds numbered 400 and below**, suggested text colors include **Gray 500,
  Gray 600, Gray 700, Gray 950**.
- For **backgrounds numbered 500 and above**, **white text** is recommended.
- Minimum WCAG 2.1 contrast ratios: **AA 4.5:1**, **AA large text 3:1**, **AAA 7:1**,
  **AAA large text 4.5:1**.
- Large text definition: above 18.5 bold, or 24 regular.
- Semantic state colors (Error/Warning/Success/Info 600) must be paired with text labels and/or
  icons — never color alone.

## Focus states

- Every interactive element has a visible focus indicator.
- Never remove focus outlines without providing an equally clear replacement.
- Focus order is logical and follows the visual (RTL) reading order.

## Keyboard navigation

- Everything operable by mouse is operable by keyboard.
- No keyboard traps; users can tab in and out of all widgets (including modals, menus, tabs).
- Provide expected key behavior (Enter/Space to activate, Escape to close, arrows within composites).

## Semantic HTML

- Use the correct elements: `button`, `a`, `nav`, `main`, `header`, `footer`, `table`, `label`, lists.
- Headings are in order and describe structure; one `h1` per page.
- Use ARIA only to fill gaps, not to replace native semantics.

## Form labels

- Every input has a programmatic label; groups use `fieldset`/`legend` where appropriate.
- Required state and help text are associated with the field.
- Placeholders are never the only label.

## Error announcements

- Errors are announced to assistive tech (e.g., `role="alert"` / live region) and tied to fields.
- On submit, move focus to the first error and/or an error summary.
- Error text is specific and actionable.

## Screen-reader-friendly text

- Provide accessible names for icon-only controls.
- Use descriptive link/button text (avoid "اضغط هنا"/"click here").
- Hide purely decorative elements from assistive tech; provide alt text for meaningful images.

## Status not relying on color alone

- Pair every status/badge/indicator with text and/or an icon.
- Ensure success/warning/error are distinguishable without color perception.
- Charts and data visualizations use labels/patterns, not color only.

## Touch targets

- Interactive targets are large enough to tap comfortably, with adequate spacing.
- Don't place small tap targets close together.
- Ensure mobile controls (upload, camera, steppers) meet target sizing.

## Reduced motion

- Respect `prefers-reduced-motion`; reduce or remove non-essential animation when requested.
- Avoid motion that conveys essential information without a static alternative.
- Keep transitions subtle and purposeful by default.

## Accessible tables

- Use semantic tables with `<th scope>` and a caption/summary where helpful.
- Keep alignment RTL-aware; associate data cells with headers.
- Provide accessible sorting/filtering and clear empty/loading states.
