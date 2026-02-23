import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-data";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function makeMetadata({ title, description, path }: MetadataInput): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      type: "website",
      locale: "de_CH",
      url,
      title,
      description,
      siteName: siteConfig.legalBrand
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}
