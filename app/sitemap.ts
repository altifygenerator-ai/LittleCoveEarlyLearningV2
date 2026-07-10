import type { MetadataRoute } from "next";

const baseUrl = "https://littlecoveearlylearning.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/enroll`, lastModified, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/pricing`, lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/staff`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/event-space`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/renovation`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/apply`, lastModified, changeFrequency: "monthly", priority: 0.6 },
  ];
}
