"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Mail,
  Phone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { services } from "@/data/services";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const productSlug = params.productSlug as string;

  const service = services.find((s) => s.slug === slug);
  const product = service?.products?.find((p) => p.slug === productSlug);

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [activeImage, setActiveImage] = useState(0);

  if (!service || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-heading font-bold text-slate-900 mb-4">
            Product not found
          </h1>
          <Link
            href="/services"
            className="text-accent hover:text-accent-light transition-colors"
          >
            &larr; Back to services
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts =
    service.products?.filter((p) => p.slug !== product.slug) ?? [];

  const productImages =
    product.images && product.images.length > 0
      ? product.images
      : [product.image];

  async function handleEnquiry(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError("");
    setSent(false);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("_subject", `Product Enquiry: ${product!.name}`);
    formData.append("_template", "table");

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/info@touchbright.co.ke",
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        }
      );
      if (res.ok) {
        setSent(true);
        form.reset();
      } else {
        setError("Something went wrong. Please try again or call us.");
      }
    } catch {
      setError("Network error. Please try again or call us.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 world-map-bg" />
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-b from-transparent to-white/80 z-10" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <AnimatedSection>
            <div className="flex items-center gap-2 mt-4 text-sm text-slate-400 mb-4">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link
                href="/services"
                className="hover:text-white transition-colors"
              >
                Services
              </Link>
              <span>/</span>
              <Link
                href={`/services/${service.slug}`}
                className="hover:text-white transition-colors"
              >
                {service.title}
              </Link>
              <span>/</span>
              <span className="text-accent-light">{product.name}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight">
              {product.name}
            </h1>
            <div className="flex items-center gap-4 mt-4">
              <span className="inline-block bg-accent/20 text-accent-light text-sm font-medium px-3 py-1 rounded-full">
                {product.category}
              </span>
              {product.price && (
                <span className="text-white text-lg font-semibold">
                  {product.price}
                </span>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Product Image Gallery */}
            <AnimatedSection>
              <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                <div className="relative h-[400px] overflow-hidden group">
                  <img
                    src={productImages[activeImage]}
                    alt={`${product.name} - image ${activeImage + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                  {productImages.length > 1 && (
                    <>
                      <button
                        onClick={() =>
                          setActiveImage((prev) => prev === 0 ? productImages.length - 1 : prev - 1)
                        }
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-slate-700 hover:bg-white hover:text-accent transition-all shadow-sm"
                        aria-label="Previous image"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={() =>
                          setActiveImage((prev) => prev === productImages.length - 1 ? 0 : prev + 1)
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-slate-700 hover:bg-white hover:text-accent transition-all shadow-sm"
                        aria-label="Next image"
                      >
                        <ChevronRight size={20} />
                      </button>
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                        {activeImage + 1} / {productImages.length}
                      </div>
                    </>
                  )}
                </div>
              </div>
              {productImages.length > 1 && (
                <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
                  {productImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(idx)}
                      className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                        activeImage === idx
                          ? "border-accent ring-2 ring-accent/20"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </AnimatedSection>

            {/* Product Details */}
            <AnimatedSection delay={0.1}>
              <div>
                <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">
                  Overview
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {product.description}
                </p>

                <h3 className="text-lg font-heading font-bold text-slate-900 mb-3">
                  Key Features
                </h3>
                <ul className="space-y-2 mb-8">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <CheckCircle2
                        size={18}
                        className="text-accent flex-shrink-0 mt-0.5"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-100 text-slate-700 text-sm font-semibold hover:bg-slate-200 transition-colors"
                  >
                    <ArrowLeft size={16} />
                    Back to {service.title}
                  </Link>
                  <a
                    href="#enquire"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-accent text-white text-sm font-semibold hover:bg-accent-dark transition-colors"
                  >
                    Enquire Now
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Enquiry Form */}
          <AnimatedSection delay={0.15}>
            <div id="enquire" className="mt-16 max-w-2xl mx-auto scroll-mt-28">
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <h2 className="text-2xl font-heading font-bold text-slate-900 mb-2">
                  Enquire about this <span className="text-accent">product</span>
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Fill in your details and we&apos;ll get back to you with a
                  quote and availability.
                </p>

                {sent ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                    <CheckCircle2
                      size={32}
                      className="text-green-600 mx-auto mb-3"
                    />
                    <p className="text-green-800 font-semibold">
                      Thank you! Your enquiry has been sent.
                    </p>
                    <p className="text-green-600 text-sm mt-1">
                      We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleEnquiry} className="space-y-4">
                    <input
                      type="hidden"
                      name="Product"
                      value={product.name}
                    />
                    <input
                      type="hidden"
                      name="Service"
                      value={service.title}
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                          placeholder="07XX XXX XXX"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Quantity / Details
                      </label>
                      <textarea
                        name="message"
                        rows={3}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                        placeholder="How many do you need? Any specific requirements?"
                      />
                    </div>

                    {error && (
                      <p className="text-red-500 text-xs">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full px-6 py-3 rounded-xl bg-accent text-white text-sm font-semibold hover:bg-accent-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {sending ? (
                        <>
                          <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Mail size={16} />
                          Send Enquiry
                        </>
                      )}
                    </button>
                  </form>
                )}

                <div className="mt-6 pt-6 border-t border-slate-200 flex items-center justify-center gap-2 text-sm text-slate-500">
                  <Phone size={16} className="text-accent" />
                  <span>Or call us: +254 7XX XXX XXX</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <AnimatedSection delay={0.2}>
              <div className="mt-16">
                <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6">
                  Related <span className="text-accent">products</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {relatedProducts.slice(0, 4).map((rp, i) => (
                    <motion.div
                      key={rp.slug}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={`/services/${service.slug}/products/${rp.slug}`}
                        className="group block rounded-2xl overflow-hidden border border-slate-100 hover:border-accent/20 hover:shadow-lg transition-all bg-white"
                      >
                        <div className="relative h-40 overflow-hidden">
                          <img
                            src={rp.image}
                            alt={rp.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-[11px] font-medium text-accent-dark">
                            {rp.category}
                          </div>
                        </div>
                        <div className="p-4">
                          <h4 className="text-sm font-heading font-bold text-slate-900 mb-1 group-hover:text-accent transition-colors">
                            {rp.name}
                          </h4>
                          {rp.price && (
                            <p className="text-accent text-sm font-semibold">
                              {rp.price}
                            </p>
                          )}
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>
    </div>
  );
}
