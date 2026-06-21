// Breadcrumbs — aligned with Platforms Code "مسار التصفح" anatomy. Wrapped in <nav> with an
// accessible label; the last item is the current page (aria-current). Separators sit in the RTL
// flow so they mirror automatically. Illustrative, token-driven; not an official DGA asset.
import React from "react";

// items: [{ label, href }]; the last item is treated as the current page.
export default function Breadcrumbs({ items = [], ariaLabel = "مسار التصفح", separator = "/", className = "" }) {
  return (
    <nav aria-label={ariaLabel} className={className}>
      <ol className="pc-breadcrumb">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.href ?? item.label} className="pc-breadcrumb__item">
              {isLast ? (
                <span aria-current="page">{item.label}</span>
              ) : (
                <a href={item.href}>{item.label}</a>
              )}
              {!isLast ? <span className="pc-breadcrumb__sep" aria-hidden="true">{separator}</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
