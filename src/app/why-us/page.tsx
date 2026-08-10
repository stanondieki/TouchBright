"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Minimize2, MessageSquare, Shield, DollarSign, Wrench, Globe, Quote } from "lucide-react";
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

const slides = [
  {
    image: "https://images.pexels.com/photos/30689114/pexels-photo-30689114.jpeg?auto=compress&cs=tinysrgb&w=1600&dpr=1",
    caption: "Collaborating in our Lagos office",
  },
  {
    image: "https://images.pexels.com/photos/3861077/pexels-photo-3861077.jpeg?auto=compress&cs=tinysrgb&w=1600&dpr=1",
    caption: "Mentoring the next generation of talent",
  },
  {
    image: "https://images.pexels.com/photos/5668778/pexels-photo-5668778.jpeg?auto=compress&cs=tinysrgb&w=1600&dpr=1",
    caption: "Data-driven strategy sessions",
  },
  {
    image: "https://images.pexels.com/photos/7971550/pexels-photo-7971550.jpeg?auto=compress&cs=tinysrgb&w=1600&dpr=1",
    caption: "Building solutions that work",
  },
  {
    image: "https://images.pexels.com/photos/9301763/pexels-photo-9301763.jpeg?auto=compress&cs=tinysrgb&w=1600&dpr=1",
    caption: "Brainstorming your next project",
  },
];

const testimonials = [
  {
    quote: "They didn't just build a website — they understood our business. The ordering platform has transformed how we operate.",
    name: "Sarah Nakanwagi",
    role: "Founder, Kampala Eats",
    image: "https://images.pexels.com/photos/15227424/pexels-photo-15227424.jpeg?auto=compress&cs=tinysrgb&w=200&dpr=1",
  },
  {
    quote: "The school management system saves us 15 hours every week. When something needs fixing, I call the same person who built it.",
    name: "David Okello",
    role: "Principal, Bright Future Academy",
    image: "https://images.pexels.com/photos/34592823/pexels-photo-34592823.jpeg?auto=compress&cs=tinysrgb&w=200&dpr=1",
  },
  {
    quote: "Our brand identity was all over the place before Touchbright. They created a cohesive look that works everywhere.",
    name: "Aisha Mohammed",
    role: "CEO, PayFlow Africa",
    image: "https://images.pexels.com/photos/34769120/pexels-photo-34769120.jpeg?auto=compress&cs=tinysrgb&w=200&dpr=1",
  },
];

const lineData = [
  { year: "2021", value: 12 },
  { year: "2022", value: 18 },
  { year: "2023", value: 25 },
  { year: "2024", value: 38 },
  { year: "2025", value: 50 },
];

const barData = [
  { label: "Web", value: 98 },
  { label: "Software", value: 95 },
  { label: "Data", value: 92 },
  { label: "Branding", value: 96 },
  { label: "Cloud", value: 94 },
];

const pieData = [
  { label: "Web & UI/UX", value: 35, color: "#10b981" },
  { label: "Software Dev", value: 28, color: "#34d399" },
  { label: "Data & Dashboards", value: 20, color: "#6ee7b7" },
  { label: "Branding & Print", value: 12, color: "#a7f3d0" },
  { label: "Cloud & IT", value: 5, color: "#d1fae5" },
];

