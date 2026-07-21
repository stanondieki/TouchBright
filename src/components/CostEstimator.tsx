"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Monitor,
  BarChart3,
  Cloud,
  Palette,
  Code2,
  Shield,
  Clock,
  Users,
  Mail,
  Phone,
} from "lucide-react";

const projectTypes = [
  { id: "website", label: "Website / Web App", icon: Monitor, baseCost: 800 },
  { id: "dashboard", label: "Data Dashboard", icon: BarChart3, baseCost: 1200 },
  { id: "software", label: "Custom Software", icon: Code2, baseCost: 2500 },
  { id: "branding", label: "Branding & Print", icon: Palette, baseCost: 500 },
];

const features = [
  { id: "responsive", label: "Mobile Responsive", cost: 200 },
  { id: "auth", label: "User Authentication", cost: 400 },
  { id: "payments", label: "Payment Integration", cost: 500 },
  { id: "api", label: "Third-party API Integration", cost: 350 },
  { id: "seo", label: "SEO Optimization", cost: 250 },
  { id: "analytics", label: "Analytics & Reporting", cost: 300 },
  { id: "cms", label: "Content Management System", cost: 600 },
  { id: "hosting", label: "Cloud Hosting Setup", cost: 200 },
];

const timelines = [
  { id: "rush", label: "1-2 weeks", multiplier: 1.5, icon: Clock },
  { id: "standard", label: "3-6 weeks", multiplier: 1.0, icon: Clock },
  { id: "flexible", label: "No rush", multiplier: 0.85, icon: Clock },
];

const teamSizes = [
  { id: "solo", label: "Just me", multiplier: 0.9, icon: Users },
  { id: "small", label: "2-10 people", multiplier: 1.0, icon: Users },
  { id: "medium", label: "11-50 people", multiplier: 1.15, icon: Users },
  { id: "large", label: "50+ people", multiplier: 1.3, icon: Users },
];

