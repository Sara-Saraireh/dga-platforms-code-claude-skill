// Stepper — aligned with Platforms Code "الخطوات" anatomy (alignment, step state, behaviors).
// RTL-correct: steps flow right-to-left naturally in the document order. Current step is conveyed
// to assistive tech via aria-current. Illustrative, token-driven; not an official DGA asset.
import React from "react";

// steps: [{ label }], current: zero-based index of the active step
export default function Stepper({ steps = [], current = 0, ariaLabel = "خطوات الخدمة", className = "" }) {
  return (
    <nav aria-label={ariaLabel} className={className}>
      <ol className="pc-stepper">
        {steps.map((step, i) => {
          const state = i < current ? "complete" : i === current ? "current" : "upcoming";
          return (
            <li
              key={step.label ?? i}
              className={`pc-step pc-step--${state}`}
              aria-current={state === "current" ? "step" : undefined}
            >
              <span className="pc-step__marker" aria-hidden="true">
                {state === "complete" ? "✓" : i + 1}
              </span>
              <span className="pc-step__label">{step.label}</span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
