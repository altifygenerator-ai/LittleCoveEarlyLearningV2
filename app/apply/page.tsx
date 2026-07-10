import type { Metadata } from "next";
import ApplyPage from "@/app/components/ApplyPage";
import data from "@/content/content.json";

export const metadata: Metadata = {
  title: "Childcare Careers in Mount Ida, AR",
  description:
    "Apply to join the caring early learning team at Little Cove Early Learning in Mount Ida, Arkansas.",
  alternates: { canonical: "/apply" },
};

export default function Page() {
  return <ApplyPage data={data} />;
}
