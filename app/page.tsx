const brandSlots = Array.from({ length: 12 }, (_, i) => i);

const marqueeItems: Array<[string, string]> = [
  ["test", "var(--yellow)"],
  ["test", "var(--green)"],
  ["test", "var(--red)"],
  ["test", "var(--blue)"],
  ["test", "var(--yellow)"],
  ["test", "var(--green)"],
];

function MarqueeGroup({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="marquee-group" aria-hidden={ariaHidden || undefined}>
      {marqueeItems.map(([label, color], i) => (
        <span key={i} style={{ display: "contents" }}>
          <span>{label}</span>
          <span style={{ color }}>✳</span>
        </span>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="shell">
      {/* ---------- header ---------- */}
      <header className="site-header">
        <div className="logo" role="img" aria-label="Agar United" />
        <nav className="main-nav">
          <a href="#about" className="active">
            Бидний тухай
          </a>
          <a href="#reach">Хамрах хүрээ</a>
          <a href="#brands">Бүтээгдэхүүн</a>
          <a href="#values">Үнэт зүйл</a>
          <a href="#partner">Хамтран ажиллах</a>
        </nav>
        <div className="header-actions">
          <span className="lang">MN / EN</span>
          <a href="#contact" className="btn btn-navy">
            Холбоо барих
            <span className="dot" />
          </a>
          <details className="nav-toggle">
            <summary className="nav-toggle-btn" aria-label="Цэс">
              <span className="burger" aria-hidden="true" />
            </summary>
            <nav className="nav-toggle-panel">
              <a href="#about">Бидний тухай</a>
              <a href="#reach">Хамрах хүрээ</a>
              <a href="#brands">Бүтээгдэхүүн</a>
              <a href="#values">Үнэт зүйл</a>
              <a href="#partner">Хамтран ажиллах</a>
              <a href="#contact" className="nav-toggle-cta">
                Холбоо барих
              </a>
              <span className="nav-toggle-lang">MN / EN</span>
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
              2016 оноос хойш
            </span>
          </div>
          <h1>
            Дэлхийн брэнд
            <br />
            бүтээгдэхүүнийг
            <br />
            <span className="hl">өрсөлдөхүйц үнээр</span>
          </h1>
          <p>
            Агар Юнайтед нь 2016 оноос хойш тасралтгүй хөгжиж, дэлхийн тэргүүлэх
            брэндүүдийн бүтээгдэхүүнийг Монголын зах зээлд өрсөлдөхүйц үнээр
            нийлүүлсээр байна.
          </p>
          <div className="hero-cta">
            <a href="#brands" className="btn btn-red">
              Бүтээгдэхүүн үзэх
            </a>
            <a href="#partner" className="btn btn-outline">
              Гэрээт харилцагч болох
            </a>
          </div>
          <div className="stat-strip">
            <div className="stat-cell">
              <div className="stat-num">21</div>
              <div className="stat-label">аймаг</div>
            </div>
            <div className="stat-cell">
              <div className="stat-num">363</div>
              <div className="stat-label">сум</div>
            </div>
            <div className="stat-cell">
              <div className="stat-num">
                3500<span className="plus">+</span>
              </div>
              <div className="stat-label">гэрээт харилцагч</div>
            </div>
          </div>
        </div>
        <div className="hero-media">
          <div className="media-frame">
            <span className="ph-eyebrow">Зургийн орон</span>
            <span className="ph-text">
              Түгээлтийн машин, агуулах эсвэл хамт олны зураг (3:4)
            </span>
          </div>
          <div className="float-card">
            <div className="avatars">
              <span style={{ background: "var(--red)" }} />
              <span style={{ background: "var(--yellow)" }} />
              <span style={{ background: "var(--green)" }} />
              <span style={{ background: "var(--blue)" }} />
              <span style={{ background: "var(--navy)" }} />
            </div>
            <div>
              <div className="fc-title">Хамт олноороо</div>
              <div className="fc-sub">Амжилтын оргил дээр тугаа мандуулна</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- marquee ---------- */}
      <div className="marquee">
        <div className="marquee-track">
          <MarqueeGroup />
          <MarqueeGroup ariaHidden />
        </div>
      </div>

      {/* ---------- about ---------- */}
      <section id="about" className="section about">
        <div>
          <div className="eyebrow" style={{ color: "var(--blue)" }}>
            Бидний тухай
          </div>
          <h2>Найман жилийн тасралтгүй өсөлт</h2>
          <p className="about-lead">
            Бид зөвхөн бүтээгдэхүүн нийлүүлдэггүй — аймаг, сум бүрт хүрсэн,
            найдвартай ажилладаг түгээлтийн сүлжээ бүтээсэн.
          </p>
        </div>
        <div className="feature-grid">
          <div className="feature">
            <div
              className="badge"
              style={{ background: "rgba(238,59,99,.12)", color: "var(--red)" }}
            >
              01
            </div>
            <div className="f-title">Албан ёсны нийлүүлэлт</div>
            <div className="f-text">
              Дэлхийн брэндүүдийн албан ёсны түгээгчээр ажиллаж, бүтээгдэхүүний
              гарал үүсэл, чанарыг баталгаажуулна.
            </div>
          </div>
          <div className="feature">
            <div
              className="badge"
              style={{
                background: "rgba(251,200,90,.22)",
                color: "var(--yellow-dk)",
              }}
            >
              02
            </div>
            <div className="f-title">Өрсөлдөхүйц үнэ</div>
            <div className="f-text">
              Шууд импорт, том хэмжээний нийлүүлэлтийн ачаар зах зээлд хамгийн
              боломжит үнийг тогтвортой барина.
            </div>
          </div>
          <div className="feature">
            <div
              className="badge"
              style={{
                background: "rgba(23,199,154,.16)",
                color: "var(--green-dk)",
              }}
            >
              03
            </div>
            <div className="f-title">Хаа сайгүй хүрдэг сүлжээ</div>
            <div className="f-text">
              21 аймаг, 363 сумын гэрээт харилцагчаар дамжуулан хөдөө орон
              нутгийн хамгийн жижиг дэлгүүрт ч хүргэнэ.
            </div>
          </div>
          <div className="feature">
            <div
              className="badge"
              style={{ background: "rgba(43,134,174,.14)", color: "var(--blue)" }}
            >
              04
            </div>
            <div className="f-title">Хамтын ажиллагаа</div>
            <div className="f-text">
              УБ хотын 9 дүүрэгт 3500+ харилцагчтай урт хугацааны гэрээгээр,
              харилцан ашигтай ажиллаж байна.
            </div>
          </div>
        </div>
      </section>

      {/* ---------- reach ---------- */}
      <section id="reach" className="section reach">
        <div className="reach-head">
          <div>
            <div className="eyebrow" style={{ color: "var(--green)" }}>
              Хамрах хүрээ
            </div>
            <h2>Монгол орон нутгийн хаана ч хүрдэг түгээлт</h2>
          </div>
          <p>
            Гэрээт харилцагчийн сүлжээгээр дамжуулан жижиглэн худалдааны цэг бүрт
            бүтээгдэхүүнээ хүргэнэ.
          </p>
        </div>
        <div className="reach-grid">
          <div className="map-ph">
            <span className="ph-eyebrow">Зургийн орон</span>
            <span className="ph-text">
              Монголын интерактив газрын зураг — аймаг тус бүрийн хамрах хүрээ
            </span>
          </div>
          <div className="reach-stats">
            <div className="reach-row">
              <div>
                <div className="r-title">Аймаг</div>
                <div className="r-sub">Бүх аймагт гэрээт харилцагч</div>
              </div>
              <div className="r-num" style={{ color: "var(--yellow)" }}>
                21
              </div>
            </div>
            <div className="reach-row">
              <div>
                <div className="r-title">Сум</div>
                <div className="r-sub">Тогтмол хүргэлтийн маршрут</div>
              </div>
              <div className="r-num" style={{ color: "var(--green)" }}>
                363
              </div>
            </div>
            <div className="reach-row">
              <div>
                <div className="r-title">УБ хотын дүүрэг</div>
                <div className="r-sub">Өдөр тутмын түгээлт</div>
              </div>
              <div className="r-num" style={{ color: "var(--blue)" }}>
                9
              </div>
            </div>
            <div className="reach-row">
              <div>
                <div className="r-title">Гэрээт харилцагч</div>
                <div className="r-sub">Урт хугацааны хамтын ажиллагаа</div>
              </div>
              <div className="r-num" style={{ color: "var(--red)" }}>
                3500+
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- brands ---------- */}
      <section id="brands" className="section">
        <div className="section-head brand-head">
          <div>
            <div className="eyebrow" style={{ color: "var(--red)" }}>
              Бүтээгдэхүүн
            </div>
            <h2>Нийлүүлдэг брэндүүд</h2>
          </div>
          <a href="#contact" className="brand-link">
            Бүтэн каталог хүсэх →
          </a>
        </div>
        <div className="logo-grid">
          {brandSlots.map((i) => (
            <div key={i} className="logo-slot">
              Брэнд лого
            </div>
          ))}
        </div>
        <div className="cat-grid">
          <div className="cat-card">
            <div className="cat-img">Ангиллын зураг</div>
            <div className="cat-body">
              <div className="cat-title">test </div>
              <div className="cat-text">
                test test test test 
              </div>
            </div>
          </div>
          <div className="cat-card">
            <div className="cat-img">Ангиллын зураг</div>
            <div className="cat-body">
              <div className="cat-title">test</div>
              <div className="cat-text">
                test test test test test test
              </div>
            </div>
          </div>
          <div className="cat-card">
            <div className="cat-img">Ангиллын зураг</div>
            <div className="cat-body">
              <div className="cat-title">test </div>
              <div className="cat-text">
                test test test test test test test 
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- values ---------- */}
      <section id="values" className="section values">
        <div className="values-grid">
          <div>
            <div className="eyebrow" style={{ color: "var(--blue)" }}>
              Алсын хараа
            </div>
            <h2>
              «Амжилтын оргил дээр тугаа мандуулна, хамт олноороо.»
            </h2>
            <div className="swatch-row">
              <span className="sw" style={{ background: "var(--red)" }} />
              <span className="sw" style={{ background: "var(--yellow)" }} />
              <span className="sw" style={{ background: "var(--green)" }} />
              <span className="sw" style={{ background: "var(--blue)" }} />
              <span className="sw" style={{ background: "var(--navy)" }} />
              <span className="sw-label">Таван хүчин зүйл, нэг хамт олон</span>
            </div>
          </div>
          <div className="value-cards">
            <div className="value-card">
              <div className="vc-eyebrow" style={{ color: "var(--red)" }}>
                Эрхэм зорилго
              </div>
              <div className="vc-lead">
                Дэлхийн чанартай бүтээгдэхүүнийг Монголын хэрэглэгч бүрт
                хүртээмжтэй үнээр хүргэх.
              </div>
            </div>
            <div className="value-card">
              <div className="vc-eyebrow" style={{ color: "var(--green-dk)" }}>
                Үнэт зүйл
              </div>
              <div className="value-list">
                <div>Шударга байдал</div>
                <div>Хамтын хүч</div>
                <div>Хариуцлага</div>
                <div>Тасралтгүй хөгжил</div>
              </div>
            </div>
            <div className="value-card dark">
              <div className="vc-eyebrow" style={{ color: "var(--yellow)" }}>
                Уриа
              </div>
              <div className="vc-slogan">Хамтдаа урагш — Agar United</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- partner ---------- */}
      <section id="partner" className="section">
        <div className="section-head" style={{ marginBottom: 40 }}>
          <div>
            <div className="eyebrow" style={{ color: "var(--yellow-dk)" }}>
              Хамтран ажиллах
            </div>
            <h2>Гэрээт харилцагч болох 4 хялбар алхам</h2>
          </div>
        </div>
        <div className="steps-grid">
          <div className="step" style={{ borderTop: "3px solid var(--red)" }}>
            <div className="s-num" style={{ color: "var(--red)" }}>
              Алхам 01
            </div>
            <div className="s-title">Хүсэлт гаргах</div>
            <div className="s-text">
              Онлайн формоор эсвэл дугаараар холбогдож үйл ажиллагаагаа
              танилцуулна.
            </div>
          </div>
          <div className="step" style={{ borderTop: "3px solid var(--yellow)" }}>
            <div className="s-num" style={{ color: "var(--yellow-dk)" }}>
              Алхам 02
            </div>
            <div className="s-title">Хамрах хүрээ тодорхойлох</div>
            <div className="s-text">
              Орон нутаг, худалдааны цэгийн тоо, бүтээгдэхүүний ангиллыг тохирно.
            </div>
          </div>
          <div className="step" style={{ borderTop: "3px solid var(--green)" }}>
            <div className="s-num" style={{ color: "var(--green-dk)" }}>
              Алхам 03
            </div>
            <div className="s-title">Гэрээ байгуулах</div>
            <div className="s-text">
              Үнийн бүтэц, төлбөрийн нөхцөл, хүргэлтийн хуваарийг гэрээнд тусгана.
            </div>
          </div>
          <div className="step" style={{ borderTop: "3px solid var(--blue)" }}>
            <div className="s-num" style={{ color: "var(--blue)" }}>
              Алхам 04
            </div>
            <div className="s-title">Тогтмол нийлүүлэлт</div>
            <div className="s-text">
              Хуваарийн дагуу хүргэлт, борлуулалтын дэмжлэг, сурталчилгааны
              материал.
            </div>
          </div>
        </div>
      </section>

      {/* ---------- contact ---------- */}
      <section id="contact" className="contact">
        <div className="contact-card">
          <div>
            <h2>Хамтдаа өсөх бэлэн үү?</h2>
            <p className="c-lead">
              Гэрээт харилцагчийн сүлжээнд нэгдэх, бүтээгдэхүүний каталог болон
              үнийн санал хүсэх.
            </p>
            <div className="contact-info">
              <div>
                <div className="ci-label">Утас</div>
                <div className="ci-value">+976 7000 0000</div>
              </div>
              <div>
                <div className="ci-label">И-мэйл</div>
                <div className="ci-value">info@agarunited.mn</div>
              </div>
            </div>
          </div>
          <form className="contact-form">
            <div className="form-row">
              <input className="field" placeholder="Байгууллагын нэр" />
              <input className="field" placeholder="Аймаг / дүүрэг" />
            </div>
            <input className="field" placeholder="Холбоо барих дугаар" />
            <textarea className="field" placeholder="Хүсэлтийн дэлгэрэнгүй…" />
            <button type="button" className="form-submit">
              Хүсэлт илгээх
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
            <p>
              2016 оноос хойш дэлхийн брэнд бүтээгдэхүүнийг Монголын зах зээлд
              нийлүүлж байна.
            </p>
          </div>
          <div className="footer-col">
            <div className="fc-head" style={{ color: "var(--yellow)" }}>
              Компани
            </div>
            <div className="fc-links">
              <a href="#about">Бидний тухай</a>
              <a href="#values">Алсын хараа</a>
              <a href="#partner">Хамтран ажиллах</a>
            </div>
          </div>
          <div className="footer-col">
            <div className="fc-head" style={{ color: "var(--green)" }}>
              Бүтээгдэхүүн
            </div>
            <div className="fc-links">
              <a href="#brands">Хүнс & ундаа</a>
              <a href="#brands">Гоо сайхан</a>
              <a href="#brands">Ахуйн хэрэглээ</a>
            </div>
          </div>
          <div className="footer-col">
            <div className="fc-head" style={{ color: "var(--red)" }}>
              Холбоо барих
            </div>
            <div className="fc-links">
              <span>Улаанбаатар, Монгол</span>
              <span>+976 7000 0000</span>
              <span>info@agarunited.mn</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Agar United LLC. Бүх эрх хуулиар хамгаалагдсан.</span>
          <span>Амжилтын оргил дээр тугаа мандуулна, хамт олноороо.</span>
        </div>
      </footer>
    </div>
  );
}
