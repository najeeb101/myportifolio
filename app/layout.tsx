import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { BackToTop } from "@/components/ui/BackToTop";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SectionRail } from "@/components/ui/SectionRail";

// Self-hosted and preloaded by next/font, so text no longer waits on a
// page CSS -> Google CSS -> font file request chain.
const bodyFont = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body" });
const monoFont = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-mono" });
const displayFont = Syne({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-display" });
const brandFont = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-brand" });
const fontVariables = [bodyFont, monoFont, displayFont, brandFont].map((font) => font.variable).join(" ");

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const title = "Najeeb Abdi | AI Engineering & Computer Science";
const description =
  "Portfolio of Najeeb Abdi, a computer science major building AI automation, operational intelligence, and full-stack products.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Najeeb Abdi Portfolio",
  authors: [{ name: "Najeeb Abdi", url: siteUrl }],
  creator: "Najeeb Abdi",
  keywords: [
    "Najeeb Abdi",
    "AI engineering",
    "computer science",
    "portfolio",
    "automation",
    "full-stack development",
    "RouteyAI",
    "Thermal Trace",
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
          <CustomCursor />
          <ScrollProgress />
          <SectionRail />
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
