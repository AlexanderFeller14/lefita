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
          eyebrow="Kontakt & Ablauf"
          title="Alles auf einen Blick"
          intro="Direktkontakt und Mini-Ablauf kompakt auf einer Fläche."
          variant="sage"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <article className="card-plain p-5 text-sm text-pine/85">
              <h2 className="text-lg font-semibold text-pine">Standort & Kontakt</h2>
              <p className="mt-2">
                {siteConfig.owner}
                <br />
                {siteConfig.street}
                <br />
                {siteConfig.postalCode} {siteConfig.city}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <a href={ctaLinks.call} className="pill-link">
                  {siteConfig.phoneDisplay}
                </a>
                <a href={ctaLinks.mail} className="pill-link">
                  {siteConfig.email}
                </a>
              </div>
              <div className="mt-3">
                <Link
                  href={ctaLinks.booking}
                  className="inline-flex rounded-full border border-pine/20 px-4 py-2 text-sm font-semibold text-pine transition hover:bg-pine hover:text-white"
                >
                  Termin buchen
                </Link>
              </div>
            </article>

            <article className="card-sand p-5">
              <h2 className="text-lg font-semibold text-pine">Mini Ablauf</h2>
              <ol className="mt-3 space-y-3 text-sm text-pine/85">
                {homeFlow.map((step) => (
                  <li key={step.title} className="rounded-xl bg-sand/55 px-3 py-2">
                    <p className="font-semibold text-pine">{step.title}</p>
                    <p className="mt-0.5">{step.body}</p>
                  </li>
                ))}
              </ol>
            </article>
          </div>
        </SectionShell>
      </div>
    </div>
  );
}
