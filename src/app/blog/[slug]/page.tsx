import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { PortableTextRenderer } from "@/components/PortableTextRenderer";
import { getAllSlugs, getPostBySlug, getAllPosts, type BlogPost } from "@/sanity/lib";

export const revalidate = 60;

export async function generateStaticParams() {
  let slugs: string[] = [];
  try {
    slugs = await getAllSlugs();
  } catch {
    slugs = [];
  }
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  let post;
  try {
    post = await getPostBySlug(params.slug);
  } catch {
    return { title: "Post Not Found" };
  }
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.seoTitle || post.title} | Touchbright Consults`,
    description: post.seoDescription || post.excerpt,
  };
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  let post: BlogPost | null = null;
  try {
    post = await getPostBySlug(params.slug);
  } catch {
    post = null;
  }
  if (!post) notFound();

  let allPosts: BlogPost[] = [];
  try {
    allPosts = await getAllPosts();
  } catch {
    allPosts = [];
  }

  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="pt-32 pb-8 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <AnimatedSection>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-accent transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Back to all articles
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-accent/10 text-accent-dark text-xs font-medium rounded-full">
                {post.category}
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Calendar size={12} />
                {formatDate(post.publishedAt)}
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Clock size={12} />
                {post.readingTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-900 leading-tight mb-6">
              {post.title}
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-3 pb-8 border-b border-slate-100">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center">
                <span className="text-white text-sm font-bold">TB</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900">
                  {post.author || "Touchbright Team"}
                </div>
                <div className="text-xs text-slate-400">Touchbright Consults</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <AnimatedSection>
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <AnimatedSection>
            <article className="prose prose-lg max-w-none">
              <PortableTextRenderer content={post.content} />
            </article>
          </AnimatedSection>

          {/* Share + CTA */}
          <div className="mt-12 pt-8 border-t border-slate-100">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-slate-500">
                Need help with something like this?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-light text-white font-semibold rounded-full transition-all"
              >
                Book a consultation
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section-padding bg-canvas">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <h2 className="heading-md mb-8">Related articles</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relPost, i) => (
                <AnimatedSection key={relPost.slug} delay={i * 0.1}>
                  <Link
                    href={`/blog/${relPost.slug}`}
                    className="group glass-card-hover overflow-hidden h-full flex flex-col"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={relPost.image}
                        alt={relPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <span className="text-xs text-accent-dark font-medium mb-2">
                        {relPost.category}
                      </span>
                      <h3 className="text-base font-heading font-bold text-slate-900 mb-2 group-hover:text-accent transition-colors">
                        {relPost.title}
                      </h3>
                      <span className="text-xs text-slate-400 mt-auto pt-4">
                        {relPost.readingTime} read
                      </span>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
