export type Lang = "mn" | "en" | "ru";

export interface Content {
  nav: {
    about: string;
    reach: string;
    brands: string;
    values: string;
    partner: string;
    contact: string;
  };
  hero: {
    badge: string;
    h1a: string;
    h1b: string;
    h1hl: string;
    para: string;
    cta1: string;
    cta2: string;
    statLabels: [string, string, string];
    mediaEyebrow: string;
    mediaText: string;
    cardTitle: string;
    cardSub: string;
  };
  marquee: string[];
  about: {
    eyebrow: string;
    h2: string;
    lead: string;
    features: { title: string; text: string }[];
  };
  reach: {
    eyebrow: string;
    h2: string;
    para: string;
    mapEyebrow: string;
    mapText: string;
    rows: { title: string; sub: string }[];
  };
  brands: {
    eyebrow: string;
    h2: string;
    link: string;
    logoSlot: string;
    catImg: string;
    cats: { title: string; text: string }[];
  };
  values: {
    eyebrow: string;
    h2: string;
    swatchLabel: string;
    missionEyebrow: string;
    missionLead: string;
    valuesEyebrow: string;
    valuesList: string[];
    mottoEyebrow: string;
    mottoSlogan: string;
  };
  partner: {
    eyebrow: string;
    h2: string;
    steps: { label: string; title: string; text: string }[];
  };
  contact: {
    h2: string;
    lead: string;
    phoneLabel: string;
    emailLabel: string;
    phone: string;
    email: string;
    phCompany: string;
    phRegion: string;
    phPhone: string;
    phDetails: string;
    submit: string;
  };
  footer: {
    brandText: string;
    col1Head: string;
    col1Links: string[];
    col2Head: string;
    col2Links: string[];
    col3Head: string;
    city: string;
    copyright: string;
    tagline: string;
  };
}

