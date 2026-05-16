import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://suphinx.com"),
  title: {
    default: "Suphinx eSIM Compare — Find the Best Travel eSIM",
    template: "%s | Suphinx eSIM Compare",
  },
  description:
    "Compare 12 top travel eSIM providers. Updated monthly with verified pricing, coverage, and Trustpilot ratings. Find the perfect eSIM for your destination.",
  keywords: ["travel eSIM", "eSIM comparison", "best eSIM", "Airalo", "Holafly", "digital nomad"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Suphinx eSIM Compare",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 min-h-screen`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
