import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Clock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical insights on web design, software, data and IT — written for business owners, not developers.",
};

export const blogPosts = [
  {
    slug: "why-your-business-needs-a-dashboard",
    title: "Why Your Business Needs a Dashboard (And Not Just More Spreadsheets)",
    excerpt:
      "Spreadsheets are great for calculation, but terrible for decision-making. Here's how a real-time dashboard changes the game for growing businesses.",
    category: "Data",
    date: "2025-06-15",
    readingTime: "5 min",
    image: "https://images.pexels.com/photos/9301763/pexels-photo-9301763.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=1",
    author: "Touchbright Team",
    content: [
      "If you're running a growing business, you probably have spreadsheets for inventory, another for sales, another for staff attendance, and maybe a WhatsApp group where people send updates. It works — until it doesn't.",
      "The problem with spreadsheets is that they're snapshots. By the time you've compiled your weekly report, the data is already old. You're making decisions about today using information from last Tuesday.",
      "A dashboard solves this. It pulls data from all your sources into one live view. You open it and immediately see: how much stock you have, what sold today, which orders are pending, who's working. No compiling, no guessing.",
      "We've built dashboards for retailers, schools, clinics, and logistics companies. The pattern is always the same: within the first week of using it, the client finds something they didn't know was happening. A product that's been out of stock for days. A staff member who hasn't logged in. A payment that never went through.",
      "That's the value. Not the charts or the fancy UI — the visibility. You can't fix what you can't see.",
      "If you're curious what a dashboard for your business would look like, book a consultation. We'll walk through what you're currently tracking and show you what it could look like in real-time.",
    ],
  },
  {
    slug: "choosing-the-right-tech-stack",
    title: "Choosing the Right Tech Stack: A Practical Guide for Non-Technical Founders",
    excerpt:
      "React or Vue? Postgres or MySQL? Cloud or on-premise? Here's a jargon-free framework for making technology decisions you won't regret.",
    category: "Software",
    date: "2025-06-08",
    readingTime: "7 min",
    image: "https://images.pexels.com/photos/7191982/pexels-photo-7191982.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=1",
    author: "Touchbright Team",
    content: [
      "Every founder faces this moment: a developer asks what tech stack you want to use, and you have no idea what they're talking about. So you Google it, fall down a rabbit hole of Reddit threads, and end up more confused than when you started.",
      "Here's the truth: the tech stack matters less than people think. What matters is that it's appropriate for your project, maintainable by the people building it, and well-supported.",
      "For most business applications — websites, dashboards, internal tools — the answer is straightforward. A React or Next.js frontend, a Node.js or Python backend, and a PostgreSQL database. This combination is battle-tested, has huge community support, and most developers know it.",
      "Where people go wrong is choosing technology based on what's trendy rather than what fits. You don't need Kubernetes for a website that gets 500 visitors a month. You don't need microservices when you have 3 users. You need something that works, that's easy to maintain, and that won't require a team of 10 to keep running.",
      "The other mistake is optimizing for the wrong thing. Founders often ask 'Is this scalable?' when they should be asking 'Can I find someone to maintain this in 2 years?' Scalability is a problem most businesses would love to have. Maintainability is a problem you'll have from day one.",
      "Our approach at Touchbright is simple: we choose the stack that gets your project done reliably, on time, and that you can maintain without us if needed. We document everything and we don't lock you in.",
    ],
  },
  {
    slug: "branding-consistency-across-touchpoints",
    title: "Branding Consistency: Why Your Website, Cards, and Dashboard Should Look Like They Belong to the Same Company",
    excerpt:
      "Customers interact with your brand across multiple touchpoints. When they look different, trust drops. Here's how to fix that.",
    category: "Branding",
    date: "2025-05-28",
    readingTime: "4 min",
    image: "https://images.pexels.com/photos/5749152/pexels-photo-5749152.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=1",
    author: "Touchbright Team",
    content: [
      "Your customer finds you on Instagram, visits your website, receives a PDF invoice, and picks up a business card at a networking event. If each of these looks like it was made by a different company, you have a problem.",
      "Brand consistency isn't about using the same logo everywhere — it's about creating a coherent experience. Same colors, same fonts, same tone of voice, same visual style. When everything aligns, customers feel they're dealing with a professional, organized business.",
      "When things don't align, the opposite happens. A beautiful website paired with a poorly formatted invoice suggests you care about appearances but not details. A great business card with a clunky website suggests you're old-school in the wrong ways.",
      "The fix starts with a brand guide: a simple document that defines your colors, fonts, logo usage, and tone. Not a 50-page corporate manual — just enough that anyone creating something for your business knows the rules.",
      "At Touchbright, we work across all these touchpoints. One team designs your website, your dashboard, your print materials, and your digital assets. That's not a coincidence — it's the point. When the same people handle everything, consistency comes naturally.",
    ],
  },
  {
    slug: "from-idea-to-launch-in-5-steps",
    title: "From Idea to Launch: How a Software Project Actually Works",
    excerpt:
      "Ever wondered what happens between 'let's build an app' and the day it goes live? Here's the honest breakdown of every stage.",
    category: "Process",
    date: "2025-05-15",
    readingTime: "6 min",
    image: "https://images.pexels.com/photos/36733293/pexels-photo-36733293.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=1",
    author: "Touchbright Team",
    content: [
      "Most people think building software is like building a house: you make a blueprint, you follow it, and you get exactly what was drawn. In reality, it's closer to growing a garden: you start with a plan, but you adapt as things develop.",
      "Stage 1 is Discovery. We sit down (in person or on a call) and map out what you're trying to achieve. Not features — goals. What problem are you solving? Who's using it? What does success look like? This stage saves more money than any other.",
      "Stage 2 is Design. We create wireframes and mockups so you can see what the product will look like before any code is written. This is where most changes happen — and it's the cheapest place to make them.",
      "Stage 3 is Development. This is where the actual building happens. We work in weekly sprints, showing you progress at the end of each week. No disappearing for three months and coming back with something you don't recognize.",
      "Stage 4 is Testing. We test on real devices, with real users if possible. We fix bugs, polish edges, and make sure the performance is where it needs to be. This stage is unglamorous but critical.",
      "Stage 5 is Launch and Support. We deploy, monitor for the first few days, and fix any issues that come up. Then we hand over documentation and stay available for questions. The relationship doesn't end at launch — that's when it really starts.",
    ],
  },
  {
    slug: "common-website-mistakes-killing-conversions",
    title: "5 Common Website Mistakes That Are Killing Your Conversions",
    excerpt:
      "You're getting traffic but no enquiries? These are the most common website problems we see — and how to fix them.",
    category: "Web",
    date: "2025-05-01",
    readingTime: "5 min",
    image: "https://images.pexels.com/photos/3861077/pexels-photo-3861077.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=1",
    author: "Touchbright Team",
    content: [
      "We audit a lot of websites. Not for fun — usually because a client says 'I get visitors but nobody contacts me.' After doing this dozens of times, the same five issues come up again and again.",
      "Mistake 1: No clear call to action. Your homepage should answer one question immediately: what do you want the visitor to do? If they have to think about it, they'll leave. Put a clear button above the fold.",
      "Mistake 2: Slow load times. If your site takes more than 3 seconds to load, half your visitors are gone. Compress your images, use a CDN, and cut the unnecessary animations. Speed is a feature.",
      "Mistake 3: Too much text, not enough structure. People don't read websites — they scan them. Use headings, bullet points, and short paragraphs. If a section has more than 3 lines of unbroken text, break it up.",
      "Mistake 4: No mobile optimization. Over 60% of your traffic is probably from phones. If your site is hard to use on mobile, that's 60% of potential customers you're losing.",
      "Mistake 5: No social proof. Testimonials, client logos, case study links — anything that shows other people trust you. Without it, you're just making claims. With it, you're providing evidence.",
    ],
  },
  {
    slug: "why-we-dont-disappear-after-launch",
    title: "Why We Don't Disappear After Launch (And Why That Matters)",
    excerpt:
      "The biggest complaint we hear about tech agencies is that they vanish after the project is delivered. Here's why we do things differently.",
    category: "Process",
    date: "2025-04-20",
    readingTime: "3 min",
    image: "https://images.pexels.com/photos/30689114/pexels-photo-30689114.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=1",
    author: "Touchbright Team",
    content: [
      "If you've worked with a tech agency before, you've probably experienced this: the project gets delivered, everyone celebrates, and then... silence. Emails go unanswered. Bugs take weeks to fix. You feel abandoned.",
      "This happens because most agencies are structured around projects, not relationships. Once the project is done, the team moves to the next one. You're no longer a priority.",
      "We think that's wrong. The launch isn't the end of the project — it's the beginning of the relationship. The first few weeks after launch are when the real issues surface. Users do things you didn't anticipate. Edge cases emerge. Small adjustments make a big difference.",
      "That's why every project we deliver includes a support period. But more than that, we stay reachable. When you call, you talk to the people who built it — not a support ticket queue.",
      "This isn't charity. It's good business. Clients who feel supported come back with new projects. They refer their friends. They trust us with bigger things. The relationship is the product.",
    ],
  },
];

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const restPosts = blogPosts.slice(1);

  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="section-padding pt-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <span className="label-text">Insights</span>
            <h1 className="heading-xl mt-4 mb-6">
              Ideas, lessons, and{" "}
              <span className="text-gradient">honest advice.</span>
            </h1>
            <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
              Practical articles on technology, design, and running a business in the digital age. No fluff, no jargon — just things we&apos;ve learned building real projects.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <AnimatedSection>
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-8 glass-card-hover overflow-hidden"
            >
              <div className="relative h-64 lg:h-full overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-accent/10 text-accent-dark text-xs font-medium rounded-full">
                    {featuredPost.category}
                  </span>
                  <span className="text-xs text-slate-400">{featuredPost.date}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-4 group-hover:text-accent transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-400">
                  <span>{featuredPost.author}</span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {featuredPost.readingTime}
                  </span>
                </div>
              </div>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Post Grid */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restPosts.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.05}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group glass-card-hover overflow-hidden h-full flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-accent-dark">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-heading font-bold text-slate-900 mb-2 group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-slate-100">
                      <span>{post.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readingTime}
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-canvas relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <span className="label-text">Stay Updated</span>
            <h2 className="heading-lg mt-4 mb-6">
              Get our articles in your{" "}
              <span className="text-gradient">inbox.</span>
            </h2>
            <p className="text-slate-500 mb-8 max-w-xl mx-auto">
              One email a month. No spam, no marketing fluff — just useful stuff we&apos;ve learned.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 bg-white border border-slate-200 rounded-full px-5 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-accent/50 transition-all"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-accent-light text-white font-semibold rounded-full transition-all whitespace-nowrap"
              >
                Subscribe
                <ArrowRight size={16} />
              </button>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
