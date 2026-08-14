import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "7hillswebmasters | GA4, GTM & Conversion Tracking Agency",
    template: "%s | 7hillswebmasters",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "web analytics agency",
    "GA4 agency",
    "Google Tag Manager expert",
    "conversion tracking",
    "pixel setup",
    "CRO agency",
    "GTM cleanup",
    "tracking audit",
    "7hillswebmasters",
    "New York analytics agency",
    "Bengaluru analytics agency",
  ],
  authors: [{ name: "7hillswebmasters", url: siteConfig.url }],
  creator: "7hillswebmasters",
  publisher: "7hillswebmasters",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "7hillswebmasters | Best-price web analytics for growing brands",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "7hillswebmasters | GA4, GTM & Conversion Tracking",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} antialiased`}>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
