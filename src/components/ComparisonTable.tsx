"use client";

import { useState, useMemo } from "react";
import { providers } from "@/data/providers";
import ProviderCard from "./ProviderCard";
import { ArrowUpDown } from "lucide-react";

type SortKey = "rating" | "price" | "newest";
type FilterCountry = "all" | "thailand" | "japan" | "usa" | "uk" | "france";
type FilterDataType = "all" | "unlimited" | "fixed" | "both";

export default function ComparisonTable() {
  const [sortKey, setSortKey] = useState<SortKey>("rating");
  const [filterCountry, setFilterCountry] = useState<FilterCountry>("all");
  const [filterDataType, setFilterDataType] = useState<FilterDataType>("all");

  const filtered = useMemo(() => {
    let list = providers.filter((p) => p.status !== "deprecated");

    if (filterCountry !== "all") {
      list = list.filter(
        (p) =>
          p.supportedRegions.includes(filterCountry) ||
          p.supportedRegions.includes("global")
      );
    }

    if (filterDataType !== "all") {
      if (filterDataType === "unlimited") {
        list = list.filter((p) => p.dataType === "unlimited" || p.dataType === "both");
      } else if (filterDataType === "fixed") {
        list = list.filter((p) => p.dataType === "fixed" || p.dataType === "both");
      }
    }

    list = [...list].sort((a, b) => {
      if (sortKey === "rating") return b.trustpilotRating - a.trustpilotRating;
      if (sortKey === "price") return a.priceStartsAt - b.priceStartsAt;
      if (sortKey === "newest") return b.addedDate.localeCompare(a.addedDate);
      return 0;
    });

    return list;
  }, [sortKey, filterCountry, filterDataType]);

  return (
    <div>
      {/* Filter bar */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 mb-6">
        <div className="flex flex-wrap items-center gap-3">
          {/* Sort */}
          <div className="flex items-center gap-2">
            <ArrowUpDown size={15} className="text-gray-500" />
            <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Sort by:</span>
            <select
              value={sortKey}
              onChange={(e) => setSortKey(e.target.value as SortKey)}
              className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="rating">Trustpilot Rating</option>
              <option value="price">Starting Price (approx.)</option>
              <option value="newest">Newest Added</option>
            </select>
          </div>

          <div className="h-5 w-px bg-gray-200 hidden sm:block" />

          {/* Country filter */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Country:</span>
            <select
              value={filterCountry}
              onChange={(e) => setFilterCountry(e.target.value as FilterCountry)}
              className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="all">All Countries</option>
              <option value="thailand">🇹🇭 Thailand</option>
              <option value="japan">🇯🇵 Japan</option>
              <option value="usa">🇺🇸 USA</option>
              <option value="uk">🇬🇧 UK</option>
              <option value="france">🇫🇷 France</option>
            </select>
          </div>

          <div className="h-5 w-px bg-gray-200 hidden sm:block" />

          {/* Data type filter */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Data:</span>
            <select
              value={filterDataType}
              onChange={(e) => setFilterDataType(e.target.value as FilterDataType)}
              className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="all">Any Type</option>
              <option value="unlimited">Unlimited Available</option>
              <option value="fixed">Fixed GB Only</option>
            </select>
          </div>

          <div className="ml-auto text-sm text-gray-500">
            {filtered.length} provider{filtered.length !== 1 ? "s" : ""}
          </div>
        </div>
      </div>

      {/* Price disclaimer */}
      <p className="text-xs text-gray-400 mb-5 px-1">
        Prices are approximate ranges verified May 2026. Always confirm current pricing on each
        provider&apos;s official site.
      </p>

      {/* Cards grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-500">
          <p className="text-lg font-medium mb-2">No providers match your filters</p>
          <p className="text-sm">Try broadening your search criteria</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p) => (
            <ProviderCard key={p.id} provider={p} />
          ))}
        </div>
      )}
    </div>
  );
}
