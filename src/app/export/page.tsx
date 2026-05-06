import { TopAppBar, BottomNavBar, Footer } from "@/components/ui/echodna/Navigation";
import { Download, Share2, Clapperboard, Grid, AlignLeft } from "lucide-react";

export default function ExportPage() {
  return (
    <>
      <TopAppBar />

      <main className="max-w-4xl mx-auto px-container-margin py-10 flex flex-col items-center mb-24">
        {/* Header Section */}
        <section className="text-center mb-12">
          <h1 className="font-headline-lg text-headline-lg mb-2">Share Your Sonic Identity</h1>
          <p className="text-on-surface-variant opacity-70">Capture your digital frequency for the world to see.</p>
        </section>

        {/* Vertical Story Carousel Interface */}
        <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_320px] gap-section-gap">
          
          {/* Mobile Optimized Card Preview Area */}
          <div className="flex flex-col items-center gap-8">
            <div className="w-full max-w-[360px] aspect-[9/16] border border-primary/30 rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(83,224,118,0.1)] group relative">
              
              {/* Card 1: The Archetype */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <div>
                  <div className="flex justify-between items-start">
                    <div className="font-label-caps text-label-caps tracking-widest text-primary">SONIC ARCHETYPE</div>
                    <div className="opacity-30 mix-blend-overlay font-display-xl text-headline-md">DNA.01</div>
                  </div>
                  
                  <div className="mt-12">
                    <h2 className="font-display-xl text-headline-lg leading-tight uppercase">The Midnight<br/>Architect</h2>
                    <p className="font-body-md text-on-surface-variant mt-4 leading-relaxed">
                      78% Synthetic Precision. You build sonic worlds within the silence of the AM hours.
                    </p>
                  </div>
                </div>
                
                {/* Waveform graphic */}
                <div className="w-full h-32 flex items-end gap-1 mb-8">
                  <div className="bg-primary w-full h-[40%] rounded-t-sm opacity-60"></div>
                  <div className="bg-secondary-container w-full h-[70%] rounded-t-sm"></div>
                  <div className="bg-primary w-full h-[100%] rounded-t-sm"></div>
                  <div className="bg-tertiary-container w-full h-[60%] rounded-t-sm opacity-80"></div>
                  <div className="bg-primary w-full h-[30%] rounded-t-sm opacity-40"></div>
                </div>
                
                {/* User footer */}
                <div className="flex justify-between items-end border-t border-white/10 pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-primary/50 overflow-hidden">
                      <img className="w-full h-full object-cover" alt="User Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMt0UC2mc_OKzFP8aLEKRrSbm_WufT3QR1z4x9x06Ps3llXaRwZhZYkpPoD2-c8zr3kfkUNquJ93uj5YtvhDVmf8D6sf8HbdOWf3vmlW0zwteJRhe696nKSZZM_Sc9nM-vZUGUjIXaxi7uzgsM6MsMqTRWdklVESYsU-JWmuLiB2MO5ufigM8LrWwUaFDGMJP86wC1QFwDypezK4gGLwns4JxUsKB_OC5dqe7Zb9dd8uK5RXqPfL9VOnxkLhP6jXBKD-X_j95YDaI" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">@echo_user</div>
                      <div className="text-[10px] uppercase opacity-50 tracking-tighter">EchoDNA Personal Scan</div>
                    </div>
                  </div>
                  <div className="font-display-xl text-headline-md text-primary opacity-20">ECHO</div>
                </div>
              </div>
              
              {/* Watermark Layer */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-20 pointer-events-none z-10">
                <span className="text-[10px] font-label-caps tracking-widest text-nowrap">POWERED BY DATA-KINETICISM AI</span>
              </div>
              
              {/* Background Image for Visual Interest */}
              <div className="absolute inset-0 z-0 overflow-hidden bg-surface-container-lowest">
                <img className="w-full h-full object-cover opacity-40 mix-blend-screen" alt="Abstract Background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaPGvWT-u0LczcSgxDaANGLuXqYvA-AYnNIVKL79SCpkDCXNb3l2y3Kox_Z4j-QfrQ6S2JQgbT-dBFybE21Rfx-jcBFFPU0XdVoy5mXZMQSKb1ZsnjIZ_fEli9upqZPcsJUowlG_8AOsYIlG7I-XHChmNNob8F6CA6v_8D1R3NNj0ZrxGz-2tX_Z8vshV2BKlW2eoEcEMsKOl5Pnefp-HpExFNeOvBKMBe-wx87HSK97YIvqeipFwN3I3jouNaaOsoMSAgwVIZtKY" />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              </div>
            </div>
            
            {/* Pagination/Selector Dots */}
            <div className="flex gap-4">
              <div className="w-12 h-1 bg-primary rounded-full shadow-[0_0_10px_rgba(83,224,118,0.5)]"></div>
              <div className="w-12 h-1 bg-white/20 rounded-full cursor-pointer hover:bg-white/40"></div>
              <div className="w-12 h-1 bg-white/20 rounded-full cursor-pointer hover:bg-white/40"></div>
            </div>
          </div>

          {/* Controls Panel */}
          <aside className="flex flex-col gap-6">
            
            {/* Theme Switcher */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-label-caps text-label-caps mb-4 opacity-70">SELECT FREQUENCY</h3>
              <div className="grid grid-cols-3 gap-3">
                <button className="aspect-square rounded-lg bg-primary/20 border-2 border-primary flex items-center justify-center transition-all scale-95">
                  <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_8px_rgba(83,224,118,0.8)]"></div>
                </button>
                <button className="aspect-square rounded-lg bg-secondary-container/10 border border-white/10 flex items-center justify-center transition-all hover:bg-white/5">
                  <div className="w-4 h-4 rounded-full bg-secondary-container"></div>
                </button>
                <button className="aspect-square rounded-lg bg-tertiary-container/10 border border-white/10 flex items-center justify-center transition-all hover:bg-white/5">
                  <div className="w-4 h-4 rounded-full bg-tertiary-container"></div>
                </button>
              </div>
            </div>
            
            {/* Export Actions */}
            <div className="glass-card rounded-2xl p-6 flex flex-col gap-4">
              <button className="w-full bg-primary text-on-primary font-label-caps py-4 rounded-full flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(83,224,118,0.4)] transition-all hover:scale-[1.02] active:scale-95">
                <Download size={18} />
                SAVE HIGH-RES IMAGE
              </button>
              
              <div className="grid grid-cols-3 gap-3">
                <button className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-white/5 transition-colors">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
                    <Share2 size={18} />
                  </div>
                  <span className="text-[10px] font-label-caps opacity-60">STORY</span>
                </button>
                <button className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-white/5 transition-colors">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
                    <Clapperboard size={18} />
                  </div>
                  <span className="text-[10px] font-label-caps opacity-60">REEL</span>
                </button>
                <button className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-white/5 transition-colors">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
                    <Grid size={18} />
                  </div>
                  <span className="text-[10px] font-label-caps opacity-60">POST</span>
                </button>
              </div>
            </div>

            {/* DNA Chip Stats Preview */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-label-caps text-label-caps mb-4 opacity-70">DNA MARKERS</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded-full text-[11px] font-bold">CYBER-POP</span>
                <span className="px-3 py-1 bg-secondary-container/20 text-secondary-fixed border border-secondary-container/30 rounded-full text-[11px] font-bold">HYPER-FOCUS</span>
                <span className="px-3 py-1 bg-white/10 text-on-surface-variant border border-white/10 rounded-full text-[11px] font-bold">96 BPM</span>
              </div>
            </div>
            
          </aside>
        </div>
      </main>

      <Footer />
      <BottomNavBar />
    </>
  );
}
