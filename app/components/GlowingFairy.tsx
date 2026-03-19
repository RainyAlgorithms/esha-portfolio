"use client";
import { motion } from "framer-motion";

export default function GlowingFairy() {
  return (
    // We wrap it in a container that takes up no space so it doesn't mess up your layout
    <div className="fixed inset-0 pointer-events-none z-[100] flex items-center justify-center">
      <motion.div
        drag
        // dragElastic gives it a nice "rubbery" feel when pulling it
        dragElastic={0.2}
        // dragMomentum keeps it from flying off the screen if you let go too fast
        dragMomentum={false} 
        // pointer-events-auto allows us to click it, even though the parent ignores clicks
        className="pointer-events-auto w-6 h-6 rounded-full cursor-grab active:cursor-grabbing"
        
        // 1. The Floating Animation (when you aren't touching it)
        animate={{
          y: [0, -15, 0],
          scale: [1, 1.1, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        
        // 2. The Dragging Animation (when you grab it)
        whileDrag={{ 
            scale: 1.5,
            opacity: 1
        }}
        
        // 3. The Glow Effect (CSS styling)
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(253,224,71,0.8) 50%, rgba(253,224,71,0) 100%)",
          boxShadow: "0 0 30px 15px rgba(253, 224, 71, 0.5), 0 0 60px 30px rgba(253, 224, 71, 0.3)",
        }}
      />
    </div>
  );
}