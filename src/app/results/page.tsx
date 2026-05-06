import Link from "next/link";
import { TopAppBar, BottomNavBar, Footer } from "@/components/ui/echodna/Navigation";
import { Sparkles, Share2, Disc3, Activity, HeartPulse, LocateFixed } from "lucide-react";
import { GlassCard } from "@/components/ui/echodna/GlassCard";

export default function ResultsPage() {
  return (
    <>
      <TopAppBar />
      
      <main className="max-w-[450px] mx-auto px-4 py-8 space-y-12 mb-24">
        {/* CARD 1: ARCHETYPE (Tarot Holographic) */}
        <section className="relative aspect-[9/16] w-full rounded-[2rem] overflow-hidden group border border-white/5 shadow-2xl">
          <div className="absolute inset-0 bg-surface-container-lowest">
            <img className="w-full h-full object-cover opacity-60" alt="Tarot Card" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDykxRNdcvTSfwa45oooOgqP2G5vZLkSenQR76rUoT7zPia3K1z6q1Y6KaDjnTDkVUL-BiMg-qNF6ZAztxsH7p5ibnPBsKdSDPODVodKENCxp7vdTbAcO2qNDQJKNSwlSLNqIWvrCymWEL9c1hSmDVsCan9Cib3mmhF_q6FMk-e6vx7YIIrPr32Oeb8D7xpZbQi-kvuCMMRxIj5DcN37MUhmSIZKnbh8A5wqhAaoFsbw2WZ5UXcGRUBytCmZ-e0cN0Xq_ROcqjTfKI" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10 mix-blend-overlay"></div>
          </div>
          
          <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-background via-background/60 to-transparent">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-container/20 border border-primary-container/30 rounded-full backdrop-blur-sm">
                <Sparkles size={14} className="text-primary" />
                <span className="font-label-caps text-primary">SONIC ARCHETYPE</span>
              </div>
              <h2 className="font-display-xl text-headline-lg text-white">Midnight Dreamer</h2>
              <p className="text-on-surface-variant font-body-md leading-relaxed">
                Your data reveals a preference for liminal spaces and rhythmic solitude. You find clarity in the echo of synth-heavy production.
              </p>
              
              <div className="pt-4 grid grid-cols-3 gap-2">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border border-primary/50 overflow-hidden mb-2">
                    <img className="w-full h-full object-cover" alt="Lorn" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuLbQUWesj0AP8I98XhrRbmqu8ziQPN1O6qHRvedeeX4iWUFSwTINKAn_29NNQ-7Oj1RxX-CKNUWim-0_qq7OY6merEEpDRJR_0tK6GHUCUYBEZB3jahpHwMII99elceehOhIx8wJL0H8UDCGaV_DvbwX5CL_T0JFR_l6rXN_mMB8j_zldyJIVx5o7daI8vST6YXxGYKtG-e2IDrsLVujp-8GuRfzY6j6MszFtQIx8vlPoNnUgERT2bwTjeGajfW_NSBZshgPh2Kw" />
                  </div>
                  <span className="text-[10px] font-label-caps text-center text-on-surface-variant">Lorn</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border border-primary/50 overflow-hidden mb-2">
                    <img className="w-full h-full object-cover" alt="Moderat" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcOZD7I-XO1dlZY8Gbah7-VI7kvmylg3Nb79YxebfhBeZXynFkmaIpGIZFstbJL6pRWuw8r0huLMUGkoIvQfMTR7cMMqrA6eA65n2iDQRpx4HI8nyw5-zyPL_hPuJ6MuHO5Fpip-hin4Xx4Xzg7no8YBJ0UKfnhYq_25eDL2YgwvSIfG0tA1whoCmRPxrbjX26dyTOJXlERdQByDH5508YUDnlU7iQ5GTk68XiTjOHWtGqW9f16TCpndF0GnQuOQW84Air2qcEvpw" />
                  </div>
                  <span className="text-[10px] font-label-caps text-center text-on-surface-variant">Moderat</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border border-primary/50 overflow-hidden mb-2">
                    <img className="w-full h-full object-cover" alt="Burial" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBisb7F46gYUoT4EtLzEkOox-qxSu1hqh-q7atO-rvoKtxiYmMtkazi69QhMImLxc4zZB-Dg8ACbOojGk1xxsZH6fELCjmMKX6dQEHhDC8x0qPEqGtd9tolvpseYlTb4FLfpX452fMHen0-QatL2332ecP-aWAlNpJJjj-8QN3vSP7V0ejikBSwD4ooGgZFqilD2v7xDPdM-PmKswf4aPCO2bD2PsyjQq8M32aFZDsIairPVbtmkto4il_k6zMGn2mjdnl5CckxXPM" />
                  </div>
                  <span className="text-[10px] font-label-caps text-center text-on-surface-variant">Burial</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute top-6 right-6 text-white/30">
            <Sparkles size={32} />
          </div>
        </section>

        {/* CARD 2: GENRE DNA (3D Donut Chart) */}
        <section className="glass-card aspect-[9/16] w-full rounded-[2rem] p-8 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-container via-secondary-container to-tertiary-container"></div>
          
          <div className="text-center mb-10">
            <h3 className="font-label-caps text-secondary-fixed mb-2 uppercase tracking-widest">Helix Analysis</h3>
            <h2 className="font-headline-lg text-white">Genre DNA</h2>
          </div>
          
          <div className="relative w-64 h-64 mb-10">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle className="text-white/5" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeWidth="8"></circle>
              <circle className="text-primary-container drop-shadow-[0_0_12px_rgba(29,185,84,0.6)]" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeDasharray="251.2" strokeDashoffset="158" strokeLinecap="round" strokeWidth="12"></circle>
              <circle className="text-secondary-container/80" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeDasharray="251.2" strokeDashoffset="210" strokeLinecap="round" strokeWidth="10"></circle>
              <circle className="text-tertiary-container/60" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeDasharray="251.2" strokeDashoffset="240" strokeLinecap="round" strokeWidth="10"></circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-[36px] font-bold text-white font-display-xl">37%</span>
              <span className="text-[10px] font-label-caps text-on-surface-variant">INDIE MELANCHOLY</span>
            </div>
          </div>
          
          <div className="w-full space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-primary-container shadow-[0_0_10px_#1db954]"></div>
                <span className="font-body-md text-on-surface">Indie Melancholy</span>
              </div>
              <span className="font-headline-md text-primary-container">37%</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-secondary-container shadow-[0_0_10px_#00eefc]"></div>
                <span className="font-body-md text-on-surface">Cyber-Techno</span>
              </div>
              <span className="font-headline-md text-secondary-container">22%</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-tertiary-container shadow-[0_0_10px_#d879ff]"></div>
                <span className="font-body-md text-on-surface">Atmospheric</span>
              </div>
              <span className="font-headline-md text-tertiary-container">19%</span>
            </div>
          </div>
        </section>

        {/* CARD 3: MOOD SPECTRUM (Radar Chart) */}
        <section className="glass-card aspect-[9/16] w-full rounded-[2rem] p-8 flex flex-col relative border border-white/5 shadow-2xl">
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
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6 font-label-caps text-[10px] text-white">FOCUS</span>
              <span className="absolute left-0 top-1/2 -translate-x-10 -translate-y-1/2 font-label-caps text-[10px] text-white -rotate-90">CHAOS</span>
              <span className="absolute right-0 top-1/2 translate-x-10 -translate-y-1/2 font-label-caps text-[10px] text-white rotate-90">DANCE</span>
              
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                <polygon fill="rgba(216, 121, 255, 0.3)" points="50,15 85,50 50,70 30,50" stroke="#d879ff" strokeWidth="1"></polygon>
                <circle cx="50" cy="15" fill="#d879ff" r="2"></circle>
                <circle cx="85" cy="50" fill="#d879ff" r="2"></circle>
                <circle cx="50" cy="70" fill="#d879ff" r="2"></circle>
                <circle cx="30" cy="50" fill="#d879ff" r="2"></circle>
              </svg>
            </div>
          </div>
          
          <div className="mt-auto p-6 bg-tertiary/10 rounded-2xl border border-tertiary/20">
            <div className="flex gap-3 items-start">
              <Activity className="text-tertiary mt-1" />
              <p className="text-body-md text-on-surface leading-tight">
                "Your listening habits indicate a 'High-Energy Focus' state. You use rhythmic complexity to drown out external noise while maintaining cognitive peak."
              </p>
            </div>
          </div>
        </section>

        {/* CARD 4: ALTER EGO (Neon Ghost) */}
        <section className="relative aspect-[9/16] w-full rounded-[2rem] overflow-hidden group shadow-2xl">
          <div className="absolute inset-0 bg-surface-container-lowest">
            <img className="w-full h-full object-cover" alt="Neon Ghost" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs7bTVh3u7-_oLLgFSzGM6UO0YN_EuG1VrlmFUwKYgB_XR3CEtV8i2KbEZizIgdPSjIuvxTnrdZWc2FytSIKAfpBEJ6BaUnnfSgaT1c7_gru9Th5nTFN57IC6WJHhgpVQC8a33-ufENlTwc__eqdnN_dBofkkMum_c80Sp-vXR0FSISKi7V2b3ItFPLntZXCZve1IsuETtNrNMvrzOt1ptG0-_0-l4-nGuH72e_7yL9p2OEd5b2DF_hm7A6om0tnmSqa8LxvAqMmY" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90"></div>
            <div className="absolute top-1/4 left-0 w-full h-px bg-secondary-container shadow-[0_0_15px_#00eefc] opacity-50"></div>
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
                <span className="font-label-caps text-[10px] text-on-surface-variant block mb-1">LOCATION</span>
                <span className="font-headline-md text-white text-lg">Tokyo 2AM</span>
              </div>
              <div className="glass-card p-4 rounded-xl">
                <span className="font-label-caps text-[10px] text-on-surface-variant block mb-1">VIBE</span>
                <span className="font-headline-md text-white text-lg">Crystalline</span>
              </div>
              <div className="glass-card p-4 rounded-xl col-span-2 flex justify-between items-center">
                <div>
                  <span className="font-label-caps text-[10px] text-on-surface-variant block mb-1">PULSE RATE</span>
                  <span className="font-headline-md text-white text-lg">128 BPM TECHNO</span>
                </div>
                <HeartPulse className="text-secondary-container" size={24} />
              </div>
            </div>
            
            <Link href="/export">
              <button className="mt-8 w-full py-4 rounded-full bg-gradient-to-r from-secondary-container to-primary text-on-primary-fixed font-label-caps tracking-widest shadow-[0_0_30px_rgba(0,238,252,0.4)] flex items-center justify-center gap-2 active:scale-95 transition-transform hover:scale-[1.02]">
                <Share2 size={18} />
                SHARE IDENTITY
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <BottomNavBar />
    </>
  );
}
