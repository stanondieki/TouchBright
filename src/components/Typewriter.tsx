"use client";

import { useState, useEffect } from "react";

interface TypewriterProps {
  words: string[];
  speed?: number;
  deleteSpeed?: number;
  delay?: number;
  className?: string;
}

export default function Typewriter({
  words,
  speed = 100,
  deleteSpeed = 50,
  delay = 2000,
  className = "",
}: TypewriterProps) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (!isDeleting && text === currentWord) {
      const timer = setTimeout(() => setIsDeleting(true), delay);
      return () => clearTimeout(timer);
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timer = setTimeout(() => {
      setText((prev) => {
        if (isDeleting) {
          return currentWord.substring(0, prev.length - 1);
        }
        return currentWord.substring(0, prev.length + 1);
      });
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, speed, deleteSpeed, delay]);

  return (
    <span className={className}>
      {text}
      <span className="inline-block w-[3px] h-[0.8em] bg-current ml-1 animate-pulse align-middle" />
    </span>
  );
}
