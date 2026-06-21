// ChartContainer — title, description, required accessible summary, legend, source, and a single
// place to render empty/loading/error/loaded states. Aligned with Platforms Code data-viz guidance.
// Illustrative, token-driven, dependency-free; not an official DGA asset.
import React, { useId } from "react";
import { ChartEmpty, ChartLoading, ChartError } from "./ChartState.jsx";

export default function ChartContainer({
  title,
  description,
  summary,              // required: states the chart's message in words (screen-reader text)
  state = "loaded",     // "loaded" | "empty" | "loading" | "error"
  legend = null,
  source,
  onRetry,
  emptyHint,
  className = "",
  children,
}) {
  const headingId = useId();
  return (
    <figure
      dir="rtl"
      role="group"
      aria-labelledby={headingId}
      className={["pc-chart", className].filter(Boolean).join(" ")}
    >
      <figcaption className="pc-chart__head">
        <h3 id={headingId} className="pc-chart__title">{title}</h3>
        {description ? <p className="pc-chart__desc">{description}</p> : null}
      </figcaption>

      {summary ? <p className="pc-sr-only">{summary}</p> : null}

      <div className="pc-chart__plot">
        {state === "loading" ? <ChartLoading /> :
         state === "error"   ? <ChartError onRetry={onRetry} /> :
         state === "empty"   ? <ChartEmpty hint={emptyHint} /> :
         children}
      </div>

      {state === "loaded" && legend ? <div className="pc-chart__legend">{legend}</div> : null}
      {state === "loaded" && source ? <p className="pc-chart__source"><bdi>{source}</bdi></p> : null}
    </figure>
  );
}
