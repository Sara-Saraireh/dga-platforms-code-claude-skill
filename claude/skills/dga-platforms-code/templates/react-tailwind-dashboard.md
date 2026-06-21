# Template — Dashboard (React + Tailwind, RTL)

Illustrative admin/case dashboard shell: summary stats, a data table with accessible headers, and a
side navigation that mirrors in RTL. Adapt to the project; preserve authorization (only render
actions the user's role permits).

**Notes**
- RTL: side navigation sits on the right; use logical spacing.
- Table is semantic with `<th scope>`; status uses text + icon, not color alone.
- Provide empty and loading states (sketched below).

```jsx
// Dashboard.jsx
export default function Dashboard({ stats, rows, loading, nav }) {
  return (
    <div dir="rtl" lang="ar" className="mx-auto flex w-full max-w-6xl gap-6 px-4 py-6">
      <nav aria-label="التنقل الرئيسي" className="hidden w-56 shrink-0 md:block">
        <ul className="space-y-1">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={[
                  "block rounded-md px-3 py-2 text-sm",
                  item.current ? "bg-neutral-100 font-medium text-neutral-900" : "text-neutral-700 hover:bg-neutral-50",
                ].join(" ")}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <main className="min-w-0 flex-1">
        <h1 className="mb-5 text-2xl font-bold text-neutral-900">لوحة المتابعة</h1>

        <section aria-label="ملخص" className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-lg border border-neutral-200 p-4">
              <p className="text-sm text-neutral-500">{s.label}</p>
              <p className="mt-1 text-2xl font-bold text-neutral-900"><bdi>{s.value}</bdi></p>
            </div>
          ))}
        </section>

        <section aria-labelledby="cases-title" className="rounded-lg border border-neutral-200">
          <h2 id="cases-title" className="border-b border-neutral-200 p-4 text-lg font-semibold text-neutral-900">
            الطلبات
          </h2>

          {loading ? (
            <p className="p-6 text-neutral-600">جارٍ التحميل…</p>
          ) : rows.length === 0 ? (
            <p className="p-6 text-neutral-600">لا توجد طلبات لعرضها.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-start text-sm">
                <thead className="bg-neutral-50 text-neutral-600">
                  <tr>
                    <th scope="col" className="p-3 text-start font-medium">الرقم</th>
                    <th scope="col" className="p-3 text-start font-medium">العنوان</th>
                    <th scope="col" className="p-3 text-start font-medium">الحالة</th>
                    <th scope="col" className="p-3 text-start font-medium">التاريخ</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.id} className="border-t border-neutral-100">
                      <td className="p-3"><bdi className="font-mono">{r.id}</bdi></td>
                      <td className="p-3 text-neutral-900">{r.title}</td>
                      <td className="p-3">
                        <span className="inline-flex items-center gap-1 rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-700">
                          {r.statusLabel}
                        </span>
                      </td>
                      <td className="p-3 text-neutral-700"><bdi>{r.date}</bdi></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
```

**Adaptation checklist**
- Gate privileged actions/columns by role; never render actions the user can't perform.
- Map status labels to the project's consistent status vocabulary and tone tokens.
- On small screens, simplify: prioritize key stats and consider stacked cards over wide tables.
- Keep IDs, numbers, and dates LTR and isolated.

**Polish, states & mobile**
- **Metric cards:** label → value → short context/timeframe; keep the value prominent and numerals
  LTR (`references/26-component-anatomy-polish.md`).
- **Table states:** loading, empty, and a "no results after filter" state are all distinct from each
  other; the sketch shows loading/empty (`references/25-page-blueprints.md`, dashboard).
- **CTA hierarchy:** scope the primary action to the active region; de-emphasize and confirm
  destructive actions.
- **Mobile:** the side nav hides under `md`; consider stacked cards instead of a wide table, and keep
  density comfortable, not cramped. Verify RTL alignment.
- **Motion:** keep loading calm (a simple skeleton/spinner); any row/state transition is subtle and
  respects `prefers-reduced-motion`; status is never conveyed by motion alone
  (`references/27-motion-and-interaction-guidelines.md`).

**Charts & data visualization (composition)**

A government dashboard typically stacks, top → bottom (all `dir="rtl"`):

```
الصف: بطاقات المؤشرات (KPI cards) — أرقام رئيسية
الصف: الاتجاه الشهري (Line chart) — العرض الكامل
الصف: [ الطلبات حسب النوع (Bar) ]  [ توزيع الحالات (Donut) ]
الصف: جدول الطلبات (Table) — مراجعة دقيقة على مستوى الصف
```

- **KPI row:** `grid grid-cols-2 gap-4 sm:grid-cols-4` of `KpiCard`
  (`templates/charts/kpi-card.react-tailwind.md`).
- **Line chart section:** full-width trend in a `ChartContainer`
  (`templates/charts/line-chart.react-recharts.md`).
- **Bar chart section:** categorical comparison (`templates/charts/bar-chart.react-recharts.md`); use
  the horizontal bar for many/long Arabic labels.
- **Donut/status section:** simple part-to-whole with a required legend
  (`templates/charts/donut-chart.react-recharts.md`).
- Put bar + donut side by side: `grid gap-4 sm:grid-cols-2`.
- Keep the **table** as the operational source of truth for exact, row-level review.

**Chart states, RTL & accessibility**
- Every chart sits in a `ChartContainer` with title, description, accessible summary, and its own
  **empty / loading / error** state — one failing chart must not blank the dashboard.
- Charts mirror in RTL (reversed category/time axes, right-side numeric axis); numbers, dates, IDs
  stay LTR and isolated. Arabic labels are not truncated (use horizontal bar if long).
- Not color alone: labels/legend/patterns + status text; sufficient contrast; provide table
  fallbacks where feasible. See `references/29-data-visualization-and-charts.md`.
- **Charts are optional dependencies:** the Recharts templates require Recharts — use only if the
  project already uses it or the user approves; otherwise use the no-dependency fallbacks.

**Tokens & spacing**
- Map colors/type to the verified tokens (`tokens/colors-v1.0.json`, `tokens/typography-v1.0.json`);
  use semantic 600 tokens only for status. Chart colors map to verified roles in
  `tokens/chart-tokens-v1.0.json` (no invented chart palette).
- Spacing and the Tailwind utility scale here — **including chart spacing** — are **illustrative**,
  not official. Map them to approved project (or verified Platforms Code) spacing before production.
  Do not present them as official DGA spacing, and do not introduce unofficial colors, fonts, or
  spacing tokens.
