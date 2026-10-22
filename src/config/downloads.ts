/**
 * Publish the packages before enabling these links. Public environment variables
 * are embedded at build time, so redeploy after changing either URL.
 */
export const githubUrl = "https://github.com/Fthkrks/atoll";

export const downloads = {
  windows: {
    url:
      process.env.NEXT_PUBLIC_WINDOWS_DOWNLOAD_URL?.trim() ||
      "https://github.com/Fthkrks/atoll-releases/releases/latest/download/Atoll-Windows-x64.zip",
    version: "1.0.0",
    size: { en: "About 1.2 GB", tr: "Yaklaşık 1,2 GB" },
    platform: "Windows 10 / 11 · 64-bit",
  },
  android: {
    // Intended: https://play.google.com/store/apps/details?id=com.fourpp.atoll
    url: process.env.NEXT_PUBLIC_PLAY_STORE_URL?.trim() || "",
    packageId: "com.fourpp.atoll",
  },
} as const;

for (const [platform, download] of Object.entries(downloads)) {
  if (download.url && !/^https?:\/\//i.test(download.url)) {
    throw new Error(`The ${platform} download URL must start with https:// or http://.`);
  }
}
