"use client";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Timeline from "./components/Timeline";
import ProjectGrid from "./components/ProjectGrid";
import ThemeSection from "./components/ThemeSection";

export default function Home() {
  const [activeTheme, setActiveTheme] = useState("firewater");

  // Define the background colors for each section
  const getThemeClasses = () => {
    switch (activeTheme) {
      case "firewater":
        return "bg-orange-50 dark:bg-orange-950/30"; 
      case "space":
        return "bg-slate-900 dark:bg-black"; 
      case "roses":
        return "bg-rose-50 dark:bg-stone-900"; 
      case "sports":
        return "bg-green-50 dark:bg-teal-950/30"; 
      case "bharatanatyam":
        return "bg-amber-50 dark:bg-[#3d1616]"; 
      case "contact":
        return "bg-indigo-50 dark:bg-indigo-950/30"; // A calm theme to end on
      default:
        return "bg-white dark:bg-gray-950";
    }
  };

  return (
    <main className={`transition-colors duration-1000 ease-in-out ${getThemeClasses()}`}>
      <Navbar />

      {/* 1. ABOUT / COVER (Fire & Water) */}
      <ThemeSection id="about" themeName="firewater" setActiveTheme={setActiveTheme}>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
          Building intelligence <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-cyan-500">
            into the web.
          </span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-8">
          Hi, I'm Esha. A Machine Learning Developer & Full Stack Engineer.
          Currently automating ML pipelines at <span className="text-red-500 font-semibold">Airbus</span>.
        </p>
        
        {/* Replace this div with your updated button code containing the SVGs! */}
        <div className="flex flex-wrap gap-4">
          <a href="/Esha_Pakalapati_ML_Dev_Resume_2025.pdf" download className="px-6 py-3 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:opacity-90">
            Download CV
          </a>
          <a href="#contact" className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900">
            Get in Touch
          </a>
        </div>
      </ThemeSection>

      {/* 2. EXPERIENCE (Space) */}
      <ThemeSection id="experience" themeName="space" setActiveTheme={setActiveTheme}>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Work Experience</h2>
        <Timeline />
      </ThemeSection>

      {/* 3. SKILLS (White Roses) */}
      <ThemeSection id="skills" themeName="roses" setActiveTheme={setActiveTheme}>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Technical Skills</h2>
        <div className="flex flex-wrap gap-3">
            {['Python', 'React', 'FastAPI', 'PyTorch', 'AWS SageMaker', 'PostgreSQL', 'C/C++', 'Java'].map(skill => (
                <span key={skill} className="px-4 py-2 bg-white/50 dark:bg-black/50 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 shadow-sm">
                    {skill}
                </span>
            ))}
        </div>
      </ThemeSection>

      {/* 4. PROJECTS (Sports) */}
      <ThemeSection id="projects" themeName="sports" setActiveTheme={setActiveTheme}>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Featured Projects</h2>
        <ProjectGrid />
      </ThemeSection>

      {/* 5. HACKATHONS (Bharatanatyam) */}
      <ThemeSection id="hackathons" themeName="bharatanatyam" setActiveTheme={setActiveTheme}>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Hackathons & Wins</h2>
        <div className="p-6 rounded-2xl bg-white/50 dark:bg-black/50 border border-gray-200 dark:border-gray-800 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Airbus Company-Wide Hackathon</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Won 1st place by building a prototype leveraging Gemini to automate internal tasks, demonstrating fast experimentation and integration skills.
            </p>
        </div>
      </ThemeSection>

      {/* 6. CONTACT (Indigo/Calm) */}
      <ThemeSection id="contact" themeName="contact" setActiveTheme={setActiveTheme}>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Let's Connect</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            I'm always open to discussing machine learning, full-stack development, or new opportunities.
          </p>
          <a href="mailto:esha.pakalapati@mail.utoronto.ca" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
            Say Hello
          </a>
        </div>
      </ThemeSection>

      <footer className="py-8 text-center text-gray-500 text-sm">
        © 2026 Esha Pakalapati. Built with Next.js & FastAPI.
      </footer>
    </main>
  );
}