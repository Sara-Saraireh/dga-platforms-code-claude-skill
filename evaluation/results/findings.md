# Findings — cross-case differentiation and Phase 1 verdict

Analysis of whether the Phase 1 Design Direction Engine produced genuinely distinct, task-driven
directions across the six briefs. See per-case files and [`scorecard.md`](scorecard.md).

## 1. Cross-case questions

**1. Did the six cases receive different product classifications where appropriate?**
Yes — six different primary classes: Government service, Regulatory verification, Data intelligence &
analytics, Operational management, Field inspection, Public information. Secondary influences were used
sparingly and with justification (e.g. AI monitoring → Operational secondary; Public information →
Government-service secondary for the onward action).

**2. Did the composition archetypes vary based on the primary task?**
Yes — six different archetypes: Guided Service Flow, Verification Workbench, Analytical Canvas,
Operational Workspace, Mobile Action Stack, Narrative Portal. Each traces to the dominant task, not to
industry.

**3. Did any case default to hero + KPI cards / uniform card grid / generic dashboard / sidebar + 4
KPI cards + chart + table?**
No. Every case explicitly lists these as anti-patterns. The two cases most at risk (AI monitoring and
Operational management) name the reflex "sidebar + four KPI cards + chart + table" / "KPI-wall header"
and reject it; KPIs are demoted to strips/inline/contextual.

**4. Were accent colors treated as visual direction?**
No. No case used accent (green/gold/lavender) as its source of variation; each scored 5 on
"color-only variation." Accent is treated per `references/17` as a color-role choice, not a direction.

**5. Was the dominant element different across cases?**
Yes — six distinct dominant elements: active step, evidence, primary visualization, queue + active
item, current capture action, content + onward action.

**6. Was information density appropriate to each context?**
Yes — low for service/field (one decision/action per screen), medium–high for regulatory review,
high for operations, high-but-focused for analytics, low–medium editorial for public information.

**7. Were operational, regulatory, analytical, field, and public experiences clearly distinguished?**
Yes — they differ in composition, dominant element, navigation, density, and surface strategy, not
only in accent. See Table 1 in the scorecard.

**8. Was Cinematic AI avoided where inappropriate?**
Yes — the AI-monitoring case explicitly rejects Cinematic AI and dark/gradient/glow "AI signaling,"
selecting Data Intelligence as the practical long-use profile (per `references/21`). Cinematic AI did
not appear in any case (none of the six is an exhibition/executive context).

**9. Were RTL, accessibility, trust, and source hierarchy preserved?**
Yes — every case treats RTL as a baseline (flow, LTR isolation of IDs/codes/fees), addresses
accessibility (labels, focus, keyboard, contrast, status-not-by-color), keeps a government-grade trust
tone, and defers to verified tokens/official sources with the interpretive guidance kept subordinate.

**10. Did any guidance conflict with existing DGA-grounded rules?**
No conflicts found. The directions reuse verified tokens/components, the verified green chart scheme,
the accent rules (`17`), and the source-of-truth policy; no invented tokens and no compliance claims.

## 2. Repetition analysis

Repeated decisions are acceptable only when justified by a similar task model. Observed repetition:

| Repeated decision | Where | Justified? |
|-------------------|-------|------------|
| Stepped navigation | 01 Government service, 05 Field inspection | **Yes** — both are step-through capture flows (Guided Service Flow / Mobile Action Stack share a linear model); they still differ in device, composition, dominant element, density, and surface. |
| Low density | 01, 05, 06 | **Yes** — service, field, and public-editorial genuinely warrant low density; each has a different dominant element and composition. |
| "Government service" as secondary influence | 05, 06 | **Yes** — both legitimately touch a service (capture flow / onward link); it is a secondary, never the primary class. |
| Master–detail vs case-split | 02, 04 | Distinct — 02 is evidence-dominant split, 04 is queue-dominant master–detail; not a repeat. |

**Flagged repetition (unjustified):** None.
- No composition is reused without task justification (all six archetypes differ).
- No navigation model appears across unrelated products (stepped repeats only between two step-through
  flows).
- No dominant element repeats across cases.
- No default surface strategy — surfaces vary (flat sections, split panes, tables/panes, single-column
  stack, editorial column).
- No reused generic-dashboard language.

## 3. Failure-condition check

