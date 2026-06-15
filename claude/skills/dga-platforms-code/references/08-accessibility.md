# 08 — Accessibility

Public-sector interfaces must be usable by everyone. Anchor expectations to the official
accessibility guidance (https://my.gov.sa/en/content/accessibility) and apply WCAG where the project
requires a specific conformance level.

## Contrast

- Ensure sufficient contrast for body text, large text, icons, and interactive states.
- Check disabled, placeholder, and hover/focus states too — not just the default.
- Don't place text over busy backgrounds or low-contrast accent colors.

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
