"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, ChevronLeft, MapPin, Calendar, Wifi, Briefcase, Star, ExternalLink } from "lucide-react";
import { providers, countryData } from "@/data/providers";
import TrendIndicator from "./TrendIndicator";

type QuizState = {
  destination: string;
  days: number | null;
  dataUsage: "light" | "moderate" | "heavy" | null;
  purpose: "tourist" | "business" | "nomad" | null;
};

const steps = ["Destination", "Duration", "Data Usage", "Purpose"];

function scoreProvider(provider: typeof providers[0], quiz: QuizState): number {
  let score = 0;

  // Region coverage match
  if (
    quiz.destination &&
    (provider.supportedRegions.includes(quiz.destination) ||
      provider.supportedRegions.includes("global"))
  ) {
    score += 30;
  }

  // Trustpilot rating (weighted heavily)
  score += provider.trustpilotRating * 8;

  // Trend bonus/penalty
  if (provider.trustpilotTrend === "rising") score += 5;
  if (provider.trustpilotTrend === "declining") score -= 8;

  // Data usage match
  const hasUnlimited = provider.dataType === "unlimited" || provider.dataType === "both";
  if (quiz.dataUsage === "heavy" && hasUnlimited) score += 20;
  if (quiz.dataUsage === "light" && provider.priceStartsAt < 5) score += 10;

  // Purpose match via strengths keywords
  if (
    quiz.purpose === "business" &&
    provider.strengths.some((s) => s.toLowerCase().includes("business"))
  ) {
    score += 12;
  }
  if (
    quiz.purpose === "nomad" &&
    (provider.strengths.some((s) => s.toLowerCase().includes("nomad")) ||
      provider.dataType === "unlimited" ||
      provider.dataType === "both")
  ) {
    score += 10;
  }

  return score;
}

