# Public information

## Source prompt

A government entity wants a public page that explains a new regulation to the general public: what it
is, who it affects, what they need to do, and where to go next. Visitors arrive occasionally, mostly on
phones, and want to read and understand quickly, then follow a clear link to the relevant service or
contact. The content is largely editorial, with a few key points and one or two onward actions. The
brief prescribes no layout.

## Design direction decision

- **Product class:** Public information (`references/18`).
- **Secondary influence:** Government service (the onward action leads into a service).
- **Primary users:** The general public seeking to read, understand, and find the next step.
- **Primary task:** Read and comprehend the regulation, then follow a clear onward link.
- **Usage environment:** Public, unsupervised, occasional visits.
- **Primary device:** Mobile-first.
- **Usage frequency:** Occasional / one-off.
- **Information density:** Low–medium, editorial.
- **Interaction complexity:** Read-only with a clear onward link (minimal input).
- **Decision criticality:** Low–medium.
- **Content type:** Article / editorial.
- **Selected visual profile:** Public Editorial (`references/21`).
- **Selected composition archetype:** Narrative Portal (`references/20`).
- **Navigation model:** Top nav + in-page anchors; simple.
- **Dominant screen element:** The content / message (heading, lead, readable body) and its primary
  onward action.
- **Surface strategy:** Readable single column with editorial rhythm; a card only for a genuine choice
  (e.g. distinct onward services), not to wrap prose.
- **Data visualization priority:** Low — illustrative only where it aids comprehension; no dashboards.
- **Motion character:** Minimal.
- **Patterns to avoid:** Admin tables; KPI tiles; workspace chrome around what is really an article;
  uniform card grid over prose.
- **Assumptions requiring validation:** Content is authored/managed elsewhere (CMS); the number and
  destinations of onward actions to be confirmed; bilingual/RTL editorial content expected.
- **Short rationale:** The task is read-and-understand-then-navigate, so content and the onward action
  must dominate in a readable single column — a Narrative Portal, not a dashboard or workspace. The
  Government-service secondary reflects the onward link into a service.

## Expected composition behavior

A clear heading and lead orient the reader, followed by readable body content with rhythm and in-page
anchors for longer pages. Key points are summarized plainly; one or two prominent onward links guide
the reader to the relevant service or contact. Cards appear only where there are genuinely distinct
choices, never to wrap paragraphs. The single readable column carries to mobile with generous type.

## Explicit anti-patterns

- No admin tables, KPI tiles, or workspace panels.
- No dashboard chrome around an article.
- No uniform card grid wrapping prose.
- No decorative charts or effects.
- No accent change substituting for editorial structure.
- Mixed Arabic/Latin and any figures kept correctly ordered (LTR isolation where needed).

## Rubric score

| # | Category | Score | Note |
|---|----------|-------|------|
| 1 | Product-classification accuracy | 5 | Public information from read/navigate task. |
| 2 | Composition–task fit | 5 | Narrative Portal matches editorial read-then-navigate. |
| 3 | Visual-direction fit | 5 | Public Editorial: clear, welcoming, readable. |
| 4 | Distinction from generic dashboard | 5 | Explicitly no tables/tiles/workspace chrome. |
| 5 | Dominant-element clarity | 5 | Single dominant element: content + onward action. |
| 6 | Information hierarchy | 5 | Message leads; onward links prominent; no metrics. |
| 7 | RTL awareness | 4 | RTL editorial + mixed-content isolation; real-content RTL a manual check. |
| 8 | Accessibility awareness | 4 | Readable type, semantics, contrast addressed; assistive-tech pass manual. |
| 9 | DGA grounding | 5 | Verified type scale/tokens; no invented values; no compliance claim. |
| 10 | Misuse of cards | 5 | Cards only for genuine choices, not prose. |
| 11 | Misuse of visual effects | 5 | Minimal motion; no effects. |
| 12 | Color-only variation | 5 | Structural differentiation (editorial single column, low density). |

## Assessment

- **Result:** Pass. All thresholds met.
- **Strongest aspects:** Treats an article as an article — content-dominant editorial, correctly
  refusing workspace/dashboard chrome.
- **Weakest aspects:** RTL editorial and assistive-tech behavior are downstream manual checks.
- **Ambiguity:** Number/destinations of onward actions (recorded as an assumption).
- **Generic-dashboard fallback:** None.
