import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Little Cove Early Learning | Mount Ida, Arkansas Daycare",
    template: "%s | Little Cove Early Learning",
  },
  description:
    "Faith-based daycare in Mount Ida, Arkansas providing safe, nurturing care for infants, toddlers, and preschoolers.",

  verification: {
    google: "2BwurFuZChwt31SjViuSzFaqkjDO3wz5lQSDVxZGVos",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
