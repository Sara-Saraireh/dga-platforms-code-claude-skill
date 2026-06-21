# Repository audit — dga-platforms-code-claude-skill

Date: 2026-06-21. Scope: full read-only audit before cleanup. This repository is a **Claude Code
Skill** repository first — official-DGA-bounded guidance, verified tokens, generic templates and
examples, review checklists, and *optional* documentation. It is **not** a published npm package and
its bundled React code is **illustrative implementation guidance**, not official DGA components.

## 1. File tree (summary)

```
README.md  CHANGELOG.md  LICENSE.md  GOVERNANCE.md  SECURITY.md
sources.md  SOURCE_MATRIX.md  REPO_AUDIT.md
claude/skills/dga-platforms-code/
  SKILL.md
  references/   00–17, 29, 30   (design rules + official extractions)
  prompts/      01–06           (reusable task prompts)
  templates/    react-tailwind-*.md, ux-copy-patterns-ar.md (illustrative)
  examples/     generic-*.md     (worked flows, fake data)
  tokens/       colors / typography / spacing / elevation v1.0 JSON (verified)
  components/    *.jsx + tokens.css + components.css + charts/  (illustrative)
tools/          link-checklist, manual-review-template, source-update-log
docs/           optional HTML documentation site (index + pages + assets)
```

## 2. What belongs in the skill (keep)

- `SKILL.md`, all of `references/`, `prompts/`, `templates/`, `examples/`, `tokens/`, `tools/`, and
  the governance/meta docs (`README`, `CHANGELOG`, `LICENSE`, `GOVERNANCE`, `SECURITY`, `sources.md`).
- `components/` — kept in place, but **relabeled as illustrative implementation templates** (not a
  package, not official components).
- `docs/` — kept as **optional documentation**, clearly marked as not a source of truth.

## 3. What looked out of scope / needed correction

| Issue | Where | Action |
|-------|-------|--------|
| **npm-package framing** — `import … from "dga-platforms-code/components"` | `components/README.md` (2 blocks), `components/index.js`, `components/charts/index.js` (comments), `docs/pages/components.html` & `charts.html` (code samples), `README.md` ("ships/packages") | De-package: relative imports + "not a published npm package" wording |
| **Broken references** — point to files that don't exist (`templates/charts/`, `examples/charts/`, `29-data-visualization-and-charts.md`, `tokens/chart-tokens-v1.0.json`) | `components/README.md` (chart section) | Fix to real locations (`components/charts/`, `references/30`, `tokens/colors-v1.0.json` `data_visualization`) |
| **Stale chart-series count** — says "series-1…6" | `components/README.md` | Correct to `series-1…4` + neutral (matches `tokens.css`) |
| **Component-count conflict** — "50 components" vs PDF's "55" | `components/README.md`, `references/30`, `CHANGELOG.md` | Explain: PDF v1.0 = 55; website pages ≈ 50; source-status note for periodic review |
| **Chart-token wording** — risk of reading as "official chart tokens" | `tokens/colors-v1.0.json`, `components/tokens.css`, `references/`, `docs/pages/charts.html` | Reframe as **implementation role-mappings** built from verified color tokens + the official DgaChart example |
| **Docs as possible second source of truth** | `docs/` | Add an "optional documentation / not a source of truth / not official components" banner |

## 4. Formatting / validity

- **Markdown:** no collapsed single-line files; headings, lists, and fenced code are well-formed.
- **JSON:** all four `tokens/*.json` parse (re-validated during cleanup).
- **CSS:** readable; tokens centralised in `tokens.css`.
- **YAML front matter** (`SKILL.md`): valid; `name` + `description` match the required values.

## 5. Compliance / claims review

- No "certified", "DGA-approved", or "production-ready" claims found.
- "official" is used to *reference* DGA sources, not to assert approval — acceptable.
- "verified" is used to mean "extracted from an official source and confirmed"; backed by dated
  extractions (see `SOURCE_MATRIX.md`). A glossary was added to `sources.md`.
- Disclaimers ("aligned with Platforms Code principles", "not official DGA compliance") are present
  throughout and were reinforced.

## 6. Third-party design systems / libraries

- **None used as source of truth.** No GOV.UK, USWDS, Material, Bootstrap, Ant, Lottie, GSAP.
- Figma / Storybook are referenced only as the **official delivery model** (do not copy assets).
- Recharts appears only as an *optional* alternative — kept as "optional, only if the host project
  already uses it or the user approves". Charts shipped here are dependency-free SVG/CSS.

## 7. Cleanup plan (no deletions)

Nothing in the repository is clearly unnecessary, so **no files are deleted**. Cleanup is limited to:
relabel/de-package wording, fix broken references, reconcile the component count, reframe chart-token
language, add the optional-docs banner, and add the two audit/source-matrix files plus a glossary.
See `git` history of this branch and the `CHANGELOG.md` "Unreleased" entry for the exact edits.

## 8. Integrity checks (post-cleanup)

- Copyright intact: `Copyright (c) 2026 Sara Saraireh` (`LICENSE.md`).
- All official DGA source links retained (`sources.md`).
- No DGA assets, logos, Figma files, Storybook code, or font files copied.
- Repository still functions as a Claude Code Skill (valid `SKILL.md` front matter; references intact).
