"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-[10%] w-72 h-72 bg-accent/15 rounded-full blur-3xl"
        />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight">
              Explore our{" "}
              <span className="text-accent-light">services</span>
            </h1>
            <div className="flex items-center gap-2 mt-4 text-sm text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-accent-light">Services</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <AnimatedSection key={service.slug} delay={i * 0.08}>
                <Link href={`/services/${service.slug}`} className="group block h-full">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 h-full bg-white border border-slate-100">
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <div className="w-10 h-10 rounded-xl bg-accent/90 flex items-center justify-center">
                          <service.icon size={20} className="text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-heading font-bold text-slate-900 mb-2 group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-4">
                        {service.shortDesc}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                        Learn More <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Banner */}
      <section className="relative py-16 bg-accent overflow-hidden">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -right-20 top-1/2 -translate-y-1/2 w-48 h-48 border-[3px] border-white/20 rounded-full"
        />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <p className="text-white/90 leading-relaxed text-lg">
                We specialize in delivering innovative and impactful solutions that elevate brands and drive results. From digital experiences to print media, our team of creative professionals is dedicated to transforming ideas into compelling stories that resonate with audiences.
              </p>
              <div className="grid grid-cols-3 gap-8 mt-8">
                {[
                  { value: "50+", label: "Projects Completed" },
                  { value: "5+", label: "Years Of Experience" },
                  { value: "98%", label: "Client Satisfaction" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl md:text-3xl font-heading font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-white/70 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <div className="flex justify-center lg:justify-end">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="relative w-40 h-40"
              >
                <div className="absolute inset-0 border-[3px] border-dashed border-white/30 rounded-full" />
                <div className="absolute inset-4 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <span className="text-white font-heading font-bold text-sm text-center leading-tight">
                    Creative.<br />Strategic.<br />Results.
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-padding bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <span className="label-text">Ready to start?</span>
            <h2 className="heading-lg mt-4 mb-6">
              Not sure which service you need?{" "}
              <span className="text-gradient">Let&apos;s talk.</span>
            </h2>
            <p className="text-slate-500 mb-10 max-w-xl mx-auto">
              Tell us what you&apos;re trying to achieve and we&apos;ll recommend the right combination. No obligation, no jargon.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent hover:bg-accent-light text-white font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-accent/25"
              >
                Book a free consultation
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/254701922375"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-slate-300 hover:border-accent/50 text-slate-700 font-medium rounded-full transition-all duration-300 hover:bg-white"
              >
                Chat on WhatsApp
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
