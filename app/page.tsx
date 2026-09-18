"use client";

import { useEffect, useState, type FormEvent } from "react";
import { content, type Lang } from "./content";

// public/-д байгаа брэндийн логонууд (brand6 байхгүй)
const brands = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(
  (n) => `/brand${n}.png`,
);

const marqueeColors = [
  "var(--yellow)",
  "var(--green)",
  "var(--red)",
  "var(--blue)",
  "var(--yellow)",
  "var(--green)",  "var(--yellow)",
  "var(--green)",
  "var(--red)",
  "var(--blue)",
  "var(--yellow)",
  "var(--green)",  "var(--yellow)",
  "var(--green)",
  "var(--red)",
  "var(--blue)",
  "var(--yellow)",
  "var(--green)",  "var(--yellow)",
  "var(--green)",
  "var(--red)",
  "var(--blue)",
  "var(--yellow)",
  "var(--green)",  "var(--yellow)",
  "var(--green)",
  "var(--red)",
  "var(--blue)",
  "var(--yellow)",
  "var(--green)",
];

const featureBadges = [
  { bg: "rgba(238,59,99,.12)", color: "var(--red)" },
  { bg: "rgba(251,200,90,.22)", color: "var(--yellow-dk)" },
  { bg: "rgba(23,199,154,.16)", color: "var(--green-dk)" },
  { bg: "rgba(43,134,174,.14)", color: "var(--blue)" },
];

const reachColors = ["var(--yellow)", "var(--green)", "var(--blue)", "var(--red)"];
const reachNums = ["21", "363", "9", "3500+"];
const stepColors = ["var(--red)", "var(--yellow)", "var(--green)", "var(--blue)"];
const stepNumColors = [
  "var(--red)",
  "var(--yellow-dk)",
  "var(--green-dk)",
  "var(--blue)",
];

function MarqueeGroup({
  labels,
  ariaHidden = false,
}: {
  labels: string[];
  ariaHidden?: boolean;
}) {
  return (
    <div className="marquee-group" aria-hidden={ariaHidden || undefined}>
      {labels.map((label, i) => (
        <span key={i} style={{ display: "contents" }}>
          <span>{label}</span>
          <span style={{ color: marqueeColors[i] }}>✳</span>
        </span>
      ))}
    </div>
  );
}

const LANGS: Lang[] = ["mn", "en", "ru"];

