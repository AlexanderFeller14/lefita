import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";
import { makeMetadata } from "@/lib/metadata";
import { ctaLinks } from "@/lib/site-data";

export const metadata = makeMetadata({
  title: "Diplom & Ausbildung",
  description:
    "Diplomierte Hundecoiffeuse mit 18-monatiger Ausbildung, 300 Seiten Theorie und Erfahrung mit über 50 Rassen.",
  path: "/diplom"
});

const heroStats = [
  {
    value: "300",
    label: "Seiten Theorie",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    value: "50+",
    label: "Rassen",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <path d="M6.5 6.5a2 2 0 11-4 0 2 2 0 014 0zM21.5 6.5a2 2 0 11-4 0 2 2 0 014 0zM9.5 3.5a2 2 0 11-4 0 2 2 0 014 0zM18.5 3.5a2 2 0 11-4 0 2 2 0 014 0z" />
        <path d="M12 12c-2 0-6 1.5-6 5v1a1 1 0 001 1h10a1 1 0 001-1v-1c0-3.5-4-5-6-5z" />
      </svg>
    )
  },
  {
    value: "18",
    label: "Monate Ausbildung",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
] as const;

export default function DiplomPage() {
  return (
    <div className="page-shell pb-16 pt-8 md:pt-10">
      <PageHero
        eyebrow="Diplom & Ausbildung"
        title="Diplomierte Hundecoiffeuse"
        intro="300 Seiten Theorie (Anatomie, Verhalten, Krankheiten, Tiermedizin) von über 50 Rassen während 18 Monaten Ausbildung & Praktikum. Absolviert nebenberuflich von 2022 bis 2025."
        primaryCta={{ href: ctaLinks.booking, label: "Termin buchen" }}
        secondaryCta={{ href: "/ueber-uns", label: "Über Lefita" }}
        tone="sage"
        layout="compact"
        supplement={
          <div className="grid grid-cols-3 gap-2.5">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="group rounded-xl border border-clay/20 bg-white/60 px-3 py-3 text-center transition-all duration-300 hover:border-clay/40 hover:bg-white hover:shadow-md"
              >
                <span className="mx-auto mb-1.5 flex h-8 w-8 items-center justify-center rounded-lg bg-clay/10 text-clay/70 transition-colors duration-300 group-hover:bg-clay/20 group-hover:text-clay">
                  {stat.icon}
                </span>
                <p className="font-display text-2xl leading-none text-pine sm:text-3xl">{stat.value}</p>
                <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wider text-pine/50">{stat.label}</p>
              </div>
            ))}
          </div>
        }
      />

      <div className="mt-8 grid gap-8">
        {/* ── Ausbildungsstätte ───────────────────────── */}
        <SectionShell eyebrow="Ausbildungsstätte" title="Hundesalon Pashkin, Freimettigen" variant="sand">
          <article className="group relative overflow-hidden rounded-2xl border border-clay/20 bg-white p-5 transition-all duration-300 hover:border-clay/35 hover:shadow-lg md:p-7">
            {/* decorative background gradient */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-clay/8 to-moss/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            {/* oversized decorative element */}
            <div className="pointer-events-none absolute -right-6 -bottom-6 text-clay/[0.04] transition-all duration-500 group-hover:text-clay/[0.09]">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-36 w-36">
                <path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
              </svg>
            </div>
            <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-5">
              {/* icon badge */}
              <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border border-clay/20 bg-gradient-to-br from-clay/15 to-pine/5 text-clay transition-all duration-300 group-hover:border-clay/35 group-hover:from-clay/25 group-hover:shadow-md">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
                </svg>
              </span>
              <div>
                <h3 className="font-display text-xl text-pine sm:text-2xl">Diana Lehmann</h3>
                <p className="mt-1 text-sm font-medium text-clay">Ausgebildete Hundecoiffeuse, Tierpflegerin und Tierheilpraktikerin</p>
                <div className="mt-3 h-px w-12 rounded bg-clay/20 transition-all duration-300 group-hover:w-20 group-hover:bg-clay/35" />
                <p className="mt-3 text-sm leading-relaxed text-pine/70">
                  Ihr unkompliziertes, energiegeladenes &amp; humorvolles Wesen hat mein Leben nachhaltig bereichert.
                </p>
              </div>
            </div>
          </article>
        </SectionShell>

        {/* ── Geplante Weiterbildungen ────────────────── */}
        <SectionShell eyebrow="Weiterbildung" title="Geplante Weiterbildungen" variant="panel">
          <article className="group relative overflow-hidden rounded-2xl border border-pine/10 bg-white p-5 transition-all duration-300 hover:border-clay/30 hover:shadow-lg md:p-6">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-clay/10 to-moss/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start">
              <div className="flex h-16 w-16 flex-shrink-0 flex-col items-center justify-center rounded-xl border border-clay/20 bg-gradient-to-br from-clay/10 to-pine/5 transition-all duration-300 group-hover:border-clay/30 group-hover:from-clay/20">
                <span className="text-lg font-bold leading-none text-pine">16</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-clay/70">Apr 26</span>
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-clay/60">Donnerstag, 16. April 2026</p>
                <h3 className="mt-1 text-base font-bold text-pine">Workshop mit Hund</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-pine/65">
                  Zahnhygiene, Entfernung von Zahnstein, Prophylaxe
                </p>
                <p className="mt-2 flex items-center gap-1.5 text-[13px] text-pine/50">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                    <path d="M15 10.5a3 3 0 11-6 0 3 6 0 016 0z" />
                    <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  BARF Nidwalden, Wolfenschiessen
                </p>
              </div>
            </div>
          </article>
        </SectionShell>
      </div>
    </div>
  );
}
