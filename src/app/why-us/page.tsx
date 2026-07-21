"use client";

import { ArrowRight, Minimize2, MessageSquare, Shield, DollarSign, Wrench, Globe } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const values = [
  {
    icon: Minimize2,
    title: "Fewer handoffs",
    description:
      "Design, data and print sit under one roof, so your brand stays consistent everywhere it shows up.",
  },
  {
    icon: MessageSquare,
    title: "Straight answers",
    description:
      "Clear scopes, honest timelines, and a point of contact who actually picks up the phone.",
  },
  {
    icon: Shield,
    title: "Built to stay secure",
    description:
      "Every project is reviewed for security and reliability, not just how it looks on launch day.",
  },
  {
    icon: DollarSign,
    title: "Fair, transparent pricing",
    description:
      "You get a written quote before work starts, with no hidden line items added later.",
  },
  {
    icon: Wrench,
    title: "Support that stays",
    description:
      "Our involvement doesn't end at launch — we plan for maintenance from day one.",
  },
  {
    icon: Globe,
    title: "Standards that travel",
    description:
      "We build to practices that hold up whether your next audience is local or global.",
  },
];

export default function WhyUsPage() {
  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="section-padding pt-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent" />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <span className="label-text">Why Touchbright</span>
              <h1 className="heading-xl mt-4 mb-6">
                Built to make technology feel{" "}
                <span className="text-gradient">simple.</span>
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                We started Touchbright Consults because too many businesses were
                being sold pieces — a website here, a report there — with no one
                accountable for how they fit together.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-accent hover:bg-accent-light text-white font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-accent/25"
              >
                Start a conversation
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
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

      {/* Values Grid */}
      <section className="section-padding bg-canvas">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <span className="label-text">What That Looks Like</span>
            <h2 className="heading-lg mt-4 mb-12">
              Six things we hold ourselves to.
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <div className="glass-card-hover p-8 h-full group">
                  <value.icon
                    size={28}
                    className="text-accent mb-5 group-hover:scale-110 transition-transform"
                  />
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What Changes */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <span className="label-text">The Difference</span>
            <h2 className="heading-lg mt-4 mb-8">
              What changes when you have the{" "}
              <span className="text-gradient">right system.</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <AnimatedSection direction="left" delay={0.1}>
              <div className="glass-card p-8">
                <h4 className="text-red-500 font-semibold mb-4 text-sm uppercase tracking-wider">
                  Without a system
                </h4>
                <ul className="space-y-3">
                  {[
                    "Scattered information across WhatsApp, email, spreadsheets",
                    "Staff asking the same questions repeatedly",
                    "No visibility into what's actually happening",
                    "Reports that take hours to put together",
                    "Missed deadlines and forgotten tasks",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-slate-500 text-sm">
                      <span className="text-red-500 mt-0.5">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="glass-card p-8 border-accent/20">
                <h4 className="text-accent font-semibold mb-4 text-sm uppercase tracking-wider">
                  With the right system
                </h4>
                <ul className="space-y-3">
                  {[
                    "One source of truth everyone can access",
                    "Automated workflows that reduce manual work",
                    "Real-time dashboards showing business health",
                    "Reports generated in seconds, not hours",
                    "Clear accountability and task tracking",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-slate-600 text-sm">
                      <span className="text-accent mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
