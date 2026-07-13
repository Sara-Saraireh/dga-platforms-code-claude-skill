# Evaluation — Composition System (Phase 2)

A lightweight baseline for checking that the composition system (`claude/skills/dga-platforms-code/compositions/`)
produces correct, structurally distinct **composition and variant** decisions across product types — and
that it never leaks visual styling or defaults to a dashboard/card grid.

**Status:** Interpretive operational guidance
**Authority:** Secondary to official DGA sources and verified extractions
**Compliance claim:** No
**Purpose:** Design decision support for Claude Code (Phase 2 — Composition System)

This folder is interpretive operational guidance, not an official DGA extraction. It evaluates
**structure decisions**, not generated frontend code, and does not certify official DGA compliance.

## What is here

- [`rubric.md`](rubric.md) — the scoring rubric (1–5) and passing expectations.
- [`prompts/`](prompts/) — six briefs that require choosing a composition **and a variant**, including
  one that forces the operational-workspace vs. case-management-split-view distinction. Each brief
  describes a product without prescribing structure.

No generated applications, screenshots, or frontend code belong in this phase.

## How to use it

1. For each prompt, run the Design Direction Gate (`references/19`) and then the composition step:
   select a composition from `compositions/`, choose a justified **variant** from its `variants.md`,
   and state the dominant element and structural regions. Stop at the structure decision; do not build
   UI.
2. Score against [`rubric.md`](rubric.md).
3. Compare across prompts: the six decisions should differ **structurally** (dominant region, split,
   navigation, drill-down, density, responsive transformation), not by color/accent.

## Relationship to Phase 1

This extends the Phase 1 design-direction evaluation (`evaluation/`). Phase 1 checked *which
composition archetype and profile*; Phase 2 checks *which composition and variant, applied
structurally*. A Phase 2 decision must remain consistent with the Phase 1 direction for the same
product.

## Scope

- Evaluates **composition + variant** structure decisions, not finished visual code.
- Prompts prescribe no structure, so a "default dashboard" or "everything in cards" answer is a
  failure the rubric catches.
- No visual profiles, themes, or CSS are in scope; a decision that introduces them is a leak and fails.
