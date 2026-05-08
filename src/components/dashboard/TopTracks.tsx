"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

const tracks = [
  {
    id: "01",
    title: "Pink + White",
    artist: "Frank Ocean",
    album: "Blonde",
    tags: [{ name: "CHILL", color: "cyan" }, { name: "NOCTURNAL", color: "purple" }],
  },
  {
    id: "02",
    title: "Video Games",
    artist: "Lana Del Rey",
    album: "Born To Die",
    tags: [{ name: "NOCTURNAL", color: "purple" }, { name: "SAD", color: "pink" }],
  },
  {
    id: "03",
    title: "Do I Wanna Know?",
    artist: "Arctic Monkeys",
    album: "AM",
    tags: [{ name: "ENERGETIC", color: "yellow" }],
  },
];

const tagColors: Record<string, string> = {
  cyan: "text-cyan-300 border-cyan-400/30 bg-cyan-400/10",
  purple: "text-purple-300 border-purple-500/30 bg-purple-500/10",
  pink: "text-pink-300 border-pink-500/30 bg-pink-500/10",
  yellow: "text-yellow-300 border-yellow-500/30 bg-yellow-500/10",
};

export function TopTracks() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-black tracking-tight text-white">Top Tracks</h2>

      <div className="space-y-3">
        {tracks.map((track) => (
          <motion.div
            key={track.id}
            whileHover={{ scale: 1.01 }}
            className="group flex items-center justify-between rounded-xl border border-white/5 bg-black/40 p-4 transition-all hover:border-white/10 hover:bg-white/5"
          >
            <div className="flex items-center gap-4">
              <span className="text-sm font-bold text-white/30">{track.id}</span>
              
              {/* Album Art Mock */}
              <div className="h-10 w-10 rounded bg-gradient-to-br from-neutral-700 to-neutral-900 shadow-inner" />
              
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white">{track.title}</span>
                <span className="text-xs text-white/50">
                  {track.artist} - {track.album}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden space-x-2 sm:block">
                {track.tags.map((tag) => (
                  <span
                    key={tag.name}
                    className={`rounded-full border px-2 py-0.5 text-[8px] font-black uppercase tracking-widest ${tagColors[tag.color]}`}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
              <button className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 transition-colors group-hover:bg-white/10 group-hover:text-white">
                <Play className="h-3.5 w-3.5 fill-current ml-0.5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <button className="w-full rounded-xl border border-white/5 bg-black/40 py-4 text-xs font-bold uppercase tracking-widest text-white/50 transition-colors hover:bg-white/5 hover:text-white">
        SHOW MORE TRACKS
      </button>
    </div>
  );
}
