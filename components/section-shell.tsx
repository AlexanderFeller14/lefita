import { ReactNode } from "react";

type SectionVariant = "plain" | "panel" | "sand" | "sage";

type SectionShellProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  variant?: SectionVariant;
  className?: string;
};

export function SectionShell({
  eyebrow,
  title,
  intro,
  children,
  variant = "plain",
  className = ""
}: SectionShellProps) {
  const variantClass =
    variant === "panel"
      ? "section-panel rounded-2xl border border-pine/10 p-4 shadow-soft md:p-7"
      : variant === "sand"
        ? "section-sand rounded-2xl border border-pine/10 p-4 shadow-soft md:p-7"
        : variant === "sage"
          ? "section-sage rounded-2xl border border-pine/10 p-4 shadow-soft md:p-7"
          : "";

  return (
    <section className={`fade-in-up ${variantClass} ${className}`.trim()}>
      {eyebrow ? (
        <p className="hero-eyebrow mb-2 text-xs font-bold uppercase tracking-[0.16em]">{eyebrow}</p>
      ) : null}
      <h2 className="font-display text-2xl text-pine sm:text-3xl md:text-4xl">{title}</h2>
      {intro ? <p className="mt-3 max-w-3xl text-sm leading-relaxed text-pine/80 md:text-base">{intro}</p> : null}
      <div className="mt-4 md:mt-5">{children}</div>
    </section>
  );
}
