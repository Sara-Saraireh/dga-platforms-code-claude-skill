# Regulatory verification (variant)

## Source brief

A standards authority reviews product registration requests. For each, an officer checks the values the
applicant **declared** (specifications, quantities, classifications) against the values **found** in the
attached lab report and certificates, flags mismatches, and records an approve/reject decision with a
reason. The core task is spotting declared-vs-found discrepancies; the source documents must remain
reachable for any flagged line.

## Phase 1 direction context

- **Product class:** Regulatory verification.
- **Conceptual visual profile:** Regulatory Workspace (serious, evidence-forward, light).
- **Expected composition family:** Verification Workbench.
- **Primary task:** Judge evidence and record an authoritative ruling.
- **Usage environment:** Office, desktop, sustained sessions.

## Composition decision

- **Selected composition:** Verification Workbench.
- **Selected variant:** Comparison Review.
- **Dominant element:** The declared-vs-found comparison structure.
- **Navigation model:** Comparison-led, case-scoped; drilling a row opens its supporting evidence.
- **Density:** Medium–high, concentrated on the comparison.

## Selection rationale

The task is explicitly a **field-by-field match** of declared against found values, optimized for
spotting mismatches — the defining case for the Comparison Review variant, where a declared-vs-found
structure is the focal region and each row can reach its underlying evidence. Chosen over Evidence First
(one dominant document canvas — wrong when the job is comparing structured values, not reading a single
source) and Split Review (symmetric evidence+findings — closer, but it does not make the row-level
comparison the dominant, mismatch-oriented structure the brief describes).

## Structural model

- **Primary regions:** subject header · comparison table (declared vs found, dominant) · per-row
  evidence drill-down · mismatch/flag summary · advisory recommendation (separate) · decision controls ·
  audit history.
- **Region priority:** comparison table dominant → mismatch summary → per-row evidence on demand →
  recommendation (advisory) → decision controls → audit.
- **User flow:** open request → scan comparison for mismatches → drill a flagged row to its evidence →
  resolve/flag → record decision + reason → audit trail updates.
- **Relationship between regions:** every comparison row links to the source evidence that substantiates
  the "found" value; the mismatch summary indexes flagged rows; the recommendation is advisory and
  visually separate from the human decision.
- **Progressive disclosure:** the comparison shows all fields; evidence is disclosed per row on demand;
  audit history behind a tab.

## Responsive transformation

### Desktop
Multi-column comparison (field · declared · found · status) as the main canvas; mismatch summary and
decision controls in a persistent rail; per-row evidence opens in a side panel.

### Tablet
Comparison scrolls horizontally within its container; mismatch summary collapses above the table;
decision controls sticky; evidence opens as a full-width panel.

### Mobile
Each comparison field becomes a **stacked declared/found pair** with an inline status and an "evidence"
affordance — a purposeful re-structuring so a mismatch is legible one field at a time, not a
horizontally-scrolled desktop table. A mismatch filter surfaces only flagged fields first; decision
controls sticky at the bottom.

## RTL behavior

- **Reading flow:** right→left; field label leads (right), declared and found values follow in a
  consistent order.
- **Leading/trailing regions:** comparison leads; decision controls trail.
- **Navigation order:** row focus moves top-to-start; evidence drill-down opens toward the trailing edge.
- **Sequence/direction:** mismatch summary lists flagged rows in reading order.
- **Directional icons:** expand/drill chevrons mirrored.
- **LTR isolation:** specification codes, measured values with units, certificate/report IDs, and Latin
  classifications are isolated LTR within Arabic text so declared/found stay digit-for-digit comparable.

## Accessibility requirements

- Landmarks for comparison, evidence, and decision regions; a reading order that reaches the comparison
  and its evidence before the decision controls.
- Comparison is a semantic table with header scope; each row's status is text + icon (not color alone)
  and is programmatically associated with its evidence link.
- Full keyboard operability across rows, evidence panel, and decision; visible focus; the decision reason
  is a labeled, validated, required field. Reduced motion on panel transitions.

## Related composition considered

- **Alternative:** Verification Workbench → Split Review.
- **Why considered:** evidence and derived information must be seen together, which Split Review supports.
- **Why rejected:** the brief's core is a structured declared-vs-found match to catch discrepancies;
  Split Review holds evidence and findings side by side but does not make the row-level comparison the
  dominant element. Evidence remains reachable per row in Comparison Review, so nothing is lost.

## Explicit anti-patterns

- Hiding source documents behind a modal with no per-row path back.
- Placing KPI cards or a metrics dashboard above the comparison.
- Merging the advisory recommendation with the final human decision.
- Reducing the comparison to prose or to equal-weight cards that hide mismatches.
- A comparison that cannot reach the evidence for a flagged row.

## Rubric scoring

| # | Category | Score | Note |
|---|----------|-------|------|
| 1 | Composition selection | 5 | Verification Workbench is correct. |
| 2 | Variant selection | 5 | Comparison Review matches declared-vs-found precisely. |
| 3 | Dominant element clarity | 5 | The comparison structure clearly dominates. |
| 4 | Structural differentiation | 5 | Comparison-led with per-row evidence — distinct from other cases. |
| 5 | Responsive transformation | 5 | Mobile re-structures to stacked field pairs, not a scrolled table alone. |
| 6 | Card-grid avoidance | 5 | Table/comparison, no card grid; explicit anti-pattern. |
| 7 | Operational vs case distinction | 5 | Correctly a single-sitting review, not a queue or long-lived case. |
| 8 | Consistency with Phase 1 | 5 | Matches Regulatory verification / Verification Workbench. |
| 9 | RTL awareness | 4 | Order + LTR isolation specified; real bilingual documents remain a manual check. |
| 10 | Accessibility awareness | 5 | Semantic table, evidence association, required reason field. |
| 11 | No visual-theme leakage | 5 | Structure only. |
| 12 | Provenance discipline | 5 | Interpretive, subordinate; recommendation-vs-decision separation preserved. |

## Assessment

- **Result:** Pass (all thresholds met).
- **Strongest aspect:** Makes discrepancy-spotting the dominant structure while keeping evidence one drill
  away, and keeps recommendation separate from decision.
- **Weakest aspect:** Real bilingual lab documents will need RTL/reading-direction verification in
  implementation (scored 4 on RTL).
- **Structural ambiguity:** How much of the mismatch summary is inline vs. a separate rail.
- **Generic-dashboard fallback detected:** No.
- **Card-grid fallback detected:** No.
- **Visual-theme leakage detected:** No.
