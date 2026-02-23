import { BookingForm } from "@/components/booking-form";
import { PageHero } from "@/components/page-hero";
import { makeMetadata } from "@/lib/metadata";
import { ctaLinks } from "@/lib/site-data";

export const metadata = makeMetadata({
  title: "Termin",
  description:
    "Online-Terminformular für Hundepflege bei Lefita inklusive Serviceauswahl, Hundedaten, Validierung und klaren Hinweisen.",
  path: "/termin"
});

export default function TerminPage() {
  return (
    <div className="page-shell pb-16 pt-8 md:pt-10">
      <PageHero
        eyebrow="Online Termin"
        title="Termin buchen"
        intro="Terminanfrage in wenigen Schritten: Service wählen, Hundedaten ergänzen und Kontaktangaben absenden."
        primaryCta={{ href: "#buchungsformular", label: "Zum Formular" }}
        secondaryCta={{ href: ctaLinks.call, label: "Anrufen" }}
        tone="mist"
        layout="compact"
      />

      <div id="buchungsformular" className="mt-8 scroll-mt-28">
        <BookingForm />
      </div>
    </div>
  );
}
