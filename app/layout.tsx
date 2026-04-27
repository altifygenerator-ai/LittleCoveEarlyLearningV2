import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

const siteUrl = "https://littlecoveearlylearning.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Little Cove Early Learning | Daycare in Mount Ida, AR",
    template: "%s | Little Cove Early Learning",
  },

  description:
    "Little Cove Early Learning is a faith-based daycare in Mount Ida, Arkansas offering safe, nurturing childcare for infants, toddlers, and preschool-age children.",

  keywords: [
    "daycare Mount Ida AR",
    "childcare Mount Ida Arkansas",
    "faith based daycare Mount Ida",
    "infant care Mount Ida AR",
    "toddler care Mount Ida AR",
    "preschool Mount Ida Arkansas",
    "daycare near Lake Ouachita",
    "childcare near me Mount Ida",
  ],

  authors: [{ name: "Little Cove Early Learning" }],
  creator: "Little Cove Early Learning",
  publisher: "Little Cove Early Learning",

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    title: "Little Cove Early Learning | Daycare in Mount Ida, AR",
    description:
      "Faith-based childcare in Mount Ida, Arkansas for infants, toddlers, and preschoolers in a safe, nurturing environment.",
    url: siteUrl,
    siteName: "Little Cove Early Learning",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Little Cove Early Learning daycare in Mount Ida Arkansas",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Little Cove Early Learning | Mount Ida, AR Daycare",
    description:
      "Faith-based daycare and childcare for infants, toddlers, and preschoolers in Mount Ida, Arkansas.",
    images: ["/images/og-cover.jpg"],
  },

  verification: {
    google: "2BwurFuZChwt31SjViuSzFaqkjDO3wz5lQSDVxZGVos",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <main className="flex-grow">{children}</main>

        <footer className="text-center text-sm py-6 opacity-70">
          © {new Date().getFullYear()} Little Cove Early Learning • Mount Ida,
          Arkansas • All rights reserved.
        </footer>

        <Analytics />
      </body>
    </html>
  );
}