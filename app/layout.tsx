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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        
        {/* Main content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <footer className="text-center text-sm py-6 opacity-70">
          © {new Date().getFullYear()} Little Cove Early Learning • Mount Ida, Arkansas • All rights reserved.
        </footer>

      </body>
    </html>
  );
}