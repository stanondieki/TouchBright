import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { getAllPosts } from "@/sanity/lib";

const BASE_URL = "https://touchbrightconsults.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = [
    { path: "", priority: 1.0 },
    { path: "/services", priority: 0.9 },
    { path: "/portfolio", priority: 0.8 },
    { path: "/process", priority: 0.7 },
    { path: "/why-us", priority: 0.7 },
    { path: "/blog", priority: 0.6 },
    { path: "/contact", priority: 0.9 },
    { path: "/ballpark", priority: 0.8 },
  ].map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority,
  }));

  const servicePages = services.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const productPages = services
    .filter((service) => service.products)
    .flatMap((service) =>
      service.products!.map((product) => ({
        url: `${BASE_URL}/services/${service.slug}/products/${product.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      }))
    );

  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const posts = await getAllPosts();
    blogPages = posts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    }));
  } catch {
    blogPages = [];
  }

  return [...staticPages, ...servicePages, ...productPages, ...blogPages];
}
