# 24 — High-fidelity polish rules

> Supporting design-review guidance. It aligns with — and never overrides — DGA Platforms Code
> and the verified references (`13`–`16`) and tokens (`tokens/`). It introduces no official DGA
> rules, tokens, spacing, components, or compliance claims. All emphasis is built only from verified
> type (`14`), semantic colors (`16`), and project/verified spacing — nothing invented.

Use this after structure is in place to take a screen from "functional but basic" to polished and
high-fidelity, while staying calm and official.

## Hero

- Must clearly explain the service in one short heading plus a brief supporting line.
- Must surface the primary task **above the fold**; the primary action is visible without scrolling.
- Must not contain long paragraphs — lead with the task, not prose.
- Must not feel empty on desktop: balance the hero with supporting structure (requirements, steps,
  or key facts) rather than large blank space.

## Cards

- Consistent anatomy: **title, short description, icon/status, supporting metadata, action.**
- Scannable within ~2 seconds; the title and status read first.
- Cards in a grid share height/width and padding for a calm layout.
- Do not make every card carry an identical primary button unless that is genuinely the best
  pattern; otherwise prefer selection-first then one global action (see CTA below).
- One coherent idea per card; never overload.

## CTA

- One primary action per decision area; everything else is visibly quieter.
- Repeated identical CTAs across many cards should be reviewed — they usually weaken hierarchy.
- When users choose among multiple categories/options, consider **selection-first then one global
  CTA** instead of a button on every card.
- Destructive/irreversible actions are de-emphasized and confirmed, naming the consequence.
- Labels are specific verbs (see `20-government-service-content-patterns.md`).

## Spacing

- Layout and spacing are **official foundations** (`15-layout-and-spacing-page-extraction.md`); treat
  them as a quality gate.
- Exact numeric spacing tokens are **not verified** unless available from official or project tokens.
  Use project/verified spacing; do not invent values.
- Avoid arbitrary one-off spacing and repeated magic numbers.
- Avoid excessive empty desktop space; avoid cramped mobile cards. Aim for consistent rhythm between
  sections and consistent padding within components.

## Icons

- Icons must support meaning, reinforcing the label — not decorate.
- Remove icons that add clutter without aiding comprehension.
- Directional icons/arrows must be RTL-correct; non-directional and Latin/code content is not
  mirrored (see `07-arabic-rtl.md`).

## Footer / Header

- Should reinforce trust: clear identity, current-location cues, and consistent navigation.
- Footer should include support / accessibility / privacy-style links where appropriate.
- Neither should look like an afterthought — give them deliberate structure and spacing.
- Only render official logos/emblems with authorization.

## Quick polish checklist

- [ ] Hero explains the service and shows the primary task above the fold; no long paragraphs; not empty.
- [ ] Cards have full anatomy, are scannable, and don't all repeat an identical primary button.
- [ ] One primary CTA per decision area; selection-first considered for category choices.
- [ ] Spacing is consistent, from project/verified tokens; no arbitrary values; not empty, not cramped.
- [ ] Icons aid meaning; directional icons RTL-correct.
- [ ] Header and footer reinforce trust and are deliberately structured.

See also: `17-visual-hierarchy-and-composition.md`, `23-design-direction-framework.md`,
`26-component-anatomy-polish.md`, `27-design-quality-gate.md`.
