export const postSchema = {
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      description: "A short summary shown on the blog listing page.",
      validation: (Rule: any) => Rule.required().max(300),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          "Data",
          "Software",
          "Branding",
          "Process",
          "Web",
          "Design",
          "Business",
          "Marketing",
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "readingTime",
      title: "Reading Time",
      type: "string",
      description: "e.g. '5 min'",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
    },
    {
      name: "image",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "caption",
              type: "string",
              title: "Caption",
              options: { isHighlighted: true },
            },
          ],
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "seo",
      title: "SEO Settings",
      type: "object",
      fields: [
        {
          name: "title",
          title: "SEO Title",
          type: "string",
          description: "Overrides the page title for search engines.",
        },
        {
          name: "description",
          title: "SEO Description",
          type: "text",
          rows: 2,
          description: "Overrides the meta description for search engines.",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "image",
    },
  },
};

export const authorSchema = {
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "avatar",
      title: "Avatar",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "bio",
      title: "Bio",
      type: "text",
      rows: 3,
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "avatar",
    },
  },
};

export const schemas = [postSchema, authorSchema];
