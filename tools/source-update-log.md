# Source update log

Track every observed change to an official source and the repository updates that followed. Add a new
row at the top for each review or change. Keep entries factual and dated.

## How to use

- Run a review using `link-checklist.md`.
- For each change you observe (moved URL, changed guidance, new page), add a row.
- Reference the affected repository files and the resulting version bump.
- If a review finds no changes, add a single "no changes" row for the date.

## Log

| Date | Source (URL) | Change observed | Repo files updated | Version | Reviewer |
|------|--------------|-----------------|--------------------|---------|----------|
| 2026-06-16 | Layout-and-spacing (design.dga.gov.sa/guidelines/foundations/layout-and-spacing); Elevation (…/foundations/elevation); Developing + Design-installation (design.dga.gov.sa/developing, /design-installation) | Rendered the official (client-side) pages and captured **verified tokens** previously marked unverified: spacing scale `spacing-none`…`spacing-11xl`, widths, container padding/max-width, paragraph max-width, breakpoints; 7-level shadow scale (color `#101828`). Confirmed the official delivery model is Figma libraries (no code/npm package). px authoritative; some rem values and the 2xl Y / backdrop-blur names flagged to confirm in Figma. | `tokens/spacing-v1.0.json` (new), `tokens/elevation-v1.0.json` (new), `references/15` (verified), `references/29` (new), `SKILL.md`, `sources.md`, `CHANGELOG.md` | 1.5.0 | Sara Saraireh |
| 2026-06-15 | Platforms Code Guide v1.0 (PDF, DGA, 17 Nov 2024, v1.0, public); typography page content (provided manually); layout-and-spacing page; semantic color screenshot (provided manually) | Added verified extractions: PDF (definition, objectives, counts, national identity, Gray/Gold/SA tokens, libraries, evaluation criteria); typography page (classification, IBM Plex Sans Arabic, Saudi Font restrictions, type scale, WCAG 2.1 AA text guidance); layout-and-spacing confirmed as official foundation with **unverified** numeric tokens; semantic **600** colors only (Error/Warning/Success/Info). | `references/13`–`16`, `tokens/colors-v1.0.json`, `tokens/typography-v1.0.json`, `sources.md`, `00-source-of-truth.md`, `README.md`, `SKILL.md`, `references/01,02,04,06,08,11,12`, `templates/`, `GOVERNANCE.md`, `SECURITY.md`, `tools/manual-review-template.md`, `LICENSE.md` | 1.1.0 | Sara Saraireh |
| 2026-06-15 | All sources in `sources.md` | Initial baseline. Foundations/components/steps pages are client-side rendered (limited content via simple fetch); `oss.dga.gov.sa` product page confirms the National Design System goals (accessibility, consistency, efficiency, flexibility). No token values captured. | Initial authoring of `references/`, `sources.md` | 1.0.0 | Repository owner |

## Row template (copy for new entries)

```
| YYYY-MM-DD | <source URL> | <what changed, or "no changes"> | <files updated, or "—"> | <version, or "—"> | <name/role> |
```

## Notes

- The official sources are authoritative; this log records how the repository was kept in sync.
- Do not paste official page content here — summarize the change only.
