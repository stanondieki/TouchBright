"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Monitor,
  Cloud,
  Shield,
  Palette,
  Code2,
  Megaphone,
  Headphones,
  Star,
  Quote,
  Clock,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import FAQAccordion from "@/components/FAQAccordion";
import CostEstimator from "@/components/CostEstimator";
import StatsSection from "@/components/StatsSection";

const services = [
  {
    icon: Monitor,
    title: "UI/UX & Web Design",
    desc: "Seamless, human-centered designs that improve engagement, conversion, and user satisfaction — turning visitors into loyal customers.",
    href: "/services",
  },
  {
    icon: Code2,
    title: "Software Development",
    desc: "From concept to launch, we build custom applications that work flawlessly across all devices and scale with your business.",
    href: "/services",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    desc: "A powerful, consistent visual identity that connects emotionally with your audience and leaves a lasting impression across every touchpoint.",
    href: "/services",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing & SEO",
    desc: "Boost your reach, generate quality leads, and increase ROI through strategic digital marketing that blends creativity with measurable results.",
    href: "/services",
  },
  {
    icon: Cloud,
    title: "Cloud & Networking",
    desc: "Infrastructure that just works — cloud migration, office networking, and reliable connectivity for your team, wherever they are.",
    href: "/services",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    desc: "Protection before you need it. Security audits, staff training, and layered protection that keeps your data safe.",
    href: "/services",
  },
  {
    icon: Headphones,
    title: "Managed IT Support",
    desc: "Your tech team without the full-time cost. Help desk, hardware, software, and maintenance — so small problems stay small.",
    href: "/services",
  },
];

const portfolio = [
  {
    title: "Retail Inventory Dashboard",
    category: "Software",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    title: "E-commerce Redesign",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1557821556-044d29930bd9?w=600&q=80",
  },
  {
    title: "PayFlow Brand Identity",
    category: "Graphic Design",
    image: "https://images.unsplash.com/photo-1626785774573-4b7787643978?w=600&q=80",
  },
];

const tools = [
  { name: "Figma", type: "Design Tool", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Next.js", type: "Web Framework", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "React", type: "UI Library", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", type: "Language", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Tailwind", type: "CSS Framework", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Node.js", type: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "PostgreSQL", type: "Database", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "AWS", type: "Cloud Platform", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "PHP", type: "Language", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Laravel", type: "PHP Framework", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
];

const methodology = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description:
      "We start by learning everything about your brand, goals, audience, and challenges. Through deep discovery sessions and research, we uncover insights that define your direction.",
    value: "Every creative decision is grounded in purpose — so your brand doesn't just look good, it works smart.",
    deliverables: "Brand audit, mood boards, strategy outline, creative direction.",
  },
  {
    step: "02",
    title: "Concept Development",
    description:
      "Once we have the strategy, we translate insights into clear, impactful ideas. Our team brainstorms, sketches, and explores multiple directions to find the concept that best expresses your story.",
    value: "Every concept is designed to connect emotionally, communicate clearly, and set your brand apart.",
    deliverables: "Visual concepts, design mockups, key message framework.",
  },
  {
    step: "03",
    title: "Design & Iteration",
    description:
      "Vision turns into experience. We create user-centered designs that are visually compelling, functional, and intuitive. Every element is crafted to build trust and engagement.",
    value: "Precision meets creativity — every design decision is intentional, measurable, and impactful.",
    deliverables: "High-fidelity UI/UX designs, responsive layouts, prototypes.",
  },
  {
    step: "04",
    title: "Development & Launch",
    description:
      "Our developers bring the design to life with clean, optimized code and reliable performance. We prioritize speed, security, and scalability across all devices.",
    value: "Your digital presence, built to perform — functional, fast, and future-ready.",
    deliverables: "Live website/app, technical documentation, launch support.",
  },
];

const testimonials = [
  {
    name: "James Mwangi",
    role: "Operations Director",
    company: "Nairobi Fashion House",
    quote:
      "Touchbright built our inventory dashboard from scratch. We went from guessing stock levels to seeing everything in real-time. Since the redesign, our efficiency has increased by 40%. Their work is consistently fresh and on-brand.",
  },
  {
    name: "Sarah Nakanwagi",
    role: "Founder",
    company: "Kampala Eats",
    quote:
      "They didn't just build a website — they understood our business. They took the time to understand our complex product and built a platform that explains it simply and beautifully. Our online orders went from zero to over a thousand per month.",
  },
  {
    name: "David Okello",
    role: "Principal",
    company: "Bright Future Academy",
    quote:
      "Our digital presence was nonexistent before Touchbright. They handle everything — from creating gorgeous designs to building functional systems. The school management system saves us 15 hours every week. It's been a game-changer.",
  },
];

const blogPosts = [
  {
    title: "Why Your Business Needs a Dashboard (Not More Spreadsheets)",
    slug: "why-your-business-needs-a-dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    date: "Jun 15, 2025",
    readTime: "5 min",
  },
  {
    title: "Choosing the Right Tech Stack: A Guide for Non-Technical Founders",
    slug: "choosing-the-right-tech-stack",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    date: "Jun 8, 2025",
    readTime: "7 min",
  },
  {
    title: "5 Common Website Mistakes Killing Your Conversions",
    slug: "common-website-mistakes-killing-conversions",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    date: "May 1, 2025",
    readTime: "5 min",
  },
];

