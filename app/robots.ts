import { MetadataRoute } from "next/types";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      allow: "/$",
      disallow: "/",
    },
    sitemap: "https://links.mumtazaziz.com/sitemap.xml",
  };
}
