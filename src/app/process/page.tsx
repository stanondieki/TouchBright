"use client";

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
      {/* Hero */}
      <section className="section-padding pt-32 bg-white relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber/8 rounded-full blur-3xl opacity-50" />

        <div className="relative max-w-7xl mx-auto">
          <AnimatedSection>
            <span className="label-text">Process</span>
            <h1 className="heading-xl mt-4 mb-6">
              How a project runs,{" "}
              <span className="text-gradient-amber">start to finish.</span>
            </h1>
            <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
              The same five stages whether we&apos;re shipping a dashboard, a
              website, a network upgrade or a print run — so you always know
              what&apos;s next.
            </p>
          </AnimatedSection>
        </div>
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
