"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We map your goals, users and constraints before proposing a single solution.",
    details: [
      "Stakeholder & user conversations",
      "Review of existing systems and materials",
      "A written scope and timeline you sign off on",
    ],
    aside:
      "Wireframes, prototypes or data models you can react to before we build anything final.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Wireframes, prototypes or data models you can react to before we build anything final.",
    details: [
      "Wireframes, mockups or dashboard drafts",
      "Structured feedback rounds",
      "A sign-off before production begins",
    ],
    aside:
      "Wireframes, prototypes or data models you can react to before we build anything final.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Development, configuration or production, with regular checkpoints along the way.",
    details: [
      "Development or production sprints",
      "Progress check-ins on an agreed schedule",
      "Internal testing before anything reaches you",
    ],
    aside:
      "Development, configuration or production, with regular checkpoints along the way.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Testing, deployment and handover — with documentation your team can actually use.",
    details: [
      "User acceptance testing",
      "Go-live or delivery",
      "Plain-language documentation & handover",
    ],
    aside:
      "Testing, deployment and handover — with documentation your team can actually use.",
  },
  {
    number: "05",
    title: "Support",
    description:
      "Ongoing maintenance, monitoring and a direct line to us when something needs attention.",
    details: [
      "Scheduled maintenance & monitoring",
      "A direct contact for issues",
      "Reviews as your needs grow",
    ],
    aside:
      "Ongoing maintenance, monitoring and a direct line to us when something needs attention.",
  },
];

export default function ProcessPage() {
  return (
    <div className="page-transition">
      {/* Hero — Interactive Banner */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-20">
        {/* Background image with parallax */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src="https://images.pexels.com/photos/36733293/pexels-photo-36733293.jpeg?auto=compress&cs=tinysrgb&w=1600&dpr=1"
            alt="African business team in strategy meeting"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Animated gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/80 to-primary-dark/40" />
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-[10%] w-72 h-72 bg-accent/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -25, 0], y: [0, 15, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-[5%] w-64 h-64 bg-accent/10 rounded-full blur-3xl"
        />

        {/* World map watermark */}
        <div className="absolute inset-0 world-map-bg" />

        {/* Floating step badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute top-[22%] right-[8%] hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 shadow-xl"
          >
            <div className="text-3xl font-heading font-bold text-accent-light">5</div>
            <div className="text-xs text-white/70 mt-1">Clear Stages</div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="absolute bottom-[18%] right-[14%] hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 shadow-xl"
          >
            <div className="text-3xl font-heading font-bold text-accent-light">100%</div>
            <div className="text-xs text-white/70 mt-1">Transparency</div>
          </motion.div>
        </motion.div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <AnimatedSection>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 border border-accent/50 text-accent-light text-xs uppercase tracking-wider rounded-full mb-6"
            >
              Process
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight text-white mb-6">
              How a project runs,{" "}
              <span className="text-accent-light">start to finish.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              The same five stages whether we&apos;re shipping a dashboard, a website, a network upgrade or a print run — so you always know what&apos;s next.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              {steps.map((step) => (
                <span
                  key={step.number}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium rounded-full"
                >
                  {step.number} — {step.title}
                </span>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-b from-transparent to-white" />
      </section>

      {/* Steps */}
      <section className="pb-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/30 to-transparent hidden md:block" />

            <div className="space-y-16">
              {steps.map((step, i) => (
                <AnimatedSection key={step.number} delay={i * 0.1}>
                  <div className="relative grid grid-cols-1 md:grid-cols-[100px_1fr_1fr] gap-8 items-start">
                    {/* Number */}
                    <div className="flex items-center gap-4 md:flex-col md:items-center">
                      <div className="relative z-10 w-10 h-10 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center">
                        <span className="text-accent-dark text-xs font-bold font-mono">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-4">
                        {step.title}
                      </h3>
                      <ul className="space-y-2">
                        {step.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex items-start gap-2 text-slate-500 text-sm"
                          >
                            <span className="text-accent mt-1">—</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Aside */}
                    <div className="hidden md:block">
                      <p className="text-slate-500 text-sm leading-relaxed italic border-l-2 border-accent/20 pl-4">
                        {step.aside}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
