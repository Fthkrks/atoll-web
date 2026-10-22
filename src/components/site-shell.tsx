import Image from "next/image";
import Link from "next/link";
import { content, type Locale } from "@/lib/content";

export function Header({ locale, privacy = false }: { locale: Locale; privacy?: boolean }) {
  const c = content[locale];
  const home = locale === "en" ? "/" : "/tr";
  return <header className="site-header">
    <div className="container header-inner">
      <Link className="brand" href={home} aria-label={c.name}>
        <Image src="/branding/atoll-icon-48.png" width={38} height={38} alt="" loading="eager" />
        <span>atoll<span className="brand-dot">.</span></span>
      </Link>
      <nav aria-label={c.nav.label} className="main-nav">
        <Link href={`${home}#features`}>{c.nav.features}</Link>
        <Link href={`${home}#screenshots`} className="nav-screenshots">{c.nav.screenshots}</Link>
        <Link href={`${home}#windows`}>{c.nav.windows}<span aria-hidden="true"> ↗</span></Link>
      </nav>
      <nav className="locale-switch" aria-label={c.footer.language}>
        <Link href={privacy ? "/privacy" : "/"} lang="en" hrefLang="en" aria-current={locale === "en" ? "page" : undefined}>EN</Link>
        <span aria-hidden="true">/</span>
        <Link href={privacy ? "/tr/privacy" : "/tr"} lang="tr" hrefLang="tr" aria-current={locale === "tr" ? "page" : undefined}>TR</Link>
      </nav>
    </div>
  </header>;
}

export function Footer({ locale }: { locale: Locale }) {
  const c = content[locale];
  return <footer className="site-footer">
    <div className="container footer-main">
      <div><Link className="brand footer-brand" href={locale === "en" ? "/" : "/tr"}><Image src="/branding/atoll-icon-48.png" width={32} height={32} alt="" /><span>atoll<span className="brand-dot">.</span></span></Link><p>{c.footer.line}</p></div>
      <div className="footer-links"><Link href={locale === "en" ? "/privacy" : "/tr/privacy"}>{c.nav.privacy}</Link><a href="mailto:4ppstudioss@gmail.com">{c.footer.contact}</a><span>{c.footer.made} <a href="https://www.4pp.studio">4pp Studio ↗</a></span></div>
    </div>
    <div className="container footer-bottom"><span>© 2026 4pp Studio</span><span>{c.footer.rights}</span></div>
  </footer>;
}

export function RootShell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return <html lang={locale}><body><a className="skip-link" href="#main">{content[locale].nav.skip}</a>{children}</body></html>;
}
