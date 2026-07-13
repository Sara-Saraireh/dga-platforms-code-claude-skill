# Evaluation — Design Direction baseline

A lightweight baseline for checking that the skill makes **good design-direction decisions** before it
writes any frontend code. It evaluates the *decision* — product class, composition, dominant element,
visual profile, and the patterns it avoids — **not** completed visual code or screenshots.

**Status:** Interpretive operational guidance
**Authority:** Secondary to official DGA sources and verified extractions
**Compliance claim:** No
**Purpose:** Design decision support for Claude Code (Phase 1 — Design Direction Engine)

This folder is interpretive operational guidance, not an official DGA extraction. It does not override
verified tokens or constitute official DGA compliance.

## What is here

- [`rubric.md`](rubric.md) — the scoring rubric (1–5 scale) and passing expectations.
- [`prompts/`](prompts/) — six product briefs covering distinct product types. Each describes a
  product **without prescribing the layout**.

No generated applications, code, or screenshots are included in this phase — only the prompts and the
rubric against which a design-direction decision is judged.

## How to use it

1. For each prompt in [`prompts/`](prompts/), run the skill's design-direction step — the
   `prompts/00-establish-design-direction.md` flow in the skill, backed by references `18`–`22`.
   Stop at the design-direction output; do not build the UI.
2. Score the resulting design-direction decision against [`rubric.md`](rubric.md).
3. Compare across prompts: the six decisions should differ structurally (composition, hierarchy,
   navigation, density), not merely by accent color.

## Scope

- This baseline compares the skill's **design-direction decisions**, not finished visual code.
- Prompts are product-agnostic briefs; they intentionally do not name a layout, so a "default
  dashboard" answer is a failure the rubric can catch.
- Later phases may add generated outputs and visual comparison; that is out of scope here.
