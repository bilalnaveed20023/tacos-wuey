# Tacos Wuey · demo site

Sales demo for Chef Eddie Vargas's taquería on Vernor Highway in Mexicantown, Detroit. Mobile first, no backend.

- Next.js 15 (App Router), React 19, hand-written CSS (Tailwind v4 is only the reset)
- Fonts: Bodoni Moda, Instrument Sans, DM Mono (next/font/google)
- Everything editable lives in `src/lib/content.ts`
- Notable bits: the full menu in four tabs (`MenuTabs.tsx`, keyboard-accessible), the retail salsa-macha shelf, the New York Times strip

```bash
npm install
npm run dev -- -p 3110        # http://localhost:3110
PAGES=1 npm run build         # static export for GitHub Pages into .next-pages
```

Do not run `npm run build` while the dev server is running; it corrupts `.next`. Stop dev, delete `.next`, restart.

See `PLACEHOLDERS.md` for what is verified and what still needs the owner.
