"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { analyzeSpotifyData, AnalysisResults } from "@/lib/spotify/analysis";

export function useSpotifyAnalysis() {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState<AnalysisResults | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function startAnalysis() {
      if (status === "authenticated" && session?.accessToken) {
        try {
          const data = await analyzeSpotifyData(session.accessToken as string);
          setResults(data);
          setLoading(false);
        } catch (err) {
          console.error("Analysis failed:", err);
          setError("Failed to analyze Spotify data. Please try again.");
          setLoading(false);
        }
      } else if (status === "unauthenticated") {
        setError("Not authenticated");
        setLoading(false);
      }
    }

    startAnalysis();
  }, [session, status]);

  return { loading, results, error };
}
