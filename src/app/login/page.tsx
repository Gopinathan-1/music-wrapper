import { GlassCard } from "@/components/ui/echodna/GlassCard";
import { Button } from "@/components/ui/echodna/Button";
import { Disc3, Share2, Sparkles, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-primary rounded-full aurora-blur"></div>
        <div className="absolute top-[40%] -right-[15%] w-[50%] h-[50%] bg-tertiary-container rounded-full aurora-blur"></div>
        <div className="absolute -bottom-[10%] left-[20%] w-[40%] h-[40%] bg-secondary-container rounded-full aurora-blur"></div>
        
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, var(--color-primary) 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
        
        <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none" viewBox="0 0 100 100">
          <path d="M0,50 Q25,30 50,50 T100,50" fill="none" stroke="var(--color-primary)" strokeWidth="0.1"></path>
          <path d="M0,60 Q30,40 60,60 T100,60" fill="none" stroke="var(--color-tertiary)" strokeWidth="0.1"></path>
        </svg>

        <div className="absolute top-[15%] left-[5%] rotate-12 opacity-10 blur-sm scale-110">
          <img className="w-48 h-48 rounded-xl object-cover" alt="Holographic album covers" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT3-vCFJ1hu5CCeDlkaAx2mZzryt2bZO2m68GTwpUmdqx2fdafItdzxRKssVFKECePoA31XvdUHLL3qHvdnFD121x-pv2SZXNDtYBDLg4-Dhez1V7kPkotwtpsVLpe0dF8v8eI3zFihjHIBCNW3AVsg1-Ukp4Qbk68PGe7z2q2ymlOE90sif6uPNtiYJf6zEOVxbMsyTFm3FKDFohY0vXZTwvFZFpObigKOGgQzJyXqMASM75IcS5fIZIcMRTOPWOQQ1PJ-xip1U8" />
        </div>
        <div className="absolute bottom-[20%] right-[8%] -rotate-6 opacity-10 blur-md scale-90">
          <img className="w-64 h-64 rounded-xl object-cover" alt="Abstract visualization" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOaYEQqY3hoohqT6NtVZ2uwJ82dyXVCIf4rIFeegsWYLW7pwZDhrdykbrM9qu2-vZjgN5mwxLT-sZAw6jBkqAGPrHVixi0nY2zbrYUaC8q-1rFO0Nn4wsEkgRYAJ2rlHjFTwXA20dq60krlNejs7ghPNBCCu2_7jYCbRr3gjMcInc7Q2J8EOKlIVUfg_C0ARY7IbID0dr4Wv78S-pXCs8bXCAsHA28bgz5fZIWRW3YcCjSaMpwhXtS3aJuXZ7ciAJtMJFmPwk-i2M" />
        </div>
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-container-margin py-12">
        <div className="w-full max-w-lg flex flex-col items-center">
          
          <div className="absolute top-8 left-8 z-20">
            <Link href="/" className="flex items-center gap-2 text-primary hover:text-secondary-fixed transition-colors font-label-caps text-label-caps">
              <span className="material-symbols-outlined">arrow_back</span>
              Back
            </Link>
          </div>
          <div className="mb-element-gap text-center">
            <span className="font-display-xl text-headline-md text-primary tracking-tighter">EchoDNA</span>
          </div>

          <GlassCard className="w-full rounded-[2rem] p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 p-[1px] rounded-[2rem] bg-gradient-to-br from-primary/40 via-transparent to-tertiary-container/40 -z-10"></div>
            
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-surface-container-high mb-6 relative">
              <Disc3 size={32} className="text-primary z-10" />
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full"></div>
            </div>

            <h1 className="font-headline-lg text-headline-lg mb-4 text-on-surface">Your Music Taste Has Secrets.</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 leading-relaxed">
              Connect Spotify to unlock your listening archetype, emotional spectrum, and musical alter ego.
            </p>

            <div className="flex flex-col gap-4 items-center w-full">
              <Link href="/analyzing" className="w-full">
                <Button className="group relative w-full bg-primary text-on-primary font-headline-md text-body-lg py-6 rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3">
                  <Disc3 size={24} className="fill-on-primary text-on-primary" />
                  Connect with Spotify
                  <div className="absolute inset-0 rounded-full border-2 border-primary/50 animate-ping opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Button>
              </Link>
              
              <button className="font-label-caps text-label-caps text-on-surface-variant/60 hover:text-on-surface transition-colors mt-2">
                Already have an account? Log in
              </button>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-3">
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                <Sparkles size={16} className="text-primary" />
                <span className="text-[10px] font-label-caps font-bold text-primary">AI ARCHETYPES</span>
              </div>
              <div className="flex items-center gap-2 bg-tertiary-container/10 px-4 py-2 rounded-full border border-tertiary-container/20">
                <Disc3 size={16} className="text-tertiary" />
                <span className="text-[10px] font-label-caps font-bold text-tertiary">GENRE DNA</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary-container/10 px-4 py-2 rounded-full border border-secondary-container/20">
                <Share2 size={16} className="text-secondary-fixed-dim" />
                <span className="text-[10px] font-label-caps font-bold text-secondary-fixed-dim">CINEMATIC CARDS</span>
              </div>
            </div>
          </GlassCard>

          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-on-surface-variant/40">
              <ShieldCheck size={18} />
              <p className="font-label-caps text-[10px] uppercase tracking-[0.2em]">End-to-end encryption active</p>
            </div>
            <p className="font-body-md text-sm text-on-surface-variant/60 text-center px-8">
              EchoDNA only reads your listening data to generate analysis. We never post on your behalf or sell your metadata.
            </p>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-32 z-5 opacity-20 pointer-events-none flex items-end justify-center gap-[2px]">
        {[20, 40, 70, 50, 90, 40, 60, 30, 55, 80, 30, 60, 40, 20].map((h, i) => (
          <div key={i} className={`w-1 rounded-t-full h-[${h}%] ${i % 3 === 0 ? 'bg-tertiary-container' : i % 2 === 0 ? 'bg-secondary-container' : 'bg-primary'}`} style={{ height: `${h}%` }}></div>
        ))}
      </div>
    </>
  );
}
