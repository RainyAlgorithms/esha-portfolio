"use client";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function ThemeSection({ 
  children, 
  id,
  themeName, 
  setActiveTheme,
}: { 
  children: React.ReactNode; 
  id: string;
  themeName: string; 
  setActiveTheme: (theme: string) => void;
}) {
  // This hook triggers when 50% of the section is visible on screen
  const { ref, inView } = useInView({
    threshold: 0.5, 
  });

  useEffect(() => {
    if (inView) {
      setActiveTheme(themeName);
    }
  }, [inView, themeName, setActiveTheme]);

  return (
    <section id={id} ref={ref} className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col justify-center">
      {/* Framer Motion adds a smooth fade-up effect when scrolling into view */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
}