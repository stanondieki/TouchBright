"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered", icon: "Briefcase" },
  { value: 98, suffix: "%", label: "Client Satisfaction", icon: "Heart" },
  { value: 24, suffix: "/7", label: "Support Available", icon: "Headphones" },
  { value: 5, suffix: "+", label: "Years Experience", icon: "Calendar" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, target, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (val) => setDisplay(Math.round(val).toString()),
    });
    return () => controls.stop();
  }, [inView, target, count]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="relative py-16 md:py-20 bg-slate-900 overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Animated gradient orbs */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-[5%] w-72 h-72 bg-accent/15 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -35, 0], y: [0, 35, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-[10%] w-80 h-80 bg-accent/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, 25, 0], y: [0, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-1/3 w-64 h-64 bg-amber/8 rounded-full blur-3xl"
      />

      {/* Bottom gradient blending into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-canvas" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 md:p-6 text-center hover:bg-white/10 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl bg-accent/15 mb-3 group-hover:bg-accent/25 group-hover:scale-110 transition-all duration-300">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-accent-light"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    {stat.icon === "Briefcase" && (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.073a2.25 2.25 0 01-2.025 2.241l-1.5.123a2.25 2.25 0 01-2.025-2.241V14.15M3.75 14.15v4.073a2.25 2.25 0 002.025 2.241l1.5.123a2.25 2.25 0 002.025-2.241V14.15M3 7.5l1.5 6.65h15L21 7.5M3 7.5h18M3 7.5V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25V7.5" />
                    )}
                    {stat.icon === "Heart" && (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    )}
                    {stat.icon === "Headphones" && (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12.75v4.5a2.25 2.25 0 002.25 2.25h1.5v-6h-3.75zM20.25 12.75v4.5a2.25 2.25 0 01-2.25 2.25h-1.5v-6h3.75zM3.75 12.75C3.75 7.42 7.42 3.75 12 3.75s8.25 3.67 8.25 8.25" />
                    )}
                    {stat.icon === "Calendar" && (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    )}
                  </svg>
                </div>

                {/* Number with count-up */}
                <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-2 tracking-tight">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <div className="text-xs md:text-sm text-slate-400 font-medium">
                  {stat.label}
                </div>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-12 h-0.5 bg-accent rounded-full transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
