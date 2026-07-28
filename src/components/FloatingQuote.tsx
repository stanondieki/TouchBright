"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, X, Clock } from "lucide-react";

export default function FloatingQuote() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const pathname = usePathname();

  // Hide on ballpark page itself
  const hiddenPages = ["/ballpark"];
  const isHidden = hiddenPages.includes(pathname);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (visible && !isHidden) {
      const timer = setTimeout(() => setExpanded(true), 1500);
      return () => clearTimeout(timer);
    } else {
      setExpanded(false);
    }
  }, [visible, isHidden]);

  if (isHidden) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, x: -20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0, x: -20 }}
          className="fixed bottom-6 left-6 z-50 flex items-center gap-2"
        >
          <Link
            href="/ballpark"
            className="relative flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold rounded-full shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 transition-all hover:scale-105"
          >
            <span className="w-12 h-12 flex items-center justify-center">
              <Calculator size={20} />
            </span>
            <AnimatePresence>
              {expanded && (
                <motion.span
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden whitespace-nowrap text-sm pr-5 flex items-center gap-1.5"
                >
                  <Clock size={13} />
                  Ballpark in 60s
                </motion.span>
              )}
            </AnimatePresence>
          </Link>

          {expanded && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              onClick={() => setExpanded(false)}
              className="w-6 h-6 rounded-full bg-slate-200 hover:bg-slate-300 flex items-center justify-center transition-colors"
              aria-label="Collapse"
            >
              <X size={12} className="text-slate-600" />
            </motion.button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