| Failure condition | Triggered? |
|-------------------|-----------|
| ≥3 cases use the same composition without strong justification | No (0 shared compositions) |
| ≥4 cases use the same navigation model without justification | No (5 distinct models; stepped repeats twice, justified) |
| Most cases use Card Grid as primary composition | No (0 use card grid) |
| Most cases begin with KPI cards before the main task | No (0 do) |
| Accent color used as the main source of variation | No |
| Product class inferred only from industry/branding | No (task + environment driven) |
| AI monitoring auto-assigned Cinematic AI without considering daily use | No (Data Intelligence chosen) |
| Regulatory verification hides evidence behind a generic dashboard | No (evidence dominates) |
| Field inspection treated as a desktop dashboard | No (Mobile Action Stack) |
| Public information treated as an operational workspace | No (Narrative Portal) |
| Outputs claim interpretive guidance is official DGA guidance | No |
| RTL or accessibility considerations missing | No (present in every case) |
| Any required rubric threshold fails | No (all pass) |

**No failure conditions triggered.**

## 4. Expected-direction check

All six matched the likely mapping in the task, so no deviations required a rationale:

| Case | Likely profile / composition | Chosen | Match |
|------|------------------------------|--------|-------|
| Government service | Government Service / Guided Service Flow | same | ✅ |
| Regulatory verification | Regulatory Workspace / Verification Workbench | same | ✅ |
| AI monitoring | Data Intelligence / Analytical Canvas | Data Intelligence / Analytical Canvas (+ queue) | ✅ |
| Operational management | Operational Command / Operational Workspace (or Case Mgmt Split) | Operational Command / Operational Workspace | ✅ |
| Field inspection | Field Mobile / Mobile Action Stack | same | ✅ |
| Public information | Public Editorial / Narrative Portal | same | ✅ |

Note on 04: Operational Workspace was chosen over Case Management Split View because the brief
describes lightweight state progression, not rich per-case history — documented in the case file.

## 5. Limitation (honest caveat)

This is a **self-consistency** evaluation: the references (`18`–`22`), the rubric, and the six briefs
were authored in the same Phase 1 effort, and this run applies them faithfully. It demonstrates that
the engine's guidance is internally coherent and produces differentiated, task-driven directions on
these briefs. It is **not** an independent third-party test and does not measure real generated UI
output. A stronger future check would have a separate agent/run apply the gate to unseen briefs and
score blind, and would compare actual generated frontends (Phase 2+). See
[`README.md`](README.md).

## 6. Phase 1 verdict

**A. PASS — ready for Phase 2.**

Justification:
- All required rubric thresholds pass in all six cases (scorecard threshold table).
- The six cases are structurally differentiated — distinct product classes, compositions, dominant
  elements, densities, and (five distinct) navigation models — not accent variations.
- No generic-dashboard fallback appears; the KPI-wall and "sidebar + 4 KPI + chart + table" reflexes
  are explicitly named and avoided, including in the two highest-risk cases.
- Direction choices are task- and environment-driven, and the AI-monitoring trap (Cinematic AI) is
  correctly avoided.
- No failure condition triggered; RTL, accessibility, trust, and source hierarchy preserved; no
  conflict with DGA-grounded rules; no official-compliance claims.

Because the verdict is PASS, no Phase 1 edits are required. Optional (non-blocking) refinements for a
future pass, should the maintainers want them — not to be implemented in this task:

- **File:** `references/20-composition-selection.md` · **Section:** Operational Workspace vs Case
  Management Split View · **Problem:** the boundary is inferred case-by-case (case 04 needed a
  rationale). · **Recommended:** add one explicit decision cue ("rich per-case history/timeline →
  Case Management Split View; lightweight state progression → Operational Workspace"). · **Effect:**
  removes the only recurring archetype ambiguity.
- **File:** `references/21-visual-profile-selection.md` · **Section:** Data Intelligence /
  Operational Command (hybrid-dark note) · **Problem:** "wall display justifies a darker surface"
  appeared as an assumption in cases 03/04. · **Recommended:** state the environment test for a
  hybrid/dark analytical surface in one line so it is a rule, not an inference. · **Effect:** keeps
  the anti-Cinematic stance while allowing environment-justified dark surfaces predictably.
- **File:** `evaluation/rubric.md` / `evaluation/README.md` · **Section:** method · **Problem:** the
  baseline is self-consistency only (see §5). · **Recommended:** add a note that future runs should
  apply the gate blind on unseen briefs and, in later phases, score generated UI. · **Effect:**
  strengthens evaluation independence over time.
