# Agape Orphanage & School — website design concept

A demo redesign prepared by **Kreatif Atelier** to pitch to Agape (agapeindia.org).
React + TypeScript + Vite + Tailwind CSS v4.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5180
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build
```

## What's real vs. demo

- **From agapeindia.org (confirm before launch):** story, founding facts, programs, the stats (200+, 1K+, 148, 50),
  the Suresh/Ashwini/Niktha stories, the CSR session list, the meal-sponsorship menu and prices, contact details, and the photos.
- **Demo / placeholder (clearly labelled in the UI):** donation checkout, the forms and newsletter (nothing is sent or stored),
  cause progress bars, impact dashboard extras and chart, report and policy documents, leadership profiles, bank details,
  and the four "sample update" articles.

## Where to change things

- Content: `src/data/site.ts`
- Design tokens and button styles: `src/styles.css`
- Payment integration point: `src/lib/payments.ts` (implement `PaymentProvider` for a real gateway, swap `activeProvider`)
- Photos: `public/images/`
