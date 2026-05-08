"use client";

import Link from "next/link";
import { User, Home, LayoutGrid, Sparkles, Share, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export const TopAppBar = () => {
  const [username, setUsername] = useState<string | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const cookies = document.cookie.split(';');
    const userCookie = cookies.find(c => c.trim().startsWith('lastfm_username='));
    if (userCookie) {
      setUsername(userCookie.split('=')[1]);
    }
  }, []);

  const handleLogout = () => {
    document.cookie = "lastfm_username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setUsername(null);
    setShowDropdown(false);
    router.push("/");
  };

  return (
    <header className="bg-surface/10 dark:bg-surface/10 backdrop-blur-xl border-b border-white/10 docked full-width top-0 sticky z-50 flex justify-between items-center px-container-margin py-4 w-full">
      <Link href="/" className="font-display-xl text-headline-md text-primary tracking-tighter">
        EchoDNA
      </Link>
      <div className="hidden md:flex gap-8 items-center">
        <Link href="/" className="font-headline-md text-headline-md text-primary font-bold hover:text-secondary-fixed transition-colors">
          Home
        </Link>
        <Link href="/dashboard" className="font-headline-md text-headline-md text-on-surface-variant hover:text-secondary-fixed transition-colors">
          Dashboard
        </Link>
        <Link href="/export" className="font-headline-md text-headline-md text-on-surface-variant hover:text-secondary-fixed transition-colors">
          Share
        </Link>
      </div>
      <div className="flex items-center gap-4 relative">
        {username ? (
          <div className="relative">
            <button 
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-2 group"
            >
              <div className="w-10 h-10 rounded-full border-2 border-primary/30 overflow-hidden group-hover:border-primary transition-all bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold uppercase">{username.charAt(0)}</span>
              </div>
            </button>
            
            <AnimatePresence>
              {showDropdown && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 mt-4 w-48 rounded-2xl bg-surface-container-high border border-white/10 shadow-2xl p-2 z-[60]"
                >
                  <div className="px-4 py-3 border-b border-white/5 mb-2">
                    <p className="text-xs font-bold text-white truncate">@{username}</p>
                    <p className="text-[10px] text-on-surface-variant truncate">Last.fm User</p>
                  </div>
                  <button 
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-error transition-colors"
                  >
                    <LogOut size={16} />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Log Out</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <Link href="/login">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-all">
              <User size={20} />
            </div>
          </Link>
        )}
      </div>
    </header>
  );
};

export const BottomNavBar = () => {
  return (
    <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md rounded-full bg-surface-container-low/20 dark:bg-surface-container-low/20 backdrop-blur-2xl border border-white/20 shadow-[0_0_40px_rgba(83,224,118,0.15)] z-50 flex justify-around items-center p-2">
      <Link href="/" className="flex flex-col items-center justify-center text-on-surface-variant/70 px-5 py-2 hover:text-primary transition-all">
        <Home size={20} />
        <span className="font-label-caps text-[10px] mt-1">Home</span>
      </Link>
      <Link href="/results" className="flex flex-col items-center justify-center text-on-surface-variant/70 px-5 py-2 hover:text-primary transition-all">
        <LayoutGrid size={20} />
        <span className="font-label-caps text-[10px] mt-1">Result</span>
      </Link>
      <Link href="/export" className="flex flex-col items-center justify-center text-on-surface-variant/70 px-5 py-2 hover:text-primary transition-all">
        <Share size={20} />
        <span className="font-label-caps text-[10px] mt-1">Share</span>
      </Link>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-background dark:bg-background full-width py-12 border-t border-outline-variant/30 flex flex-col items-center gap-6 px-container-margin mt-16">
      <div className="font-display-xl text-primary">EchoDNA</div>
      <div className="flex gap-8">
        <Link href="#" className="text-outline hover:text-tertiary transition-colors font-body-md">Privacy</Link>
        <Link href="#" className="text-outline hover:text-tertiary transition-colors font-body-md">Spotify API</Link>
        <Link href="#" className="text-outline hover:text-tertiary transition-colors font-body-md">Terms</Link>
      </div>
      <p className="font-body-md text-body-md text-outline">© 2024 EchoDNA. Powered by Data-Kineticism AI.</p>
    </footer>
  );
};
