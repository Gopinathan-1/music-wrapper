"use client";

import Link from "next/link";
import { TopAppBar, BottomNavBar, Footer } from "@/components/ui/echodna/Navigation";
import { Sparkles, Share2, Activity, HeartPulse, LocateFixed, Loader2 } from "lucide-react";
import { useAnalysis } from "@/hooks/useAnalysis";
import { motion } from "framer-motion";

export default function ResultsPage() {
  const { results, loading, error } = useAnalysis();

  if (loading || !results) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-primary">
        <Loader2 className="animate-spin mb-4" size={48} />
        <p className="font-label-caps tracking-widest animate-pulse">Sequencing Your Sonic DNA...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-error text-center px-6">
        <h1 className="font-headline-lg mb-4 text-white">Analysis Failed</h1>
        <p className="text-on-surface-variant mb-8">{error}</p>
        <Link href="/login" className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold">
          TRY AGAIN
        </Link>
      </div>
    );
  }

  const topGenres = Object.entries(results.genres);
  const mood = results.mood;

  return (
    <>
      <TopAppBar />
      
      <main className="max-w-[450px] mx-auto px-4 py-8 space-y-12 mb-24">
        {/* CARD 1: ARCHETYPE */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative aspect-[9/16] w-full rounded-[2rem] overflow-hidden group border border-white/5 shadow-2xl"
        >
          <div className="absolute inset-0 bg-surface-container-lowest">
            <img className="w-full h-full object-cover opacity-60" alt="Archetype Visual" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDykxRNdcvTSfwa45oooOgqP2G5vZLkSenQR76rUoT7zPia3K1z6q1Y6KaDjnTDkVUL-BiMg-qNF6ZAztxsH7p5ibnPBsKdSDPODVodKENCxp7vdTbAcO2qNDQJKNSwlSLNqIWvrCymWEL9c1hSmDVsCan9Cib3mmhF_q6FMk-e6vx7YIIrPr32Oeb8D7xpZbQi-kvuCMMRxIj5DcN37MUhmSIZKnbh8A5wqhAaoFsbw2WZ5UXcGRUBytCmZ-e0cN0Xq_ROcqjTfKI" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10 mix-blend-overlay"></div>
          </div>
          
          <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-background via-background/60 to-transparent">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-container/20 border border-primary-container/30 rounded-full backdrop-blur-sm">
                <Sparkles size={14} className="text-primary" />
                <span className="font-label-caps text-primary">SONIC ARCHETYPE</span>
              </div>
              <h2 className="font-display-xl text-headline-lg text-white">{results.archetype.name}</h2>
              <p className="text-on-surface-variant font-body-md leading-relaxed">
                {results.archetype.description}
              </p>
            </div>
          </div>
          
          <div className="absolute top-6 right-6 text-white/30">
            <Sparkles size={32} />
          </div>
        </motion.section>

        {/* CARD 2: GENRE DNA */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card aspect-[9/16] w-full rounded-[2rem] p-8 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-container via-secondary-container to-tertiary-container"></div>
          
          <div className="text-center mb-10">
            <h3 className="font-label-caps text-secondary-fixed mb-2 uppercase tracking-widest">Helix Analysis</h3>
            <h2 className="font-headline-lg text-white">Genre DNA</h2>
          </div>
          
          <div className="relative w-64 h-64 mb-10">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle className="text-white/5" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeWidth="8"></circle>
              {topGenres.slice(0, 3).map(([genre, percentage], i) => {
                const colors = ["text-primary-container", "text-secondary-container/80", "text-tertiary-container/60"];
                const dashArray = 251.2;
                const dashOffset = dashArray - (dashArray * percentage) / 100;
                return (
                  <circle 
                    key={genre}
                    className={`${colors[i]} transition-all duration-1000`}
                    cx="50" cy="50" fill="transparent" r="40" 
                    stroke="currentColor" 
                    strokeDasharray={dashArray} 
                    strokeDashoffset={dashOffset} 
                    strokeLinecap="round" strokeWidth={12 - i * 2} 
                  />
                );
              })}
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-[36px] font-bold text-white font-display-xl">{topGenres[0]?.[1]}%</span>
              <span className="text-[10px] font-label-caps text-on-surface-variant uppercase">{topGenres[0]?.[0]}</span>
            </div>
          </div>
          
          <div className="w-full space-y-4">
            {topGenres.slice(0, 3).map(([genre, percentage], i) => {
              const dots = ["bg-primary-container", "bg-secondary-container", "bg-tertiary-container"];
              return (
                <div key={genre} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${dots[i]}`}></div>
                    <span className="font-body-md text-on-surface capitalize">{genre}</span>
                  </div>
                  <span className="font-headline-md text-white">{percentage}%</span>
                </div>
              );
            })}
          </div>
        </motion.section>

        {/* CARD 3: MOOD SPECTRUM */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card aspect-[9/16] w-full rounded-[2rem] p-8 flex flex-col relative border border-white/5 shadow-2xl"
        >
          <div className="mb-8 text-center">
            <h3 className="font-label-caps text-tertiary-fixed mb-2 uppercase tracking-widest">Emotional Frequency</h3>
            <h2 className="font-headline-lg text-white">Mood Spectrum</h2>
          </div>
          
          <div className="flex-grow flex items-center justify-center relative mb-8">
            <div className="w-full aspect-square border border-white/10 rounded-full relative">
              <div className="absolute inset-[20%] border border-white/10 rounded-full"></div>
              <div className="absolute inset-[40%] border border-white/10 rounded-full"></div>
              <div className="absolute inset-[60%] border border-white/10 rounded-full"></div>
              
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 font-label-caps text-[10px] text-white">ENERGY</span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6 font-label-caps text-[10px] text-white">VALENCE</span>
              <span className="absolute left-0 top-1/2 -translate-x-10 -translate-y-1/2 font-label-caps text-[10px] text-white -rotate-90">ACOUSTIC</span>
              <span className="absolute right-0 top-1/2 translate-x-10 -translate-y-1/2 font-label-caps text-[10px] text-white rotate-90">DANCE</span>
              
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                <polygon 
                  fill="rgba(216, 121, 255, 0.3)" 
                  points={`50,${100-mood.energy} ${50+mood.danceability/2},50 50,${mood.valence} ${50-mood.acousticness/2},50`} 
                  stroke="#d879ff" strokeWidth="1"
                />
              </svg>
            </div>
          </div>
          
          <div className="mt-auto p-6 bg-tertiary/10 rounded-2xl border border-tertiary/20">
            <div className="flex gap-3 items-start">
              <Activity className="text-tertiary mt-1" />
              <p className="text-body-md text-on-surface leading-tight">
                "Your frequency is calibrated at {mood.tempo} BPM with a {mood.energy > 50 ? "high" : "low"} energy signature."
              </p>
            </div>
          </div>
        </motion.section>

        {/* CARD 4: ALTER EGO */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative aspect-[9/16] w-full rounded-[2rem] overflow-hidden group shadow-2xl"
        >
          <div className="absolute inset-0 bg-surface-container-lowest">
            <img className="w-full h-full object-cover" alt="Neon Ghost" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs7bTVh3u7-_oLLgFSzGM6UO0YN_EuG1VrlmFUwKYgB_XR3CEtV8i2KbEZizIgdPSjIuvxTnrdZWc2FytSIKAfpBEJ6BaUnnfSgaT1c7_gru9Th5nTFN57IC6WJHhgpVQC8a33-ufENlTwc__eqdnN_dBofkkMum_c80Sp-vXR0FSISKi7V2b3ItFPLntZXCZve1IsuETtNrNMvrzOt1ptG0-_0-l4-nGuH72e_7yL9p2OEd5b2DF_hm7A6om0tnmSqa8LxvAqMmY" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90"></div>
          </div>
          
          <div className="absolute top-8 left-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container/20 border border-secondary-container/30 rounded-full backdrop-blur-md">
              <LocateFixed size={14} className="text-secondary-container" />
              <span className="font-label-caps text-secondary-container">ALTER EGO DETECTED</span>
            </div>
          </div>
          
          <div className="absolute inset-0 p-8 flex flex-col justify-end">
            <div className="space-y-2 mb-6">
              <h4 className="font-label-caps text-secondary-container/80 uppercase tracking-[0.2em]">The Identity</h4>
              <h2 className="font-display-xl text-headline-lg text-white">Neon Ghost</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-4 rounded-xl">
                <span className="font-label-caps text-[10px] text-on-surface-variant block mb-1">VIBE</span>
                <span className="font-headline-md text-white text-lg">{mood.valence > 50 ? "Euphoric" : "Melancholic"}</span>
              </div>
              <div className="glass-card p-4 rounded-xl">
                <span className="font-label-caps text-[10px] text-on-surface-variant block mb-1">PULSE</span>
                <span className="font-headline-md text-white text-lg">{mood.tempo} BPM</span>
              </div>
            </div>
            
            <Link href="/export">
              <button className="mt-8 w-full py-4 rounded-full bg-gradient-to-r from-secondary-container to-primary text-on-primary-fixed font-label-caps tracking-widest shadow-[0_0_30px_rgba(0,238,252,0.4)] flex items-center justify-center gap-2 active:scale-95 transition-transform hover:scale-[1.02]">
                <Share2 size={18} />
                SHARE IDENTITY
              </button>
            </Link>
          </div>
        </motion.section>
      </main>

      <Footer />
      <BottomNavBar />
    </>
  );
}
