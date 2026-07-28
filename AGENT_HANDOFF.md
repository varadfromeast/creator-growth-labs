# Creator Growth Lab — Agent Handoff

## Overview

Creator Growth Lab is a Vite + React landing page for creator app and SaaS partnerships.

**Core pitch:** A creator brings a trusted audience, product judgment, and agreed promotion. Creator Growth Lab validates the problem, funds and builds the app or SaaS, and operates the product. The partnership converts creator distribution into paying software customers and shares the upside under a written agreement.

**Live site:** https://creator-growth-lab.com
**Repository:** https://github.com/varadfromeast/creator-growth-labs

## Positioning guardrails

- Lead with “product partnership” and the conversion of creator distribution into paid users.
- Code generation is leverage, not the moat.
- Validation happens before production development.
- Qualify creators on trust, recurring pain, and buyer behavior—not follower count alone.
- Do not promise a universal 50/50 split. Exact economics are venture-specific.
- Do not imply guaranteed revenue or passive income.

## Tech stack

- Vite 8
- React 19
- Pure CSS with OKLCH tokens
- Motion for restrained entrance transitions
- Lucide React icons
- GitHub Pages deployment via `gh-pages`

## Key files

- `src/content.js`: landing-page copy and Formspree/Instagram links
- `src/App.jsx`: page structure and application modal
- `src/styles.css`: visual system and responsive layout
- `PRODUCT.md`: current product and brand context
- `public/CNAME`: production domain

## Commands

```bash
npm ci
npm run dev -- --host 127.0.0.1 --port 5173
npm run build
```

The page is intentionally single-route. `vite.config.js` uses `base: "./"` for GitHub Pages and should remain unchanged.
