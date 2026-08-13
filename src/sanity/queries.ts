import { groq } from "next-sanity";

export const allPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    "slug": slug.current,
    title,
    excerpt,
    category,
    "publishedAt": publishedAt,
    "readingTime": readingTime,
    "image": image.asset->url,
    "author": author->name,
    content,
    "seoTitle": seo.title,
    "seoDescription": seo.description,
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    "slug": slug.current,
    title,
    excerpt,
    category,
    "publishedAt": publishedAt,
    "readingTime": readingTime,
    "image": image.asset->url,
    "author": author->name,
    content,
    "seoTitle": seo.title,
    "seoDescription": seo.description,
  }
`;

export const allSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)].slug.current
`;
