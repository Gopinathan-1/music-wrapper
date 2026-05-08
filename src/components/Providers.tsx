"use client";

import { SessionProvider } from "next-auth/react";
import { AnalysisProvider } from "@/hooks/useAnalysis";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <AnalysisProvider>
        {children}
      </AnalysisProvider>
    </SessionProvider>
  );
}
