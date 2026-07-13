# 21 — Visual profile selection

A **visual profile** is the broad visual direction of a product — its density, surface behavior,
depth, visualization emphasis, and motion — chosen from the product class and composition. This file
defines the profiles **conceptually only**. It does **not** implement them: no profile folders, no CSS,
no themes, no dark mode are created in this phase. Selecting a profile here means naming a direction
and its constraints, then implementing within the existing verified tokens and components.

**Status:** Interpretive operational guidance
**Authority:** Secondary to official DGA sources and verified extractions
**Official DGA token override:** No
**Compliance claim:** No
**Purpose:** Design decision support for Claude Code

This is interpretive operational guidance, not an official DGA extraction. Visual profiles are
**interpretive extensions**. They do **not** override official semantic colors, and they must **not**
redefine verified DGA tokens (`tokens/`) as official values or constitute official DGA compliance.

## Accent theming vs visual profile

These are different scopes and must not be confused:

- **Accent theming** (`references/17-accent-theming.md`) is a **narrow color-role variation**: switch
  only the primary accent among the **verified** palettes (green / gold / lavender). Semantic colors,
  neutrals, typography, spacing, and the green chart scheme stay fixed. Accent theming does **not**
  create a complete visual system, and changing the accent is **not** a new design direction
  (`references/22-variation-and-repetition-control.md`).
- **A visual profile** is a **broader direction** involving composition, density, depth/surfaces,
  visualization emphasis, and motion. A profile chooses *how the product feels and is structured*;
  the accent is a small decision made inside it.

## Conceptual profiles

### Government Service
- **Suitable contexts:** citizen procedures, public-facing services (Guided Service Flow).
- **Tone:** calm, official, reassuring, uncluttered.
- **Preferred density:** low.
- **Light / dark / hybrid:** light.
- **Surface behavior:** flat sections, minimal cards, generous spacing.
- **Visual emphasis:** the current step and the primary action.
- **Motion level:** minimal, functional only.
- **Visualization priority:** none to incidental.
- **Prohibited misuse:** analytics chrome, KPI headers, marketing gloss, dark/cinematic styling.

### Regulatory Workspace
- **Suitable contexts:** verification, licensing, audit rulings (Verification Workbench, Case
  Management Split View).
- **Tone:** serious, precise, evidence-forward, trustworthy.
- **Preferred density:** medium–high, concentrated on evidence.
- **Light / dark / hybrid:** light (long reading sessions; preserve contrast and legibility).
- **Surface behavior:** split panes and structured regions; cards only for discrete records.
- **Visual emphasis:** the evidence and the decision.
- **Motion level:** minimal, functional.
- **Visualization priority:** low; figures are contextual, not decorative.
- **Prohibited misuse:** decorative KPI walls, hero banners, shrinking evidence into a card.

### Operational Command
- **Suitable contexts:** queues, coordination consoles, all-day operations (Operational Workspace).
- **Tone:** efficient, dense, utilitarian.
- **Preferred density:** high.
- **Light / dark / hybrid:** light by default; a hybrid/dark surface may be justified for
  continuous-monitoring wall displays — decide by environment, never by "it uses AI."
- **Surface behavior:** tables and panes over cards; persistent action bars.
- **Visual emphasis:** the queue and the active item.
- **Motion level:** minimal; avoid animation that slows repeated use.
- **Visualization priority:** supporting signals only, tied to the work.
- **Prohibited misuse:** guided-flow chrome, decorative charts above the queue, over-carding.

### Data Intelligence
- **Suitable contexts:** analytics, monitoring, planning, long-use analytical systems (Analytical
  Canvas). **This is the practical, default profile for long-use analytical systems** — including most
  AI-assisted monitoring — not Cinematic AI.
- **Tone:** focused, analytical, quiet chrome so data leads.
- **Preferred density:** high but focused around the lead question.
- **Light / dark / hybrid:** light or hybrid; a darker analytical surface is legitimate for
  data-dense monitoring if contrast and accessibility hold — justify by task, not by AI branding.
- **Surface behavior:** one dominant visualization, restrained surfaces around it.
- **Visual emphasis:** the primary chart answering the lead question.
- **Motion level:** functional (transitions on filter/drill), not expressive.
- **Visualization priority:** high — but every chart answers a question.
- **Prohibited misuse:** equal-weight KPI grids, decorative charts, gradients/glow as "AI" signaling.

### Field Mobile
- **Suitable contexts:** on-site capture and inspection (Mobile Action Stack).
- **Tone:** robust, legible, thumb-first.
- **Preferred density:** low.
- **Light / dark / hybrid:** light with high contrast for outdoor/sunlight legibility.
- **Surface behavior:** single-column stacks, large targets, clear state (incl. offline/sync).
- **Visual emphasis:** the current action / capture control.
- **Motion level:** minimal.
- **Visualization priority:** none to incidental.
- **Prohibited misuse:** desktop dashboards on mobile, small targets, hover-dependent UI.

### Public Editorial
- **Suitable contexts:** public information, guidance, service discovery (Narrative Portal).
- **Tone:** clear, welcoming, readable.
- **Preferred density:** low–medium, editorial rhythm.
- **Light / dark / hybrid:** light.
- **Surface behavior:** readable single column; cards only for genuine choices.
- **Visual emphasis:** the message and the onward action.
- **Motion level:** minimal.
- **Visualization priority:** low; illustrative only where it aids comprehension.
- **Prohibited misuse:** admin tables, KPI tiles, workspace chrome around an article.

### Cinematic AI
- **Suitable contexts:** **exhibitions, launch screens, demos, large displays, and executive
  experiences** — seen briefly, for impact. Not for daily-use systems.
- **Tone:** high-impact, deliberate, spacious.
- **Preferred density:** very low — a few large elements.
- **Light / dark / hybrid:** dark or dramatic is acceptable *here* because the context is presentation,
  not sustained work.
- **Surface behavior:** large focal elements, deliberate depth; effects only where they carry meaning.
- **Visual emphasis:** one headline message or a small set of signals.
- **Motion level:** expressive is acceptable, but purposeful — never gratuitous.
- **Prohibited misuse:** applying this to operational tools, review workbenches, or analytics people
  use all day; using dark/cinematic styling **just because a system uses AI**. AI capability is not a
  reason for cinematic styling — the *context* (exhibition/executive) is.

## Hard rules

- Visual profiles are interpretive extensions; the official sources and verified extractions remain the
  authority.
- Profiles must not override official semantic colors (success/error/warning/info) or the green data
  scheme.
- Profiles must not redefine verified DGA tokens as official values, and must assert no official
  compliance.
- Do not apply dark or cinematic styling because a system uses AI. Choose the profile from context and
  task; for AI-assisted long-use systems that is **Data Intelligence**, not Cinematic AI.
- Cinematic AI is appropriate mainly for exhibitions, launch screens, demos, large displays, and
  executive experiences.

**Output of this step:** one profile, its density/surface/motion/visualization constraints, and any
prohibited misuse to record in the brief (`19`).

See also: `references/17-accent-theming.md`, `references/18-product-experience-classification.md`,
`references/20-composition-selection.md`, `references/22-variation-and-repetition-control.md`.
