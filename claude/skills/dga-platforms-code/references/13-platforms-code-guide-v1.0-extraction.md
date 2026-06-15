# 13 — Platforms Code Guide v1.0 — verified extraction

Verified operational extraction from the official DGA introductory guide. Concise restatement only;
the official guide and live sources remain authoritative.

## Source metadata

- **Title:** كود المنصات — نظام التصميم الموحد للمملكة العربية السعودية
- **Issuer:** Digital Government Authority / هيئة الحكومة الرقمية
- **Date:** 17 November 2024
- **Document type:** دليل تعريفي (introductory guide)
- **Classification:** عام (public)
- **Version:** 1.0

## Definition of Platforms Code

Platforms Code is a national reference for designing and developing government platform interfaces.
It aims to improve user experience, unify government platform design, and provide a smooth and
inclusive digital experience for all users.

## Reason behind the name

The name "Platforms Code" is analogous to building codes. Just as building codes help govern quality
and safety in construction, Platforms Code provides a comprehensive reference for designing
government websites, platforms, and applications.

## Official objectives

- Consistent user experience.
- Unified reference for user interfaces.
- Contribution to international indicators.
- Digital inclusion support.

## System component counts

- 6 foundations.
- 55 components.
- 17 templates.
- 34 mobile application elements.

## Beneficiary groups

- **Designers:** use tested, ready-to-use tools and components to build excellent user experiences.
- **Developers:** use reusable UI component libraries with documentation and guidance.
- **Product managers:** improve product quality, support platform goals, accelerate innovation, and
  focus on user problems.

## National visual identity

- Green is connected to the Saudi flag.
- Black is connected to the bisht / mishlah.
- Gold is connected to Saudi traditional details and desert identity.
- Violet is connected to lavender appearing in Saudi landscapes during spring.

Only exact token values verified below (and in `tokens/colors-v1.0.json`) may be used as official
tokens in this repository. Verified palettes are **Gray, Gold, and SA**, plus **Semantic 600**.
Exact **violet** and **black** token values are **not** verified and must not be invented.

## Verified color tokens from the PDF

The verified Gray, Gold, and SA palettes are stored in
[`tokens/colors-v1.0.json`](../tokens/colors-v1.0.json). Key anchors:

- SA 600 `#1B8354` — core verified government-green token.
- Gold / Primary 600 `#DBA102` — gold accent.
- Gray scale `#FCFCFD` … `#0D121C` — surfaces, text, borders, neutral structure.

Do not add violet/black values or extra palettes unless verified from official sources.

## Verified typography information from the PDF

- Foundations include typography. The general-purpose platform family shown for regular text is
  IBM Plex Sans Arabic.
- Detailed, verified typography classification, weights, scale, and accessibility guidance are in
  [`14-typography-page-extraction.md`](14-typography-page-extraction.md) and
  [`tokens/typography-v1.0.json`](../tokens/typography-v1.0.json).

## Spacing status

- Spacing is one of the official foundations.
- Exact numeric spacing tokens are **not verified** in this repository. Do not invent them. See
  [`15-layout-and-spacing-page-extraction.md`](15-layout-and-spacing-page-extraction.md).

## Foundations

Foundations include:

- Colors.
- Typography.
- Icons.
- Spacing.
- Accessibility guidance.
- User experience.

## Components

Components are the basic building blocks used to build user interfaces. Examples include: buttons,
input fields, forms, lists, icons, navigation bars, notifications, and cards.

## Guidelines

The guide frames foundations, components, and templates as guidance for designing and developing
consistent, accessible government platform interfaces. Exact component anatomy and states must be
checked against live official sources or official design assets when needed.

## Templates

- Templates are ready structures that help build consistent, easy-to-use pages.
- The PDF confirms 17 templates but does not provide a fully readable list in the extracted guide.
- Do not invent template names in this repository; keep repository templates generic and clearly
  marked as implementation examples aligned with Platforms Code principles, not official DGA
  templates.

## Libraries

Platforms Code libraries include:

- **Figma design library** — tested, ready-to-use tools and components for designers.
- **Storybook developer tool** — build and document UI components in isolation before integration.
- **Mobile application library** — mobile UI elements and additional mobile components.

Do not copy or redistribute Figma or Storybook assets. Do not claim access unless the project
actually has it.

## Accessibility and inclusion

The guide connects Platforms Code with accessibility and WCAG-aware design. Interfaces must be
accessible for all users, including users with disabilities. See
[`08-accessibility.md`](08-accessibility.md).

## Future outlook

The guide mentions future support for innovative digital channels and technologies such as virtual
reality, augmented reality, artificial intelligence, generative AI, and automation of design and
development processes. **This is a vision note only** and must not become an implementation
requirement unless explicitly requested.

## Evaluation criteria

Evaluation goals:

- ضمان الامتثال / Ensure alignment with the unified guidance and best practices.
- الحفاظ على الجودة / Maintain user experience quality and interface consistency.
- تسهيل التحسين / Provide clear criteria and feedback mechanisms for continuous improvement.

Compliance levels (manual review aid only — not an official score this repository can issue):

| Level (Arabic) | Range |
|----------------|-------|
| غير ممتثل | 1 – 1.9 |
| امتثال ضعيف جدًا | 2 – 2.9 |
| امتثال ضعيف | 3 – 3.9 |
| امتثال أقل من المتوسط | 4 – 4.9 |
| امتثال عادل | 5 – 5.9 |
| امتثال متوسط | 6 – 6.9 |
| امتثال جيد | 7 – 7.9 |
| امتثال جيد جدًا | 8 – 8.9 |
| امتثال ممتاز | 9 – 9.9 |
| امتثال متميز | 10 |

## Compliance boundary

- This repository may support alignment with Platforms Code principles.
- It must not claim official compliance.
- Formal compliance requires review by the responsible entity.
