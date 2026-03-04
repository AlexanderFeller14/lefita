import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";
import { makeMetadata } from "@/lib/metadata";
import { ctaLinks, siteConfig } from "@/lib/site-data";

const mapQuery = encodeURIComponent(`${siteConfig.street}, ${siteConfig.postalCode} ${siteConfig.city}, Schweiz`);

export const metadata = makeMetadata({
  title: "Kontakt",
  description:
    "Adresse, Anfahrt, Google Maps, Route planen und Schnellkontakt für Lefita in Mühlethurnen.",
  path: "/kontakt"
});

export default function KontaktPage() {
  return (
    <div className="page-shell pb-16 pt-8 md:pt-10">
      <PageHero
        eyebrow="Anfahrt & Kontakt"
        title="Kontakt"
        intro="Direktkontakt per Telefon oder E-Mail und schnelle Navigation zum Standort in Mühlethurnen."
        primaryCta={{ href: ctaLinks.call, label: "Anrufen" }}
        secondaryCta={{ href: ctaLinks.booking, label: "Termin buchen" }}
        tone="mist"
        layout="split"
        imageSrc="/lefita-original-4.jpg"
        imageAlt="Lefita Salon Impression"
        imagePosition="center center"
      />

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1fr]">
        <SectionShell
          eyebrow="Standort & Kontakt"
          title="Adresse und schnelle Wege"
          intro="Alle Kontaktdaten auf einen Blick: direkt anrufen, E-Mail senden, Termin anfragen oder Route starten."
          variant="panel"
          className="h-full"
        >
          <div className="flex h-full flex-col gap-8">
            <address className="not-italic text-sm leading-relaxed text-pine/85">
              <p>{siteConfig.owner}</p>
              <p>{siteConfig.street}</p>
              <p>
                {siteConfig.postalCode} {siteConfig.city}
              </p>
              <p>Schweiz</p>
            </address>

            <div className="flex flex-wrap gap-3">
              <a href={ctaLinks.call} className="pill-link">
                Jetzt anrufen
              </a>
              <a href={ctaLinks.mail} className="pill-link">
                E-Mail senden
              </a>
              <Link href={ctaLinks.booking} className="pill-link">
                Termin anfragen
              </Link>
            </div>
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Google Maps"
          title="Anfahrt"
          intro="Interaktive Karte für schnelle Orientierung."
          variant="panel"
        >
          <div className="overflow-hidden rounded-xl border border-pine/10">
            <iframe
              title="Lefita Standort"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              className="h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </SectionShell>
      </div>
    </div>
  );
}
