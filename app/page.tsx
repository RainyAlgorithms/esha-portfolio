"use client";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Timeline from "./components/Timeline";
import ProjectGrid from "./components/ProjectGrid";
import ThemeSection from "./components/ThemeSection";
import GlowingFairy from "./components/GlowingFairy";

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

      <GlowingFairy />

      {/* 1. ABOUT / COVER (Fire & Water) */}
      <ThemeSection id="about" themeName="firewater" setActiveTheme={setActiveTheme}>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
          Building intelligence <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-cyan-500">
            into the web.
          </span>
        </h1>
        <p className="text-xl text-black-600 dark:text-black-400 max-w-2xl mb-8">
          Hi, I'm Esha. A Machine Learning Developer & Full Stack Engineer.
          Currently automating ML pipelines at <span className="text-red-500 font-semibold">Airbus</span>.
        </p>
        
        {/* HERO BUTTONS */}
        <div className="flex flex-wrap gap-4">
          <a 
            href="/Esha_Pakalapati_ML_Dev_Resume_2025.pdf" 
            download 
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:opacity-90 transition-opacity"
          >
            {/* Download Icon */}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            Download CV
          </a>
          <a 
            href="https://github.com/rainyalgorithms" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
          >
            {/* GitHub Icon */}
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/esha-pakalapati/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
          >
            {/* LinkedIn Icon */}
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
            LinkedIn
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
        <div className="max-w-xl mx-auto w-full">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Let's Connect</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Have a question or want to work together? Drop me a message below.
            </p>
          </div>
          
          {/* Formspree handles the actual email sending */}
          <form action="https://formspree.io/f/mnjgokwg" method="POST" className="space-y-6 bg-white/50 dark:bg-black/50 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 backdrop-blur-sm">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
              <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow" placeholder="John Doe" />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
              <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow" placeholder="john@example.com" />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
              <textarea id="message" name="message" rows={5} required className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow" placeholder="How can I help you?"></textarea>
            </div>
            
            <button type="submit" className="w-full py-4 px-6 text-white font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </ThemeSection>

      <footer className="py-8 text-center text-gray-500 text-sm">
        © 2026 Esha Pakalapati. Built with Next.js & FastAPI.
      </footer>
    </main>
  );
}