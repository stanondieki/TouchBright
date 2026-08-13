import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Clock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { getAllPosts, type BlogPost } from "@/sanity/lib";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical insights on web design, software, data and IT — written for business owners, not developers.",
};

export const revalidate = 60;

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default async function BlogPage() {
  let posts: BlogPost[] = [];
  try {
    posts = await getAllPosts();
  } catch {
    posts = [];
  }

  const featuredPost = posts[0];
  const restPosts = posts.slice(1);

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

      {posts.length === 0 ? (
        <section className="pb-20 bg-white">
          <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
            <AnimatedSection>
              <p className="text-slate-500 text-lg">
                No articles published yet. Check back soon — we&apos;re working on it.
              </p>
            </AnimatedSection>
          </div>
        </section>
      ) : (
        <>
          {/* Featured Post */}
          {featuredPost && (
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
                        <span className="text-xs text-slate-400">
                          {formatDate(featuredPost.publishedAt)}
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-4 group-hover:text-accent transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-slate-600 leading-relaxed mb-6">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-slate-400">
                        <span>{featuredPost.author || "Touchbright Team"}</span>
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
          )}

          {/* Post Grid */}
          {restPosts.length > 0 && (
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
                            <span>{formatDate(post.publishedAt)}</span>
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
          )}
        </>
      )}

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
