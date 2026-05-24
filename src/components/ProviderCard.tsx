"use client";

import Link from "next/link";
import { Star, Globe, DollarSign, ThumbsDown, ArrowRight } from "lucide-react";
import type { Provider } from "@/data/providers";
import TrendIndicator from "./TrendIndicator";
import { VerifiedBadge } from "./LastUpdatedBadge";

type Props = {
  provider: Provider;
  highlight?: boolean;
  rank?: number;
};

const EDITORS_PICK_THRESHOLD = 4.6;

export default function ProviderCard({ provider, highlight = false, rank }: Props) {
  const isEditorsPick = provider.trustpilotRating >= EDITORS_PICK_THRESHOLD;

  return (
    <div
      className={`relative bg-white rounded-2xl border transition-shadow hover:shadow-lg ${
        highlight
          ? "border-teal-400 shadow-teal-100 shadow-md ring-1 ring-teal-300"
          : "border-gray-200 shadow-sm"
      }`}
    >
      {rank && rank === 1 && isEditorsPick && (
        <div className="absolute -top-3 left-4 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full">
          Best Match
        </div>
      )}
      {rank && rank <= 3 && (
        <div className="absolute -top-3 right-4 bg-gray-800 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
          #{rank}
        </div>
      )}

      <div className="p-5">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg shrink-0"
              style={{ backgroundColor: provider.brandColor, color: provider.brandTextColor }}
            >
              {provider.name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-bold text-gray-900 text-lg leading-tight">{provider.name}</h3>
                {isEditorsPick && (
                  <span className="text-xs bg-teal-100 text-teal-700 font-semibold px-2 py-0.5 rounded-full whitespace-nowrap">
                    Editor&apos;s Pick
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <div className="flex items-center gap-1">
                  <Star size={13} className="text-amber-400 fill-amber-400" />
                  <span className="text-sm font-semibold text-gray-700">
                    {provider.trustpilotRating.toFixed(1)}
                  </span>
                </div>
                <TrendIndicator trend={provider.trustpilotTrend} />
              </div>
            </div>
          </div>
          <div className="text-right shrink-0">
            <div className="text-xl font-bold text-gray-900">{provider.priceRange}</div>
            <div className="text-xs text-gray-500">approx. range</div>
          </div>
        </div>

        {/* Coverage + data type */}
        <div className="flex items-center gap-4 py-3 border-y border-gray-100 mb-3">
          <div className="flex items-center gap-1.5 text-sm text-gray-600">
            <Globe size={14} className="text-teal-600" />
            <span>
              <strong className="text-gray-900">{provider.coverage}</strong> countries
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-gray-600">
            <DollarSign size={14} className="text-teal-600" />
            <span>
              {provider.dataType === "unlimited"
                ? "Unlimited plans"
                : provider.dataType === "both"
                ? "Fixed + Unlimited"
                : "Fixed GB plans"}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{provider.description}</p>

        {/* Strengths */}
        <div className="flex flex-wrap gap-1.5 mb-2">
          {provider.strengths.slice(0, 3).map((s) => (
            <span
              key={s}
              className="text-xs bg-teal-50 text-teal-700 border border-teal-100 px-2 py-0.5 rounded-full"
            >
              ✓ {s}
            </span>
          ))}
        </div>

        {/* Weaknesses — honest comparison */}
        {provider.weaknesses.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {provider.weaknesses.slice(0, 2).map((w) => (
              <span
                key={w}
                className="text-xs bg-gray-50 text-gray-500 border border-gray-200 px-2 py-0.5 rounded-full flex items-center gap-1"
              >
                <ThumbsDown size={10} />
                {w}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="pt-1">
          <Link
            href={provider.affiliateUrl}
            target="_blank"
            rel="sponsored noopener"
            className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 mb-3"
          >
            Get eSIM
            <ArrowRight className="w-4 h-4" />
          </Link>
          <VerifiedBadge date={provider.lastVerified} />
        </div>
      </div>
    </div>
  );
}