const mn: Content = {
  nav: {
    about: "Бидний тухай",
    reach: "Хамрах хүрээ",
    brands: "Брэндүүд",
    values: "Үнэт зүйл",
    partner: "Хамтран ажиллах",
    contact: "Холбоо барих",
  },
  hero: {
    badge: "2016 оноос хойш",
    h1a: "Дэлхийн брэнд",
    h1b: "бүтээгдэхүүнийг",
    h1hl: "хамгийн хямдаар",
    para: "Агар Юнайтед нь 2016 оноос хойш тасралтгүй хөгжиж, дэлхийн тэргүүлэх брэндүүдийн чанартай бүтээгдэхүүнийг Монголын зах зээлд хамгийн хямд үнээр нийлүүлсээр  байна.",
    cta1: "Харилцагч болох",
    cta2: "Харилцагч болох",
    statLabels: ["аймаг", "сум", "гэрээт харилцагч"],
    mediaEyebrow: "Зургийн орон",
    mediaText: "Түгээлтийн машин, агуулах эсвэл хамт олны зураг (3:4)",
    cardTitle: "Хамт олноороо",
    cardSub: "Амжилтын оргил дээр тугаа мандуулна",
  },
  marquee: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  about: {
    eyebrow: "Бидний тухай",
    h2: "Арван жилийн тасралтгүй өсөлт",
    lead: "Бид зөвхөн бүтээгдэхүүн нийлүүлдэггүй — аймаг, сум бүрт хүрсэн, найдвартай ажилладаг түгээлтийн сүлжээ бүтээсэн.",
    features: [
      {
        title: "Албан ёсны нийлүүлэлт",
        text: "Дэлхийн брэндийг албан ёсны эрхтэйгээр чанар стандартын дагуу зах зээлд нийлүүлж байна.",
      },
      {
        title: "Өрсөлдөхүйц үнэ",
        text: "Нийлүүлэлтийн үнийг тогтвортойгоор барьж боломжит үнээр үйлчилнэ",
      },
      {
        title: "Хаа сайгүй хүрдэг сүлжээ",
        text: "21 аймаг, 363 сумын гэрээт харилцагчаар дамжуулан хөдөө орон нутгийн хамгийн жижиг дэлгүүрт ч хүргэнэ.",
      },
      {
        title: "Хамтын ажиллагаа",
        text: "УБ хотын 9 дүүрэгт 3500+ харилцагчтай урт хугацааны гэрээгээр, харилцан ашигтай ажиллаж байна.",
      },
    ],
  },
  reach: {
    eyebrow: "Хамрах хүрээ",
    h2: "Монгол орон нутгийн хаана ч хүрдэг түгээлт",
    para: "Гэрээт харилцагчийн сүлжээгээр дамжуулан жижиглэн худалдааны цэг бүрт бүтээгдэхүүнээ хүргэнэ.",
    mapEyebrow: "Зургийн орон",
    mapText: "Монголын интерактив газрын зураг — аймаг тус бүрийн хамрах хүрээ",
    rows: [
      { title: "Аймаг", sub: "Бүх аймагт гэрээт харилцагч" },
      { title: "Сум", sub: "Тогтмол хүргэлтийн маршрут" },
      { title: "УБ хотын дүүрэг", sub: "Өдөр тутмын түгээлт" },
      { title: "Гэрээт харилцагч", sub: "Урт хугацааны хамтын ажиллагаа" },
    ],
  },
  brands: {
    eyebrow: "Бүтээгдэхүүн",
    h2: "Нийлүүлдэг брэндүүд",
    link: "Бүтэн каталог хүсэх →",
    logoSlot: "Брэнд лого",
    catImg: "Ангиллын зураг",
    cats: [
      { title: "test", text: "test test test test" },
      { title: "test", text: "test test test test test test" },
      { title: "test", text: "test test test test test test test" },
    ],
  },
  values: {
    eyebrow: "Алсын хараа",
    h2: "«Амжилтын оргил дээр тугаа мандуулна, хамт олноороо.»",
    swatchLabel: "Таван хүчин зүйл, нэг хамт олон",
    missionEyebrow: "Эрхэм зорилго",
    missionLead:
      "Дэлхийн чанартай бүтээгдэхүүнийг Монголын хэрэглэгч бүрт хүртээмжтэй үнээр хүргэх.",
    valuesEyebrow: "Үнэт зүйл",
    valuesList: ["Шударга байдал", "Хамтын хүч", "Хариуцлага", "Тасралтгүй хөгжил"],
    mottoEyebrow: "Уриа",
    mottoSlogan: "Хамтдаа урагш — Agar United",
  },
  partner: {
    eyebrow: "Хамтран ажиллах",
    h2: "Гэрээт харилцагч болох 4 хялбар алхам",
    steps: [
      {
        label: "Алхам 01",
        title: "Хүсэлт гаргах",
        text: "Онлайн формоор эсвэл дугаараар холбогдож үйл ажиллагаагаа танилцуулна.",
      },
      {
        label: "Алхам 02",
        title: "Хамрах хүрээ тодорхойлох",
        text: "Орон нутаг, худалдааны цэгийн тоо, бүтээгдэхүүний ангиллыг тохирно.",
      },
      {
        label: "Алхам 03",
        title: "Гэрээ байгуулах",
        text: "Үнийн бүтэц, төлбөрийн нөхцөл, хүргэлтийн хуваарийг гэрээнд тусгана.",
      },
      {
        label: "Алхам 04",
        title: "Тогтмол нийлүүлэлт",
        text: "Хуваарийн дагуу хүргэлт, борлуулалтын дэмжлэг, сурталчилгааны материал.",
      },
    ],
  },
  contact: {
    h2: "Хамтдаа өсөх бэлэн үү?",
    lead: "Гэрээт харилцагчийн сүлжээнд нэгдэх, бүтээгдэхүүний каталог болон үнийн санал хүсэх.",
    phoneLabel: "Утас",
    emailLabel: "И-мэйл",
    phone: "+976 7733 5858",
    email: "sales1@agarunited.mn",
    phCompany: "Байгууллагын нэр",
    phRegion: "Аймаг / дүүрэг",
    phPhone: "Холбоо барих дугаар",
    phDetails: "Хүсэлтийн дэлгэрэнгүй…",
    submit: "Хүсэлт илгээх",
  },
  footer: {
    brandText:
      "2016 оноос хойш дэлхийн брэнд бүтээгдэхүүнийг Монголын зах зээлд нийлүүлж байна.",
    col1Head: "Компани",
    col1Links: ["Бидний тухай", "Алсын хараа", "Хамтран ажиллах"],
    col2Head: "Бүтээгдэхүүн",
    col2Links: ["Хүнс & ундаа", "Гоо сайхан", "Ахуйн хэрэглээ"],
    col3Head: "Холбоо барих",
    city: "Улаанбаатар, Монгол",
    copyright: "© 2026 Agar United LLC. Бүх эрх хуулиар хамгаалагдсан.",
    tagline: "Амжилтын оргил дээр тугаа мандуулна, хамт олноороо.",
  },
};

