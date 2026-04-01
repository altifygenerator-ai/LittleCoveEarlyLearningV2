import PricingPage from "@/app/components/PricingPage";
import data from "@/content/content.json";
export const metadata = {
  title: "Daycare Pricing in Mount Ida, AR | Little Cove",
  description:
    "View daycare pricing and tuition options at Little Cove Early Learning in Mount Ida, Arkansas. Transparent, affordable child care.",
  keywords: [
    "daycare cost Mount Ida",
    "child care pricing Arkansas",
    "preschool tuition Mount Ida",
  ],
};
export default function Page() {
  return <PricingPage data={data} />;
}