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
      ? "rounded-2xl border border-pine/12 bg-white/85 p-5 shadow-soft md:p-7"
      : variant === "sand"
        ? "rounded-2xl border border-clay/25 bg-sand/55 p-5 shadow-soft md:p-7"
        : variant === "sage"
          ? "rounded-2xl border border-moss/30 bg-[#e9f2ed] p-5 shadow-soft md:p-7"
          : "";

  return (
    <section className={`fade-in-up ${variantClass} ${className}`.trim()}>
      {eyebrow ? (
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-clay">{eyebrow}</p>
      ) : null}
      <h2 className="font-display text-3xl text-pine md:text-4xl">{title}</h2>
      {intro ? <p className="mt-3 max-w-3xl text-sm text-pine/80 md:text-base">{intro}</p> : null}
      <div className="mt-5">{children}</div>
    </section>
  );
}
