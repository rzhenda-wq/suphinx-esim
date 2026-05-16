import type { Metadata } from "next";
import { getLatestVerifiedDate } from "@/data/providers";
import LastUpdatedBadge from "@/components/LastUpdatedBadge";
import ComparisonTable from "@/components/ComparisonTable";

export const metadata: Metadata = {
  title: "Compare All Travel eSIM Providers",
  description:
    "Side-by-side comparison of Airalo, Holafly, Saily, Nomad, and 8 more eSIM providers. Filter by country, budget, and data type.",
};

export default function ComparePage() {
  const latestDate = getLatestVerifiedDate();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <h1 className="text-3xl font-extrabold text-gray-900">Compare eSIM Providers</h1>
          <LastUpdatedBadge date={latestDate} size="sm" />
        </div>
        <p className="text-gray-600 max-w-2xl">
          We compare 12 leading travel eSIM providers on price, coverage, data, and user ratings.
          All data is manually verified monthly. Prices shown are starting rates — check each
          provider for the full plan range.
        </p>
      </div>

      {/* Affiliate disclosure */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-sm text-amber-800 mb-8">
        <strong>Disclosure:</strong> Some links on this page are affiliate links. We earn a small
        commission if you purchase through them, at no extra cost to you. This does not influence
        our rankings.
      </div>

      <ComparisonTable />
    </div>
  );
}
