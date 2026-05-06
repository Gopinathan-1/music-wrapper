import { TopAppBar, BottomNavBar, Footer } from "@/components/ui/echodna/Navigation";
import { GlassCard } from "@/components/ui/echodna/GlassCard";

export default function AlterEgoPage() {
  return (
    <>
      <TopAppBar />

      <main className="max-w-4xl mx-auto px-container-margin py-10 pb-32">
        {/* Persona Hero Section */}
        <section className="relative mb-section-gap">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-end">
            <div className="md:col-span-4 z-10 space-y-6 order-2 md:order-1">
              <div className="space-y-1">
                <span className="font-label-caps text-label-caps text-primary tracking-[0.2em] block">ID:// ARCHETYPE</span>
                <h1 className="font-display-xl text-display-xl text-primary hyper-glow leading-none">Neon Ghost</h1>
              </div>

              <GlassCard className="p-6 rounded-xl border-l-4 border-l-secondary-container">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-label-caps text-label-caps text-secondary-fixed">TOKYO // 02:00 AM</span>
                </div>
                <p className="font-body-md text-on-surface-variant leading-relaxed italic">"Navigating the rainy streets of Shibuya through a haze of lo-fi synthesizers and glitchy heartbeats."</p>
              </GlassCard>

              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/20 text-primary px-4 py-1.5 rounded-full font-label-caps text-[10px] border border-primary/30">BEAUTIFUL CHAOS</span>
                <span className="bg-tertiary/20 text-tertiary px-4 py-1.5 rounded-full font-label-caps text-[10px] border border-tertiary/30">RAINY WINTER</span>
                <span className="bg-secondary/20 text-secondary px-4 py-1.5 rounded-full font-label-caps text-[10px] border border-secondary/30">GLITCH CORE</span>
              </div>
            </div>

            <div className="md:col-span-8 relative order-1 md:order-2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-tr from-primary via-secondary-container to-tertiary rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                
                <GlassCard className="rounded-2xl overflow-hidden aspect-[4/5] md:aspect-[16/10]">
                  <img className="w-full h-full object-cover mix-blend-lighten opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8xQvJci4F6BBC3NMgQEubEmQWmIvp0dpwFxb5bBQDjuMLYrU32hiIlizqcX7mM-pp1XLgdY-M3DEkKL5OA5-0_QnY5oxEejdyYjdCj8NY_FcT5PK8-4NkfTLNwGcNjemwZ3av27n_0pz6rdnYJjaDqHpChY8krem0WHLW-CKIzX73moTxjgs93oVl2yyiiydXAN-meSGddMiJjdzna75r-Y68aZF6cxHblqOtIxC37Wu9qoMXss-qOkbKOI_CfPvy7_aBSJoU804" alt="Persona portrait"/>
                  
                  <div className="absolute top-6 right-6 text-right font-label-caps text-label-caps text-primary/80 space-y-1">
                    <div>SYNC_RATE: 98.4%</div>
                    <div>DIVERGENCE: LOW</div>
                    <div className="w-full h-0.5 bg-primary/30 mt-2"></div>
                  </div>

                  <div className="absolute bottom-6 left-6 flex items-end gap-4">
                    <div className="w-12 h-12 rounded-full border-2 border-primary p-0.5">
                      <img className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBPMNp19KT0-IiuNagJ8OCb6CQwW5usX7LfhglrDkOi_gMofFGiDXX0fwDfVDqMtt0GhOYzSjHq5SMey8NBpTtfjHZWvueP7uaiq2J-7iKgX7TOeyOx9hNOhhBS8vOBwR-ymdSnrvAY-WiHCTArc4Q-o-oTC5V2Lfr6oTwloai_zUh8sVGIPIG63O0kzTAicq2GNk_7IDI00ppP_r4eqeEyo21anERYc6i6d0IoQYzY-HODuLiGlW_PDNhdnR_fKmtO_35VlfFOvM" alt="User Avatar"/>
                    </div>
                    <div className="font-label-caps text-label-caps text-white">
                      <span className="block opacity-60">USER_LINKED</span>
                      <span className="text-body-lg">@KINETIC_DATA</span>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>
        </section>

        {/* DNA Analysis Bento Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-section-gap">
          <GlassCard className="md:col-span-2 p-8 rounded-2xl flex flex-col justify-between border-t border-white/20">
            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-4">Acoustic Fingerprint</h2>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between font-label-caps text-label-caps text-on-surface-variant">
                    <span>SYNTHETIC RESONANCE</span>
                    <span>82%</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-secondary-container w-[82%] shadow-[0_0_10px_#00eefc]"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between font-label-caps text-label-caps text-on-surface-variant">
                    <span>MELANCHOLIC VELOCITY</span>
                    <span>64%</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-tertiary w-[64%] shadow-[0_0_10px_#ecb2ff]"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-outline-variant/30 flex items-center justify-between">
              <p className="font-body-md text-on-surface-variant max-w-xs">Your frequency matches the vibrations of a city that never sleeps, but always dreams.</p>
            </div>
          </GlassCard>

          <GlassCard className="p-8 rounded-2xl relative overflow-hidden flex flex-col justify-center items-center text-center">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--color-primary),_transparent)]"></div>
            <h3 className="font-headline-md text-headline-md mb-2 relative z-10">The Oracle</h3>
            <p className="font-body-md text-on-surface-variant relative z-10">Your alter ego processes music as "Emotional Architecture" rather than simple sound.</p>
          </GlassCard>
        </section>

      </main>

      <Footer />
      <BottomNavBar />
    </>
  );
}
