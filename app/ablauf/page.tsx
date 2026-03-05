import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";
import { makeMetadata } from "@/lib/metadata";
import { ctaLinks, preparationChecklist } from "@/lib/site-data";

const ablaufSteps = [
  {
    num: "01",
    title: "Termin anfragen",
    body: "Buchung telefonisch oder über das Online-Formular mit den wichtigsten Hundedaten.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    num: "02",
    title: "Kurzbesprechung",
    body: "Ziel, Fellzustand und Zeitaufwand werden vor Ort gemeinsam abgestimmt.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  },
  {
    num: "03",
    title: "Ruhige Pflege",
    body: "Ihr Hund wird stressfrei und professionell in entspannter Atmosphäre gepflegt.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    num: "04",
    title: "Abholung & Hinweise",
    body: "Sie erhalten eine kurze Rückmeldung und Empfehlungen für die nächste Pflegeeinheit.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
] as const;

export const metadata = makeMetadata({
  title: "Ablauf",
  description:
    "So läuft ein Termin bei Lefita ab: Vorbereitung, Welpen-Handling, nervöse und grosse Hunde.",
  path: "/ablauf"
});

export default function AblaufPage() {
  return (
    <div className="page-shell pb-16 pt-8 md:pt-10">
      <PageHero
        eyebrow="Ablauf & Vorbereitung"
        title="Ablauf"
        intro="Jeder Termin folgt einem klaren, ruhigen Ablauf. So bleibt die Pflege für Hund und Halter nachvollziehbar."
        primaryCta={{ href: ctaLinks.booking, label: "Termin buchen" }}
        secondaryCta={{ href: ctaLinks.call, label: "Anrufen" }}
        tone="mist"
        layout="split"
        imageSrc="/lefita-original-5.jpg"
        imageAlt="Hundebetreuung vor dem Termin"
        imagePosition="center center"
      />

      <div className="mt-8 grid gap-8">
        {/* ── Schritt für Schritt — editorial timeline ── */}
        <SectionShell eyebrow="Schritt für Schritt" title="So läuft ein Termin ab" variant="panel">
          <div className="ablauf-timeline relative">
            {/* vertical connector line */}
            <div aria-hidden className="ablauf-connector absolute left-[1.55rem] top-4 bottom-4 w-px bg-gradient-to-b from-clay/40 via-pine/15 to-clay/40 md:left-1/2 md:-translate-x-px" />

            <div className="relative flex flex-col gap-5 md:gap-6">
              {ablaufSteps.map((step, i) => {
                const isEven = i % 2 === 0;
                return (
                  <article
                    key={step.num}
                    className={`ablauf-step group relative flex items-start gap-4 md:items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
                    style={{ animationDelay: `${i * 120}ms` }}
                  >
                    {/* ── Content card ── */}
                    <div className={`flex-1 md:w-[calc(50%-2rem)] ${isEven ? "md:text-right" : "md:text-left"}`}>
                      <div className={`ablauf-card rounded-2xl border border-pine/10 bg-white p-4 transition-all duration-300 hover:border-clay/30 hover:shadow-lg md:p-5 ${isEven ? "md:ml-auto md:mr-0" : "md:ml-0 md:mr-auto"}`}
                           style={{ maxWidth: "22rem" }}>
                        {/* oversize number watermark */}
                        <span className={`ablauf-num pointer-events-none absolute -top-2 font-display text-[5rem] font-bold leading-none text-pine/[0.04] transition-all duration-500 group-hover:text-clay/[0.1] ${isEven ? "md:-left-2 -left-1" : "md:-right-2 -left-1"}`}>
                          {step.num}
                        </span>
                        <div className={`relative flex items-start gap-3 ${isEven ? "md:flex-row-reverse md:text-left" : ""}`}>
                          {/* icon badge */}
                          <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-pine/10 bg-gradient-to-br from-clay/10 to-pine/5 text-pine/70 transition-all duration-300 group-hover:border-clay/25 group-hover:from-clay/20 group-hover:text-clay">
                            {step.icon}
                          </span>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-baseline gap-2">
                              <span className="text-[11px] font-bold uppercase tracking-widest text-clay/70">{step.num}</span>
                              <h3 className="text-sm font-bold text-pine">{step.title}</h3>
                            </div>
                            <p className="mt-1 text-[13px] leading-relaxed text-pine/65">{step.body}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ── Center dot ── */}
                    <div className="ablauf-dot absolute left-[1.05rem] top-4 z-10 flex h-[1.1rem] w-[1.1rem] items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-clay to-pine shadow-sm transition-all duration-300 group-hover:scale-125 group-hover:shadow-md md:relative md:left-auto md:top-auto md:mx-auto md:flex-shrink-0">
                      <span className="h-1 w-1 rounded-full bg-white" />
                    </div>

                    {/* ── Spacer for opposite side ── */}
                    <div className="hidden flex-1 md:block md:w-[calc(50%-2rem)]" />
                  </article>
                );
              })}
            </div>
          </div>
        </SectionShell>

        {/* ── Checkliste — stacked accent cards ─────── */}
        <SectionShell eyebrow="Mitbringen" title="Checkliste vor dem Termin" variant="panel">
          <div className="flex flex-col gap-2.5">
            {preparationChecklist.map((item, i) => (
              <div
                key={item}
                className="checklist-item group flex items-center gap-3.5 rounded-2xl border border-pine/8 bg-white px-4 py-3.5 transition-all duration-300 hover:border-clay/25 hover:shadow-md md:px-5"
              >
                {/* animated check circle */}
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl border border-pine/10 bg-gradient-to-br from-clay/8 to-pine/4 transition-all duration-300 group-hover:border-clay/30 group-hover:from-clay/20 group-hover:to-clay/8">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-pine/40 transition-colors duration-300 group-hover:text-clay">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                {/* text */}
                <span className="text-[13px] leading-relaxed text-pine/75 transition-colors duration-300 group-hover:text-pine md:text-sm">
                  {item}
                </span>
                {/* subtle index */}
                <span className="ml-auto hidden text-[10px] font-bold tracking-widest text-pine/10 transition-colors duration-300 group-hover:text-clay/30 sm:block">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </SectionShell>

        {/* ── Spezielle Situationen — bento cards ──── */}
        <SectionShell eyebrow="Spezielle Situationen" title="Welpen, nervöse und grosse Hunde" variant="sage">
          <div className="grid gap-3 md:grid-cols-3">
            {[
              {
                title: "Welpen",
                body: "Ein kurzer erster Besuch im Salon hilft, Geräusche und Geräte stressfrei kennenzulernen.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    <path d="M12 21C12 21 4 15 4 9.5C4 7 6 5 8 5C9.5 5 11 6 12 7.5C13 6 14.5 5 16 5C18 5 20 7 20 9.5C20 15 12 21 12 21Z" />
                  </svg>
                ),
                accent: "from-clay/15 to-moss/10",
                borderHover: "hover:border-clay/30"
              },
              {
                title: "Nervöse Hunde",
                body: "Hunde ohne Salonerfahrung werden schrittweise an die Ambiance gewöhnt und mit Einfühlvermögen begleitet.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    {/* shield with heart — Schutz & Einfühlvermögen */}
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M12 8.5c-.5-.7-1.3-1-2-1-1.4 0-2.5 1.1-2.5 2.5 0 3 4.5 5.5 4.5 5.5s4.5-2.5 4.5-5.5c0-1.4-1.1-2.5-2.5-2.5-.7 0-1.5.3-2 1z" />
                  </svg>
                ),
                accent: "from-pine/10 to-clay/10",
                borderHover: "hover:border-pine/25"
              },
              {
                title: "Grosse Hunde",
                body: "Grosse Hunde sind bei Lefita willkommen und werden passend eingeplant.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    {/* expand/maximize — Grösse */}
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                ),
                accent: "from-moss/15 to-pine/8",
                borderHover: "hover:border-moss/35"
              }
            ].map((card) => (
              <article
                key={card.title}
                className={`situation-card group relative overflow-hidden rounded-2xl border border-pine/10 bg-white p-5 transition-all duration-300 ${card.borderHover} hover:shadow-lg md:p-6`}
              >
                {/* background gradient on hover */}
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${card.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                {/* oversized decorative icon */}
                <div className="pointer-events-none absolute -right-3 -bottom-3 text-pine/[0.03] transition-all duration-500 group-hover:text-clay/[0.08]">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-28 w-28">
                    <circle cx="12" cy="12" r="12" />
                  </svg>
                </div>
                <div className="relative">
                  {/* icon badge */}
                  <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl border border-pine/10 bg-gradient-to-br from-clay/10 to-pine/5 text-pine/60 transition-all duration-300 group-hover:border-clay/25 group-hover:from-clay/20 group-hover:text-clay">
                    {card.icon}
                  </span>
                  <h3 className="text-base font-bold text-pine">{card.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-pine/65">{card.body}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionShell>
      </div>
    </div>
  );
}
