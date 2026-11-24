// Pure functions: sales totals, receivables aging, rep achievement.
// Works in the browser (window.Lib) and in Node (module.exports).
(function (root) {
  const DAY = 86400000;

  function daysBetween(a, b) {
    return Math.floor((new Date(b) - new Date(a)) / DAY);
  }

  // Outstanding balance of one invoice = total - sum of payments.
  function invoiceBalance(inv, payments) {
    const paid = payments
      .filter((p) => p.invoiceId === inv.id)
      .reduce((s, p) => s + p.amount, 0);
    return Math.max(0, inv.total - paid);
  }

  // Buckets: 0-30, 31-60, 61-90, 90+ days since invoice date.
  function agingBucket(days) {
    if (days <= 30) return "0-30";
    if (days <= 60) return "31-60";
    if (days <= 90) return "61-90";
    return "90+";
  }

  function receivablesAging(customers, invoices, payments, today) {
    return customers
      .map((c) => {
        const buckets = { "0-30": 0, "31-60": 0, "61-90": 0, "90+": 0 };
        invoices
          .filter((i) => i.customerId === c.id)
          .forEach((i) => {
            const bal = invoiceBalance(i, payments);
            if (bal > 0) buckets[agingBucket(daysBetween(i.date, today))] += bal;
          });
        const total = Object.values(buckets).reduce((a, b) => a + b, 0);
        return { customer: c, buckets, total };
      })
      .filter((r) => r.total > 0)
      .sort((a, b) => b.total - a.total);
  }

  function salesByRep(reps, invoices, month) {
    return reps.map((r) => {
      const sales = invoices
        .filter((i) => i.repId === r.id && i.date.startsWith(month))
        .reduce((s, i) => s + i.total, 0);
      return {
        rep: r,
        sales,
        gap: Math.max(0, r.target - sales),
        achievement: r.target ? Math.round((sales / r.target) * 100) : 0,
      };
    });
  }

  const api = { daysBetween, invoiceBalance, agingBucket, receivablesAging, salesByRep };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.Lib = api;
})(typeof window !== "undefined" ? window : globalThis);
