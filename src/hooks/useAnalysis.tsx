"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { analyzeSpotifyData, AnalysisResults } from "@/lib/spotify/analysis";

interface AnalysisContextType {
  loading: boolean;
  results: AnalysisResults | null;
  error: string | null;
  refreshAnalysis: () => Promise<void>;
}

const AnalysisContext = createContext<AnalysisContextType | undefined>(undefined);

export function AnalysisProvider({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<AnalysisResults | null>(null);
  const [error, setError] = useState<string | null>(null);

  const refreshAnalysis = async () => {
    if (status !== "authenticated" || !session?.accessToken) return;
    
    setLoading(true);
    setError(null);
    try {
      const data = await analyzeSpotifyData(session.accessToken as string);
      setResults(data);
    } catch (err) {
      console.error("Analysis failed:", err);
      setError("Failed to analyze Spotify data.");
    } finally {
      setLoading(false);
    }
  };

  // Run automatically on mount if authenticated and no results
  useEffect(() => {
    if (status === "authenticated" && !results && !loading && !error) {
      refreshAnalysis();
    }
  }, [status, session, results]);

  return (
    <AnalysisContext.Provider value={{ loading, results, error, refreshAnalysis }}>
      {children}
    </AnalysisContext.Provider>
  );
}

export function useAnalysis() {
  const context = useContext(AnalysisContext);
  if (context === undefined) {
    throw new Error("useAnalysis must be used within an AnalysisProvider");
  }
  return context;
}
