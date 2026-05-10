import { SpotifyConnectModal } from "@/components/dashboard/SpotifyConnectModal";
import { DashboardContent } from "@/components/dashboard/DashboardContent";

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl relative">
      <SpotifyConnectModal />
      <DashboardContent />
    </div>
  );
}
