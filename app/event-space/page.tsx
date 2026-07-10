import type { Metadata } from "next";
import EventSpacePage from "@/app/components/EventSpacePage";

export const metadata: Metadata = {
  title: "Big Cove Rental | Event Space in Mount Ida, AR",
  description:
    "Rent approximately 3,000 square feet of upstairs event space at 144 George St in Mount Ida, with a full kitchen and elevator access.",
  keywords: [
    "event venue Mount Ida AR",
    "party rental Mount Ida Arkansas",
    "wedding venue Mount Ida",
    "meeting space Mount Ida",
    "Big Cove Rental",
  ],
  alternates: { canonical: "/event-space" },
  openGraph: {
    title: "Big Cove Rental | Mount Ida Event Space",
    description:
      "A spacious upstairs venue with a full kitchen and elevator access for birthdays, showers, reunions, meetings, weddings, and celebrations.",
    images: ["/images/rental/room-east.jpg"],
  },
};

export default function Page() {
  return <EventSpacePage />;
}
