# 22 — UI anti-patterns

> Supporting design-review guidance. It aligns with — and never overrides — DGA Platforms Code
> and the verified references (`13`–`16`) and tokens (`tokens/`). It reinforces existing rules and
> prohibitions; it adds no conflicting rule, token, spacing, component, or compliance claim.

Use this as a fast checklist of things to *flag*. Each anti-pattern lists the aligned corrective
direction and the governing verified reference. None of these introduce new official values.

## Visual hierarchy & CTA

- **Competing CTAs.** Two or more elements read as "primary." → One primary action per view; demote
  the rest. (`17`, `04`)
- **Weak or generic primary action.** Vague label, low emphasis. → Specific verb, clear emphasis
  built from verified type/color. (`17`, `20`)
- **Emphasis via invented styles.** New type sizes/weights/spacing/colors to force attention. → Use
  only verified type (`14`), semantic colors (`16`), and project/verified spacing.
- **Decoration competing with content.** Gradients/illustrations/motion that fight the task. →
  Remove; let structure and typography carry it. (`01`, `17`)

## Layout & spacing

- **Arbitrary one-off spacing.** Repeated magic numbers. → Use project or verified spacing tokens;
  introduce none. (`15`)
- **Cramped mobile / overflow.** Horizontal scroll, tight clusters. → Mobile-first, single-column
  where appropriate, no unintended overflow. (`09`)
- **Overloaded card.** One card carrying many ideas/actions. → One coherent idea per card. (`04`, `17`)

## RTL

- **Hardcoded left/right.** Non-logical spacing/alignment. → Use logical start/end utilities. (`07`)
- **Mirrored codes/IDs/Latin.** Reversed barcodes, IDs, phone numbers, URLs, brand names. → Keep LTR
  and bidi-isolated; mirror only directional icons/arrows. (`07`)
- **Broken stepper/breadcrumb direction.** "Next" advancing the wrong way. → Flow right-to-left. (`07`)

## Accessibility

- **Color-only status.** Meaning conveyed by color alone. → Pair with text and/or icon. (`08`, `16`)
- **Placeholder as label.** Essential instruction only in the placeholder. → Visible label always;
  help text near the field. (`05`)
- **Removed focus outline.** No visible focus. → Visible focus on every interactive element. (`08`)
- **Non-semantic controls.** `div`/`span` acting as buttons/links. → Real `button`/`a`, semantic
  HTML, correct heading order. (`08`)
- **Tiny touch targets / motion ignored.** → Adequate target size; respect reduced motion. (`08`, `09`)

## Content & Arabic

- **Vague errors.** «حدث خطأ» with no fix. → Say what's wrong and how to fix it. (`10`, `20`)
- **Literal translation.** Word-for-word, awkward Arabic. → Translate meaning; natural phrasing. (`10`)
- **Inconsistent terminology.** Same thing named differently across screens. → Stable vocabulary. (`10`)
- **Success color as decoration.** Strong success styling for non-success. → Reserve for genuine
  positive outcomes. (`16`, `20`)

## Behavior & trust

- **Missing empty/loading/error states.** Only the happy path designed. → Design all states. (`18`, `04`)
- **No feedback on action.** Silent submits/long waits. → Timely, visible status. (`18`)
- **Fabricated outcomes.** Inventing an official result/status on the client. → Reflect the server's
  source of truth; never fabricate. (`06`, `18`)
- **Emphasized destructive action.** Loud delete/irreversible action. → De-emphasize and confirm,
  naming the consequence. (`18`)

## Governance & boundary anti-patterns

- **Compliance claims.** "Officially compliant/certified." → Say "aligned with Platforms Code
  principles" only. (`SKILL.md`, `GOVERNANCE.md`)
- **Invented official values.** New tokens/spacing/components presented as DGA. → Use verified
  sources or mark "verify against the official source."
- **Unauthorized marks / real data.** Copied logos; real personal data in examples/fixtures. → Use
  authorized assets only; use clearly fake data. (`SECURITY.md`)
- **SaaS/marketing styling.** Promotional gloss where a government tone is required. → Calm, official,
  restrained. (`01`)

See also: `12-design-review-checklist.md`, `19-design-critique-rubric.md`, `17`, `18`, `20`.
