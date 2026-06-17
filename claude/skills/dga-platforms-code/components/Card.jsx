// Card — aligned with Platforms Code "البطاقة" anatomy (title, body, optional action region).
// Interactive variant renders a real <button> so it is keyboard operable. Illustrative,
// token-driven; not an official DGA asset.
import React from "react";

export default function Card({
  title,
  children,
  footer = null,
  interactive = false,
  onClick,
  as,
  className = "",
  ...rest
}) {
  const classes = ["pc-card", interactive ? "pc-card--interactive" : "", className]
    .filter(Boolean)
    .join(" ");
  const content = (
    <>
      {title ? <h3 className="pc-card__title">{title}</h3> : null}
      {children ? <div className="pc-card__body">{children}</div> : null}
      {footer}
    </>
  );

  if (interactive) {
    return (
      <button type="button" className={classes} onClick={onClick} {...rest}>
        {content}
      </button>
    );
  }
  const Tag = as || "div";
  return (
    <Tag className={classes} {...rest}>
      {content}
    </Tag>
  );
}
