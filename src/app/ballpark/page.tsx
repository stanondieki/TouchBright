"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Calculator,
  CheckCircle2,
  Clock,
  Monitor,
  Palette,
  Code2,
  Cloud,
  Shield,
  Megaphone,
  Headphones,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const serviceEstimates = [
  {
    id: "web-design",
    icon: Monitor,
    title: "UI/UX & Web Design",
    options: [
      {
        label: "What type of website?",
        choices: [
          { name: "Landing Page (1-3 pages)", price: 25000 },
          { name: "Business Website (5-10 pages)", price: 60000 },
          { name: "E-commerce Store", price: 120000 },
          { name: "Web Application", price: 200000 },
        ],
      },
      {
        label: "Design complexity?",
        choices: [
          { name: "Clean & Simple", price: 0 },
          { name: "Custom Illustrations & Animations", price: 30000 },
          { name: "Premium (Interactive & Animated)", price: 60000 },
        ],
      },
      {
        label: "Additional features?",
        choices: [
          { name: "None", price: 0 },
          { name: "Blog / CMS", price: 15000 },
          { name: "User Accounts & Auth", price: 25000 },
          { name: "Payment Integration", price: 20000 },
          { name: "Booking / Scheduling System", price: 30000 },
        ],
      },
    ],
  },
  {
    id: "graphic-design",
    icon: Palette,
    title: "Graphic Design",
    options: [
      {
        label: "What do you need?",
        choices: [
          { name: "Logo Design Only", price: 15000 },
          { name: "Full Brand Identity (Logo + Guidelines)", price: 45000 },
          { name: "Marketing Collateral (Flyers, Brochures)", price: 20000 },
          { name: "Social Media Kit (Templates + Posts)", price: 30000 },
        ],
      },
      {
        label: "How many concepts/revisions?",
        choices: [
          { name: "2 Concepts, 2 Revisions", price: 0 },
          { name: "3 Concepts, 3 Revisions", price: 10000 },
          { name: "Unlimited Revisions Until Perfect", price: 25000 },
        ],
      },
      {
        label: "Delivery format?",
        choices: [
          { name: "Digital Files Only (PNG, SVG, PDF)", price: 0 },
          { name: "Print-Ready + Digital", price: 5000 },
          { name: "Full Brand Book + All Formats", price: 15000 },
        ],
      },
    ],
  },
  {
    id: "software-dev",
    icon: Code2,
    title: "Software Development",
    options: [
      {
        label: "What are you building?",
        choices: [
          { name: "Mobile App (Single Platform)", price: 150000 },
          { name: "Mobile App (iOS + Android)", price: 250000 },
          { name: "Internal Business Tool / Dashboard", price: 180000 },
          { name: "Full SaaS Platform", price: 400000 },
        ],
      },
      {
        label: "Complexity level?",
        choices: [
          { name: "Basic (CRUD, Simple Flows)", price: 0 },
          { name: "Moderate (Integrations, Roles)", price: 80000 },
          { name: "Complex (Real-time, AI, Multi-tenant)", price: 200000 },
        ],
      },
      {
        label: "Ongoing support needed?",
        choices: [
          { name: "No — Just Build & Handover", price: 0 },
          { name: "3 Months Post-Launch Support", price: 45000 },
          { name: "12 Months Maintenance Plan", price: 120000 },
        ],
      },
    ],
  },
  {
    id: "cloud-networking",
    icon: Cloud,
    title: "Cloud & Networking",
    options: [
      {
        label: "What do you need?",
        choices: [
          { name: "Office Network Setup", price: 40000 },
          { name: "Cloud Migration (Small)", price: 60000 },
          { name: "Cloud Migration (Enterprise)", price: 150000 },
          { name: "Full Infrastructure Overhaul", price: 250000 },
        ],
      },
      {
        label: "Scale?",
        choices: [
          { name: "1-10 Users / Devices", price: 0 },
          { name: "10-50 Users / Devices", price: 30000 },
          { name: "50+ Users / Multi-site", price: 80000 },
        ],
      },
      {
        label: "Monitoring & maintenance?",
        choices: [
          { name: "Setup Only — No Ongoing", price: 0 },
          { name: "Monthly Monitoring (Basic)", price: 15000 },
          { name: "24/7 Monitoring + Support", price: 50000 },
        ],
      },
    ],
  },
  {
    id: "cybersecurity",
    icon: Shield,
    title: "Cybersecurity",
    options: [
      {
        label: "What's your priority?",
        choices: [
          { name: "Security Audit & Report", price: 35000 },
          { name: "Penetration Testing", price: 60000 },
          { name: "Full Security Implementation", price: 120000 },
          { name: "Compliance Consulting (GDPR/ISO)", price: 80000 },
        ],
      },
      {
        label: "Organization size?",
        choices: [
          { name: "Small (1-20 employees)", price: 0 },
          { name: "Medium (20-100 employees)", price: 25000 },
          { name: "Large (100+ employees)", price: 60000 },
        ],
      },
      {
        label: "Staff training needed?",
        choices: [
          { name: "No Training", price: 0 },
          { name: "Basic Awareness Workshop", price: 20000 },
          { name: "Comprehensive Program + Simulations", price: 45000 },
        ],
      },
    ],
  },
  {
    id: "digital-marketing",
    icon: Megaphone,
    title: "Digital Marketing & SEO",
    options: [
      {
        label: "What's the focus?",
        choices: [
          { name: "SEO Only (Organic Growth)", price: 30000 },
          { name: "Google Ads (Paid Campaigns)", price: 40000 },
          { name: "Social Media Management", price: 35000 },
          { name: "Full Digital Strategy (All Channels)", price: 80000 },
        ],
      },
      {
        label: "Duration?",
        choices: [
          { name: "One-time Setup / Audit", price: 0 },
          { name: "3 Month Campaign", price: 40000 },
          { name: "6 Month Retainer", price: 90000 },
          { name: "12 Month Retainer", price: 150000 },
        ],
      },
      {
        label: "Content creation?",
        choices: [
          { name: "I'll Provide Content", price: 0 },
          { name: "Basic Content (4 posts/month)", price: 15000 },
          { name: "Full Content (12 posts + blog/month)", price: 40000 },
        ],
      },
    ],
  },
  {
    id: "it-support",
    icon: Headphones,
    title: "Managed IT Support",
    options: [
      {
        label: "Support level needed?",
        choices: [
          { name: "Remote Help Desk Only", price: 20000 },
          { name: "Remote + On-Site When Needed", price: 40000 },
          { name: "Full Managed IT (Proactive)", price: 70000 },
        ],
      },
      {
        label: "Number of users/devices?",
        choices: [
          { name: "1-10", price: 0 },
          { name: "10-30", price: 20000 },
          { name: "30-100", price: 50000 },
          { name: "100+", price: 100000 },
        ],
      },
      {
        label: "Response time SLA?",
        choices: [
          { name: "Next Business Day", price: 0 },
          { name: "4-Hour Response", price: 15000 },
          { name: "1-Hour Critical Response", price: 35000 },
        ],
      },
    ],
  },
];

