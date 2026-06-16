# Design-skill benchmark

A read-only methodology benchmark of three external UI/design/motion skills, used **only** to improve
the structure of this repository's design-review workflow, high-fidelity critique, and motion
guidance. DGA Platforms Code remains the source of truth.

**Boundaries for this analysis (and the whole repository):**

- External repositories were used for **read-only analysis** of methodology only. No scripts were
  executed and no dependencies were installed.
- **No third-party text, colors, fonts, spacing, assets, animations, code, or visual style** was
  copied. Where an idea is adopted, it is re-expressed as generic methodology in our own words and
  bound to verified DGA references/tokens.
- No external skill is presented as official DGA guidance. Anything adopted is **supporting
  design-review guidance** only, framed as "aligned with Platforms Code principles" — never
  "officially compliant".

---

## Anthropic frontend-design

- **Repository analyzed:** `github.com/anthropics/skills` → `skills/frontend-design/SKILL.md`
  (read-only).
- **What problem it solves:** stops AI-generated interfaces from defaulting to generic,
  interchangeable "template" looks; pushes toward distinctive yet production-grade UI.
- **What makes it strong:**
  - It grounds visual decisions in the *subject* (product, audience, page purpose) before styling.
  - It plans a small, deliberate system (a few named values for color, type, layout, and one
    signature element) instead of scattering choices.
  - It critiques the plan against generic defaults — if it could be "any app", it's revised.
  - It concentrates boldness in one place and keeps the rest disciplined; it treats copy and
    structure as design material, and motion as purposeful, not scattered.
- **Useful ideas for our DGA skill:**
  - **Diagnose / ground before designing** — identify page type, task, user, and the main decision
    first (adapted into the mandatory diagnose step and `25-page-blueprints.md`).
  - **Critique-against-defaults** — explicitly check "does this look like a generic template?"
    (adapted into `24-high-fidelity-polish-rules.md` → "avoiding generic, template-like UI").
  - **Restraint with one focal point** — fits government-grade "trust over flash".
- **What must not be copied:** its specific example aesthetics, named anti-pattern palettes, sample
  copy, or any concrete style values. We take the *method*, not the look.
- **Adapt as generic methodology:** diagnose-first, plan-a-small-system, critique-against-defaults,
  concentrate-emphasis — all re-expressed for a restrained government context and bound to verified
  tokens.
- **Risks if copied blindly:** its "distinctive / bold" emphasis can pull toward expressive,
  brand-led visuals that are wrong for government UI. We deliberately cap "distinctiveness" at
  *clarity and hierarchy*, not personality, and keep the Conservative/Modern/Data-service directions.

## UI/UX Pro Max

- **Repository analyzed:** `github.com/nextlevelbuilder/ui-ux-pro-max-skill` (read-only).
- **What problem it solves:** turns vague "make it look good" requests into structured, multi-domain
  design recommendations with a delivery/quality checklist.
- **What makes it strong:**
  - It organizes design intelligence into clear domains (industry/context rules, product types,
    style systems, color, typography, data-viz) and reasons per context.
  - It outputs a *complete* system plus a pre-launch checklist, rather than isolated tips.
  - It flags issues beyond surface visuals: interaction states and timing, accessibility (contrast,
    visible focus, keyboard), responsive breakpoints, and reduced-motion.
  - It frames per-context **anti-patterns** ("what NOT to do here").
- **Useful ideas for our DGA skill:**
  - **A structured review framework** rather than ad-hoc feedback (adapted into
    `28-design-quality-gate.md` and `19-design-critique-rubric.md`).
  - **Context-specific blueprints + anti-patterns** (adapted into `25-page-blueprints.md` and
    `22-ui-anti-patterns.md` / `24` anti-pattern section).
  - **Quality-checklist mindset** spanning interaction, accessibility, responsive, and motion.
- **What must not be copied — especially:** its **palettes, font pairings, and any proprietary
  datasets/rule libraries**, product-type taxonomies, or numeric style values. These would import a
  non-DGA visual system. We reference only verified DGA tokens (`tokens/`, refs `13`–`16`).
- **Adapt as generic methodology:** the *shape* of a scored, multi-dimension review and
  per-page-type checklists — populated entirely from DGA-aligned content.
- **Risks if copied blindly:** importing its palettes/typography/datasets would directly violate the
  source-of-truth boundary and could inject SaaS/marketing aesthetics; its breadth can also
  over-generate. We keep scope to government page types and verified tokens.

## LottieFiles motion-design-skill

- **Repository analyzed:** `github.com/lottiefiles/motion-design-skill` (read-only).
- **What problem it solves:** gives agents a way to reason about motion *intent* before
  implementation, separating purposeful motion from decoration.
- **What makes it strong:**
  - **Philosophy-first / implementation-agnostic** — decide *why* something moves before *how*.
  - Ties motion to communication goals (feedback, guiding attention, continuity, loading).
  - Thinks in terms of timing/easing matched to intent, state-feedback patterns, and choreography
    (sequence/stagger mirroring hierarchy).
- **Useful ideas for our DGA skill:**
  - **Intent-before-implementation** for motion (adapted into
    `27-motion-and-interaction-guidelines.md`: motion must support comprehension, feedback, loading,
    transitions, or hierarchy — else remove it).
  - **State-feedback as the home for micro-motion**, paired with the rule that motion never replaces
    text/semantics for state.
  - **Calm, consistent timing** as a quality signal.
- **What to avoid — especially:** its playful/expressive/branded motion language, elaborate
  choreography, and any Lottie/Rive assets or animation code. Government UI motion is minimal.
- **Adapt as generic methodology:** the intent-first decision framing and state-feedback vocabulary,
  re-expressed as *subtle, accessible, reduced-motion-respecting* CSS-first guidance.
- **Risks if copied blindly:** motion-design tools naturally encourage richer animation and new
  dependencies (Lottie/Rive/JS libraries). We explicitly forbid new animation dependencies without
  approval, forbid decorative/flashy motion, and require `prefers-reduced-motion` support.

---

## Adopted principles for this repository

We adopt only the following, all bound to DGA Platforms Code as the source of truth:

- **Diagnose why a UI looks basic before redesigning** — page type, task, user, main decision, and
  the main hierarchy/content/interaction/RTL-accessibility issues (see `SKILL.md` workflow, `25`).
- **Propose 2–3 restrained government-grade design directions before coding** — Conservative
  official, Modern official, Data-service official (`23-design-direction-framework.md`).
- **Use page blueprints instead of generic layouts** (`25-page-blueprints.md`).
- **Improve hero, cards, CTAs, content, state handling, header, footer, and mobile density**
  (`24-high-fidelity-polish-rules.md`, `26-component-anatomy-polish.md`).
- **Use an internal design quality gate** (`28-design-quality-gate.md`) — internal review only, never
  official compliance; if any item scores below 3, fix it before finishing.
- **Add subtle motion only when it improves understanding, feedback, loading, or transition
  clarity** (`27-motion-and-interaction-guidelines.md`).
- **Respect `prefers-reduced-motion`**, and never communicate state by motion alone.
- **Avoid decorative, playful, luxury, gaming, or animation-heavy styles**, and avoid new animation
  dependencies without approval.
- **Preserve DGA source-of-truth boundaries** — verified tokens, typography, semantic colors,
  security rules, compliance disclaimers, copyright, and the "aligned with Platforms Code principles"
  wording are unchanged. No third-party text, assets, palettes, fonts, spacing, or code was copied.
