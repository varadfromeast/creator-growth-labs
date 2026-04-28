# Creator Growth Lab Handoff

## Project Location

Local project path:

`/Users/varad/Documents/New project 3`

This is a standalone Vite + React landing page for Creator Growth Lab. It is designed to sell a paid-growth Meta ads service for coaches, fitness creators, and personal brands.

## Current Positioning

Core pitch:

Creator Growth Lab turns high-signal creator content into paid Meta ad campaigns and assets. The expert agentic system monitors campaigns around the clock, handles the complex Meta ads operating layer, and moves spend toward ads showing buyer intent.

The copy should keep emphasizing:

- Real paying clients, paid demand, and people ready to pay.
- Relief from Ads Manager, ROAS math, optimization, and constant campaign monitoring.
- Technical credibility through terms like bidding strategy, budget pacing, attribution windows, learning-phase reads, ROAS, CPA, CTR, CPM, frequency, creative fatigue, and placement breakdowns.
- Creator focus: the visitor should feel free to keep coaching, creating, selling, and owning the creative/business side.

Avoid:

- Vague "warmer DMs" language.
- Viral-growth promises.
- Fake dashboard imagery.
- Repeating the same Meta ads jargon in every section.

## Architecture

Important files:

- `src/content.js`: primary site copy and section data. Edit sales pitch here first.
- `src/App.jsx`: React component structure, scroll-story sections, CTA links, layout order.
- `src/styles.css`: full visual system, typography, colors, responsive layout, motion.
- `PRODUCT.md`: brand strategy and user context for Impeccable.
- `vite.config.js`: Vite config. `base: "./"` keeps built assets portable for GitHub Pages and custom domains.

The CTA links point to:

`https://www.instagram.com/varad.th/`

## Running Locally

From the project folder:

```bash
npm install
npm run dev -- --host 127.0.0.1 --port 5173
```

Open:

`http://127.0.0.1:5173/`

Do not rely on opening `index.html` directly from the project root. Vite/React source needs the dev server, or a built `dist` folder.

## Build Check

Run:

```bash
npm run build
```

Output goes to:

`dist/`

Preview the production build with:

```bash
npm run preview -- --host 127.0.0.1 --port 4173
```

## Hosting On A Domain

Recommended easy options:

1. Vercel, Netlify, or Cloudflare Pages
   - Connect the GitHub repo.
   - Build command: `npm run build`
   - Output directory: `dist`
   - Add the custom domain in the provider dashboard.
   - Follow the provider DNS instructions, usually a CNAME for `www` and an A/ALIAS/CNAME target for the root domain.

2. GitHub Pages
   - Build the site with `npm run build`.
   - Deploy the `dist` folder to Pages.
   - Add the custom domain in GitHub Pages settings.
   - Add a `CNAME` file containing the domain to the deployed root, or place it in a future `public/CNAME` file so Vite copies it into `dist`.
   - DNS usually needs a CNAME for `www` pointing to `<github-username>.github.io`, plus GitHub Pages A records for the apex/root domain.

If the site will move from `https://varadfromeast.github.io/creator-growth-lab/` to a custom root domain, keep `base: "./"` unless a hosting platform specifically needs a different value.

## Notes For Next Agent

Use the Impeccable skill for frontend/design changes. This is a brand register project. The page should feel warm, precise, and quietly technical, not like a generic AI SaaS page.

Current rendered dashboard-style visuals have been removed from the React layout. There may still be unused CSS for the old lab mockup, but it is no longer rendered.
