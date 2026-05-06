import { TopAppBar, BottomNavBar, Footer } from "@/components/ui/echodna/Navigation";
import { GlassCard } from "@/components/ui/echodna/GlassCard";
import { Button } from "@/components/ui/echodna/Button";
import { Share, Download } from "lucide-react";

export default function SharePage() {
  return (
    <>
      <TopAppBar />

      <main className="max-w-4xl mx-auto px-container-margin py-10 pb-32 flex flex-col items-center">
        <h1 className="font-display-xl text-headline-lg text-center text-primary mb-8 tracking-tighter">Share Your Identity</h1>
        
        <GlassCard className="w-full max-w-md aspect-[9/16] relative overflow-hidden p-8 flex flex-col justify-between">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 via-surface to-tertiary/20"></div>
          
          <div className="text-center mt-8">
            <p className="font-label-caps text-label-caps tracking-widest text-primary mb-2">MY SPOTIFY ARCHETYPE</p>
            <h2 className="font-display-xl text-[48px] leading-none mb-4">Neon Ghost</h2>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <div className="w-48 h-48 rounded-full bg-surface-container-highest flex items-center justify-center p-2 relative">
               <div className="absolute -inset-4 rounded-full border border-primary/30 animate-[spin_10s_linear_infinite]"></div>
               <img className="w-full h-full object-cover rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8xQvJci4F6BBC3NMgQEubEmQWmIvp0dpwFxb5bBQDjuMLYrU32hiIlizqcX7mM-pp1XLgdY-M3DEkKL5OA5-0_QnY5oxEejdyYjdCj8NY_FcT5PK8-4NkfTLNwGcNjemwZ3av27n_0pz6rdnYJjaDqHpChY8krem0WHLW-CKIzX73moTxjgs93oVl2yyiiydXAN-meSGddMiJjdzna75r-Y68aZF6cxHblqOtIxC37Wu9qoMXss-qOkbKOI_CfPvy7_aBSJoU804" alt="Neon Ghost" />
            </div>
          </div>

          <div className="flex flex-col gap-4 text-center mb-8">
             <div className="flex justify-between border-b border-white/10 pb-2">
               <span className="font-label-caps text-[10px] text-on-surface-variant">DOMINANT TRAIT</span>
               <span className="font-label-caps text-[10px] text-primary">BEAUTIFUL CHAOS</span>
             </div>
             <div className="flex justify-between border-b border-white/10 pb-2">
               <span className="font-label-caps text-[10px] text-on-surface-variant">SYNC RATE</span>
               <span className="font-label-caps text-[10px] text-secondary">98.4%</span>
             </div>
             <div className="flex justify-between pb-2">
               <span className="font-label-caps text-[10px] text-on-surface-variant">TOP GENRE</span>
               <span className="font-label-caps text-[10px] text-tertiary">SYNTHWAVE</span>
             </div>
          </div>
          
          <div className="flex items-center justify-between opacity-50">
             <span className="font-headline-md text-sm">EchoDNA</span>
             <span className="font-body-md text-[10px]">2024.1</span>
          </div>
        </GlassCard>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
           <Button variant="primary" className="gap-2">
              <Share size={18} />
              SHARE TO INSTAGRAM
           </Button>
           <Button variant="secondary" className="gap-2">
              <Download size={18} />
              DOWNLOAD IMAGE
           </Button>
        </div>
      </main>

      <Footer />
      <BottomNavBar />
    </>
  );
}
