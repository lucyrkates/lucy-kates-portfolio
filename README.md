# lucy-kates-portfolio

Lucy Kates' portfolio — deployed at **lucyrkates.com** (Vercel).

## Structure

- **`index.html`** — the live site (a static page). This is what deploys to lucyrkates.com.
- **`favicon.ico`** — site icon.
- **`explorations/`** — past design explorations, kept for reference (not deployed):
  - **`v1/`** — the single-column early layout of the current design.
  - **`next-app/`** — the previous live site: a full Next.js app ("Journal" / v6, plus v7, v8, and a "Basic" variant). Run it with `npm install && npm run dev` inside that folder. Preserved in case of a future rebuild in Next.js.
  - **`assets/`** — loose mock images and source art.

## Editing the live site

Open `index.html`, edit, save. No build step — it's static. Push to `main` to deploy.

## History

The pre-restructure state (Next.js app as the live site) is tagged **`v6-live`**.
