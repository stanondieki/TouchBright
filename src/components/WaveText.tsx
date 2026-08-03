"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

interface WaveTextProps {
  words: string[];
  interval?: number;
  className?: string;
}

export default function WaveText({
  words,
  interval = 3500,
  className = "",
}: WaveTextProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [waveIndex, setWaveIndex] = useState(-1);
  const currentWord = words[wordIndex];
  const letters = currentWord.split("");

  const startWave = useCallback(() => {
    setWaveIndex(0);
  }, []);

  // Cycle through words
  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  // Start wave animation periodically
  useEffect(() => {
    startWave();
    const waveTimer = setInterval(startWave, 2000);
    return () => clearInterval(waveTimer);
  }, [wordIndex, startWave]);

  // Advance the wave through each letter
  useEffect(() => {
    if (waveIndex < 0 || waveIndex >= letters.length) return;
    const timer = setTimeout(() => {
      setWaveIndex((prev) => prev + 1);
    }, 60);
    return () => clearTimeout(timer);
  }, [waveIndex, letters.length]);

  return (
    <span className={`inline-flex ${className}`}>
      {letters.map((letter, i) => {
        const isActive = i === waveIndex;
        return (
          <motion.span
            key={`${wordIndex}-${i}`}
            animate={
              isActive
                ? { y: [0, -8, 0], rotate: [0, -6, 6, 0] }
                : { y: 0, rotate: 0 }
            }
            transition={
              isActive
                ? { duration: 0.35, ease: "easeOut" }
                : { duration: 0.25, ease: "easeOut" }
            }
            className="inline-block"
            style={{ whiteSpace: "pre" }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        );
      })}
    </span>
  );
}
