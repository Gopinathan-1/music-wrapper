import { TopAppBar, BottomNavBar, Footer } from "@/components/ui/echodna/Navigation";
import { GlassCard } from "@/components/ui/echodna/GlassCard";
import { DNAChip } from "@/components/ui/echodna/DNAChip";
import { Microscope, Brain, Share } from "lucide-react";

export default function GenrePage() {
  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary aurora-blur rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-secondary aurora-blur rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-tertiary-fixed-dim aurora-blur rounded-full opacity-20"></div>
      </div>

      <TopAppBar />

      <main className="relative z-10 px-container-margin py-section-gap max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="px-4 py-1 rounded-full bg-primary/20 text-primary font-label-caps text-label-caps mb-4 border border-primary/30">GENOME SEQUENCING COMPLETE</span>
          <h1 className="font-display-xl text-display-xl tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Your Genre DNA</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">We've dissected your acoustic preferences. Your sonic profile is a rare hybrid of cinematic depth and rhythmic unpredictability.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <GlassCard className="lg:col-span-7 rounded-3xl p-8 relative flex flex-col items-center justify-center min-h-[500px]">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj7H8wrZ82xGixMDhtyyN9m-nsUOInyQ__oc1U2Lu4OBKw0scPjCJ0MnRmBjPrcfj7nHvrUy40yUyjtRGgWOYjYU0Y5zfYZbJiiQnov3FaKQsre8TeD_gyEA03HXdduAktSNCLkOG0t-caIAi1J23Q1NHpLfEpySSeffGIAiS9zrXE28u7vXahCoT2xZjB8SYpaEXC-DISBdVnHjTyTK0p1Jg2kS7-5TH6HviRWXaABolBYuJV4V-EH1wNF9MwrGkhRDPC7NFZYV4" alt=""/>
            </div>

            <div className="relative w-80 h-80 rounded-full flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-tertiary p-12 opacity-80">
                <div className="w-full h-full rounded-full bg-background shadow-inner flex items-center justify-center relative">
                  <div className="text-center">
                    <span className="font-display-xl text-headline-lg text-primary block leading-none">88%</span>
                    <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">Cohesion</span>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 left-0 glass-card px-4 py-2 rounded-full border-primary/40 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#53e076]"></div>
                <span className="font-label-caps text-label-caps">Indie Melancholy</span>
              </div>
              <div className="absolute top-1/4 -right-12 glass-card px-4 py-2 rounded-full border-secondary-container/40 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary-container shadow-[0_0_8px_#00eefc]"></div>
                <span className="font-label-caps text-label-caps">Chaotic Energy</span>
              </div>
              <div className="absolute bottom-4 -left-8 glass-card px-4 py-2 rounded-full border-tertiary/40 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-tertiary shadow-[0_0_8px_#ecb2ff]"></div>
                <span className="font-label-caps text-label-caps">Vaporwave</span>
              </div>
            </div>

            <div className="mt-12 glass-card p-6 rounded-2xl border-primary/20 w-full z-10">
              <div className="flex items-start gap-4">
                <Brain className="text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-headline-md text-headline-md mb-1 text-primary">AI Insights</h4>
                  <p className="font-body-md text-on-surface-variant italic">"Your DNA profile indicates a high affinity for rhythmic complexity and minor-key emotional resonance. You tend to favor textures that evoke a sense of 'digital nostalgia' combined with hyper-modern percussion."</p>
                </div>
              </div>
            </div>
          </GlassCard>

          <div className="lg:col-span-5 flex flex-col gap-gutter">
            <GlassCard className="rounded-3xl p-6 flex-1">
              <h3 className="font-headline-md text-headline-md mb-6 flex items-center gap-2">
                <Microscope className="text-secondary-container" />
                Sequence Data
              </h3>
              <div className="space-y-6">
                {[
                  { label: "Indie Melancholy", pct: "37%", color: "bg-primary", text: "text-primary", shadow: "shadow-[0_0_15px_rgba(83,224,118,0.5)]" },
                  { label: "Chaotic Energy", pct: "18%", color: "bg-secondary-container", text: "text-secondary-container", shadow: "shadow-[0_0_15px_rgba(0,238,252,0.5)]" },
                  { label: "Art-Pop Fusion", pct: "15%", color: "bg-tertiary", text: "text-tertiary", shadow: "shadow-[0_0_15px_rgba(236,178,255,0.5)]" },
                  { label: "Cyber-Synth", pct: "12%", color: "bg-outline", text: "text-outline", shadow: "" },
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-end">
                      <span className="font-label-caps text-label-caps text-on-surface">{item.label}</span>
                      <span className={`font-display-xl text-headline-md ${item.text}`}>{item.pct}</span>
                    </div>
                    <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                      <div className={`h-full ${item.color} ${item.shadow}`} style={{ width: item.pct }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="rounded-3xl p-6">
              <h3 className="font-label-caps text-label-caps mb-4 text-on-surface-variant uppercase tracking-widest">Active Chromosomes</h3>
              <div className="flex flex-wrap gap-3">
                <DNAChip color="primary">Minor Key Highs</DNAChip>
                <DNAChip color="secondary">808 Distortion</DNAChip>
                <DNAChip color="tertiary">Lyrical Complexity</DNAChip>
                <DNAChip color="primary">BPM Fluctuations</DNAChip>
                <span className="px-4 py-2 rounded-full bg-outline-variant/30 text-on-surface-variant border border-outline-variant font-label-caps text-[10px]">Glitch Aesthetics</span>
              </div>
            </GlassCard>

            <button className="w-full py-4 rounded-full bg-primary text-on-primary font-label-caps text-label-caps flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(83,224,118,0.4)] hover:scale-[1.02] transition-transform active:scale-95">
              <Share size={20} />
              EXPORT TO INSTAGRAM STORY
            </button>
          </div>
        </div>
      </main>

      <Footer />
      <BottomNavBar />
    </>
  );
}
