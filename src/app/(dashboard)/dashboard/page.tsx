import { HeroSection } from "@/components/dashboard/HeroSection";
import { StatsGrid } from "@/components/dashboard/StatsGrid";
import { TopArtists } from "@/components/dashboard/TopArtists";
import { TopTracks } from "@/components/dashboard/TopTracks";
import { RightPanel } from "@/components/dashboard/RightPanel";
import { LowerSection } from "@/components/dashboard/LowerSection";

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left Column (Main Content) */}
        <div className="flex flex-col gap-8 lg:col-span-8">
          <HeroSection />
          <StatsGrid />
          <TopArtists />
          <TopTracks />
          <LowerSection />
        </div>

        {/* Right Column (Widgets) */}
        <div className="flex flex-col gap-8 lg:col-span-4">
          <RightPanel />
        </div>
      </div>
    </div>
  );
}
