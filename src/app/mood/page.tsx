import { TopAppBar, BottomNavBar, Footer } from "@/components/ui/echodna/Navigation";
import { GlassCard } from "@/components/ui/echodna/GlassCard";
import { Button } from "@/components/ui/echodna/Button";
import { Brain, Activity } from "lucide-react";

export default function MoodPage() {
  return (
    <>
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full bg-primary aurora-blur"></div>
        <div className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-tertiary aurora-blur"></div>
        <div className="absolute -bottom-[10%] left-[20%] w-[70%] h-[50%] rounded-full bg-secondary aurora-blur"></div>
      </div>

      <TopAppBar />

      <main className="max-w-4xl mx-auto px-container-margin py-element-gap md:py-section-gap flex flex-col gap-section-gap mb-32">
        <section className="flex flex-col gap-6">
          <h1 className="font-display-xl text-display-xl text-primary leading-none">Mood Spectrum</h1>
          <GlassCard className="p-6 rounded-xl border-l-4 border-l-secondary">
            <div className="flex items-start gap-4">
              <Brain className="text-secondary flex-shrink-0" />
              <p className="font-body-lg italic text-secondary-fixed">
                "Your playlists oscillate between emotional vulnerability and euphoric escapism."
              </p>
            </div>
          </GlassCard>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <GlassCard className="p-8 rounded-[2rem] flex flex-col items-center justify-center relative overflow-hidden aspect-square">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-primary),_transparent)]"></div>
            </div>
            <div className="relative w-full h-full flex items-center justify-center">
              <svg className="w-full h-full drop-shadow-[0_0_15px_rgba(83,224,118,0.3)]" viewBox="0 0 200 200">
                <polygon className="text-outline-variant" fill="none" points="100,20 170,60 170,140 100,180 30,140 30,60" stroke="currentColor" strokeWidth="0.5"></polygon>
                <polygon className="text-outline-variant" fill="none" points="100,60 135,80 135,120 100,140 65,120 65,80" stroke="currentColor" strokeWidth="0.5"></polygon>
                <line className="text-outline-variant" stroke="currentColor" strokeWidth="0.5" x1="100" x2="100" y1="20" y2="180"></line>
                <line className="text-outline-variant" stroke="currentColor" strokeWidth="0.5" x1="30" x2="170" y1="60" y2="140"></line>
                <line className="text-outline-variant" stroke="currentColor" strokeWidth="0.5" x1="30" x2="170" y1="140" y2="60"></line>
                <polygon fill="rgba(83,224,118,0.3)" points="100,40 160,80 150,130 100,160 50,110 40,70" stroke="#53e076" strokeWidth="2"></polygon>
                <text className="fill-on-surface-variant font-label-caps text-[8px]" textAnchor="middle" x="100" y="15">ENERGY</text>
                <text className="fill-on-surface-variant font-label-caps text-[8px]" textAnchor="start" x="185" y="60">DANCE</text>
                <text className="fill-on-surface-variant font-label-caps text-[8px]" textAnchor="start" x="185" y="145">VALENCE</text>
                <text className="fill-on-surface-variant font-label-caps text-[8px]" textAnchor="middle" x="100" y="195">ACOUSTIC</text>
                <text className="fill-on-surface-variant font-label-caps text-[8px]" textAnchor="end" x="15" y="145">INTENSITY</text>
                <text className="fill-on-surface-variant font-label-caps text-[8px]" textAnchor="end" x="15" y="60">FOCUS</text>
              </svg>
            </div>
          </GlassCard>

          <GlassCard className="p-8 rounded-[2rem] flex flex-col justify-between overflow-hidden aspect-square">
            <div className="flex justify-between items-center">
              <span className="font-label-caps text-label-caps text-tertiary">AUDIO-REACTIVE HEATMAP</span>
              <Activity className="text-tertiary animate-pulse" />
            </div>
            
            <div className="flex-1 my-6 relative rounded-xl overflow-hidden bg-surface-container-lowest">
              <div className="absolute inset-0 flex flex-wrap gap-1 p-1">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className={`w-[18%] h-[18%] rounded-full ${i % 2 === 0 ? 'bg-primary/80 blur-sm animate-pulse' : 'bg-tertiary/40 blur-md'}`}></div>
                ))}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            </div>
            <p className="font-body-md text-on-surface-variant">Real-time spectral analysis of your peak energy hours (10PM - 2AM).</p>
          </GlassCard>
        </div>

        <section className="flex flex-col gap-element-gap">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Dominant Attributes</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <GlassCard className="p-4 rounded-xl flex flex-col gap-2 border-t-2 border-primary">
              <span className="font-label-caps text-primary">ENERGY</span>
              <span className="text-3xl font-display-xl">88%</span>
            </GlassCard>
            <GlassCard className="p-4 rounded-xl flex flex-col gap-2 border-t-2 border-secondary">
              <span className="font-label-caps text-secondary">VALENCE</span>
              <span className="text-3xl font-display-xl">42%</span>
            </GlassCard>
            <GlassCard className="p-4 rounded-xl flex flex-col gap-2 border-t-2 border-tertiary">
              <span className="font-label-caps text-tertiary">FOCUS</span>
              <span className="text-3xl font-display-xl">65%</span>
            </GlassCard>
            <GlassCard className="p-4 rounded-xl flex flex-col gap-2 border-t-2 border-primary">
              <span className="font-label-caps text-primary">DANCE</span>
              <span className="text-3xl font-display-xl">91%</span>
            </GlassCard>
          </div>
        </section>

        <section className="flex flex-col items-center gap-6 text-center py-8">
          <h3 className="font-headline-md text-headline-md text-outline">Sonic Fingerprint</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-6 py-2 bg-primary/20 text-primary border border-primary/30 rounded-full font-label-caps">Hyper-Pop</span>
            <span className="px-6 py-2 bg-secondary/20 text-secondary border border-secondary/30 rounded-full font-label-caps">Phonk</span>
            <span className="px-6 py-2 bg-tertiary/20 text-tertiary border border-tertiary/30 rounded-full font-label-caps">Ambient Drift</span>
            <span className="px-6 py-2 bg-primary/20 text-primary border border-primary/30 rounded-full font-label-caps">Neo-Soul</span>
          </div>
          <Button variant="primary" className="mt-4">
            EXPORT SPECTRUM
          </Button>
        </section>
      </main>

      <Footer />
      <BottomNavBar />
    </>
  );
}
