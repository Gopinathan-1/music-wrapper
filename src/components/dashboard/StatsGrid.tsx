"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useDashboardStore } from "@/store/useDashboardStore";
import { fetchDashboardData } from "@/lib/mock/api";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function StatsGrid() {
  const timeRange = useDashboardStore((state) => state.timeRange);
  const [stats, setStats] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setLoading(true);

    fetchDashboardData(timeRange).then((data) => {
      if (mounted) {
        setStats(data.stats);
        setLoading(false);
      }
    });

    return () => {
      mounted = false;
    };
  }, [timeRange]);

  if (loading || stats.length === 0) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-32 animate-pulse rounded-xl border border-white/5 bg-white/5" />
        ))}
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={`${timeRange}-${index}`}
          variants={itemVariants}
          className={`group relative flex flex-col justify-between overflow-hidden rounded-xl border bg-black/40 p-5 backdrop-blur-md transition-all hover:bg-black/60 ${stat.borderColor}`}
          style={{
            boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.02)`,
          }}
          whileHover={{
            y: -2,
            boxShadow: `0 10px 30px -10px ${stat.glowColor}, inset 0 0 0 1px rgba(255,255,255,0.05)`,
          }}
        >
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/50">
            {stat.title}
          </h3>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            key={stat.value}
            className="mt-2 mb-1 text-3xl font-black tracking-tighter text-white"
          >
            {stat.value}
          </motion.div>
          <p className="text-[10px] text-white/40">{stat.subtext}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
