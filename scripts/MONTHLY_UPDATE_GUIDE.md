# Monthly Update Guide — Suphinx eSIM Compare

Run this process on the **1st of every month** (or within the first week).

---

## 1. Pre-update Checklist

- [ ] Open `update-checklist.md` and create a dated copy (e.g. `update-2026-06.md`)
- [ ] Check Trustpilot for each provider (see URLs in `providers.ts → sourceUrls`)
- [ ] Note any providers with rating changes > 0.2

---

## 2. Update Each Provider

For each of the 12 providers in `src/data/providers.ts`:

### 2a. Verify Pricing
1. Visit the provider's official site
2. Check the cheapest plan price — update `plans[].priceUSD` if changed
3. Check if new plans were added or old plans removed

### 2b. Update Trustpilot Rating
1. Go to `https://www.trustpilot.com/review/<provider-domain>`
2. Update `trustpilotRating`
3. If rating went up ≥ 0.2 from last month → set `trustpilotTrend: "rising"`
4. If rating went down ≥ 0.2 → set `trustpilotTrend: "declining"`
5. Otherwise → set `trustpilotTrend: "stable"`

### 2c. Verify Coverage
- Update `coverage` (number of countries) if it changed significantly

### 2d. Update Dates
- Set `lastVerified` to today's date (`YYYY-MM-DD`)
- Set `verifiedBy: "manual"` after manual verification

---

## 3. Check Provider Status

Review each provider's status:
- `active` — actively selling plans, good service
- `monitoring` — concerns about quality, pricing, or support
- `deprecated` — shutting down or no longer recommended

---

## 4. Add New Providers (Optional)

If a promising new eSIM provider emerged:
1. Copy `scripts/new-provider-template.ts` 
2. Fill in all required fields
3. Add to `providers` array in `src/data/providers.ts`
4. Set `addedDate` to today
5. Add to relevant `countryData.topProviderIds` if they rank in top 5

---

## 5. Update Country Pages

For each of the 5 countries in `countryData`:
- Reorder `topProviderIds` based on current performance
- Ensure the #1 pick genuinely deserves the "Editor's Pick" badge

---

## 6. Quality Check

```bash
cd app
npm run build
```

Fix any TypeScript errors before deploying.

---

## 7. Deploy

```bash
# If using Vercel
git add src/data/providers.ts
git commit -m "chore: monthly data update $(date +%Y-%m)"
git push
```

Vercel will auto-deploy on push.

---

## 8. Post-Deploy

- [ ] Visit `/compare` and visually check the data looks correct
- [ ] Test the quiz with a few different inputs
- [ ] Check 2-3 country pages
- [ ] Verify "Last updated" badge shows the new date

---

## Notes

- Never change affiliate URLs without testing them first
- Keep `sourceUrls` updated with the actual pages you verified
- If a provider's official site changes structure, note it in the checklist
