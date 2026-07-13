# 22 — Variation and repetition control

Enforceable rules that stop the skill producing the same product every time. Repetition here means:
reusing the hero + KPI-card + card-grid dashboard for unrelated products and changing only the accent
color. Variation must be **driven by task, context, risk, density, or environment** — never by novelty
for its own sake, and never by color alone.

**Status:** Interpretive operational guidance
**Authority:** Secondary to official DGA sources and verified extractions
**Official DGA token override:** No
**Compliance claim:** No
**Purpose:** Design decision support for Claude Code

This is interpretive operational guidance, not an official DGA extraction. It does **not** override
verified tokens (`tokens/`) or constitute official DGA compliance.

## Rules

- **Accent color is not a design direction.** Switching green → gold → lavender
  (`references/17-accent-theming.md`) does **not** count as a new or different design. It changes one
  color role, nothing else.
- **Vary at least three design dimensions** for a new product, where the context permits. If context
  genuinely forces similarity (see below), say so explicitly rather than pad with fake variety.
- **Design dimensions** (vary across these, not within color):
  - composition (`references/20-composition-selection.md`)
  - hierarchy (what dominates)
  - navigation model
  - density
  - surface treatment (flat / cards / split panes / editorial)
  - visualization style
  - interaction pattern
  - hero treatment (including "no hero")
  - dominant element
  - responsive transformation
- **Do not reuse the generic dashboard structure** unless the products genuinely share the same
  operational model (e.g. two queue tools of the same kind). Same industry ≠ same operational model.
- **Do not use uniform cards for unrelated content.** Identical cards imply equal weight; unrelated
  things are not equal.
- **Do not add gradients, glass, glow, or particles without a functional or contextual reason.**
  "It uses AI" is not a reason (`references/21-visual-profile-selection.md`).
- **Do not create visual novelty that harms clarity, accessibility, or trust.** Trust, accessibility,
  and task clarity outrank distinctiveness every time.
- **Do not randomize layouts to look different.** Difference must trace to a task/context reason.
- **Reuse component primitives while varying composition.** The `components/` primitives and verified
  `tokens/` stay consistent; the arrangement, hierarchy, and density change.
- **Maintain consistency within a product family.** Screens of the *same* product share their pattern;
  variation is between *different* products, not within one.

## When similarity is legitimate

Two products may share a structure when they share the same class **and** operational model **and**
dominant task (e.g. two verification workbenches for different document types). In that case, keep the
shared composition and differentiate only where the task differs. State the shared model explicitly in
the brief (`19`) so the similarity is a decision, not a default.

## Repetition audit checklist

Before finalizing, confirm:

- [ ] The composition was chosen from the class/task (`20`), not carried over from the last product.
- [ ] This layout differs from the previous product in ≥3 design dimensions (or the shared model is
      stated).
- [ ] The design is not "the same dashboard with a different accent."
- [ ] The dominant element matches the product's real primary task.
- [ ] No structure was copied from a previously generated app without a task reason.

## Visual distinctiveness checklist

- [ ] Hierarchy is driven by the dominant element, not by a default KPI header.
- [ ] Navigation fits the task (stepped / split / master-detail / top / minimal), not "sidebar by
      default."
- [ ] Density matches the class (low for service/field, high for operations/analytics).
- [ ] Any hero exists for a reason; low-density service/operational tools may have no hero.
- [ ] Distinctiveness comes from structure and hierarchy — not from adding effects.

## Card-overuse checklist

- [ ] Cards are used for genuinely discrete, comparable items — not to wrap every section.
- [ ] KPIs are not a decorative wall above the task; they are a strip, inline value, table summary, or
      contextual figure where they belong.
- [ ] Tables, split panes, and flat sections are used where they fit better than cards.
- [ ] The actual user task sits above/ahead of any summary metrics, not beneath them.

## Valid vs invalid variation

**Valid** (task-driven):
- A citizen service uses a Guided Service Flow (stepped, low density, no KPIs); a review tool for the
  same entity uses a Verification Workbench (split, evidence-dominant). Different composition,
  hierarchy, navigation, density.
- An analytics product leads with one dominant chart answering the key question; an operations product
  leads with a dense queue. Different dominant element, density, visualization.
- A field app is a single-column action stack with large targets; the desk tool for the same domain is
  a multi-pane workspace. Different composition, density, responsive model.

**Invalid** (cosmetic / repetition):
- The same hero + four equal KPI cards + card grid, re-skinned from green to gold, called a "new
  design."
- Wrapping an article, a queue, and a form all in identical card grids.
- Adding gradients, glow, or a dark theme to a daily operational tool to make it "look like AI."
- Reordering or recoloring tiles while keeping identical composition, hierarchy, and navigation.

See also: `references/17-accent-theming.md`, `references/20-composition-selection.md`,
`references/21-visual-profile-selection.md`, `references/12-design-review-checklist.md`.
