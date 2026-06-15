# Governance

This document defines how the repository is maintained, versioned, reviewed, and kept aligned with
the official DGA sources.

This repository is an **implementation alignment aid only**. It does **not** certify official
compliance; official review by the responsible entity is required before claiming compliance. Do not
redistribute official fonts, Figma assets, Storybook assets, logos, or government visual marks.

## Source-of-truth policy

- The **authoritative references** are the official DGA sources listed in [sources.md](sources.md).
- The files under `claude/skills/dga-platforms-code/references/` are **operational summaries** of
  that guidance, rewritten as concrete implementation rules. They are convenience artifacts, not
  authority.
- When a summary and an official source disagree, the **official source wins**. Update the summary
  to match; do not "correct" the official source in the summary.
- Do not copy full official pages into this repository. Summarize and link back.
- Do not invent official token values (colors, type scales, spacing, radii). Where an exact value is
  required, mark it as "verify against the official source" rather than guessing.

## Update policy

1. Re-check the official sources on a regular cadence and before any significant release. Use
   [tools/link-checklist.md](tools/link-checklist.md).
2. When an official source changes, record it in [tools/source-update-log.md](tools/source-update-log.md).
3. Update the affected `references/` summary, then update `prompts/`, `templates/`, and `examples/`
   if the change cascades.
4. Update [CHANGELOG.md](CHANGELOG.md) and bump the version.
5. Have a second person review substantive guidance changes (see Review policy).

## Versioning policy

The repository uses Semantic Versioning (`MAJOR.MINOR.PATCH`):

- **MAJOR** — changes that alter the Skill's directives or workflow in a way that could change
  Claude Code's behavior or output materially, or removals of references/prompts.
- **MINOR** — new references, prompts, templates, examples, or additive guidance.
- **PATCH** — clarifications, fixes, link updates, and wording changes with no behavioral impact.

Each release is recorded in [CHANGELOG.md](CHANGELOG.md) with the date.

## Review policy

- Substantive changes to `SKILL.md` or any `references/` file require review by at least one person
  with design-system and accessibility familiarity.
- Reviewers confirm: alignment with official sources, no invented tokens, no compliance claims, no
  copied logos, and no real personal data.
- Security-relevant wording is reviewed against [SECURITY.md](SECURITY.md).

## Manual review requirement

This Skill assists; it does not approve. Before any interface built or modified with this Skill is
released as a government or semi-government product, a human must complete
[tools/manual-review-template.md](tools/manual-review-template.md). At minimum this covers:

- Visual tone and brand correctness (including authorized use of any official logos or emblems).
- Arabic RTL correctness and content quality.
- Accessibility verification with real assistive technology where feasible.
- Security review of authentication, authorization, sessions, file upload, and regulatory outputs.
- Confirmation that no real personal data or secrets are present.

## Compliance disclaimer

This repository helps align interfaces with DGA Platforms Code principles. It does **not** grant,
imply, or certify official DGA compliance. Official compliance requires formal review by the
responsible entity. No artifact in this repository — including a passing internal checklist — may be
presented as official DGA approval.
