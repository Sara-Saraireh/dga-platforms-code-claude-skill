# Prompt — UI design critique only (no code changes)

Copy/paste this prompt when you want a **critique only** — an assessment of why a screen feels basic
and how to improve it — with **no file edits**.

---

Use the `dga-platforms-code` skill.

**Task:** Critique the UI at `<path or route>`. This is **read-only** — do **not** edit any files.

Do the following, in order:

1. **Inspect first.** Identify framework, routing, styling stack/tokens, and component structure.
   Note where business logic, APIs, auth/authorization, and validation live (you will not touch them).
2. **Read the references:** `17-visual-hierarchy-and-composition.md`,
   `23-design-direction-framework.md`, `24-high-fidelity-polish-rules.md`,
   `25-page-blueprints.md`, `26-component-anatomy-polish.md`,
   `27-motion-and-interaction-guidelines.md`, and `28-design-quality-gate.md`.
3. **Review visually and structurally.** Assess hero, hierarchy, cards, CTAs, content/Arabic,
   header/footer trust, desktop density, mobile density, state handling, motion appropriateness
   (subtle/purposeful, reduced-motion respected, never state-by-motion-alone), RTL, and accessibility.
4. **Identify why it feels basic.** Name concrete weaknesses with evidence (file/line), grouped by
   page area. Note the page type, primary task, and the main decision the user must make.
5. **Score the internal design quality gate** (`28-design-quality-gate.md`, 1–5 per item) with a
   one-line justification each. This is an internal review aid only, not an official score.
6. **Recommend specific improvements.** Tie each to a verified reference/token. Separate **quick
   wins** (low-risk presentation fixes) from **structural changes** (layout/flow/component rework).
   For below-3 items, state the recommended fix.
7. **Report only.** Output the critique, the gate scores, and the prioritized recommendations. Make
   **no code changes**.

Do not edit files, claim official compliance, copy official logos, invent token or spacing values,
present any third-party design system as official DGA guidance, or use real personal data. This is
**aligned with Platforms Code principles**, not official DGA compliance.
