"use client";
import { motion } from "framer-motion";

export default function HazardPool({ type }: { type: "fire" | "water" | "goo" }) {
  // Define colors based on the hazard type
  const colors = {
    fire: { fill: "#ef4444", glow: "rgba(239, 68, 68, 0.6)" },    // Red Lava
    water: { fill: "#3b82f6", glow: "rgba(59, 130, 246, 0.6)" },  // Blue Water
    goo: { fill: "#22c55e", glow: "rgba(34, 197, 94, 0.6)" },     // Green Toxic Mud
  };

  const { fill, glow } = colors[type];

  return (
    <div className="relative w-full h-8 overflow-hidden rounded-b-xl" style={{ boxShadow: `0 -10px 20px -5px ${glow}` }}>
      {/* Animated bubbling surface */}
      <motion.svg
        className="absolute bottom-0 w-[200%] h-12"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 3 }}
      >
        <path 
          fill={fill} 
          d="M0,40 C150,60 300,20 450,40 C600,60 750,20 900,40 C1050,60 1200,20 1200,40 L1200,120 L0,120 Z" 
        />
        {/* Second half for seamless looping */}
        <path 
          transform="translate(1200, 0)" 
          fill={fill} 
          d="M0,40 C150,60 300,20 450,40 C600,60 750,20 900,40 C1050,60 1200,20 1200,40 L1200,120 L0,120 Z" 
        />
      </motion.svg>
    </div>
  );
}