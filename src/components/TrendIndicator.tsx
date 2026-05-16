import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import type { TrustpilotTrend } from "@/data/providers";

type Props = {
  trend: TrustpilotTrend;
  className?: string;
};

export default function TrendIndicator({ trend, className = "" }: Props) {
  if (trend === "rising") {
    return (
      <span
        className={`inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full ${className}`}
      >
        <TrendingUp size={12} />
        Rising
      </span>
    );
  }
  if (trend === "declining") {
    return (
      <span
        className={`inline-flex items-center gap-1 text-xs font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full ${className}`}
      >
        <TrendingDown size={12} />
        Declining
      </span>
    );
  }
  return (
    <span
      className={`inline-flex items-center gap-1 text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full ${className}`}
    >
      <Minus size={12} />
      Stable
    </span>
  );
}
