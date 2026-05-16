import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Star, Globe, ExternalLink, Info } from "lucide-react";
import { providers, countryData, getLatestVerifiedDate } from "@/data/providers";
import LastUpdatedBadge from "@/components/LastUpdatedBadge";
import TrendIndicator from "@/components/TrendIndicator";
import { VerifiedBadge } from "@/components/LastUpdatedBadge";

type Params = { country: string };

const EDITORS_PICK_THRESHOLD = 4.6;

export async function generateStaticParams() {
  return Object.keys(countryData).map((country) => ({ country }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const data = countryData[params.country];
  if (!data) return {};
  return {
    title: `Best eSIM for ${data.label} — Top 5 Picks`,
    description: `Compare the best travel eSIM providers for ${data.label}. Verified pricing ranges, coverage, and Trustpilot ratings updated monthly.`,
  };
}

export default function CountryPage({ params }: { params: Params }) {
  const data = countryData[params.country];
  if (!data) notFound();

  const latestDate = getLatestVerifiedDate();

  const countryProviders = data.topProviderIds
    .map((id) => providers.find((p) => p.id === id))
    .filter(Boolean) as typeof providers;

  const otherCountries = Object.entries(countryData).filter(
    ([slug]) => slug !== params.country
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Back */}
      <Link
        href="/compare"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 mb-6 transition-colors"
      >
        <ArrowLeft size={16} />
        Back to all providers
      </Link>

      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-500 text-white rounded-2xl p-8 mb-8">
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <span className="text-6xl">{data.emoji}</span>
          <div>
            <h1 className="text-3xl font-extrabold">Best eSIM for {data.label}</h1>
            <p className="text-teal-100 mt-1">
              Top {countryProviders.length} providers for this destination
            </p>
          </div>
        </div>
        <LastUpdatedBadge date={latestDate} size="sm" label="Data verified" />
      </div>

      {/* Disclosures */}
      <div className="space-y-3 mb-8">
        <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-sm text-amber-800">
          <strong>Affiliate disclosure:</strong> Links below may be affiliate links. We earn a
          small commission at no extra cost to you. This does not influence our rankings.
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 text-sm text-blue-800 flex items-start gap-2">
          <Info size={15} className="mt-0.5 shrink-0" />
          <span>
            <strong>Pricing note:</strong> Prices are approximate ranges verified May 2026.
            Always confirm current pricing on each provider&apos;s official site before purchasing.
          </span>
        </div>
      </div>

      {/* Provider list */}
      <div className="space-y-5 mb-12">
        {countryProviders.map((provider, i) => {
          const isEditorsPick =
            i === 0 && provider.trustpilotRating >= EDITORS_PICK_THRESHOLD;

          return (
            <div
              key={provider.id}
              className={`bg-white rounded-2xl border p-6 ${
                i === 0
                  ? "border-teal-400 ring-1 ring-teal-200 shadow-teal-50 shadow-md"
                  : "border-gray-200 shadow-sm"
              }`}
            >
              <div className="flex flex-wrap items-start gap-4 justify-between">
                <div className="flex items-center gap-3">
                  {/* Rank badge */}
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shrink-0 ${
                      i === 0 ? "bg-teal-600 text-white" : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    #{i + 1}
                  </div>
                  {/* Brand icon */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg shrink-0"
                    style={{ backgroundColor: provider.brandColor, color: provider.brandTextColor }}
                  >
                    {provider.name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h2 className="text-xl font-bold text-gray-900">{provider.name}</h2>
                      {isEditorsPick && (
                        <span className="text-xs bg-teal-100 text-teal-700 font-semibold px-2.5 py-0.5 rounded-full">
                          Editor&apos;s Pick
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 mt-1 flex-wrap">
                      <div className="flex items-center gap-1">
                        <Star size={13} className="text-amber-400 fill-amber-400" />
                        <span className="text-sm font-semibold text-gray-700">
                          {provider.trustpilotRating.toFixed(1)} Trustpilot
                        </span>
                      </div>
                      <TrendIndicator trend={provider.trustpilotTrend} />
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Globe size={13} />
                        {provider.coverage} countries
                      </div>
                    </div>
                  </div>
                </div>

                {/* Price + CTA */}
                <div className="text-right shrink-0">
                  <div className="text-2xl font-bold text-gray-900">{provider.priceRange}</div>
                  <div className="text-xs text-gray-400 mb-2">approx. range</div>
                  <Link
                    href={provider.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="inline-flex items-center gap-1.5 bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors"
                  >
                    Get eSIM
                    <ExternalLink size={13} />
                  </Link>
                </div>
              </div>

              <p className="text-gray-600 text-sm mt-4 mb-4">{provider.description}</p>

              {/* Strengths */}
              <div className="flex flex-wrap gap-2 mb-3">
                {provider.strengths.map((s) => (
                  <span
                    key={s}
                    className="text-xs bg-teal-50 text-teal-700 border border-teal-100 px-2.5 py-1 rounded-full"
                  >
                    ✓ {s}
                  </span>
                ))}
              </div>

              {/* Weaknesses */}
              {provider.weaknesses.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {provider.weaknesses.map((w) => (
                    <span
                      key={w}
                      className="text-xs bg-gray-50 text-gray-500 border border-gray-200 px-2.5 py-1 rounded-full"
                    >
                      ✗ {w}
                    </span>
                  ))}
                </div>
              )}

              {/* Pricing info (replaces old plan list) */}
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-semibold text-gray-700">Pricing</span>
                  <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">
                    {provider.dataType === "unlimited"
                      ? "Unlimited"
                      : provider.dataType === "both"
                      ? "Fixed + Unlimited"
                      : "Fixed GB"}
                  </span>
                </div>
                <div className="text-lg font-bold text-gray-900 mb-1">{provider.priceRange}</div>
                <p className="text-sm text-gray-500">{provider.priceNote}</p>
                <p className="text-xs text-gray-400 mt-2">
                  Approximate range verified May 2026 — confirm on provider site.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100">
                <VerifiedBadge date={provider.lastVerified} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Other countries */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Other Destinations</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {otherCountries.map(([slug, { label, emoji }]) => (
            <Link
              key={slug}
              href={`/countries/${slug}`}
              className="bg-white rounded-xl border border-gray-200 p-4 text-center hover:border-teal-400 hover:shadow-sm transition-all"
            >
              <div className="text-3xl mb-1">{emoji}</div>
              <div className="font-semibold text-gray-800 text-sm">{label}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
