import { CheckCircle, Clock } from "lucide-react";

type Props = {
  date: string;
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
  label?: string;
};

export default function LastUpdatedBadge({
  date,
  size = "md",
  showIcon = true,
  label = "Last updated",
}: Props) {
  const formatted = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const sizeClasses = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-3 py-1",
    lg: "text-base px-4 py-2",
  };

  const iconSize = size === "lg" ? 16 : 14;

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-medium text-teal-700 bg-teal-50 border border-teal-200 rounded-full ${sizeClasses[size]}`}
    >
      {showIcon && <CheckCircle size={iconSize} className="text-teal-600" />}
      {label}: {formatted}
    </span>
  );
}

export function VerifiedBadge({ date }: { date: string }) {
  const formatted = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return (
    <span className="inline-flex items-center gap-1 text-xs text-gray-500">
      <Clock size={11} />
      Verified: {formatted}
    </span>
  );
}
