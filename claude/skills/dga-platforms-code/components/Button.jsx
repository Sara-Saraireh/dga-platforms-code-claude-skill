// Button — aligned with Platforms Code "الأزرار" anatomy (types, styles, states, leading/trailing
// icons). Renders a real <button>. Illustrative, token-driven; not an official DGA asset.
import React from "react";

const VARIANTS = ["primary", "secondary", "tertiary", "destructive"];

export default function Button({
  variant = "primary",
  size = "md", // "sm" | "md" | "lg"
  type = "button",
  block = false,
  leadingIcon = null,
  trailingIcon = null,
  disabled = false,
  className = "",
  children,
  ...rest
}) {
  const v = VARIANTS.includes(variant) ? variant : "primary";
  const classes = [
    "pc-button",
    `pc-button--${v}`,
    size !== "md" ? `pc-button--${size}` : "",
    block ? "pc-button--block" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={classes} disabled={disabled} {...rest}>
      {leadingIcon ? (
        <span className="pc-button__icon" aria-hidden="true">{leadingIcon}</span>
      ) : null}
      <span>{children}</span>
      {trailingIcon ? (
        <span className="pc-button__icon" aria-hidden="true">{trailingIcon}</span>
      ) : null}
    </button>
  );
}
