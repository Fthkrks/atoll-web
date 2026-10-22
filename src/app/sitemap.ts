import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/metadata";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/tr", "/privacy", "/tr/privacy"].map(path => ({
    url: `${siteUrl}${path}`,
    alternates: { languages: path.includes("privacy") ? { en: `${siteUrl}/privacy`, tr: `${siteUrl}/tr/privacy` } : { en: siteUrl, tr: `${siteUrl}/tr` } },
  }));
}
