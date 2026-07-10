import type { Metadata } from "next";
import Modern from "@/app/components/Modern";
import data from "@/content/content.json";

export const metadata: Metadata = {
  title: "Faith-Based Daycare & Pre-K in Mount Ida, AR",
  description:
    "Little Cove Early Learning offers warm, faith-based childcare in Mount Ida, Arkansas, with infant, toddler, and Pre-K programs. Toddler and Pre-K enrollment is currently open.",
  keywords: [
    "daycare Mount Ida AR",
    "child care Mount Ida Arkansas",
    "toddler daycare Mount Ida",
    "Pre-K Mount Ida AR",
    "preschool Mount Ida Arkansas",
    "faith based childcare Mount Ida",
  ],
  alternates: {
    canonical: "/",
  },
};

export default function Page() {
  return <Modern data={data} />;
}
