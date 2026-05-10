"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { GlassCard } from "@/components/ui/echodna/GlassCard";
import { Button } from "@/components/ui/echodna/Button";
import { ShieldCheck, ArrowLeft, Mail, Lock, UserPlus } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  // Check if already logged in
  useEffect(() => {
    if (document.cookie.includes("supabase_user_logged_in=true")) {
      router.push("/dashboard");
    }
  }, [router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) return;
    
    setLoading(true);
    setErrorMsg("");
    
    // Try to sign in first
    let { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password: password.trim(),
    });

    console.log("Supabase login response:", { data, error });

    // If invalid login credentials, maybe they need to sign up?
    if (error && error.message.includes("Invalid login credentials")) {
      setErrorMsg("Invalid credentials. If new, please click Sign Up.");
      setLoading(false);
      return;
    } else if (error) {
      // Special friendly message for unconfirmed emails
      if (error.message.includes("Email not confirmed")) {
        setErrorMsg("Please check your email to confirm your account first.");
      } else {
        setErrorMsg(error.message);
      }
      setLoading(false);
      return;
    }

    if (data?.user || data?.session) {
      document.cookie = `supabase_user_logged_in=true; path=/; max-age=31536000`;
      router.push("/dashboard");
    } else {
      setErrorMsg("Unexpected login error. Please try again.");
      setLoading(false);
    }
  };

  const handleSignUp = async () => {
    if (!email.trim() || !password.trim()) {
      setErrorMsg("Please enter email and password to sign up.");
      return;
    }
    setLoading(true);
    setErrorMsg("");

    const { data, error } = await supabase.auth.signUp({
      email: email.trim(),
      password: password.trim(),
    });

    if (error) {
      setErrorMsg(error.message);
      setLoading(false);
      return;
    }

    // Supabase returns user but null session if email confirmation is required
    if (data.user && data.session === null) {
      setErrorMsg("Success! Please check your email inbox to confirm your account before logging in.");
      setLoading(false);
      return;
    }

    if (data?.user || data?.session) {
      document.cookie = `supabase_user_logged_in=true; path=/; max-age=31536000`;
      router.push("/dashboard");
    } else {
      setErrorMsg("Unexpected signup error. Please try again.");
      setLoading(false);
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-primary rounded-full aurora-blur opacity-40"></div>
        <div className="absolute top-[40%] -right-[15%] w-[50%] h-[50%] bg-tertiary-container rounded-full aurora-blur opacity-30"></div>
        <div className="absolute -bottom-[10%] left-[20%] w-[40%] h-[40%] bg-secondary-container rounded-full aurora-blur opacity-30"></div>
        
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, var(--color-primary) 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-container-margin py-8">
        <div className="w-full max-w-md flex flex-col items-center">
          
          <div className="absolute top-6 left-6 z-20">
            <Link href="/" className="flex items-center gap-2 text-primary hover:text-secondary-fixed transition-colors font-label-caps text-[10px] group">
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              Back
            </Link>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 text-center"
          >
            <span className="font-display-xl text-headline-lg text-primary tracking-tighter">EchoDNA</span>
          </motion.div>

          <GlassCard className="w-full rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden border border-white/10 shadow-2xl">
            <div className="absolute inset-0 p-[1px] rounded-[2.5rem] bg-gradient-to-br from-primary/40 via-transparent to-tertiary-container/40 -z-10"></div>
            
            <div className="text-center mb-8">
              <h1 className="font-headline-lg text-headline-md mb-3 text-on-surface leading-tight">Welcome Back</h1>
              <p className="font-body-md text-sm text-on-surface-variant/80 mx-auto">
                Login with your email to access your dashboard.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-on-surface-variant/50" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full bg-surface-container/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-body-lg"
                  required
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-on-surface-variant/50" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full bg-surface-container/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-body-lg"
                  required
                />
              </div>

              {errorMsg && (
                <p className="text-error text-xs text-center font-medium pt-1">{errorMsg}</p>
              )}

              <div className="pt-2 space-y-3">
                <Button 
                  type="submit"
                  disabled={loading || !email.trim() || !password.trim()}
                  className="w-full bg-primary text-on-primary font-headline-md py-4 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group relative overflow-hidden shadow-[0_0_20px_rgba(83,224,118,0.3)] disabled:opacity-50 disabled:hover:scale-100"
                >
                  <span className="font-bold tracking-tight">
                    {loading ? "LOGGING IN..." : "LOG IN"}
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12"></div>
                </Button>

                <button 
                  type="button"
                  onClick={handleSignUp}
                  disabled={loading || !email.trim() || !password.trim()}
                  className="w-full bg-surface-container border border-white/10 text-white font-headline-md py-4 rounded-2xl hover:bg-white/5 active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-50"
                >
                  <UserPlus size={16} />
                  <span>Create Account</span>
                </button>
              </div>
            </form>
          </GlassCard>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-col items-center gap-4"
          >
            <div className="flex items-center gap-2 text-on-surface-variant/40">
              <ShieldCheck size={18} />
              <p className="font-label-caps text-[10px] uppercase tracking-[0.2em]">Secured by Supabase</p>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Dynamic Background visualizer element */}
      <div className="fixed bottom-0 left-0 right-0 h-32 z-5 opacity-20 pointer-events-none flex items-end justify-center gap-[2px]">
        {[...Array(30)].map((_, i) => (
          <motion.div 
            key={i} 
            animate={{ height: [`${Math.random() * 40 + 20}%`, `${Math.random() * 80 + 20}%`, `${Math.random() * 40 + 20}%`] }}
            transition={{ duration: 1.5 + Math.random(), repeat: Infinity, ease: "easeInOut" }}
            className={`w-1 rounded-t-full ${i % 3 === 0 ? 'bg-[#d51007]' : i % 2 === 0 ? 'bg-secondary' : 'bg-tertiary'}`}
          />
        ))}
      </div>
    </>
  );
}
