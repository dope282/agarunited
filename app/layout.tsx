import type { Metadata } from "next";
import { Bitter, Manrope } from "next/font/google";
import "./globals.css";

const bitter = Bitter({
  variable: "--font-bitter",
  subsets: ["latin", "cyrillic"],
  weight: ["600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Agar United — Дэлхийн брэнд бүтээгдэхүүнийг өрсөлдөхүйц үнээр",
  description:
    "Агар Юнайтед нь 2016 оноос хойш дэлхийн тэргүүлэх брэндүүдийн бүтээгдэхүүнийг Монголын зах зээлд өрсөлдөхүйц үнээр нийлүүлж, 21 аймаг, 363 суманд түгээлтийн сүлжээ бүтээсэн.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="mn" className={`${bitter.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
