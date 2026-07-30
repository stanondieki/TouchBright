"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const serviceOptions = [
  "UI/UX & Web Design",
  "Graphic Design",
  "Software Development",
  "Cloud & Networking",
  "Cybersecurity",
  "Digital Marketing & SEO",
  "Managed IT Support",
];

const contactInfo = [
  {
    icon: Phone,
    label: "Call or WhatsApp",
    value: "+254 701 922 375",
    href: "https://wa.me/254701922375",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: Mail,
    label: "Email",
    value: "touchbrightconsults@gmail.com",
    href: "mailto:touchbrightconsults@gmail.com",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nairobi, Kenya",
    href: null,
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within one business day",
    href: null,
    color: "bg-amber-500/10 text-amber-600",
  },
];

const reasons = [
  "No commitment — just a conversation",
  "We reply within 24 hours",
  "Free project scoping & estimate",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", service: "", budget: "", message: "" });
    }, 5000);
  };

  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
        <div
          className="absolute inset-0 world-map-bg"
        />
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-[10%] w-72 h-72 bg-accent/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-[5%] w-56 h-56 bg-accent/10 rounded-full blur-3xl"
        />
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-b from-transparent to-canvas" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight">
              Let&apos;s talk about your{" "}
              <span className="text-accent-light">project.</span>
            </h1>
            <p className="text-slate-300 text-lg mt-4 max-w-xl leading-relaxed">
              Whether you have a detailed brief or just a rough idea — we&apos;re ready to listen. Let&apos;s figure out the best path forward, together.
            </p>
            <div className="flex items-center gap-2 mt-6 text-sm text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-accent-light">Contact</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-canvas">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left Column - Info */}
            <div className="lg:col-span-2 space-y-8">
              <AnimatedSection direction="left">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-2">
                  Get in <span className="text-accent">touch</span>
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  Have a project in mind? Fill out the form or reach us directly through any of the channels below.
                </p>

                {/* Contact cards */}
                <div className="space-y-4">
                  {contactInfo.map((info, i) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      whileHover={{ x: 4, scale: 1.02 }}
                      className="group"
                    >
                      {info.href ? (
                        <a
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 bg-white hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all"
                        >
                          <div className={`w-11 h-11 rounded-xl ${info.color} flex items-center justify-center flex-shrink-0`}>
                            <info.icon size={20} />
                          </div>
                          <div className="min-w-0">
                            <p className="text-[10px] text-slate-400 uppercase tracking-wider">
                              {info.label}
                            </p>
                            <p className="text-sm font-semibold text-slate-900 group-hover:text-accent transition-colors truncate">
                              {info.value}
                            </p>
                          </div>
                          <ArrowRight size={14} className="text-slate-300 group-hover:text-accent ml-auto flex-shrink-0 transition-colors" />
                        </a>
                      ) : (
                        <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 bg-white">
                          <div className={`w-11 h-11 rounded-xl ${info.color} flex items-center justify-center flex-shrink-0`}>
                            <info.icon size={20} />
                          </div>
                          <div className="min-w-0">
                            <p className="text-[10px] text-slate-400 uppercase tracking-wider">
                              {info.label}
                            </p>
                            <p className="text-sm font-semibold text-slate-900 truncate">
                              {info.value}
                            </p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Why reach out */}
                <div className="mt-8 p-5 rounded-2xl bg-accent/5 border border-accent/10">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles size={16} className="text-accent" />
                    <span className="text-sm font-semibold text-slate-900">Why reach out?</span>
                  </div>
                  <div className="space-y-2">
                    {reasons.map((reason) => (
                      <div key={reason} className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-accent flex-shrink-0" />
                        <span className="text-xs text-slate-600">{reason}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick actions */}
                <div className="flex flex-wrap gap-3 mt-6">
                  <motion.a
                    href="https://wa.me/254701922375"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white text-sm font-semibold rounded-full transition-all shadow-sm hover:shadow-md"
                  >
                    <MessageCircle size={16} />
                    WhatsApp
                  </motion.a>
                  <motion.a
                    href="mailto:touchbrightconsults@gmail.com"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-300 hover:border-accent/50 text-slate-700 text-sm font-semibold rounded-full transition-all hover:bg-white"
                  >
                    <Mail size={16} />
                    Email Us
                  </motion.a>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="right" delay={0.2}>
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="bg-white rounded-2xl border border-slate-200 shadow-xl p-12 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                        className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6"
                      >
                        <CheckCircle2 size={40} className="text-accent" />
                      </motion.div>
                      <h3 className="text-2xl font-heading font-bold text-slate-900 mb-2">
                        Message sent!
                      </h3>
                      <p className="text-slate-500 text-sm">
                        We&apos;ll get back to you within 24 hours. Check your inbox!
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      onSubmit={handleSubmit}
                      className="bg-white rounded-2xl border border-slate-200 shadow-xl p-8 md:p-10 space-y-6"
                    >
                      <div className="mb-2">
                        <h3 className="text-xl font-heading font-bold text-slate-900">
                          Tell us about your project
                        </h3>
                        <p className="text-xs text-slate-400 mt-1">
                          Fill in the details below and we&apos;ll get back to you shortly.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="relative">
                          <label className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-2 block">
                            Full Name
                          </label>
                          <input
                            type="text"
                            placeholder="John Doe"
                            value={formData.name}
                            onFocus={() => setFocusedField("name")}
                            onBlur={() => setFocusedField(null)}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            className={`w-full bg-slate-50 border rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white transition-all ${
                              focusedField === "name"
                                ? "border-accent shadow-sm shadow-accent/10"
                                : "border-slate-200"
                            }`}
                            required
                          />
                        </div>
                        <div className="relative">
                          <label className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-2 block">
                            Email Address
                          </label>
                          <input
                            type="email"
                            placeholder="you@company.com"
                            value={formData.email}
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField(null)}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            className={`w-full bg-slate-50 border rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white transition-all ${
                              focusedField === "email"
                                ? "border-accent shadow-sm shadow-accent/10"
                                : "border-slate-200"
                            }`}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-2 block">
                            Service Needed
                          </label>
                          <select
                            value={formData.service}
                            onFocus={() => setFocusedField("service")}
                            onBlur={() => setFocusedField(null)}
                            onChange={(e) =>
                              setFormData({ ...formData, service: e.target.value })
                            }
                            className={`w-full bg-slate-50 border rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:bg-white transition-all appearance-none cursor-pointer ${
                              focusedField === "service"
                                ? "border-accent shadow-sm shadow-accent/10"
                                : "border-slate-200"
                            }`}
                            required
                          >
                            <option value="">Select a service</option>
                            {serviceOptions.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-2 block">
                            Budget Range
                          </label>
                          <select
                            value={formData.budget}
                            onFocus={() => setFocusedField("budget")}
                            onBlur={() => setFocusedField(null)}
                            onChange={(e) =>
                              setFormData({ ...formData, budget: e.target.value })
                            }
                            className={`w-full bg-slate-50 border rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:bg-white transition-all appearance-none cursor-pointer ${
                              focusedField === "budget"
                                ? "border-accent shadow-sm shadow-accent/10"
                                : "border-slate-200"
                            }`}
                          >
                            <option value="">Select budget (optional)</option>
                            <option value="under-50k">Under KES 50,000</option>
                            <option value="50k-150k">KES 50,000 – 150,000</option>
                            <option value="150k-500k">KES 150,000 – 500,000</option>
                            <option value="500k+">KES 500,000+</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-2 block">
                          Project Details
                        </label>
                        <textarea
                          placeholder="Tell us about your project — goals, timeline, anything helpful..."
                          rows={5}
                          value={formData.message}
                          onFocus={() => setFocusedField("message")}
                          onBlur={() => setFocusedField(null)}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          className={`w-full bg-slate-50 border rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white transition-all resize-none ${
                            focusedField === "message"
                              ? "border-accent shadow-sm shadow-accent/10"
                              : "border-slate-200"
                          }`}
                          required
                        />
                      </div>

                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.01, y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-4 bg-accent hover:bg-accent-light text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30"
                      >
                        Send Message
                        <Send size={16} />
                      </motion.button>

                      <p className="text-[11px] text-slate-400 text-center">
                        By submitting, you agree to be contacted regarding your enquiry. We never share your data.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Map / CTA Banner */}
      <section className="relative py-16 bg-slate-900 overflow-hidden">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -left-20 top-1/2 -translate-y-1/2 w-48 h-48 border-[2px] border-white/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute -right-16 top-1/4 w-32 h-32 border-[2px] border-accent/20 rounded-full"
        />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
              Prefer a quick chat?
            </h2>
            <p className="text-slate-400 text-sm mb-8 max-w-md mx-auto">
              Skip the form — reach us instantly on WhatsApp. We&apos;re online during business hours and respond to messages within minutes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="https://wa.me/254701922375"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#25D366] text-white font-semibold rounded-full transition-all shadow-lg shadow-[#25D366]/20"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </motion.a>
              <motion.a
                href="tel:+254701922375"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white font-medium rounded-full transition-all hover:bg-white/5"
              >
                <Phone size={16} />
                Call Us
              </motion.a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
