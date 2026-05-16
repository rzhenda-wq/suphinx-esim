"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Wifi, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/compare", label: "Compare" },
    { href: "/quiz", label: "Find My eSIM" },
    { href: "/countries/thailand", label: "By Country" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-gray-900">
            <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
              <Wifi size={18} className="text-white" />
            </div>
            <span>
              Suphinx<span className="text-teal-600">eSIM</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === l.href
                    ? "bg-teal-50 text-teal-700"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/quiz"
              className="ml-2 bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors"
            >
              Take Quiz →
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3 space-y-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/quiz"
            className="block mt-2 bg-teal-600 text-white text-sm font-semibold px-4 py-2 rounded-xl text-center"
            onClick={() => setOpen(false)}
          >
            Take Quiz →
          </Link>
        </div>
      )}
    </nav>
  );
}
