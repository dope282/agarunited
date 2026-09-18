import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const siteUrl = "https://agarunited.mn";
const title = "Agar United — Дэлхийн брэнд бүтээгдэхүүнийг хамгийн хямд үнээр";
const description =
  "Агар Юнайтед нь 2016 оноос хойш дэлхийн тэргүүлэх брэндүүдийн чанартай бүтээгдэхүүнийг Монголын зах зээлд хамгийн хямд үнээр нийлүүлж, 21 аймаг, 363 суманд, 3500+ гэрээт харилцагчтай түгээлтийн сүлжээ бүтээсэн.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Agar United",
  },
  description,
  applicationName: "Agar United",
  authors: [{ name: "Agar United LLC" }],
  creator: "Agar United LLC",
  publisher: "Agar United LLC",
  keywords: [
    "Agar United",
    "Агар Юнайтед",
    "дистрибьютер",
    "түгээлт",
    "нийлүүлэлт",
    "брэнд бүтээгдэхүүн",
    "Монгол",
    "хүнс",
    "ундаа",
    "гэрээт харилцагч",
    "Corona",
    "Harbin",
    "Coca-Cola",
    "Pepsi",
  ],
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/agar-united-logo.png",
    shortcut: "/favicon.ico",
    apple: "/agar-united-logo.png",
  },
  openGraph: {
    type: "website",
    siteName: "Agar United",
    url: siteUrl,
    locale: "mn_MN",
    alternateLocale: ["en_US", "ru_RU"],
    title,
    description,
    images: [
      {
        url: "/agar-united-logo.png",
        width: 670,
        height: 276,
        alt: "Agar United",
      },
    ],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/agar-united-logo.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="mn" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
