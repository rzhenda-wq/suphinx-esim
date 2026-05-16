export type TrustpilotTrend = "rising" | "stable" | "declining";
export type VerifiedBy = "manual" | "automated";
export type ProviderStatus = "active" | "monitoring" | "deprecated";
export type DataType = "fixed" | "unlimited" | "both";

export type Provider = {
  id: string;
  name: string;
  officialUrl: string;
  affiliateUrl: string;
  description: string;
  logo: string;
  coverage: number;
  supportedRegions: string[];   // for country filtering (thailand/japan/usa/uk/france/global)
  priceRange: string;           // e.g. "$4–89" — approximate, verify on provider site
  priceNote: string;            // explains plan structure
  priceStartsAt: number;        // approximate minimum for sorting only
  dataType: DataType;
  trustpilotRating: number;
  trustpilotTrend: TrustpilotTrend;
  strengths: string[];
  weaknesses: string[];
  brandColor: string;           // hex — background for letter icon
  brandTextColor: string;       // "#ffffff" or "#1f2937" for contrast
  lastVerified: string;         // YYYY-MM-DD
  verifiedBy: VerifiedBy;
  sourceUrls: string[];
  addedDate: string;
  status: ProviderStatus;
};

export const providers: Provider[] = [
  {
    id: "airalo",
    name: "Airalo",
    officialUrl: "https://www.airalo.com",
    affiliateUrl: "https://www.airalo.com?ref=suphinx",
    description:
      "The world's largest travel eSIM marketplace with 200+ countries covered. Great variety of local, regional and global plans, though Trustpilot scores are more mixed than competitors.",
    logo: "/logos/airalo.svg",
    coverage: 200,
    supportedRegions: ["thailand", "japan", "usa", "uk", "france", "global"],
    priceRange: "$4–89",
    priceNote: "GB-based fixed plans. Thailand has 1GB to unlimited options.",
    priceStartsAt: 4,
    dataType: "fixed",
    trustpilotRating: 3.7,
    trustpilotTrend: "stable",
    strengths: ["200+ countries", "Huge plan variety", "Beginner-friendly app"],
    weaknesses: ["Lower Trustpilot score than rivals", "Reports of connectivity issues"],
    brandColor: "#1B2A4A",
    brandTextColor: "#ffffff",
    lastVerified: "2026-05-16",
    verifiedBy: "manual",
    sourceUrls: ["https://www.trustpilot.com/review/airalo.com"],
    addedDate: "2024-01-01",
    status: "active",
  },
  {
    id: "holafly",
    name: "Holafly",
    officialUrl: "https://esim.holafly.com",
    affiliateUrl: "https://esim.holafly.com?ref=suphinx",
    description:
      "Unlimited-data specialist with one of the largest trusted review bases (87,000+ Trustpilot reviews). Best for travelers who don't want to count gigabytes.",
    logo: "/logos/holafly.svg",
    coverage: 160,
    supportedRegions: ["thailand", "japan", "usa", "uk", "france"],
    priceRange: "$3.90–64.90",
    priceNote: "Day-based, unlimited data only. Choose 1–90 days.",
    priceStartsAt: 3.9,
    dataType: "unlimited",
    trustpilotRating: 4.6,
    trustpilotTrend: "stable",
    strengths: ["Unlimited data", "87,000+ Trustpilot reviews", "Simple day-based pricing"],
    weaknesses: ["Hotspot capped at 1GB/day", "Pricier than GB-based rivals", "Vague fair-use policy"],
    brandColor: "#B45309",
    brandTextColor: "#ffffff",
    lastVerified: "2026-05-16",
    verifiedBy: "manual",
    sourceUrls: ["https://www.trustpilot.com/review/holafly.com"],
    addedDate: "2024-01-01",
    status: "active",
  },
  {
    id: "saily",
    name: "Saily",
    officialUrl: "https://saily.com",
    affiliateUrl: "https://saily.com?ref=suphinx",
    description:
      "Privacy-focused eSIM from the NordVPN team. Includes ad blocker and web protection. Offers the most generous unlimited daily cap (5GB/day at full speed) among major providers.",
    logo: "/logos/saily.svg",
    coverage: 200,
    supportedRegions: ["thailand", "japan", "usa", "uk", "france", "global"],
    priceRange: "$1.99–unlimited",
    priceNote: "Fixed GB plans and unlimited. Unlimited capped at 5GB/day high speed.",
    priceStartsAt: 1.99,
    dataType: "both",
    trustpilotRating: 4.7,
    trustpilotTrend: "rising",
    strengths: ["Built-in ad blocker & security", "Generous 5GB/day unlimited cap", "Unlimited hotspot included"],
    weaknesses: ["Newer brand (launched 2024)", "Some unlimited plans region-limited"],
    brandColor: "#1D4ED8",
    brandTextColor: "#ffffff",
    lastVerified: "2026-05-16",
    verifiedBy: "manual",
    sourceUrls: ["https://www.trustpilot.com/review/saily.com"],
    addedDate: "2024-06-01",
    status: "active",
  },
  {
    id: "jetpac",
    name: "Jetpac",
    officialUrl: "https://www.jetpacglobal.com",
    affiliateUrl: "https://www.jetpacglobal.com?ref=suphinx",
    description:
      "The highest-rated eSIM on Trustpilot with unique travel perks. Keeps WhatsApp, Google Maps and Uber running even after your data allowance runs out.",
    logo: "/logos/jetpac.svg",
    coverage: 200,
    supportedRegions: ["thailand", "japan", "usa", "uk", "france", "global"],
    priceRange: "$1–66",
    priceNote: "Data-focused plans. New users can get 1GB/4 days for $1.",
    priceStartsAt: 1,
    dataType: "fixed",
    trustpilotRating: 4.8,
    trustpilotTrend: "rising",
    strengths: ["Highest Trustpilot rating (4.8)", "Airport lounge access via SmartDelay", "Essential apps work after data runs out"],
    weaknesses: ["No traditional voice/SMS", "Smaller brand vs. Airalo/Holafly"],
    brandColor: "#6D28D9",
    brandTextColor: "#ffffff",
    lastVerified: "2026-05-16",
    verifiedBy: "manual",
    sourceUrls: ["https://www.trustpilot.com/review/jetpacglobal.com"],
    addedDate: "2024-03-01",
    status: "active",
  },
  {
    id: "nomad",
    name: "Nomad",
    officialUrl: "https://www.getnomad.app",
    affiliateUrl: "https://www.getnomad.app?ref=suphinx",
    description:
      "Reliable mid-range provider with excellent price-per-GB value and notable family bundle plans. Good choice for Asia and Europe trips.",
    logo: "/logos/nomad.svg",
    coverage: 150,
    supportedRegions: ["thailand", "japan", "usa", "uk", "france"],
    priceRange: "$5–unlimited",
    priceNote: "Fixed GB plans and unlimited options. Family bundles available.",
    priceStartsAt: 5,
    dataType: "both",
    trustpilotRating: 4.7,
    trustpilotTrend: "stable",
    strengths: ["Strong price-per-GB value", "Family bundle plans", "Good Europe and Asia coverage"],
    weaknesses: ["Slightly smaller coverage footprint than top-tier providers"],
    brandColor: "#1F2937",
    brandTextColor: "#ffffff",
    lastVerified: "2026-05-16",
    verifiedBy: "manual",
    sourceUrls: ["https://www.trustpilot.com/review/getnomad.app"],
    addedDate: "2024-01-01",
    status: "active",
  },
  {
    id: "ubigi",
    name: "Ubigi",
    officialUrl: "https://cellnex-retail.com",
    affiliateUrl: "https://cellnex-retail.com?ref=suphinx",
    description:
      "Established provider backed by Japanese telecom giant NTT (Transatel). A genuine standout for laptop users — one of the few eSIMs with native laptop eSIM support.",
    logo: "/logos/ubigi.svg",
    coverage: 200,
    supportedRegions: ["thailand", "japan", "usa", "uk", "france", "global"],
    priceRange: "$3.90–82",
    priceNote: "Data-only plans. Prices vary widely by region.",
    priceStartsAt: 3.9,
    dataType: "both",
    trustpilotRating: 4.1,
    trustpilotTrend: "stable",
    strengths: ["Backed by NTT (Transatel)", "Laptop eSIM support", "Reliable in major cities"],
    weaknesses: ["Customer support reported as slow", "Some plans pricier than rivals"],
    brandColor: "#0E7490",
    brandTextColor: "#ffffff",
    lastVerified: "2026-05-16",
    verifiedBy: "manual",
    sourceUrls: ["https://www.trustpilot.com/review/ubigi.com"],
    addedDate: "2024-02-01",
    status: "active",
  },
  {
    id: "alosim",
    name: "aloSIM",
    officialUrl: "https://alosim.com",
    affiliateUrl: "https://alosim.com?ref=suphinx",
    description:
      "Flexible eSIM with a clean app and a bundled secondary phone number via Hushed. Earn 5% back in aloSIM credits on every purchase.",
    logo: "/logos/alosim.svg",
    coverage: 170,
    supportedRegions: ["usa", "uk", "france", "global"],
    priceRange: "$4.50–42",
    priceNote: "Short-term and monthly plans. Structure similar to Airalo.",
    priceStartsAt: 4.5,
    dataType: "both",
    trustpilotRating: 4.5,
    trustpilotTrend: "stable",
    strengths: ["Includes a phone number (via Hushed)", "5% cashback in credits", "Well-designed app"],
    weaknesses: ["Rigid plan validity windows", "No global multi-country pass"],
    brandColor: "#15803D",
    brandTextColor: "#ffffff",
    lastVerified: "2026-05-16",
    verifiedBy: "manual",
    sourceUrls: ["https://www.trustpilot.com/review/alosim.com"],
    addedDate: "2024-04-01",
    status: "active",
  },
  {
    id: "mobimatter",
    name: "MobiMatter",
    officialUrl: "https://mobimatter.com",
    affiliateUrl: "https://mobimatter.com?ref=suphinx",
    description:
      "An eSIM marketplace aggregating plans from 30+ providers in one place. Great for price comparison, though service quality ultimately depends on the underlying provider.",
    logo: "/logos/mobimatter.svg",
    coverage: 200,
    supportedRegions: ["thailand", "japan", "usa", "uk", "france", "global"],
    priceRange: "$0.10/GB–varies",
    priceNote: "Marketplace: 30+ providers, huge price variation. Compare inside the app.",
    priceStartsAt: 3,
    dataType: "both",
    trustpilotRating: 4.3,
    trustpilotTrend: "stable",
    strengths: ["30+ providers in one marketplace", "Easy price comparison", "Cashback rewards"],
    weaknesses: ["Not a direct provider — quality depends on carrier", "Too many options can overwhelm", "Support varies by underlying provider"],
    brandColor: "#C2410C",
    brandTextColor: "#ffffff",
    lastVerified: "2026-05-16",
    verifiedBy: "manual",
    sourceUrls: ["https://www.trustpilot.com/review/mobimatter.com"],
    addedDate: "2024-01-01",
    status: "monitoring",
  },
  {
    id: "flexiroam",
    name: "FlexiRoam",
    officialUrl: "https://www.flexiroam.com",
    affiliateUrl: "https://www.flexiroam.com?ref=suphinx",
    description:
      "Long-running provider (since 2011) with a single-profile system for managing multiple plans. User reviews are more mixed than its premium positioning suggests.",
    logo: "/logos/flexiroam.svg",
    coverage: 200,
    supportedRegions: ["thailand", "japan", "global"],
    priceRange: "Varies by plan",
    priceNote: "Fixed data plans. One profile manages all your purchased plans.",
    priceStartsAt: 5,
    dataType: "fixed",
    trustpilotRating: 3.5,
    trustpilotTrend: "declining",
    strengths: ["Established since 2011", "Single profile for all plans", "700+ partner networks"],
    weaknesses: ["Low Trustpilot score (3.5)", "Reports of service disruptions", "Higher per-GB cost"],
    brandColor: "#B91C1C",
    brandTextColor: "#ffffff",
    lastVerified: "2026-05-16",
    verifiedBy: "manual",
    sourceUrls: ["https://www.trustpilot.com/review/flexiroam.com"],
    addedDate: "2024-01-01",
    status: "monitoring",
  },
  {
    id: "mayamobile",
    name: "Maya Mobile",
    officialUrl: "https://www.mayamobile.com",
    affiliateUrl: "https://www.mayamobile.com?ref=suphinx",
    description:
      "Fixed and unlimited plans with strong Asia coverage and quick customer support. Less suited for North America or Africa trips.",
    logo: "/logos/mayamobile.svg",
    coverage: 200,
    supportedRegions: ["thailand", "japan", "global"],
    priceRange: "Varies by plan",
    priceNote: "Fixed GB and unlimited plans available. Strong Asia-Pacific pricing.",
    priceStartsAt: 5,
    dataType: "both",
    trustpilotRating: 4.5,
    trustpilotTrend: "stable",
    strengths: ["Strong Asia-Pacific coverage", "Competitive pricing", "Quick customer support"],
    weaknesses: ["Weaker North America and Africa coverage", "No dedicated mobile app"],
    brandColor: "#9D174D",
    brandTextColor: "#ffffff",
    lastVerified: "2026-05-16",
    verifiedBy: "manual",
    sourceUrls: ["https://www.trustpilot.com/review/mayamobile.com"],
    addedDate: "2025-01-01",
    status: "active",
  },
  {
    id: "gigsky",
    name: "GigSky",
    officialUrl: "https://www.gigsky.com",
    affiliateUrl: "https://www.gigsky.com?ref=suphinx",
    description:
      "Veteran provider (since 2010) and actual network operator. Unique cruise ship and at-sea coverage. Offers free 100MB trial plans to test before you buy.",
    logo: "/logos/gigsky.svg",
    coverage: 200,
    supportedRegions: ["usa", "uk", "france", "global"],
    priceRange: "Varies–$84.99",
    priceNote: "Fixed and unlimited plans. Unlimited throttles after 2.5GB/day. Free 100MB trial available.",
    priceStartsAt: 8,
    dataType: "both",
    trustpilotRating: 4.1,
    trustpilotTrend: "stable",
    strengths: ["Operating since 2010", "Cruise ship and at-sea coverage", "Free 100MB trial plans"],
    weaknesses: ["Support resolution can take 12–24 hours", "Unlimited throttles at 2.5GB/day"],
    brandColor: "#0369A1",
    brandTextColor: "#ffffff",
    lastVerified: "2026-05-16",
    verifiedBy: "manual",
    sourceUrls: ["https://www.trustpilot.com/review/gigsky.com"],
    addedDate: "2024-01-01",
    status: "active",
  },
  {
    id: "simlocal",
    name: "Sim Local",
    officialUrl: "https://www.simlocal.com",
    affiliateUrl: "https://www.simlocal.com?ref=suphinx",
    description:
      "One of the few eSIM providers offering a phone number with SMS and calls on select plans. Good choice for short trips to the UK and Europe.",
    logo: "/logos/simlocal.svg",
    coverage: 150,
    supportedRegions: ["uk", "france"],
    priceRange: "Varies by plan",
    priceNote: "Fixed and unlimited plans. Select plans include a phone number with SMS and calls.",
    priceStartsAt: 5,
    dataType: "both",
    trustpilotRating: 4.5,
    trustpilotTrend: "stable",
    strengths: ["Phone number + SMS + calls on select plans", "Good for short UK/Europe trips", "Straightforward pricing"],
    weaknesses: ["Smaller overall coverage footprint", "Unlimited plans less competitive on value"],
    brandColor: "#14532D",
    brandTextColor: "#ffffff",
    lastVerified: "2026-05-16",
    verifiedBy: "manual",
    sourceUrls: ["https://www.trustpilot.com/review/simlocal.com"],
    addedDate: "2024-05-01",
    status: "active",
  },
];

