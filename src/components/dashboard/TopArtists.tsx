"use client";

import { motion } from "framer-motion";

const artists = [
  { id: 1, name: "Frank Ocean", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Frank" },
  { id: 2, name: "Lana Del Rey", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lana" },
  { id: 3, name: "Arctic Monkeys", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arctic" },
  { id: 4, name: "The Weeknd", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Weeknd" },
  { id: 5, name: "Billie Eilish", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Billie" },
  { id: 6, name: "Tame Impala", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tame" },
  { id: 7, name: "Kendrick Lamar", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kendrick" },
  { id: 8, name: "J. Cole", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Cole" },
  { id: 9, name: "Drake", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Drake" },
  { id: 10, name: "Tyler, The Creator", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tyler" },
];

export function TopArtists() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-black tracking-tight text-white">Top Artists</h2>
        <button className="text-xs font-bold uppercase tracking-widest text-cyan-400 transition-colors hover:text-cyan-300">
          VIEW FULL ROSTER
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {artists.map((artist) => (
          <motion.div
            key={artist.id}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-md"
          >
            {/* Rank Badge */}
            <div className="absolute left-2 top-2 z-20 flex h-6 w-6 items-center justify-center rounded-full bg-black/60 text-[10px] font-black text-white backdrop-blur-sm ring-1 ring-white/20">
              {artist.id}
            </div>

            {/* Gradient Overlay for Name */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity group-hover:from-purple-900/90" />

            {/* Image mock with DiceBear */}
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-black p-4">
               <img
                  src={artist.image}
                  alt={artist.name}
                  className="h-full w-full object-contain opacity-80 transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            {/* Artist Name */}
            <div className="absolute bottom-3 left-3 z-20">
              <span className="text-sm font-bold leading-tight text-white">
                {artist.name.split(" ").map((word, i) => (
                  <span key={i} className="block">{word}</span>
                ))}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
