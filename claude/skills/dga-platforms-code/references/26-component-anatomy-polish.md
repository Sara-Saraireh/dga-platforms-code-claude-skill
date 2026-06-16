# 26 — Component anatomy polish

> Supporting design-review guidance. It aligns with — and never overrides — DGA Platforms Code
> and the verified references (`13`–`16`) and tokens (`tokens/`). It introduces no official DGA
> rules, tokens, spacing, components, or compliance claims. The component rules in `04-components.md`
> and `05-forms-and-inputs.md` remain authoritative; this file adds polish detail.

For each component: **required content**, **visual hierarchy**, **state behavior**, **accessibility
notes**, **common anti-patterns**. Use verified type/color and project/verified spacing only.

## Service card

- **Required content:** title, short description, icon/status, supporting metadata, action (or
  selectable affordance).
- **Visual hierarchy:** title first, then status, then description; action last and clear.
- **State behavior:** default, hover/focus, selected, unavailable (honest, layout-stable).
- **Accessibility:** real `button`/link; accessible name; icon decorative (`aria-hidden`).
- **Anti-patterns:** identical primary buttons on every card; overloaded card; color-only status.

## Status alert

- **Required content:** severity icon, concise message, optional action; correct ARIA role.
- **Visual hierarchy:** icon + message read together; severity obvious without color alone.
- **State behavior:** info / success / warning / error using verified 600 semantic colors (`16`).
- **Accessibility:** `role="alert"`/`status` as appropriate; not color-only; dismissable if relevant.
- **Anti-patterns:** error styling for normal actions; vague text; alert overload.

## Result summary

- **Required content:** outcome status (icon + label + verified color), reference/identifier,
  supporting detail, next step.
- **Visual hierarchy:** outcome first and largest; reference clearly labeled; detail secondary.
- **State behavior:** success, rejected, pending/under-review, not-available.
- **Accessibility:** status not by color alone; reference LTR and selectable; announced on load.
- **Anti-patterns:** vague outcome, missing reference, success styling for non-success.

## Upload panel

- **Required content:** instructions, accepted formats/limits, drop/select control, file list with
  per-file status, remove/replace.
- **Visual hierarchy:** instruction → control → file status; limits visible, not hidden.
- **State behavior:** empty, uploading (progress), success, error (with fix), invalid type/size.
- **Accessibility:** keyboard-operable control; announce progress and errors; codes/IDs LTR.
- **Anti-patterns:** hidden limits, no progress, dead-end errors.

## Form section

- **Required content:** section heading, grouped fields with visible labels, help text near fields,
  required/optional marks.
- **Visual hierarchy:** heading → fields → help/errors; related fields grouped by proximity.
- **State behavior:** default, focus, error (specific message), disabled.
- **Accessibility:** programmatic labels; errors linked to fields and announced; logical tab order.
- **Anti-patterns:** placeholder-as-label; inconsistent required marking; far-away help text.

## Stepper

- **Required content:** step labels with current/completed/upcoming states; current step emphasized.
- **Visual hierarchy:** current step clearly distinct; progress legible at a glance.
- **State behavior:** completed, current, upcoming, error-on-step.
- **Accessibility:** convey current step to assistive tech; RTL flow right-to-left (next → left).
- **Anti-patterns:** wrong RTL direction; unclear current step; no back navigation.

## Empty state

- **Required content:** brief explanation of what will appear, and a next action.
- **Visual hierarchy:** message first, action clear; calm, not alarming.
- **State behavior:** distinct from loading and error states.
- **Accessibility:** readable, focusable action; not conveyed by illustration alone.
- **Anti-patterns:** blank screen; treating empty as an error; no next step.

## Dashboard metric card

- **Required content:** label, value, short context/trend or timeframe.
- **Visual hierarchy:** value prominent; label above/beside; context secondary.
- **State behavior:** loading (skeleton), empty/no-data, error.
- **Accessibility:** numerals LTR; sufficient contrast; not color-only for trend.
- **Anti-patterns:** decorative figures without context; colour overload.

## Data table

- **Required content:** semantic headers, rows, status cells, sort affordance, pagination if needed.
- **Visual hierarchy:** headers clear; key columns prioritized; alignment consistent.
- **State behavior:** loading, empty, no-results-after-filter, error.
- **Accessibility:** `th`/`scope`, accessible sort, RTL-aware alignment, numerals LTR.
- **Anti-patterns:** non-semantic table markup; color-only status; cramped/overflowing on mobile.

## Footer

- **Required content:** entity identity, support/accessibility/privacy-style links, consistent
  navigation.
- **Visual hierarchy:** grouped links; quiet but deliberate; not an afterthought.
- **State behavior:** consistent across pages.
- **Accessibility:** semantic `footer`/`nav`; focusable links; logical order.
- **Anti-patterns:** afterthought footer; missing support/accessibility links; unauthorized marks.

See also: `04-components.md`, `05-forms-and-inputs.md`, `24-high-fidelity-polish-rules.md`,
`27-design-quality-gate.md`.
