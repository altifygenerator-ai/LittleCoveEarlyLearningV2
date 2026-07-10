import type { Metadata } from "next";
import EnrollPage from "@/app/components/EnrollPage";
import data from "@/content/content.json";

export const metadata: Metadata = {
  title: "Enroll Your Child | Little Cove Early Learning Mount Ida",
  description:
    "Toddler and Pre-K enrollment is currently open at Little Cove Early Learning, 144 George St in Mount Ida, AR. Schedule a tour or request an enrollment packet.",
  keywords: [
    "daycare enrollment Mount Ida",
    "enroll daycare Mount Ida AR",
    "child care registration Mount Ida",
  ],
  alternates: { canonical: "/enroll" },
};

export default function Page() {
  return <EnrollPage data={data} />;
}
