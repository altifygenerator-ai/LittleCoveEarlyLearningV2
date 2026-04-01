import type { Metadata } from "next";
import "./globals.css";
export const metadata = {
  title: {
    default: "Little Cove Early Learning | Mount Ida, Arkansas Daycare",
    template: "%s | Little Cove Early Learning",
  },
  description:
    "Faith-based daycare in Mount Ida, Arkansas providing safe, nurturing care for infants, toddlers, and preschoolers.",
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
