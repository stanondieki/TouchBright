"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const categories = ["All", "Web", "Data", "Software", "Branding"];

const projects = [
  {
    id: 1,
    title: "Retail Inventory Dashboard",
    client: "Nairobi Fashion House",
    category: "Data",
    image: "https://images.pexels.com/photos/36733293/pexels-photo-36733293.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
    description: "Real-time inventory tracking across 3 locations with automated reorder alerts.",
    tags: ["React", "PostgreSQL", "Charts"],
    metrics: { label: "Stockouts reduced", value: "80%" },
  },
  {
    id: 2,
    title: "Restaurant Ordering Platform",
    client: "Kampala Eats",
    category: "Web",
    image: "https://images.pexels.com/photos/5668778/pexels-photo-5668778.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
    description: "Online ordering system with table reservations and payment integration.",
    tags: ["Next.js", "Stripe", "Supabase"],
    metrics: { label: "Online orders", value: "1.2k/mo" },
  },
  {
    id: 3,
    title: "School Management System",
    client: "Bright Future Academy",
    category: "Software",
    image: "/images/kipm.png",
    description: "Complete school management: grades, attendance, fees, and parent portal.",
    tags: ["Vue", "Node.js", "MySQL"],
    metrics: { label: "Admin time saved", value: "15hrs/wk" },
  },
  {
    id: 4,
    title: "Tech Startup Brand Identity",
    client: "PayFlow Africa",
    category: "Branding",
    image: "https://images.pexels.com/photos/5749152/pexels-photo-5749152.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
    description: "Logo, brand guidelines, business cards, and marketing collateral design.",
    tags: ["Branding", "Print", "Design"],
    metrics: { label: "Brand recall", value: "+45%" },
  },
  {
    id: 5,
    title: "Logistics Tracking Platform",
    client: "FastTrack Logistics",
    category: "Software",
    image: "https://images.pexels.com/photos/30689114/pexels-photo-30689114.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
    description: "GPS tracking dashboard for fleet management with route optimization.",
    tags: ["React", "Mapbox", "Python"],
    metrics: { label: "Delivery efficiency", value: "+32%" },
  },
  {
    id: 6,
    title: "Healthcare Analytics Portal",
    client: "MediCare Clinics",
    category: "Data",
    image: "https://images.pexels.com/photos/7191982/pexels-photo-7191982.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
    description: "Patient outcome analytics with HIPAA-compliant data visualization.",
    tags: ["D3.js", "FastAPI", "AWS"],
    metrics: { label: "Reporting time", value: "-90%" },
  },
  {
    id: 7,
    title: "E-commerce Website Redesign",
    client: "Zuri Crafts",
    category: "Web",
    image: "https://images.pexels.com/photos/6893916/pexels-photo-6893916.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
    description: "Complete redesign with mobile-first approach and checkout optimization.",
    tags: ["Next.js", "Shopify", "Tailwind"],
    metrics: { label: "Conversion rate", value: "+58%" },
  },
  {
    id: 8,
    title: "Corporate Annual Report",
    client: "Savannah Holdings",
    category: "Branding",
    image: "https://images.pexels.com/photos/6621022/pexels-photo-6621022.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1",
    description: "32-page annual report design with data infographics and print management.",
    tags: ["InDesign", "Print", "Data Viz"],
    metrics: { label: "Stakeholder satisfaction", value: "96%" },
  },
];

