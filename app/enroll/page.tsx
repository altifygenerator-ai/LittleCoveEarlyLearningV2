import EnrollPage from "@/app/components/EnrollPage";
import data from "@/content/content.json";
export const metadata = {
  title: "Enroll Your Child | Little Cove Early Learning Mount Ida",
  description:
    "Enroll your child at Little Cove Early Learning in Mount Ida, AR. Book a tour, join our waitlist, and learn how to get started.",
  keywords: [
    "daycare enrollment Mount Ida",
    "enroll daycare Mount Ida AR",
    "child care registration Mount Ida",
  ],
};
export default function Page() {
  return <EnrollPage data={data} />;
}