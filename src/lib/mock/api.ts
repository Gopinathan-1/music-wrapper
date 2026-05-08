export const fetchDashboardData = async (timeRange: string) => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  // Mock API response based on time range (just simulating for now)
  return {
    stats: [
      {
        title: "TRACKS ANALYZED",
        value: timeRange === "All Time" ? "12,482" : "847",
        subtext: "+12% from last month",
        glowColor: "rgba(168,85,247,0.4)",
        borderColor: "border-purple-500/50",
      },
      {
        title: "UNIQUE ARTISTS",
        value: timeRange === "All Time" ? "1,204" : "134",
        subtext: "Diversity score: 8.4",
        glowColor: "rgba(34,211,238,0.4)",
        borderColor: "border-cyan-400/50",
      },
      {
        title: "EST. HOURS",
        value: timeRange === "All Time" ? "4,120" : "312",
        subtext: "13 full days of sound",
        glowColor: "rgba(236,72,153,0.4)",
        borderColor: "border-pink-500/50",
      },
      {
        title: "MOST REPLAYED",
        value: "Midnight",
        subtext: "Taylor Swift",
        glowColor: "rgba(139,92,246,0.4)",
        borderColor: "border-violet-500/50",
      },
    ],
  };
};
