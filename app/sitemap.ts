import type { MetadataRoute } from "next";

const baseUrl = "https://littlecoveearlylearning.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/enroll`, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/pricing`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/staff`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/event-space`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/renovation`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/apply`, changeFrequency: "monthly", priority: 0.6 },
  ];
}
