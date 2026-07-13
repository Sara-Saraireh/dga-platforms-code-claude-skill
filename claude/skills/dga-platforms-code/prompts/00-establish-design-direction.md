# Prompt — Establish design direction

Copy/paste this prompt to have Claude Code decide the frontend design direction **before** any layout
or code. Run it first — its output feeds the actual build/redesign prompts.

---

Use the `dga-platforms-code` skill.

**Task:** Establish the design direction for the frontend at `<path, route, or product description>`.
Decide *what kind of experience this product should be* before choosing any layout, component, or
accent. **Do not write frontend code and do not modify any files in this step.**

Do the following, in order:

1. **Inspect the project.** Identify the framework, routing, styling stack/tokens, existing
   components, entity, data contracts, and any prior screens. Infer from what already exists; do not
   ask about anything the repository already answers.
2. **Classify the product.** Pick one primary product class and, at most, one secondary influence
   using `references/18-product-experience-classification.md`. Classify by user task and usage
   environment — not by industry name, brand color, or the fact that it uses AI.
3. **Complete the design brief.** Fill the brief in `references/19-design-direction-framework.md`
   (product context, experience, direction). Keep each field to a phrase.
4. **Select the composition.** Choose one archetype and its single dominant element from
   `references/20-composition-selection.md`. A dashboard is not the default; a card grid is not the
   default.
5. **Select the visual profile.** Choose one conceptual profile from
   `references/21-visual-profile-selection.md`. Do not choose dark or cinematic styling just because
   the system uses AI. Remember accent theming is only a color-role choice, not the direction.
6. **Identify anti-patterns.** List the specific defaults this product must avoid, per
   `references/22-variation-and-repetition-control.md` (e.g. KPI wall above the task, uniform cards,
   accent-only variation, gratuitous effects). Confirm the direction differs from the last product in
   ≥3 design dimensions, or state the shared operational model.
7. **State assumptions.** List anything inferred that a human should confirm. Ask the user at most one
   or two targeted questions only if the direction is genuinely unclear and cannot be inferred.
8. **Produce the implementation direction.** Output a concise, structured summary: product class,
   filled brief highlights, chosen composition + dominant element, navigation model, density, surface
   strategy, visualization strategy, visual profile, patterns to avoid, and assumptions. Present two
   **structurally different** directions (differing in composition / hierarchy / interaction / density
   / navigation — not color) only when the direction is unclear or the user asks for options.

Keep the output structured but not excessively long. Treat the official DGA sources and the verified
extractions (`references/00-source-of-truth.md`, `references/13`–`17`, `29`) as the authority; the
design-direction references are interpretive guidance and must not be presented as official DGA rules.

Do not claim official compliance, copy official logos, invent token values, choose a direction based
only on color, default to a dashboard, or use real personal data.
