"use client";

import {
  Monitor,
  BarChart3,
  Palette,
  Code2,
  Cloud,
  Shield,
  Megaphone,
  Headphones,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    number: "01",
    icon: Monitor,
    title: "UI/UX & Web Design",
    description:
      "Interfaces and websites designed around how your users actually behave, from first sketch to a production-ready front-end.",
    items: [
      "Wireframes & clickable prototypes",
      "Responsive websites & web apps",
      "Design systems & brand style guides",
      "Ongoing UX audits & improvements",
    ],
  },
  {
    number: "02",
    icon: BarChart3,
    title: "Data Analytics & BI",
    description:
      "We turn scattered spreadsheets and systems into dashboards and reports you can actually make decisions from.",
    items: [
      "Dashboard design & reporting tools",
      "Data cleaning & warehousing",
      "KPI tracking & automated reports",
      "Trend & predictive analysis",
    ],
  },
  {
    number: "03",
    icon: Palette,
    title: "Printing & Branding",
    description:
      "Physical materials produced to match the same identity as your website and social presence.",
    items: [
      "Business cards, letterheads & banners",
      "Branded merchandise & packaging",
      "Large-format & event printing",
      "Logo & brand identity design",
    ],
  },
  {
    number: "04",
    icon: Code2,
    title: "Software Development",
    description:
      "Custom web and mobile applications and internal tools, scoped clearly and handed over with documentation.",
    items: [
      "Custom web & mobile applications",
      "Internal tools & workflow automation",
      "Third-party API integrations",
      "Legacy system modernisation",
    ],
  },
  {
    number: "05",
    icon: Cloud,
    title: "Cloud & Networking",
    description:
      "Cloud migration and office networking so your team can work reliably, wherever they are.",
    items: [
      "Cloud migration & setup",
      "Office & enterprise networking",
      "Server administration",
      "Backup & disaster recovery planning",
    ],
  },
  {
    number: "06",
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Security reviews and training that keep your systems and client data out of the wrong hands.",
    items: [
      "Security audits & vulnerability checks",
      "Staff awareness training",
      "Firewall & endpoint protection",
      "Incident response planning",
    ],
  },
  {
    number: "07",
    icon: Megaphone,
    title: "Digital Marketing & SEO",
    description:
      "Visibility and campaigns that bring the right people to what you've built.",
    items: [
      "Search engine optimisation (SEO)",
      "Social media management",
      "Content & email marketing",
      "Paid campaign management",
    ],
  },
  {
    number: "08",
    icon: Headphones,
    title: "Managed IT Support",
    description:
      "A help desk on call for hardware, software and everyday troubleshooting, so small problems stay small.",
    items: [
      "Help desk & remote troubleshooting",
      "Hardware procurement & setup",
      "Network monitoring & maintenance",
      "Software licensing & updates",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="section-padding pt-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <span className="label-text">Services</span>
            <h1 className="heading-xl mt-4 mb-6">
              Everything your business needs,{" "}
              <span className="text-gradient">under one roof.</span>
            </h1>
            <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
              From first sketch to production-ready front-end, from scattered
              data to clear dashboards — we handle it end to end so nothing
              falls between the cracks.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="space-y-2">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.05}>
                <div className="group glass-card-hover p-8 md:p-10">
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className="hidden md:flex flex-shrink-0 w-14 h-14 rounded-xl bg-accent/10 items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <service.icon
                        size={28}
                        className="text-accent group-hover:scale-110 transition-transform"
                      />
                    </div>

                    <div className="flex-1">
                      {/* Number & Title */}
                      <div className="flex items-baseline gap-4 mb-3">
                        <span className="text-xs text-accent/60 font-mono">
                          {service.number}
                        </span>
                        <h3 className="text-xl md:text-2xl font-heading font-bold text-slate-900 group-hover:text-accent transition-colors">
                          {service.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-slate-500 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Items Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                        {service.items.map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-2 text-sm text-slate-600"
                          >
                            <span className="text-accent">—</span>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
