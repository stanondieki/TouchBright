"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Monitor,
  BarChart3,
  Cloud,
  Shield,
  Palette,
  Code2,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import FAQAccordion from "@/components/FAQAccordion";
import CostEstimator from "@/components/CostEstimator";

const services = [
  {
    icon: Monitor,
    title: "UI/UX & Web Design",
    desc: "Interfaces designed around how your users actually behave.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics & BI",
    desc: "Turn scattered spreadsheets into dashboards you can actually use.",
  },
  {
    icon: Palette,
    title: "Printing & Branding",
    desc: "Physical materials that match your website and social presence.",
  },
  {
    icon: Code2,
    title: "Software Development",
    desc: "Custom web and mobile applications, scoped clearly and handed over with documentation.",
  },
  {
    icon: Cloud,
    title: "Cloud & Networking",
    desc: "Cloud migration so your team can work reliably, wherever they are.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    desc: "Security reviews that keep your systems and client data safe.",
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
  { value: "5+", label: "Years Experience" },
];

export default function HomePage() {
  return (
    <div className="page-transition">
      {/* Hero Section - Digisrupt Style: full bg image + overlay */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Full background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&q=80"
            alt="Team collaborating"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Dark overlay - stronger on the left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/75 to-primary-dark/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20 w-full">
          <div className="max-w-2xl">
            {/* Tag pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <span className="px-4 py-1.5 border border-accent/50 text-accent-light text-xs uppercase tracking-wider rounded-full">
                Technology Made Simple
              </span>
              <span className="px-4 py-1.5 border border-white/30 text-white/80 text-xs uppercase tracking-wider rounded-full">
                One Team, Every Touchpoint
              </span>
            </motion.div>

            {/* Main heading - white text on dark overlay */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight text-white mb-6"
            >
              Built to make technology feel{" "}
              <span className="text-accent-light">simple.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-xl"
            >
              Too many businesses are being sold pieces — a website here, a
              report there — with no one accountable for how they{" "}
              <span className="text-white font-medium">fit together</span>.
              We change that.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-accent hover:bg-accent-light text-white font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-accent/25"
              >
                Book a Consultation
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 hover:border-accent/50 text-white font-medium rounded-full transition-all duration-300 hover:bg-white/10"
              >
                View Services
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-accent-light rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-canvas-light border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section with image */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <AnimatedSection direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80"
                  alt="Team working together on a project"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </AnimatedSection>

            {/* Right - Text */}
            <AnimatedSection direction="right" delay={0.2}>
              <span className="label-text">Our Approach</span>
              <h2 className="heading-lg mt-4 mb-6">
                One team, working across every{" "}
                <span className="text-gradient">touchpoint.</span>
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  Touchbright Consults works across design, data, software and
                  print, so a single team stays accountable for how your
                  website, your dashboards, your marketing and your printed
                  materials actually look and feel together.
                </p>
                <p>
                  We keep scopes specific, timelines honest, and communication
                  direct — no ticket queues, no disappearing after launch. If
                  something breaks or needs adjusting, you talk to the people
                  who built it.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-canvas">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <span className="label-text">What We Do</span>
            <h2 className="heading-lg mt-4 mb-4">
              Services that cover the full picture.
            </h2>
            <p className="text-slate-500 max-w-2xl mb-12">
              From first sketch to production-ready front-end, from scattered
              data to clear dashboards — we handle it end to end.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <div className="glass-card-hover p-8 h-full group cursor-pointer">
                  <service.icon
                    size={32}
                    className="text-accent mb-5 group-hover:scale-110 transition-transform"
                  />
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div className="mt-12 text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-light font-medium transition-colors"
              >
                View all services
                <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-canvas">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="label-text">Questions</span>
              <h2 className="heading-lg mt-4">
                Things we get asked{" "}
                <span className="text-gradient">a lot.</span>
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <FAQAccordion />
          </AnimatedSection>
        </div>
      </section>

      {/* Cost Estimator Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="label-text">Project Estimator</span>
              <h2 className="heading-lg mt-4">
                Get a ballpark{" "}
                <span className="text-gradient">in 60 seconds.</span>
              </h2>
              <p className="text-slate-500 mt-4 max-w-xl mx-auto">
                Answer a few quick questions and we&apos;ll give you an instant cost range. No email required to see the estimate.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <CostEstimator />
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <span className="label-text">Let&apos;s Talk</span>
            <h2 className="heading-lg mt-4 mb-6">
              See how we&apos;d approach your{" "}
              <span className="text-gradient">project.</span>
            </h2>
            <p className="text-slate-500 mb-10 max-w-xl mx-auto">
              No pressure, no jargon — just a straight conversation about what
              you need.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent hover:bg-accent-light text-white font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-accent/25"
              >
                Get in touch
              </Link>
              <a
                href="mailto:touchbrightconsults@gmail.com"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-slate-300 hover:border-accent/50 text-primary font-medium rounded-full transition-all duration-300 hover:bg-white"
              >
                Email us directly
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
