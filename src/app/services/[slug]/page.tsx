"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  ChevronDown,
  Phone,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { services } from "@/data/services";

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
      >
        <span className="text-sm font-semibold text-slate-900 pr-4">{q}</span>
        <ChevronDown
          size={18}
          className={`text-accent flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-5 pb-5 text-sm text-slate-500 leading-relaxed">
          {a}
        </div>
      </motion.div>
    </div>
  );
}

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-heading font-bold text-slate-900 mb-4">Service not found</h1>
          <Link href="/services" className="text-accent hover:text-accent-light transition-colors">
            ← Back to services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 world-map-bg" />
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-b from-transparent to-white" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <AnimatedSection>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight">
              {service.title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-accent-light">{service.title.split(" ").slice(-1)}</span>
            </h1>
            <div className="flex items-center gap-2 mt-4 text-sm text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <span>/</span>
              <span className="text-accent-light">{service.title}</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10">
            {/* Sidebar */}
            <div className="space-y-6 lg:sticky lg:top-28 self-start">
              {/* Services Category Card */}
              <div className="bg-slate-900 rounded-2xl overflow-hidden">
                <div className="bg-accent px-6 py-4">
                  <h3 className="text-white font-heading font-bold text-lg">Services Category</h3>
                </div>
                <div className="p-2">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-all ${
                        s.slug === slug
                          ? "bg-accent/20 text-accent-light font-semibold"
                          : "text-slate-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <span>{s.title}</span>
                      <ArrowRight size={14} className="flex-shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-slate-900 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/20 rounded-2xl flex items-center justify-center">
                  <Phone size={28} className="text-accent-light" />
                </div>
                <p className="text-slate-300 text-sm mb-1">
                  We&apos;re always available to discuss with you
                </p>
                <a
                  href="mailto:touchbrightconsults@gmail.com"
                  className="text-accent-light text-sm font-medium hover:underline break-all"
                >
                  touchbrightconsults@gmail.com
                </a>
                <div className="mt-5">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-light text-white text-sm font-semibold rounded-full transition-all"
                  >
                    Contact Us
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div>
              {/* Hero Image */}
              <AnimatedSection>
                <div className="relative rounded-2xl overflow-hidden mb-10">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[350px] md:h-[450px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
                </div>
              </AnimatedSection>

              {/* Description */}
              <AnimatedSection delay={0.1}>
                <div className="prose max-w-none mb-12">
                  <p className="text-slate-600 leading-relaxed text-base">
                    {service.description}
                  </p>
                  <p className="text-slate-600 leading-relaxed text-base mt-4">
                    {service.descriptionExtra}
                  </p>
                </div>
              </AnimatedSection>

              {/* Benefits */}
              <AnimatedSection delay={0.15}>
                <div className="mb-14">
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-2">
                    Benefits of{" "}
                    <span className="text-accent">{service.title.toLowerCase()}</span>
                  </h2>
                  <p className="text-slate-500 text-sm mb-6">
                    Our solutions don&apos;t just look great — they deliver results.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.benefits.map((benefit) => (
                      <div
                        key={benefit}
                        className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 hover:border-accent/20 hover:bg-accent/5 transition-all"
                      >
                        <CheckCircle2 size={18} className="text-accent flex-shrink-0" />
                        <span className="text-sm text-slate-700">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="relative rounded-2xl overflow-hidden">
                    <img
                      src={service.benefitsImage}
                      alt={`${service.title} benefits`}
                      className="w-full h-[300px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent" />
                  </div>
                </div>
              </AnimatedSection>

              {/* Process */}
              <AnimatedSection delay={0.2}>
                <div className="mb-14">
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-2">
                    {service.title.split(" ")[0]}{" "}
                    <span className="text-accent">process</span>
                  </h2>
                  <p className="text-slate-500 text-sm mb-8">
                    Our process ensures transparency, precision, and high-quality results — from idea to launch.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {service.process.map((step, i) => (
                      <motion.div
                        key={step.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group bg-slate-900 rounded-2xl p-6 hover:bg-slate-800 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                          <span className="text-accent-light font-heading font-bold text-sm">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <h4 className="text-white font-heading font-bold text-base mb-2">
                          {step.title}
                        </h4>
                        <p className="text-slate-400 text-xs leading-relaxed">
                          {step.desc}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* FAQs */}
              <AnimatedSection delay={0.25}>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-accent text-sm font-semibold">+ FAQs</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-8">
                    Find your{" "}
                    <span className="text-accent">answers here</span>
                  </h2>
                  <div className="space-y-3">
                    {service.faqs.map((faq) => (
                      <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
