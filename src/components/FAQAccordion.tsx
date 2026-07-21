"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What types of projects does Touchbright take on?",
    answer:
      "We work across web design, custom software, data dashboards, IT infrastructure, and print. If it touches how your business looks or runs, we can handle it.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most websites take 2-4 weeks, dashboards 3-6 weeks, and larger software systems 6-12 weeks. We give you a realistic timeline before we start — no vague estimates.",
  },
  {
    question: "Do you work with businesses outside Kenya?",
    answer:
      "Yes. We work with clients globally. Communication happens over WhatsApp, email, or video calls — whatever works best for you.",
  },
  {
    question: "What happens after the project is delivered?",
    answer:
      "We don't disappear after launch. You get a support period, and we're available for ongoing maintenance, updates, or new features. You talk to the same people who built it.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "Every project is scoped individually based on your needs. Use our Project Estimator to get a ballpark, or book a consultation and we'll give you a detailed quote.",
  },
  {
    question: "Can you work with our existing systems?",
    answer:
      "Absolutely. We regularly integrate with existing tools, databases, and workflows. We audit what you have first, then build around it — no unnecessary rip-and-replace.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="glass-card overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
            >
              <span className="font-heading font-semibold text-slate-900 text-base md:text-lg">
                {faq.question}
              </span>
              <ChevronDown
                size={20}
                className={`flex-shrink-0 text-accent transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <p className="px-5 md:px-6 pb-5 md:pb-6 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
