"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "lefita-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 animate-slide-up px-4 pb-4">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 rounded-2xl border border-pine/15 bg-white px-5 py-4 shadow-lg sm:flex-row sm:gap-4">
        <p className="text-center text-sm text-pine/80 sm:text-left">
          Diese Website verwendet nur technisch notwendige Cookies.{" "}
          <Link href="/datenschutz" className="underline underline-offset-2 hover:text-pine">
            Datenschutz
          </Link>
        </p>
        <button
          onClick={accept}
          className="shrink-0 rounded-full bg-pine px-5 py-2 text-sm font-semibold text-white transition hover:bg-pine/90"
        >
          Verstanden
        </button>
      </div>
    </div>
  );
}
