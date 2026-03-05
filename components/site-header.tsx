"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ctaLinks, siteConfig, topNavigation } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const root = document.documentElement;
    const current = root.getAttribute("data-theme");
    setTheme(current === "dark" ? "dark" : "light");
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;
    root.setAttribute("data-theme", nextTheme);
    localStorage.setItem("lefita-theme", nextTheme);
    setTheme(nextTheme);
  }

  const isDark = theme === "dark";

  return (
    <header className="sticky top-0 z-50 border-b border-pine/10 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-2 px-3 py-2.5 md:gap-4 md:px-6 md:py-3">
        <Link href="/" className="group inline-flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-pine text-xs font-bold text-white">
            LF
          </span>
          <span className="brand-name font-display text-lg text-pine transition group-hover:text-clay sm:text-xl">
            Lefita
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

        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Hellen Modus aktivieren" : "Dunklen Modus aktivieren"}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-pine/20 text-pine transition hover:bg-pine/10 sm:h-9 sm:w-9"
          >
            {isDark ? (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2.5v2.2M12 19.3v2.2M4.8 4.8l1.5 1.5M17.7 17.7l1.5 1.5M2.5 12h2.2M19.3 12h2.2M4.8 19.2l1.5-1.5M17.7 6.3l1.5-1.5" />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.8 6.8 0 0 0 10.5 10.5Z" />
              </svg>
            )}
          </button>
          <Link
            href={ctaLinks.booking}
            className="rounded-full bg-clay px-3 py-1.5 text-xs font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-pine sm:px-4 sm:py-2 sm:text-sm"
          >
            <span className="sm:hidden">Termin</span>
            <span className="hidden sm:inline">Termin buchen</span>
          </Link>
        </div>
      </div>

      <nav aria-label="Mobile Navigation" className="border-t border-pine/10 bg-white px-2 py-2 md:hidden">
        <ul className="grid grid-cols-6 gap-1">
          {topNavigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block rounded-xl px-1.5 py-2 text-center text-[11px] font-semibold transition ${
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
