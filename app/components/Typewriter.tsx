"use client";
import { useState, useEffect } from "react";

const words = ["Esha.", "a Software Engineer.", "an AI Researcher.", "an ML Developer."];

export default function Typewriter() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    // If it finished typing the word, wait a bit, then start erasing
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1500); 
      return;
    }

    // If it finished erasing, move to the next word
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    // Handle the typing/erasing speed
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 50 : 100, Math.random() * 50)); // Randomize typing speed slightly for realism

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    // Your exact Fire & Water gradient!
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-cyan-500">
      {words[index].substring(0, subIndex)}
      <span className="animate-pulse text-cyan-500">|</span>
    </span>
  );
}