"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, X, Clock } from "lucide-react";

function DancingMascot({ onClick }: { onClick: () => void }) {
  return (
    <motion.div
      onClick={onClick}
      className="cursor-pointer select-none"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.svg
        viewBox="0 0 80 120"
        className="w-16 h-24 drop-shadow-lg"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Body */}
        <motion.ellipse
          cx="40"
          cy="72"
          rx="22"
          ry="28"
          fill="#10b981"
          animate={{ ry: [28, 26, 28] }}
          transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Face */}
        <circle cx="40" cy="32" r="20" fill="#10b981" />
        {/* Eyes */}
        <motion.circle
          cx="33"
          cy="28"
          r="3"
          fill="white"
          animate={{ scaleY: [1, 0.2, 1] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
        />
        <motion.circle
          cx="47"
          cy="28"
          r="3"
          fill="white"
          animate={{ scaleY: [1, 0.2, 1] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
        />
        {/* Pupils */}
        <circle cx="33" cy="28" r="1.5" fill="#0f172a" />
        <circle cx="47" cy="28" r="1.5" fill="#0f172a" />
        {/* Smile */}
        <path
          d="M 32 38 Q 40 46 48 38"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Left arm waving */}
        <motion.g
          animate={{ rotate: [0, -30, 0, -30, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
          style={{ transformOrigin: "20px 65px" }}
        >
          <rect x="8" y="58" width="12" height="6" rx="3" fill="#0d9668" />
          {/* Hand */}
          <circle cx="7" cy="61" r="5" fill="#0d9668" />
        </motion.g>
        {/* Right arm */}
        <motion.g
          animate={{ rotate: [0, 15, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "60px 65px" }}
        >
          <rect x="60" y="58" width="12" height="6" rx="3" fill="#0d9668" />
          <circle cx="73" cy="61" r="5" fill="#0d9668" />
        </motion.g>
        {/* Left leg */}
        <motion.rect
          x="28"
          y="95"
          width="8"
          height="14"
          rx="4"
          fill="#0d9668"
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "32px 95px" }}
        />
        {/* Right leg */}
        <motion.rect
          x="44"
          y="95"
          width="8"
          height="14"
          rx="4"
          fill="#0d9668"
          animate={{ rotate: [5, -5, 5] }}
          transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "48px 95px" }}
        />
        {/* Shoes */}
        <motion.ellipse
          cx="32"
          cy="110"
          rx="7"
          ry="4"
          fill="#064e3b"
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "32px 108px" }}
        />
        <motion.ellipse
          cx="48"
          cy="110"
          rx="7"
          ry="4"
          fill="#064e3b"
          animate={{ rotate: [5, -5, 5] }}
          transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "48px 108px" }}
        />
        {/* Calculator icon on body */}
        <rect x="32" y="62" width="16" height="14" rx="2" fill="white" opacity="0.9" />
        <rect x="34" y="64" width="12" height="4" rx="1" fill="#0f172a" opacity="0.3" />
        <circle cx="36" cy="72" r="1.2" fill="#0f172a" opacity="0.4" />
        <circle cx="40" cy="72" r="1.2" fill="#0f172a" opacity="0.4" />
        <circle cx="44" cy="72" r="1.2" fill="#0f172a" opacity="0.4" />
      </motion.svg>
    </motion.div>
  );
}

function SpeechBubble({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.7, y: 10 }}
      className="absolute -top-16 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-xl px-4 py-2 border border-slate-100 whitespace-nowrap"
    >
      <button
        onClick={onClose}
        className="absolute -top-2 -right-2 w-5 h-5 bg-slate-200 rounded-full flex items-center justify-center hover:bg-slate-300 transition-colors"
      >
        <X size={10} className="text-slate-600" />
      </button>
      <p className="text-xs font-semibold text-slate-700">
        Get a quote in 60s! 👆
      </p>
      {/* Triangle pointer */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-r border-b border-slate-100" />
    </motion.div>
  );
}

export default function FloatingQuote() {
  const [visible, setVisible] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const pathname = usePathname();

  const hiddenPages = ["/ballpark"];
  const isHidden = hiddenPages.includes(pathname);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (visible && !isHidden && !dismissed) {
      const timer = setTimeout(() => setShowBubble(true), 2000);
      return () => clearTimeout(timer);
    } else {
      setShowBubble(false);
    }
  }, [visible, isHidden, dismissed]);

  // Auto-hide bubble after 5 seconds
  useEffect(() => {
    if (showBubble) {
      const timer = setTimeout(() => setShowBubble(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showBubble]);

  if (isHidden) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed bottom-4 left-4 z-50 flex flex-col items-center"
        >
          {/* Speech bubble */}
          <div className="relative mb-1">
            <AnimatePresence>
              {showBubble && !dismissed && (
                <SpeechBubble onClose={() => { setShowBubble(false); setDismissed(true); }} />
              )}
            </AnimatePresence>
          </div>

          {/* Mascot + Button */}
          <div className="flex items-end gap-2">
            <Link href="/ballpark" className="block">
              <DancingMascot onClick={() => {}} />
            </Link>

            <Link
              href="/ballpark"
              className="flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold rounded-full shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 transition-all hover:scale-105 px-4 py-2.5 text-sm"
            >
              <Calculator size={16} />
              <span className="hidden sm:inline">Ballpark</span>
              <Clock size={12} className="opacity-70" />
            </Link>

            {dismissed && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={() => setDismissed(false)}
                className="w-6 h-6 rounded-full bg-slate-200/80 hover:bg-slate-300 flex items-center justify-center"
                aria-label="Show mascot speech"
              >
                <span className="text-[10px]">💬</span>
              </motion.button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
