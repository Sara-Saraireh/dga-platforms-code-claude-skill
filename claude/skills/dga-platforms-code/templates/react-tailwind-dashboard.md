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
