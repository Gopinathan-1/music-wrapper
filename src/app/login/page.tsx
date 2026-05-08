"use client";

import { signIn } from "next-auth/react";
import { GlassCard } from "@/components/ui/echodna/GlassCard";
import { Button } from "@/components/ui/echodna/Button";
import { Disc3, Sparkles, ShieldCheck, ArrowLeft, Headphones } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LoginPage() {
  const handleSpotifyLogin = () => {
    signIn("spotify", { callbackUrl: "/analyzing" });
  };

  return (
    <>
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-primary rounded-full aurora-blur opacity-40"></div>
        <div className="absolute top-[40%] -right-[15%] w-[50%] h-[50%] bg-tertiary-container rounded-full aurora-blur opacity-30"></div>
        <div className="absolute -bottom-[10%] left-[20%] w-[40%] h-[40%] bg-secondary-container rounded-full aurora-blur opacity-30"></div>
        
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, var(--color-primary) 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-container-margin py-8">
        <div className="w-full max-w-md flex flex-col items-center">
          
          <div className="absolute top-6 left-6 z-20">
            <Link href="/" className="flex items-center gap-2 text-primary hover:text-secondary-fixed transition-colors font-label-caps text-[10px] group">
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              Back
            </Link>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 text-center"
          >
            <span className="font-display-xl text-headline-lg text-primary tracking-tighter">EchoDNA</span>
          </motion.div>

          <GlassCard className="w-full rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden border border-white/10 shadow-2xl">
            <div className="absolute inset-0 p-[1px] rounded-[2.5rem] bg-gradient-to-br from-primary/40 via-transparent to-tertiary-container/40 -z-10"></div>
            
            <div className="text-center mb-10">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-surface-container-high mb-6 relative"
              >
                <Disc3 size={32} className="text-primary z-10" />
                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full"></div>
              </motion.div>
              <h1 className="font-headline-lg text-headline-lg mb-3 text-on-surface leading-tight">Your Music Taste Has a Personality.</h1>
              <p className="font-body-md text-base text-on-surface-variant/80 max-w-[280px] mx-auto">
                Connect Spotify to unlock your listening archetype and musical DNA.
              </p>
            </div>

            <div className="space-y-6">
              <Button 
                onClick={handleSpotifyLogin}
                className="w-full bg-[#1DB954] text-white font-headline-md py-5 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group relative overflow-hidden shadow-[0_0_20px_rgba(29,185,84,0.3)]"
              >
                <Disc3 size={24} className="fill-white" />
                <span className="font-bold tracking-tight">CONTINUE WITH SPOTIFY</span>
                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12"></div>
              </Button>

              <div className="flex flex-wrap justify-center gap-3 pt-4">
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                  <Sparkles size={12} className="text-primary" />
                  <span className="text-[9px] font-label-caps font-bold uppercase tracking-wider">AI Archetypes</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                  <Headphones size={12} className="text-tertiary" />
                  <span className="text-[9px] font-label-caps font-bold uppercase tracking-wider">Mood Analysis</span>
                </div>
              </div>
            </div>

            <p className="mt-10 text-center text-[10px] font-label-caps text-on-surface-variant/40 leading-relaxed">
              By continuing, you authorize EchoDNA to analyze your listening history. We never store personal identifiers.
            </p>
          </GlassCard>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-col items-center gap-4"
          >
            <div className="flex items-center gap-2 text-on-surface-variant/40">
              <ShieldCheck size={18} />
              <p className="font-label-caps text-[10px] uppercase tracking-[0.2em]">Verified Secure Connection</p>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Dynamic Background visualizer element */}
      <div className="fixed bottom-0 left-0 right-0 h-32 z-5 opacity-20 pointer-events-none flex items-end justify-center gap-[2px]">
        {[...Array(30)].map((_, i) => (
          <motion.div 
            key={i} 
            animate={{ height: [`${Math.random() * 40 + 20}%`, `${Math.random() * 80 + 20}%`, `${Math.random() * 40 + 20}%`] }}
            transition={{ duration: 1.5 + Math.random(), repeat: Infinity, ease: "easeInOut" }}
            className={`w-1 rounded-t-full ${i % 3 === 0 ? 'bg-primary' : i % 2 === 0 ? 'bg-secondary' : 'bg-tertiary'}`}
          />
        ))}
      </div>
    </>
  );
}
