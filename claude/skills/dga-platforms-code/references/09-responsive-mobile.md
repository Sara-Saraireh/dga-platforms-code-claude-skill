# 09 — Responsive and mobile

Many users access government services on phones. Design mobile-first and verify on small screens.

## Mobile-first layout

- Start from the small-screen layout and progressively enhance for larger viewports.
- Single-column by default; introduce multi-column only when space allows.
- Keep the primary action visible and reachable without long scrolling.

## Touch targets

- Ensure comfortable tap sizes and spacing for all interactive elements.
- Make icon-only controls large enough; avoid clustering small targets.
- Steppers, upload buttons, and form controls must be easily tappable.

## Card stacking

- Cards and grids collapse to a single column on small screens.
- Maintain consistent spacing and order when stacking.
- Preserve the meaning of order (don't reorder confusingly between breakpoints).

## Form layout

- Stack fields vertically on mobile; full-width inputs with clear labels above.
- Keep help and error text visible without horizontal scrolling.
- Group steps clearly; show progress compactly.

## Mobile navigation

- Collapse navigation into an accessible menu (proper button, focus management, escape to close).
- Keep current-item indication and logical order.
- Don't bury primary task actions behind deep menus.

## Upload flows on mobile

- Support camera capture and gallery selection where relevant.
- Show previews, progress, and recoverable errors that fit small screens.
- Allow retake/replace; keep already-entered data intact.

## Dashboard simplification

- On small screens, prioritize: show the most important metrics/cases first.
- Replace wide tables with stacked cards or horizontally scrollable tables with clear affordance.
- Defer secondary detail behind expand/detail views.

## Avoiding horizontal overflow

- Prevent unintended horizontal scrolling; constrain wide content (tables, code, long IDs).
- Allow controlled horizontal scroll only with a visible affordance.
- Test with long Arabic strings and long Latin identifiers.

## Arabic mobile readability

- Maintain comfortable Arabic font size and line-height on small screens.
- Keep RTL alignment and mirroring correct at every breakpoint.
- Ensure mixed Arabic/Latin content stays correctly ordered when wrapped.
