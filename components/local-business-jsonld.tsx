import { siteConfig } from "@/lib/site-data";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "PetGrooming",
  name: siteConfig.legalBrand,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phoneDisplay,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.street,
    postalCode: siteConfig.postalCode,
    addressLocality: siteConfig.city,
    addressCountry: siteConfig.country
  },
  openingHoursSpecification: siteConfig.openingHoursSpecification.map((spec) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: spec.days,
    opens: spec.opens,
    closes: spec.closes
  })),
  priceRange: "Zahnreinigung Erstbehandlung Fr. 90.- bis Fr. 180.-; weitere Leistungen nach Aufwand",
  areaServed: "Region Mühlethurnen"
};

export function LocalBusinessJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
