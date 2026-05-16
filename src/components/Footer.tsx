import Link from "next/link";
import { Wifi } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                <Wifi size={18} className="text-white" />
              </div>
              <span className="text-white font-bold text-lg">
                Suphinx<span className="text-teal-400">eSIM</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Independent eSIM comparison updated monthly. We earn a commission when you buy
              through our links — at no extra cost to you.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Compare</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/compare" className="hover:text-white transition-colors">
                  All Providers
                </Link>
              </li>
              <li>
                <Link href="/quiz" className="hover:text-white transition-colors">
                  Take the Quiz
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Countries</h4>
            <ul className="space-y-2 text-sm">
              {[
                ["Thailand", "thailand"],
                ["Japan", "japan"],
                ["USA", "usa"],
                ["UK", "uk"],
                ["France", "france"],
              ].map(([label, slug]) => (
                <li key={slug}>
                  <Link
                    href={`/countries/${slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-10 pt-6 space-y-2 text-sm text-center">
          <p className="text-gray-500 text-xs max-w-2xl mx-auto">
            Prices are approximate ranges verified May 2026. Always confirm current pricing on
            each provider&apos;s official site before purchasing.
          </p>
          <p>© {new Date().getFullYear()} Suphinx eSIM Compare. All affiliate links are disclosed.</p>
        </div>
      </div>
    </footer>
  );
}
