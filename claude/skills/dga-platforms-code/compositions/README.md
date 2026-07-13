# Compositions — operational composition system

This directory turns the conceptual composition archetypes in
[`../references/20-composition-selection.md`](../references/20-composition-selection.md) into
operational, reusable, task-driven **structure** guidance. Each composition defines page regions,
dominant element, hierarchy, navigation, density, and responsive transformation — and offers 2–3
structurally distinct variants — so Claude can vary structure by task instead of defaulting to a
dashboard or card grid.

**Status:** Interpretive operational guidance
**Authority:** Secondary to official DGA sources and verified extractions
**Official DGA token override:** No
**Compliance claim:** No
**Purpose:** Design decision support for Claude Code

This is interpretive operational guidance, not an official DGA extraction. It defines **structure
only**; it does **not** override verified tokens (`../tokens/`), define visual styling, or constitute
official DGA compliance. The official DGA sources and verified extractions remain authoritative.

## What a composition is

A composition is the **structural organization** of an experience for a given task: which regions
exist, which one dominates, how information is prioritized, how the user navigates, how dense it is,
and how it transforms across breakpoints. It is layout logic expressed as regions and hierarchy — not
pixels.

## What a composition is not

- **Not a template.** A template is an implementation example (`../templates/`). A composition is the
  reasoning a template would express; many templates can realize one composition.
- **Not a visual profile.** A visual profile is visual character / art direction
  (`../references/21-visual-profile-selection.md`) — density feel, surface depth, motion. A composition
  says *where things go*; a profile says *how they look*. Keep them separate.
- **Not a component.** A component is a reusable interface primitive (`../components/`,
  `../references/30-component-library.md`). Compositions arrange components; they do not define them.
- **Not visual styling.** No colors, themes, CSS, React, Tailwind, or HTML live here.

| Concept | Question it answers | Lives in |
|---------|---------------------|----------|
| Composition | Where do regions go, what dominates, how does it flow? | `compositions/` |
| Template | What does one concrete implementation look like? | `templates/` |
| Visual profile | What visual character / art direction? | `references/21` (conceptual; not built yet) |
| Component | What reusable primitive? | `components/`, `references/30` |

## How Claude selects a composition

1. Run the Design Direction Gate first (`../references/19-design-direction-framework.md`): establish
   product class (`../references/18-...`) and dominant task.
2. Map the primary task to a composition using the selection flow below and the matrix in
   `../references/20-composition-selection.md`.
3. Open that composition's `composition.md`, then choose a justified **variant** from its
   `variants.md`.
4. State the dominant element and the structural regions before implementing, and preserve them.

### Compact selection flow

```
What is the user's primary task?
├─ Complete a procedure step-by-step        → guided-service-flow
├─ Judge evidence and record a ruling       → verification-workbench
├─ Answer a question from data / monitor    → analytical-canvas
├─ Triage a queue, progress items fast      → operational-workspace
├─ Work one rich, long-lived case in full   → case-management-split-view
├─ Read / understand / navigate onward      → narrative-portal
└─ Capture on site, one action at a time    → mobile-action-stack
```

Two adjacent choices are resolved by their `composition.md` **Selection cues**. The most common
confusion — queue vs. rich case — is resolved explicitly: choose **operational-workspace** for queue
handling, assignment, and lightweight state changes; choose **case-management-split-view** when the
case needs rich history, evidence, timeline, participants, and extended context.

## How variants are chosen

Each composition offers 2–3 variants that differ **structurally** — in dominant region, ordering,
split model, navigation, drill-down pattern, density, interaction sequence, or responsive
transformation — never only by color, spacing, radius, shadow, typography, or accent. Pick the variant
whose "Best for" and "Structural model" match the task; record why.

## Multiple compositions in one product

A product may use different compositions on different screens (e.g. a public **narrative-portal**
landing that leads into a **guided-service-flow**; an **operational-workspace** queue that opens a
**verification-workbench** for a flagged item). Keep each screen's composition internally consistent;
switch composition at a genuine task boundary, not mid-screen.

## Composition across breakpoints

Composition is responsive by definition. Each `composition.md` specifies Desktop / Tablet / Mobile
transformation. A split or master–detail composition may collapse to a stacked or list→detail model on
mobile — the *structure* adapts, the dominant element is preserved. See
`../references/09-responsive-mobile.md`.

## Why dashboards and card grids are not universal defaults

A dashboard suits data monitoring; a card grid suits genuinely discrete, comparable choices. Applied
everywhere, they bury the real task behind KPI walls and uniform cards, flatten hierarchy, and make
every product look identical. Compositions make the default **the task's own structure**, and every
composition here lists anti-patterns that forbid the reflexive dashboard/card-grid fallback. See
`../references/22-variation-and-repetition-control.md`.

## Directory structure

```
compositions/
├── README.md                       (this file)
├── composition.schema.json         (machine-readable record shape)
├── guided-service-flow/            composition.md + variants.md
├── verification-workbench/         composition.md + variants.md
├── analytical-canvas/              composition.md + variants.md
├── operational-workspace/          composition.md + variants.md
├── case-management-split-view/     composition.md + variants.md
├── narrative-portal/               composition.md + variants.md
└── mobile-action-stack/            composition.md + variants.md
```

## Maintenance

- Keep folder names lowercase kebab-case and aligned with the archetype names in `references/20`.
- Every `composition.md` uses the same section order (see any existing file); every `variants.md` uses
  the same per-variant section order. Keep them enforceable and structural — no visual styling.
- Compositions stay subordinate to official sources and verified extractions; add no token values and
  make no compliance claims.
- Record additions in `CHANGELOG.md`, `sources.md`, and `SOURCE_MATRIX.md` as interpretive /
  implementation guidance, and keep internal links valid.
