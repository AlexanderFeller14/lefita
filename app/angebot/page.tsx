import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";
import { makeMetadata } from "@/lib/metadata";
import { ctaLinks, dentalFacts, offerCards, sizePricing } from "@/lib/site-data";

function splitServiceText(text: string) {
  return text
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export const metadata = makeMetadata({
  title: "Angebot",
  description:
    "Pflegepakete, Einzelservices, Zusatzleistungen und transparente Preislogik für Hundepflege bei Lefita.",
  path: "/angebot"
});

export default function AngebotPage() {
  return (
    <div className="page-shell pb-16 pt-8 md:pt-10">
      <PageHero
        eyebrow="Leistungen & Preise"
        title="Angebot"
        intro="Alle Leistungen sind nach Aufwand geplant. Für die Ultraschall-Zahnreinigung bestehen konkrete Preisangaben."
        primaryCta={{ href: ctaLinks.booking, label: "Termin buchen" }}
        secondaryCta={{ href: ctaLinks.call, label: "Anrufen" }}
        tone="mist"
        layout="split"
        imageSrc="/lefita-original-3.jpg"
        imageAlt="Fellpflege im Lefita Salon"
        imagePosition="center center"
      />

      <div className="mt-8 grid gap-8">
        <SectionShell
          eyebrow="Pflegepakete"
          title="Kernleistungen"
          intro="Die Pakete basieren auf den öffentlich ausgewiesenen Lefita-Leistungen."
          variant="panel"
        >
          <div className="grid gap-3 md:grid-cols-3">
            {offerCards.map((card) => (
              <article key={card.title} className="rounded-xl border border-pine/15 bg-white p-4 md:p-5">
                <h2 className="text-lg font-semibold text-pine">{card.title}</h2>
                {card.body.includes(",") ? (
                  <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-pine/85">
                    {splitServiceText(card.body).map((line) => (
                      <li key={`${card.title}-${line}`} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-pine/70" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-3 text-sm leading-relaxed text-pine/85">{card.body}</p>
                )}
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Preisrahmen"
          title="Preislogik nach Hundegrösse"
          intro="Die Gesamtkosten hängen von Fellzustand, Verhalten und Zeitaufwand ab."
          variant="panel"
        >
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {sizePricing.map((row) => (
              <article key={row.size} className="rounded-xl border border-pine/15 bg-white p-4 text-sm text-pine/85">
                <h2 className="font-semibold text-pine">{row.size}</h2>
                <p className="mt-2 inline-flex rounded-full border border-pine/20 bg-white px-2.5 py-1 text-xs font-semibold text-pine">
                  {row.range}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-pine/75">{row.note}</p>
              </article>
            ))}

            <article className="rounded-xl border border-clay/45 bg-white p-4 text-sm text-pine/85">
              <h2 className="font-semibold text-pine">Zahnreinigung</h2>
              <p className="mt-2 inline-flex rounded-full border border-clay/40 bg-white px-2.5 py-1 text-xs font-semibold text-pine">
                {dentalFacts.minutePrice}
              </p>
              <p className="mt-3 text-xs leading-relaxed text-pine/75">
                Erstbehandlung: {dentalFacts.firstTreatmentRange}
              </p>
            </article>
          </div>

          <div className="mt-4 rounded-xl border border-pine/20 bg-white p-4 text-sm text-pine/80">
            <p className="font-semibold text-pine">Hinweis zu Verfilzung & Zeitaufwand</p>
            <p className="mt-2 leading-relaxed">
              Bei starker Verfilzung steigt der Zeitaufwand. Die Pflege wird möglichst schonend und transparent geplant.
            </p>
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Einzelservices"
          title="Modular buchbar"
          intro="Leistungen können je nach Bedarf einzeln kombiniert werden."
          variant="plain"
        >
          <ul className="grid gap-2 md:grid-cols-2">
            {[
              "Baden und Föhnen",
              "Frisieren / Effilieren",
              "Trimmen",
              "Scheren (Aesculap/Heiniger)",
              "Entfilzen",
              "Ohrenpflege",
              "Krallenpflege",
              "Zahnreinigung"
            ].map((item) => (
              <li key={item} className="rounded-xl border border-pine/15 bg-white px-4 py-3 text-sm text-pine">
                {item}
              </li>
            ))}
          </ul>
        </SectionShell>

      </div>
    </div>
  );
}
