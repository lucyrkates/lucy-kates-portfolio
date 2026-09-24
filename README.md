# lucy-kates-portfolio

Lucy Kates' portfolio — deployed at **lucyrkates.com** (Vercel).

## Structure

A Next.js (App Router) app:

- **`app/content.ts`** — all site copy and links (bio, experience, resume/LinkedIn/Figma URLs). Edit this to update the page.
- **`app/components/`** — `Hero` (name + Overview/Experience cards), `WorkOverview` (Figma prototype embed), `Icons`.
- **`app/globals.css`** — all styling.
- **`app/layout.tsx`** — fonts (Cabin, IBM Plex Mono via `next/font`) and page metadata.
- **`explorations/`** — past design explorations, kept for reference (not deployed):
  - **`v1/`** — the single-column early layout of the current design.
  - **`next-app/`** — the older "Journal" / v6 Next.js app (plus v7, v8, and a "Basic" variant).
  - **`assets/`** — loose mock images and source art.

## Running locally

```bash
npm install
npm run dev
```

Push to `main` to deploy.

## History

- **`v6-live`** — the older Next.js "Journal" design as the live site.
- **`static-live`** — the current design as a single static `index.html`, before it was rebuilt in React.
