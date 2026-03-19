"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HazardPool from "./HazardPool";

type Experience = {
  id: number;
  title: string;
  company: string;
  start_date: string;
  description: string[];
};

export default function ForestTimeline() {
  const [data, setData] = useState<Experience[]>([]);

  useEffect(() => {
    fetch("/api/experience")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="relative max-w-3xl mx-auto space-y-16">
      {/* The climbing vine in the background */}
      <div className="absolute left-8 top-0 bottom-0 w-4 bg-green-900/40 rounded-full border-x-2 border-green-800/60 shadow-[0_0_15px_rgba(20,83,45,0.5)] z-0"></div>

      {data.map((item, index) => {
        // Alternate hazards and diamonds for aesthetic
        const hazardType = index % 3 === 0 ? "fire" : index % 3 === 1 ? "water" : "goo";
        const diamondColor = index % 2 === 0 ? "text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]" : "text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]";

        return (
          <motion.div 
            key={item.id} 
            className="relative z-10 pl-24 group"
            whileHover={{ y: -5 }} // The platform slightly "lifts" like an elevator when hovered
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* The Collectible Diamond (replaces the standard dot) */}
            <div className={`absolute left-[1.15rem] top-4 w-10 h-10 flex items-center justify-center ${diamondColor}`}>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 transform group-hover:scale-125 transition-transform duration-300">
                <path d="M12 2L2 12l10 10 10-10L12 2z" />
              </svg>
            </div>

            {/* The Stone Platform Card */}
            <div className="bg-[#2a2a2a] border-t-4 border-l-4 border-r-4 border-[#4a4a4a] shadow-[10px_10px_0px_0px_rgba(0,0,0,0.5)] rounded-t-xl overflow-hidden">
              <div className="p-6 relative">
                
                {/* Decorative Moss */}
                <div className="absolute top-0 left-0 w-full h-2 bg-green-700/80 rounded-b-xl opacity-50"></div>

                <h3 className="flex items-center mb-1 text-2xl font-bold text-gray-200 uppercase tracking-widest">
                  {item.title} 
                </h3>
                <h4 className="text-xl text-[#d4d4d4] font-semibold mb-2 flex items-center gap-2">
                  <span className="text-amber-500">@</span> {item.company}
                </h4>
                <time className="block mb-4 text-sm font-mono text-gray-500">
                  {item.start_date}
                </time>
                <ul className="mb-4 text-base font-medium text-gray-400 list-disc pl-5 space-y-2">
                  {item.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>

              {/* The Hazard Pool at the bottom of the platform */}
              <HazardPool type={hazardType} />
            </div>
            
            {/* CHARACTER DROP ZONE: You can add an <img src="/fireboy.png" /> here later with absolute positioning to stand on the card! */}
          </motion.div>
        );
      })}
    </div>
  );
}