const en: Content = {
  nav: {
    about: "About",
    reach: "Coverage",
    brands: "Brands",
    values: "Values",
    partner: "Partnership",
    contact: "Contact",
  },
  hero: {
    badge: "Since 2016",
    h1a: "World-class brand",
    h1b: "products at",
    h1hl: "competitive prices",
    para: "Agar United has been continuously developing since 2016, supplying quality products from leading world brands to the Mongolian market at the most affordable prices.",
    cta1: "View products",
    cta2: "Become a partner",
    statLabels: ["provinces", "soums", "partners"],
    mediaEyebrow: "Image area",
    mediaText: "Delivery truck, warehouse or team photo (3:4)",
    cardTitle: "As one team",
    cardSub: "Raising our flag at the summit of success",
  },
  marquee: ["test", "test", "test", "test", "test", "test"],
  about: {
    eyebrow: "About us",
    h2: "A decade of continuous growth",
    lead: "We don't just supply products — we've built a reliable distribution network reaching every province and soum.",
    features: [
      {
        title: "Official distribution",
        text: "We supply world brands to the market under official rights and quality standards.",
      },
      {
        title: "Competitive pricing",
        text: "We keep supply prices stable and serve customers at affordable rates.",
      },
      {
        title: "A network that reaches everywhere",
        text: "Through partners across 21 provinces and 363 soums, we deliver even to the smallest rural shop.",
      },
      {
        title: "Collaboration",
        text: "We work under long-term, mutually beneficial contracts with 3500+ partners across Ulaanbaatar's 9 districts.",
      },
    ],
  },
  reach: {
    eyebrow: "Coverage",
    h2: "Distribution that reaches anywhere in Mongolia",
    para: "Through our partner network, we deliver our products to every retail point.",
    mapEyebrow: "Image area",
    mapText: "Interactive map of Mongolia — coverage of each province",
    rows: [
      { title: "Provinces", sub: "Partners in every province" },
      { title: "Soums", sub: "Regular delivery routes" },
      { title: "UB districts", sub: "Daily distribution" },
      { title: "Partners", sub: "Long-term collaboration" },
    ],
  },
  brands: {
    eyebrow: "Products",
    h2: "Brands we distribute",
    link: "Request full catalog →",
    logoSlot: "Brand logo",
    catImg: "Category image",
    cats: [
      { title: "test", text: "test test test test" },
      { title: "test", text: "test test test test test test" },
      { title: "test", text: "test test test test test test test" },
    ],
  },
  values: {
    eyebrow: "Vision",
    h2: "«Together, we raise our flag at the summit of success.»",
    swatchLabel: "Five elements, one team",
    missionEyebrow: "Mission",
    missionLead:
      "To bring world-class products to every Mongolian consumer at an accessible price.",
    valuesEyebrow: "Values",
    valuesList: ["Integrity", "Teamwork", "Responsibility", "Continuous growth"],
    mottoEyebrow: "Motto",
    mottoSlogan: "Forward together — Agar United",
  },
  partner: {
    eyebrow: "Partnership",
    h2: "Becoming a partner in 4 simple steps",
    steps: [
      {
        label: "Step 01",
        title: "Submit a request",
        text: "Contact us via the online form or by phone and introduce your business.",
      },
      {
        label: "Step 02",
        title: "Define coverage",
        text: "Agree on region, number of retail points and product categories.",
      },
      {
        label: "Step 03",
        title: "Sign the contract",
        text: "Pricing structure, payment terms and delivery schedule are set in the contract.",
      },
      {
        label: "Step 04",
        title: "Regular supply",
        text: "Scheduled delivery, sales support and promotional materials.",
      },
    ],
  },
  contact: {
    h2: "Ready to grow together?",
    lead: "Join our partner network and request our product catalog and a price quote.",
    phoneLabel: "Phone",
    emailLabel: "Email",
    phone: "+976 7733 5858",
    email: "sales1@agarunited.mn",
    phCompany: "Company name",
    phRegion: "Province / district",
    phPhone: "Contact number",
    phDetails: "Request details…",
    submit: "Send request",
  },
  footer: {
    brandText:
      "Since 2016, supplying world brand products to the Mongolian market.",
    col1Head: "Company",
    col1Links: ["About", "Vision", "Partnership"],
    col2Head: "Products",
    col2Links: ["Food & drinks", "Beauty", "Household"],
    col3Head: "Contact",
    city: "Ulaanbaatar, Mongolia",
    copyright: "© 2026 Agar United LLC. All rights reserved.",
    tagline: "Together, we raise our flag at the summit of success.",
  },
};

