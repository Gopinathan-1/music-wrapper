"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { TopAppBar, BottomNavBar, Footer } from "@/components/ui/echodna/Navigation";
import { CheckCircle2, Circle } from "lucide-react";

export default function AnalyzingPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/results");
    }, 4000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <>
      <TopAppBar />

      <main className="relative w-full h-screen flex flex-col items-center justify-center pt-20 px-container-margin overflow-hidden mb-24">
        {/* Background Particle Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full blur-[1px] opacity-40"></div>
          <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-secondary-container rounded-full blur-[1px] opacity-30"></div>
          <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-tertiary rounded-full blur-[1px] opacity-40"></div>
          <div className="absolute top-2/3 left-10 w-1 h-1 bg-white rounded-full blur-[1px] opacity-20"></div>
        </div>

        {/* Main Scanner Interface */}
        <div className="relative z-10 w-full max-w-lg flex flex-col items-center gap-12">
          
          {/* DNA Core / Circular Scanner */}
          <div className="relative flex items-center justify-center">
            {/* Rotating Rings */}
            <div className="absolute w-80 h-80 border-2 border-primary/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute w-72 h-72 border border-secondary-container/40 rounded-full border-dashed animate-[spin_15s_linear_infinite_reverse]"></div>
            <div className="absolute w-96 h-96 border border-white/5 rounded-full"></div>
            
            {/* The "DNA Strand" or AI Core */}
            <div className="relative w-64 h-64 glass-card rounded-full flex items-center justify-center overflow-hidden shadow-[0_0_80px_rgba(83,224,118,0.2)]">
              <img className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-screen animate-pulse" alt="DNA Strand core" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChm0OZAb-G_Gz2hKoW8U8E1OQxy5OSu4p_OzpY4b0B06DiXG_XTdYR1gEeXVnRpEVWY7UUQOfNa7NPB9ppfsWzJVgpBXN8yHIGNXhzpH1ZljJLxZpCBd4TTpLes4xKTWufyD-g17CnzyCkDbR2o9hIE9B2q0yOvpK43s-UNfwhqEsFcT1mkBShOR_KpruFTlACwPgfSGMyCecHomglMq88uUKbl7TE0cw3A0wmh63qkU8G0-FSSu6KHRj7vkSKjdXbjl12aPdxpw4" />
              
              <div className="z-20 flex flex-col items-center">
                <span className="font-display-xl text-primary text-[64px] tracking-tight">84%</span>
                <span className="font-label-caps text-primary/60 mt-[-8px]">ANALYZING</span>
              </div>
              
              {/* Scan Line Overlay */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-full">
                <div className="w-full h-[2px] bg-primary/50 shadow-[0_0_15px_#53e076] animate-[bounce_3s_infinite]"></div>
              </div>
            </div>

            {/* Orbiting Genre Bubbles */}
            <div className="absolute -top-10 -right-10 glass-card px-4 py-2 rounded-full border border-primary/30 flex items-center gap-2 animate-bounce">
              <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_8px_#53e076]"></div>
              <span className="font-label-caps text-[10px]">HYPERPOP</span>
            </div>
            <div className="absolute bottom-10 -left-12 glass-card px-4 py-2 rounded-full border border-tertiary/30 flex items-center gap-2">
              <div className="w-2 h-2 bg-tertiary rounded-full shadow-[0_0_8px_#ecb2ff]"></div>
              <span className="font-label-caps text-[10px]">LO-FI JAZZ</span>
            </div>
            <div className="absolute top-1/2 -right-24 glass-card px-4 py-2 rounded-full border border-secondary-container/30 flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary-container rounded-full shadow-[0_0_8px_#00eefc]"></div>
              <span className="font-label-caps text-[10px]">POST-PUNK</span>
            </div>
          </div>

          {/* Analysis Progress Steps */}
          <div className="w-full space-y-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="font-headline-md text-headline-md text-primary tracking-wide">Building your genre DNA...</h2>
              <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[84%] shadow-[0_0_15px_rgba(83,224,118,0.8)]"></div>
              </div>
            </div>

            {/* Step Indicators */}
            <div className="grid grid-cols-1 gap-3 max-w-xs mx-auto">
              <div className="flex items-center gap-3 opacity-100 transition-opacity">
                <CheckCircle2 size={16} className="text-primary fill-primary/20" />
                <p className="font-label-caps text-on-surface/80">Scanning your sonic identity...</p>
              </div>
              <div className="flex items-center gap-3 opacity-100 transition-opacity">
                <CheckCircle2 size={16} className="text-primary fill-primary/20" />
                <p className="font-label-caps text-on-surface/80">Analyzing emotional patterns...</p>
              </div>
              <div className="flex items-center gap-3 animate-pulse">
                <div className="w-4 h-4 rounded-full border-2 border-primary flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                </div>
                <p className="font-label-caps text-primary">Building your genre DNA...</p>
              </div>
              <div className="flex items-center gap-3 opacity-40">
                <Circle size={16} className="text-outline" />
                <p className="font-label-caps text-outline">Detecting your alter ego...</p>
              </div>
              <div className="flex items-center gap-3 opacity-40">
                <Circle size={16} className="text-outline" />
                <p className="font-label-caps text-outline">Generating your personality profile...</p>
              </div>
            </div>
          </div>
        </div>

        {/* Audio Reactive Waveform (Static representation) */}
        <div className="absolute bottom-24 left-0 right-0 flex items-end justify-center gap-1 h-12 opacity-30">
          {[20, 40, 80, 60, 90, 100, 70, 30, 50, 80, 20].map((h, i) => (
            <div key={i} className={`w-1 bg-primary rounded-full ${h === 100 ? 'shadow-[0_0_10px_#53e076]' : ''}`} style={{ height: `${h}%` }}></div>
          ))}
        </div>

        {/* Artist Image Fragments */}
        <div className="absolute top-1/4 -left-12 w-32 h-32 rounded-2xl glass-card overflow-hidden -rotate-12 opacity-40">
          <img className="w-full h-full object-cover grayscale brightness-75" alt="Artist background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDboHueVWyw86RLRXVCwdYixhKkvINPvguUa26xzo1d4L-x7Tpb8hgA_2mrav1w-gwmpf5YVAON9zETkr7sUGctIHBlNOX69FHBUcqfWURTb5VE79DEIBefTqCJkXjXqEgcpYdXMZxpfHEMyHUM7CeRIS4bEgZMuyNV3iuRN2-9dSeSwQ1G4dv4OiEGfoW6TxnWZnIoQ2UY23bXHdOmMoDfbx0brpy_q3mrqM7eBUzUpFYNH0mOgelM9Iv5UAL6Qhlhn1rPA_WAuq0" />
        </div>
        <div className="absolute bottom-1/4 -right-12 w-40 h-40 rounded-full glass-card overflow-hidden rotate-6 opacity-30">
          <img className="w-full h-full object-cover" alt="Studio background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsrMRUyu0F49gokL3gei4mTF9b-HdtqLFQD2-bFOuAEsg2ymo6JNuXigIFvnu_29So7DhTnz91BTYHuwfPJH9ZFIBBfOi--ukUbzrYpjbdFfLVfqnZ0Wi-qgd9RcW_Tg6gNsJoCcO_ZL34jI_S1y5C8nNlT5tCYRKf39lcc69xSTS_XyuZYyp7kgY14VT6g2oqL8M1Uff08c7_MP5cukyvsA-Nh7qYlknwX_yHUMB0EKO18zl7PXHD_26zRczCnjxDCcGZPj6_V-k" />
        </div>
      </main>

      <Footer />
      <BottomNavBar />
    </>
  );
}
