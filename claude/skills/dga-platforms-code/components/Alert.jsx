// Alert (inline notification) — aligned with Platforms Code "الإشعارات" anatomy. Severity is shown
// by icon + text, never color alone. Uses role="alert" for error/warning, role="status" otherwise.
// Illustrative, token-driven; not an official DGA asset.
import React from "react";

const TONES = ["info", "success", "warning", "error"];

export default function Alert({ tone = "info", title, icon = null, className = "", children, ...rest }) {
  const t = TONES.includes(tone) ? tone : "info";
  const role = t === "error" || t === "warning" ? "alert" : "status";
  return (
    <div
      className={["pc-alert", `pc-alert--${t}`, className].filter(Boolean).join(" ")}
      role={role}
      {...rest}
    >
      {icon ? <span className="pc-alert__icon" aria-hidden="true">{icon}</span> : null}
      <div>
        {title ? <p className="pc-alert__title">{title}</p> : null}
        {children ? <div className="pc-alert__body">{children}</div> : null}
      </div>
    </div>
  );
}
