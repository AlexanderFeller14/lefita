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
            <h2 className="text-lg font-semibold text-pine">Haftungsausschluss — Inhalte</h2>
            <p className="mt-2">
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Gewähr für die Aktualität, Vollständigkeit
              und Richtigkeit der bereitgestellten Informationen. Jegliche Haftungsansprüche gegen uns, die sich auf
              Schäden materieller oder ideeller Art beziehen — verursacht durch die Nutzung oder Nichtnutzung der
              dargebotenen Inhalte bzw. durch Nutzung fehlerhafter und unvollständiger Informationen — sind grundsätzlich
              ausgeschlossen.
            </p>
          </section>

          <section className="border-l-2 border-pine/25 pl-4">
            <h2 className="text-lg font-semibold text-pine">Externe Links</h2>
            <p className="mt-2">
              Unsere Webseite enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
              Deshalb übernehmen wir für diese fremden Inhalte auch keine Gewähr. Für die Inhalte der verlinkten Seiten
              ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </section>

          <section className="border-l-2 border-pine/25 pl-4">
            <h2 className="text-lg font-semibold text-pine">Urheberrecht</h2>
            <p className="mt-2">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf dieser Website unterliegen dem
              schweizerischen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung,
              Bearbeitung, Verbreitung und jede Art der Verwertung ausserhalb der Grenzen des Urheberrechts bedürfen
              unserer schriftlichen Zustimmung.
            </p>
          </section>

          <section className="border-l-2 border-clay/35 pl-4">
            <h2 className="text-lg font-semibold text-pine">Änderungen und Irrtümer</h2>
            <p className="mt-2">
              Wir behalten uns ausdrücklich vor, Teile der Seiten oder das gesamte Angebot jederzeit zu ändern, zu
              ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen. Sollten einzelne
              Formulierungen oder Darstellungen dieses Haftungsausschlusses unwirksam sein, bleiben die übrigen
              Bestimmungen davon unberührt.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
