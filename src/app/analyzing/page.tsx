import { TopAppBar, BottomNavBar, Footer } from "@/components/ui/echodna/Navigation";

export default function AnalyzingPage() {
  return (
    <>
      {/* Global Aurora Background Layer */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-primary aurora-blur rounded-full animate-pulse"></div>
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-tertiary aurora-blur rounded-full animate-pulse" style={{ animationDelay: '-2s' }}></div>
        <div className="absolute -bottom-[10%] left-[20%] w-[60%] h-[50%] bg-secondary-fixed-dim aurora-blur rounded-full animate-pulse" style={{ animationDelay: '-1s' }}></div>
      </div>

      <TopAppBar />

      <main className="relative z-10 min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-container-margin py-section-gap">
        {/* AI Core Visualizer Section */}
        <div className="relative w-full max-w-2xl aspect-square flex items-center justify-center mb-12">
          {/* Central Processing Orb */}
          <div className="absolute w-64 h-64 rounded-full border-2 border-primary/30 flex items-center justify-center">
            <div className="w-48 h-48 rounded-full border border-secondary/50 animate-[spin_10s_linear_infinite] flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-primary via-secondary-fixed-dim to-tertiary-container opacity-80 blur-[2px] animate-pulse"></div>
            </div>
            {/* Neural Particles */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-1/2 w-2 h-2 bg-primary rounded-full shadow-[0_0_15px_#53e076]"></div>
              <div className="absolute bottom-12 right-12 w-3 h-3 bg-tertiary rounded-full shadow-[0_0_15px_#ecb2ff]"></div>
              <div className="absolute top-1/4 left-10 w-1.5 h-1.5 bg-secondary rounded-full shadow-[0_0_15px_#d3fbff]"></div>
            </div>
          </div>

          {/* Orbiting Genre Bubbles */}
          <div className="absolute top-20 left-10 glass-card px-4 py-2 rounded-full font-label-caps text-label-caps flex items-center gap-2 border border-primary/20">
            <span className="w-2 h-2 bg-primary rounded-full animate-ping"></span> SYNTHWAVE
          </div>
          <div className="absolute bottom-24 right-4 glass-card px-4 py-2 rounded-full font-label-caps text-label-caps flex items-center gap-2 border border-tertiary/20">
            <span className="w-2 h-2 bg-tertiary rounded-full animate-ping"></span> HYPERPOP
          </div>
          <div className="absolute top-1/2 right-12 glass-card px-4 py-2 rounded-full font-label-caps text-label-caps flex items-center gap-2 border border-secondary/20">
            <span className="w-2 h-2 bg-secondary rounded-full animate-ping"></span> POST-PUNK
          </div>

          {/* Waveform Animation Container */}
          <div className="absolute bottom-0 w-full flex items-end justify-center gap-1 h-32 opacity-40">
            <div className="w-1 bg-primary h-[20%] animate-[bounce_1.2s_infinite]"></div>
            <div className="w-1 bg-primary h-[50%] animate-[bounce_1.5s_infinite]"></div>
            <div className="w-1 bg-primary h-[80%] animate-[bounce_1.1s_infinite]"></div>
            <div className="w-1 bg-secondary h-[40%] animate-[bounce_1.8s_infinite]"></div>
            <div className="w-1 bg-tertiary h-[90%] animate-[bounce_1.4s_infinite]"></div>
            <div className="w-1 bg-primary h-[60%] animate-[bounce_1.6s_infinite]"></div>
            <div className="w-1 bg-primary h-[30%] animate-[bounce_1.3s_infinite]"></div>
          </div>
        </div>

        {/* Sequential Status Feed */}
        <div className="w-full max-w-md space-y-4">
          <div className="text-center">
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-2">Analyzing...</h2>
            <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden mb-6">
              <div className="h-full bg-primary w-3/5 shadow-[0_0_10px_#53e076]"></div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-4 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-primary"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              <span className="font-body-md text-on-surface">Scanning your sonic identity...</span>
            </div>
            <div className="flex items-center gap-4 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-primary"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              <span className="font-body-md text-on-surface">Analyzing emotional patterns...</span>
            </div>
            <div className="flex items-center gap-4 text-primary animate-pulse">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-primary"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/></svg>
              <span className="font-body-md text-primary font-bold">Building your genre DNA...</span>
            </div>
            <div className="flex items-center gap-4 text-on-surface-variant/40">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/></svg>
              <span className="font-body-md">Detecting your alter ego...</span>
            </div>
            <div className="flex items-center gap-4 text-on-surface-variant/40">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/></svg>
              <span className="font-body-md">Generating your personality profile...</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <BottomNavBar />
    </>
  );
}
