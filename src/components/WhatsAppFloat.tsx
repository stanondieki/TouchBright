"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => setShowTooltip(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
        >
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="hidden md:flex items-center gap-2 bg-white rounded-full shadow-lg border border-slate-200 px-4 py-2.5"
              >
                <span className="text-sm text-slate-700 font-medium">
                  Need help? Chat with us
                </span>
                <button
                  onClick={() => setShowTooltip(false)}
                  className="text-slate-400 hover:text-slate-600"
                >
                  <X size={14} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <a
            href="https://wa.me/254701922375"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform group"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={26} className="text-white" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
