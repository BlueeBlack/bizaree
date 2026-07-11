@AGENTS.md

# Bizaree Water — project facts

Single-page enquiry/marketing site for Bizaree Water. Frontend-only Next.js
(App Router, TypeScript strict, Tailwind v4). No backend, no database — the
enquiry form composes a message and opens WhatsApp (`wa.me`) or `mailto:`.
The whole route prerenders static.

## Commands

- `npm run dev` / `npm run build` / `npm start`
- `npm run lint` / `npm run typecheck`
- Port 3000 is often occupied on this machine — use `PORT=3100`.

## Where things live

- **All copy/content**: `src/lib/site.ts` (typed constants). Never hardcode
  content in components.
- Sections: `src/components/sections/` · motion primitives:
  `src/components/motion/` · fixed chrome: `src/components/chrome/`.
- Design tokens + signature devices (plus-grid, marquee, echo heading, pill
  rows): `src/app/globals.css`. Primary brand color is mint `#8ffbd6`
  (`--mint`); text accents on light bg use `--mint-deep #0b7a5c` for AA
  contrast. Never use pure black/white.
- Theme: `data-theme` on `<html>`, set pre-paint by an inline script in
  `layout.tsx`, persisted as `localStorage["bizaree-theme"]`. The same script
  adds the `js` class that gates reveal animations.

## Follows BlueeBlack conventions; deltas

- Styling is semantic-class CSS in `globals.css` rather than Tailwind
  utilities — the brutalist signature devices need handwritten CSS, and the
  static sibling site (`../`) shares the same stylesheet design.
- No react-hook-form/zod: the single enquiry form uses controlled inputs +
  native validation. Adopt RHF+zod if forms multiply.
- No TanStack Query / api client: there is no API.
- No Docker: deploy target is Vercel/Netlify or static export.
- No env vars yet; add `.env.example` the moment one appears.

## Motion rules

- Everything gated behind `prefers-reduced-motion` (CSS override + JS checks).
- Marquees are pure CSS (two identical halves, `translateX(-50%)` loop);
  pause-on-hover in CSS. Reveals via `useInView` (one-shot IO).
- Hero canvas caps DPR at 1.5 and pauses off-screen.

## Content parity

A dependency-free static build of the same design lives at the repo parent
(`../index.html`, `../styles.css`, `../script.js`). If content changes here
(products, contact, testimonials), mirror it there — source data documented
in `../bizaree-website-data.md`.
