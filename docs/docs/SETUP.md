# Setup

No build step and no server needed.

1. Download or clone the repo.
2. Open `index.html` in a browser, or run `npx serve .` for a local server.
3. Run tests: `npm test` (Node 16+).

## Use your own data
Edit `src/demo-data.js`. It holds four lists: `reps`, `customers`, `invoices`, `payments`.
Keep real customer data out of public forks. Do not commit it.

## Host it free
GitHub Pages: Settings > Pages > Deploy from branch `main`, folder `/ (root)`.

## Ideas for contributors
- Load data from CSV or Google Sheets
- Add a login and a database (Firebase or Supabase)
- WhatsApp share button per rep
- English UI toggle
