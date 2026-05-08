"use client";

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { Download } from "lucide-react";

const data = [
  { name: "JAN", value: 10 },
  { name: "FEB", value: 15 },
  { name: "MAR", value: 25 },
  { name: "APR", value: 45 },
  { name: "MAY", value: 65 },
  { name: "JUN", value: 80 },
  { name: "JUL", value: 30 },
  { name: "AUG", value: 95 },
  { name: "SEP", value: 90 },
];

export function MonthlyTrends() {
  return (
    <div className="flex flex-col rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-md">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h3 className="text-sm font-bold text-white">Monthly Trends</h3>
          <p className="text-xs text-white/40">Listening activity velocity (2024)</p>
        </div>
        <button className="text-white/40 hover:text-white transition-colors">
          <Download className="h-4 w-4" />
        </button>
      </div>

      <div className="h-48 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#a855f7" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#a855f7" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Tooltip
              contentStyle={{ backgroundColor: "#000", borderColor: "#333", borderRadius: "8px" }}
              itemStyle={{ color: "#a855f7" }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#a855f7"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorValue)"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: "rgba(255,255,255,0.4)" }}
              dy={10}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 flex justify-between rounded-xl bg-white/5 p-4">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">PEAK MONTH</div>
          <div className="mt-1 text-xl font-black text-purple-400">AUGUST</div>
        </div>
        <div className="text-right">
          <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">CONSISTENCY</div>
          <div className="mt-1 text-xl font-black text-cyan-400">92%</div>
        </div>
      </div>
    </div>
  );
}
