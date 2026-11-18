import { NextResponse } from "next/server";
import { sanityClient } from "@/sanity/client";
import { allPostsQuery } from "@/sanity/queries";

export const revalidate = 60;

export async function GET() {
  try {
    const posts = await sanityClient.fetch(allPostsQuery, {}, {
      next: { revalidate: 60 },
    });
    const latest = posts.slice(0, 3).map((p: any) => ({
      slug: p.slug,
      title: p.title,
      image: p.image,
      publishedAt: p.publishedAt,
      readingTime: p.readingTime,
    }));
    return NextResponse.json(latest);
  } catch {
    return NextResponse.json([]);
  }
}
