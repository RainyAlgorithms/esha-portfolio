"use client";
import { motion } from "framer-motion";

export default function WaterWaves() {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-0 pointer-events-none">
      {/* Back Wave (Slower, lighter blue) */}
      <motion.svg
        className="absolute bottom-0 block w-[200%] h-[150px] md:h-[250px]"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
      >
        {/* We draw the path twice side-by-side so it loops seamlessly */}
        <path fill="#3b82f6" fillOpacity="0.3" d="M0,160L48,170.7C96,181,192,203,288,181.3C384,160,480,96,576,90.7C672,85,768,139,864,170.7C960,203,1056,213,1152,192C1248,171,1344,117,1392,90.7L1440,64L1440,320L0,320Z"></path>
        <path transform="translate(1440, 0)" fill="#3b82f6" fillOpacity="0.3" d="M0,160L48,170.7C96,181,192,203,288,181.3C384,160,480,96,576,90.7C672,85,768,139,864,170.7C960,203,1056,213,1152,192C1248,171,1344,117,1392,90.7L1440,64L1440,320L0,320Z"></path>
      </motion.svg>

      {/* Front Wave (Faster, darker blue) */}
      <motion.svg
        className="relative block w-[200%] h-[120px] md:h-[200px]"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        animate={{ x: ["-50%", "0%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
      >
        <path fill="#2563eb" fillOpacity="0.6" d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,213.3C672,203,768,149,864,149.3C960,149,1056,203,1152,213.3C1248,224,1344,192,1392,176L1440,160L1440,320L0,320Z"></path>
        <path transform="translate(1440, 0)" fill="#2563eb" fillOpacity="0.6" d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,213.3C672,203,768,149,864,149.3C960,149,1056,203,1152,213.3C1248,224,1344,192,1392,176L1440,160L1440,320L0,320Z"></path>
      </motion.svg>
    </div>
  );
}