"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WiggleWordsProps {
  words: string[];
  interval?: number;
  className?: string;
}

export default function WiggleWords({
  words,
  interval = 2500,
  className = "",
}: WiggleWordsProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  const wiggleTransition = {
    duration: 0.6,
    repeat: Infinity,
    repeatType: "mirror" as const,
    ease: "easeInOut",
  };

  return (
    <span className={`inline-block ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 20, rotate: -3 }}
          animate={{
            opacity: 1,
            y: [0, -3, 2, -2, 0],
            rotate: [-2, 2, -1, 1, 0],
            x: [0, 2, -2, 1, 0],
          }}
          exit={{ opacity: 0, y: -20, rotate: 3 }}
          transition={{
            opacity: { duration: 0.3 },
            y: wiggleTransition,
            rotate: wiggleTransition,
            x: wiggleTransition,
            default: { duration: 0.3 },
          }}
          className="inline-block"
          style={{ transformOrigin: "center" }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
