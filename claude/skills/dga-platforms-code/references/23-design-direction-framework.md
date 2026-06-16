# 23 — Design-direction framework

> Supporting design-review guidance. It aligns with — and never overrides — DGA Platforms Code
> and the verified references (`13`–`16`) and tokens (`tokens/`). It introduces no official DGA
> rules, tokens, spacing, components, or compliance claims. DGA Platforms Code remains the source
> of truth; the directions below are restrained, government-grade framings of *how* to apply it —
> not alternative design systems.

Use this when a redesign needs a clear visual direction before coding. Propose **2–3** of the
directions below, then implement the most suitable one. Each direction stays within the verified
typography (`14`), semantic colors (`16`), and project/verified spacing — none of them introduce new
tokens.

These are **supporting design-review directions, not official DGA categories** — a way to frame a
restrained government-grade choice, never a substitute for Platforms Code.

## The three allowed government-grade directions

### 1. Conservative official
Formal, calm, minimal, highly institutional.

- **When to use:** authority-facing pages, legal/regulatory content, official notices, high-trust
  landing pages where restraint signals credibility.
- **Layout style:** single, centered column or simple two-column; generous whitespace; clear section
  breaks; predictable, classic structure.
- **Hero approach:** minimal — entity eyebrow + concise title + one-line lead + a single primary
  action above the fold; no imagery or decoration.
- **Typography behavior:** strong heading/body contrast using verified Display (headings) and Text
  (body) styles; limited type variety; no oversized display type.
- **Color behavior:** mostly neutral (Gray scale); semantic color reserved strictly for state; the
  single accent reserved for the one primary action.
- **Card/form behavior:** quiet bordered cards, low elevation, consistent padding; one idea per card;
  forms in a calm single column with clear section headings.
- **CTA behavior:** one clear primary action; secondary actions as quiet buttons/links.
- **Motion approach:** little to none — only essential feedback/focus transitions; respects
  `prefers-reduced-motion` (see `27-motion-and-interaction-guidelines.md`).
- **Risks:** can read as plain or static unless hierarchy, spacing, and typography are deliberate.
- **What to avoid:** large hero imagery, gradients, decorative motion, marketing tone.

### 2. Modern official
Clean, polished, digital-service focused — still restrained.

- **When to use:** citizen-facing digital services, service landing/selection, multi-step flows
  where a contemporary but trustworthy feel improves task completion.
- **Layout style:** clear hero with the primary task above the fold; well-structured sections with
  consistent rhythm; responsive grid for options.
- **Hero approach:** concise title + short supporting line + the primary task above the fold, balanced
  by calm supporting structure (requirements/steps/key facts) so it never feels empty.
- **Typography behavior:** confident heading hierarchy with verified Display styles; comfortable
  body measure; consistent scale across sections.
- **Color behavior:** neutral base with disciplined use of the accent for the primary action;
  semantic colors only for state.
- **Card/form behavior:** complete card anatomy (title, short description, icon/status, metadata,
  action); scannable in seconds; consistent height in a grid; forms grouped into clear sections.
- **CTA behavior:** one primary action per decision area; consider selection-first then a single
  global CTA when choosing among categories.
- **Motion approach:** subtle, purposeful transitions for hover/focus, expand/collapse, and step
  changes; nothing decorative; respects `prefers-reduced-motion` (see `27`).
- **Risks:** can drift toward SaaS gloss if accents, illustration, or motion creep in.
- **What to avoid:** SaaS/marketing gloss, oversized illustrations, color used as decoration.

### 3. Data-service official
Structured, dashboard-like; suitable for verification, inspection, case review, or administrative
workflows.

- **When to use:** dashboards, admin triage, verification/inspection, case management, data-dense
  review screens.
- **Layout style:** information-dense but calm; clear regions (filters, list/table, detail);
  consistent alignment grid; predictable density.
- **Hero approach:** a compact page/region header rather than a marketing hero; lead with the
  summary/filters and the active task.
- **Typography behavior:** compact, legible Text styles for tables/labels; Display reserved for page
  and region titles; numerals/IDs kept LTR and aligned.
- **Color behavior:** neutral surfaces; semantic colors for status, paired with text/icon (never
  color alone); accent reserved for the primary action of the active task.
- **Card/form behavior:** metric cards and result summaries with clear label → value → context;
  tables with semantic headers and RTL-aware alignment; filter forms compact and aligned.
- **CTA behavior:** task-scoped primary action per region; destructive actions de-emphasized and
  confirmed.
- **Motion approach:** minimal — calm loading/skeletons and gentle row/state feedback only; never
  animation-as-status; respects `prefers-reduced-motion` (see `27`).
- **Risks:** density can overwhelm; without clear hierarchy it reads as a wall of data.
- **What to avoid:** chart/colour overload, dashboards that decorate rather than inform.

## Each proposed direction must define

When proposing directions before coding, give each one: **layout approach**, **hero approach**,
**visual hierarchy approach**, **CTA approach**, **card/form approach**, **motion approach** (if any),
**risks**, and a **recommendation**.

## Prohibited styles

Unless the user explicitly requires it *and* it is compatible with a government context, do **not**
use: playful, luxury/premium, startup-SaaS marketing, gaming, glassmorphism-heavy, neon, or
otherwise over-decorated styles. When in doubt, choose restraint — trust over flash (see `01`).

See also: `17-visual-hierarchy-and-composition.md`, `24-high-fidelity-polish-rules.md`,
`25-page-blueprints.md`.