export default function HomePage() {
  return (
    <div className="page-transition">
      {/* ==================== HERO ==================== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&q=80"
            alt="Team collaborating"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/75 to-primary-dark/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20 w-full">
          <div className="max-w-3xl">
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

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight text-white mb-6"
            >
              We Build Systems &amp; Brands That{" "}
              <span className="text-accent-light">Drive Growth</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl"
            >
              Touchbright Consults is a creative technology agency specializing in software, design, and IT infrastructure. Helping businesses stand out, connect with their audience, and grow with confidence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-accent hover:bg-accent-light text-white font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-accent/25"
              >
                View Our Work
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 hover:border-accent/50 text-white font-medium rounded-full transition-all duration-300 hover:bg-white/10"
              >
                Book Consultation
              </Link>
            </motion.div>
          </div>
        </div>

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

      {/* ==================== TRUSTED BY ==================== */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <h3 className="text-sm font-heading font-bold text-slate-900 uppercase tracking-wider whitespace-nowrap">
                Trusted By<br />Companies
              </h3>
            </div>
            <div className="w-px h-10 bg-slate-200 hidden md:block" />
            <div className="flex-1 overflow-hidden relative">
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />
              <div className="animate-marquee flex items-center gap-16 whitespace-nowrap">
                {[
                  "Solutil.Connect",
                  "KIPM",
                  "DC & Sons",
                  "Safaricom",
                  "Equity Bank",
                  "KCB Group",
                  "Twiga Foods",
                  "Solutil.Connect",
                  "KIPM",
                  "DC & Sons",
                  "Safaricom",
                  "Equity Bank",
                  "KCB Group",
                  "Twiga Foods",
                ].map((name, i) => (
                  <span
                    key={`${name}-${i}`}
                    className="text-slate-400 font-heading font-bold text-xl md:text-2xl tracking-wide hover:text-accent transition-colors cursor-default select-none"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SERVICES ==================== */}
      <section className="relative section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="label-text">Our Innovative Services</span>
              <h2 className="heading-lg mt-4">
                Everything your business needs,{" "}
                <span className="text-gradient">under one roof.</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.08}>
                <Link href={service.href}>
                  <div className="group glass-card-hover p-7 h-full cursor-pointer relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    <service.icon
                      size={36}
                      className="text-accent mb-5 group-hover:scale-110 transition-transform duration-300"
                    />
                    <h3 className="text-lg font-heading font-bold text-slate-900 mb-3 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">
                      {service.desc}
                    </p>
                    <span className="inline-flex items-center gap-1 text-accent text-sm font-medium group-hover:gap-2 transition-all">
                      Read More <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PORTFOLIO PREVIEW ==================== */}
      <section className="relative section-padding bg-canvas overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <span className="label-text">Our Design Masterpieces</span>
                <h2 className="heading-lg mt-4">
                  Work we&apos;re{" "}
                  <span className="text-gradient">proud of.</span>
                </h2>
              </div>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-light text-white font-semibold rounded-full transition-all text-sm"
              >
                View All Portfolio
                <ArrowRight size={14} />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolio.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <Link href="/portfolio" className="group block">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="text-accent-light text-xs font-medium uppercase tracking-wider">
                        {item.category}
                      </span>
                      <h3 className="text-white font-heading font-bold text-xl mt-2 group-hover:text-accent-light transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white" />
      </section>

      {/* ==================== TOOLBOX ==================== */}
      <section className="relative section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="label-text">Our Toolbox For Innovation</span>
              <h2 className="heading-lg mt-4">
                Technologies we{" "}
                <span className="text-gradient">work with.</span>
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex justify-center">
              <div className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] md:w-[520px] md:h-[520px] lg:w-[600px] lg:h-[600px]">
                {/* Orbit rings */}
                <div className="absolute inset-0 rounded-full border border-slate-200/60" />
                <div className="absolute inset-[15%] rounded-full border border-slate-200/40" />
                <div className="absolute inset-[35%] rounded-full border border-accent/10" />

                {/* Center hub */}
                <div className="absolute inset-[35%] rounded-full bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-heading font-bold text-accent">10+</div>
                    <div className="text-[10px] md:text-xs text-slate-500 font-medium">Technologies</div>
                  </div>
                </div>

                {/* Outer orbit - rotating */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  {tools.slice(0, 5).map((tool, i) => {
                    const angle = (i / 5) * 360;
                    const rad = (angle * Math.PI) / 180;
                    const x = 50 + 48 * Math.cos(rad);
                    const y = 50 + 48 * Math.sin(rad);
                    return (
                      <motion.div
                        key={tool.name}
                        className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                        style={{ left: `${x}%`, top: `${y}%` }}
                        whileHover={{ scale: 1.3 }}
                      >
                        <motion.div
                          animate={{ rotate: -360 }}
                          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                          className="relative"
                        >
                          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-white border border-slate-200 shadow-md flex items-center justify-center p-2 group-hover:border-accent group-hover:shadow-lg group-hover:shadow-accent/20 transition-all">
                            <img src={tool.logo} alt={tool.name} className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 object-contain" />
                          </div>
                          <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-[10px] sm:text-xs font-semibold text-slate-900 bg-white px-2 py-0.5 rounded-full shadow-sm border border-slate-100">
                              {tool.name}
                            </span>
                          </div>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </motion.div>

                {/* Inner orbit - rotating opposite */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[15%]"
                >
                  {tools.slice(5).map((tool, i) => {
                    const angle = (i / 5) * 360;
                    const rad = (angle * Math.PI) / 180;
                    const x = 50 + 46 * Math.cos(rad);
                    const y = 50 + 46 * Math.sin(rad);
                    return (
                      <motion.div
                        key={tool.name}
                        className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                        style={{ left: `${x}%`, top: `${y}%` }}
                        whileHover={{ scale: 1.3 }}
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                          className="relative"
                        >
                          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-2xl bg-white border border-slate-200 shadow-md flex items-center justify-center p-2 group-hover:border-accent group-hover:shadow-lg group-hover:shadow-accent/20 transition-all">
                            <img src={tool.logo} alt={tool.name} className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain" />
                          </div>
                          <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-[10px] sm:text-xs font-semibold text-slate-900 bg-white px-2 py-0.5 rounded-full shadow-sm border border-slate-100">
                              {tool.name}
                            </span>
                          </div>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="mt-12 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-light text-white font-semibold rounded-full transition-all text-sm"
              >
                Let&apos;s Get Started!
                <ArrowRight size={14} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ==================== METHODOLOGY ==================== */}
      <section className="relative section-padding bg-slate-900 overflow-hidden">
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
          className="absolute top-20 right-[10%] w-72 h-72 bg-accent/10 rounded-full blur-3xl"
        />
        <div className="relative max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-accent-light text-sm font-semibold tracking-wider uppercase">
                Our Methodology For Success
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mt-4">
                How we bring ideas{" "}
                <span className="text-accent-light">to life.</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {methodology.map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 0.1}>
                <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-accent/30 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-accent-light font-heading font-bold text-lg">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-white pt-2 group-hover:text-accent-light transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <p className="text-accent-light text-sm italic mb-3">
                    {item.value}
                  </p>
                  <p className="text-xs text-slate-500">
                    <span className="text-slate-300 font-medium">Deliverables:</span>{" "}
                    {item.deliverables}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== STATS / MILESTONES ==================== */}
      <StatsSection />

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="relative section-padding bg-canvas overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="label-text">Hear From Our Happy Clients</span>
              <h2 className="heading-lg mt-4">
                Real results,{" "}
                <span className="text-gradient">real words.</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <div className="glass-card p-8 h-full flex flex-col relative">
                  <Quote size={32} className="text-accent/20 mb-4" />
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <Star
                        key={si}
                        size={14}
                        className="text-amber fill-amber"
                      />
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-6 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="pt-4 border-t border-slate-100">
                    <div className="font-semibold text-slate-900 text-sm">
                      {t.name}
                    </div>
                    <div className="text-xs text-slate-400">
                      {t.role}, {t.company}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white" />
      </section>

      {/* ==================== BLOG PREVIEW ==================== */}
      <section className="relative section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <span className="label-text">Latest Insights &amp; Inspiration</span>
                <h2 className="heading-lg mt-4">
                  Ideas that{" "}
                  <span className="text-gradient">move you forward.</span>
                </h2>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-light font-medium transition-colors text-sm"
              >
                View All Posts
                <ArrowRight size={14} />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.1}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block glass-card-hover overflow-hidden h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                      <span>{post.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-base font-heading font-bold text-slate-900 group-hover:text-accent transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-accent text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                      Read More <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="relative section-padding bg-canvas overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />
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
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white" />
      </section>

      {/* ==================== COST ESTIMATOR ==================== */}
      <section className="relative section-padding bg-white">
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

      {/* ==================== CTA ==================== */}
      <section className="relative section-padding bg-slate-900 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <motion.div
          animate={{ x: [0, 25, 0], y: [0, -15, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-[15%] w-64 h-64 bg-accent/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-[15%] w-72 h-72 bg-accent/10 rounded-full blur-3xl"
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-accent-light text-sm font-semibold tracking-wider uppercase mb-4">
              Let&apos;s Get Started
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
              Ready to build something{" "}
              <span className="text-accent-light">great?</span>
            </h2>
            <p className="text-slate-300 mb-10 max-w-xl mx-auto text-lg">
              Strategy-led. Design-driven. Results-focused. Let&apos;s talk about your next project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent hover:bg-accent-light text-white font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-accent/25"
              >
                Book a Consultation
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/254701922375"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 hover:border-accent/50 text-white font-medium rounded-full transition-all duration-300 hover:bg-white/10"
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
