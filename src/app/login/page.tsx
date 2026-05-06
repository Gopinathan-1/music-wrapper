import { GlassCard } from "@/components/ui/echodna/GlassCard";
import { Button } from "@/components/ui/echodna/Button";
import { Input } from "@/components/ui/echodna/Input";
import { Label } from "@/components/ui/echodna/Label";
import { Disc3, Share2, Sparkles, ShieldCheck, Mail, Lock, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-primary rounded-full aurora-blur"></div>
        <div className="absolute top-[40%] -right-[15%] w-[50%] h-[50%] bg-tertiary-container rounded-full aurora-blur"></div>
        <div className="absolute -bottom-[10%] left-[20%] w-[40%] h-[40%] bg-secondary-container rounded-full aurora-blur"></div>
        
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, var(--color-primary) 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-container-margin py-8">
        <div className="w-full max-w-md flex flex-col items-center">
          
          <div className="absolute top-6 left-6 z-20">
            <Link href="/" className="flex items-center gap-2 text-primary hover:text-secondary-fixed transition-colors font-label-caps text-[10px] group">
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              Back
            </Link>
          </div>
          
          <div className="mb-6 text-center">
            <span className="font-display-xl text-headline-md text-primary tracking-tighter">EchoDNA</span>
          </div>

          <GlassCard className="w-full rounded-[2rem] p-6 md:p-10 relative overflow-hidden border border-white/10 shadow-2xl">
            <div className="absolute inset-0 p-[1px] rounded-[2rem] bg-gradient-to-br from-primary/30 via-transparent to-tertiary-container/30 -z-10"></div>
            
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-surface-container-high mb-4 relative">
                <Disc3 size={24} className="text-primary z-10 animate-spin-slow" />
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full"></div>
              </div>
              <h1 className="font-headline-md text-headline-md mb-1 text-on-surface">Welcome Back.</h1>
              <p className="font-body-md text-sm text-on-surface-variant/80">
                Log in to sync your latest musical evolution.
              </p>
            </div>

            <div className="space-y-5">
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-[10px]">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/40" size={16} />
                  <Input id="email" type="email" placeholder="name@example.com" className="pl-11 h-11 text-xs" />
                </div>
              </div>
              
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <Label htmlFor="password" className="text-[10px]">Password</Label>
                  <button className="text-[9px] font-label-caps text-primary hover:text-secondary-fixed">Forgot?</button>
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/40" size={16} />
                  <Input id="password" type="password" placeholder="••••••••" className="pl-11 h-11 text-xs" />
                </div>
              </div>

              <Button className="w-full bg-primary text-on-primary font-headline-md py-4 rounded-xl hover:shadow-[0_0_15px_rgba(83,224,118,0.25)] transition-all text-xs">
                LOG IN
              </Button>

              <div className="relative py-2">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-[10px] uppercase">
                  <span className="bg-surface px-4 text-on-surface-variant/30 font-label-caps">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2.5">
                <Link href="/analyzing" className="w-full">
                  <Button variant="outline" className="w-full border-white/10 hover:bg-primary/10 hover:border-primary/30 py-4 rounded-xl flex items-center justify-center gap-2 group text-xs">
                    <Disc3 size={18} className="text-[#1DB954]" />
                    <span className="font-body-md">Continue with Spotify</span>
                  </Button>
                </Link>
                
                <div className="grid grid-cols-2 gap-2.5">
                  <Button variant="outline" className="border-white/10 hover:bg-white/5 py-4 rounded-xl flex items-center justify-center gap-2 text-xs">
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    <span>Google</span>
                  </Button>
                  <Button variant="outline" className="border-white/10 hover:bg-white/5 py-4 rounded-xl flex items-center justify-center gap-2 text-xs">
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M17.05 20.28c-.96.95-2.04 1.43-3.23 1.43-1.18 0-2.15-.42-3.19-1.43-1.04-1.01-2.08-1.52-3.27-1.52-1.19 0-2.23.51-3.27 1.52-1.04 1.01-2.11 1.52-3.3 1.52s-2.27-.48-3.23-1.43c-.96-.96-1.44-2.04-1.44-3.23 0-1.19.48-2.27 1.44-3.23.96-.96 2.04-1.44 3.23-1.44 1.19 0 2.23.51 3.27 1.52 1.04 1.01 2.11 1.52 3.3 1.52s2.23-.51 3.27-1.52c1.04-1.01 2.08-1.52 3.27-1.52 1.19 0 2.23.51 3.27 1.52.96.96 1.44 2.04 1.44 3.23 0 1.19-.48 2.27-1.44 3.23z" />
                    </svg>
                    <span>Apple</span>
                  </Button>
                </div>
              </div>
            </div>

            <p className="mt-8 text-center text-[9px] font-label-caps text-on-surface-variant/30">
              By continuing, you agree to EchoDNA's Terms of Service and Privacy Policy.
            </p>
          </GlassCard>

          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-on-surface-variant/40">
              <ShieldCheck size={18} />
              <p className="font-label-caps text-[10px] uppercase tracking-[0.2em]">Secure Authentication Protocol</p>
            </div>
          </div>
        </div>
      </main>

      {/* Background visualizer element */}
      <div className="fixed bottom-0 left-0 right-0 h-24 z-5 opacity-10 pointer-events-none flex items-end justify-center gap-[4px]">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="w-1.5 rounded-t-full bg-primary" style={{ height: `${Math.random() * 60 + 20}%` }}></div>
        ))}
      </div>
    </>
  );
}
