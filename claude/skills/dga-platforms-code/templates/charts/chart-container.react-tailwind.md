# Template — Chart container (React + Tailwind, RTL)

A shared wrapper that gives every chart a **title, short description, legend slot, accessible text
summary, and a single place to render empty/loading/error/loaded states**. Compose your chart inside
it. Illustrative and **aligned with Platforms Code principles** — not an official DGA component.

**Notes**
- Set `dir="rtl"` and `lang="ar"` at the layout root; this container uses `text-start`/logical flow.
- Colors come from the chart-token **roles** (`tokens/chart-tokens-v1.0.json`) via CSS variables.
  Map them once at your app root; do not hardcode hex values.
- The accessible summary (`summary`) is required: it states the chart's message in words.

```tsx
// ChartContainer.tsx
import type { ReactNode } from "react";

export type ChartState = "loaded" | "empty" | "loading" | "error";

export interface ChartContainerProps {
  title: string;            // e.g. "عدد المعاملات شهريًا"
  description?: string;     // short, plain-Arabic context
  summary: string;          // accessible text summary of the chart's message (required)
  state?: ChartState;       // default "loaded"
  legend?: ReactNode;       // optional legend node (text + swatch, never color alone)
  source?: string;          // e.g. "المصدر: بيانات تجريبية — يناير إلى يونيو"
  children: ReactNode;      // the chart itself (or a state component)
}

export function ChartContainer({
  title, description, summary, state = "loaded", legend, source, children,
}: ChartContainerProps) {
  const headingId = `chart-${title.replace(/\s+/g, "-")}`;
  return (
    <figure
      dir="rtl"
      className="rounded-lg border border-neutral-200 bg-white p-5 text-start"
      role="group"
      aria-labelledby={headingId}
    >
      <figcaption className="mb-4">
        <h3 id={headingId} className="text-lg font-semibold text-neutral-900">{title}</h3>
        {description ? <p className="mt-1 text-sm text-neutral-600">{description}</p> : null}
      </figcaption>

      {/* Visually-hidden text summary — available to screen readers regardless of state */}
      <p className="sr-only">{summary}</p>

      <div className="min-h-[16rem]">{children}</div>

      {legend ? <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-700">{legend}</div> : null}
      {source ? <p className="mt-3 text-xs text-neutral-500"><bdi>{source}</bdi></p> : null}
    </figure>
  );
}
```

**Chart color roles (map once at your app root)**

```css
/* From tokens/chart-tokens-v1.0.json — verified repository tokens only. */
:root {
  --chart-series-1: #1B8354; /* SA 600 */
  --chart-series-2: #DBA102; /* Gold primary_600 */
  --chart-axis:     #6C737F; /* Gray 500 */
  --chart-grid:     #E5E7EB; /* Gray 200 */
  --chart-text:     #384250; /* Gray 700 */
  --chart-text-strong: #0D121C; /* Gray 950 */
  --chart-error:    #D92D20; --chart-warning: #DC6803;
  --chart-success:  #1B8354; --chart-info:    #1570EF;
}
```

**Adaptation checklist**
- Provide a real `summary` for every chart; pair any legend swatch with a text label (never color alone).
- Keep titles/descriptions in plain, formal Arabic; keep numbers/dates LTR and isolated (`<bdi>`).
- Spacing here is **illustrative** — map to the project's approved scale; do not present as official DGA spacing.
