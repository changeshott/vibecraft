"use client";

import { motion } from "framer-motion";

interface FunnelChartProps {
  data: { step: string; users: number; color: string }[];
}

export function FunnelChart({ data }: FunnelChartProps) {
  const maxUsers = data[0]?.users || 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl col-span-1 lg:col-span-2"
    >
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white">Generator Flow Drop-off</h3>
        <p className="text-sm text-gray-400">User progression through the generation funnel</p>
      </div>

      <div className="space-y-4">
        {data.length === 0 ? (
          <p className="text-gray-400 text-sm">No data available yet.</p>
        ) : (
        data.map((step, i) => {
          const widthPercentage = (step.users / maxUsers) * 100;
          const dropoffFromPrevious = i > 0 && data[i-1].users > 0
            ? Math.round(((data[i-1].users - step.users) / data[i-1].users) * 100)
            : 0;
            
          return (
            <div key={step.step} className="relative">
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="font-medium text-white">{step.step}</span>
                <div className="flex gap-4">
                  {i > 0 && (
                    <span className="text-rose-400 text-xs mt-0.5">-{dropoffFromPrevious}% drop</span>
                  )}
                  <span className="text-gray-400 w-16 text-right">{step.users.toLocaleString()}</span>
                </div>
              </div>
              
              {/* Funnel Bar */}
              <div className="flex justify-center w-full bg-white/5 rounded-md h-8 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${widthPercentage}%` }}
                  transition={{ duration: 1, delay: 0.6 + i * 0.1, type: "spring" }}
                  className={`h-full ${step.color} rounded-md`}
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