const testimonials = [
  {
    name: "James Mwangi",
    role: "Operations Director",
    company: "Nairobi Fashion House",
    image: "https://images.pexels.com/photos/29387556/pexels-photo-29387556.jpeg?auto=compress&cs=tinysrgb&w=200&dpr=1",
    rating: 5,
    quote:
      "Touchbright built our inventory dashboard from scratch. We went from guessing stock levels to seeing everything in real-time. The team was responsive, honest about timelines, and delivered exactly what they promised.",
  },
  {
    name: "Sarah Nakanwagi",
    role: "Founder",
    company: "Kampala Eats",
    image: "https://images.pexels.com/photos/15227424/pexels-photo-15227424.jpeg?auto=compress&cs=tinysrgb&w=200&dpr=1",
    rating: 5,
    quote:
      "They didn't just build a website — they understood our business. The ordering platform has transformed how we operate. Online orders went from zero to over a thousand per month within three months.",
  },
  {
    name: "David Okello",
    role: "Principal",
    company: "Bright Future Academy",
    image: "https://images.pexels.com/photos/34592823/pexels-photo-34592823.jpeg?auto=compress&cs=tinysrgb&w=200&dpr=1",
    rating: 5,
    quote:
      "The school management system saves us 15 hours every week. Parents can check grades and pay fees online. What I appreciate most is that when something needs fixing, I call the same person who built it.",
  },
  {
    name: "Aisha Mohammed",
    role: "CEO",
    company: "PayFlow Africa",
    image: "https://images.pexels.com/photos/34769120/pexels-photo-34769120.jpeg?auto=compress&cs=tinysrgb&w=200&dpr=1",
    rating: 5,
    quote:
      "Our brand identity was all over the place before Touchbright. They created a cohesive look that works everywhere — from our app to our business cards. Professional, creative, and genuinely invested in our success.",
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const handleHash = () => {
      if (typeof window === "undefined") return;
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;

      const validCategories = ["Web", "Data", "Software", "Branding"];
      if (validCategories.includes(hash)) {
        setActiveCategory(hash);
      }

      setTimeout(() => {
        const el = document.getElementById("projects");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 150);
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="section-padding pt-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <span className="label-text">Our Work</span>
            <h1 className="heading-xl mt-4 mb-6">
              Projects we&apos;re{" "}
              <span className="text-gradient">proud of.</span>
            </h1>
            <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
              A selection of work across web, data, software, and branding. Every project here was built with the same standard — clear scope, honest timeline, real results.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter + Projects Grid */}
      <section id="projects" className="pb-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Filter buttons */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-sm font-medium rounded-full transition-all ${
                  activeCategory === cat
                    ? "bg-accent text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="group glass-card-hover overflow-hidden cursor-pointer"
                >
                  {/* Project image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-accent-dark">
                      {project.category}
                    </div>
                  </div>

                  {/* Project content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-lg font-heading font-bold text-slate-900">
                        {project.title}
                      </h3>
                      <ArrowUpRight
                        size={18}
                        className="text-slate-400 group-hover:text-accent transition-colors flex-shrink-0"
                      />
                    </div>
                    <p className="text-xs text-slate-400 mb-3">{project.client}</p>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-slate-100 text-slate-500 text-xs rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Metric */}
                    <div className="flex items-center gap-2 pt-4 border-t border-slate-100">
                      <span className="text-2xl font-bold text-accent">
                        {project.metrics.value}
                      </span>
                      <span className="text-xs text-slate-500">
                        {project.metrics.label}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section id="testimonials" className="section-padding bg-canvas scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="label-text">Testimonials</span>
              <h2 className="heading-lg mt-4">
                What clients{" "}
                <span className="text-gradient">say about us.</span>
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4 }}
                  className="glass-card p-8 md:p-12"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: testimonials[currentTestimonial].rating }).map((_, i) => (
                      <Star key={i} size={18} className="text-amber fill-amber" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-8 italic">
                    &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-slate-900">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-sm text-slate-500">
                        {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === currentTestimonial
                        ? "w-8 bg-accent"
                        : "w-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <span className="label-text">Let&apos;s Talk</span>
            <h2 className="heading-lg mt-4 mb-6">
              Your project could be{" "}
              <span className="text-gradient">next.</span>
            </h2>
            <p className="text-slate-500 mb-10 max-w-xl mx-auto">
              See how we&apos;d approach what you&apos;re building — no pressure, no jargon.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent hover:bg-accent-light text-white font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-accent/25"
            >
              Start a conversation
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
