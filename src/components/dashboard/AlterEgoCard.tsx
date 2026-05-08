"use client";

import { Share2 } from "lucide-react";

export function AlterEgoCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md">
      <div className="flex h-full flex-col sm:flex-row">
        {/* Left Image Area */}
        <div className="relative h-64 w-full sm:h-auto sm:w-1/2">
          {/* Cyberpunk portrait mock */}
          <img
            src="https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=1000&auto=format&fit=crop"
            alt="Alter Ego"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent sm:bg-gradient-to-r" />
          <div className="absolute inset-0 bg-purple-500/10 mix-blend-overlay" />
        </div>

        {/* Right Content Area */}
        <div className="relative flex w-full flex-col p-6 sm:w-1/2">
          <div className="mb-4 inline-flex self-start rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-1 text-[8px] font-black uppercase tracking-widest text-cyan-300">
            MUSIC ALTER EGO
          </div>

          <h3 className="mb-4 text-xl font-black leading-tight text-white">
            NOVA — The Neon Dreamer
          </h3>

          <p className="mb-6 text-xs leading-relaxed text-white/60">
            Your listening habits suggest a preference for futuristic, synth-heavy atmospheres. You find clarity in the pulse of the digital night.
          </p>

          <div className="mt-auto space-y-4">
            <div>
              <div className="mb-2 text-[10px] font-bold uppercase tracking-widest text-white/40">
                TOP 2 TRACKS
              </div>
              <div className="text-xs font-semibold text-white">Nightcall • Kavinsky</div>
              <div className="text-xs font-semibold text-white">Midnight City • M83</div>
            </div>

            <div className="flex flex-wrap gap-2">
              {["SYNTHWAVE", "CYBERPUNK", "NIGHTDRIVE"].map((tag) => (
                <span key={tag} className="rounded border border-white/10 bg-white/5 px-2 py-1 text-[8px] font-bold uppercase text-white/60">
                  #{tag}
                </span>
              ))}
            </div>

            <div className="pt-4">
              <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500/20 py-3 text-xs font-bold text-cyan-400 transition-colors hover:bg-cyan-500/30">
                <Share2 className="h-4 w-4" />
                SHARE PROFILE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
