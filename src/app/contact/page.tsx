"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const serviceOptions = [
  "UI/UX & Web Design",
  "Data Analytics & BI",
  "Printing & Branding",
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
  },
  {
    icon: Mail,
    label: "Email",
    value: "touchbrightconsults@gmail.com",
    href: "mailto:touchbrightconsults@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nairobi, Kenya — working with clients everywhere",
    href: null,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within one business day",
    href: null,
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="section-padding pt-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <span className="label-text">Contact</span>
            <h1 className="heading-xl mt-4 mb-6">
              Let&apos;s talk about your{" "}
              <span className="text-gradient">project.</span>
            </h1>
            <p className="text-slate-600 text-lg max-w-xl leading-relaxed">
              Send a message or reach out directly — we usually reply within one
              business day.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left - Contact Info */}
            <AnimatedSection direction="left">
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-slate-500 mb-6">
                    Reach Us Directly
                  </h3>
                  <div className="space-y-6">
                    {contactInfo.map((info) => (
                      <div key={info.label} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <info.icon size={18} className="text-accent" />
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">
                            {info.label}
                          </p>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-primary hover:text-accent transition-colors font-medium"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-primary font-medium">
                              {info.value}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick action buttons */}
                <div className="flex flex-wrap gap-3 pt-4">
                  <a
                    href="https://wa.me/254701922375"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-300 hover:border-accent/50 text-primary text-sm font-medium rounded-full transition-all duration-300 hover:bg-white"
                  >
                    <MessageCircle size={16} />
                    Message on WhatsApp
                  </a>
                  <a
                    href="mailto:touchbrightconsults@gmail.com"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-300 hover:border-accent/50 text-primary text-sm font-medium rounded-full transition-all duration-300 hover:bg-white"
                  >
                    <Mail size={16} />
                    Send an email
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Right - Form */}
            <AnimatedSection direction="right" delay={0.2}>
              <form
                onSubmit={handleSubmit}
                className="glass-card p-8 space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs text-slate-400 uppercase tracking-wider mb-2 block">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-primary placeholder:text-slate-400 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/25 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400 uppercase tracking-wider mb-2 block">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-primary placeholder:text-slate-400 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/25 transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-slate-400 uppercase tracking-wider mb-2 block">
                    Service
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-primary focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/25 transition-all appearance-none cursor-pointer"
                    required
                  >
                    <option value="" className="bg-white">
                      Select a service
                    </option>
                    {serviceOptions.map((option) => (
                      <option
                        key={option}
                        value={option}
                        className="bg-white"
                      >
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs text-slate-400 uppercase tracking-wider mb-2 block">
                    Project Details
                  </label>
                  <textarea
                    placeholder="Tell us a bit about what you need..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-primary placeholder:text-slate-400 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/25 transition-all resize-none"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  {submitted ? (
                    "Message sent! ✓"
                  ) : (
                    <>
                      Send message
                      <Send size={16} />
                    </>
                  )}
                </motion.button>

                <p className="text-xs text-slate-400 text-center">
                  This opens your email app with the details filled in — nothing
                  is sent automatically.
                </p>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
