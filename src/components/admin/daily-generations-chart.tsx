"use client";

import { motion } from "framer-motion";

interface DailyGenerationsChartProps {
  data: { date: string; generations: number }[];
}

export function DailyGenerationsChart({ data }: DailyGenerationsChartProps) {
  const maxGenerations = Math.max(...data.map((d) => d.generations), 1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl col-span-1 lg:col-span-2"
    >
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">Generations per Day</h3>
          <p className="text-sm text-gray-400">Total generations over the last 7 days</p>
        </div>
      </div>

      <div className="relative h-64 w-full flex items-end justify-between gap-2 pt-4">
        {data.map((day, i) => {
          const heightPercentage = (day.generations / maxGenerations) * 100;
          
          return (
            <div key={day.date} className="relative flex h-full flex-1 flex-col justify-end group">
              {/* Tooltip */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 backdrop-blur-md px-2 py-1 rounded text-xs text-white whitespace-nowrap pointer-events-none border border-white/20">
                {day.generations} gens
              </div>
              
              {/* Bar */}
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${heightPercentage}%` }}
                transition={{ duration: 1, delay: 0.3 + i * 0.1, type: "spring" }}
                className="w-full rounded-t-md bg-gradient-to-t from-indigo-600/50 to-indigo-400 hover:from-indigo-500 hover:to-indigo-300 transition-colors"
              />
              
              {/* Label */}
              <span className="mt-2 text-center text-xs font-medium text-gray-400">
                {day.date}
              </span>
            </div>
          );
        })}
        
        {/* Horizontal grid lines */}
        <div className="absolute left-0 top-0 w-full border-t border-white/5 pointer-events-none" />
        <div className="absolute left-0 top-1/2 w-full border-t border-white/5 pointer-events-none" />
      </div>
    </motion.div>
  );
}