export default function QuizWizard() {
  const [step, setStep] = useState(0);
  const [quiz, setQuiz] = useState<QuizState>({
    destination: "",
    days: null,
    dataUsage: null,
    purpose: null,
  });
  const [done, setDone] = useState(false);

  const results = done
    ? [...providers]
        .filter((p) => p.status === "active")
        .map((p) => ({ provider: p, score: scoreProvider(p, quiz) }))
        .sort((a, b) => b.score - a.score)
        .slice(0, 3)
    : [];

  function next() {
    if (step < steps.length - 1) setStep(step + 1);
    else setDone(true);
  }

  function back() {
    if (done) {
      setDone(false);
      setStep(steps.length - 1);
    } else {
      setStep(step - 1);
    }
  }

  const canProceed =
    (step === 0 && quiz.destination) ||
    (step === 1 && quiz.days) ||
    (step === 2 && quiz.dataUsage) ||
    (step === 3 && quiz.purpose);

  if (done) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Top eSIM Picks</h2>
          <p className="text-gray-500">
            Based on {countryData[quiz.destination]?.label || quiz.destination},{" "}
            {quiz.days} days, {quiz.dataUsage} data use
          </p>
        </div>
        <div className="space-y-4">
          {results.map(({ provider }, i) => (
            <div
              key={provider.id}
              className={`bg-white rounded-2xl border p-5 ${
                i === 0 ? "border-teal-400 ring-1 ring-teal-300" : "border-gray-200"
              }`}
            >
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-bold shrink-0"
                    style={{ backgroundColor: provider.brandColor, color: provider.brandTextColor }}
                  >
                    {provider.name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-gray-900">{provider.name}</span>
                      {i === 0 && (
                        <span className="text-xs bg-teal-100 text-teal-700 font-semibold px-2 py-0.5 rounded-full">
                          Best Match
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                      <Star size={12} className="text-amber-400 fill-amber-400" />
                      <span className="text-sm text-gray-600">
                        {provider.trustpilotRating.toFixed(1)} Trustpilot
                      </span>
                      <TrendIndicator trend={provider.trustpilotTrend} />
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-gray-900">{provider.priceRange}</div>
                  <div className="text-xs text-gray-500 mb-2">approx. range</div>
                  <Link
                    href={provider.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="inline-flex items-center gap-1 bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold px-3 py-1.5 rounded-lg transition-colors"
                  >
                    Get eSIM <ExternalLink size={12} />
                  </Link>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-3 line-clamp-2">{provider.description}</p>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-400 text-center mt-5">
          Prices are approximate ranges verified May 2026. Always confirm on the provider&apos;s
          official site.
        </p>

        <div className="flex justify-between mt-6">
          <button
            onClick={back}
            className="flex items-center gap-1 text-gray-600 hover:text-gray-900 font-medium transition-colors"
          >
            <ChevronLeft size={18} /> Change answers
          </button>
          <Link href="/compare" className="text-teal-600 font-semibold hover:underline">
            See all 12 providers →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress bar */}
      <div className="flex items-center gap-2 mb-8">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-2 flex-1">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                i < step
                  ? "bg-teal-600 text-white"
                  : i === step
                  ? "bg-teal-100 text-teal-700 border-2 border-teal-600"
                  : "bg-gray-100 text-gray-400"
              }`}
            >
              {i < step ? "✓" : i + 1}
            </div>
            {i < steps.length - 1 && (
              <div className={`flex-1 h-1 rounded ${i < step ? "bg-teal-600" : "bg-gray-200"}`} />
            )}
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
        {step === 0 && (
          <div>
            <div className="flex items-center gap-2 text-teal-600 mb-2">
              <MapPin size={20} />
              <span className="font-semibold">Step 1 of 4</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-5">
              Where are you traveling?
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(countryData).map(([slug, { label, emoji }]) => (
                <button
                  key={slug}
                  onClick={() => setQuiz({ ...quiz, destination: slug })}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    quiz.destination === slug
                      ? "border-teal-500 bg-teal-50 text-teal-700"
                      : "border-gray-200 hover:border-teal-300 hover:bg-gray-50"
                  }`}
                >
                  <div className="text-2xl mb-1">{emoji}</div>
                  <div className="font-semibold text-sm">{label}</div>
                </button>
              ))}
              <button
                onClick={() => setQuiz({ ...quiz, destination: "global" })}
                className={`p-4 rounded-xl border text-left transition-all ${
                  quiz.destination === "global"
                    ? "border-teal-500 bg-teal-50 text-teal-700"
                    : "border-gray-200 hover:border-teal-300 hover:bg-gray-50"
                }`}
              >
                <div className="text-2xl mb-1">🌍</div>
                <div className="font-semibold text-sm">Multiple Countries</div>
              </button>
            </div>
          </div>
        )}

        {step === 1 && (
          <div>
            <div className="flex items-center gap-2 text-teal-600 mb-2">
              <Calendar size={20} />
              <span className="font-semibold">Step 2 of 4</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-5">
              How long is your trip?
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "1–3 days", value: 2 },
                { label: "4–7 days", value: 5 },
                { label: "1–2 weeks", value: 10 },
                { label: "3–4 weeks", value: 25 },
                { label: "1–3 months", value: 60 },
                { label: "3+ months", value: 120 },
              ].map(({ label, value }) => (
                <button
                  key={value}
                  onClick={() => setQuiz({ ...quiz, days: value })}
                  className={`p-4 rounded-xl border font-semibold transition-all ${
                    quiz.days === value
                      ? "border-teal-500 bg-teal-50 text-teal-700"
                      : "border-gray-200 hover:border-teal-300 hover:bg-gray-50 text-gray-700"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <div className="flex items-center gap-2 text-teal-600 mb-2">
              <Wifi size={20} />
              <span className="font-semibold">Step 3 of 4</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              How much data do you use?
            </h2>
            <p className="text-gray-500 text-sm mb-5">Per day on average</p>
            <div className="space-y-3">
              {[
                {
                  value: "light" as const,
                  label: "Light — under 500MB/day",
                  desc: "Messaging, maps, checking email",
                },
                {
                  value: "moderate" as const,
                  label: "Moderate — 500MB–2GB/day",
                  desc: "Social media, video calls, streaming",
                },
                {
                  value: "heavy" as const,
                  label: "Heavy — 2GB+/day",
                  desc: "Remote work, 4K video, hotspot sharing",
                },
              ].map(({ value, label, desc }) => (
                <button
                  key={value}
                  onClick={() => setQuiz({ ...quiz, dataUsage: value })}
                  className={`w-full p-4 rounded-xl border text-left transition-all ${
                    quiz.dataUsage === value
                      ? "border-teal-500 bg-teal-50"
                      : "border-gray-200 hover:border-teal-300 hover:bg-gray-50"
                  }`}
                >
                  <div
                    className={`font-semibold ${
                      quiz.dataUsage === value ? "text-teal-700" : "text-gray-800"
                    }`}
                  >
                    {label}
                  </div>
                  <div className="text-sm text-gray-500 mt-0.5">{desc}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <div className="flex items-center gap-2 text-teal-600 mb-2">
              <Briefcase size={20} />
              <span className="font-semibold">Step 4 of 4</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-5">
              What&apos;s your primary purpose?
            </h2>
            <div className="space-y-3">
              {[
                {
                  value: "tourist" as const,
                  label: "Tourist / Leisure",
                  desc: "Holiday, sightseeing, short trips",
                  emoji: "🏖️",
                },
                {
                  value: "business" as const,
                  label: "Business Travel",
                  desc: "Meetings, corporate travel, reliability matters",
                  emoji: "💼",
                },
                {
                  value: "nomad" as const,
                  label: "Digital Nomad",
                  desc: "Long-term remote work while traveling",
                  emoji: "💻",
                },
              ].map(({ value, label, desc, emoji }) => (
                <button
                  key={value}
                  onClick={() => setQuiz({ ...quiz, purpose: value })}
                  className={`w-full p-4 rounded-xl border text-left transition-all flex items-center gap-4 ${
                    quiz.purpose === value
                      ? "border-teal-500 bg-teal-50"
                      : "border-gray-200 hover:border-teal-300 hover:bg-gray-50"
                  }`}
                >
                  <span className="text-2xl">{emoji}</span>
                  <div>
                    <div
                      className={`font-semibold ${
                        quiz.purpose === value ? "text-teal-700" : "text-gray-800"
                      }`}
                    >
                      {label}
                    </div>
                    <div className="text-sm text-gray-500">{desc}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-6">
        {step > 0 ? (
          <button
            onClick={back}
            className="flex items-center gap-1 text-gray-600 hover:text-gray-900 font-medium transition-colors"
          >
            <ChevronLeft size={18} /> Back
          </button>
        ) : (
          <div />
        )}
        <button
          onClick={next}
          disabled={!canProceed}
          className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold px-6 py-2.5 rounded-xl transition-colors"
        >
          {step === steps.length - 1 ? "See My Results" : "Continue"}
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
