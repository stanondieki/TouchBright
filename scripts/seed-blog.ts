import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "7fyv4fhj",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
});

async function uploadImage(url: string): Promise<string> {
  const res = await fetch(url);
  const buffer = await res.arrayBuffer();
  const asset = await client.assets.upload("image", Buffer.from(buffer), {
    filename: url.split("/").pop() || "image.jpg",
  });
  return asset._id;
}

async function seed() {
  console.log("Uploading images...");
  const img1 = await uploadImage(
    "https://images.pexels.com/photos/9301763/pexels-photo-9301763.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=1"
  );
  console.log("  Image 1 uploaded:", img1);

  const img2 = await uploadImage(
    "https://images.pexels.com/photos/3861077/pexels-photo-3861077.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=1"
  );
  console.log("  Image 2 uploaded:", img2);

  console.log("Creating author...");
  const author = await client.create({
    _type: "author",
    name: "Touchbright Team",
  });
  console.log("  Author created:", author._id);

  const posts = [
    {
      _type: "post",
      title: "Why Your Business Needs a Dashboard (And Not Just More Spreadsheets)",
      slug: { _type: "slug", current: "why-your-business-needs-a-dashboard" },
      excerpt:
        "Spreadsheets are great for calculation, but terrible for decision-making. Here's how a real-time dashboard changes the game for growing businesses.",
      category: "Data",
      publishedAt: "2025-06-15T09:00:00Z",
      readingTime: "5 min",
      author: { _type: "reference", _ref: author._id },
      image: { _type: "image", asset: { _type: "reference", _ref: img1 } },
      content: [
        {
          _type: "block",
          _key: "b1",
          style: "normal",
          children: [{ _type: "span", _key: "s1", text: "If you're running a growing business, you probably have spreadsheets for inventory, another for sales, another for staff attendance, and maybe a WhatsApp group where people send updates. It works — until it doesn't." }],
        },
        {
          _type: "block",
          _key: "b2",
          style: "normal",
          children: [{ _type: "span", _key: "s2", text: "The problem with spreadsheets is that they're snapshots. By the time you've compiled your weekly report, the data is already old. You're making decisions about today using information from last Tuesday." }],
        },
        {
          _type: "block",
          _key: "b3",
          style: "normal",
          children: [{ _type: "span", _key: "s3", text: "A dashboard solves this. It pulls data from all your sources into one live view. You open it and immediately see: how much stock you have, what sold today, which orders are pending, who's working. No compiling, no guessing." }],
        },
        {
          _type: "block",
          _key: "b4",
          style: "normal",
          children: [{ _type: "span", _key: "s4", text: "We've built dashboards for retailers, schools, clinics, and logistics companies. The pattern is always the same: within the first week of using it, the client finds something they didn't know was happening. A product that's been out of stock for days. A staff member who hasn't logged in. A payment that never went through." }],
        },
        {
          _type: "block",
          _key: "b5",
          style: "normal",
          children: [{ _type: "span", _key: "s5", text: "That's the value. Not the charts or the fancy UI — the visibility. You can't fix what you can't see." }],
        },
        {
          _type: "block",
          _key: "b6",
          style: "normal",
          children: [{ _type: "span", _key: "s6", text: "If you're curious what a dashboard for your business would look like, book a consultation. We'll walk through what you're currently tracking and show you what it could look like in real-time." }],
        },
      ],
      seo: {
        title: "Why Your Business Needs a Dashboard | Touchbright Consults",
        description: "Spreadsheets are great for calculation, but terrible for decision-making. Here's how a real-time dashboard changes the game.",
      },
    },
    {
      _type: "post",
      title: "5 Common Website Mistakes That Are Killing Your Conversions",
      slug: { _type: "slug", current: "common-website-mistakes-killing-conversions" },
      excerpt: "You're getting traffic but no enquiries? These are the most common website problems we see — and how to fix them.",
      category: "Web",
      publishedAt: "2025-05-01T09:00:00Z",
      readingTime: "5 min",
      author: { _type: "reference", _ref: author._id },
      image: { _type: "image", asset: { _type: "reference", _ref: img2 } },
      content: [
        {
          _type: "block",
          _key: "b1",
          style: "normal",
          children: [{ _type: "span", _key: "s1", text: "We audit a lot of websites. Not for fun — usually because a client says 'I get visitors but nobody contacts me.' After doing this dozens of times, the same five issues come up again and again." }],
        },
        {
          _type: "block",
          _key: "b2",
          style: "h2",
          children: [{ _type: "span", _key: "s2", text: "Mistake 1: No Clear Call to Action" }],
        },
        {
          _type: "block",
          _key: "b3",
          style: "normal",
          children: [{ _type: "span", _key: "s3", text: "Your homepage should answer one question immediately: what do you want the visitor to do? If they have to think about it, they'll leave. Put a clear button above the fold." }],
        },
        {
          _type: "block",
          _key: "b4",
          style: "h2",
          children: [{ _type: "span", _key: "s4", text: "Mistake 2: Slow Load Times" }],
        },
        {
          _type: "block",
          _key: "b5",
          style: "normal",
          children: [{ _type: "span", _key: "s5", text: "If your site takes more than 3 seconds to load, half your visitors are gone. Compress your images, use a CDN, and cut the unnecessary animations. Speed is a feature." }],
        },
        {
          _type: "block",
          _key: "b6",
          style: "h2",
          children: [{ _type: "span", _key: "s6", text: "Mistake 3: Too Much Text, Not Enough Structure" }],
        },
        {
          _type: "block",
          _key: "b7",
          style: "normal",
          children: [{ _type: "span", _key: "s7", text: "People don't read websites — they scan them. Use headings, bullet points, and short paragraphs. If a section has more than 3 lines of unbroken text, break it up." }],
        },
        {
          _type: "block",
          _key: "b8",
          style: "h2",
          children: [{ _type: "span", _key: "s8", text: "Mistake 4: No Mobile Optimization" }],
        },
        {
          _type: "block",
          _key: "b9",
          style: "normal",
          children: [{ _type: "span", _key: "s9", text: "Over 60% of your traffic is probably from phones. If your site is hard to use on mobile, that's 60% of potential customers you're losing." }],
        },
        {
          _type: "block",
          _key: "b10",
          style: "h2",
          children: [{ _type: "span", _key: "s10", text: "Mistake 5: No Social Proof" }],
        },
        {
          _type: "block",
          _key: "b11",
          style: "normal",
          children: [{ _type: "span", _key: "s11", text: "Testimonials, client logos, case study links — anything that shows other people trust you. Without it, you're just making claims. With it, you're providing evidence." }],
        },
      ],
      seo: {
        title: "5 Website Mistakes Killing Your Conversions | Touchbright Consults",
        description: "You're getting traffic but no enquiries? These are the most common website problems we see — and how to fix them.",
      },
    },
  ];

  for (const post of posts) {
    const created = await client.create(post);
    console.log(`Created post: ${created.title}`);
  }

  console.log("\nDone! 2 blog posts seeded to Sanity.");
}

seed().catch((err) => {
  console.error("Seed failed:", err.message);
  process.exit(1);
});