export const countryData: Record<
  string,
  { label: string; emoji: string; description: string; topProviderIds: string[] }
> = {
  thailand: {
    label: "Thailand",
    emoji: "🇹🇭",
    description:
      "Thailand's tourist hotspots — Bangkok, Chiang Mai, Phuket — have solid 4G LTE coverage from AIS and DTAC. Island areas can be patchy, so an unlimited plan takes the stress out of island-hopping.",
    topProviderIds: ["holafly", "jetpac", "saily", "nomad", "airalo"],
  },
  japan: {
    label: "Japan",
    emoji: "🇯🇵",
    description:
      "Japan has some of the world's fastest mobile networks but physical SIM cards require registration. An eSIM activated before you land is the smoothest option — especially useful on the Shinkansen.",
    topProviderIds: ["holafly", "jetpac", "saily", "nomad", "ubigi"],
  },
  usa: {
    label: "USA",
    emoji: "🇺🇸",
    description:
      "The US is large and rural coverage gaps exist. Choosing an eSIM that runs on T-Mobile or AT&T gives the best nationwide reach. 5G is widely available in major cities.",
    topProviderIds: ["saily", "alosim", "jetpac", "nomad", "gigsky"],
  },
  uk: {
    label: "UK",
    emoji: "🇬🇧",
    description:
      "UK coverage is excellent in cities but can drop in the Scottish Highlands and rural Wales. EU roaming rights no longer apply post-Brexit, so a dedicated UK eSIM is often cheaper than roaming.",
    topProviderIds: ["simlocal", "holafly", "jetpac", "saily", "nomad"],
  },
  france: {
    label: "France",
    emoji: "🇫🇷",
    description:
      "France has strong 4G/5G coverage in Paris and major cities. Rural areas and the Alps can be spotty. An EU-wide eSIM plan lets you roam across France and neighboring countries seamlessly.",
    topProviderIds: ["simlocal", "holafly", "jetpac", "saily", "nomad"],
  },
  korea: {
    label: "South Korea",
    emoji: "🇰🇷",
    description:
      "South Korea has one of the highest 5G penetration rates in the world. Coverage is near-perfect even in subway tunnels and mountainous areas. Speed-hungry travelers will find 5G eSIM plans excellent value here.",
    topProviderIds: ["jetpac", "saily", "holafly", "nomad", "airalo"],
  },
  taiwan: {
    label: "Taiwan",
    emoji: "🇹🇼",
    description:
      "Taiwan's 4G network is fast and covers most of the island including the east coast and mountain national parks. An eSIM is far more convenient than hunting for a SIM card at Taoyuan Airport.",
    topProviderIds: ["jetpac", "saily", "holafly", "nomad", "airalo"],
  },
  vietnam: {
    label: "Vietnam",
    emoji: "🇻🇳",
    description:
      "Vietnam is popular for long-stay travelers and digital nomads. Local SIMs require a passport registration process, making eSIM the hassle-free alternative. Data costs are low and coverage is good along the north-south corridor.",
    topProviderIds: ["holafly", "jetpac", "saily", "nomad", "airalo"],
  },
  italy: {
    label: "Italy",
    emoji: "🇮🇹",
    description:
      "Italy's urban areas are well covered, but Cinque Terre and remote countryside can be weak. An EU-wide eSIM plan covers Italy plus any side trips to neighboring countries at no extra charge.",
    topProviderIds: ["simlocal", "holafly", "jetpac", "saily", "nomad"],
  },
  spain: {
    label: "Spain",
    emoji: "🇪🇸",
    description:
      "Spain has excellent 4G/5G in cities and popular coasts. The Canary and Balearic Islands are included in most EU eSIM plans. A regional EU eSIM is perfect if you're combining Spain with France or Portugal.",
    topProviderIds: ["simlocal", "holafly", "jetpac", "saily", "nomad"],
  },
  indonesia: {
    label: "Indonesia",
    emoji: "🇮🇩",
    description:
      "Indonesia's 17,000+ islands mean coverage varies wildly. Bali and Jakarta have strong 4G, but remote islands like Komodo or Raja Ampat are limited. An unlimited plan prevents surprises in low-signal areas.",
    topProviderIds: ["holafly", "jetpac", "saily", "nomad", "airalo"],
  },
  singapore: {
    label: "Singapore",
    emoji: "🇸🇬",
    description:
      "Singapore has near-perfect 5G coverage across the entire city-state, including the MRT underground. It's a major transit hub — activating an eSIM at Changi Airport before onward connections is a smart move.",
    topProviderIds: ["jetpac", "saily", "holafly", "nomad", "airalo"],
  },
  australia: {
    label: "Australia",
    emoji: "🇦🇺",
    description:
      "Australia is vast, and coverage outside major cities and highways can be very limited. For road trips in the Outback, no eSIM will help — but for city travel and the east coast, 4G/5G coverage is excellent.",
    topProviderIds: ["jetpac", "saily", "holafly", "alosim", "nomad"],
  },
};

export function getLatestVerifiedDate(): string {
  return providers
    .filter((p) => p.status === "active")
    .map((p) => p.lastVerified)
    .sort()
    .reverse()[0];
}
