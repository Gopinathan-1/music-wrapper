"use client";

import { useState, useEffect } from "react";
import { HeroSection } from "./HeroSection";
import { StatsGrid } from "./StatsGrid";
import { TopArtists } from "./TopArtists";
import { TopTracks } from "./TopTracks";
import { RightPanel } from "./RightPanel";
import { useDashboardStore } from "@/store/useDashboardStore";
import { getTopTracks, getTopArtists, getRecentlyPlayed, getCurrentlyPlaying } from "@/actions/spotify";
import { generateListeningAnalysis } from "@/actions/gemini";

export function DashboardContent() {
  const timeRange = useDashboardStore((state) => state.timeRange);
  
  const [loading, setLoading] = useState(true);
  const [isRegenerating, setIsRegenerating] = useState(false);
  const [topTracks, setTopTracks] = useState<any[]>([]);
  const [topArtists, setTopArtists] = useState<any[]>([]);
  const [analysis, setAnalysis] = useState<any>(null);
  const [stats, setStats] = useState<any[]>([]);

  const mapTimeRange = (range: string) => {
    switch (range) {
      case "Last 4 Weeks": return "short_term";
      case "Last 6 Months": return "medium_term";
      case "All Time": return "long_term";
      default: return "short_term";
    }
  };

  const loadData = async (forceRegenerate = false) => {
    setLoading(!forceRegenerate);
    if (forceRegenerate) setIsRegenerating(true);

    try {
      const spotifyRange = mapTimeRange(timeRange);
      
      const [tracksData, artistsData] = await Promise.all([
        getTopTracks(20, spotifyRange),
        getTopArtists(10, spotifyRange)
      ]);

      if (tracksData?.items) setTopTracks(tracksData.items);
      if (artistsData?.items) setTopArtists(artistsData.items);

      // Cache the analysis based on timeRange to avoid spamming Gemini
      const cacheKey = `gemini_analysis_${spotifyRange}`;
      const cached = localStorage.getItem(cacheKey);

      let aiResult;
      if (cached && !forceRegenerate) {
        aiResult = JSON.parse(cached);
      } else if (artistsData?.items?.length > 0 && tracksData?.items?.length > 0) {
        aiResult = await generateListeningAnalysis(artistsData.items, tracksData.items);
      } else {
        // Fallback for new Spotify users with no top tracks/artists history
        const [recentData, currentData] = await Promise.all([
          getRecentlyPlayed(10),
          getCurrentlyPlaying()
        ]);
        
        const fallbackTracks = [];
        if (currentData?.item) fallbackTracks.push(currentData.item);
        if (recentData?.items) fallbackTracks.push(...recentData.items.map((i: any) => i.track));

        if (fallbackTracks.length > 0) {
          setTopTracks(fallbackTracks);
          aiResult = await generateListeningAnalysis([], fallbackTracks);
        } else {
          // Absolute fallback if brand new account and not playing anything
          aiResult = {
            archetype: "The Blank Canvas",
            description: "Your Spotify history is a clean slate. Start listening to music to generate your unique acoustic signature and genre DNA!",
            genreDNA: [
              { name: "Discovering", percentage: 100, color: "#a855f7" }
            ],
            moodSpectrum: { sad: 25, happy: 25, energetic: 25, chill: 25 },
            stats: { diversityScore: 0 }
          };
        }
      }

      if (aiResult && !cached) {
        localStorage.setItem(cacheKey, JSON.stringify(aiResult));
      }
      
      if (aiResult) {
        setAnalysis(aiResult);
        
        // Calculate dynamic stats
        setStats([
          {
            title: "TRACKS ANALYZED",
            value: tracksData?.total > 999 ? "999+" : tracksData?.total || 0,
            subtext: "From your entire history",
            borderColor: "border-purple-500/20",
            glowColor: "rgba(168,85,247,0.4)"
          },
          {
            title: "UNIQUE ARTISTS",
            value: artistsData?.total > 999 ? "999+" : artistsData?.total || 0,
            subtext: `Diversity score: ${aiResult.stats?.diversityScore || 'N/A'}`,
            borderColor: "border-cyan-500/20",
            glowColor: "rgba(34,211,238,0.4)"
          },
          {
            title: "TOP GENRE",
            value: aiResult.genreDNA?.[0]?.name || "Unknown",
            subtext: `${aiResult.genreDNA?.[0]?.percentage || 0}% of your listening`,
            borderColor: "border-pink-500/20",
            glowColor: "rgba(236,72,153,0.4)"
          },
          {
            title: "PRIMARY MOOD",
            value: Object.keys(aiResult.moodSpectrum || {}).reduce((a, b) => aiResult.moodSpectrum[a] > aiResult.moodSpectrum[b] ? a : b, 'chill').toUpperCase(),
            subtext: "Based on audio features",
            borderColor: "border-primary/20",
            glowColor: "rgba(83,224,118,0.4)"
          }
        ]);
      }
    } catch (e) {
      console.error("Failed to load dashboard data", e);
    } finally {
      setLoading(false);
      setIsRegenerating(false);
    }
  };

  useEffect(() => {
    // Only load if they have a spotify token
    if (document.cookie.includes("spotify_access_token=")) {
      loadData();
    }
  }, [timeRange]);

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
          <p className="text-sm font-bold uppercase tracking-widest text-primary animate-pulse">Syncing with Spotify & Gemini AI...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
      <div className="flex flex-col gap-8 lg:col-span-8">
        <HeroSection 
          analysis={analysis} 
          onRegenerate={() => loadData(true)} 
          isRegenerating={isRegenerating} 
        />
        <StatsGrid stats={stats} />
        <TopArtists artists={topArtists} />
        <TopTracks tracks={topTracks} />
      </div>

      <div className="flex flex-col gap-8 lg:col-span-4">
        <RightPanel analysis={analysis} />
      </div>
    </div>
  );
}
