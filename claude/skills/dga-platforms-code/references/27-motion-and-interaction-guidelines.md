# 27 — Motion and interaction guidelines

> Supporting design-review guidance. It aligns with — and never overrides — DGA Platforms Code
> and the verified references (`13`–`16`) and tokens (`tokens/`). It introduces no official DGA
> rules, tokens, spacing, components, animation assets, or compliance claims. The methodology here
> is generic — inspired only at the level of *how to reason about motion*, not any third-party
> animation style, library, or asset.

Use this when deciding whether and how an interface should move. In a government context, motion is a
quiet tool for comprehension and feedback — never decoration.

## Core principle: motion must earn its place

- Motion must be **subtle, purposeful, and accessible**.
- It should support exactly one of: **comprehension, feedback, loading, transitions, or hierarchy**.
- If a motion does not help the user understand or complete the task, remove it.

## Decide intent before implementation

Before adding any motion, answer: **what does it communicate?**

- **Feedback** — acknowledge a user action (press, toggle, submit) so the system feels responsive.
- **Continuity / transition** — connect two states so the user keeps their place (open/close,
  step→step, expand/collapse).
- **Attention / hierarchy** — guide the eye to a changed or important region, briefly and gently.
- **Loading / progress** — communicate that work is happening, calmly and predictably.

If a motion fits none of these, it is decoration — do not add it.

## What to avoid

- Decorative or "flashy" animation that draws attention without informing.
- Playful, luxury, gaming, or marketing-style motion; bouncing, springy, or attention-seeking effects.
- Heavy scroll-triggered animation, parallax, auto-playing motion, or long elaborate sequences.
- Motion that delays the task or blocks interaction.
- Overusing motion until the interface feels busy or unstable.

## Accessibility is non-negotiable

- **Respect `prefers-reduced-motion`.** When the user requests reduced motion, disable or
  substantially reduce non-essential animation (offer a simple fade or an instant change instead).
- **Motion is never the only signal.** State (success, error, warning, loading, selected) must always
  be conveyed by text and accessible semantics — color/icon/`role` — not by animation alone.
- Do not animate in ways that can trigger discomfort (rapid flashing, large sudden movement).
- Keep focus management correct through transitions; motion must not break keyboard or screen-reader
  flow.

## Timing and easing (keep it calm)

- Prefer short, unobtrusive durations for UI feedback; longer, elaborate timings read as decorative.
- Use simple, calm easing (ease-out for entrances, ease-in for exits); avoid bouncy/elastic curves.
- Keep timing **consistent** across similar interactions so the interface feels stable.
- These are qualitative directions, not official DGA values — map any concrete durations to the host
  project's existing motion tokens if it has them; do not invent official ones.

## Implementation discipline

- **Prefer CSS transitions** for simple hover, focus, expand/collapse, and show/hide interactions.
- **Do not introduce new animation dependencies** (e.g. GSAP, Motion, Lottie, Rive, or similar)
  unless the host project already uses them or the user explicitly approves. Reuse the project's
  existing motion stack.
- Do not copy external animation code, assets, or Lottie/Rive files into the project.
- Loading states should be calm and predictable (e.g. a simple skeleton or quiet spinner), not
  attention-grabbing.

## State-feedback patterns (motion supports, never replaces)

- **Success / error / warning:** text + accessible semantics first; a brief, optional transition may
  reinforce it, but the message stands without motion.
- **Hover / focus:** a quick, subtle transition is appropriate; focus must remain clearly visible.
- **Expand / collapse, open / close:** a short transition preserves continuity; content is reachable
  instantly when reduced motion is requested.
- **Step transitions:** keep them quick and directional (RTL-aware) so the user keeps their place.

## Quick review questions

- Does each motion communicate feedback, continuity, attention, or loading — or is it decoration?
- Is non-essential motion disabled under `prefers-reduced-motion`?
- Is every state still clear with motion removed (text + semantics)?
- Did we avoid adding a new animation dependency without approval?
- Is timing calm, consistent, and non-blocking?

See also: `18-ux-interaction-patterns.md`, `24-high-fidelity-polish-rules.md`,
`28-design-quality-gate.md`, `08-accessibility.md`.
