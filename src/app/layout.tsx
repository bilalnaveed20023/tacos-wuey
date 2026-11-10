import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Instrument_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import { asset } from "@/lib/content";

const display = Bodoni_Moda({ subsets: ["latin"], style: ["normal", "italic"], weight: ["400", "500", "600", "700"], variable: "--font-display", display: "swap" });
const sans = Instrument_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-sans", display: "swap" });
const mono = DM_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

const title = "Tacos Wuey · Taquería moderna in Mexicantown, Detroit";
const description =
  "Chef Eddie Vargas’s taquería at 3970 Vernor Hwy: Vargas family birria, spaghetti verde with milanesa, birria ramen, Sunday brunch. On The New York Times’ 2026 Restaurant List.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? "http://localhost:3110"),
  title,
  description,
  applicationName: "Tacos Wuey",
  keywords: ["Tacos Wuey", "Detroit birria", "Mexicantown restaurant", "Eddie Vargas chef", "Vernor Highway tacos"],
  openGraph: { type: "website", siteName: "Tacos Wuey", title, description, locale: "en_US", images: [{ url: asset("/img/og.jpg"), width: 1200, height: 630 }] },
};

export const viewport: Viewport = { themeColor: "#0d0c0b", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