const ru: Content = {
  nav: {
    about: "О нас",
    reach: "Охват",
    brands: "Бренды",
    values: "Ценности",
    partner: "Сотрудничество",
    contact: "Контакты",
  },
  hero: {
    badge: "С 2016 года",
    h1a: "Товары мировых",
    h1b: "брендов по",
    h1hl: "низким ценам",
    para: "С 2016 года «Агар Юнайтед» непрерывно развивается, поставляя качественную продукцию ведущих мировых брендов на монгольский рынок по самым доступным ценам.",
    cta1: "Стать партнёром",
    cta2: "Стать партнёром",
    statLabels: ["аймаков", "сомонов", "партнёров"],
    mediaEyebrow: "Область изображения",
    mediaText: "Фото автомобиля доставки, склада или команды (3:4)",
    cardTitle: "Все вместе",
    cardSub: "Поднимаем флаг на вершине успеха",
  },
  marquee: [" ", " ", " ", " ", " ", " "],
  about: {
    eyebrow: "О нас",
    h2: "Десять лет непрерывного роста",
    lead: "Мы не просто поставляем продукцию — мы создали надёжную сеть дистрибуции, охватывающую каждый аймак и сомон.",
    features: [
      {
        title: "Официальные поставки",
        text: "Поставляем мировые бренды с официальными правами и в соответствии со стандартами качества.",
      },
      {
        title: "Конкурентные цены",
        text: "Поддерживаем стабильные цены поставок и обслуживаем по доступным ценам.",
      },
      {
        title: "Сеть, доходящая повсюду",
        text: "Через партнёров в 21 аймаке и 363 сомонах доставляем даже в самый маленький сельский магазин.",
      },
      {
        title: "Сотрудничество",
        text: "Работаем по долгосрочным взаимовыгодным договорам с более чем 3500 партнёрами в 9 районах Улан-Батора.",
      },
    ],
  },
  reach: {
    eyebrow: "Охват",
    h2: "Доставка в любую точку Монголии",
    para: "Через сеть партнёров доставляем нашу продукцию в каждую точку розничной торговли.",
    mapEyebrow: "Область изображения",
    mapText: "Интерактивная карта Монголии — охват каждого аймака",
    rows: [
      { title: "Аймаки", sub: "Партнёры в каждом аймаке" },
      { title: "Сомоны", sub: "Постоянные маршруты доставки" },
      { title: "Районы Улан-Батора", sub: "Ежедневная дистрибуция" },
      { title: "Партнёры", sub: "Долгосрочное сотрудничество" },
    ],
  },
  brands: {
    eyebrow: "Продукция",
    h2: "Бренды, которые мы поставляем",
    link: "Запросить полный каталог →",
    logoSlot: "Логотип бренда",
    catImg: "Изображение категории",
    cats: [
      { title: "test", text: "test test test test" },
      { title: "test", text: "test test test test test test" },
      { title: "test", text: "test test test test test test test" },
    ],
  },
  values: {
    eyebrow: "Видение",
    h2: "«Поднимаем свой флаг на вершине успеха, все вместе.»",
    swatchLabel: "Пять сил, одна команда",
    missionEyebrow: "Миссия",
    missionLead:
      "Сделать качественную мировую продукцию доступной по цене для каждого потребителя в Монголии.",
    valuesEyebrow: "Ценности",
    valuesList: [
      "Честность",
      "Сила команды",
      "Ответственность",
      "Непрерывное развитие",
    ],
    mottoEyebrow: "Девиз",
    mottoSlogan: "Вперёд вместе — Agar United",
  },
  partner: {
    eyebrow: "Сотрудничество",
    h2: "Стать партнёром за 4 простых шага",
    steps: [
      {
        label: "Шаг 01",
        title: "Оставить заявку",
        text: "Свяжитесь с нами через онлайн-форму или по телефону и расскажите о своей деятельности.",
      },
      {
        label: "Шаг 02",
        title: "Определить охват",
        text: "Согласуем регион, количество торговых точек и категории продукции.",
      },
      {
        label: "Шаг 03",
        title: "Заключить договор",
        text: "В договоре фиксируются структура цен, условия оплаты и график поставок.",
      },
      {
        label: "Шаг 04",
        title: "Регулярные поставки",
        text: "Доставка по графику, поддержка продаж и рекламные материалы.",
      },
    ],
  },
  contact: {
    h2: "Готовы расти вместе?",
    lead: "Присоединяйтесь к сети партнёров, запросите каталог продукции и коммерческое предложение.",
    phoneLabel: "Телефон",
    emailLabel: "Эл. почта",
    phone: "+976 7733 5858",
    email: "sales1@agarunited.mn",
    phCompany: "Название организации",
    phRegion: "Аймак / район",
    phPhone: "Контактный номер",
    phDetails: "Подробности заявки…",
    submit: "Отправить заявку",
  },
  footer: {
    brandText:
      "С 2016 года поставляем продукцию мировых брендов на монгольский рынок.",
    col1Head: "Компания",
    col1Links: ["О нас", "Видение", "Сотрудничество"],
    col2Head: "Продукция",
    col2Links: ["Еда и напитки", "Красота", "Бытовые товары"],
    col3Head: "Контакты",
    city: "Улан-Батор, Монголия",
    copyright: "© 2026 Agar United LLC. Все права защищены.",
    tagline: "Поднимаем свой флаг на вершине успеха, все вместе.",
  },
};

export const content: Record<Lang, Content> = { mn, en, ru };
