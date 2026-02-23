import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";
import { makeMetadata } from "@/lib/metadata";
import { ctaLinks, homeFlow, preparationChecklist } from "@/lib/site-data";

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
        <SectionShell eyebrow="Schritt für Schritt" title="So läuft ein Termin ab" variant="panel">
          <div className="grid gap-3 md:grid-cols-2">
            {homeFlow.map((step) => (
              <article key={step.title} className="rounded-xl border border-pine/15 bg-white p-4">
                <h2 className="text-lg font-semibold text-pine">{step.title}</h2>
                <p className="mt-1 text-sm text-pine/80">{step.body}</p>
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell eyebrow="Mitbringen" title="Checkliste vor dem Termin" variant="panel">
          <ul className="grid gap-2 md:grid-cols-2">
            {preparationChecklist.map((item) => (
              <li key={item} className="rounded-xl border border-pine/15 bg-white px-4 py-3 text-sm text-pine/85">
                {item}
              </li>
            ))}
          </ul>
        </SectionShell>

        <SectionShell eyebrow="Spezielle Situationen" title="Welpen, nervöse und grosse Hunde" variant="plain">
          <div className="grid gap-3 md:grid-cols-3">
            <article className="rounded-xl border border-pine/15 bg-white p-4">
              <h2 className="text-lg font-semibold text-pine">Welpen</h2>
              <p className="mt-2 text-sm text-pine/80">
                Ein kurzer erster Besuch im Salon hilft, Geräusche und Geräte stressfrei kennenzulernen.
              </p>
            </article>
            <article className="rounded-xl border border-pine/15 bg-white p-4">
              <h2 className="text-lg font-semibold text-pine">Nervöse Hunde</h2>
              <p className="mt-2 text-sm text-pine/80">
                Hunde ohne Salonerfahrung werden schrittweise an die Ambiance gewöhnt und mit Einfühlvermögen begleitet.
              </p>
            </article>
            <article className="rounded-xl border border-clay/35 bg-white p-4">
              <h2 className="text-lg font-semibold text-pine">Grosse Hunde</h2>
              <p className="mt-2 text-sm text-pine/80">Grosse Hunde sind bei Lefita willkommen und werden passend eingeplant.</p>
            </article>
          </div>
        </SectionShell>
      </div>
    </div>
  );
}
