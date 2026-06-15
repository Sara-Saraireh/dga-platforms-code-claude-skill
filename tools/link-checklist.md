# Link checklist

How to periodically verify the official sources this repository depends on. Run on a regular cadence
(e.g., quarterly) and before any significant release.

## Sources to verify

- [ ] https://design.dga.gov.sa/
- [ ] https://design.dga.gov.sa/about-platforms-code
- [ ] https://dga.gov.sa/ar/digital-knowledge/national-design-system-of-Saudi-Arabia
- [ ] https://oss.dga.gov.sa/ar/products/dga-ac319-national-design-system
- [ ] https://design.dga.gov.sa/guidelines/templates
- [ ] https://design.dga.gov.sa/guidelines/foundations/color-system
- [ ] https://design.dga.gov.sa/guidelines/foundations/typography
- [ ] https://design.dga.gov.sa/guidelines/foundations/iconography
- [ ] https://design.dga.gov.sa/guidelines/components
- [ ] https://design.dga.gov.sa/guidelines/components/forms-and-inputs/steps
- [ ] https://my.gov.sa/en/content/accessibility

## For each link, check

1. **Reachable** — the page loads (note: some pages render client-side; open in a browser if a fetch
   returns little content).
2. **Still the right page** — the URL hasn't moved; the topic still matches its use in `sources.md`.
3. **Content changed?** — compare against your last review. If guidance changed (colors, type,
   components, steps, accessibility), it may affect the `references/` summaries.
4. **New relevant pages** — note any new foundations/components pages worth summarizing.

## When a link is broken or moved

- Find the current official URL on https://design.dga.gov.sa/ or https://dga.gov.sa/.
- Update `sources.md`, `README.md`, and any affected `references/` file.
- Record the change in `source-update-log.md`.

## When content changed

- Update the affected `references/` summary to match the official source (the source wins).
- Cascade to `prompts/`, `templates/`, and `examples/` if needed.
- Update `CHANGELOG.md` and bump the version per `GOVERNANCE.md`.
- Record the change in `source-update-log.md`.

## Reminder

Do not copy full pages. Summarize and link back. Do not invent token values; verify exact values
against the official foundations pages.
