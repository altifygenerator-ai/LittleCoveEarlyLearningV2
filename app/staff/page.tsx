import type { Metadata } from "next";
import StaffPage from "@/app/components/StaffPage";

export const metadata: Metadata = {
  title: "Meet Our Staff | Little Cove Early Learning",
  description:
    "Meet Joie, owner and manager, and Kaitlyn, Lead Teacher at Little Cove Early Learning in Mount Ida, Arkansas.",
  alternates: { canonical: "/staff" },
};

export default function Page() {
  return <StaffPage />;
}
