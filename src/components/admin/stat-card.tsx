"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  trend?: {
    value: number;
    label: string;
  };
  className?: string;
  delay?: number;
}

export function StatCard({ title, value, icon, trend, className, delay = 0 }: StatCardProps) {
  const isPositiveTrend = trend?.value && trend.value >= 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl",
        className
      )}
    >
      {/* Decorative gradient blob */}
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-indigo-500/10 blur-2xl" />
      
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-400">{title}</h3>
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-indigo-400">
          {icon}
        </div>
      </div>
      
      <div className="flex items-baseline gap-2">
        <h2 className="text-3xl font-bold tracking-tight text-white">{value}</h2>
        {trend && (
          <span
            className={cn(
              "text-xs font-medium px-2 py-0.5 rounded-full",
              isPositiveTrend
                ? "bg-emerald-500/10 text-emerald-400"
                : "bg-rose-500/10 text-rose-400"
            )}
          >
            {isPositiveTrend ? "+" : ""}
            {trend.value}% {trend.label}
          </span>
        )}
      </div>
    </motion.div>
  );
}
