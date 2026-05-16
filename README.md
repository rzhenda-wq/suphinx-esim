# Suphinx eSIM Compare

Independent comparison of the top 12 travel eSIM providers. Built with Next.js 14 App Router, TypeScript, and Tailwind CSS.

## Features

- **12 providers compared** — Airalo, Holafly, Saily, Jetpac, Nomad, Ubigi, aloSIM, MobiMatter, FlexiRoam, Maya Mobile, GigSky, Sim Local
- **Filter & sort** — by country, budget, data type, Trustpilot rating
- **Trend indicators** — rising/stable/declining per provider
- **4-step quiz** — personalized eSIM recommendations
- **Country pages** — Thailand, Japan, USA, UK, France
- **Monthly update system** — checklist + guide for keeping data fresh
- **SEO-optimized** — metadata on every page, static generation for country pages

## Quick Start

```bash
cd app
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── src/
│   ├── app/
│   │   ├── page.tsx                     # Home
│   │   ├── compare/page.tsx             # All providers
│   │   ├── quiz/page.tsx                # 4-step quiz
│   │   ├── countries/[country]/page.tsx # Country pages
│   │   └── layout.tsx
│   ├── components/
│   │   ├── ProviderCard.tsx
│   │   ├── ComparisonTable.tsx
│   │   ├── QuizWizard.tsx
│   │   ├── LastUpdatedBadge.tsx
│   │   ├── TrendIndicator.tsx
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── data/
│       └── providers.ts                 # All provider data lives here
└── scripts/
    ├── MONTHLY_UPDATE_GUIDE.md          # Step-by-step update process
    ├── update-checklist.md              # Monthly tracking sheet
    └── new-provider-template.ts         # Template for new providers
```

## Monthly Update Process

See `scripts/MONTHLY_UPDATE_GUIDE.md` for the full process.

**TL;DR:**
1. Go through `scripts/update-checklist.md`
2. Update prices, ratings, and dates in `src/data/providers.ts`
3. Run `npm run build` to verify no TypeScript errors
4. Commit and deploy

## Adding a New Provider

1. Copy `scripts/new-provider-template.ts`
2. Fill in all required fields
3. Add to the `providers` array in `src/data/providers.ts`
4. Add to relevant `countryData.topProviderIds` if it ranks top 5
5. Run `npm run build`

## Deployment

The site is designed for [Vercel](https://vercel.com) deployment:

```bash
npm i -g vercel
vercel --prod
```

Country pages are statically generated at build time via `generateStaticParams`.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript** (strict mode)
- **Tailwind CSS**
- **Lucide React** icons

## Affiliate Disclosure

Links to eSIM providers may be affiliate links. Suphinx earns a small commission if you purchase through these links, at no extra cost to you. Rankings are based on our independent assessment of pricing, coverage, and user satisfaction.
