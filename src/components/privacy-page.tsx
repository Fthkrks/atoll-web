import Link from "next/link";
import { type Locale } from "@/lib/content";
import { privacyContent } from "@/lib/privacy";
import { Header, Footer } from "./site-shell";

export function PrivacyPage({ locale }: { locale: Locale }) {
  const c = privacyContent[locale];
  return <><Header locale={locale} privacy /><main id="main" className="container privacy-page"><Link className="back-link" href={locale === "en" ? "/" : "/tr"}>← {c.back}</Link><p className="eyebrow">{c.label}</p><h1>{c.title}</h1><p className="policy-date">{c.updated}</p><p className="policy-intro">{c.intro}</p><article>{c.sections.map(section => <section key={section.title}><h2>{section.title}</h2>{"paragraphs" in section && section.paragraphs.map(p => <p key={p}>{p}</p>)}{"bullets" in section && <ul>{section.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>}</section>)}<section><h2>{c.contact}</h2><p><a href="https://www.4pp.studio">4pp Studio</a><br /><a href="mailto:4ppstudioss@gmail.com">4ppstudioss@gmail.com</a></p></section></article></main><Footer locale={locale} /></>;
}
