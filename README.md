# Arabic Distributor Sales Template

A small, Arabic-first (RTL) dashboard template for sales and collections at small distributors, such as pharmacy or grocery wholesalers.

**Status:** early template (v0.1). It is a generic starting point, not a copy of any company's production system. **All data in this repo is fake demo data.**

## What it shows
- KPIs: month sales, target, total receivables
- Per-rep dashboard: target, sales, gap, achievement %
- Customer receivables aging: 0-30, 31-60, 61-90, 90+ days
- Pure logic in `src/lib.js` with tests in `tests/`

## Quick start
```
git clone <this repo>
open index.html     # or: npx serve .
npm test
```
See [docs/SETUP.md](docs/SETUP.md).

## Roadmap
CSV import, login and database, WhatsApp status button for reps, English toggle. Issues and PRs are welcome.

## License
MIT

---

# قالب مبيعات وتحصيل للموزعين

قالب بسيط بالعربي (من اليمين لليسار) للوحات المبيعات والتحصيل لدى الموزعين الصغار، مثل مخازن الأدوية والبقالة.

**الحالة:** نسخة أولية. القالب عام ومش نسخة من نظام شركة معينة. **كل البيانات في المشروع وهمية للتجربة.**

## المحتوى
- مؤشرات: مبيعات الشهر، الهدف، إجمالي المديونيات
- لوحة كل مندوب: الهدف، المبيعات، الفجوة، نسبة التحقيق
- أعمار ديون العملاء: 0-30 و31-60 و61-90 وأكثر من 90 يوم
- المنطق في `src/lib.js` وعليه اختبارات في `tests/`

## التشغيل
افتح `index.html` في المتصفح، أو شغّل `npm test` للاختبارات. التفاصيل في [docs/SETUP.md](docs/SETUP.md).

المساهمات مرحب بها.
