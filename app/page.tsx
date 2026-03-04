import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";
import { makeMetadata } from "@/lib/metadata";
import {
  coreServices,
  ctaLinks,
  homeFlow,
  salonHighlights,
  siteConfig
} from "@/lib/site-data";

export const metadata = makeMetadata({
  title: "Start",
  description:
    "Professionelle Hundepflege in Mühlethurnen mit sofort sichtbarem Termin-CTA, stressfreiem Ablauf und persönlicher Betreuung.",
  path: "/"
});

export default function HomePage() {
  const featuredServices = coreServices.slice(0, 6);
  const keyHighlights = salonHighlights.slice(0, 3);
  const quickFacts = [
    "Termin sofort online anfragen",
    "Stressfreie Pflege mit Einfühlvermögen",
    "Montag bis Freitag, 08:00 - 18:00 Uhr"
  ];

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
          <div className="mb-4">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-pine/65">Auf einen Blick</p>
            <ul className="flex flex-wrap gap-2 text-sm text-pine/85">
              {quickFacts.map((fact) => (
                <li key={fact} className="rounded-full border border-pine/20 bg-white px-3 py-1.5">
                  {fact}
                </li>
              ))}
            </ul>
          </div>

          <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <li
                key={service}
                className="rounded-xl border border-pine/20 bg-white px-4 py-3 text-sm text-pine"
              >
                {service}
              </li>
            ))}
          </ul>

          <div className="mt-5">
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
          variant="plain"
        >
          <div className="grid gap-3 md:grid-cols-3">
            {keyHighlights.map((item, index) => (
              <article
                key={item}
                className={`${index === 1 ? "card-outline" : "card-plain"} p-4 text-sm text-pine/85`}
              >
                {item}
              </article>
            ))}
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
