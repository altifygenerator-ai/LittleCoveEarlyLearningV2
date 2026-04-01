import RenovationPage from "@/app/components/RenovationPage";
import data from "@/content/content.json";
export const metadata = {
  title: "New Daycare Facility in Mount Ida | Little Cove Updates",
  description:
    "Follow the progress of Little Cove Early Learning’s new daycare facility in Mount Ida, Arkansas. Expanding to serve more local families.",
  keywords: [
    "new daycare Mount Ida Arkansas",
    "child care center Mount Ida",
    "daycare opening Mount Ida",
  ],
};
export default function Page() {
  return <RenovationPage data={data} />;
}