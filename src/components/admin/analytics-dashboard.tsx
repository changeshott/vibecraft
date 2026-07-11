"use client";

import { motion } from "framer-motion";
import { Users, Zap, TrendingUp, CreditCard } from "lucide-react";
import { StatCard } from "./stat-card";
import { DailyGenerationsChart } from "./daily-generations-chart";
import { PopularVibesList } from "./popular-vibes-list";
import { FunnelChart } from "./funnel-chart";

interface AnalyticsData {
  totalGenerations: number;
  activeUsers: number;
  conversionRate: string;
  dailyGenerations: { date: string; generations: number }[];
  popularVibes: { name: string; uses: number; percentage: number }[];
  funnelSteps: { step: string; users: number; color: string }[];
}

export function AnalyticsDashboard({ data }: { data: AnalyticsData }) {
  return (
    <div className="min-h-screen bg-[#050505] p-6 lg:p-8 font-sans selection:bg-indigo-500/30">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Analytics</h1>
            <p className="text-gray-400">Track generator usage, popular vibes, and conversion funnels.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-medium text-gray-400">Live Data</span>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <StatCard
            title="Total Generations"
            value={data.totalGenerations.toLocaleString()}
            icon={<Zap className="h-5 w-5" />}
            delay={0.1}
          />
          <StatCard
            title="Active Users"
            value={data.activeUsers.toLocaleString()}
            icon={<Users className="h-5 w-5" />}
            delay={0.2}
          />
          <StatCard
            title="Avg. Time to Generate"
            value="~2s"
            icon={<TrendingUp className="h-5 w-5" />}
            delay={0.3}
          />
          <StatCard
            title="Free to Pro Conversion"
            value={data.conversionRate}
            icon={<CreditCard className="h-5 w-5" />}
            delay={0.4}
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          <DailyGenerationsChart data={data.dailyGenerations} />
          <PopularVibesList data={data.popularVibes} />
          <FunnelChart data={data.funnelSteps} />
          
          {/* We can add another card here to fill the grid if needed, or make FunnelChart col-span-2, which we did */}
        </div>
      </div>
    </div>
  );
}
