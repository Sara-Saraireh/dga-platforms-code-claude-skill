// Badge / Tag — aligned with Platforms Code "العلامات" anatomy. Status uses text (+ optional dot),
// never color alone. Illustrative, token-driven; not an official DGA asset.
import React from "react";

const TONES = ["neutral", "success", "error", "warning", "info"];

export default function Badge({ tone = "neutral", dot = false, className = "", children, ...rest }) {
  const t = TONES.includes(tone) ? tone : "neutral";
  return (
    <span className={["pc-badge", `pc-badge--${t}`, className].filter(Boolean).join(" ")} {...rest}>
      {dot ? <span className="pc-badge__dot" aria-hidden="true" /> : null}
      <span>{children}</span>
    </span>
  );
}
