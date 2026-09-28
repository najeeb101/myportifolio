import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { BackToTop } from "@/components/ui/BackToTop";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SectionRail } from "@/components/ui/SectionRail";

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
    <html lang="en" suppressHydrationWarning>
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
