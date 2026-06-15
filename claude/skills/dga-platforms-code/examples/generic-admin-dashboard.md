# Example — Admin dashboard (generic)

A product-agnostic worked example of an admin/case-review dashboard. All data is fake. Authorization
must be preserved — only render data and actions the user's role permits. No official logos or
compliance claims.

## Scenario

A reviewer signs in to monitor and act on incoming requests/cases. They see summary stats and a list
of cases, open one, and take an action (approve / reject / request changes).

## Layout (RTL)

- Side navigation on the **right** (mirrors in RTL); current item marked with `aria-current`.
- Summary stat cards (counts by status).
- A semantic table of cases with `<th scope>`, accessible sorting, and empty/loading states.
- Status shown as text + icon (consistent vocabulary), not color alone.

```jsx
{/* Reuse the Dashboard template */}
<Dashboard
  stats={[
    { label: "قيد المراجعة", value: "12" },
    { label: "مكتمل", value: "48" },
    { label: "مرفوض", value: "5" },
    { label: "الإجمالي", value: "65" },
  ]}
  rows={cases}        // fake rows; ids like CASE-000042
  loading={loading}
  nav={navItems}
/>
```

## Case detail and actions

- The detail view shows the case's state, owner, timestamps, and the inputs/attachments.
- Privileged actions (approve / reject / request changes) are gated by role and confirmed before
  applying; feedback is clear and audit-friendly.
- Actions reflect and update the server's source of truth; the UI never fabricates state.

```jsx
{canReview && (
  <div className="flex gap-3">
    <button onClick={approve}>اعتماد</button>
    <button onClick={reject}>رفض</button>
    <button onClick={requestChanges}>طلب تعديل</button>
  </div>
)}
```

## What makes it government-grade

- Clear state, ownership, and next action per case; consistent status vocabulary.
- Authorization respected — no actions or columns beyond the user's role.
- Accessible table and navigation; RTL-correct mirroring; IDs/dates kept LTR.
- Calm, scannable density; mobile simplification (prioritized stats, stacked cards).

## Manual-review items

- Verify role-based access control for every privileged action and column.
- Confirm status vocabulary and audit/logging requirements with the service owner.
- Verify accessibility of the table (headers, sorting, keyboard) with real content.
- Ensure fixtures use fake data only (see `SECURITY.md`).
