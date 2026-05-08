"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Bell } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useDashboardStore, TimeRange } from "@/store/useDashboardStore";
import { useState, useEffect } from "react";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const topTabs = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Deep Scan", href: "/deep-scan" },
  { name: "Archive", href: "/archive" },
  { name: "Lab", href: "/lab" },
];

const timeRanges: TimeRange[] = ["Last 4 Weeks", "Last 6 Months", "All Time"];

export function Topbar() {
  const pathname = usePathname();
  const { timeRange: activeTimeRange, setTimeRange } = useDashboardStore();
  const [username, setUsername] = useState("Alex Johnson");

  useEffect(() => {
    const cookies = document.cookie.split(';');
    const userCookie = cookies.find(c => c.trim().startsWith('lastfm_username='));
    if (userCookie) {
      setUsername(userCookie.split('=')[1]);
    }
  }, []);

  return (
    <header className="sticky top-0 z-30 flex h-20 w-full items-center justify-between border-b border-white/5 bg-black/40 px-8 backdrop-blur-xl">
      {/* Left Tabs */}
      <nav className="flex space-x-1">
        {topTabs.map((tab) => {
          const isActive = pathname === tab.href;
          return (
            <Link
              key={tab.name}
              href={tab.href}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                isActive ? "text-cyan-400" : "text-white/40 hover:text-white"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="topbar-active"
                  className="absolute bottom-0 left-1/2 h-0.5 w-1/2 -translate-x-1/2 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                  initial={false}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {tab.name}
            </Link>
          );
        })}
      </nav>

      {/* Right Controls */}
      <div className="flex items-center gap-6">
        {/* Time Range Selector */}
        <div className="flex items-center rounded-full border border-white/10 bg-white/5 p-1">
          {timeRanges.map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={cn(
                "relative rounded-full px-4 py-1 text-xs font-medium transition-colors z-10",
                activeTimeRange === range
                  ? "text-white"
                  : "text-white/40 hover:text-white/80"
              )}
            >
              {activeTimeRange === range && (
                <motion.div
                  layoutId="timerange-active"
                  className="absolute inset-0 -z-10 rounded-full bg-white/10 shadow-sm"
                  initial={false}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {range}
            </button>
          ))}
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 p-1 pr-4">
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-500 p-[2px]">
            <img
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`}
              alt="User"
              className="h-full w-full rounded-full bg-black object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold leading-none text-white">
              {username}
            </span>
            <span className="text-[10px] text-white/40">Last.fm User</span>
          </div>
        </div>

        {/* Notifications & Settings */}
        <div className="flex items-center gap-3">
          <button className="rounded-full border border-white/10 bg-white/5 p-2 text-white/40 transition-colors hover:text-white">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.5 14.5L14.5 21.5M21.5 14.5L14.5 7.5M21.5 14.5H2.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="relative rounded-full border border-white/10 bg-white/5 p-2 text-white/40 transition-colors hover:text-white">
            <Bell className="h-4 w-4" />
            <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
          </button>
        </div>
      </div>
    </header>
  );
}
