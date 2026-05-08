"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { analyzeLastfmData, AnalysisData } from "@/lib/lastfm/analysis";

interface AnalysisContextType {
  loading: boolean;
  results: AnalysisData | null;
  error: string | null;
  username: string | null;
  startAnalysis: (username: string) => Promise<void>;
  resetAnalysis: () => void;
}

const AnalysisContext = createContext<AnalysisContextType | undefined>(undefined);

export function AnalysisProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<AnalysisData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);

  const startAnalysis = async (user: string) => {
    if (!user) return;
    
    setLoading(true);
    setError(null);
    setUsername(user);

    try {
      // In a real app this might hit a Next.js API route to hide the API key,
      // but we can just run it client-side since the key is public for Last.fm usually
      const data = await analyzeLastfmData(user);
      setResults(data);
    } catch (err: any) {
      console.error("Analysis failed:", err);
      setError(err.message || "Failed to analyze Last.fm data.");
    } finally {
      setLoading(false);
    }
  };

  const resetAnalysis = () => {
    setResults(null);
    setError(null);
    setUsername(null);
  };

  return (
    <AnalysisContext.Provider value={{ loading, results, error, username, startAnalysis, resetAnalysis }}>
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
