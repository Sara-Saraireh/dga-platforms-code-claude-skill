# Field inspection

## Source prompt

An enforcement body needs a tool for inspectors who visit sites. On site, an inspector opens the
assigned visit, works through a checklist, records findings, captures photos and scans a code on the
asset, and submits the report. They are outdoors, on the move, sometimes with poor connectivity and
one hand free; sunlight makes screens hard to read. Findings feed enforcement records, so accuracy
matters. The brief prescribes no layout.

## Design direction decision

- **Product class:** Field inspection (`references/18`).
- **Secondary influence:** Government service (the capture flow is a structured, step-through form).
- **Primary users:** Inspectors / field staff, on site.
- **Primary task:** Work through a checklist and capture findings (photos, scans) against a site/asset,
  then submit.
- **Usage environment:** Outdoors, on the move, variable/poor connectivity, bright sunlight, often
  one-handed/gloved.
- **Primary device:** Mobile / tablet.
- **Usage frequency:** Daily, in short bursts on the move.
- **Information density:** Low per screen, sequential.
- **Interaction complexity:** Step-through capture with photo/scan; offline-tolerant.
- **Decision criticality:** High — findings feed enforcement records.
- **Content type:** Procedure / capture (checklist + evidence).
- **Selected visual profile:** Field Mobile (`references/21`).
- **Selected composition archetype:** Mobile Action Stack (`references/20`).
- **Navigation model:** Stacked / stepped, thumb-reachable; one action per screen.
- **Dominant screen element:** The current action / capture control (the active checklist item or
  camera/scan).
- **Surface strategy:** Single-column stacks with large targets; clear state including offline/sync;
  no multi-column panes.
- **Data visualization priority:** None to incidental.
- **Motion character:** Minimal.
- **Patterns to avoid:** Desktop dashboard on a phone; multi-column layout; wide tables; hover-only
  interactions; tiny targets; low-contrast text in sunlight.
- **Assumptions requiring validation:** Offline capture + later sync is required (assumed from "poor
  connectivity"); assigned-visit data and enforcement record schema come from the server; scan/camera
  use device APIs; confirm minimum target size and high-contrast mode expectations.
- **Short rationale:** On-site, on-the-move, one-handed capture in sunlight demands a single-column
  action stack with large targets, high contrast, and offline tolerance — not a desktop dashboard. The
  Government-service secondary explains the step-through structure of the capture flow.

## Expected composition behavior

Each screen presents one action — the current checklist item, a capture control, or a scan — with
large, thumb-reachable targets and high-contrast text for outdoor legibility. Steps proceed
sequentially; captured photos/scans attach to findings; offline/sync state is always visible so the
inspector knows what is saved. Submission confirms the report clearly. On larger tablets the layout
centers a narrow column rather than spreading into a desktop grid.

## Explicit anti-patterns

- No desktop dashboard, KPI cards, or multi-column panes on mobile.
- No wide tables or hover-dependent controls.
- No small touch targets or low-contrast text.
- No decorative charts or effects.
- No accent change substituting for the mobile action-stack structure.
- Scanned codes / asset IDs kept LTR and isolated within Arabic text.

## Rubric score

| # | Category | Score | Note |
|---|----------|-------|------|
| 1 | Product-classification accuracy | 5 | Field inspection from on-site, on-the-move capture. |
| 2 | Composition–task fit | 5 | Mobile Action Stack matches one-action-at-a-time capture. |
| 3 | Visual-direction fit | 5 | Field Mobile: robust, legible, thumb-first, high contrast. |
| 4 | Distinction from generic dashboard | 5 | Explicitly rejects desktop dashboard on mobile. |
| 5 | Dominant-element clarity | 5 | Single dominant element: the current action/capture. |
| 6 | Information hierarchy | 5 | One action per screen; sync state always visible. |
| 7 | RTL awareness | 4 | RTL stack + LTR-isolated codes; real-content RTL a manual check. |
| 8 | Accessibility awareness | 5 | Large targets, high contrast for sunlight, reduced motion — directly addressed. |
| 9 | DGA grounding | 5 | Verified tokens/components; server source of truth; no compliance claim. |
| 10 | Misuse of cards | 5 | Single-column stack, no card grid. |
| 11 | Misuse of visual effects | 5 | Minimal motion; no effects. |
| 12 | Color-only variation | 5 | Structural differentiation (mobile stack, low density) vs. desk tools. |

## Assessment

- **Result:** Pass. All thresholds met.
- **Strongest aspects:** Environment-driven direction — mobile, high-contrast, offline-tolerant,
  large targets — is the clearest rejection of a desktop dashboard in the set.
- **Weakest aspects:** RTL correctness for mixed content and scanned codes remains an implementation
  manual check.
- **Ambiguity:** Degree of offline support (recorded as an assumption).
- **Generic-dashboard fallback:** None.
