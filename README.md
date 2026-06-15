# dga-platforms-code-claude-skill

A reusable **Claude Code Skill** and reference repository for designing, auditing, refactoring, and
implementing Saudi government-style digital interfaces aligned with the Digital Government Authority
(DGA) **Platforms Code / كود المنصات** and the National Design System of Saudi Arabia.

This repository is an internal, government-grade design-engineering enablement asset. It is not a
casual prompt collection and not a substitute for official review.

---

## Purpose

Public-sector and semi-government digital products must feel official, trustworthy, calm, accessible,
and correct in Arabic (RTL). This repository packages that intent into an operational Claude Code
Skill so that any team can produce interfaces that are:

- **Official and trustworthy** in visual tone.
- **Service-first** in structure (clear tasks, clear outcomes).
- **Accessible** by default (contrast, keyboard, semantics, screen readers).
- **Arabic RTL-correct**, including mixed Arabic/Latin content.
- **Consistent** across pages, components, and flows.
- **Engineered safely**, preserving business logic, APIs, auth, and validation.

## What the Skill does

When active, the Skill (`claude/skills/dga-platforms-code`) directs Claude Code to:

1. Inspect the project before changing anything (framework, routing, styling, component structure).
2. Read the bundled `references/` as operational design rules.
3. Make **incremental, UI-focused** changes while preserving logic, API contracts, authentication,
   authorization, and validation behavior.
4. Enforce Arabic RTL correctness, accessibility, responsive behavior, and government-grade tone.
5. Run available checks (lint, typecheck, build, tests).
6. Summarize changed files and the remaining manual-review items.

It also ships reusable `prompts/`, adaptable React + Tailwind `templates/`, and generic,
product-agnostic `examples/`.

## When to use it

- Building or restyling government / semi-government service interfaces.
- Auditing an interface for government-grade tone, RTL correctness, and accessibility.
- Converting an existing UI toward a Platforms Code-aligned visual language.
- Implementing service flows: selection, multi-step forms, upload/review/result, dashboards,
  verification and case-management screens.

## When **not** to use it

- Commercial/marketing sites that intentionally want a bold consumer brand.
- Tasks that are purely backend, data, or infrastructure with no UI surface.
- Anything that needs a **formal compliance statement** — this Skill cannot grant one (see below).
- Situations requiring exact official token values you have not verified against the official
  sources; the Skill deliberately avoids inventing token values.

## Install / copy the Skill

Personal skills directory (available across your projects):

```bash
mkdir -p ~/.claude/skills
cp -R claude/skills/dga-platforms-code ~/.claude/skills/
```

Project skills directory (shared with the repository, committed to version control):

```bash
mkdir -p .claude/skills
cp -R claude/skills/dga-platforms-code .claude/skills/
```

Claude Code discovers the skill from its `SKILL.md` front matter. No build step is required.

## Use it in a project

1. Copy the Skill as above.
2. Open the target project with Claude Code.
3. Ask for the task in natural language (for example: "Audit this service page for government-grade
   tone, RTL, and accessibility, and propose incremental fixes"). The Skill's description triggers
   activation automatically; you can also reference it explicitly.
4. For repeatable workflows, paste a prompt from `claude/skills/dga-platforms-code/prompts/`.
5. Review the change summary and complete the listed manual-review items before release.

## Official sources

The authoritative references are the DGA sources, not this repository:

- https://design.dga.gov.sa/
- https://design.dga.gov.sa/about-platforms-code
- https://dga.gov.sa/ar/digital-knowledge/national-design-system-of-Saudi-Arabia
- https://oss.dga.gov.sa/ar/products/dga-ac319-national-design-system
- https://design.dga.gov.sa/guidelines/templates
- https://design.dga.gov.sa/guidelines/foundations/color-system
- https://design.dga.gov.sa/guidelines/foundations/typography
- https://design.dga.gov.sa/guidelines/foundations/iconography
- https://design.dga.gov.sa/guidelines/components
- https://design.dga.gov.sa/guidelines/components/forms-and-inputs/steps
- https://my.gov.sa/en/content/accessibility

See [sources.md](sources.md) for how each source is used.

## Maintenance policy

- The files under `references/` are **operational summaries**. When the official sources change, the
  official sources win — update the summaries to match. See [GOVERNANCE.md](GOVERNANCE.md).
- Verify official links periodically using [tools/link-checklist.md](tools/link-checklist.md).
- Record source changes in [tools/source-update-log.md](tools/source-update-log.md).
- Track repository changes in [CHANGELOG.md](CHANGELOG.md).

## Compliance disclaimer

This repository helps **align** interfaces with DGA Platforms Code principles. It does **not** grant,
imply, or certify official DGA compliance. Official compliance requires formal review by the
responsible entity. Do not state or imply that an interface is officially DGA-compliant on the basis
of this Skill alone. See [GOVERNANCE.md](GOVERNANCE.md) and
[tools/manual-review-template.md](tools/manual-review-template.md).

## License

Released under the MIT License. See [LICENSE.md](LICENSE.md).
