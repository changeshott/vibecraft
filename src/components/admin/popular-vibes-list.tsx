"use client";

import { motion } from "framer-motion";
import { Sparkles, Briefcase, Code, Coffee } from "lucide-react";

interface PopularVibesListProps {
  data: { name: string; uses: number; percentage: number }[];
}

const colorMap: Record<string, string> = {
  "Dark SaaS Pro": "bg-blue-500",
  "Neo Brutalism": "bg-pink-500",
  "Glassmorphism": "bg-purple-500",
  "Minimalist": "bg-emerald-500",
  "default": "bg-[#b1ff62]"
};

export function PopularVibesList({ data }: PopularVibesListProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl"
    >
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white">Popular Vibes</h3>
        <p className="text-sm text-gray-400">Most generated aesthetics</p>
      </div>

      <div className="space-y-6">
        {data.length === 0 ? (
          <p className="text-gray-400 text-sm">No data available yet.</p>
        ) : (
          data.map((vibe, i) => {
            const Icon = Sparkles; // Default icon, can map if needed
            const color = colorMap[vibe.name] || colorMap["default"];
            return (
              <div key={vibe.name} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-white font-medium">
                <Icon className="h-4 w-4 text-gray-400" />
                {vibe.name}
              </div>
              <span className="text-gray-400">{vibe.uses.toLocaleString()} uses</span>
            </div>
            
            <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${vibe.percentage}%` }}
                transition={{ duration: 1, delay: 0.5 + i * 0.1, type: "spring" }}
                className={`h-full rounded-full ${color}`}
              />
            </div>
          </div>
            );
          })
        )}
      </div>
    </motion.div>
  );
}
