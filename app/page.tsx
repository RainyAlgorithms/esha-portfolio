"use client";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Typewriter from "./components/Typewriter";
import ForestTimeline from "./components/ForestTimeline";
import ProjectGrid from "./components/ProjectGrid";
import ThemeSection from "./components/ThemeSection";
import GlowingFairy from "./components/GlowingFairy";
import WaterWaves from "./components/WaterWaves";

export default function Home() {
  const [activeTheme, setActiveTheme] = useState("firewater");

  const getThemeClasses = () => {
    switch (activeTheme) {
      case "firewater":
        return "bg-orange-50 dark:bg-orange-950/30"; 
      case "forest":
        return "bg-[#1a1c19] dark:bg-[#121411] bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]";
      case "ice":
        return "bg-blue-50 dark:bg-slate-900"; 
      case "sports":
        return "bg-green-50 dark:bg-teal-950/30"; 
      case "bharatanatyam":
        return "bg-amber-50 dark:bg-[#3d1616]"; 
      case "water":
        return "bg-cyan-50 dark:bg-blue-950"; 
      default:
        return "bg-white dark:bg-gray-950";
    }
  };

  return (
    <main className={`transition-colors duration-1000 ease-in-out ${getThemeClasses()}`}>
      <Navbar />
      
      {/* The Interactive Fairy */}
      <GlowingFairy /> 

      {/* 1. ABOUT / COVER (Fire & Water) */}
      <ThemeSection id="about" themeName="firewater" setActiveTheme={setActiveTheme}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT: Image of You */}
          <div className="relative flex justify-center order-2 md:order-1">
             {/* Fire and Water glowing aura behind the image */}
             <div className="absolute inset-0 bg-gradient-to-tr from-red-500 to-cyan-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
             
             {/* Actual Image Container */}
             {/* IMPORTANT: Make sure to add a photo of yourself named "me.jpg" to your public folder! */}
             <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-[#2a2a2a] overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] z-10 bg-gray-800">
               <img 
                 src="/me.jpg" 
                 alt="Esha Pakalapati" 
                 className="w-full h-full object-cover"
                 onError={(e) => {
                   // Fallback if image isn't found yet
                   (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x400/2a2a2a/ffffff?text=Add+me.jpg+to+public+folder';
                 }}
               />
             </div>
          </div>

          {/* RIGHT: Text and Buttons */}
          <div className="text-center md:text-left order-1 md:order-2">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 min-h-[120px] md:min-h-[140px]">
              Hey! I'm <br className="hidden md:block" />
              <Typewriter />
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
              Currently automating ML pipelines at <span className="text-red-500 font-semibold drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]">Airbus</span>.
              Passionate about building intelligence into the web.
            </p>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              
              {/* View CV Button (Opens in new tab) */}
              <a 
                href="/Esha_Pakalapati_ML_Dev_Resume_2025.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold hover:scale-105 transition-transform shadow-lg"
              >
                View CV
              </a>
              
              {/* GitHub Icon Only (Water Theme Hover) */}
              <a 
                href="https://github.com/rainyalgorithms" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-cyan-500 hover:border-cyan-500 dark:hover:text-cyan-400 dark:hover:border-cyan-400 transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
              </a>
              
              {/* LinkedIn Icon Only (Fire Theme Hover) */}
              <a 
                href="https://linkedin.com/in/esha-pakalapati/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-red-500 hover:border-red-500 dark:hover:text-red-500 dark:hover:border-red-500 transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(239,68,68,0.5)]"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </ThemeSection>

      {/* 2. EXPERIENCE (Forest Temple) */}
      <ThemeSection id="experience" themeName="forest" setActiveTheme={setActiveTheme}>
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black text-[#8b9e73] tracking-widest uppercase drop-shadow-[0_5px_5px_rgba(0,0,0,1)]">
            Forest Temple
          </h2>
          <p className="text-xl text-gray-500 font-mono mt-2">Level 1: Experience</p>
        </div>

        {/* We use the new Forest component here */}
        <ForestTimeline /> 
      </ThemeSection>

      {/* 3. SKILLS (Ice Temple) */}
      <ThemeSection id="skills" themeName="ice" setActiveTheme={setActiveTheme}>
        <h2 className="text-4xl font-bold text-blue-900 dark:text-blue-100 mb-8 drop-shadow-md">Technical Skills</h2>
        <div className="flex flex-wrap gap-4">
            {['Python', 'React', 'FastAPI', 'PyTorch', 'AWS SageMaker', 'PostgreSQL', 'C/C++', 'Java'].map(skill => (
                <div key={skill} className="relative group">
                  <span className="block px-6 py-3 bg-white/40 dark:bg-blue-400/10 backdrop-blur-md border border-white/60 dark:border-blue-300/20 shadow-[0_8px_32px_rgba(0,0,0,0.05)] rounded-xl text-blue-900 dark:text-blue-100 font-semibold tracking-wide transition-all duration-300 group-hover:-translate-y-2 group-hover:bg-white/60 dark:group-hover:bg-blue-400/20 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.8)] dark:group-hover:shadow-[0_0_20px_rgba(96,165,250,0.5)]">
                      {skill}
                  </span>
                </div>
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

      {/* 6. CONTACT (Water Temple) */}
      <div className="relative overflow-hidden mt-20">
        <ThemeSection id="contact" themeName="water" setActiveTheme={setActiveTheme}>
          
          <WaterWaves />
          
          <div className="max-w-xl mx-auto w-full relative z-10 pb-20">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-blue-900 dark:text-white mb-4">Let's Connect</h2>
              <p className="text-lg text-blue-800 dark:text-blue-200">
                Have a question or want to work together? Drop me a message below.
              </p>
            </div>
            
            <form action="YOUR_FORMSPREE_URL_HERE" method="POST" className="forest-y-6 bg-white/30 dark:bg-black/30 p-8 rounded-2xl border border-white/50 dark:border-blue-800/50 backdrop-blur-lg shadow-xl">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-blue-900 dark:text-blue-100 mb-2">Name</label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-lg border border-blue-200 dark:border-blue-800 bg-white/50 dark:bg-blue-950/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow backdrop-blur-sm" placeholder="John Doe" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-blue-900 dark:text-blue-100 mb-2">Email</label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-blue-200 dark:border-blue-800 bg-white/50 dark:bg-blue-950/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow backdrop-blur-sm" placeholder="john@example.com" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-blue-900 dark:text-blue-100 mb-2">Message</label>
                <textarea id="message" name="message" rows={5} required className="w-full px-4 py-3 rounded-lg border border-blue-200 dark:border-blue-800 bg-white/50 dark:bg-blue-950/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow backdrop-blur-sm" placeholder="How can I help you?"></textarea>
              </div>
              
              <button type="submit" className="w-full py-4 px-6 text-white font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 shadow-[0_0_15px_rgba(37,99,235,0.5)] transition-all hover:shadow-[0_0_25px_rgba(37,99,235,0.8)]">
                Send Message
              </button>
            </form>
          </div>
        </ThemeSection>
      </div>

      <footer className="py-8 text-center text-gray-500 text-sm">
        © 2026 Esha Pakalapati. Built with Next.js & FastAPI.
      </footer>
    </main>
  );
}