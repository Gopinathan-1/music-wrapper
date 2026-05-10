"use client";

import { motion } from "framer-motion";
import { Moon, RefreshCw, Sun, Zap, Music } from "lucide-react";

interface HeroSectionProps {
  analysis: any;
  onRegenerate?: () => void;
  isRegenerating?: boolean;
}

export function HeroSection({ analysis, onRegenerate, isRegenerating }: HeroSectionProps) {
  // Safe fallbacks while loading or if data fails
  const archetype = analysis?.archetype || "Analyzing DNA...";
  const description = analysis?.description || "Syncing with your Spotify listening history to uncover your unique musical personality.";
  
  // Decide which icon to show based on the highest mood
  let Icon = Music;
  if (analysis?.moodSpectrum) {
    const moods = analysis.moodSpectrum;
    const topMood = Object.keys(moods).reduce((a, b) => moods[a] > moods[b] ? a : b);
    if (topMood === 'chill') Icon = Moon;
    else if (topMood === 'energetic') Icon = Zap;
    else if (topMood === 'happy') Icon = Sun;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-900/40 via-black/60 to-black/80 p-8 shadow-[0_0_40px_-15px_rgba(168,85,247,0.4)] backdrop-blur-xl"
    >
      {/* Background ambient glow */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-600/20 blur-[100px]" />
      
      <div className="relative z-10 flex items-center justify-between">
        <div className="max-w-xl">
          <div className="mb-4 inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-purple-300">
            Current Archetype
          </div>
          <h1 className="mb-4 text-4xl sm:text-5xl font-black tracking-tight text-white drop-shadow-lg leading-tight">
            {archetype}
          </h1>
          <p className="mb-8 text-sm leading-relaxed text-white/60">
            {description}
          </p>
          
          <button 
            onClick={onRegenerate}
            disabled={isRegenerating}
            className="group flex items-center gap-2 rounded-xl bg-purple-500/20 px-6 py-3 text-sm font-semibold text-purple-300 ring-1 ring-purple-500/50 transition-all hover:bg-purple-500/30 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] disabled:opacity-50"
          >
            <RefreshCw className={`h-4 w-4 transition-transform ${isRegenerating ? 'animate-spin' : 'group-hover:rotate-180'}`} />
            {isRegenerating ? 'SCANNING...' : 'REGENERATE SCAN'}
          </button>
        </div>

        <div className="relative hidden lg:block pr-12">
          {/* Animated rings */}
          <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 border-t-purple-500/50" />
          <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 border-b-cyan-500/30 border-r-purple-500/30" />
          
          <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-purple-500/10 to-transparent ring-1 ring-purple-500/20 shadow-[inset_0_0_20px_rgba(168,85,247,0.2)]">
            <Icon className="h-12 w-12 text-purple-300 drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
