"use client";

import { motion } from "framer-motion";

export const WaveformVisualizer = () => {
  return (
    <div className="flex items-end justify-center gap-1.5 h-16">
      {[8, 12, 16, 10, 14, 8, 12, 10].map((height, i) => (
        <motion.div
          key={i}
          initial={{ height: 10 }}
          animate={{ height: height * 4 }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 0.5 + Math.random() * 0.5,
            ease: "easeInOut",
          }}
          className="waveform-bar"
        />
      ))}
    </div>
  );
};
