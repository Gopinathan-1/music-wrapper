"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface TopTracksProps {
  tracks: any[];
}

const tagColors: Record<string, string> = {
  cyan: "text-cyan-300 border-cyan-400/30 bg-cyan-400/10",
  purple: "text-purple-300 border-purple-500/30 bg-purple-500/10",
  pink: "text-pink-300 border-pink-500/30 bg-pink-500/10",
  yellow: "text-yellow-300 border-yellow-500/30 bg-yellow-500/10",
  green: "text-primary border-primary/30 bg-primary/10",
};

export function TopTracks({ tracks }: TopTracksProps) {
  if (!tracks || tracks.length === 0) {
    return null;
  }

  // Generate random tags just for visual flair since Spotify API doesn't return mood tags natively
  const getRandomTags = (trackName: string) => {
    const moods = ["CHILL", "NOCTURNAL", "SAD", "ENERGETIC", "VIBEY", "DEEP"];
    const colors = ["cyan", "purple", "pink", "yellow", "green"];
    // Deterministic random based on name length so it doesn't flicker on re-render
    const mood1 = moods[trackName.length % moods.length];
    const color1 = colors[trackName.length % colors.length];
    return [{ name: mood1, color: color1 }];
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-black tracking-tight text-white">Top Tracks</h2>

      <div className="space-y-3">
        {tracks.slice(0, 5).map((track, i) => (
          <motion.div
            key={track.id}
            whileHover={{ scale: 1.01 }}
            className="group flex items-center justify-between rounded-xl border border-white/5 bg-black/40 p-4 transition-all hover:border-white/10 hover:bg-white/5"
          >
            <div className="flex items-center gap-4">
              <span className="text-sm font-bold text-white/30 w-6">{(i + 1).toString().padStart(2, '0')}</span>
              
              <div className="h-10 w-10 rounded overflow-hidden shadow-inner flex-shrink-0">
                <img src={track.album.images[0]?.url} alt={track.album.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="flex flex-col overflow-hidden max-w-[200px] sm:max-w-[300px]">
                <span className="text-sm font-bold text-white truncate">{track.name}</span>
                <span className="text-xs text-white/50 truncate">
                  {track.artists.map((a: any) => a.name).join(", ")} - {track.album.name}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden space-x-2 sm:block">
                {getRandomTags(track.name).map((tag) => (
                  <span
                    key={tag.name}
                    className={`rounded-full border px-2 py-0.5 text-[8px] font-black uppercase tracking-widest ${tagColors[tag.color]}`}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
              <button 
                onClick={() => window.open(track.external_urls.spotify, '_blank')}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 transition-colors group-hover:bg-white/10 group-hover:text-[#1DB954]"
              >
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
