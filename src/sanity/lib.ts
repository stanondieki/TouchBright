import { sanityClient } from "./client";
import { allPostsQuery, postBySlugQuery, allSlugsQuery } from "./queries";

export type BlogPost = {
  _id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readingTime: string;
  image: string;
  author: string;
  content: any;
  seoTitle?: string;
  seoDescription?: string;
};

export async function getAllPosts(): Promise<BlogPost[]> {
  return await sanityClient.fetch<BlogPost[]>(allPostsQuery, {}, {
    next: { revalidate: 60 },
  });
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  return await sanityClient.fetch<BlogPost | null>(
    postBySlugQuery,
    { slug },
    { next: { revalidate: 60 } }
  );
}

export async function getAllSlugs(): Promise<string[]> {
  return await sanityClient.fetch<string[]>(allSlugsQuery, {}, {
    next: { revalidate: 60 },
  });
}
