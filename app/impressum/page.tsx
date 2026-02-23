import { PageHero } from "@/components/page-hero";
import { makeMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-data";

export const metadata = makeMetadata({
  title: "Impressum",
  description: "Impressum gemäss Schweizer Recht für Lefita.",
  path: "/impressum"
});

export default function ImpressumPage() {
  return (
    <div className="page-shell pb-16 pt-8 md:pt-10">
      <PageHero
        eyebrow="Rechtliches"
        title="Impressum"
        intro="Pflichtangaben gemäss Schweizer Recht für Lefita."
        tone="mist"
        layout="compact"
      />

      <article className="mt-8 fade-in-up rounded-[2rem] border border-pine/15 bg-white p-6 md:p-10">
        <div className="grid gap-4 md:grid-cols-2">
          <section className="rounded-xl border border-pine/15 bg-white p-4 text-sm text-pine/85">
            <h2 className="text-lg font-semibold text-pine">Verantwortliche Anbieterin</h2>
            <p className="mt-2">
              {siteConfig.legalBrand}
              <br />
              {siteConfig.owner}
              <br />
              {siteConfig.street}
              <br />
              {siteConfig.postalCode} {siteConfig.city}
              <br />
              Schweiz
            </p>
          </section>

          <section className="rounded-xl border border-clay/35 bg-white p-4 text-sm text-pine/85">
            <h2 className="text-lg font-semibold text-pine">Kontakt</h2>
            <p className="mt-2">
              Telefon: <a className="underline" href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phoneDisplay}</a>
              <br />
              E-Mail: <a className="underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </p>
          </section>
        </div>

        <div className="mt-6 space-y-6 text-sm text-pine/85">
          <section className="border-l-2 border-clay/35 pl-4">
            <h2 className="text-lg font-semibold text-pine">Haftungsausschluss</h2>
            <p className="mt-2">
              Alle Informationen auf dieser Website werden sorgfältig geprüft. Für Vollständigkeit, Richtigkeit und
              Aktualität wird jedoch keine Gewähr übernommen. Haftungsansprüche aufgrund materieller oder immaterieller
              Schäden, die aus der Nutzung der veröffentlichten Inhalte entstehen, sind ausgeschlossen, soweit kein
              nachweislich vorsätzliches oder grobfahrlässiges Verschulden vorliegt.
            </p>
          </section>

          <section className="border-l-2 border-pine/25 pl-4">
            <h2 className="text-lg font-semibold text-pine">Urheberrechte</h2>
            <p className="mt-2">
              Inhalte, Texte und Gestaltung dieser Website unterliegen dem Urheberrecht. Jede Nutzung ausserhalb der
              gesetzlich zulässigen Grenzen bedarf der vorherigen Zustimmung der Rechteinhaberin.
            </p>
          </section>

          <section className="border-l-2 border-pine/25 pl-4">
            <h2 className="text-lg font-semibold text-pine">Quelle der Stammdaten</h2>
            <p className="mt-2">
              Firmenname, Adresse, Telefon und E-Mail wurden aus der öffentlich zugänglichen Lefita-Website übernommen.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
