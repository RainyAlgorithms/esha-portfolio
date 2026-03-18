"use client";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Timeline from "./components/Timeline";
import ProjectGrid from "./components/ProjectGrid";
import ThemeSection from "./components/ThemeSection";

export default function Home() {
  // This state holds whatever theme the user is currently looking at
  const [activeTheme, setActiveTheme] = useState("firewater");

  // A dictionary mapping your themes to Tailwind background colors
  const getThemeClasses = () => {
    switch (activeTheme) {
      case "firewater":
        return "bg-orange-50 dark:bg-orange-950/30"; 
      case "sports":
        return "bg-green-50 dark:bg-teal-950/30"; 
      case "space":
        return "bg-slate-900 dark:bg-black"; 
      case "bharatanatyam":
        return "bg-amber-50 dark:bg-[#3d1616]"; // Warm Terracotta
      case "roses":
        return "bg-rose-50 dark:bg-stone-900"; 
      default:
        return "bg-white dark:bg-gray-950";
    }
  };

  return (
    // The "transition-colors duration-1000" makes the background morph smoothly
    <main className={`transition-colors duration-1000 ease-in-out ${getThemeClasses()}`}>
      <Navbar />

      {/* 1. HERO SECTION (Fireboy & Watergirl) */}
      <ThemeSection id="home" themeName="firewater" setActiveTheme={setActiveTheme}>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
          Building intelligence <br />
          {/* Changed gradient to Red/Cyan to match Fire & Water */}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-cyan-500">
            into the web.
          </span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-8">
          Hi, I'm Esha. A Machine Learning Developer & Full Stack Engineer.
          Currently automating ML pipelines at <span className="text-red-500 font-semibold">Airbus</span>.
        </p>
        
        {/* BUTTONS (Keep your previous button code here!) */}
        <div className="flex flex-wrap gap-4">
           {/* Paste your 3 buttons with the SVGs here */}
        </div>
      </ThemeSection>

      {/* 2. PROJECTS SECTION (Sports) */}
      <ThemeSection id="projects" themeName="sports" setActiveTheme={setActiveTheme}>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Featured Projects</h2>
        <ProjectGrid />
      </ThemeSection>

      {/* 3. EXPERIENCE SECTION (Space) */}
      <ThemeSection id="experience" themeName="space" setActiveTheme={setActiveTheme}>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Experience</h2>
        <Timeline />
      </ThemeSection>

      {/* 4. HACKATHONS SECTION (Bharatanatyam) */}
      <ThemeSection id="hackathons" themeName="bharatanatyam" setActiveTheme={setActiveTheme}>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Hackathons & Wins</h2>
        <p className="text-gray-600 dark:text-gray-400 text-xl">
          Won company-wide Airbus hackathon by building a prototype leveraging Gemini to automate internal tasks.
        </p>
        {/* We can build a dedicated Hackathon Grid later */}
      </ThemeSection>

      {/* 5. SKILLS SECTION (White Roses) */}
      <ThemeSection id="skills" themeName="roses" setActiveTheme={setActiveTheme}>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Technical Skills</h2>
        <div className="flex flex-wrap gap-3">
            {['Python', 'React', 'FastAPI', 'PyTorch', 'AWS SageMaker', 'PostgreSQL'].map(skill => (
                <span key={skill} className="px-4 py-2 bg-white/50 dark:bg-black/50 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 shadow-sm">
                    {skill}
                </span>
            ))}
        </div>
      </ThemeSection>

      <footer className="py-8 text-center text-gray-500 text-sm">
        © 2026 Esha Pakalapati. Built with Next.js & FastAPI.
      </footer>
    </main>
  );
}