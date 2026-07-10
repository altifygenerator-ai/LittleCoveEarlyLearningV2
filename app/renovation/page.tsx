import type { Metadata } from "next";
import RenovationPage from "@/app/components/RenovationPage";
import data from "@/content/content.json";

export const metadata: Metadata = {
  title: "Our Story & Center Updates | Little Cove",
  description:
    "See how Little Cove Early Learning at 144 George St in Mount Ida grew from a dream into a warm early learning center for local families.",
  keywords: [
    "Little Cove Early Learning updates",
    "daycare Mount Ida Arkansas",
    "child care center Mount Ida",
  ],
  alternates: { canonical: "/renovation" },
};

export default function Page() {
  return <RenovationPage data={data} />;
}
