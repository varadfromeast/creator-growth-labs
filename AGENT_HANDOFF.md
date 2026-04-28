# Creator Growth Lab — Agent Handoff

## What This Project Is

Creator Growth Lab is a Vite + React landing page for a **paid-growth Meta ads service** targeting creator-led businesses (coaches, fitness creators, personal brands).

**Core pitch:** We turn a creator's best-performing content into small, tested Meta ad campaigns. An agentic system handles targeting, budget pacing, A/B testing, and optimization 24/7. The creator approves everything before it goes live, then goes back to creating.

**Register:** Brand (marketing/landing page — design IS the product).

**Current live URL:** https://varadfromeast.github.io/creator-growth-labs/
**Repo:** https://github.com/varadfromeast/creator-growth-labs

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Build tool | Vite 8 |
| Framework | React 19 + JSX |
| Styling | Pure CSS (no framework) |
| Animation | `motion` (Framer Motion successor) |
| Icons | `lucide-react` |
| Fonts | Archivo (headings), Manrope (body) — loaded via Google Fonts in `index.html` |
| Deployment | GitHub Pages (served from `gh-pages` branch) |

---

## Project Structure

```
├── index.html              # HTML entry point, loads Google Fonts
├── vite.config.js          # Vite config. base: "./" for portable asset paths
├── package.json            # Dependencies + scripts
├── src/
│   ├── main.jsx           # React mount point
│   ├── App.jsx            # Page layout, all sections, scroll animations
│   ├── content.js         # ALL site copy lives here — edit this first
│   └── styles.css         # Full visual system, colors, layout, motion
├── dist/                   # Production build output (deployed to gh-pages)
└── AGENT_HANDOFF.md       # This file
```

### Key Files Explained

**`src/content.js`** — The single source of truth for all copy. Sections: hero, chapters, offer, process, systems, fit, FAQ, CTA. Edit copy here first, then verify in App.jsx if layout needs adjustment.

**`src/App.jsx`** — React component structure. Imports `content.js` and renders sections in order: Header → Hero → Marquee → Chapter 1 → Offer → Chapter 2 → Process → Chapter 3 → Systems → Fit → FAQ → Final CTA → Footer. Contains scroll-story animations using `motion/react`.

**`src/styles.css`** — Complete visual system. Uses CSS custom properties (OKLCH color space). Key sections: tokens (`:root`), layout components (`.shell`, `.hero`, etc.), section styles, animations (`@keyframes`), responsive breakpoints (`@media`).

**`vite.config.js`** — Minimal. `base: "./"` keeps asset paths relative so the site works on GitHub Pages subpaths or custom domains without changes.

---

## How to Run Locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev -- --host 127.0.0.1 --port 5173

# Open in browser
http://127.0.0.1:5173/
```

Do NOT open `index.html` directly — Vite/React needs the dev server.

## How to Build

```bash
npm run build
```

Output goes to `dist/` (3 files: `index.html`, `assets/*.js`, `assets/*.css`).

Preview the production build:
```bash
npm run preview -- --host 127.0.0.1 --port 4173
```

---

## How to Deploy

The site is deployed via **GitHub Pages** from the `gh-pages` branch.

### Deploy steps

```bash
# 1. Build first
npm run build

# 2. Deploy dist folder to gh-pages branch
cd dist
rm -rf .git
git init
git add .
git commit -m "Deploy: <describe changes>"
git branch -M gh-pages
git remote add origin https://github.com/varadfromeast/creator-growth-labs.git
git push -u origin gh-pages --force

# 3. Return to project root and push source to main
cd ..
git add src/ package.json vite.config.js index.html
git commit -m "<describe source changes>"
git push origin main
```

**Important:** GitHub Pages caches aggressively. After deploy, the live site may take 1-2 minutes to reflect changes. You can verify the build by checking the JS bundle filename in `dist/index.html` matches what's served.

---

## How to Make Changes

### 1. Copy changes
Edit `src/content.js`. Every section is an object property. The `App.jsx` references these via `content.hero`, `content.offer`, etc.

### 2. Section order or layout changes
Edit `src/App.jsx`. The `App()` function at the bottom defines the render order. Each section is a component (Hero, Offer, Process, etc.).

### 3. Visual/design changes
Edit `src/styles.css`. Uses CSS custom properties at the top (`:root`). The color system is OKLCH-based. Key tokens:
- `--canvas`, `--canvas-2` — warm background gradients
- `--paper` — main background
- `--ink`, `--ink-2` — text colors
- `--coral`, `--coral-strong` — accent/CTA color
- `--green`, `--green-strong` — success/active indicators

### 4. CTA / links
The `ExternalCta` component opens `content.instagramUrl` (currently `https://www.instagram.com/varad.th/`). All primary CTAs use this. The footer also links to Instagram.

---

## Current Brand Positioning

**Tone:** Warm, precise, quietly technical. Not a loud agency. Not a vague AI gimmick.

**Anti-references:** Generic AI SaaS pages, dark-blue tech dashboards, fake growth-hacking energy, vanity-metric bragging, template agency pages.

**Key phrases to preserve:**
- "Focus on content. We'll handle the ad layer."
- "Agentic system" (not "AI system")
- "Deep AI experts" (not "technical operators")
- "Talk with us — drop a DM on @varad.th"
- Emphasize: real clients, paid demand, no Ads Manager, creator keeps creating

---

## Design Context

The `impeccable` skill is available in this environment at `/Users/varad/.agents/skills/impeccable/`. It has:
- `PRODUCT.md` loaded (brand register, warm/precise personality)
- No `DESIGN.md` yet — run `$impeccable document` if you need one
- Available commands: craft, shape, teach, critique, polish, bolder, quieter, typeset, layout, colorize, delight, etc.

For design changes, load the skill first:
```bash
node /Users/varad/.agents/skills/impeccable/scripts/load-context.mjs
```

---

## Recent Changes (Last Agent Session)

1. **Hero headline** changed to: *"Focus on content. We'll handle the ad layer."*
2. **Hero lead** rewritten with sharper division of labor — creator creates, system handles ads
3. **All CTAs** now say *"Talk with us — drop a DM on @varad.th"* and link to Instagram
4. **Systems copy** changed from "technical operators" to "deep AI experts"
5. **Visual polish added:** hero ambient glow, marquee edge fades, story card border animation, process connector line, active system dots in console rows, CTA depth gradient
6. **FAQ** added: "What if I've tried ads before and they didn't work?"
7. **Proof strip** made visible on all screen sizes

---

## What Not to Do

- Don't change `base: "./"` in `vite.config.js` — GitHub Pages needs this
- Don't add heavy dependencies — keep it lightweight
- Don't use gradient text (`background-clip: text`) or glassmorphism as default
- Don't add fake dashboards or metrics
- Don't overpromise — no "guaranteed" language, no viral growth promises

---

## Notes for Next Agent

- The CTA links to Instagram DMs. If the user wants to switch to email, Calendly, or another channel, update `content.instagramUrl` and the CTA copy.
- The footer still says "Instagram: @varad.th" — this should stay for social proof even if primary CTA changes.
- The site is intentionally single-page. No routing needed.
- All animations respect `prefers-reduced-motion`.
- If testing visual changes, use `npm run dev` for fast iteration, then `npm run build` + deploy when satisfied.
