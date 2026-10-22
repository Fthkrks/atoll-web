import type { Metadata } from "next";
import { content, type Locale } from "./content";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "https://atoll.vercel.app")
).replace(/\/$/, "");

export const sharedMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Atoll",
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "48x48" }, { url: "/branding/atoll-icon-192.png", type: "image/png", sizes: "192x192" }],
    apple: [{ url: "/branding/atoll-icon-192.png", sizes: "192x192", type: "image/png" }],
  },
};

export function pageMetadata(locale: Locale, privacy = false): Metadata {
  const c = content[locale];
  const title = privacy ? `${locale === "en" ? "Privacy Policy" : "Gizlilik Politikası"} | Atoll` : c.name;
  const description = privacy
    ? locale === "en" ? "How Atoll keeps your translations private on Android and Windows. On-device processing, no accounts, ads, or tracking." : "Atoll Android ve Windows'ta çevirilerinizi nasıl gizli tutar? Cihaz üstünde işleme; hesap, reklam ve takip yok."
    : c.description;
  const en = privacy ? "/privacy" : "/";
  const tr = privacy ? "/tr/privacy" : "/tr";
  const path = locale === "en" ? en : tr;
  return {
    title, description,
    alternates: { canonical: path, languages: { en, tr, "x-default": en } },
    openGraph: { type: "website", url: path, siteName: "Atoll", title, description, locale: locale === "en" ? "en_US" : "tr_TR", alternateLocale: locale === "en" ? "tr_TR" : "en_US", images: [{ url: `/feature-graphic-${locale}.png`, width: 1024, height: 500, alt: c.name }] },
    twitter: { card: "summary_large_image", title, description, images: [`/feature-graphic-${locale}.png`] },
  };
}
