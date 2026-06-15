# 15 — Layout and spacing page — source status

## A. Source

- **Page:** https://design.dga.gov.sa/guidelines/foundations/layout-and-spacing
- **Source status:** official Platforms Code foundation page.
- **Extraction status:** page confirmed, but **exact numeric spacing tokens are not yet verified**.

## B. Verified purpose

The layout and spacing system in Platforms Code establishes a clear framework for government
applications and platforms. It organizes components spatially and helps focus attention on the most
important elements.

## C. Operational rules

- Treat layout and spacing as a core foundation, not a cosmetic detail.
- Use spacing to create clear hierarchy between page sections, cards, forms, navigation, and actions.
- Keep spacing consistent across repeated components.
- Avoid arbitrary one-off margins and padding.
- Prefer project-level spacing tokens when they exist.
- If official DGA spacing tokens are available through the official Figma library, Storybook, or live
  page, use those verified values.
- If exact spacing tokens are not verified, do not invent them.
- For React/Tailwind implementations, prefer the host project's existing spacing scale unless
  official Platforms Code spacing tokens have been approved for the project.

## D. Implementation guidance

When auditing or implementing a UI, check:

- Section spacing.
- Card padding.
- Form field spacing.
- Button group spacing.
- Navigation spacing.
- Vertical rhythm between headings, descriptions, and actions.
- Mobile spacing (avoid cramped layouts).
- Horizontal overflow (avoid it).
- Excessive density in Arabic RTL interfaces (avoid it).

## E. Manual verification required

Before adding numeric spacing tokens to this repository, verify them from one of:

- Official Platforms Code layout and spacing page.
- Official Figma library.
- Official Storybook.
- Approved project-level design token file.

## F. Prohibited

- Do not invent official spacing tokens.
- Do not copy unofficial spacing scales from third-party implementations.
- Do not assume Tailwind default spacing equals official Platforms Code spacing.
- Do not hardcode spacing values repeatedly across components.

> No `spacing-v1.0.json` token file exists in this repository because exact official spacing values
> are not verified. This is intentional. Do not create one with invented values.
