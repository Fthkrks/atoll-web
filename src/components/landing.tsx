import Image from "next/image";
import { content, type Locale } from "@/lib/content";
import { downloads } from "@/config/downloads";
import { Header, Footer } from "./site-shell";
import { DownloadButtons } from "./download-buttons";
import { Icon } from "./icon";

export function Landing({ locale }: { locale: Locale }) {
  const c = content[locale];
  return <>
    <Header locale={locale} />
    <main id="main">
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" />{c.hero.eyebrow}</p>
          <div className="hero-product"><Image src="/branding/atoll-icon-192.png" width={44} height={44} alt="Atoll" loading="eager" /><span>{c.name}</span></div>
          <h1 id="hero-title">{c.hero.title}<br /><span>{c.hero.accent}</span></h1>
          <p className="hero-pitch">{c.hero.pitch}</p>
          <DownloadButtons locale={locale} />
          <p className="privacy-note"><Icon name="shield" />{c.hero.note}</p>
        </div>
        <figure className="hero-visual">
          <div className="orbit orbit-one" aria-hidden="true" /><div className="orbit orbit-two" aria-hidden="true" />
          <div className="visual-annotation"><span className="annotation-line" />{c.hero.sideNote}</div>
          <div className="hero-screenshot"><Image src={`/screenshots/${locale}/phone-01.png`} width={1080} height={1920} sizes="(max-width: 600px) 245px, 292px" alt={c.hero.imageAlt} loading="eager" fetchPriority="high" /></div>
          <div className="privacy-seal"><Icon name="shield" /><span>{c.hero.status}<small>100% offline</small></span></div>
          <figcaption><span aria-hidden="true">↳</span> {c.hero.preview}</figcaption>
        </figure>
      </section>
      <div className="proof-strip"><div className="container">{c.ribbon.map((item, i) => <span key={item}><Icon name={i === 0 ? "offline" : i === 1 ? "globe" : "shield"} />{item}</span>)}</div></div>

      <section id="features" className="section container" aria-labelledby="features-title">
        <div className="section-heading"><div><p className="eyebrow">{c.features.eyebrow}</p><h2 id="features-title">{c.features.title}</h2></div><p className="section-intro">{c.features.intro}</p></div>
        <div className="features-grid">{c.features.items.map((item, index) => <article className="feature" key={item.title}><div className="feature-top"><Icon name={item.icon} /><span>0{index + 1}</span></div><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
        <div className="file-formats" aria-label={locale === "en" ? "Supported document formats" : "Desteklenen belge biçimleri"}><span>{locale === "en" ? "YOUR FILES. THEIR FORMAT." : "DOSYALARINIZ. AYNI BİÇİMDE."}</span>{["DOCX", "PPTX", "XLSX", "PDF", "TXT", "MD"].map(format => <span className="format" key={format}>{format}</span>)}</div>
      </section>

      <section id="screenshots" className="screenshots-section" aria-labelledby="screenshots-title"><div className="container section">
        <div className="section-heading"><div><p className="eyebrow">{c.screenshots.eyebrow}</p><h2 id="screenshots-title">{c.screenshots.title}</h2></div><p className="section-intro">{c.screenshots.intro}</p></div>
        <div className="screenshots-grid">{c.screenshots.captions.map((caption, index) => <figure key={caption}><div className="screenshot-frame"><Image src={`/screenshots/${locale}/phone-0${index + 1}.png`} width={1080} height={1920} sizes="(max-width: 600px) 82vw, (max-width: 900px) 43vw, 25vw" alt={c.screenshots.alts[index]} /></div><figcaption><span>0{index + 1}</span>{caption}</figcaption></figure>)}</div>
      </div></section>

      <section id="windows" className="section container" aria-labelledby="windows-title">
        <div className="windows-panel">
          <div className="windows-heading"><p className="eyebrow"><Icon name="windows" />{c.windows.eyebrow}</p><h2 id="windows-title">{c.windows.title}</h2><p>{c.windows.intro}</p><DownloadButtons locale={locale} compact /></div>
          <div className="windows-steps"><p className="package-label"><span className="status-dot" />{downloads.windows.url ? c.download.available : c.download.soonTitle}</p><ol>{c.windows.steps.map((step, index) => <li key={step.title}><span className="step-number">0{index + 1}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol><div className="package-footer"><Icon name="check" />{c.hero.note}</div></div>
        </div>
        <div className="requirements"><div><h3>{c.windows.requirements}</h3><p>{c.windows.requirementsIntro}</p></div><dl>{c.windows.specs.map(spec => <div key={spec.value}><dt>{spec.label}</dt><dd>{spec.value}</dd></div>)}</dl></div>
      </section>

      <section className="people-section"><div className="container"><p className="eyebrow">{c.people.eyebrow}</p><h2>{c.people.title}</h2><p>{c.people.text}</p><div className="language-line" aria-hidden="true"><span>Hello</span><span>Merhaba</span><span>你好</span><span>Hola</span><span>مرحبا</span><span>こんにちは</span></div></div></section>

      <section className="section container faq-section" aria-labelledby="faq-title"><div><p className="eyebrow">{c.faq.eyebrow}</p><h2 id="faq-title">{c.faq.title}</h2><a className="contact-link" href="mailto:4ppstudioss@gmail.com">{c.footer.contact}<Icon name="arrow" /></a></div><div className="faq-list">{c.faq.items.map(item => <details key={item.question}><summary>{item.question}<span className="faq-plus" aria-hidden="true" /></summary><p>{item.answer}</p></details>)}</div></section>
    </main>
    <Footer locale={locale} />
  </>;
}
