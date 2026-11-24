const assert = require("assert");
const L = require("../src/lib.js");

assert.strictEqual(L.agingBucket(0), "0-30");
assert.strictEqual(L.agingBucket(30), "0-30");
assert.strictEqual(L.agingBucket(31), "31-60");
assert.strictEqual(L.agingBucket(91), "90+");

const inv = { id: "a", total: 1000 };
assert.strictEqual(L.invoiceBalance(inv, [{ invoiceId: "a", amount: 400 }]), 600);
assert.strictEqual(L.invoiceBalance(inv, [{ invoiceId: "a", amount: 1500 }]), 0);

const rows = L.receivablesAging(
  [{ id: "c1" }, { id: "c2" }],
  [
    { id: "a", customerId: "c1", date: "2026-11-20", total: 1000 },
    { id: "b", customerId: "c1", date: "2026-08-01", total: 500 },
    { id: "c", customerId: "c2", date: "2026-11-01", total: 300 },
  ],
  [{ invoiceId: "c", amount: 300 }],
  "2026-11-24"
);
assert.strictEqual(rows.length, 1);
assert.strictEqual(rows[0].buckets["0-30"], 1000);
assert.strictEqual(rows[0].buckets["90+"], 500);

const s = L.salesByRep(
  [{ id: "r", target: 2000 }],
  [{ repId: "r", date: "2026-11-05", total: 500 }, { repId: "r", date: "2026-10-05", total: 900 }],
  "2026-11"
);
assert.strictEqual(s[0].sales, 500);
assert.strictEqual(s[0].achievement, 25);
console.log("all tests passed");
