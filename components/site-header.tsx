"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ctaLinks, siteConfig, topNavigation } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-pine/10 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href="/" className="group inline-flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-pine text-xs font-bold text-white">
            LF
          </span>
          <span className="font-display text-xl text-pine transition group-hover:text-clay">
            {siteConfig.legalBrand}
          </span>
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-2 md:flex">
          {topNavigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "bg-pine text-white"
                    : "text-pine hover:bg-pine/10 hover:text-pine"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href={ctaLinks.booking}
          className="rounded-full bg-clay px-4 py-2 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-pine"
        >
          Termin buchen
        </Link>
      </div>

      <nav aria-label="Mobile Navigation" className="border-t border-pine/10 bg-white px-2 py-2 md:hidden">
        <ul className="grid grid-cols-4 gap-1">
          {topNavigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block rounded-xl px-2 py-2 text-center text-xs font-semibold transition ${
                    isActive
                      ? "bg-pine text-white"
                      : "text-pine hover:bg-pine/10 hover:text-pine"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