export default function CostEstimator() {
  const [step, setStep] = useState(0);
  const [projectType, setProjectType] = useState<string | null>(null);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [timeline, setTimeline] = useState<string | null>(null);
  const [teamSize, setTeamSize] = useState<string | null>(null);
  const [contactInfo, setContactInfo] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const steps = ["Project Type", "Features", "Timeline", "Team Size", "Estimate"];

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const calculateEstimate = () => {
    const type = projectTypes.find((t) => t.id === projectType);
    const featureCost = selectedFeatures.reduce((sum, id) => {
      const f = features.find((feat) => feat.id === id);
      return sum + (f?.cost || 0);
    }, 0);
    const tl = timelines.find((t) => t.id === timeline);
    const ts = teamSizes.find((t) => t.id === teamSize);

    const base = (type?.baseCost || 0) + featureCost;
    const multiplier = (tl?.multiplier || 1) * (ts?.multiplier || 1);
    const total = Math.round(base * multiplier);
    return { low: Math.round(total * 0.85), high: Math.round(total * 1.15) };
  };

  const canProceed = () => {
    if (step === 0) return projectType !== null;
    if (step === 1) return selectedFeatures.length >= 0;
    if (step === 2) return timeline !== null;
    if (step === 3) return teamSize !== null;
    return true;
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const estimate = step >= 4 ? calculateEstimate() : null;

  return (
    <div className="glass-card p-6 md:p-10 max-w-3xl mx-auto">
      {/* Progress dots */}
      <div className="flex items-center justify-center gap-2 mb-10">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                i < step
                  ? "bg-accent text-white"
                  : i === step
                  ? "bg-accent text-white ring-4 ring-accent/20"
                  : "bg-slate-100 text-slate-400"
              }`}
            >
              {i < step ? <Check size={14} /> : i + 1}
            </div>
            {i < steps.length - 1 && (
              <div
                className={`w-8 md:w-16 h-0.5 ${
                  i < step ? "bg-accent" : "bg-slate-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* Step 1: Project Type */}
        {step === 0 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h3 className="text-xl md:text-2xl font-heading font-bold text-slate-900 mb-2">
              What are you building?
            </h3>
            <p className="text-slate-500 mb-6">Pick the closest match — we can always adjust later.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {projectTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setProjectType(type.id)}
                  className={`p-4 rounded-xl border-2 transition-all text-center ${
                    projectType === type.id
                      ? "border-accent bg-accent/5"
                      : "border-slate-200 hover:border-accent/30"
                  }`}
                >
                  <type.icon size={28} className={`mx-auto mb-2 ${projectType === type.id ? "text-accent" : "text-slate-400"}`} />
                  <span className={`text-sm font-medium ${projectType === type.id ? "text-accent-dark" : "text-slate-600"}`}>
                    {type.label}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 2: Features */}
        {step === 1 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h3 className="text-xl md:text-2xl font-heading font-bold text-slate-900 mb-2">
              What features do you need?
            </h3>
            <p className="text-slate-500 mb-6">Select all that apply — skip anything you're unsure about.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => toggleFeature(feature.id)}
                  className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                    selectedFeatures.includes(feature.id)
                      ? "border-accent bg-accent/5"
                      : "border-slate-200 hover:border-accent/30"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center ${
                      selectedFeatures.includes(feature.id) ? "border-accent bg-accent" : "border-slate-300"
                    }`}>
                      {selectedFeatures.includes(feature.id) && <Check size={12} className="text-white" />}
                    </div>
                    <span className={`text-sm font-medium ${selectedFeatures.includes(feature.id) ? "text-accent-dark" : "text-slate-600"}`}>
                      {feature.label}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400">+${feature.cost}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 3: Timeline */}
        {step === 2 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h3 className="text-xl md:text-2xl font-heading font-bold text-slate-900 mb-2">
              When do you need it?
            </h3>
            <p className="text-slate-500 mb-6">Rush projects cost more — flexible timelines save you money.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {timelines.map((tl) => (
                <button
                  key={tl.id}
                  onClick={() => setTimeline(tl.id)}
                  className={`p-5 rounded-xl border-2 transition-all text-center ${
                    timeline === tl.id
                      ? "border-accent bg-accent/5"
                      : "border-slate-200 hover:border-accent/30"
                  }`}
                >
                  <tl.icon size={24} className={`mx-auto mb-2 ${timeline === tl.id ? "text-accent" : "text-slate-400"}`} />
                  <span className={`text-sm font-medium block ${timeline === tl.id ? "text-accent-dark" : "text-slate-600"}`}>
                    {tl.label}
                  </span>
                  <span className="text-xs text-slate-400 mt-1">
                    {tl.multiplier > 1 ? "Rush fee applies" : tl.multiplier < 1 ? "Discount applies" : "Standard rate"}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 4: Team Size */}
        {step === 3 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h3 className="text-xl md:text-2xl font-heading font-bold text-slate-900 mb-2">
              How big is your team?
            </h3>
            <p className="text-slate-500 mb-6">This helps us scope the right level of support.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {teamSizes.map((ts) => (
                <button
                  key={ts.id}
                  onClick={() => setTeamSize(ts.id)}
                  className={`p-4 rounded-xl border-2 transition-all text-center ${
                    teamSize === ts.id
                      ? "border-accent bg-accent/5"
                      : "border-slate-200 hover:border-accent/30"
                  }`}
                >
                  <ts.icon size={24} className={`mx-auto mb-2 ${teamSize === ts.id ? "text-accent" : "text-slate-400"}`} />
                  <span className={`text-sm font-medium ${teamSize === ts.id ? "text-accent-dark" : "text-slate-600"}`}>
                    {ts.label}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 5: Estimate */}
        {step === 4 && (
          <motion.div
            key="step5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            {!submitted ? (
              <>
                <div className="text-center mb-8">
                  <span className="label-text">Your Estimate</span>
                  <div className="mt-4 flex items-baseline justify-center gap-2">
                    <span className="text-4xl md:text-5xl font-heading font-bold text-accent">
                      ${estimate?.low.toLocaleString()}
                    </span>
                    <span className="text-2xl text-slate-400">–</span>
                    <span className="text-4xl md:text-5xl font-heading font-bold text-accent">
                      ${estimate?.high.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-slate-500 mt-3 text-sm">
                    Ballpark range based on your selections. Final quote after consultation.
                  </p>
                </div>

                {/* Summary */}
                <div className="bg-canvas rounded-xl p-5 mb-6 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Project type</span>
                    <span className="text-slate-900 font-medium">
                      {projectTypes.find((t) => t.id === projectType)?.label}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Features</span>
                    <span className="text-slate-900 font-medium">{selectedFeatures.length} selected</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Timeline</span>
                    <span className="text-slate-900 font-medium">
                      {timelines.find((t) => t.id === timeline)?.label}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Team size</span>
                    <span className="text-slate-900 font-medium">
                      {teamSizes.find((t) => t.id === teamSize)?.label}
                    </span>
                  </div>
                </div>

                {/* Contact capture */}
                <div className="space-y-3 mb-6">
                  <p className="text-sm font-medium text-slate-900">Want this estimate emailed to you?</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Your name"
                      value={contactInfo.name}
                      onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-accent/50 transition-all"
                    />
                    <input
                      type="email"
                      placeholder="Email address"
                      value={contactInfo.email}
                      onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-accent/50 transition-all"
                    />
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full py-3.5 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Mail size={18} />
                  Send me this estimate
                </button>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Check size={32} className="text-accent" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-2">
                  Estimate sent!
                </h3>
                <p className="text-slate-500 mb-6">
                  We've noted your project details. Check your email for the full breakdown, and we'll be in touch within one business day.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <a
                    href="https://wa.me/254701922375"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-light text-white text-sm font-semibold rounded-full transition-colors"
                  >
                    <Phone size={16} />
                    Discuss on WhatsApp
                  </a>
                  <button
                    onClick={() => {
                      setStep(0);
                      setProjectType(null);
                      setSelectedFeatures([]);
                      setTimeline(null);
                      setTeamSize(null);
                      setSubmitted(false);
                      setContactInfo({ name: "", email: "", phone: "" });
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-300 hover:border-accent/50 text-slate-700 text-sm font-medium rounded-full transition-all"
                  >
                    Start over
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation buttons */}
      {!submitted && step < 4 && (
        <div className="flex justify-between mt-8">
          <button
            onClick={() => setStep(Math.max(0, step - 1))}
            disabled={step === 0}
            className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full transition-all ${
              step === 0
                ? "opacity-0 pointer-events-none"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <ArrowLeft size={16} />
            Back
          </button>
          <button
            onClick={() => setStep(step + 1)}
            disabled={!canProceed()}
            className={`inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-full transition-all ${
              canProceed()
                ? "bg-accent hover:bg-accent-light text-white"
                : "bg-slate-200 text-slate-400 cursor-not-allowed"
            }`}
          >
            Continue
            <ArrowRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