function LineChart() {
  const w = 320;
  const h = 160;
  const pad = 30;
  const maxVal = Math.max(...lineData.map((d) => d.value));
  const points = lineData.map((d, i) => {
    const x = pad + (i / (lineData.length - 1)) * (w - pad * 2);
    const y = h - pad - (d.value / maxVal) * (h - pad * 2);
    return { x, y, ...d };
  });
  const pathD = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  const areaD = `${pathD} L ${points[points.length - 1].x} ${h - pad} L ${points[0].x} ${h - pad} Z`;
  const pathLength = 600;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto">
      <defs>
        <linearGradient id="lineArea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Grid lines */}
      {[0, 0.25, 0.5, 0.75, 1].map((t) => (
        <line
          key={t}
          x1={pad}
          x2={w - pad}
          y1={h - pad - t * (h - pad * 2)}
          y2={h - pad - t * (h - pad * 2)}
          stroke="rgba(15,23,42,0.06)"
          strokeWidth="1"
        />
      ))}
      {/* Area fill */}
      <motion.path
        d={areaD}
        fill="url(#lineArea)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      {/* Line */}
      <motion.path
        d={pathD}
        fill="none"
        stroke="#10b981"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={pathLength}
        initial={{ strokeDashoffset: pathLength }}
        whileInView={{ strokeDashoffset: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      {/* Points + labels */}
      {points.map((p, i) => (
        <g key={p.year}>
          <motion.circle
            cx={p.x}
            cy={p.y}
            r="4"
            fill="#10b981"
            stroke="#0f172a"
            strokeWidth="2"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 + i * 0.1, duration: 0.3 }}
          />
          <text x={p.x} y={h - pad + 16} textAnchor="middle" fill="rgba(15,23,42,0.4)" fontSize="10">
            {p.year}
          </text>
          <motion.text
            x={p.x}
            y={p.y - 10}
            textAnchor="middle"
            fill="#34d399"
            fontSize="11"
            fontWeight="bold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 + i * 0.1 }}
          >
            {p.value}
          </motion.text>
        </g>
      ))}
    </svg>
  );
}

