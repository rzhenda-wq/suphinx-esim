import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Shield, RefreshCw, TrendingUp, MapPin } from "lucide-react";
import { providers, getLatestVerifiedDate } from "@/data/providers";
import LastUpdatedBadge from "@/components/LastUpdatedBadge";
import ProviderCard from "@/components/ProviderCard";

export const metadata: Metadata = {
  title: "Find the Best Travel eSIM — Compare 12 Providers",
  description:
    "Independent comparison of the top 12 travel eSIM providers. Monthly verified pricing, Trustpilot ratings, and coverage data.",
};

const destinations = [
  { slug: "thailand", label: "Thailand", emoji: "🇹🇭", description: "Beaches & temples" },
  { slug: "japan", label: "Japan", emoji: "🇯🇵", description: "Cities & culture" },
  { slug: "usa", label: "USA", emoji: "🇺🇸", description: "Coast to coast" },
  { slug: "uk", label: "UK", emoji: "🇬🇧", description: "London & beyond" },
  { slug: "france", label: "France", emoji: "🇫🇷", description: "Paris & Riviera" },
];

export default function HomePage() {
  const latestDate = getLatestVerifiedDate();
  const topProviders = providers
    .filter((p) => p.status === "active")
    .sort((a, b) => b.trustpilotRating - a.trustpilotRating)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-teal-700 via-teal-600 to-teal-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="mb-6 flex justify-center">
            <LastUpdatedBadge
              date={latestDate}
              size="lg"
              label="Data last verified"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Find Your Perfect Travel eSIM
            <br />
            <span className="text-teal-200">in Seconds</span>
          </h1>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto mb-10">
            We compare 12 top eSIM providers — prices, coverage, and real user ratings — so you
            can connect instantly when you land, anywhere in the world.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/compare"
              className="inline-flex items-center gap-2 bg-white text-teal-700 font-bold text-lg px-8 py-3.5 rounded-2xl hover:bg-teal-50 transition-colors shadow-lg"
            >
              Compare All Providers
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/quiz"
              className="inline-flex items-center gap-2 bg-teal-800 text-white font-bold text-lg px-8 py-3.5 rounded-2xl hover:bg-teal-900 transition-colors"
            >
              Take the Quiz
              <ArrowRight size={20} />
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-6 max-w-md mx-auto">
            {[
              { value: "12", label: "Providers" },
              { value: "200+", label: "Countries" },
              { value: "Monthly", label: "Updates" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="text-3xl font-extrabold">{value}</div>
                <div className="text-teal-200 text-sm mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Shield size={16} className="text-teal-600" />
              <span>Independent & unbiased reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <RefreshCw size={16} className="text-teal-600" />
              <span>Prices verified monthly</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp size={16} className="text-teal-600" />
              <span>Real Trustpilot ratings</span>
            </div>
          </div>
        </div>
      </section>

      {/* Popular destinations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center gap-2 mb-3">
          <MapPin size={20} className="text-teal-600" />
          <h2 className="text-2xl font-bold text-gray-900">Popular Destinations</h2>
        </div>
        <p className="text-gray-500 mb-8">Click a country to see the best eSIMs for that destination</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {destinations.map(({ slug, label, emoji, description }) => (
            <Link
              key={slug}
              href={`/countries/${slug}`}
              className="group bg-white rounded-2xl border border-gray-200 p-5 text-center hover:border-teal-400 hover:shadow-md transition-all"
            >
              <div className="text-4xl mb-2">{emoji}</div>
              <div className="font-bold text-gray-900 group-hover:text-teal-700 transition-colors">
                {label}
              </div>
              <div className="text-xs text-gray-500 mt-1">{description}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Top picks */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Top Rated This Month</h2>
              <p className="text-gray-500 mt-1">Ranked by verified Trustpilot rating</p>
            </div>
            <Link
              href="/compare"
              className="text-teal-600 font-semibold hover:underline hidden sm:block"
            >
              See all 12 →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topProviders.map((p, i) => (
              <ProviderCard key={p.id} provider={p} highlight={i === 0} rank={i + 1} />
            ))}
          </div>
          <div className="text-center mt-8 sm:hidden">
            <Link href="/compare" className="text-teal-600 font-semibold hover:underline">
              See all 12 providers →
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
          How Our Comparison Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "We research & verify",
              body: "Every month we manually check prices, coverage, and plans on each provider's official site.",
            },
            {
              step: "02",
              title: "We track trends",
              body: "We monitor Trustpilot ratings and flag providers that are rising or declining in user satisfaction.",
            },
            {
              step: "03",
              title: "You compare & decide",
              body: "Use our filters, quiz, and country pages to find the perfect eSIM. We earn a small commission if you buy — at no extra cost to you. Affiliate links are always disclosed.",
            },
          ].map(({ step, title, body }) => (
            <div key={step} className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="text-4xl font-extrabold text-teal-100 mb-3">{step}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Not sure which eSIM to choose?</h2>
          <p className="text-teal-100 text-lg mb-8">
            Answer 4 quick questions and we&apos;ll match you with the best eSIM for your trip.
          </p>
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 bg-white text-teal-700 font-bold text-lg px-8 py-3.5 rounded-2xl hover:bg-teal-50 transition-colors shadow-lg"
          >
            Take the Free Quiz
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
