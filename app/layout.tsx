import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { BackToTop } from "@/components/ui/BackToTop";
import { SectionRail } from "@/components/ui/SectionRail";

// Font files live in app/fonts so builds never download from Google Fonts.
const bodyFont = localFont({ src: "./fonts/dm-sans.woff2", weight: "100 1000", variable: "--font-body" });
const monoFont = localFont({ src: "./fonts/jetbrains-mono.woff2", weight: "100 800", variable: "--font-mono" });
const displayFont = localFont({ src: "./fonts/syne.woff2", weight: "400 800", variable: "--font-display" });
const brandFont = localFont({ src: "./fonts/plus-jakarta-sans.woff2", weight: "200 800", variable: "--font-brand" });
const fontVariables = [bodyFont, monoFont, displayFont, brandFont].map((font) => font.variable).join(" ");

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const title = "Najeeb Abdi | CS Student & Applied AI Engineer";
const description =
  "Najeeb Abdi is a computer science student at Qatar University and an applied AI engineer, building AI tools, web apps, and games.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Najeeb Abdi Portfolio",
  authors: [{ name: "Najeeb Abdi", url: siteUrl }],
  creator: "Najeeb Abdi",
  keywords: [
    "Najeeb Abdi",
    "applied AI engineer",
    "computer science",
    "portfolio",
    "automation",
    "full-stack development",
    "RouteyAI",
    "Thermal Trace",
    "Taqriban",
    "Qatar University",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Najeeb Abdi Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Najeeb Abdi portfolio preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <ScrollProgress />
          <SectionRail />
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
