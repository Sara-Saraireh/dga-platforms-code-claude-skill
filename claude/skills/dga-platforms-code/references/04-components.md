# 04 — Components

Confirm anatomy and states against https://design.dga.gov.sa/guidelines/components and the official
Figma/Storybook libraries when available. Each component below lists practical rules and common
mistakes to avoid.

## What components are (Platforms Code Guide v1.0)

Components are the **basic building blocks used to build user interfaces**. They are designed to be
consistent, easy to use, and easy to understand. Examples include: buttons, input fields, forms,
lists, icons, navigation bars, notifications, and cards. (The guide lists 55 components.)

Rules:

- Prefer reusable components over one-off UI.
- Keep component states consistent.
- Use cards, alerts, badges, buttons, and navigation consistently.
- Use **semantic colors for state-specific components only** (Error/Warning/Success/Info 600 — see
  `16-semantic-colors-extraction.md`); do not rely on color alone for alerts or statuses.
- Do not invent custom behavior when an official pattern exists.
- Exact anatomy and states must be checked against live official sources or official design assets
  when needed.

## Buttons

- Rules: one primary action per view; use real `<button>` (or framework button) elements; clear
  hover/focus/active/disabled/loading states; concise verb labels in Arabic; adequate target size.
- Avoid: multiple competing primary buttons; buttons made from `<div>`/`<a>` without semantics;
  removing focus outlines; vague labels ("OK", "إرسال" where a precise verb is clearer); color-only
  disabled state.

## Cards

- Rules: consistent padding, radius, and elevation; one clear purpose per card; an obvious action if
  interactive; keyboard-focusable when clickable.
- Avoid: overloading a card with unrelated content; inconsistent card sizes in a grid; making the
  whole card a link while burying a separate action inside it.

## Badges

- Rules: short label, consistent vocabulary, paired with an icon or text meaning; map each status to
  a consistent color.
- Avoid: color-only badges; inventing new status terms; using badges as decoration.

## Alerts

- Rules: match severity (info/success/warning/error) to meaning; concise, actionable text; correct
  role (`role="alert"`/`status`) so it is announced; place near the relevant content.
- Avoid: alert overload; using error styling for non-errors; alerts that disappear before they can
  be read; relying on color alone.

## Tabs

- Rules: use semantic tab patterns with keyboard support (arrow keys, focus management); clearly mark
  the active tab; keep tab labels short.
- Avoid: tabs that hide critical steps of a linear flow (use a stepper instead); losing state when
  switching tabs; non-keyboard-operable tabs.

## Tables

- Rules: semantic `<table>` with `<th scope>`; RTL-aware alignment (text start-aligned, numbers
  handled consistently); accessible sorting controls; sensible empty and loading states; responsive
  strategy for small screens.
- Avoid: layout tables; div-grids pretending to be tables; horizontal overflow with no affordance;
  sorting that isn't keyboard/screen-reader accessible.

## Modals

- Rules: trap focus while open; restore focus to the trigger on close; escape to dismiss; labelled by
  its heading; backdrop click behavior consistent and intentional.
- Avoid: modals for complex multi-step tasks better served by a page; nested modals; background
  content remaining scrollable/focusable; no keyboard close.

## Empty states

- Rules: explain why it's empty and what to do next; offer the primary action when relevant; keep
  tone calm and helpful.
- Avoid: blank screens; dead ends with no next step; jokey or marketing copy.

## Loading states

- Rules: show progress for longer operations; preserve layout (avoid jumps); use skeletons or
  spinners consistently; announce busy state to assistive tech.
- Avoid: frozen UI with no feedback; layout shift when content arrives; infinite spinners with no
  timeout or error path.

## Error states

- Rules: explain what went wrong in plain Arabic and how to recover; preserve user input; offer a
  retry or alternative; log technical detail without exposing it to the user.
- Avoid: raw stack traces or codes shown to users; losing entered data; blaming the user; dead ends.

## Result summary cards

- Rules: state the outcome plainly with a clear status (icon + label + color); show key supporting
  details and any reference/identifier; provide next steps; reflect the server's source of truth.
- Avoid: ambiguous outcomes; fabricating a result on the client; burying the status; color-only
  status.

## Status indicators

- Rules: consistent mapping of status → label, icon, and color across the product; accessible names;
  concise text.
- Avoid: inconsistent vocabulary for the same state; color-only indication; overusing the success
  color for non-success states.
