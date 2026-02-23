import Link from "next/link";
import { ctaLinks, footerNavigation, siteConfig } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-pine/15 bg-pine text-sand">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 md:grid-cols-[1.3fr_1fr] md:px-6">
        <div className="space-y-4">
          <p className="font-display text-3xl text-white">{siteConfig.legalBrand}</p>
          <p className="max-w-xl text-sm text-sand/90">{siteConfig.description}</p>
          <div className="flex flex-wrap gap-3">
            <a
              href={ctaLinks.call}
              className="rounded-full border border-sand/40 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-pine"
            >
              Anrufen
            </a>
            <a
              href={ctaLinks.mail}
              className="rounded-full border border-sand/40 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-pine"
            >
              E-Mail
            </a>
            <Link
              href={ctaLinks.booking}
              className="rounded-full border border-sand/40 bg-clay/80 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-pine"
            >
              Termin buchen
            </Link>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-sand/80">
              Navigation
            </p>
            <ul className="grid gap-2">
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex text-sm text-sand transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-sand/80">
              Kontakt
            </p>
            <address className="not-italic text-sm text-sand/90">
              <p>{siteConfig.owner}</p>
              <p>{siteConfig.street}</p>
              <p>
                {siteConfig.postalCode} {siteConfig.city}
              </p>
              <p>
                <a className="underline-offset-2 hover:underline" href={ctaLinks.call}>
                  {siteConfig.phoneDisplay}
                </a>
              </p>
              <p>
                <a className="underline-offset-2 hover:underline" href={ctaLinks.mail}>
                  {siteConfig.email}
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}
