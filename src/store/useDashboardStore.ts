import { create } from "zustand";

export type TimeRange = "Last 4 Weeks" | "Last 6 Months" | "All Time";

interface DashboardState {
  timeRange: TimeRange;
  setTimeRange: (range: TimeRange) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  timeRange: "Last 4 Weeks",
  setTimeRange: (range) => set({ timeRange: range }),
  isLoading: false,
  setIsLoading: (loading) => set({ isLoading: loading }),
}));
