# Verification Workbench — variants

Structurally distinct variants of [`composition.md`](composition.md). Interpretive operational
guidance; structure only, no visual styling. Variants must differ in structure (dominant region,
ordering, split, navigation, drill-down, density, sequence, or responsive transformation), not in color,
spacing, radius, shadow, typography, or accent.

## Evidence First

### Best for
Reviews where a single primary document/record must be read carefully before any decision.

### Structural model
Evidence occupies the main canvas; findings, recommendation, and decision controls sit in a secondary
rail or below, reached after the evidence.

### Dominant element
The source evidence (single large viewer).

### Regions
Subject context · evidence viewer (dominant) · findings rail · advisory recommendation · decision
controls · audit history.

### Navigation
Case-scoped, single-canvas; findings/decision in a rail or drawer; scroll/annotate the evidence.

### Responsive behavior
Desktop: evidence dominant with a secondary rail. Tablet/mobile: evidence first, then findings and a
sticky decision area. Evidence never collapses into a modal.

### Distinction from other variants
One dominant evidence canvas rather than a symmetric split or a comparison grid — maximizes reading area
for a single source.

### Risks
Decision controls can drift out of reach while reading; keep them persistently accessible.

### Avoid when
The task is comparing two sources side by side (use Comparison Review), or evidence and extracted data
deserve equal attention (use Split Review).

## Split Review

### Best for
Reviews where evidence and the extracted/declared information must be seen together continuously.

### Structural model
Two-pane split: evidence on one side, extracted/matched information and findings on the other; decision
controls persistent.

### Dominant element
The evidence–findings pair, held in view together.

### Regions
Subject header · evidence pane · extracted-info/findings pane · advisory recommendation · decision
controls · audit history.

### Navigation
Split panes with linked scrolling where useful; decision controls persistent across both panes.

### Responsive behavior
Desktop: side-by-side split. Tablet: evidence over findings. Mobile: stacked evidence → findings →
sticky decision. Both regions preserved in order.

### Distinction from other variants
Symmetric two-region split (evidence + derived info) rather than one dominant canvas (Evidence First) or
a declared-vs-found comparison table (Comparison Review).

### Risks
Neither pane truly dominates on small screens; enforce evidence-first stacking order.

### Avoid when
There is only one source to read (Evidence First), or the core task is a field-by-field value match
(Comparison Review).

## Comparison Review

### Best for
Validating declared values against found/record values (identity, product specs, requirement checks).

### Structural model
A comparison structure (declared vs. found rows) is the focal region; the underlying evidence is
reachable per row; decision controls follow the comparison.

### Dominant element
The declared-vs-found comparison.

### Regions
Subject header · comparison table (dominant) · per-row evidence drill-down · mismatch/flag summary ·
advisory recommendation · decision controls · audit history.

### Navigation
Comparison-led; drilling a row opens the supporting evidence; decision after the comparison is resolved.

### Responsive behavior
Desktop: multi-column comparison. Tablet: comparison scrolls horizontally within its container. Mobile:
each row becomes a stacked declared/found pair with an evidence link; sticky decision.

### Distinction from other variants
Dominant element is a structured comparison, not raw evidence — optimized for spotting mismatches rather
than reading a document.

### Risks
Comparison can hide the source; ensure every row can reach its evidence.

### Avoid when
There is no structured declared-vs-found data to compare (use Evidence First or Split Review).
