"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Monitor,
  Palette,
  Code2,
  Cloud,
  Shield,
  Megaphone,
  Headphones,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    number: "01",
    icon: Monitor,
    title: "UI/UX & Web Design",
    tagline: "Websites that work as hard as you do.",
    description:
      "We design and build websites and web applications that don't just look great — they convert visitors into customers. Every layout decision is backed by how real users navigate, read, and click. No template websites. Everything custom, everything responsive.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=700&q=80",
    items: [
      "Custom responsive website design & development",
      "Wireframes & interactive prototypes",
      "E-commerce platforms with checkout optimization",
      "Landing pages built for lead generation",
      "Design systems & component libraries",
      "UX audits with actionable improvement plans",
    ],
    process: ["Discovery call", "Wireframe & mockup", "Development", "Testing & launch"],
    result: "Average 45% increase in enquiries after redesign",
  },
  {
    number: "02",
    icon: Palette,
    title: "Graphic Design",
    tagline: "Visuals that make people remember you.",
    description:
      "From logos to social media posts, from packaging to annual reports — we create visual assets that tell your story consistently across every medium. Whether it's digital or print, we make sure your brand looks professional, polished, and unmistakably yours.",
    image: "https://images.unsplash.com/photo-1626785774573-4b7787643978?w=700&q=80",
    items: [
      "Logo design & full brand identity",
      "Business cards, letterheads & stationery",
      "Social media graphics & templates",
      "Brochures, flyers & marketing collateral",
      "Packaging design & product labels",
      "Presentation decks & pitch materials",
    ],
    process: ["Brief & moodboard", "Concept design", "Revisions", "Final delivery"],
    result: "Clients report 40%+ brand recall improvement",
  },
  {
    number: "03",
    icon: Code2,
    title: "Software Development",
    tagline: "Custom tools built for how your business actually runs.",
    description:
      "Off-the-shelf software rarely fits. We build custom web and mobile applications, internal tools, and automation systems that match your workflows exactly. Scoped clearly, documented properly, and handed over so you're never locked in.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=700&q=80",
    items: [
      "Custom web applications (React, Next.js, Vue)",
      "Mobile apps (iOS & Android, cross-platform)",
      "Internal tools & admin dashboards",
      "Workflow automation & integrations",
      "API development & third-party connections",
      "Legacy system modernization & migration",
    ],
    process: ["Requirements mapping", "Sprint planning", "Weekly demos", "Launch & support"],
    result: "Average 15+ hours saved per week for clients",
  },
  {
    number: "04",
    icon: Cloud,
    title: "Cloud & Networking",
    tagline: "Infrastructure that just works — everywhere.",
    description:
      "Whether you're moving to the cloud, setting up a new office, or connecting remote teams — we design, deploy, and manage infrastructure that stays reliable. No more downtime excuses, no more 'the internet is slow' mornings.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&q=80",
    items: [
      "Cloud migration (AWS, Azure, Google Cloud)",
      "Office & enterprise network setup",
      "VPN & secure remote access",
      "Server provisioning & administration",
      "Backup systems & disaster recovery",
      "Email hosting & collaboration tools",
    ],
    process: ["Infrastructure audit", "Architecture plan", "Migration", "Monitoring setup"],
    result: "99.9% uptime for all managed clients",
  },
  {
    number: "05",
    icon: Shield,
    title: "Cybersecurity",
    tagline: "Protection before you need it, not after.",
    description:
      "Most businesses only think about security after something goes wrong. We help you get ahead of threats with assessments, staff training, and layered protection that keeps your data and your clients' data safe. Compliance-ready, audit-ready.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=700&q=80",
    items: [
      "Security audits & penetration testing",
      "Staff cybersecurity awareness training",
      "Firewall & endpoint protection setup",
      "Data encryption & access controls",
      "Incident response & recovery planning",
      "Compliance consulting (GDPR, ISO 27001)",
    ],
    process: ["Risk assessment", "Gap analysis", "Implementation", "Ongoing monitoring"],
    result: "Zero breaches across all managed clients",
  },
  {
    number: "06",
    icon: Megaphone,
    title: "Digital Marketing & SEO",
    tagline: "Get found by the right people, not just anyone.",
    description:
      "We don't just drive traffic — we drive the right traffic. Through search optimization, social media strategy, and targeted campaigns, we make sure your ideal customers find you first. Everything measurable, everything optimized monthly.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=700&q=80",
    items: [
      "Search engine optimization (SEO)",
      "Google Ads & paid campaign management",
      "Social media strategy & content",
      "Email marketing & automation",
      "Analytics setup & monthly reporting",
      "Content writing & blog management",
    ],
    process: ["Audit & strategy", "Content plan", "Execution", "Monthly optimization"],
    result: "Average 3x organic traffic within 6 months",
  },
  {
    number: "07",
    icon: Headphones,
    title: "Managed IT Support",
    tagline: "Your tech team, without the full-time cost.",
    description:
      "A dedicated help desk for when things break, slow down, or confuse your team. We handle hardware, software, troubleshooting, and maintenance so your staff can focus on their actual jobs. Think of us as your outsourced IT department.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700&q=80",
    items: [
      "Help desk & remote troubleshooting",
      "On-site support when needed",
      "Hardware procurement & setup",
      "Software licensing & management",
      "Network monitoring & maintenance",
      "Regular health checks & updates",
    ],
    process: ["Onboarding", "Ticket system setup", "SLA agreement", "Proactive monitoring"],
    result: "4-hour average response time, 95% first-call resolution",
  },
];

