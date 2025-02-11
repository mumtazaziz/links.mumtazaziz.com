import { MetadataRoute } from "next/types";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://links.mumtazaziz.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}
