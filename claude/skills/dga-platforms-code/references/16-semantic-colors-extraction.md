# 16 — Semantic colors — verified extraction

Tokens are mirrored in [`tokens/colors-v1.0.json`](../tokens/colors-v1.0.json) under
`palettes.semantic`.

## A. Source

- **Source:** official **Color system** page
  (https://design.dga.gov.sa/guidelines/foundations/color-system), rendered and read **2026-06-21**.
  Version label on page: الإصدار 1.0.
- **Extraction status:** full ramps (25–950) verified for Error, Warning, Info, and Success.

> **Correction (2026-06-21).** An earlier extraction listed **Success 600 as `#1B8354`** (the SA
> primary green). That was wrong. Success is its **own** palette; the official **Success 600 is
> `#079455`**. Do not substitute the SA primary green for the success state.

## B. Verified semantic ramps

| Step | Error | Warning | Info | Success |
|------|-------|---------|------|---------|
| 25  | `#FFFBFA` | `#FFFCF5` | `#F5FAFF` | `#F6FEF9` |
| 50  | `#FEF3F2` | `#FFFAEB` | `#ECFDF3` ⚠ | `#ECFDF3` |
| 100 | `#FEE4E2` | `#FEF0C7` | `#D1E9FF` | `#DCFAE6` |
| 200 | `#FECDCA` | `#FEDF89` | `#B2DDFF` | `#ABEFC6` |
| 300 | `#FDA29B` | `#FEC84B` | `#84CAFF` | `#75E0A7` |
| 400 | `#F97066` | `#FDB022` | `#53B1FD` | `#47CD89` |
| 500 | `#F04438` | `#F79009` | `#2E90FA` | `#17B26A` |
| **600** | **`#D92D20`** | **`#DC6803`** | **`#1570EF`** | **`#079455`** |
| 700 | `#B42318` | `#B54708` | `#175CD3` | `#067647` |
| 800 | `#912018` | `#93370D` | `#1849A9` | `#085D3A` |
| 900 | `#7A271A` | `#7A2E0E` | `#194185` | `#074D31` |
| 950 | `#55160C` | `#4E1D09` | `#102A56` | `#053321` |

⚠ The official page prints **Info 50 as `#ECFDF3`** (identical to Success 50), which appears to be a
source typo for a blue palette. Confirm in the official Figma library before relying on Info 50.

## C. Usage rules

- Use **Error** for critical failures, destructive alerts, and validation errors.
- Use **Warning** for cautionary states requiring attention.
- Use **Success** for completed, approved, valid, or positive states.
- Use **Info** for neutral guidance, informational messages, and non-critical notices.
- Do not rely on color alone to communicate state. Pair semantic color with text, icons, and labels.
- **Success ≠ SA primary.** The SA primary green (`#1B8354`) and Success 600 (`#079455`) are distinct;
  do not interchange them.
