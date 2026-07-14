# Public portal (variant)

## Source brief

A national programme wants a public page reporting its first-year results to citizens: what it set out
to do and the outcomes achieved, communicated through a short narrative supported by a few headline
figures (people served, facilities opened, satisfaction). Visitors are the general public, mostly on
phones, who should read and understand the results and then follow a link to learn more or access
related services. The figures illustrate the story; they are not an interactive dashboard.

## Phase 1 direction context

- **Product class:** Public information.
- **Conceptual visual profile:** Public Editorial (clear, welcoming, readable).
- **Expected composition family:** Narrative Portal.
- **Primary task:** Read and understand the results, then follow an onward action.
- **Usage environment:** Public, occasional, mobile-first.

## Composition decision

- **Selected composition:** Narrative Portal.
- **Selected variant:** Impact Report.
- **Dominant element:** The narrative-plus-impact message (the story of results and its onward action).
- **Navigation model:** Mostly linear with optional anchors to result areas; onward action prominent.
- **Density:** Low–medium, editorial.

## Selection rationale

The brief communicates **results and outcomes** through a narrative supported by a few **illustrative**
figures, explicitly *not* an interactive dashboard — the defining case for the Impact Report variant,
which uses impact figures as illustrative support inside a narrative frame leading to an onward action.
Chosen over Editorial Story (a single linear read with no outcome figures — the figures are central
here) and Initiative Overview (multiple themed sub-areas with anchored navigation and several onward
paths — the brief is one results story with a single onward direction, not a multi-theme hub).

## Structural model

- **Primary regions:** narrative opening (what the programme set out to do) · impact figures/callouts
  (illustrative, supporting) · explanatory content (outcomes in context) · onward action (learn
  more / related services).
- **Region priority:** narrative message dominant → impact callouts support the story → explanatory
  content → onward action prominent throughout.
- **User flow:** read the opening → encounter results with a few figures in the flow → understand
  context → follow the onward link.
- **Relationship between regions:** figures are embedded within the narrative to substantiate claims,
  never a separate interactive panel; the onward action recurs at natural stopping points.
- **Progressive disclosure:** linear reveal by scroll; optional anchors jump to result areas; no
  drill-down or interactive filtering (deliberately not a data product).

## Responsive transformation

### Desktop
Readable centered column (constrained measure) with impact callouts sitting inline within the narrative;
onward action prominent; optional anchored section nav for longer pages.

### Tablet
Same single readable column; anchors collapse to a menu; callouts reflow inline.

### Mobile
Single readable column with generous type; impact callouts become **inline figure statements within the
prose** (one clear figure at a time), not a grid of KPI tiles; a sticky primary onward link if the page
is long. This is an editorial reflow, not a stacked dashboard.

## RTL behavior

- **Reading flow:** right→left; headings and body right-aligned with correct Arabic typographic rhythm.
- **Leading/trailing regions:** narrative leads; onward action placed consistently (commonly trailing /
  end of a section) and repeated.
- **Navigation order:** anchor nav and reading order flow right→left.
- **Sequence/direction:** any before/after or timeline framing of results reads right→left.
- **Directional icons:** "continue"/link chevrons mirrored.
- **LTR isolation:** figures and units (people served, counts, percentages), dates, and any Latin
  programme names isolated LTR within Arabic text.

## Accessibility requirements

- Semantic headings in order (single `h1`, then `h2`/`h3`); landmarks for main content and nav; readable
  line length and spacing.
- Impact figures have text alternatives and meaning in text (not conveyed by a chart or color alone);
  links have descriptive text (not "click here"); onward actions are clearly labeled controls.
- Keyboard-navigable anchors and links; visible focus; reduced motion on any reveal/scroll effects.

## Related composition considered

- **Alternative:** Narrative Portal → Initiative Overview.
- **Why considered:** a programme report could be split into themed sections with anchored navigation.
- **Why rejected:** the brief is a single first-year *results* story with one onward direction, not a
  multi-theme hub with several destinations; Initiative Overview's sectioned, multi-path structure would
  fragment a message meant to be read as one narrative. Anchors remain available without adopting the
  multi-theme model.

## Explicit anti-patterns

- Operational dashboards or a KPI-card wall built from the figures.
- Turning illustrative figures into interactive charts/filters (this is not a data product).
- Treating all sections as identical cards.
- Admin tables or workspace chrome around an article.
- An onward action buried or absent.

## Rubric scoring

| # | Category | Score | Note |
|---|----------|-------|------|
| 1 | Composition selection | 5 | Narrative Portal is correct for public reading + onward action. |
| 2 | Variant selection | 5 | Impact Report matches results-with-illustrative-figures. |
| 3 | Dominant element clarity | 5 | Narrative-plus-impact message dominates; figures subordinate. |
| 4 | Structural differentiation | 5 | Editorial, figure-in-prose — distinct from all operational/analytical cases. |
| 5 | Responsive transformation | 5 | Mobile is inline figure statements, not a KPI-tile grid. |
| 6 | Card-grid avoidance | 5 | Editorial flow; figures illustrative, not a card wall — explicit anti-pattern. |
| 7 | Operational vs case distinction | 5 | Correctly neither operational nor a case tool. |
| 8 | Consistency with Phase 1 | 5 | Public information / Public Editorial / Narrative Portal. |
| 9 | RTL awareness | 4 | Editorial RTL + figure LTR isolation specified; real bilingual copy a manual check. |
| 10 | Accessibility awareness | 5 | Heading order, text alternatives for figures, descriptive links. |
| 11 | No visual-theme leakage | 5 | Structure only; the "illustrative figures" caveat prevents dashboard drift. |
| 12 | Provenance discipline | 5 | Interpretive, subordinate; no tokens; no compliance claim. |

## Assessment

- **Result:** Pass (all thresholds met).
- **Strongest aspect:** Treats a results story as an article — figures illustrate rather than becoming an
  interactive dashboard — the key card-grid/dashboard trap for this brief.
- **Weakest aspect:** Risk that "headline figures" tempt a KPI-tile layout; mitigated by the explicit
  figure-in-prose structure and anti-pattern.
- **Structural ambiguity:** How many figures before the set reads as a dashboard (kept few and inline).
- **Generic-dashboard fallback detected:** No.
- **Card-grid fallback detected:** No.
- **Visual-theme leakage detected:** No.
