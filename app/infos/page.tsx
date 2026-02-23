import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";
import { makeMetadata } from "@/lib/metadata";
import { ctaLinks, importantInfoBlocks } from "@/lib/site-data";

export const metadata = makeMetadata({
  title: "Wichtige Infos",
  description:
    "Relevante Hinweise zu Verfilzung, Parasiten, Läufigkeit, Absagen und Verhalten vor dem Hundepflege-Termin.",
  path: "/infos"
});

export default function InfosPage() {
  return (
    <div className="page-shell pb-16 pt-8 md:pt-10">
      <PageHero
        eyebrow="Wichtige Infos"
        title="Hinweise vor dem Termin"
        intro="Die wichtigsten Regeln und Hinweise kompakt, damit Termine ruhig und planbar bleiben."
        primaryCta={{ href: ctaLinks.booking, label: "Termin buchen" }}
        secondaryCta={{ href: ctaLinks.call, label: "Anrufen" }}
        tone="mist"
        layout="compact"
      />

      <div className="mt-8">
        <SectionShell eyebrow="Vorbereitung" title="Bitte vorab beachten" variant="panel">
          <div className="grid gap-3 md:grid-cols-2">
            {importantInfoBlocks.map((item, index) => (
              <article
                key={item.title}
                className={`rounded-xl border ${index === 0 ? "border-clay/35" : "border-pine/15"} bg-white p-4`}
              >
                <h2 className="text-lg font-semibold text-pine">{item.title}</h2>
                <p className="mt-2 text-sm text-pine/80">{item.body}</p>
              </article>
            ))}
          </div>
        </SectionShell>
      </div>
    </div>
  );
}
