# 07 — Arabic RTL

RTL correctness is baseline. Treat these as requirements, not enhancements.

## dir="rtl"

- Set `dir="rtl"` and `lang="ar"` at the document root (or layout root for a localized subtree).
- Let direction cascade; avoid setting `dir` ad hoc per element except to isolate LTR content.
- Verify the framework/router doesn't reset direction on navigation.

## Arabic alignment

- Default text alignment is to the right (start in RTL).
- Use logical alignment (start/end) rather than hardcoded left/right.
- Form labels, helper text, and table text align to the start (right) consistently.

## Mixed Arabic / English handling

- Arabic and Latin content coexist; isolate Latin runs so they don't reorder the Arabic around them
  (e.g., bidi isolation via `<bdi>` or `unicode-bidi: isolate`).
- Keep punctuation attached to the correct side of the run.
- Test sentences that mix Arabic words with Latin names/numbers for correct visual order.

## Latin product names

- Keep Latin product/brand names in their original LTR form; do not mirror or transliterate them
  unless that's the intended content.
- Isolate them so surrounding Arabic stays correctly ordered.

## Barcodes and registration codes

- Always LTR; never mirror. Isolate from surrounding Arabic text.
- Display in a monospace-friendly, scannable way; preserve exact character order.
- When echoing a scanned/entered code back for confirmation, keep it LTR and unaltered.

## Numbers and IDs

- Render numbers, identifiers, dates, and codes in a stable LTR order; isolate within Arabic text.
- Be consistent about digit shaping (Arabic-Indic vs Latin digits) per the project's convention.
- Don't let bidi reordering change the meaning of an ID or amount.

## Mirroring icons and arrows

- Mirror directional icons: back/forward, chevrons, progress arrows, "next" indicators.
- "Back" points right; "next/forward" points left in RTL.
- Do **not** mirror: logos, brand marks, media controls that are conventionally LTR, or glyphs whose
  meaning is direction-independent (e.g., search, settings).

## RTL steppers

- Steps progress right-to-left; the first step is on the right, later steps to the left.
- Connectors and any directional arrows mirror accordingly.
- Current/completed/upcoming states remain visually and semantically distinct in RTL.

## Arabic labels and helper text

- Write labels and helper text in natural, idiomatic Arabic (see content style guidance).
- Keep labels short; place helper text near the field, start-aligned.
- Ensure associations (`for`, `aria-describedby`) still hold in the RTL layout.
