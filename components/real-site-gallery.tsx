import Image from "next/image";
import { realWebsiteImages } from "@/lib/site-data";

type RealSiteGalleryProps = {
  title?: string;
  intro?: string;
  limit?: number;
};

export function RealSiteGallery({
  title = "Originalbilder von Lefita",
  intro = "Diese Bilder stammen aus der bestehenden Website lefita.ch.",
  limit = 6
}: RealSiteGalleryProps) {
  const images = realWebsiteImages.slice(0, limit);

  return (
    <section className="fade-in-up rounded-3xl border border-pine/10 bg-white/85 p-6 shadow-soft md:p-10">
      <p className="hero-eyebrow text-xs font-bold uppercase tracking-[0.18em]">Originalbilder</p>
      <h2 className="mt-2 font-display text-3xl text-pine md:text-4xl">{title}</h2>
      <p className="mt-3 max-w-3xl text-sm text-pine/80 md:text-base">{intro}</p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <figure
            key={image.src}
            className="group relative h-56 overflow-hidden rounded-2xl border border-pine/10 bg-sand/40"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition duration-300 group-hover:scale-[1.03]"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
