import { Sidebar } from "@/components/sidebar/Sidebar";
import { Topbar } from "@/components/topbar/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-[#0A0A0A] text-white">
      <Sidebar />
      <div className="flex flex-1 flex-col pl-64">
        <Topbar />
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-8 bg-[#0A0A0A]">
          {children}
        </main>
      </div>
    </div>
  );
}
