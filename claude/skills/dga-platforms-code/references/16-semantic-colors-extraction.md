# 16 — Semantic colors — verified extraction

Tokens are mirrored in [`tokens/colors-v1.0.json`](../tokens/colors-v1.0.json) under
`palettes.semantic`.

## A. Source

- **Source:** official semantic color screenshot provided manually in this task.
- **Extraction status:** only **Semantic 600** values are verified from this screenshot.

## B. Verified Semantic 600 colors

| Token | Value |
|-------|-------|
| Error 600 | `#D92D20` |
| Warning 600 | `#DC6803` |
| Success 600 | `#1B8354` |
| Info 600 | `#1570EF` |

## C. Arabic labels shown

| State | Label |
|-------|-------|
| Error | نص الخطأ الأولي |
| Warning | نص التحذير الأولي |
| Success | نص النجاح الأولي |
| Info | نص المعلومات الأولي |

## D. Usage rules

- Use **Error** for critical failures, destructive alerts, and validation errors.
- Use **Warning** for cautionary states requiring attention.
- Use **Success** for completed, approved, valid, or positive states.
- Use **Info** for neutral guidance, informational messages, and non-critical notices.
- Do not rely on color alone to communicate state.
- Pair semantic color with text, icons, and accessible labels.
- Do not invent missing semantic shades.
- Do not generate full semantic palettes unless verified from official sources.
- **Success 600 matches SA 600 `#1B8354`** — keep it explicitly listed under both SA and semantic
  success if used as a semantic token.
