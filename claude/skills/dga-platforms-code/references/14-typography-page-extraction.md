# 14 — Typography page — verified extraction

Verified operational extraction from the official Platforms Code typography page content. Tokens are
mirrored in [`tokens/typography-v1.0.json`](../tokens/typography-v1.0.json).

## A. Source

- **Page:** https://design.dga.gov.sa/guidelines/foundations/typography
- **Title:** الطباعة - الخط
- **Source status:** official page content provided manually because the live page may be slow or
  client-side rendered.

## B. Typography definition

Typography in Platforms Code refers to selecting and arranging fonts to achieve consistent and
cohesive visual communication.

## C. Typography categories

Platforms Code classifies typography into two main styles:

- Display / العرض
- Text / النص

## D. Display vs Text rules

- Display styles are intended for large sizes and headings.
- Display styles should not be used for long body paragraphs.
- Text styles are recommended for most informational text, including body text, labels, and UI text.
- Display styles should be reserved mainly for headings to maintain a clean typographic hierarchy.

## E. IBM Plex Sans Arabic

- IBM Plex Sans is a modern, versatile typeface developed by IBM with Bold Monday.
- Released in 2017 as part of IBM's design initiative.
- Provides reliable contemporary typography across platforms and devices.
- Suitable for print and digital applications.
- In Platforms Code, IBM Plex Sans Arabic is the general-purpose typography family shown for regular
  platform text.

## F. IBM font weights

Verified weights and recommended implementation mapping:

| Weight | Value |
|--------|-------|
| Regular | 400 |
| Medium | 500 |
| Semibold | 600 |
| Bold | 700 |

## G. Line height

- Line height is the vertical distance between lines of text.
- It affects readability and visual balance.
- Adjust it based on font size and typeface to prevent text from appearing too compressed or too
  widely spaced.

## H. Verified typography scale

**Display**

| Style | Font size | Line height | Tracking |
|-------|-----------|-------------|----------|
| Display 2xl | 72px / 4.5rem | 90px / 5.625rem | -2% |
| Display xl | 60px / 3.75rem | 72px / 4.5rem | -2% |
| Display lg | 48px / 3rem | 60px / 3.75rem | -2% |
| Display md | 36px / 2.25rem | 44px / 2.75rem | -2% |
| Display sm | 30px / 1.875rem | 38px / 2.375rem | — |
| Display xs | 24px / 1.5rem | 32px / 2rem | — |

**Text**

| Style | Font size | Line height |
|-------|-----------|-------------|
| Text xl | 20px / 1.25rem | 30px / 1.875rem |
| Text lg | 18px / 1.125rem | 28px / 1.75rem |
| Text md | 16px / 1rem | 24px / 1.5rem |
| Text sm | 14px / 0.875rem | 20px / 1.25rem |
| Text xs | 12px / 0.75rem | 18px / 1.125rem |
| Text 2xs | 10px / 0.625rem | 14px / 0.875rem |

## I. Saudi Font

- The Saudi Font is an official font issued by the Saudi Ministry of Culture.
- It combines Arabic authenticity with visual clarity.
- It is suitable for digital and print design across platforms and media.
- It is available under a Ministry of Culture license for use in documents, designs, and digital
  content.
- In Platforms Code, Saudi Font is designated for **national and seasonal occasions only**, such as
  Saudi National Day and Founding Day.
- Its use should be limited to **main headings only**.
- It must not be used for paragraphs or long-form content, to preserve readability and browsing ease.

## J. Saudi Font weights

Verified weights and recommended implementation mapping:

| Weight | Value |
|--------|-------|
| Regular | 400 |
| Bold | 700 |

## K. Saudi Font restrictions

- Do not use Saudi Font as the default product font.
- Do not use Saudi Font for body text, paragraphs, labels, forms, tables, or long content.
- Use Saudi Font only for national or seasonal heading contexts when the project has the appropriate
  license and approval.
- Do not redistribute Saudi Font files in this repository.

## L. Typography usage tips

**Do**

- Choose appropriate line height to improve readability.
- Keep enough text spacing to avoid crowding.
- Prioritize readable font sizes for body text.
- Choose sizes that ensure clarity without causing user fatigue.

**Avoid**

- Very small font sizes, especially in body text.
- Inconsistent spacing, margins, padding, or line heights.
- Using display typography for long content.

## M. Accessibility and text colors

- Platforms Code text palettes aim to ensure consistency, readability, and accessibility for users
  with different visual abilities.
- Target accessibility standard: **WCAG 2.1 AA**.
- For lighter backgrounds numbered **400 and below**, suggested text colors include: Gray 500,
  Gray 600, Gray 700, Gray 950.
- For backgrounds numbered **500 and above**, white text is recommended.

Minimum contrast ratios from WCAG 2.1:

| Level | Ratio |
|-------|-------|
| AA | 4.5:1 |
| AA (large text) | 3:1 |
| AAA | 7:1 |
| AAA (large text) | 4.5:1 |

Large text definition stated: above 18.5 bold, or 24 regular.

## N. Compliance boundary

- This repository documents verified typography guidance for implementation alignment only.
- It does not certify official compliance.
- Formal compliance requires review by the responsible entity.
