# Atoll website

An English / Turkish Next.js App Router site for **Atoll: Offline Translator**, made by 4pp Studio. Uses TypeScript, Tailwind CSS 4, and a static export. No analytics or tracking scripts.

Production: **https://atoll-one.vercel.app** (Vercel project `atoll`).

## Run and check

Requires Node.js 22 and npm.

```powershell
npm ci
npm run dev
npm run lint
npm run build
```

The production build is exported to `out/`. Images use `next/image` with static-export-compatible `unoptimized: true`. Fonts are system fonts; no external font requests are made.

## Pages

- `/`: English landing page
- `/tr`: Turkish landing page
- `/privacy`: English privacy policy
- `/tr/privacy`: Turkish privacy policy
- `/robots.txt`, `/sitemap.xml`: search engine metadata

Each language has its own root layout so the exported HTML has the correct `lang` attribute. Pages include canonical, hreflang, Open Graph, and social image metadata.

## Enable downloads later

**Single source of truth: `src/config/downloads.ts`.** Both URLs are intentionally empty until the packages have been published, and the UI renders disabled “Coming soon” buttons.

1. Publish the Windows ZIP containing the desktop app **and the model**.
2. Set `windows.url` and `windows.version` in `src/config/downloads.ts`, or set `NEXT_PUBLIC_WINDOWS_DOWNLOAD_URL` in Vercel. The environment variable takes precedence. Update the localized `windows.size` text in that same config file when needed.
3. For Android, set `android.url` there, or `NEXT_PUBLIC_PLAY_STORE_URL`, once the listing is public.
4. Rebuild and redeploy: these public values are embedded at build time.

Intended Windows URL:
`https://github.com/Fthkrks/atoll-releases/releases/latest/download/Atoll-Windows-x64.zip`

Intended Google Play URL:
`https://play.google.com/store/apps/details?id=com.fourpp.atoll`

The Windows version is blank because no version is published yet; the site does not invent a release number. Download size copy is centralized in the config. Android's one-time model download is explained separately from the bundled Windows model.

## Deploy to Vercel

```powershell
vercel link --yes --project atoll
vercel deploy --prod --yes
```

The canonical site origin comes from `NEXT_PUBLIC_SITE_URL`, then Vercel's `VERCEL_PROJECT_PRODUCTION_URL`, with `https://atoll-one.vercel.app` as the local fallback. If the production alias differs, set `NEXT_PUBLIC_SITE_URL` before building. Do not commit `.vercel/` or `.env*` files.

Branding and store assets were copied into `public/`; the source files in `Mobil/` and `Desktop/` are unchanged. `public/favicon.ico` embeds the supplied 48px app icon. Privacy copy was adapted from the supplied bilingual policy to cover the Windows package and website hosting, and the Turkish contact placeholder was replaced with the supplied contact email.

## Atoll projects

- [atoll](https://github.com/Fthkrks/atoll): Android app (Flutter + llama.cpp via llamadart)
- [atoll-desktop](https://github.com/Fthkrks/atoll-desktop): Windows app (WinUI 3 + LLamaSharp)
- [atoll-web](https://github.com/Fthkrks/atoll-web): website (Next.js), https://atoll-one.vercel.app
- [atoll-releases](https://github.com/Fthkrks/atoll-releases): Windows downloads

## License

The source code is released under the [MIT License](LICENSE). The translation model is not part of this repository. It is the Tencent Hy-MT2 1.8B GGUF model ([tencent/Hy-MT2-1.8B-GGUF](https://huggingface.co/tencent/Hy-MT2-1.8B-GGUF)), released by Tencent under the Apache License 2.0.
