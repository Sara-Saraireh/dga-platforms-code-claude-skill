# 25 — Government page blueprints

> Supporting design-review guidance. It aligns with — and never overrides — DGA Platforms Code
> and the verified references (`13`–`16`) and tokens (`tokens/`). It introduces no official DGA
> rules, tokens, spacing, components, or compliance claims. Blueprints are generic and
> product-agnostic; use clearly fake data in any example.

Use these as completeness checklists when building or reviewing a page. Each blueprint lists what a
polished, government-grade version of that page type should contain. Adapt to the project's tokens
and conventions; reuse existing components.

## Service landing page

- **Purpose:** explain a service and start it.
- **Required sections:** entity/identity line, service title + brief description, what's needed /
  eligibility, steps overview, primary start action, support/help link.
- **Primary action:** «ابدأ الخدمة» (one, above the fold).
- **Secondary actions:** read requirements, contact/support.
- **Trust signals:** authorized entity identity, clear official tone, accurate content.
- **State handling:** unavailable-service state; maintenance notice if relevant.
- **RTL/accessibility:** `dir="rtl"`/`lang`; one `h1`; logical spacing; visible focus.
- **Common mistakes:** long paragraphs, no clear start action, empty hero on desktop.

## Service selection page

- **Purpose:** choose among services/options.
- **Required sections:** page title + short intro, scannable option grid, optional filter/search.
- **Primary action:** select an option; consider selection-first then one global «متابعة».
- **Secondary actions:** filter, back.
- **Trust signals:** equal, honest presentation of options; clear unavailable states.
- **State handling:** empty (no options), loading, unavailable options with reason.
- **RTL/accessibility:** keyboard-operable cards, real `button`/link, consistent card height.
- **Common mistakes:** identical primary buttons on every card weakening hierarchy.

## Upload page

- **Purpose:** submit a document/file for processing.
- **Required sections:** instructions, accepted formats/limits, upload panel, file list with status,
  primary continue action.
- **Primary action:** «متابعة» / «تحقّق» after a valid upload.
- **Secondary actions:** remove/replace file, cancel.
- **Trust signals:** clear formats/limits, visible progress, recoverable errors.
- **State handling:** empty, uploading (progress), success, error (with fix), file too large/wrong type.
- **RTL/accessibility:** codes/IDs LTR; announce upload errors; keyboard-operable controls.
- **Common mistakes:** hidden limits, no progress, dead-end errors.

## Review-before-submit page

- **Purpose:** confirm entries before submission.
- **Required sections:** grouped summary of entries, per-section edit links, what submission does,
  primary submit action.
- **Primary action:** «أرسل الطلب».
- **Secondary actions:** edit a section, save as draft, back.
- **Trust signals:** plain-language summary; explicit statement of the consequence of submitting.
- **State handling:** validation summary; submit in-progress; submit error with recovery.
- **RTL/accessibility:** logical grouping; focus moves to errors; announce submission result.
- **Common mistakes:** no edit path, unclear what submit does.

## Result page

- **Purpose:** state the outcome plainly.
- **Required sections:** outcome status (icon + label + verified color), reference/identifier,
  supporting detail, next steps, save/print where relevant.
- **Primary action:** the most useful next step (e.g. «العودة إلى طلباتي»).
- **Secondary actions:** print/save, start another.
- **Trust signals:** outcome reflects the server's source of truth; never fabricated.
- **State handling:** success, rejected, pending/under-review, not-available.
- **RTL/accessibility:** status not by color alone; reference number LTR and selectable.
- **Common mistakes:** vague outcome, missing reference, success styling for non-success.

## Dashboard page

- **Purpose:** overview of state and the next action.
- **Required sections:** page title, key metric cards (label → value → context), primary list/table,
  filters, region-scoped actions.
- **Primary action:** the active task's action per region.
- **Secondary actions:** filter, export, navigate to detail.
- **Trust signals:** accurate figures, consistent status vocabulary.
- **State handling:** empty, loading (skeleton), error, no-results-after-filter.
- **RTL/accessibility:** RTL-aware tables, semantic headers, numerals LTR, keyboard navigation.
- **Common mistakes:** decoration over information, chart/colour overload.

## Admin triage page

- **Purpose:** review and act on incoming cases/items.
- **Required sections:** queue/list with status and ownership, filters, item detail, action area,
  audit/history where relevant.
- **Primary action:** the decision for the selected item (e.g. «اعتماد» / «إرجاع»).
- **Secondary actions:** assign, add note, filter.
- **Trust signals:** clear ownership and state; server-truth outcomes; confirmation for irreversible
  actions.
- **State handling:** empty queue, loading, error, conflict (item already actioned).
- **RTL/accessibility:** keyboard-first operability; status not by color alone; clear focus.
- **Common mistakes:** ambiguous state/ownership, emphasized destructive actions.

## Error page

- **Purpose:** explain a failure and offer a way forward.
- **Required sections:** plain explanation of what happened, what the user can do, a primary recovery
  action, support link.
- **Primary action:** retry or return to a safe place.
- **Secondary actions:** contact support, go home.
- **Trust signals:** honest, non-blaming, no technical codes/stack traces.
- **State handling:** distinguishes not-found, no-access, and server-error tones.
- **RTL/accessibility:** clear heading; focus on the main message; readable on mobile.
- **Common mistakes:** dead ends, exposing internal errors, blame.

## Help / support page

- **Purpose:** answer common questions and route to help.
- **Required sections:** searchable/scannable topics or FAQ, contact channels, accessibility and
  privacy links.
- **Primary action:** contact/support or the most relevant answer.
- **Secondary actions:** browse topics, search.
- **Trust signals:** accurate, official contact details; consistent terminology.
- **State handling:** empty search results with a next step.
- **RTL/accessibility:** accessible accordions; logical heading order; keyboard operable.
- **Common mistakes:** burying contact options, no search/scannability.

See also: `06-service-patterns.md`, `24-high-fidelity-polish-rules.md`, `26-component-anatomy-polish.md`.
