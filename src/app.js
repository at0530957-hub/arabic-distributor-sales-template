(function () {
  const D = window.DEMO, L = window.Lib;
  const fmt = (n) => n.toLocaleString("ar-EG") + " ج.م";
  const month = D.today.slice(0, 7);
  const el = (id) => document.getElementById(id);

  const reps = L.salesByRep(D.reps, D.invoices, month);
  el("reps").innerHTML = reps.map((r) =>
    `<tr><td>${r.rep.name}</td><td>${r.rep.area}</td><td>${fmt(r.rep.target)}</td>` +
    `<td>${fmt(r.sales)}</td><td>${fmt(r.gap)}</td>` +
    `<td><div class="bar"><span style="width:${Math.min(100, r.achievement)}%"></span></div>${r.achievement}%</td></tr>`
  ).join("");

  const aging = L.receivablesAging(D.customers, D.invoices, D.payments, D.today);
  el("aging").innerHTML = aging.map((r) =>
    `<tr><td>${r.customer.name}</td>` +
    ["0-30", "31-60", "61-90", "90+"].map((b) => `<td class="${b === "90+" && r.buckets[b] ? "late" : ""}">${r.buckets[b] ? fmt(r.buckets[b]) : "-"}</td>`).join("") +
    `<td><b>${fmt(r.total)}</b></td></tr>`
  ).join("");

  const total = aging.reduce((s, r) => s + r.total, 0);
  const sales = reps.reduce((s, r) => s + r.sales, 0);
  const target = D.reps.reduce((s, r) => s + r.target, 0);
  el("kpis").innerHTML =
    `<div class="kpi"><small>مبيعات الشهر</small><b>${fmt(sales)}</b></div>` +
    `<div class="kpi"><small>الهدف</small><b>${fmt(target)}</b></div>` +
    `<div class="kpi"><small>إجمالي المديونيات</small><b>${fmt(total)}</b></div>`;
})();
