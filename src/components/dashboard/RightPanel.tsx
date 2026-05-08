"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const genreData = [
  { name: "Indie", value: 42, color: "#a855f7" },
  { name: "R&B", value: 28, color: "#22d3ee" },
  { name: "Synthwave", value: 15, color: "#ec4899" },
  { name: "Other", value: 15, color: "#333333" },
];

function GenreDNA() {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-md text-center">
      <h3 className="text-xl font-black text-white">Genre DNA</h3>
      <div className="relative mt-6 h-48 w-full flex justify-center items-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={genreData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
              stroke="none"
            >
              {genreData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute flex flex-col items-center justify-center">
          <span className="text-3xl font-black text-white">42%</span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">INDIE</span>
        </div>
      </div>
      
      <div className="mt-6 space-y-2 text-left">
        {genreData.filter(g => g.name !== "Other").map((genre) => (
          <div key={genre.name} className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full" style={{ backgroundColor: genre.color }} />
              <span className="text-white/80">{genre.name}</span>
            </div>
            <span className="font-bold text-white">{genre.value}%</span>
          </div>
        ))}
      </div>
      
      <div className="mt-6 border-t border-white/10 pt-4 text-xs italic text-white/50">
        "You're a sonic chameleon with a soul for the underground."
      </div>
    </div>
  );
}

function MoodSpectrum() {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-md">
      <h3 className="mb-6 text-xl font-black text-white">Mood Spectrum</h3>
      
      <div className="space-y-6">
        <div>
          <div className="mb-2 flex justify-between text-[10px] font-bold uppercase tracking-widest text-white/40">
            <span>SAD</span>
            <span>HAPPY</span>
          </div>
          <div className="relative h-1 w-full rounded-full bg-white/10">
            <div className="absolute left-[30%] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
          </div>
        </div>
        
        <div>
          <div className="mb-2 flex justify-between text-[10px] font-bold uppercase tracking-widest text-white/40">
            <span>CHILL</span>
            <span>ENERGETIC</span>
          </div>
          <div className="relative h-1 w-full rounded-full bg-white/10">
            <div className="absolute left-[20%] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SonicNeighbors() {
  const neighbors = [
    { name: "Frank Ocean", match: "94%", color: "bg-purple-500/20 text-purple-300" },
    { name: "Bon Iver", match: "86%", color: "bg-cyan-500/20 text-cyan-300" },
    { name: "Kendrick Lamar", match: "82%", color: "bg-pink-500/20 text-pink-300" },
  ];

  return (
    <div className="rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-md">
      <h3 className="mb-2 text-xl font-black text-white">Sonic Neighbors</h3>
      <p className="mb-6 text-[10px] text-white/40">Listeners like you also vibe with:</p>
      
      <div className="space-y-4">
        {neighbors.map((neighbor, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-white/10 p-[1px]">
                <img
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${neighbor.name}`}
                  alt={neighbor.name}
                  className="h-full w-full rounded-full bg-black"
                />
              </div>
              <span className="text-sm font-bold text-white">{neighbor.name}</span>
            </div>
            <span className={`rounded-md px-2 py-1 text-xs font-bold ${neighbor.color}`}>
              {neighbor.match}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function RightPanel() {
  return (
    <>
      <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-purple-500/20 py-4 text-xs font-bold uppercase tracking-widest text-purple-300 ring-1 ring-purple-500/50 transition-colors hover:bg-purple-500/30">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15M7 10L12 15M12 15L17 10M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        GENERATE MY MUSIC CARD
      </button>
      <GenreDNA />
      <MoodSpectrum />
      <SonicNeighbors />
    </>
  );
}
