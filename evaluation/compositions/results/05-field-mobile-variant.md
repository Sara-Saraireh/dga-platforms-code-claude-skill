# Field mobile (variant)

## Source brief

A food-safety authority sends inspectors to restaurants. On site, an inspector works through a fixed
inspection checklist — item by item — recording a result for each, capturing a photo where a violation
is found, and progressing until the checklist is complete and the report is submitted. Inspectors are on
the move, often one-handed, sometimes with poor connectivity, and the checklist can be long.

## Phase 1 direction context

- **Product class:** Field inspection (secondary: Government service — a structured step-through).
- **Conceptual visual profile:** Field Mobile (robust, legible, thumb-first, high contrast).
- **Expected composition family:** Mobile Action Stack.
- **Primary task:** Work a checklist against a site and capture findings, then submit.
- **Usage environment:** Outdoors, on the move, one-handed, variable connectivity.

## Composition decision

- **Selected composition:** Mobile Action Stack.
- **Selected variant:** Guided Inspection.
- **Dominant element:** The current checklist item's action (record result / capture).
- **Navigation model:** Stepped through the checklist, thumb-reachable, with progress; state persists
  across steps and connectivity loss.
- **Density:** Low (one item per screen).

## Selection rationale

The brief describes a **fixed checklist worked item by item, with progress to completion** — the
defining shape of the Guided Inspection variant (a sequence of checklist items, each its own screen with
capture where needed, tracked by progress, ending in a submitted report). Chosen over Quick Verification
(a single instantaneous check — wrong for a long multi-item checklist) and Capture and Review (centered
on free-form capture then a consolidated review — the brief's structure is a fixed *checklist sequence*,
not open capture; per-item photo capture is a step within the sequence, not the organizing model).

## Structural model

- **Primary regions:** current context (site + item) · current checklist-item action (dominant) ·
  progress/status · per-item capture (photo on violation) · confirmation · sync/offline state.
- **Region priority:** current item action dominant → context orients briefly → progress shows position →
  capture immediate when needed → confirmation explicit → sync/offline always visible.
- **User flow:** open assigned visit → item 1 result (+photo if violation) → advance → … → complete →
  submit report.
- **Relationship between regions:** progress binds the sequence; capture attaches to the current item's
  result; sync state spans all steps and persists offline.
- **Progressive disclosure:** one checklist item per screen; capture opens on demand for the current
  item; a final summary precedes submit.

## Responsive transformation

### Desktop
Rare for this field task; if opened at a desk, a single narrow centered column — never a multi-column
dashboard or sidebar layout.

### Tablet
Single-column item sequence with larger targets; optional brief site context above the item without
competing with the action.

### Mobile
The native form: **one checklist item per screen**, large thumb-reachable targets, high-contrast
controls for sunlight, a compact "item X of N" progress indicator, a sticky primary advance action, and a
persistent sync/offline indicator. This is a purpose-built field sequence, not a stacked desktop page;
long checklists support save/resume.

## RTL behavior

- **Reading flow:** right→left; item label and result options lead on the right.
- **Leading/trailing regions:** context leads (right); advance action at the trailing (left) edge, thumb-
  reachable.
- **Navigation order:** steps progress right→left; "next" advances toward the left; back preserves the
  recorded result.
- **Sequence/direction:** progress indicator fills right→left.
- **Directional icons:** back/forward chevrons mirrored; camera/scan glyphs non-directional.
- **LTR isolation:** establishment/license IDs, timestamps, and any Latin/technical codes isolated LTR
  within Arabic text.

## Accessibility requirements

- Large touch targets meeting minimum size; high contrast for outdoor legibility; reduced motion honored.
- Each control labeled; capture results and errors announced; sync/offline state conveyed by text + icon,
  not color alone.
- Logical focus order top-to-start; visible focus; no hover dependence; one primary action per screen so
  keyboard/switch and one-handed use stay simple; save/resume for long checklists.

## Related composition considered

- **Alternative:** Mobile Action Stack → Capture and Review.
- **Why considered:** the task captures photos and could end with a review-before-submit.
- **Why rejected:** the organizing structure is a **fixed checklist sequence with progress**, not
  free-form capture; Capture and Review centers on capture then a consolidated review, which does not
  match a long item-by-item checklist. A brief completion summary before submit is retained without
  making capture the model.

## Explicit anti-patterns

- Desktop sidebars or dense multi-column layouts on the phone.
- Tiny action targets; hover-dependent controls.
- A long scrolling table of all checklist items instead of one action per screen.
- Excessive free-text entry in the field.
- Hiding sync/offline state.

## Rubric scoring

| # | Category | Score | Note |
|---|----------|-------|------|
| 1 | Composition selection | 5 | Mobile Action Stack is correct for on-site capture. |
| 2 | Variant selection | 5 | Guided Inspection matches the fixed checklist sequence. |
| 3 | Dominant element clarity | 5 | Current checklist-item action clearly dominates. |
| 4 | Structural differentiation | 5 | Stepped single-action field sequence — distinct from desk tools. |
| 5 | Responsive transformation | 5 | Mobile-native sequence; desktop is a narrow column, not a dashboard. |
| 6 | Card-grid avoidance | 5 | One action per screen; no card grid or table. |
| 7 | Operational vs case distinction | 5 | Correctly a field sequence, not a queue or case. |
| 8 | Consistency with Phase 1 | 5 | Field inspection / Field Mobile / Mobile Action Stack. |
| 9 | RTL awareness | 4 | Step direction + LTR isolation specified; real-content RTL a manual check. |
| 10 | Accessibility awareness | 5 | Targets, contrast, non-color sync state, save/resume, one action per screen. |
| 11 | No visual-theme leakage | 5 | Structure only. |
| 12 | Provenance discipline | 5 | Interpretive, subordinate; no tokens; no compliance claim. |

## Assessment

- **Result:** Pass (all thresholds met).
- **Strongest aspect:** Environment-driven structure — one action per screen, offline-tolerant, large
  targets — with a clear rejection of desktop layouts.
- **Weakest aspect:** Boundary between Guided Inspection and a completion review before submit (kept as a
  summary step, not a variant switch).
- **Structural ambiguity:** How heavy the pre-submit summary is on a long checklist.
- **Generic-dashboard fallback detected:** No.
- **Card-grid fallback detected:** No.
- **Visual-theme leakage detected:** No.
