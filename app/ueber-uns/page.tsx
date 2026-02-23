import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";
import { makeMetadata } from "@/lib/metadata";
import { ctaLinks, siteConfig } from "@/lib/site-data";

export const metadata = makeMetadata({
  title: "Über Lefita",
  description:
    "Persönlicher Überblick über Lefita, Arbeitsweise und Philosophie von Eveline Slimen.",
  path: "/ueber-uns"
});

export default function UeberUnsPage() {
  return (
    <div className="page-shell pb-16 pt-8 md:pt-10">
      <PageHero
        eyebrow="Über Lefita"
        title="Persönlich & professionell"
        intro={`${siteConfig.owner} führt Lefita mit Fokus auf hundegerechte Pflege, Ruhe und respektvollen Umgang mit jedem Tier.`}
        primaryCta={{ href: ctaLinks.booking, label: "Termin buchen" }}
        secondaryCta={{ href: "/kontakt", label: "Kontakt" }}
        tone="mist"
        layout="split"
        imageSrc="/lefita-original-6.jpg"
        imageAlt="Persönliche Arbeit bei Lefita"
        imagePosition="center center"
      />

      <div className="mt-8 grid gap-8">
        <SectionShell eyebrow="Kurz persönlich" title="Wer hinter Lefita steht" variant="panel">
          <p className="text-sm text-pine/85">
            Lefita ist ein auf Hundepflege spezialisiertes Angebot in {siteConfig.city}. Die Betreuung erfolgt
            persönlich, strukturiert und mit Einfühlungsvermögen - auch für Hunde ohne bisherige Salonerfahrung.
          </p>
        </SectionShell>

        <SectionShell eyebrow="Arbeitsweise" title="Ruhige Atmosphäre als Standard" variant="panel">
          <ul className="grid gap-2 md:grid-cols-2">
            {[
              "Stressfreie Pflege in entspannter Atmosphäre",
              "Welpen dürfen den Salon vorab kennenlernen",
              "Nervöse Hunde werden schrittweise an die Ambiance gewöhnt",
              "Grosse Hunde sind ausdrücklich willkommen"
            ].map((point, index) => (
              <li
                key={point}
                className={`rounded-xl border ${index === 3 ? "border-clay/35" : "border-pine/15"} bg-white px-4 py-3 text-sm text-pine/85`}
              >
                {point}
              </li>
            ))}
          </ul>
        </SectionShell>

        <SectionShell eyebrow="Philosophie" title="Sicher, transparent, sorgfältig" variant="panel">
          <p className="text-sm text-pine/85">
            Jede Behandlung orientiert sich an Fellzustand, Temperament und dem tatsächlichen Bedarf. Qualität und
            Tierwohl stehen vor Geschwindigkeit. Das Ziel ist eine saubere, passende Pflege mit nachvollziehbarem Ablauf.
          </p>
        </SectionShell>
      </div>
    </div>
  );
}
