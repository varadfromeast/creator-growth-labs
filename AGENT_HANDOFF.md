# Creator Growth Lab — Agent Handoff

## Overview

Creator Growth Lab is a Vite + React landing page for a selective creator-led software venture studio.

**Core pitch:** A trusted niche creator brings audience knowledge, product judgment, and distribution. Creator Growth Lab validates the problem, funds and builds the product, and operates the software business. Both parties share ownership and upside under a written venture agreement.

**Live site:** https://creator-growth-lab.com
**Repository:** https://github.com/varadfromeast/creator-growth-labs

## Positioning guardrails

- Say “partnership” or “venture,” not “development agency.”
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
