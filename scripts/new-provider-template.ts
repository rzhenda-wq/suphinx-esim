/**
 * Template for adding a new eSIM provider.
 * Copy this, fill in all fields, then add to src/data/providers.ts
 */

import type { Provider } from "../src/data/providers";

export const newProvider: Provider = {
  id: "provider-slug",               // lowercase, hyphenated, URL-safe
  name: "Provider Name",
  officialUrl: "https://www.example.com",
  affiliateUrl: "https://www.example.com?ref=suphinx", // get from affiliate program
  description:
    "One or two sentences explaining what makes this provider unique and who it's best for.",
  logo: "/logos/provider-slug.svg",  // add logo to public/logos/
  coverage: 0,                       // total number of countries
  supportedRegions: [],              // from: thailand, japan, usa, uk, france, global
  priceRange: "$X–Y",                // approximate range, e.g. "$4–89"
  priceNote: "Describe plan structure, e.g. 'Day-based unlimited plans, 1–30 days.'",
  priceStartsAt: 0,                  // approximate minimum in USD, for sorting only
  dataType: "fixed",                 // "fixed" | "unlimited" | "both"
  trustpilotRating: 4.0,             // from trustpilot.com/review/<domain>
  trustpilotTrend: "stable",         // "rising" | "stable" | "declining"
  strengths: [
    "Key strength 1",
    "Key strength 2",
    "Key strength 3",
  ],
  weaknesses: [
    "Known limitation 1",
    "Known limitation 2",
  ],
  lastVerified: "2026-05-16",        // today's date when you fill this in
  verifiedBy: "manual",
  sourceUrls: [
    "https://www.trustpilot.com/review/example.com",
    "https://www.example.com/pricing",
  ],
  addedDate: "2026-05-16",           // today's date
  status: "active",                  // start as "monitoring" if quality is uncertain
};

/*
AFTER ADDING THE PROVIDER:

1. Import and add to the `providers` array in src/data/providers.ts
2. Add supportedRegions that match countries in countryData (thailand/japan/usa/uk/france)
3. If it belongs in a country's top 5, update countryData[country].topProviderIds
4. Run: npm run build
5. Spot-check the /compare and country pages
6. Add to scripts/update-checklist.md for next month's tracking
*/
