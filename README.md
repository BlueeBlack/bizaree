# Bizaree Water — Next.js site

Enquiry-first marketing site for Bizaree Water (West Bengal's first fully
automated water packaging plant), built in a technical-brutalist style:
fixed mint plus-sign grid, viewport-filling display type, infinite marquee
tickers, stadium product pill rows, and a sentence-style enquiry form that
hands off to WhatsApp or email — no backend.

## Stack

- Next.js (App Router) + TypeScript (strict) + Tailwind CSS v4
- Zustand for the one piece of cross-component state (product → form prefill)
- Self-hosted Google fonts via `next/font` (Archivo / Inter / Fredoka)
- No animation libraries: CSS keyframes + IntersectionObserver + a 2D canvas

## Setup

```bash
npm install
npm run dev        # http://localhost:3000 (set PORT=3100 if 3000 is busy)
```

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Dev server |
| `npm run build` | Production build (fully static prerender) |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |

## Where things live

- `src/lib/site.ts` — **all site content** (products, testimonials, contact,
  nav, tickers). Edit copy here, not in components.
- `src/components/sections/` — one component per page section.
- `src/components/motion/` — Reveal, SplitHeading, Marquee, EchoHeading,
  HeroCanvas, CycleWord.
- `src/components/chrome/` — menu overlay, monogram, theme toggle, grid.
- `src/app/globals.css` — design tokens + the signature visual devices.

## Deploying

Any Node host or Vercel/Netlify works as-is. For plain static hosting,
add `output: "export"` to `next.config.ts` — the page is already fully
static, nothing else changes.

A dependency-free static version of the same design lives one folder up
(`../index.html`) for hosts without Node.
