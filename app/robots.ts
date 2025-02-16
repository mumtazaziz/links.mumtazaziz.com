import { MetadataRoute } from "next/types";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      allow: [
        "/$",
        "/_next/image",
        "/_next/static/",
        "/favicon.ico$",
        "/robots.txt$",
        "/sitemap.xml$",
      ],
      disallow: "/",
    },
    sitemap: "https://links.mumtazaziz.com/sitemap.xml",
  };
}
