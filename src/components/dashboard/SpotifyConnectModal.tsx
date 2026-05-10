"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Disc3, X } from "lucide-react";
import { Button } from "@/components/ui/echodna/Button";

export function SpotifyConnectModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkSpotifyStatus = async () => {
      // 1. Check if the user already has an active Spotify token cookie
      if (document.cookie.includes("spotify_access_token=")) return;

      // 2. If no cookie, check if we have a refresh token saved in Supabase
      const { supabase } = await import('@/lib/supabase');
      const { data: { user } } = await supabase.auth.getUser();

      const savedRefreshToken = user?.user_metadata?.spotify_refresh_token;

      if (savedRefreshToken) {
        // Try to automatically refresh the session silently
        try {
          const res = await fetch('/api/auth/refresh', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ refresh_token: savedRefreshToken })
          });
          
          if (res.ok) {
            // Refreshed successfully! Do not show modal.
            window.location.reload(); // Reload to apply the new cookie to all components
            return;
          }
        } catch (e) {
          console.error("Failed to auto-refresh Spotify token", e);
        }
      }

      // 3. If no active cookie and no saved refresh token (or refresh failed), show the modal
      setIsOpen(true);
    };

    const timer = setTimeout(() => {
      checkSpotifyStatus();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md p-8 overflow-hidden border bg-surface-container-high border-white/10 rounded-3xl shadow-2xl"
          >
            {/* Background effects */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#1DB954]/20 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />

            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-on-surface-variant/50 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-[#1DB954]/10">
                <Disc3 size={32} className="text-[#1DB954]" />
              </div>

              <h2 className="mb-2 text-2xl font-bold text-white font-headline-md">
                Connect Spotify
              </h2>
              <p className="mb-8 text-sm text-on-surface-variant/80 font-body-md">
                To generate your musical DNA and see your stats, you need to link your Spotify account.
              </p>

              <a href="/api/auth/spotify" className="w-full">
                <Button className="w-full py-4 text-black bg-[#1DB954] hover:bg-[#1ed760] font-bold rounded-xl shadow-[0_0_15px_rgba(29,185,84,0.3)] transition-all">
                  Connect with Spotify
                </Button>
              </a>

              <button 
                onClick={() => setIsOpen(false)}
                className="mt-4 text-xs font-medium text-on-surface-variant/60 hover:text-white transition-colors"
              >
                Maybe later
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
