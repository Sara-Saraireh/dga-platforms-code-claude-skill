# Prompt — Final quality gate

Copy/paste this prompt before declaring a UI task done, to run the full government-grade quality gate.

---

Use the `dga-platforms-code` skill.

**Task:** Run the final quality gate on `<path / route(s) / recent changes>` before release. Default
to **verification + a fix list**; apply only low-risk presentation fixes if I say "apply".

Do the following, in order:

1. **Inspect first.** Identify framework, routing, styling stack/tokens, and the scope of recent
   changes. Confirm where business logic, APIs, authentication, authorization, and validation live.
2. **Read** `references/12-design-review-checklist.md` and any area references needed (RTL,
   accessibility, components, forms, content, responsive, engineering).
3. **Verify against the full checklist:** government-grade tone, source alignment (no invented
   tokens, no copied logos, no compliance claim), layout, RTL, accessibility, components, forms,
   content, responsive behavior, and engineering safety.
4. **Confirm preservation.** Business logic, API contracts, auth/authorization, and validation are
   unchanged. Flag anything that looks like an unintended behavioral or security change.
5. **Run available checks** (lint, typecheck, build, tests) and report results honestly, including
   any pre-existing failures.
6. **Report.** Output: a checklist pass/fail per area with evidence (file/line), changed files if any
   fixes were applied, checks run and results, and the remaining manual-review items (branding/logo
   authorization, accessibility with assistive tech, security-sensitive surfaces, fake-data
   confirmation). Restate that this aligns with DGA principles and is **not** official compliance.

Do not claim official compliance, copy official logos, invent token values, change backend/security
logic, or use real personal data.
