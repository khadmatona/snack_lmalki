import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, Tajawal } from "next/font/google";
import "./globals.css";

const display = Fraunces({ subsets: ["latin"], weight: ["600", "800", "900"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body" });
const arabic = Tajawal({ subsets: ["arabic"], weight: ["500", "700", "800"], variable: "--font-ar" });

export const metadata: Metadata = {
  title: "Snack Elmalki — Burgers & Tacos · Marrakech",
  description:
    "Burgers & tacos à Marrakech. Commandez sur WhatsApp, livraison partout à Marrakech. Jardin Hay Chrifia GH11.",
  openGraph: {
    title: "Snack Elmalki — Burgers & Tacos",
    description: "الجوع جاك؟ الحل عند LMALKI! Commandez sur WhatsApp — livraison à Marrakech.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#120c0a",
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable} ${arabic.variable}`}>
      {/* browser extensions inject attributes on <body> */}
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
