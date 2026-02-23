type HeroCta = {
  href: string;
  label: string;
};
import { ReactNode } from "react";

type HeroTone = "mist" | "sand" | "sage" | "oat";
type HeroLayout = "split" | "compact";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  facts?: string[];
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  tone?: HeroTone;
  layout?: HeroLayout;
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: string;
  compactFacts?: boolean;
  supplement?: ReactNode;
};

function SmartLink({ href, label, primary }: HeroCta & { primary?: boolean }) {
  const baseClass = primary
    ? "inline-flex rounded-full bg-pine px-5 py-3 text-sm font-bold text-white transition hover:bg-clay"
    : "inline-flex rounded-full border border-pine/25 px-5 py-3 text-sm font-semibold text-pine transition hover:bg-pine hover:text-white";

  return (
    <a href={href} className={baseClass}>
      {label}
    </a>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  facts = [],
  primaryCta,
  secondaryCta,
  tone = "mist",
  layout = "split",
  imageSrc,
  imageAlt = "",
  imagePosition = "center center",
  compactFacts = false,
  supplement
}: PageHeroProps) {
  const toneClass =
    tone === "sand"
      ? "border-clay/35 bg-gradient-to-br from-[#f6efe5] via-[#f3eadf] to-[#efe5d8]"
      : tone === "sage"
        ? "border-moss/35 bg-gradient-to-br from-[#e9f3ee] via-[#e5f0ea] to-[#deebe4]"
        : tone === "oat"
          ? "border-pine/20 bg-gradient-to-br from-[#f7f6f1] via-[#f3f1ea] to-[#efede5]"
          : "border-pine/20 bg-gradient-to-br from-[#f5faf7] via-[#f0f6f3] to-[#e8f0ec]";

  const chipClass =
    tone === "sand"
      ? "border-clay/25 bg-[#fcf7f1]"
      : tone === "sage"
        ? "border-moss/30 bg-[#f1f8f4]"
        : "border-pine/15 bg-white";

  const accentClass =
    tone === "sand" ? "bg-clay/70" : tone === "sage" ? "bg-moss/80" : "bg-pine/70";

  const hasSideContent = layout === "split" && (imageSrc || facts.length > 0);

  return (
    <section className={`fade-in-up rounded-[2rem] border p-6 shadow-soft md:p-10 ${toneClass}`}>
      <div className={hasSideContent ? "grid gap-7 lg:grid-cols-[1.2fr_0.8fr] lg:items-start" : ""}>
        <div>
          <div className={`mb-4 h-1 w-14 rounded-full ${accentClass}`} />
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-clay">{eyebrow}</p>
          <h1 className="mt-3 max-w-4xl font-display text-4xl leading-[0.97] text-pine md:text-6xl">{title}</h1>
          <p className="mt-4 max-w-3xl text-base text-pine/90">{intro}</p>

          {(primaryCta || secondaryCta) ? (
            <div className="mt-6 flex flex-wrap gap-3">
              {primaryCta ? <SmartLink {...primaryCta} primary /> : null}
              {secondaryCta ? <SmartLink {...secondaryCta} /> : null}
            </div>
          ) : null}

          {supplement ? <div className="mt-5">{supplement}</div> : null}

          {facts.length > 0 && layout === "compact" ? (
            <div className="mt-5">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-pine/65">Auf einen Blick</p>
              <ul className="mt-2 flex flex-wrap gap-2 text-sm text-pine/85">
                {facts.map((fact) => (
                  <li key={fact} className={`rounded-full border px-3 py-1.5 ${chipClass}`}>
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>

        {hasSideContent ? (
          <aside className="space-y-3 lg:flex lg:h-full lg:flex-col">
            {imageSrc ? (
              <div className="relative h-56 overflow-hidden rounded-2xl border border-pine/15 bg-white md:h-64 lg:h-full lg:min-h-[20rem]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  loading="eager"
                  decoding="sync"
                  style={{ objectPosition: imagePosition }}
                  className="h-full w-full object-cover"
                />
              </div>
            ) : null}

            {facts.length > 0 ? (
              <div
                className={`rounded-2xl border border-pine/15 bg-white ${
                  compactFacts ? "max-w-[22rem] p-2.5 md:p-3" : "max-w-[26rem] p-3 md:p-3.5"
                }`}
              >
                <p className={`${compactFacts ? "text-[10px]" : "text-[11px]"} font-bold uppercase tracking-[0.14em] text-pine/65`}>
                  Auf einen Blick
                </p>
                <ul className={`mt-2 space-y-1.5 ${compactFacts ? "text-[11px] md:text-xs" : "text-xs md:text-sm"} text-pine/85`}>
                  {facts.map((fact) => (
                    <li key={fact} className={`rounded-lg border ${compactFacts ? "px-2 py-1" : "px-2.5 py-1.5"} ${chipClass}`}>
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </aside>
        ) : null}
      </div>

      {facts.length > 0 && !hasSideContent ? (
        <div className="mt-5">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-pine/65">Auf einen Blick</p>
          <ul className="mt-2 flex flex-wrap gap-2 text-sm text-pine/85">
            {facts.map((fact) => (
              <li key={fact} className={`rounded-full border px-3 py-1.5 ${chipClass}`}>
                {fact}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
