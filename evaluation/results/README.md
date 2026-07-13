# Evaluation results — Phase 1 Design Direction Engine

This folder records one run of the design-direction evaluation baseline: the six product briefs in
[`../prompts/`](../prompts/) taken through the Design Direction Gate and scored against
[`../rubric.md`](../rubric.md).

## Purpose

Validate whether Phase 1 (the Design Direction Engine) actually changes the skill's **design
decisions** across different frontend product types — i.e. whether classification and composition
logic produce differentiated, task-driven directions instead of a repeated default dashboard.

## Run metadata

- **Evaluation date:** 2026-07-13
- **Repository / git state:** branch `feat/design-direction-engine`, HEAD `220ba1d` (Phase 1 committed;
  working tree clean at run start).
- **Skill:** `claude/skills/dga-platforms-code` — Design Direction Engine (Phase 1, `[Unreleased]` in
  `CHANGELOG.md`).
- **Evaluation authority (files applied):** `SKILL.md`, `prompts/00-establish-design-direction.md`, and
  `references/18`–`22`, plus `../rubric.md` and the six briefs in `../prompts/`.

## What was evaluated

Six design-direction cases, one per brief:

1. [`01-government-service.md`](01-government-service.md)
2. [`02-regulatory-verification.md`](02-regulatory-verification.md)
3. [`03-ai-monitoring.md`](03-ai-monitoring.md)
4. [`04-operational-management.md`](04-operational-management.md)
5. [`05-field-inspection.md`](05-field-inspection.md)
6. [`06-public-information.md`](06-public-information.md)

Plus [`scorecard.md`](scorecard.md) (cross-case tables + threshold check) and
[`findings.md`](findings.md) (cross-case differentiation, repetition analysis, failure-condition
check, and the Phase 1 verdict).

## What these results are — and are not

- **These are design-direction decisions, not frontend implementations.** Every result describes a
  product class, composition, dominant element, visual profile, navigation, density, and anti-patterns.
  There is **no** generated application, screenshot, React/JSX, HTML, CSS, Tailwind, or token content in
  this folder, by design.
- The visual profiles named here are **conceptual** (`references/21`); no profiles/themes/CSS were
  created.
- **Not official DGA compliance.** These results are interpretive operational evaluation only. They do
  not certify official DGA compliance; the official DGA sources and verified extractions remain
  authoritative, and the design-direction references are subordinate interpretive guidance.

## Rubric used

The 12-category, 1–5 rubric in [`../rubric.md`](../rubric.md), with its passing thresholds
(composition–task fit ≥4, DGA grounding ≥4, RTL and accessibility ≥4, distinction-from-dashboard and
color-only-variation ≥4, no category below 3) and the cross-brief structural-distinctness check. No new
thresholds were invented.

## Result at a glance

All six cases pass every threshold; overall mean 4.83/5; no generic-dashboard fallback detected.
**Verdict: PASS — ready for Phase 2** (see [`findings.md`](findings.md)).

## How future evaluations should be compared

- Keep the case-file structure identical (Source prompt · Design direction decision · Expected
  composition behavior · Explicit anti-patterns · Rubric score · Assessment) so runs are diffable.
- Compare scorecard Table 1/Table 2 across runs to track drift in classification, composition, and
  differentiation.
- Record the git state and date for each run; store new runs alongside (e.g. a dated subfolder) rather
  than overwriting, so regressions are visible.
- **Strengthen independence over time:** this run is a self-consistency check (the references, rubric,
  and briefs were authored in the same Phase 1 effort — see the limitation note in `findings.md`).
  Future runs should apply the gate blind to *unseen* briefs, and later phases should evaluate actual
  generated UI, not only the direction decision.
