import type { Metadata } from "next";
import PricingPage from "@/app/components/PricingPage";
import data from "@/content/content.json";

export const metadata: Metadata = {
  title: "Daycare Tuition in Mount Ida, AR",
  description:
    "View weekly infant, toddler, and Pre-K tuition at Little Cove Early Learning in Mount Ida, Arkansas.",
  keywords: [
    "daycare cost Mount Ida",
    "child care pricing Arkansas",
    "preschool tuition Mount Ida",
  ],
  alternates: { canonical: "/pricing" },
};

export default function Page() {
  return <PricingPage data={data} />;
}
