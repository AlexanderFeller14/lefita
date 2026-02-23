import { PageHero } from "@/components/page-hero";
import { makeMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-data";

export const metadata = makeMetadata({
  title: "Datenschutz",
  description: "Datenschutzerklärung nach revDSG für Lefita.",
  path: "/datenschutz"
});

export default function DatenschutzPage() {
  return (
    <div className="page-shell pb-16 pt-8 md:pt-10">
      <PageHero
        eyebrow="Rechtliches"
        title="Datenschutzerklärung (revDSG)"
        intro="Klarer Überblick über die Bearbeitung personenbezogener Daten bei Lefita."
        tone="mist"
        layout="compact"
      />

      <article className="mt-8 fade-in-up rounded-[2rem] border border-pine/15 bg-white p-6 md:p-10">
        <section className="rounded-xl border border-clay/35 bg-white p-4 text-sm text-pine/85">
          <h2 className="text-lg font-semibold text-pine">Verantwortliche Stelle</h2>
          <p className="mt-2">
            {siteConfig.legalBrand}, {siteConfig.owner}, {siteConfig.street}, {siteConfig.postalCode} {siteConfig.city}, Schweiz.
            <br />
            Kontakt: <a className="underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>, Telefon{" "}
            <a className="underline" href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phoneDisplay}</a>.
          </p>
        </section>

        <div className="mt-6 space-y-6 text-sm text-pine/85">
          <section className="border-l-2 border-clay/35 pl-4">
            <h2 className="text-lg font-semibold text-pine">1. Zweck der Datenbearbeitung</h2>
            <p className="mt-2">
              Personenbezogene Daten werden ausschliesslich zur Bearbeitung von Terminanfragen, zur Kommunikation mit
              Kundinnen und Kunden sowie zur sicheren Bereitstellung dieser Website verarbeitet.
            </p>
          </section>

          <section className="border-l-2 border-pine/25 pl-4">
            <h2 className="text-lg font-semibold text-pine">2. Welche Daten erfasst werden</h2>
            <p className="mt-2">
              Bei einer Terminanfrage können Kontaktangaben (Name, Telefon, E-Mail), Hundedaten und Anfrageinhalte
              erfasst werden. Beim Besuch der Website fallen technisch notwendige Verbindungsdaten (z. B. IP-Adresse,
              Zeitpunkt, Browserinformationen) an.
            </p>
          </section>

          <section className="border-l-2 border-pine/25 pl-4">
            <h2 className="text-lg font-semibold text-pine">3. Rechtsgrundlagen nach revDSG</h2>
            <p className="mt-2">
              Die Bearbeitung erfolgt zur Vertragsanbahnung und Kommunikation auf Anfrage der betroffenen Person sowie
              auf Grundlage berechtigter Interessen am sicheren Betrieb und an der Stabilität der Website.
            </p>
          </section>

          <section className="border-l-2 border-clay/35 pl-4">
            <h2 className="text-lg font-semibold text-pine">4. Weitergabe an Dritte</h2>
            <p className="mt-2">
              Eine Weitergabe erfolgt nur, wenn dies technisch oder rechtlich erforderlich ist (z. B. Hosting,
              Sicherheitsprotokolle, gesetzliche Verpflichtungen).
            </p>
          </section>

          <section className="border-l-2 border-pine/25 pl-4">
            <h2 className="text-lg font-semibold text-pine">5. Aufbewahrung und Sicherheit</h2>
            <p className="mt-2">
              Daten werden nur so lange aufbewahrt, wie es für den jeweiligen Zweck erforderlich ist oder gesetzliche
              Pflichten es verlangen. Es werden angemessene technische und organisatorische Massnahmen getroffen.
            </p>
          </section>

          <section className="border-l-2 border-pine/25 pl-4">
            <h2 className="text-lg font-semibold text-pine">6. Ihre Rechte</h2>
            <p className="mt-2">
              Sie haben im Rahmen des anwendbaren Datenschutzrechts das Recht auf Auskunft, Berichtigung, Löschung,
              Einschränkung und Widerspruch gegen die Datenbearbeitung sowie auf Herausgabe Ihrer Daten.
            </p>
          </section>

          <section className="border-l-2 border-clay/35 pl-4">
            <h2 className="text-lg font-semibold text-pine">7. Stand</h2>
            <p className="mt-2">Stand dieser Datenschutzerklärung: 23. Februar 2026.</p>
          </section>
        </div>
      </article>
    </div>
  );
}
