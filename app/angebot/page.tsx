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
            {offerCards.map((card, i) => {
              return (
                <article
                  key={card.title}
                  className="group rounded-2xl border border-pine/10 bg-white p-5 transition hover:border-pine/25 hover:shadow-md md:p-6"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-clay/8 text-clay transition group-hover:bg-clay/15">
                    {i === 0 && (
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="6" cy="6" r="3" />
                        <circle cx="6" cy="18" r="3" />
                        <line x1="20" y1="4" x2="8.12" y2="15.88" />
                        <line x1="14.47" y1="14.48" x2="20" y2="20" />
                        <line x1="8.12" y1="8.12" x2="12" y2="12" />
                      </svg>
                    )}
                    {i === 1 && (
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19.5 12.6c0 2.2-1.1 4.2-2.8 5.4-.6.4-1.2.7-1.9.9-.4.1-.9.1-1.3.1h-3c-.4 0-.9 0-1.3-.1-.7-.2-1.3-.5-1.9-.9C5.6 16.8 4.5 14.8 4.5 12.6c0-1.5.5-2.9 1.4-4 .4-.5 1-.5 1.4 0 .6.7 1.5 1.2 2.5 1.2s1.9-.5 2.5-1.2c.4-.5 1-.5 1.4 0s1.5 1.2 2.5 1.2 1.9-.5 2.5-1.2c.4-.5 1-.5 1.4 0 .9 1.1 1.4 2.5 1.4 4z" />
                        <path d="M12 4V2" />
                        <path d="M8 5.2L7 3.5" />
                        <path d="M16 5.2l1-1.7" />
                      </svg>
                    )}
                    {i === 2 && (
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 3c-1.5 0-3 1.2-3 3.5 0 2 .8 3.5 1.5 5l2.5 6c.3.8 1 1.5 2 1.5h4c1 0 1.7-.7 2-1.5l2.5-6c.7-1.5 1.5-3 1.5-5C20 4.2 18.5 3 17 3c-1.5 0-2.5 1-3 2-.5 1-1 1.5-2 1.5s-1.5-.5-2-1.5C9.5 4 8.5 3 7 3z" />
                      </svg>
                    )}
                  </span>

                  <h2 className="mt-3 text-lg font-bold text-pine">{card.title}</h2>

                  <div className="mt-1 h-px w-10 rounded bg-clay/25" />

                  {card.body.includes(",") ? (
                    <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-pine/85">
                      {splitServiceText(card.body).map((line) => (
                        <li key={`${card.title}-${line}`} className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-clay/50" />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-3 text-sm leading-relaxed text-pine/85">{card.body}</p>
                  )}
                </article>
              );
            })}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Preisrahmen"
          title="Preislogik nach Hundegrösse"
          intro="Die Gesamtkosten hängen von Fellzustand, Verhalten und Zeitaufwand ab."
          variant="panel"
        >
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {sizePricing.map((row, i) => (
              <article key={row.size} className="group rounded-2xl border border-pine/10 bg-white p-5 transition hover:border-pine/25 hover:shadow-md">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-clay/8 text-clay transition group-hover:bg-clay/15">
                  {/* Small dog — small paw */}
                  {i === 0 && (
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <ellipse cx="12" cy="16" rx="4.5" ry="3.5" />
                      <circle cx="7" cy="9" r="2" />
                      <circle cx="17" cy="9" r="2" />
                      <circle cx="10" cy="6" r="1.8" />
                      <circle cx="14" cy="6" r="1.8" />
                    </svg>
                  )}
                  {/* Medium dog — medium paw */}
                  {i === 1 && (
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <ellipse cx="12" cy="16" rx="4.5" ry="3.5" />
                      <circle cx="7" cy="9" r="2" />
                      <circle cx="17" cy="9" r="2" />
                      <circle cx="10" cy="6" r="1.8" />
                      <circle cx="14" cy="6" r="1.8" />
                    </svg>
                  )}
                  {/* Large dog — large paw */}
                  {i === 2 && (
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                      <ellipse cx="12" cy="16" rx="4.5" ry="3.5" />
                      <circle cx="7" cy="9" r="2" />
                      <circle cx="17" cy="9" r="2" />
                      <circle cx="10" cy="6" r="1.8" />
                      <circle cx="14" cy="6" r="1.8" />
                    </svg>
                  )}
                </span>

                <h2 className="mt-3 font-bold text-pine">{row.size}</h2>
                <div className="mt-1 h-px w-10 rounded bg-clay/25" />

                <p className="mt-3 inline-flex rounded-full border border-clay/25 bg-clay/5 px-2.5 py-1 text-xs font-semibold text-pine">
                  {row.range}
                </p>
                <p className="mt-2.5 text-xs leading-relaxed text-pine/75">{row.note}</p>
              </article>
            ))}

            <article className="group rounded-2xl border border-clay/30 bg-white p-5 transition hover:border-clay/45 hover:shadow-md">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-clay/8 text-clay transition group-hover:bg-clay/15">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 3c-1.5 0-3 1.2-3 3.5 0 2 .8 3.5 1.5 5l2.5 6c.3.8 1 1.5 2 1.5h4c1 0 1.7-.7 2-1.5l2.5-6c.7-1.5 1.5-3 1.5-5C20 4.2 18.5 3 17 3c-1.5 0-2.5 1-3 2-.5 1-1 1.5-2 1.5s-1.5-.5-2-1.5C9.5 4 8.5 3 7 3z" />
                </svg>
              </span>

              <h2 className="mt-3 font-bold text-pine">Zahnreinigung</h2>
              <div className="mt-1 h-px w-10 rounded bg-clay/25" />

              <p className="mt-3 inline-flex rounded-full border border-clay/30 bg-clay/5 px-2.5 py-1 text-xs font-semibold text-pine">
                {dentalFacts.minutePrice}
              </p>
              <p className="mt-2.5 text-xs leading-relaxed text-pine/75">
                Erstbehandlung: {dentalFacts.firstTreatmentRange}
              </p>
            </article>
          </div>

          <div className="mt-4 flex gap-3 rounded-2xl border border-pine/10 bg-white p-5 text-sm text-pine/80">
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-clay/8 text-clay">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </span>
            <div>
              <p className="font-bold text-pine">Hinweis zu Verfilzung & Zeitaufwand</p>
              <p className="mt-1 leading-relaxed">
                Bei starker Verfilzung steigt der Zeitaufwand. Die Pflege wird möglichst schonend und transparent geplant.
              </p>
            </div>
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Einzelservices"
          title="Modular buchbar"
          intro="Leistungen können je nach Bedarf einzeln kombiniert werden."
          variant="panel"
        >
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
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
              <div key={item} className="group flex items-center gap-2.5 rounded-2xl border border-pine/10 bg-white px-4 py-3 transition hover:border-pine/25 hover:shadow-md">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-clay/8 text-clay transition group-hover:bg-clay/15">
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                </span>
                <span className="text-sm font-semibold text-pine">{item}</span>
              </div>
            ))}
          </div>
        </SectionShell>

      </div>
    </div>
  );
}
