"use client";

import { motion } from "framer-motion";

interface TopArtistsProps {
  artists: any[];
}

export function TopArtists({ artists }: TopArtistsProps) {
  if (!artists || artists.length === 0) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-black tracking-tight text-white">Top Artists</h2>
        <button className="text-xs font-bold uppercase tracking-widest text-cyan-400 transition-colors hover:text-cyan-300">
          VIEW FULL ROSTER
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {artists.slice(0, 10).map((artist, i) => (
          <motion.div
            key={artist.id}
            whileHover={{ y: -5, scale: 1.02 }}
            onClick={() => window.open(artist.external_urls.spotify, '_blank')}
            className="group relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-md cursor-pointer"
          >
            {/* Rank Badge */}
            <div className="absolute left-2 top-2 z-20 flex h-6 w-6 items-center justify-center rounded-full bg-black/60 text-[10px] font-black text-white backdrop-blur-sm ring-1 ring-white/20">
              {i + 1}
            </div>

            {/* Gradient Overlay for Name */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity group-hover:from-purple-900/90" />

            {/* Real Spotify Image */}
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-black">
               <img
                  src={artist.images[0]?.url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${artist.name}`}
                  alt={artist.name}
                  className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            {/* Artist Name */}
            <div className="absolute bottom-3 left-3 z-20 pr-3">
              <span className="text-sm font-bold leading-tight text-white line-clamp-2">
                {artist.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
