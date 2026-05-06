import Link from "next/link";
import { User, Home, Microscope, Brain, Share } from "lucide-react";

export const TopAppBar = () => {
  return (
    <header className="bg-surface/10 dark:bg-surface/10 backdrop-blur-xl border-b border-white/10 docked full-width top-0 sticky z-50 flex justify-between items-center px-container-margin py-4 w-full">
      <Link href="/" className="font-display-xl text-headline-md text-primary tracking-tighter">
        EchoDNA
      </Link>
      <div className="hidden md:flex gap-8 items-center">
        <Link href="/" className="font-headline-md text-headline-md text-primary font-bold hover:text-secondary-fixed transition-colors">
          Home
        </Link>
        <Link href="/analyzing" className="font-headline-md text-headline-md text-on-surface-variant hover:text-secondary-fixed transition-colors">
          Analysis
        </Link>
        <Link href="/alter-ego" className="font-headline-md text-headline-md text-on-surface-variant hover:text-secondary-fixed transition-colors">
          Alter Ego
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/login">
          <User className="text-primary cursor-pointer hover:scale-95 transition-transform" />
        </Link>
      </div>
    </header>
  );
};

export const BottomNavBar = () => {
  return (
    <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md rounded-full bg-surface-container-low/20 dark:bg-surface-container-low/20 backdrop-blur-2xl border border-white/20 shadow-[0_0_40px_rgba(83,224,118,0.15)] z-50 flex justify-around items-center p-2">
      <Link href="/" className="flex flex-col items-center justify-center bg-primary text-on-primary rounded-full px-5 py-2 shadow-[0_0_20px_rgba(83,224,118,0.4)]">
        <Home size={20} />
        <span className="font-label-caps text-[10px] mt-1">Home</span>
      </Link>
      <Link href="/analyzing" className="flex flex-col items-center justify-center text-on-surface-variant/70 px-5 py-2 hover:text-primary transition-all">
        <Microscope size={20} />
        <span className="font-label-caps text-[10px] mt-1">Analysis</span>
      </Link>
      <Link href="/alter-ego" className="flex flex-col items-center justify-center text-on-surface-variant/70 px-5 py-2 hover:text-primary transition-all">
        <Brain size={20} />
        <span className="font-label-caps text-[10px] mt-1">Alter Ego</span>
      </Link>
      <Link href="/share" className="flex flex-col items-center justify-center text-on-surface-variant/70 px-5 py-2 hover:text-primary transition-all">
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
