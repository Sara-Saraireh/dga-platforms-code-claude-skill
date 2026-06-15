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
| 2026-06-15 | All sources in `sources.md` | Initial baseline. Foundations/components/steps pages are client-side rendered (limited content via simple fetch); `oss.dga.gov.sa` product page confirms the National Design System goals (accessibility, consistency, efficiency, flexibility). No token values captured. | Initial authoring of `references/`, `sources.md` | 1.0.0 | Repository owner |

## Row template (copy for new entries)

```
| YYYY-MM-DD | <source URL> | <what changed, or "no changes"> | <files updated, or "—"> | <version, or "—"> | <name/role> |
```

## Notes

- The official sources are authoritative; this log records how the repository was kept in sync.
- Do not paste official page content here — summarize the change only.
