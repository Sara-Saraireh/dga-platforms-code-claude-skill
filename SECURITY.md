# Security

This Skill is primarily concerned with **UI and UX**. UI work routinely sits next to authentication,
authorization, sessions, file upload, external APIs, and regulatory outputs. The rules below keep
that work safe.

## Core rules

- **Do not upload sensitive data to external tools.** Never paste production data, citizen/personal
  data, credentials, tokens, internal URLs, or unreleased regulatory content into external services
  while performing a task.
- **Do not expose secrets.** Do not print, log, or echo secrets, API keys, tokens, or connection
  strings. Do not commit `.env` files or secret material.
- **Do not hardcode tokens or secrets** in source, config, or examples. Use environment variables or
  the project's existing secret-management mechanism.
- **Preserve authentication and authorization.** Do not weaken, bypass, or "temporarily disable"
  login, session handling, role checks, or permission gates during UI work.
- **Avoid backend / security changes during UI-only work.** If a UI task appears to require a change
  to auth, validation, API contracts, or server logic, stop and flag it for explicit approval
  instead of changing it silently.
- **Redact real data in examples.** All examples, fixtures, and screenshots must use clearly fake,
  non-identifying data. No real names, national IDs, phone numbers, addresses, license numbers, or
  record identifiers.

## Review requirements for sensitive surfaces

When a task touches any of the following, require a security review before release and note it in
the manual-review items:

- **Login** — credential handling, lockout, error messages that must not leak account existence,
  and secure transport.
- **OTP / MFA** — code generation and verification handled server-side, rate limiting, expiry, no
  OTP values in logs or client state beyond what is required.
- **Sessions** — secure, http-only cookies or equivalent; correct expiry and renewal; logout fully
  clears state; no sensitive data persisted in `localStorage` where it should not be.
- **File upload** — type and size validation, server-side scanning where applicable, safe storage
  paths, and no execution of uploaded content. UI must not bypass server-side validation.
- **External APIs** — secrets never shipped to the client; requests authenticated; responses
  validated; failures degrade safely without leaking internal details.
- **Regulatory / official outputs** — results, certificates, statuses, and records that carry
  regulatory meaning must reflect the server's source of truth, must not be fabricated on the
  client, and must be reviewed for correctness and wording.

## Reporting

If you discover a vulnerability or a leak of secrets or personal data in this repository, do not open
a public issue with the details. Report it privately to the repository owner and rotate any exposed
credentials immediately.