function BarChart() {
  const w = 320;
  const h = 160;
  const pad = 30;
  const barW = (w - pad * 2) / barData.length - 8;
  const maxVal = 100;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto">
      <defs>
        <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      {/* Grid lines */}
      {[0, 25, 50, 75, 100].map((t) => (
        <g key={t}>
          <line
            x1={pad}
            x2={w - pad}
            y1={h - pad - (t / maxVal) * (h - pad * 2)}
            y2={h - pad - (t / maxVal) * (h - pad * 2)}
            stroke="rgba(15,23,42,0.06)"
            strokeWidth="1"
          />
          <text x={pad - 6} y={h - pad - (t / maxVal) * (h - pad * 2) + 3} textAnchor="end" fill="rgba(15,23,42,0.3)" fontSize="8">
            {t}
          </text>
        </g>
      ))}
      {/* Bars */}
      {barData.map((d, i) => {
        const x = pad + i * ((w - pad * 2) / barData.length) + 4;
        const barH = (d.value / maxVal) * (h - pad * 2);
        const y = h - pad - barH;
        return (
          <g key={d.label}>
            <motion.rect
              x={x}
              y={y}
              width={barW}
              height={barH}
              rx="4"
              fill="url(#barGrad)"
              initial={{ height: 0, y: h - pad }}
              whileInView={{ height: barH, y }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
            />
            <motion.text
              x={x + barW / 2}
              y={y - 6}
              textAnchor="middle"
              fill="#34d399"
              fontSize="10"
              fontWeight="bold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              {d.value}%
            </motion.text>
            <text x={x + barW / 2} y={h - pad + 16} textAnchor="middle" fill="rgba(15,23,42,0.4)" fontSize="9">
              {d.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function PieChart() {
  const size = 180;
  const cx = size / 2;
  const cy = size / 2;
  const r = 70;
  const innerR = 40;
  const total = pieData.reduce((s, d) => s + d.value, 0);
  let cumAngle = 0;

  const segments = pieData.map((d) => {
    const angle = (d.value / total) * 360;
    const startAngle = cumAngle;
    const endAngle = cumAngle + angle;
    cumAngle = endAngle;

    const startRad = (startAngle - 90) * (Math.PI / 180);
    const endRad = (endAngle - 90) * (Math.PI / 180);

    const x1 = cx + r * Math.cos(startRad);
    const y1 = cy + r * Math.sin(startRad);
    const x2 = cx + r * Math.cos(endRad);
    const y2 = cy + r * Math.sin(endRad);
    const x3 = cx + innerR * Math.cos(endRad);
    const y3 = cy + innerR * Math.sin(endRad);
    const x4 = cx + innerR * Math.cos(startRad);
    const y4 = cy + innerR * Math.sin(startRad);

    const largeArc = angle > 180 ? 1 : 0;

    const path = `M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerR} ${innerR} 0 ${largeArc} 0 ${x4} ${y4} Z`;

    return { path, ...d, midAngle: (startAngle + endAngle) / 2 };
  });

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="w-44 h-44 md:w-48 md:h-48">
      {segments.map((seg, i) => (
        <motion.path
          key={seg.label}
          d={seg.path}
          fill={seg.color}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12, duration: 0.5, ease: "easeOut" }}
          style={{ transformOrigin: "center" }}
          whileHover={{ scale: 1.05 }}
        />
      ))}
      {/* Center label */}
      <text x={cx} y={cy - 4} textAnchor="middle" fill="#0f172a" fontSize="22" fontWeight="bold">
        {total}%
      </text>
      <text x={cx} y={cy + 12} textAnchor="middle" fill="rgba(15,23,42,0.4)" fontSize="9">
        Total
      </text>
    </svg>
  );
}

function PieChartLegend() {
  return (
    <div className="space-y-3">
      {pieData.map((d, i) => (
        <motion.div
          key={d.label}
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="flex items-center justify-between group"
        >
          <div className="flex items-center gap-3">
            <span
              className="w-3 h-3 rounded-sm transition-transform group-hover:scale-125"
              style={{ backgroundColor: d.color }}
            />
            <span className="text-slate-700 text-sm">{d.label}</span>
          </div>
          <span className="text-slate-400 text-xs font-mono">{d.value}%</span>
        </motion.div>
      ))}
    </div>
  );
}

export default function WhyUsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(testimonialInterval);
  }, []);

  return (
    <div className="page-transition">
      {/* Hero — Interactive Slideshow Banner */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden pt-20">
        {/* Slideshow background */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].caption}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/80 to-primary-dark/40" />

        {/* World map watermark */}
        <div className="absolute inset-0 world-map-bg" />

        {/* Animated gradient orbs */}
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

        {/* Slide caption — bottom right */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute bottom-8 right-8 hidden md:flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full"
          >
            <span className="w-2 h-2 bg-accent-light rounded-full animate-pulse" />
            <span className="text-white/80 text-sm">{slides[currentSlide].caption}</span>
          </motion.div>
        </AnimatePresence>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentSlide ? "w-8 bg-accent-light" : "w-1.5 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <AnimatedSection>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 border border-accent/50 text-accent-light text-xs uppercase tracking-wider rounded-full mb-6"
            >
              Why Touchbright
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight text-white mb-6">
              Built to make technology feel{" "}
              <span className="text-accent-light">simple.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              We started Touchbright Consults because too many businesses were being sold pieces — a website here, a report there — with no one accountable for how they fit together.
            </p>
            <div className="flex flex-wrap items-center gap-5 mt-10 pb-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-white font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-accent/25"
              >
                Start a conversation
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/40 hover:border-accent/60 hover:bg-white/10 text-white font-semibold rounded-full transition-all duration-300"
              >
                See our work
              </Link>
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-b from-transparent to-white/80 z-10" />
      </section>

      {/* Insight Graphs */}
      <section id="insights" className="relative py-20 md:py-28 bg-white overflow-hidden scroll-mt-20">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-[10%] w-72 h-72 bg-accent/8 rounded-full blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-accent-dark text-sm font-semibold tracking-wider uppercase">
                By the Numbers
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mt-4">
                Results that speak for themselves.
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Card 1 — Animated Line Chart */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-8"
            >
              <h3 className="text-slate-900 font-heading font-bold text-lg mb-1">Project Growth</h3>
              <p className="text-slate-400 text-xs mb-6">Projects delivered per year</p>
              <LineChart />
            </motion.div>

            {/* Card 2 — Animated Bar Chart */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-8"
            >
              <h3 className="text-slate-900 font-heading font-bold text-lg mb-1">Client Satisfaction</h3>
              <p className="text-slate-400 text-xs mb-6">By service category (%)</p>
              <BarChart />
            </motion.div>
          </div>

          {/* Card 3 — Pie Chart (full width) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-slate-50 border border-slate-200 rounded-2xl p-8 mt-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 items-center">
              <div>
                <h3 className="text-slate-900 font-heading font-bold text-lg mb-1">Service Mix</h3>
                <p className="text-slate-400 text-xs mb-6">Distribution of work we deliver</p>
                <PieChartLegend />
              </div>
              <div className="flex justify-center">
                <PieChart />
              </div>
            </div>
          </motion.div>

          {/* Bottom row — Big number cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {[
              { value: "50+", label: "Projects delivered", sub: "Across 4 countries" },
              { value: "98%", label: "Client satisfaction", sub: "Based on feedback" },
              { value: "5yr", label: "Avg. partnership", sub: "Long-term clients" },
              { value: "24/7", label: "Support available", sub: "Always reachable" },
            ].map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-center"
              >
                <div className="text-3xl font-heading font-bold text-accent">{card.value}</div>
                <div className="text-slate-700 text-sm mt-1">{card.label}</div>
                <div className="text-slate-400 text-xs mt-0.5">{card.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story + Image */}
      <section id="story" className="section-padding bg-white relative scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="label-text">Our Story</span>
              <h2 className="heading-lg mt-4 mb-6">
                One team.{" "}
                <span className="text-gradient">Accountable for all of it.</span>
              </h2>
              <div className="space-y-5 text-slate-600 leading-relaxed">
                <p>
                  Touchbright Consults works across design, data, software and print, so a single team stays accountable for how your website, your dashboards, your marketing and your printed materials actually look and feel together.
                </p>
                <p>
                  We keep scopes specific, timelines honest, and communication direct — no ticket queues, no disappearing after launch. If something breaks or needs adjusting, you talk to the people who built it.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Design", "Data", "Software", "Print", "Branding"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-slate-100 text-slate-700 text-sm font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img
                    src="https://images.pexels.com/photos/36551042/pexels-photo-36551042.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=1"
                    alt="African professional woman in office"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent" />
                </motion.div>
                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-slate-100 hidden md:block"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                      <Shield size={24} className="text-accent" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Secure & Reliable</div>
                      <div className="text-xs text-slate-500">Built to last</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section id="values" className="section-padding bg-canvas relative scroll-mt-20">
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
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card-hover p-8 h-full group"
                >
                  <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                    <value.icon
                      size={28}
                      className="text-accent group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What Changes — with image */}
      <section id="changes" className="section-padding bg-white relative scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
            {/* Left: image */}
            <AnimatedSection direction="left">
              <div className="relative lg:sticky lg:top-28">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img
                    src="https://images.pexels.com/photos/36733293/pexels-photo-36733293.jpeg?auto=compress&cs=tinysrgb&w=700&dpr=1"
                    alt="African business team collaborating"
                    className="w-full h-[450px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 to-transparent" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-5 -right-5 bg-accent text-white rounded-2xl shadow-xl px-5 py-4 hidden md:block"
                >
                  <div className="text-2xl font-heading font-bold">5 stages</div>
                  <div className="text-xs text-white/80 mt-1">Clear process</div>
                </motion.div>
              </div>
            </AnimatedSection>

            {/* Right: comparison */}
            <div>
              <AnimatedSection>
                <span className="label-text">The Difference</span>
                <h2 className="heading-lg mt-4 mb-8">
                  What changes when you have the{" "}
                  <span className="text-gradient">right system.</span>
                </h2>
              </AnimatedSection>

              <div className="space-y-4">
                <AnimatedSection direction="right" delay={0.1}>
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
          </div>
        </div>
      </section>

      {/* Testimonials — auto-rotating */}
      <section id="testimonials" className="section-padding bg-slate-900 relative overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 world-map-bg" />
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-[10%] w-72 h-72 bg-accent/15 rounded-full blur-3xl"
        />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="text-accent-light text-sm font-semibold tracking-wider uppercase">
              Client Voices
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mt-4 mb-12">
              Don&apos;t take our word for it.
            </h2>
          </AnimatedSection>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Quote size={48} className="text-accent/30 mx-auto mb-6" />
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light mb-8">
                {testimonials[currentTestimonial].quote}
              </p>
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-accent/30"
                />
                <div className="text-left">
                  <div className="text-white font-semibold">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-white/50 text-sm">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentTestimonial(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === currentTestimonial ? "w-8 bg-accent-light" : "w-1.5 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="heading-lg mb-6">
              Ready to work with a team that{" "}
              <span className="text-gradient">stays?</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Book a consultation and we&apos;ll walk through what you need — no pressure, no jargon.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-white font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-accent/25 text-lg"
            >
              Start a conversation
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