export default function ServicesPage() {
  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="relative section-padding pt-32 pb-20 bg-slate-900 overflow-hidden">
        {/* Background elements */}
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
        <motion.div
          animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-[10%] w-64 h-64 bg-accent/10 rounded-full blur-3xl"
        />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white" />

        <div className="relative max-w-7xl mx-auto">
          <AnimatedSection>
            <span className="text-accent-light text-sm font-semibold tracking-wider uppercase">Our Services</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mt-4 mb-6 leading-tight">
              Everything your business needs,{" "}
              <span className="text-gradient">under one roof.</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
              We don&apos;t just do one thing well — we handle the full picture. Design, development, infrastructure, security, and marketing, all from a team that knows your business inside out.
            </p>
          </AnimatedSection>

          {/* Quick stats */}
          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-3 gap-6 mt-12 max-w-lg">
              {[
                { value: "7", label: "Core Services" },
                { value: "50+", label: "Projects Done" },
                { value: "100%", label: "In-House Team" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="space-y-32">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={0.1}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                    i % 2 !== 0 ? "lg:direction-rtl" : ""
                  }`}
                >
                  {/* Image side */}
                  <div className={`${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                    <div className="relative group">
                      <div className="relative rounded-2xl overflow-hidden shadow-xl">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-[350px] md:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                      </div>
                      {/* Floating number */}
                      <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent rounded-2xl flex items-center justify-center shadow-lg shadow-accent/30">
                        <span className="text-white font-heading font-bold text-xl">{service.number}</span>
                      </div>
                      {/* Result badge */}
                      <div className="absolute -bottom-4 right-4 bg-white rounded-xl px-4 py-3 shadow-lg border border-slate-100">
                        <p className="text-xs text-slate-500 font-medium">{service.result}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content side */}
                  <div className={`${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                    {/* Icon + tagline */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <service.icon size={20} className="text-accent" />
                      </div>
                      <span className="text-sm text-accent font-semibold">{service.tagline}</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
                      {service.title}
                    </h2>

                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed mb-8">
                      {service.description}
                    </p>

                    {/* What's included */}
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">What&apos;s included</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.items.map((item) => (
                          <div key={item} className="flex items-start gap-2">
                            <CheckCircle2 size={16} className="text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-slate-600">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Process steps */}
                    <div className="flex items-center gap-2 flex-wrap">
                      {service.process.map((step, si) => (
                        <div key={step} className="flex items-center gap-2">
                          <span className="px-3 py-1.5 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                            {step}
                          </span>
                          {si < service.process.length - 1 && (
                            <ArrowRight size={12} className="text-slate-300" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-padding bg-canvas overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />
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
