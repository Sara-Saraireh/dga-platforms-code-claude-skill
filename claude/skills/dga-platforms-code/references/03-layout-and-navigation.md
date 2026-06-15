# 03 — Layout and navigation

Confirm structural patterns against the official Templates and Components pages:
https://design.dga.gov.sa/guidelines/templates and https://design.dga.gov.sa/guidelines/components

## Page structure

- Predictable regions: header, main content, and footer, with clear landmarks
  (`header`, `nav`, `main`, `footer`).
- A single `main` per page; one `h1` describing the page/service.
- Constrain content width for readability; center within the viewport.
- Keep layouts consistent across the product so users learn the structure once.

## Header

- Identifies the service/entity and provides primary navigation and account/session controls.
- Stable across pages; does not change position or contents unexpectedly.
- Keep it uncluttered: identity, primary nav, and essential actions (e.g., language, account).
- Only display official logos/emblems with authorization (see `SECURITY.md` and prohibitions).

## Main content

- Leads with the page title and a short description of the task or service.
- Organized into clear sections with headings; one primary action stands out.
- Avoids dense walls of content; uses grouping and spacing.

## Section layout

- Group related fields, cards, or data into labeled sections.
- Maintain consistent spacing and alignment between sections.
- Use a clear grid; align content to it rather than placing elements arbitrarily.

## Side navigation

- Suitable for dashboards, admin areas, and case-management with many destinations.
- Mark the current item; keep order stable; group long lists.
- In RTL, side navigation sits on the **right**; it mirrors with the layout.

## Top navigation

- Suitable for a small number of top-level service areas.
- Indicate the active item; keep labels short and in plain Arabic.
- Collapses into an accessible menu on small screens.

## Breadcrumbs

- Show location within a multi-level structure; the current page is the last, non-link item.
- In RTL, breadcrumbs read right-to-left and separators/chevrons mirror accordingly.
- Keep labels consistent with the destination page titles.

## Footer

- Holds secondary links (about, accessibility, privacy, contact) and required notices.
- Consistent across pages; does not compete with main content.
- Do not place primary task actions in the footer.

## Mobile navigation

- Provide an accessible menu (proper button, focus management, escape to close).
- Keep primary actions reachable without deep nesting.
- Preserve the current-item indicator and logical order.

## Page density

- Favor calm density: enough whitespace to scan easily, without wasting space.
- Dashboards may be denser but must remain scannable and prioritized.
- Avoid cramming; let hierarchy and grouping carry complex screens.

## RTL layout mirroring

- The entire layout mirrors: navigation, alignment, icons, progress, and flow.
- Use logical properties / RTL-aware utilities (start/end) so mirroring is automatic.
- "Back" points right, "next/forward" points left; steppers and breadcrumbs flow right-to-left.
- Do not mirror logos, Latin text, numbers, codes, or media that must stay LTR.
