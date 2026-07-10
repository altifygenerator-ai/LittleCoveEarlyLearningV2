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
    "Warm, faith-based early learning in Mount Ida, Arkansas for infants, toddlers, and Pre-K children, with personal care at 144 George St.",
  keywords: [
    "daycare Mount Ida AR",
    "childcare Mount Ida Arkansas",
    "faith based daycare Mount Ida",
    "infant care Mount Ida AR",
    "toddler care Mount Ida AR",
    "preschool Mount Ida Arkansas",
    "Pre-K Mount Ida AR",
    "daycare near Lake Ouachita",
  ],
  authors: [{ name: "Little Cove Early Learning" }],
  creator: "Little Cove Early Learning",
  publisher: "Little Cove Early Learning",
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "Little Cove Early Learning | Daycare in Mount Ida, AR",
    description:
      "Warm, faith-based childcare for infants, toddlers, and Pre-K children in Mount Ida, Arkansas.",
    url: siteUrl,
    siteName: "Little Cove Early Learning",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/updates/classroom-wide.jpg",
        width: 1200,
        height: 630,
        alt: "Little Cove Early Learning classroom in Mount Ida, Arkansas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Little Cove Early Learning | Mount Ida, AR Daycare",
    description:
      "Faith-based daycare and early learning for infants, toddlers, and Pre-K children in Mount Ida, Arkansas.",
    images: ["/images/updates/classroom-wide.jpg"],
  },
  verification: {
    google: "2BwurFuZChwt31SjVIuSzFaqkjDO3wz5lQSDVxZGVos",
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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ChildCare",
  name: "Little Cove Early Learning",
  url: siteUrl,
  image: `${siteUrl}/images/logo-mark.jpg`,
  logo: `${siteUrl}/images/logo-mark.jpg`,
  telephone: "+1-501-672-1817",
  email: "littlecoveearlylearning@outlook.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "144 George St",
    addressLocality: "Mount Ida",
    addressRegion: "AR",
    postalCode: "71957",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "06:00",
      closes: "17:30",
    },
  ],
  areaServed: ["Mount Ida", "Montgomery County", "Lake Ouachita area"],
  sameAs: ["https://www.facebook.com/TheLittleCoveEarlyLearning"],
  priceRange: "$150-$175 per week",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
