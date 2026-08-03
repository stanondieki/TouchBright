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
        <div className="absolute inset-0 world-map-bg" />
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-[10%] w-72 h-72 bg-accent/15 rounded-full blur-3xl"
        />
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-b from-transparent to-white/80 z-10" />

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
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3861077/pexels-photo-3861077.jpeg?auto=compress&cs=tinysrgb&w=1400&dpr=1"
            alt="Creative team working"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-accent/95 via-accent/90 to-accent/80" />

        {/* Animated orbs */}
        <motion.div
          animate={{ x: [0, 25, 0], y: [0, -15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-[10%] w-64 h-64 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-[5%] w-72 h-72 bg-white/5 rounded-full blur-3xl"
        />

        {/* Decorative circles */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -right-20 top-1/2 -translate-y-1/2 w-56 h-56 border-[3px] border-white/15 rounded-full"
        />
        <motion.div
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute -right-10 top-1/2 -translate-y-1/2 w-40 h-40 border-[2px] border-dashed border-white/10 rounded-full"
        />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-white/95 leading-relaxed text-lg md:text-xl"
              >
                We specialize in delivering innovative and impactful solutions that elevate brands and drive results. From digital experiences to print media, our team of creative professionals is dedicated to transforming ideas into compelling stories that resonate with audiences.
              </motion.p>
              <div className="grid grid-cols-3 gap-6 mt-10">
                {[
                  { value: "50+", label: "Projects Completed" },
                  { value: "5+", label: "Years Of Experience" },
                  { value: "98%", label: "Client Satisfaction" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="relative"
                  >
                    <div className="text-3xl md:text-4xl font-heading font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-white/70 mt-2 font-medium">{stat.label}</div>
                    <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-white/20 rounded-tl-lg" />
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
            <div className="flex justify-center lg:justify-end">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="relative w-48 h-48 md:w-56 md:h-56"
              >
                <div className="absolute inset-0 border-[3px] border-dashed border-white/30 rounded-full" />
                <div className="absolute inset-4 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <motion.span
                    animate={{ rotate: [0, -360] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="text-white font-heading font-bold text-base md:text-lg text-center leading-tight"
                  >
                    Creative.<br />Strategic.<br />Results.
                  </motion.span>
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
