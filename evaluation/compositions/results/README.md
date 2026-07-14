# Evaluation results — Phase 2 Composition System

One run of the Phase 2 composition evaluation: the six briefs in [`../prompts/`](../prompts/) taken
through the composition step (`compositions/`) and scored against [`../rubric.md`](../rubric.md).

## Purpose

Determine whether the composition system converts a Phase 1 design direction into a clear, task-driven
**structural** model — selecting the right composition and variant, a single dominant element, and a
purposeful responsive transformation — without defaulting to a dashboard/card grid or leaking visual
styling.

## Run metadata

- **Evaluation date:** 2026-07-13
- **Branch:** `feat/composition-system`
- **Commit:** `f323252` (`feat: add composition system`; working tree clean at run start)
- **Skill:** `claude/skills/dga-platforms-code` — Composition System (Phase 2, `[Unreleased]`).

## Files evaluated

- Guidance: `compositions/README.md`, `compositions/composition.schema.json`, and all seven
  `compositions/*/composition.md` + `variants.md`; references `18`–`22`; `SKILL.md`.
- Briefs: the six files in `../prompts/`.
- Rubric: [`../rubric.md`](../rubric.md).

## Result files

- [`01-government-service-variant.md`](01-government-service-variant.md)
- [`02-regulatory-verification-variant.md`](02-regulatory-verification-variant.md)
- [`03-ai-monitoring-variant.md`](03-ai-monitoring-variant.md)
- [`04-operational-vs-case-management.md`](04-operational-vs-case-management.md)
- [`05-field-mobile-variant.md`](05-field-mobile-variant.md)
- [`06-public-portal-variant.md`](06-public-portal-variant.md)
- [`scorecard.md`](scorecard.md) — per-case + category tables, thresholds, aggregates.
- [`findings.md`](findings.md) — 15 cross-case questions, repetition analysis, failure-condition check,
  the honest limitation, and the Phase 2 verdict.

## Rubric used

The 12-category, 1–5 rubric in [`../rubric.md`](../rubric.md) with its thresholds (composition selection,
variant selection, dominant-element clarity, card-grid avoidance, RTL, accessibility all ≥4; no-theme
leakage = 5; no category below 3; operational-vs-case ≥4 for brief 04) and the cross-brief structural-
distinctness check. No alternative thresholds were invented.

## Methodology

For each brief: run the Design Direction Gate (product class + primary task), then select a composition
from `compositions/` and a **justified variant** from its `variants.md`, state the dominant element and
structural regions, describe the desktop/tablet/mobile transformation, and score against the rubric.
Stop at the structure decision; no UI is built.

## What these results are — and are not

- **Structural composition decisions, not generated interfaces.** No HTML/JSX/CSS/Tailwind, no tokens, no
  visual themes, no screenshots appear in this folder.
- **Self-consistency limitation.** The compositions, briefs, and rubric were developed in the same project
  (and this session), so this run measures internal coherence and task-driven differentiation — not final
  UI quality, visual polish, or art direction. See `findings.md` §4.
- **Not DGA certification.** These results are interpretive operational evaluation; the official DGA
  sources and verified extractions remain authoritative, and no official-compliance claim is made.

## Result at a glance

All six briefs pass every threshold; overall mean 4.89/5; no dashboard, card-grid, or theme-leakage
fallback; the operational-vs-case distinction succeeds. **Verdict: PASS — ready for Phase 3** (see
[`findings.md`](findings.md)).

## How future evaluations should compare

- Keep the result-file structure identical (same section order) so runs are diffable.
- Compare scorecard Table 1/Table 2 across runs to track drift in composition/variant selection and
  differentiation.
- Record branch, commit, and date per run; store new runs alongside (e.g. a dated subfolder) rather than
  overwriting.
- **Increase independence:** apply the composition step **blind** to *unseen* briefs (ideally a separate
  run without the "expected" mapping), and, once Phase 3+ produces visual profiles/templates/
  implementations, evaluate generated interfaces rather than structure decisions alone.
