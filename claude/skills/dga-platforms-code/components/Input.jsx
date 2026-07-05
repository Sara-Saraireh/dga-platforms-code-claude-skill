// Input — aligned with Platforms Code "المدخلات" anatomy (visible label, helper text, states).
// Label is always visible; placeholders are never the label. Error is announced and linked.
// Illustrative, token-driven; not an official DGA asset.
import React, { useId } from "react";

export default function Input({
  label,
  hint,
  error,
  required = false,
  optionalText = "(اختياري)",
  id,
  className = "",
  type = "text",
  ...rest
}) {
  const reactId = useId();
  const inputId = id || `pc-input-${reactId}`;
  const hintId = hint ? `${inputId}-hint` : undefined;
  const errorId = error ? `${inputId}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className={["pc-field", className].filter(Boolean).join(" ")}>
      <label className="pc-label" htmlFor={inputId}>
        {label}
        {required ? (
          <span className="pc-label__required"> *<span className="pc-sr-only"> (مطلوب)</span></span>
        ) : (
          <span className="pc-label__optional"> {optionalText}</span>
        )}
      </label>
      {hint ? <p id={hintId} className="pc-hint">{hint}</p> : null}
      <input
        id={inputId}
        type={type}
        className="pc-input"
        required={required}
        aria-required={required || undefined}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={describedBy}
        {...rest}
      />
      {error ? <p id={errorId} className="pc-error" role="alert">{error}</p> : null}
    </div>
  );
}
