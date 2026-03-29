export interface BusinessData {
  businessName: string;
  tagline: string;
 phone?: string;
  services: string[];
  reviews: { name: string; text: string; rating: number }[];
  features?: string[];
  facebookUsername: string;
  mapQuery: string;
  hours: string[];
  announcement?: {
  enabled: boolean;
  text: string;
  link?: string;
};
announcements?: {
  title: string;
  text: string;
  date: string;
}[];
}
