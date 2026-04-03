import type { MetadataRoute } from "next";
import { portfolioItems } from "@/lib/portfolio-data";

const BASE_URL = "https://www.sazoum-inox.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const portfolioRoutes = portfolioItems.map((item) => ({
    url: `${BASE_URL}/portfolio/${item.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...portfolioRoutes,
  ];
}
