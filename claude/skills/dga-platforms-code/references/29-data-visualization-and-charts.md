# 29 — Data visualization and charts

## A. Source

- **Page:** https://design.dga.gov.sa/guidelines/components/data-display/charts
- **Source status:** **partially extracted.** The page is client-side rendered and slow; it was
  rendered in a headless browser after a long wait (several attempts). Captured: the page documents
  three chart **types** — **pie/donut (الرسم البياني الدائري)**, **line (الرسم البياني الخطي)**, and
  **column/bar (الرسم البياني العمودي)** — plus **anatomy (التركيب)** and **accessibility
  (إمكانية الوصول)** sections. **Not** captured: any chart **color tokens, palette, or numeric specs**
  (the page exposed no token/color table). Per governance, chart colors therefore map to this
  repository's **verified tokens** — none are invented here.

> Supporting implementation guidance, aligned with Platforms Code principles. Not official DGA
> compliance. No DGA chart palette is invented; exact chart colors/tokens, if any, must be verified
> from the official Figma library or the live charts page.

## B. What charts are for in government interfaces

Charts turn numbers into a decision. In a government context they should be **calm, clear, editorial,
and decision-supporting** — they help a user understand a trend, a comparison, or a composition at a
glance, then act. They are not decoration and not a substitute for exact data.

## C. Charts vs. tables vs. KPI cards

- **KPI card** — a single, important number (with label and, where useful, a short context/trend).
  Use when the answer is one figure.
- **Chart** — a relationship across data: a trend, a comparison, or a part-to-whole. Use when the
  shape of the data is the message.
- **Table** — precise, row-level review and operational decisions. Use when users need exact values,
  sorting, or to act on individual rows. When in doubt for operational work, prefer a table.

## D. Chart selection rules

- **Column/Bar chart** — categorical comparison (counts/values across a few categories).
- **Line chart** — trends over time.
- **Donut/Pie chart** — only simple part-to-whole composition (few segments). Avoid for precise
  comparison or many segments.
- **Horizontal bar chart** — many categories, or **long Arabic labels** that need room to read
  without truncation. (Supporting pattern; the official page documents column/bar — a horizontal bar
  is the same comparison with a different axis orientation.)
- **KPI cards** — single-number indicators.
- **Tables** — precise review and operational decision-making.

## E. Accessibility rules

- **Never rely on color alone.** Distinguish series with labels, direct value labels, patterns, or a
  legend — and pair status colors with text/icons.
- Provide a clear **title**, a short **description**, a **legend** where there is more than one
  series, accessible **tooltips**, and a **textual summary** (or an accessible data table) so the
  chart's message is available without seeing it.
- Consider **keyboard and screen-reader** needs: meaningful `role`/`aria-label`/`aria-describedby` on
  the chart container, a visually-hidden summary, and a real `<table>` fallback for the data where
  feasible.
- Ensure **sufficient contrast** for text, axes, gridlines, and series (target WCAG 2.1 AA).
- Always provide **empty**, **loading**, and **error** states — not just the happy path.

## F. RTL rules

- Arabic titles, axis labels, and legends **align correctly** for `dir="rtl"`; the category axis
  reads right-to-left.
- **Long Arabic labels must not be truncated** — wrap them, angle them, or switch to a horizontal bar
  chart so labels have room.
- Keep **numbers, percentages, dates, and codes** in their natural LTR order and readable; isolate
  them (bidi) inside Arabic text.

## G. Government tone

- Calm, clear, editorial, decision-supporting.
- **Avoid** decorative, playful, 3D, neon, gradient-heavy, or overly animated charts. Motion (if any)
  is subtle and respects `prefers-reduced-motion` (see `27-motion-and-interaction-guidelines.md`).
- Limit colors and series; let the data, labels, and structure carry the chart.

## H. Source boundary

- If exact DGA chart colors or chart tokens are **not verified**, use the existing verified tokens in
  this repository via the role mapping in `tokens/chart-tokens-v1.0.json`.
- **Do not invent** missing chart palettes, tokens, spacing, or behavior.
- Do not copy official Figma/Storybook chart assets or code.

See also: `tokens/chart-tokens-v1.0.json`, `templates/charts/`, `examples/charts/`,
`04-components.md`, `08-accessibility.md`, `26-component-anatomy-polish.md`,
`prompts/11-build-dashboard-charts.md`.