export default function BallparkPage() {
  const [step, setStep] = useState(0); // 0 = select service, 1+ = answer questions
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [selections, setSelections] = useState<number[]>([]);

  const service = selectedService !== null ? serviceEstimates[selectedService] : null;
  const totalOptions = service ? service.options.length : 0;
  const questionStep = step - 1; // 0-indexed question

  const estimatedTotal = () => {
    if (!service) return 0;
    let total = 0;
    selections.forEach((choiceIdx, optIdx) => {
      if (service.options[optIdx] && service.options[optIdx].choices[choiceIdx]) {
        total += service.options[optIdx].choices[choiceIdx].price;
      }
    });
    return total;
  };

  const formatPrice = (amount: number) => {
    return `KES ${amount.toLocaleString()}`;
  };

  const handleServiceSelect = (idx: number) => {
    setSelectedService(idx);
    setSelections([]);
    setStep(1);
  };

  const handleChoiceSelect = (choiceIdx: number) => {
    const newSelections = [...selections];
    newSelections[questionStep] = choiceIdx;
    setSelections(newSelections);
  };

  const handleNext = () => {
    if (step <= totalOptions) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleReset = () => {
    setStep(0);
    setSelectedService(null);
    setSelections([]);
  };

  const isComplete = step > totalOptions && totalOptions > 0;

  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-slate-900 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <motion.div
          animate={{ x: [0, 25, 0], y: [0, -15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-[15%] w-60 h-60 bg-accent/15 rounded-full blur-3xl"
        />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-canvas" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <Calculator size={24} className="text-accent-light" />
              <Clock size={18} className="text-slate-400" />
              <span className="text-slate-400 text-sm font-medium">Takes ~60 seconds</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight">
              Get your{" "}
              <span className="text-accent-light">ballpark</span> in 60 seconds.
            </h1>
            <p className="text-slate-300 text-lg mt-4 max-w-xl leading-relaxed">
              Answer a few quick questions and get an instant estimate for your project. No forms, no calls — just a number to work with.
            </p>
            <div className="flex items-center gap-2 mt-6 text-sm text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-accent-light">Ballpark Estimate</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Estimator */}
      <section className="py-16 bg-canvas min-h-[600px]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          {/* Progress bar */}
          {step > 0 && !isComplete && (
            <div className="mb-10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-slate-500 font-medium">
                  Step {step} of {totalOptions + 1}
                </span>
                <span className="text-xs text-accent font-semibold">
                  {Math.round((step / (totalOptions + 1)) * 100)}%
                </span>
              </div>
              <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-accent rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(step / (totalOptions + 1)) * 100}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </div>
          )}

          <AnimatePresence mode="wait">
            {/* Step 0: Select Service */}
            {step === 0 && (
              <motion.div
                key="select-service"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-2">
                  What service do you need?
                </h2>
                <p className="text-slate-500 text-sm mb-8">
                  Select one to get started with your estimate.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {serviceEstimates.map((svc, i) => (
                    <motion.button
                      key={svc.id}
                      onClick={() => handleServiceSelect(i)}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-4 p-5 rounded-2xl border border-slate-200 bg-white hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all text-left group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                        <svc.icon size={22} className="text-accent" />
                      </div>
                      <span className="text-sm font-semibold text-slate-900 group-hover:text-accent transition-colors">
                        {svc.title}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Questions */}
            {step > 0 && !isComplete && service && (
              <motion.div
                key={`question-${questionStep}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <service.icon size={20} className="text-accent" />
                  <span className="text-sm text-accent font-semibold">{service.title}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-8">
                  {service.options[questionStep].label}
                </h2>
                <div className="space-y-3">
                  {service.options[questionStep].choices.map((choice, ci) => (
                    <motion.button
                      key={choice.name}
                      onClick={() => handleChoiceSelect(ci)}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full flex items-center justify-between p-5 rounded-xl border transition-all text-left ${
                        selections[questionStep] === ci
                          ? "border-accent bg-accent/5 shadow-sm shadow-accent/10"
                          : "border-slate-200 bg-white hover:border-accent/30"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                          selections[questionStep] === ci
                            ? "border-accent bg-accent"
                            : "border-slate-300"
                        }`}>
                          {selections[questionStep] === ci && (
                            <CheckCircle2 size={14} className="text-white" />
                          )}
                        </div>
                        <span className="text-sm font-medium text-slate-900">{choice.name}</span>
                      </div>
                      {choice.price > 0 && (
                        <span className="text-xs text-slate-400 font-medium">
                          +{formatPrice(choice.price)}
                        </span>
                      )}
                    </motion.button>
                  ))}
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-10">
                  <button
                    onClick={handleBack}
                    className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 font-medium transition-colors"
                  >
                    <ArrowLeft size={16} />
                    Back
                  </button>
                  <motion.button
                    onClick={handleNext}
                    disabled={selections[questionStep] === undefined}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-light disabled:bg-slate-200 disabled:text-slate-400 text-white font-semibold rounded-full transition-all text-sm disabled:cursor-not-allowed"
                  >
                    {questionStep === totalOptions - 1 ? "See Estimate" : "Next"}
                    <ArrowRight size={14} />
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* Result */}
            {isComplete && service && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6"
                >
                  <Calculator size={36} className="text-accent" />
                </motion.div>

                <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-2">
                  Your ballpark estimate
                </h2>
                <p className="text-slate-500 text-sm mb-8">
                  Based on your selections for <span className="font-semibold text-slate-900">{service.title}</span>
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white rounded-2xl border border-slate-200 shadow-xl p-8 md:p-10 max-w-lg mx-auto"
                >
                  <div className="text-sm text-slate-500 mb-2">Estimated investment</div>
                  <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-1">
                    {formatPrice(estimatedTotal())}
                  </div>
                  <div className="text-xs text-slate-400 mb-6">
                    ± 20% depending on final scope
                  </div>

                  {/* Breakdown */}
                  <div className="border-t border-slate-100 pt-5 space-y-3 text-left">
                    {service.options.map((opt, i) => (
                      <div key={opt.label} className="flex items-center justify-between text-sm">
                        <span className="text-slate-500">{opt.label}</span>
                        <span className="text-slate-900 font-medium">
                          {opt.choices[selections[i]]?.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-slate-100 mt-5 pt-5 flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/contact"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-accent hover:bg-accent-light text-white font-semibold rounded-full transition-all text-sm"
                    >
                      Start This Project
                      <ArrowRight size={14} />
                    </Link>
                    <button
                      onClick={handleReset}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 border border-slate-200 text-slate-700 font-medium rounded-full transition-all text-sm hover:bg-slate-50"
                    >
                      Try Another Service
                    </button>
                  </div>
                </motion.div>

                <p className="text-xs text-slate-400 mt-6 max-w-md mx-auto">
                  This is a rough estimate only. Final pricing depends on the detailed scope discussion. No obligation — let&apos;s chat!
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
