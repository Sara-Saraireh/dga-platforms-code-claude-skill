// Modal — aligned with Platforms Code "النوافذ المنبثقة" anatomy and accessibility (labelled dialog,
// focus trapped while open, focus restored on close, Escape to dismiss). Illustrative, token-driven;
// not an official DGA asset. For production, consider a vetted dialog primitive (e.g. <dialog> or a
// library) if the host project already uses one.
import React, { useEffect, useRef, useId } from "react";

export default function Modal({
  open,
  onClose,
  title,
  footer = null,
  closeLabel = "إغلاق",
  children,
}) {
  const dialogRef = useRef(null);
  const previouslyFocused = useRef(null);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    previouslyFocused.current = document.activeElement;
    const dialog = dialogRef.current;

    const focusables = () =>
      dialog.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
    const first = focusables()[0];
    (first || dialog).focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose?.();
        return;
      }
      if (e.key === "Tab") {
        const items = focusables();
        if (items.length === 0) return;
        const firstEl = items[0];
        const lastEl = items[items.length - 1];
        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown, true);
    return () => {
      document.removeEventListener("keydown", onKeyDown, true);
      if (previouslyFocused.current && previouslyFocused.current.focus) {
        previouslyFocused.current.focus();
      }
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="pc-modal__overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose?.()}>
      <div
        className="pc-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        ref={dialogRef}
        tabIndex={-1}
      >
        <div className="pc-modal__header">
          {title ? <h2 id={titleId} className="pc-modal__title">{title}</h2> : <span />}
          <button type="button" className="pc-modal__close" onClick={onClose} aria-label={closeLabel}>
            ✕
          </button>
        </div>
        <div className="pc-modal__body">{children}</div>
        {footer ? <div className="pc-modal__footer">{footer}</div> : null}
      </div>
    </div>
  );
}
