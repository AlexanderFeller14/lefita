import type { Metadata } from "next";
import { Manrope, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LocalBusinessJsonLd } from "@/components/local-business-jsonld";
import { siteConfig } from "@/lib/site-data";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"]
});

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.legalBrand} | Hundepflege in ${siteConfig.city}`,
    template: `%s | ${siteConfig.legalBrand}`
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "de_CH",
    siteName: siteConfig.legalBrand,
    title: `${siteConfig.legalBrand} | Hundepflege in ${siteConfig.city}`,
    description: siteConfig.description,
    url: siteConfig.url
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de-CH" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var p=new URLSearchParams(window.location.search);var q=p.get('theme');if(q==='dark'||q==='light'){document.documentElement.setAttribute('data-theme',q);localStorage.setItem('lefita-theme',q);return;}var t=localStorage.getItem('lefita-theme')||'light';document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`
          }}
        />
      </head>
      <body className={`${sans.variable} ${display.variable}`}>
        <LocalBusinessJsonLd />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
