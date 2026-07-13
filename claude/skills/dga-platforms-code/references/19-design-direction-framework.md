# 19 — Design direction framework (the Design Direction Gate)

This is the **mandatory decision gate** between reading the references and planning layout. Before you
create or redesign any frontend, complete the design brief below. Its purpose is to decide *what kind
of experience this product is* so the layout follows the task — instead of defaulting to a dashboard
and changing only the accent color.

**Status:** Interpretive operational guidance
**Authority:** Secondary to official DGA sources and verified extractions
**Official DGA token override:** No
**Compliance claim:** No
**Purpose:** Design decision support for Claude Code

This is interpretive operational guidance, not an official DGA extraction. It does **not** override
verified tokens (`tokens/`) or constitute official DGA compliance. Everything below is a design
decision aid; the official sources and verified extractions remain the authority.

## The design brief

Fill every field. Keep answers to a phrase or one line. If a field is unknown, write an explicit
assumption (see "When to assume vs ask").

### Product context
- **Product name** —
- **Product class** — one primary + optional secondary (`references/18-product-experience-classification.md`).
- **Primary users** — who, and their digital literacy.
- **Primary goal** — the single outcome the product exists to produce.
- **Main tasks** — the 1–3 things users actually do.
- **Environment** — office / field / public / large display; connectivity; lighting.
- **Device** — primary device, then secondary.
- **Frequency** — one-off / occasional / daily / continuous.
- **RTL / language** — Arabic-first? bilingual? (RTL is a baseline, not a variable.)
- **Entity identity** — issuing entity and any tone constraints; accent decided later (`17`).

### Experience
- **Information density** — low / medium / high, and where the density concentrates.
- **Interaction complexity** — read-only / simple input / multi-step / expert workspace.
- **Decision criticality** — low / medium / high / authoritative.
- **Data intensity** — none / incidental / metrics-supporting / data-is-the-product.
- **Content type** — procedure / evidence / queue / dataset / article / headline.
- **Session duration** — seconds / minutes / a working shift.

### Direction
- **Visual direction** — one conceptual profile (`references/21-visual-profile-selection.md`).
- **Secondary influence** — optional, at most one.
- **Composition archetype** — one archetype (`references/20-composition-selection.md`).
- **Navigation model** — top / side / stepped / split / minimal.
- **Dominant screen element** — the one thing that must own the screen (the task, the evidence, the
  queue, the primary chart, the message). Exactly one.
- **Surface strategy** — how surfaces are used (flat sections / few cards / split panes / editorial
  flow). Not "cards everywhere by default."
- **Visualization strategy** — none / inline values / one primary chart / analytical canvas, and the
  **question each chart answers**.
- **Motion character** — none / functional-only / expressive (justify anything beyond functional).
- **Patterns to avoid** — the specific defaults this product must NOT fall into (`references/22-variation-and-repetition-control.md`).
- **Assumptions** — anything inferred that a human should confirm.

## When to infer, assume, or ask

- **Infer from repository context** when the answer is already visible: existing routes, data
  contracts, entity, current components, and prior screens tell you the class, device, and content
  type. Prefer inference over interrogation.
- **State an assumption** when a field is unknown but low-risk to assume (e.g. "assume desktop-primary
  because this is an internal review tool"). Record it in **Assumptions** and proceed.
- **Ask the user** only when the answer materially changes the direction and cannot be inferred — for
  example: is this an all-day operational tool or a one-off executive view? Is data the product or a
  supporting signal? One or two targeted questions, not a questionnaire.
- **Do not ask unnecessary questions.** Never ask about anything the repo already answers, and never
  ask about accent color as a way of choosing direction.

## When to present two directions

Present **two structurally different directions** only when the direction is genuinely unclear after
inference, or when the user asks for options. When you do:

- The two directions must differ in at least one of: **composition, hierarchy, interaction model,
  density, or navigation.**
- They must **not** differ only by color, accent, or minor styling. Two accent variations of the same
  dashboard is not two directions.
- State the task/context trade-off that separates them, and recommend one.

Otherwise, commit to a single direction and say why.

## Output of the gate

A completed brief (concise — a phrase per field), the primary class, the chosen composition and
profile, the single dominant element, and the explicit patterns to avoid. This feeds planning; no
frontend code is written during the gate.

See also: `references/18-product-experience-classification.md`,
`references/20-composition-selection.md`, `references/21-visual-profile-selection.md`,
`references/22-variation-and-repetition-control.md`, and the reusable prompt
`prompts/00-establish-design-direction.md`.
