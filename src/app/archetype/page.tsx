import { TopAppBar, BottomNavBar, Footer } from "@/components/ui/echodna/Navigation";
import { GlassCard } from "@/components/ui/echodna/GlassCard";
import { Button } from "@/components/ui/echodna/Button";
import { Share, Sparkles, Brain } from "lucide-react";

export default function ArchetypePage() {
  return (
    <>
      <TopAppBar />

      <main className="relative px-container-margin py-section-gap max-w-4xl mx-auto flex flex-col items-center mb-32">
        {/* Aurora Background Blobs */}
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full dna-gradient aurora-blur -z-10"></div>
        <div className="absolute top-1/2 -right-20 w-80 h-80 rounded-full bg-secondary-container aurora-blur -z-10"></div>
        
        <GlassCard className="w-full rounded-[2rem] p-8 md:p-12 relative shadow-2xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Vibe Imagery */}
            <div className="relative w-full md:w-1/2 aspect-[9/16] md:aspect-square group">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
              <img className="w-full h-full object-cover rounded-3xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrTAtwIOlDkElWv81JTz1rZg-1GPYBfrhd1PUMK---p5lX47si67L1-dCi-CfX_lRh3cPkFnKkQrc_5Lq7tb6o1zXngUfc2UrmjqNyZ6tlCCeOfGrHrk-hbWg0jnhET3vsC7zbPx1XQSb-leD1KEflJrJo3QmTej2HSp61JMu8QO3QK2JCApX0umbIItUBoaxS1eplhoENLZY7GkZ7fTgkHYS99sSoABMelG36elqXdQX6xI8MljDM4Flr0tuVs2APmbrRQcA1yy0" alt="Nocturnal Cityscape" />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-48 h-48 rounded-full border-[12px] border-primary/20 flex items-center justify-center animate-pulse">
                  <div className="w-36 h-36 rounded-full border-[8px] border-secondary-fixed-dim/40 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center">
                      <Brain size={48} className="text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Personality Content */}
            <div className="w-full md:w-1/2 flex flex-col gap-6">
              <div className="space-y-2">
                <span className="font-label-caps text-label-caps text-primary tracking-[0.2em]">LISTENING ARCHETYPE</span>
                <h2 className="font-display-xl text-display-xl hyper-glow leading-none text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Midnight Dreamer</h2>
              </div>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                You gravitate towards <span className="text-secondary-fixed-dim font-bold">ambient textures</span> and <span className="text-tertiary-fixed-dim font-bold">lo-fi beats</span> that define your nocturnal introspection. Your DNA hums with the frequency of quiet streets and neon horizons.
              </p>

              {/* Artists Row */}
              <div className="space-y-4">
                <span className="font-label-caps text-label-caps text-outline">TOP RESONATORS</span>
                <div className="flex flex-wrap gap-3">
                  <div className="bg-primary/10 border border-primary/20 rounded-full px-5 py-2 flex items-center gap-2">
                    <span className="font-display-xl text-body-md text-primary">01</span>
                    <span className="font-body-md text-on-surface">Aphex Twin</span>
                  </div>
                  <div className="bg-secondary-fixed/10 border border-secondary-fixed/20 rounded-full px-5 py-2 flex items-center gap-2">
                    <span className="font-display-xl text-body-md text-secondary-fixed-dim">02</span>
                    <span className="font-body-md text-on-surface">Bonobo</span>
                  </div>
                  <div className="bg-tertiary/10 border border-tertiary/20 rounded-full px-5 py-2 flex items-center gap-2">
                    <span className="font-display-xl text-body-md text-tertiary">03</span>
                    <span className="font-body-md text-on-surface">Four Tet</span>
                  </div>
                </div>
              </div>

              {/* AI Vibe Tag */}
              <div className="mt-4 flex gap-2">
                <div className="bg-surface-container-highest/50 px-3 py-1.5 rounded-lg flex items-center gap-2 border border-white/5">
                  <Sparkles size={14} className="text-secondary-fixed-dim" />
                  <span className="font-label-caps text-[10px] text-on-surface-variant">VIBE: CYBER-SOLITUDE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Share CTA */}
          <div className="mt-12 flex flex-col md:flex-row gap-4 items-center justify-center border-t border-white/10 pt-8">
            <Button variant="primary" className="gap-2">
              <Share size={20} />
              SHARE YOUR GENOME
            </Button>
            <Button variant="secondary">
              FULL ANALYSIS
            </Button>
          </div>
        </GlassCard>
      </main>

      <Footer />
      <BottomNavBar />
    </>
  );
}
