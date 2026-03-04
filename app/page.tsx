import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";
import { makeMetadata } from "@/lib/metadata";
import {
  ctaLinks,
  homeFlow,
  siteConfig
} from "@/lib/site-data";

export const metadata = makeMetadata({
  title: "Start",
  description:
    "Professionelle Hundepflege in Mühlethurnen mit sofort sichtbarem Termin-CTA, stressfreiem Ablauf und persönlicher Betreuung.",
  path: "/"
});

export default function HomePage() {
  return (
    <div className="page-shell pb-16 pt-8 md:pt-12">
      <PageHero
        eyebrow={`Hundepflege in ${siteConfig.city}`}
        title={siteConfig.slogan}
        intro="Ruhige, professionelle Pflege für Hunde mit und ohne Salonerfahrung. Welpen und grosse Hunde sind ausdrücklich willkommen."
        primaryCta={{ href: ctaLinks.booking, label: "Termin buchen" }}
        secondaryCta={{ href: ctaLinks.call, label: "Anrufen" }}
        tone="mist"
        layout="split"
        imageSrc="/lefita-original-2.jpg"
        imageAlt="Hund im Lefita Salon"
        imagePosition="center bottom"
        imageMobilePosition="center 18%"
        compactFacts
        supplement={
          <div className="max-w-2xl overflow-hidden rounded-2xl border border-pine/15 bg-white">
            <div className="border-b border-pine/15 px-4 py-3 text-sm text-pine/85">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-pine/65">Öffnungszeiten</p>
              <p className="mt-1">{siteConfig.openingHoursLabel}</p>
            </div>
            <div className="border-b border-pine/15 px-4 py-3 text-sm text-pine/85">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-pine/65">Direktkontakt</p>
              <p className="mt-1">{siteConfig.phoneDisplay}</p>
            </div>
            <div className="px-4 py-3 text-sm text-pine/85">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-pine/65">Standort</p>
              <p className="mt-1">
                {siteConfig.street}, {siteConfig.postalCode} {siteConfig.city}
              </p>
            </div>
          </div>
        }
      />

      <div className="mt-10 grid gap-10">
        <SectionShell
          eyebrow="Leistungen"
          title="Die wichtigsten Services"
          intro="Alle Details und Zusatzleistungen finden Sie auf der Angebotsseite."
          variant="panel"
        >
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {/* Baden */}
            <div className="group flex flex-col items-center gap-2.5 rounded-2xl border border-pine/10 bg-white p-4 text-center transition hover:border-pine/25 hover:shadow-md">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-clay/8 text-clay transition group-hover:bg-clay/15">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
                </svg>
              </span>
              <span className="text-xs font-semibold text-pine">Baden</span>
            </div>

            {/* Föhnen */}
            <div className="group flex flex-col items-center gap-2.5 rounded-2xl border border-pine/10 bg-white p-4 text-center transition hover:border-pine/25 hover:shadow-md">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-moss/10 text-moss transition group-hover:bg-moss/18">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
                  <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
                  <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
                </svg>
              </span>
              <span className="text-xs font-semibold text-pine">Föhnen</span>
            </div>

            {/* Frisieren */}
            <div className="group flex flex-col items-center gap-2.5 rounded-2xl border border-pine/10 bg-white p-4 text-center transition hover:border-pine/25 hover:shadow-md">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-pine/[0.06] text-pine/70 transition group-hover:bg-pine/10">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="6" cy="6" r="3" />
                  <circle cx="6" cy="18" r="3" />
                  <line x1="20" y1="4" x2="8.12" y2="15.88" />
                  <line x1="14.47" y1="14.48" x2="20" y2="20" />
                  <line x1="8.12" y1="8.12" x2="12" y2="12" />
                </svg>
              </span>
              <span className="text-xs font-semibold text-pine">Frisieren</span>
            </div>

            {/* Effilieren */}
            <div className="group flex flex-col items-center gap-2.5 rounded-2xl border border-pine/10 bg-white p-4 text-center transition hover:border-pine/25 hover:shadow-md">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-clay/8 text-clay transition group-hover:bg-clay/15">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12h2" /><path d="M6 12h2" /><path d="M10 12h2" /><path d="M14 12h2" /><path d="M18 12h2" /><path d="M22 12h0" />
                  <path d="M2 8h20" /><path d="M2 16h20" />
                </svg>
              </span>
              <span className="text-xs font-semibold text-pine">Effilieren</span>
            </div>

            {/* Trimmen */}
            <div className="group flex flex-col items-center gap-2.5 rounded-2xl border border-pine/10 bg-white p-4 text-center transition hover:border-pine/25 hover:shadow-md">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-moss/10 text-moss transition group-hover:bg-moss/18">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="18" rx="2" />
                  <path d="M10 8h4" /><path d="M10 12h4" /><path d="M10 16h4" />
                  <rect x="14" y="3" width="7" height="10" rx="2" />
                </svg>
              </span>
              <span className="text-xs font-semibold text-pine">Trimmen</span>
            </div>

            {/* Scheren */}
            <div className="group flex flex-col items-center gap-2.5 rounded-2xl border border-pine/10 bg-white p-4 text-center transition hover:border-pine/25 hover:shadow-md">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-pine/[0.06] text-pine/70 transition group-hover:bg-pine/10">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3v10" />
                  <path d="M18.5 8a2.5 2.5 0 0 1 0 5H12" />
                  <path d="M5.5 8a2.5 2.5 0 0 0 0 5H12" />
                  <path d="M12 13v8" />
                </svg>
              </span>
              <span className="text-xs font-semibold text-pine">Scheren</span>
            </div>
          </div>

          <div className="mt-6">
            <Link
              href="/angebot"
              className="inline-flex rounded-full border border-pine/20 px-4 py-2 text-sm font-semibold text-pine transition hover:bg-pine hover:text-white"
            >
              Alle Leistungen ansehen
            </Link>
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Warum Lefita"
          title="Ruhig, klar, hundegerecht"
          intro="Das Vorgehen bleibt bewusst strukturiert, damit Hund und Halter entspannt bleiben."
          variant="sand"
        >
          <div className="grid gap-4 md:grid-cols-3">
            {/* Stressfreie Pflege */}
            <article className="group card-plain flex flex-col items-start gap-4 p-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-clay/20 bg-clay/8 text-clay transition group-hover:bg-clay/15">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </span>
              <div>
                <h3 className="text-sm font-bold text-pine">Stressfrei & entspannt</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-pine/70">
                  Stressfreie Pflege in ruhiger Atmosphäre — Ihr Hund wird mit Geduld und Einfühlvermögen begleitet.
                </p>
              </div>
            </article>

            {/* Alle Rassen */}
            <article className="group card-plain flex flex-col items-start gap-4 p-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-clay/20 bg-clay/8 text-clay transition group-hover:bg-clay/15">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="4" r="2" />
                  <circle cx="18" cy="8" r="2" />
                  <circle cx="20" cy="16" r="2" />
                  <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
                </svg>
              </span>
              <div>
                <h3 className="text-sm font-bold text-pine">Alle Rassen willkommen</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-pine/70">
                  Ob Klein, Mittel oder Gross — jede Hunderasse wird individuell und professionell betreut.
                </p>
              </div>
            </article>

            {/* Grosse Hunde */}
            <article className="group card-plain flex flex-col items-start gap-4 p-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-clay/20 bg-clay/8 text-clay transition group-hover:bg-clay/15">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5" />
                  <path d="M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5" />
                  <path d="M8 14v.5" />
                  <path d="M16 14v.5" />
                  <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
                  <path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a13.16 13.16 0 0 0-.493-3.309" />
                </svg>
              </span>
              <div>
                <h3 className="text-sm font-bold text-pine">Auch für grosse Hunde</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-pine/70">
                  Grosse Hunde sind ausdrücklich willkommen und werden mit passend eingeplanter Zeit betreut.
                </p>
              </div>
            </article>
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="So funktioniert's"
          title="Ihr Weg zum Termin"
          intro="Von der Anfrage bis zur Abholung — in vier klaren Schritten."
          variant="sage"
        >
          {/* ── Timeline steps ─────────────────────────── */}
          <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
            {homeFlow.map((step, i) => {
              const num = String(i + 1).padStart(2, "0");
              const isLast = i === homeFlow.length - 1;
              return (
                <article key={step.title} className="group relative flex flex-col">
                  {/* connector line (hidden on last item & mobile) */}
                  {!isLast && (
                    <span
                      aria-hidden
                      className="absolute left-6 top-[2.1rem] hidden h-px w-[calc(100%-1.5rem)] bg-pine/15 sm:block lg:left-[2.1rem] lg:top-6 lg:h-px lg:w-[calc(100%-2.1rem)]"
                    />
                  )}
                  {/* mobile connector */}
                  {!isLast && (
                    <span
                      aria-hidden
                      className="absolute left-[1.35rem] top-12 h-[calc(100%-2.5rem)] w-px bg-pine/15 sm:hidden"
                    />
                  )}
                  <div className="relative z-10 flex items-start gap-3 p-3 sm:flex-col sm:items-start sm:gap-0 sm:p-4">
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl border border-pine/15 bg-white font-display text-lg text-pine shadow-sm transition group-hover:border-pine/30 group-hover:shadow-md sm:mb-4">
                      {num}
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-pine">{step.title.replace(/^\d+\.\s*/, "")}</h3>
                      <p className="mt-1 text-[13px] leading-relaxed text-pine/70">{step.body}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* ── Contact strip ──────────────────────────── */}
          <div className="mt-6 flex flex-col items-start gap-4 rounded-2xl border border-pine/10 bg-white p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-5">
            <address className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm not-italic text-pine/80">
              <span className="font-semibold text-pine">{siteConfig.owner}</span>
              <span className="hidden h-3.5 w-px bg-pine/20 sm:block" />
              <span>{siteConfig.street}, {siteConfig.postalCode} {siteConfig.city}</span>
            </address>
            <div className="flex flex-wrap items-center gap-2">
              <a href={ctaLinks.call} className="pill-link">
                {siteConfig.phoneDisplay}
              </a>
              <a href={ctaLinks.mail} className="pill-link">
                E-Mail
              </a>
              <Link
                href={ctaLinks.booking}
                className="inline-flex rounded-full border border-pine/20 bg-white px-4 py-2 text-sm font-semibold text-pine transition hover:bg-pine hover:text-white"
              >
                Termin buchen
              </Link>
            </div>
          </div>
        </SectionShell>
      </div>
    </div>
  );
}
