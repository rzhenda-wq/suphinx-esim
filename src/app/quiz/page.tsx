import type { Metadata } from "next";
import QuizWizard from "@/components/QuizWizard";

export const metadata: Metadata = {
  title: "Find My Perfect eSIM — 4-Step Quiz",
  description:
    "Answer 4 quick questions about your destination, trip length, data needs, and purpose. We'll match you with the top 3 eSIMs for your trip.",
};

export default function QuizPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">
          Find Your Perfect eSIM
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Answer 4 quick questions and we&apos;ll recommend the best eSIM providers for your specific
          trip.
        </p>
      </div>
      <QuizWizard />
    </div>
  );
}
