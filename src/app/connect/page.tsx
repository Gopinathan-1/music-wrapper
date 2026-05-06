import { Button } from "@/components/ui/echodna/Button";
import { GlassCard } from "@/components/ui/echodna/GlassCard";

export default function ConnectPage() {
  return (
    <>
      {/* Background Elements */}
      <div className="fixed inset-0 bg-background z-0"></div>
      
      {/* Subtle Visualizer Background */}
      <div className="fixed bottom-0 left-0 right-0 h-64 flex items-end justify-center gap-1 opacity-20 z-0 px-4">
        {[40, 60, 30, 80, 50, 90, 40, 70, 20, 55, 85, 35, 65].map((height, i) => (
          <div key={i} className="w-2 bg-gradient-to-t from-primary to-tertiary rounded-t-full" style={{ height: `${height}%` }}></div>
        ))}
      </div>

      <main className="relative z-10 w-full max-w-lg px-container-margin flex flex-col items-center justify-center min-h-screen mx-auto">
        {/* Header / Identity */}
        <div className="mb-12 text-center">
          <h1 className="font-display-xl text-headline-lg text-primary tracking-tighter mb-2">EchoDNA</h1>
          <p className="font-label-caps text-on-surface-variant tracking-widest">GENETIC MUSIC ANALYSIS</p>
        </div>

        {/* Glassmorphism Login Card */}
        <GlassCard className="w-full p-10 flex flex-col items-center shadow-2xl relative">
          {/* Decorative Accent */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          
          <div className="mb-8 p-4 bg-primary/10 rounded-full flex items-center justify-center">
             <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M10 2v7.31"/><path d="M14 9.3V1.99"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/><path d="M5.5 15.5h13"/><path d="M8.5 12.5h7"/></svg>
          </div>
          
          <h2 className="font-headline-md text-headline-md text-on-surface mb-4 text-center">Unlock Your Identity</h2>
          <p className="font-body-md text-on-surface-variant text-center mb-10 max-w-[280px]">
            We only analyze your listening habits. Never your personal data.
          </p>

          {/* Primary Action */}
          <Button className="w-full bg-primary hover:bg-primary-fixed transition-all duration-300 py-5 group shadow-[0_0_30px_rgba(83,224,118,0.2)]">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-on-primary"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
             <span className="font-headline-md text-on-primary text-body-lg font-bold">Connect with Spotify</span>
          </Button>

          {/* Trust Indicators */}
          <div className="mt-10 grid grid-cols-2 gap-4 w-full border-t border-white/10 pt-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>
              <span className="font-label-caps text-[10px] text-on-surface-variant">SECURE API</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-tertiary">
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>
              </div>
              <span className="font-label-caps text-[10px] text-on-surface-variant">PRIVACY FIRST</span>
            </div>
          </div>
        </GlassCard>

        {/* Footer Meta */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex gap-6">
            <a className="font-label-caps text-[11px] text-outline hover:text-primary transition-colors" href="#">PRIVACY POLICY</a>
            <a className="font-label-caps text-[11px] text-outline hover:text-primary transition-colors" href="#">DATA ETHICS</a>
          </div>
          <p className="font-body-md text-[12px] text-outline/50 italic">
            Authorized Spotify Developer Partner
          </p>
        </div>
      </main>
    </>
  );
}
