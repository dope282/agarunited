import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

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
    <html lang="mn" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
