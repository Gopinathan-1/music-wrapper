"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Activity,
  Clock,
  Users,
  Map,
  Download,
  Settings,
  HelpCircle,
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { name: "Acoustic Signature", href: "/dashboard", icon: Activity },
  { name: "Temporal Flow", href: "/temporal-flow", icon: Clock },
  { name: "Social Pulse", href: "/social-pulse", icon: Users },
  { name: "Genre Mapping", href: "/genre-mapping", icon: Map },
  { name: "Neural Export", href: "/neural-export", icon: Download },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-white/5 bg-black/40 backdrop-blur-xl">
      {/* Logo */}
      <div className="flex h-20 items-center px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex flex-col">
            <span className="text-2xl font-black uppercase leading-none tracking-tighter text-white">
              Sonic
            </span>
            <span className="text-2xl font-black uppercase leading-none tracking-tighter text-white">
              Architect
            </span>
          </div>
        </Link>
      </div>

      {/* Main Nav */}
      <nav className="flex-1 space-y-1 px-3 py-6">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group relative flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-colors",
                isActive
                  ? "text-white"
                  : "text-white/40 hover:bg-white/5 hover:text-white"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute inset-0 rounded-xl bg-purple-500/10 border border-purple-500/20"
                  initial={false}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {isActive && (
                <div className="absolute left-0 top-1/2 h-1/2 w-1 -translate-y-1/2 rounded-r-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
              )}
              <Icon
                className={cn(
                  "relative z-10 h-5 w-5",
                  isActive ? "text-purple-400" : "text-white/40 group-hover:text-white/80"
                )}
              />
              <span className="relative z-10">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Nav */}
      <div className="border-t border-white/5 p-4">
        <Link
          href="/settings"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium text-white/40 transition-colors hover:bg-white/5 hover:text-white"
        >
          <Settings className="h-4 w-4" />
          Settings
        </Link>
        <Link
          href="/support"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium text-white/40 transition-colors hover:bg-white/5 hover:text-white"
        >
          <HelpCircle className="h-4 w-4" />
          Support
        </Link>
      </div>
    </aside>
  );
}
