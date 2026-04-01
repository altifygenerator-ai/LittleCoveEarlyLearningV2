import Modern from "@/app/components/Modern";
import data from "@/content/content.json";
export const homeMetadata = {
  title: "Trusted Daycare in Mount Ida, Arkansas",
  description:
    "Safe, nurturing daycare and early learning for infants, toddlers, and preschoolers in Mount Ida. Schedule a tour today.",
  keywords: [
    "daycare in Mount Ida",
    "child care in Mount Ida",
    "daycare near me",
    "preschool in Mount Ida",
  ],
  openGraph: {
    title: "Trusted Daycare in Mount Ida, Arkansas",
    description:
      "Safe, nurturing daycare and early learning for infants, toddlers, and preschoolers in Mount Ida.",
    type: "website",
  },
};
export default function Page() {
  return <Modern data={data} />;
}