function LangSwitch({
  lang,
  setLang,
  className = "",
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  className?: string;
}) {
  return (
    <div className={`lang-switch ${className}`.trim()}>
      {LANGS.map((l, i) => (
        <span key={l} style={{ display: "contents" }}>
          {i > 0 && <span className="sep">/</span>}
          <button
            type="button"
            className={lang === l ? "active" : ""}
            aria-pressed={lang === l}
            onClick={() => setLang(l)}
          >
            {l.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("mn");
  const [hydrated, setHydrated] = useState(false);

  // хадгалсан сонголтыг эхний ачаалалд унших
  useEffect(() => {
    try {
      const saved = localStorage.getItem("au-lang");
      if (saved && (LANGS as string[]).includes(saved)) setLang(saved as Lang);
    } catch {}
    setHydrated(true);
  }, []);

  // унших дуустал бичихгүй (эхний бичилт хадгалсан утгыг дарахаас сэргийлнэ)
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem("au-lang", lang);
    } catch {}
    document.documentElement.lang = lang;
  }, [lang, hydrated]);

  const t = content[lang];

  const [form, setForm] = useState({
    company: "",
    region: "",
    phone: "",
    details: "",
  });

  // Форм илгээх — mailto-оор info@agarunited.mn руу мэдээлэл орсон захиа нээнэ
  const handleContactSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = `${t.nav.partner} — ${form.company || t.contact.submit}`;
    const body = [
      `${t.contact.phCompany}: ${form.company}`,
      `${t.contact.phRegion}: ${form.region}`,
      `${t.contact.phPhone}: ${form.phone}`,
      "",
      `${t.contact.phDetails}`,
      form.details,
    ].join("\n");
    window.location.href = `mailto:${t.contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  const telHref = `tel:${t.contact.phone.replace(/[^\d+]/g, "")}`;
  const mailHref = `mailto:${t.contact.email}`;

  return (
    <div className="shell">
      {/* ---------- header ---------- */}
      <header className="site-header">
        <div className="logo" role="img" aria-label="Agar United" />
        <nav className="main-nav">
          <a href="#about" className="active">
            {t.nav.about}
          </a>
          <a href="#reach">{t.nav.reach}</a>
          <a href="#brands">{t.nav.brands}</a>
          <a href="#values">{t.nav.values}</a>
          <a href="#partner">{t.nav.partner}</a>
        </nav>
        <div className="header-actions">
          <LangSwitch lang={lang} setLang={setLang} className="lang" />
          <a href="#contact" className="btn btn-navy">
            {t.nav.contact}
            <span className="dot" />
          </a>
          <details className="nav-toggle">
            <summary className="nav-toggle-btn" aria-label={t.nav.about}>
              <span className="burger" aria-hidden="true" />
            </summary>
            <nav className="nav-toggle-panel">
              <a href="#about">{t.nav.about}</a>
              <a href="#reach">{t.nav.reach}</a>
              <a href="#brands">{t.nav.brands}</a>
              <a href="#values">{t.nav.values}</a>
              <a href="#partner">{t.nav.partner}</a>
              <a href="#contact" className="nav-toggle-cta">
                {t.nav.contact}
              </a>
              <LangSwitch lang={lang} setLang={setLang} className="nav-toggle-lang" />
            </nav>
          </details>
        </div>
      </header>

      {/* ---------- hero ---------- */}
      <section className="hero">
        <div className="hero-copy">
          <div className="tag-row">
            <span className="tag-rule" />
            <span className="eyebrow" style={{ color: "var(--red)" }}>
              {t.hero.badge}
            </span>
          </div>
          <h1>
            {t.hero.h1a}
            <br />
            {t.hero.h1b}
            <br />
            <span className="hl">{t.hero.h1hl}</span>
          </h1>
          <p>{t.hero.para}</p>
          <div className="hero-cta">
            <a href="#brands" className="btn btn-red">
              {t.hero.cta1}
            </a>
            {/* <a href="#partner" className="btn btn-outline">
              {t.hero.cta2}
            </a> */}
          </div>
          <div className="stat-strip">
            <div className="stat-cell">
              <div className="stat-num">21</div>
              <div className="stat-label">{t.hero.statLabels[0]}</div>
            </div>
            <div className="stat-cell">
              <div className="stat-num">363</div>
              <div className="stat-label">{t.hero.statLabels[1]}</div>
            </div>
            <div className="stat-cell">
              <div className="stat-num">
                3500<span className="plus">+</span>
              </div>
              <div className="stat-label">{t.hero.statLabels[2]}</div>
            </div>
          </div>
        </div>
        <div className="hero-media">
          <div className="tile-mosaic" role="img" aria-label={t.hero.mediaText}>
            <div className="tile-grid">
              <div className="tile pos-corona">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/2.png" alt="" />
              </div>
              <div className="tile pos-base">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/3.png" alt="" />
              </div>
              <div className="tile pos-yellow">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/4.png" alt="" />
              </div>
              <div className="tile pos-randle">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/1.png" alt="" />
              </div>
              <div className="tile pos-soft">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/5.png" alt="" />
              </div>
              <div className="tile pos-harbin">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/7.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- marquee ---------- */}
      <div className="marquee">
        <div className="marquee-track">
          <MarqueeGroup labels={t.marquee} />
          <MarqueeGroup labels={t.marquee} ariaHidden />
        </div>
      </div>

      {/* ---------- about ---------- */}
      <section id="about" className="section about">
        <div>
          <div className="eyebrow" style={{ color: "var(--blue)" }}>
            {t.about.eyebrow}
          </div>
          <h2>{t.about.h2}</h2>
          <p className="about-lead">{t.about.lead}</p>
        </div>
        <div className="feature-grid">
          {t.about.features.map((f, i) => (
            <div className="feature" key={i}>
              <div
                className="badge"
                style={{ background: featureBadges[i].bg, color: featureBadges[i].color }}
              >
                {i + 1}
              </div>
              <div className="f-title">{f.title}</div>
              <div className="f-text">{f.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- reach ---------- */}
      <section id="reach" className="section reach">
        <div className="reach-head">
          <div>
            <div className="eyebrow" style={{ color: "var(--green)" }}>
              {t.reach.eyebrow}
            </div>
            <h2>{t.reach.h2}</h2>
          </div>
          <p>{t.reach.para}</p>
        </div>
        <div className="reach-grid">
          <div className="reach-map">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/map.jpg" alt={t.reach.mapText} />
          </div>
          <div className="reach-stats">
            {t.reach.rows.map((row, i) => (
              <div className="reach-row" key={i}>
                <div>
                  <div className="r-title">{row.title}</div>
                  <div className="r-sub">{row.sub}</div>
                </div>
                <div className="r-num" style={{ color: reachColors[i] }}>
                  {reachNums[i]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- brands ---------- */}
      <section id="brands" className="section">
        <div className="section-head brand-head">
          <div>
            <div className="eyebrow" style={{ color: "var(--red)" }}>
              {t.brands.eyebrow}
            </div>
            <h2>{t.brands.h2}</h2>
          </div>
          <a href="#contact" className="brand-link">
            {t.brands.link}
          </a>
        </div>
        <div className="logo-grid">
          {brands.map((src, i) => (
            <div key={src} className="logo-slot">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={`${t.brands.logoSlot} ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* ---------- values ---------- */}
      <section id="values" className="section values">
        <div className="values-grid">
          <div>
            <div className="eyebrow" style={{ color: "var(--blue)" }}>
              {t.values.eyebrow}
            </div>
            <h2>{t.values.h2}</h2>
            <div className="swatch-row">
              <span className="sw" style={{ background: "var(--red)" }} />
              <span className="sw" style={{ background: "var(--yellow)" }} />
              <span className="sw" style={{ background: "var(--green)" }} />
              <span className="sw" style={{ background: "var(--blue)" }} />
              <span className="sw" style={{ background: "var(--navy)" }} />
              <span className="sw-label">{t.values.swatchLabel}</span>
            </div>
          </div>
          <div className="value-cards">
            <div className="value-card">
              <div className="vc-eyebrow" style={{ color: "var(--red)" }}>
                {t.values.missionEyebrow}
              </div>
              <div className="vc-lead">{t.values.missionLead}</div>
            </div>
            <div className="value-card">
              <div className="vc-eyebrow" style={{ color: "var(--green-dk)" }}>
                {t.values.valuesEyebrow}
              </div>
              <div className="value-list">
                {t.values.valuesList.map((v, i) => (
                  <div key={i}>{v}</div>
                ))}
              </div>
            </div>
            <div className="value-card dark">
              <div className="vc-eyebrow" style={{ color: "var(--yellow)" }}>
                {t.values.mottoEyebrow}
              </div>
              <div className="vc-slogan">{t.values.mottoSlogan}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- partner ---------- */}
      <section id="partner" className="section">
        <div className="section-head" style={{ marginBottom: 40 }}>
          <div>
            <div className="eyebrow" style={{ color: "var(--yellow-dk)" }}>
              {t.partner.eyebrow}
            </div>
            <h2>{t.partner.h2}</h2>
          </div>
        </div>
        <div className="steps-grid">
          {t.partner.steps.map((step, i) => (
            <div
              className="step"
              key={i}
              style={{ borderTop: `3px solid ${stepColors[i]}` }}
            >
              <div className="s-num" style={{ color: stepNumColors[i] }}>
                {step.label}
              </div>
              <div className="s-title">{step.title}</div>
              <div className="s-text">{step.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- contact ---------- */}
      <section id="contact" className="contact">
        <div className="contact-card">
          <div>
            <h2>{t.contact.h2}</h2>
            <p className="c-lead">{t.contact.lead}</p>
            <div className="contact-info">
              <div>
                <div className="ci-label">{t.contact.phoneLabel}</div>
                <a className="ci-value" href={telHref}>
                  {t.contact.phone}
                </a>
              </div>
              <div>
                <div className="ci-label">{t.contact.emailLabel}</div>
                <a className="ci-value" href={mailHref}>
                  {t.contact.email}
                </a>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleContactSubmit}>
            <div className="form-row">
              <input
                className="field"
                name="company"
                placeholder={t.contact.phCompany}
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                required
              />
              <input
                className="field"
                name="region"
                placeholder={t.contact.phRegion}
                value={form.region}
                onChange={(e) => setForm({ ...form, region: e.target.value })}
              />
            </div>
            <input
              className="field"
              name="phone"
              placeholder={t.contact.phPhone}
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
            />
            <textarea
              className="field"
              name="details"
              placeholder={t.contact.phDetails}
              value={form.details}
              onChange={(e) => setForm({ ...form, details: e.target.value })}
            />
            <button type="submit" className="form-submit">
              {t.contact.submit}
            </button>
          </form>
        </div>
      </section>

      {/* ---------- footer ---------- */}
      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo-wrap">
              <div className="footer-logo" role="img" aria-label="Agar United" />
            </div>
            <p>{t.footer.brandText}</p>
          </div>
          <div className="footer-col">
            <div className="fc-head" style={{ color: "var(--yellow)" }}>
              {t.footer.col1Head}
            </div>
            <div className="fc-links">
              <a href="#about">{t.footer.col1Links[0]}</a>
              <a href="#values">{t.footer.col1Links[1]}</a>
              <a href="#partner">{t.footer.col1Links[2]}</a>
            </div>
          </div>
          <div className="footer-col">
            <div className="fc-head" style={{ color: "var(--green)" }}>
              {t.footer.col2Head}
            </div>
            <div className="fc-links">
              <a href="#brands">{t.footer.col2Links[0]}</a>
              <a href="#brands">{t.footer.col2Links[1]}</a>
              <a href="#brands">{t.footer.col2Links[2]}</a>
            </div>
          </div>
          <div className="footer-col">
            <div className="fc-head" style={{ color: "var(--red)" }}>
              {t.footer.col3Head}
            </div>
            <div className="fc-links">
              <span>{t.footer.city}</span>
              <a href={telHref}>{t.contact.phone}</a>
              <a href={mailHref}>{t.contact.email}</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{t.footer.copyright}</span>
          <span>{t.footer.tagline}</span>
        </div>
      </footer>
    </div>
  );
}
