"use client";

import { ArrowRight, ArrowUpRight, ArrowDownRight, CreditCard, Activity, DollarSign, Users } from "lucide-react";

export default function FintechPreview() {
  return (
    <div className="flex flex-col min-h-screen bg-[hsl(210,20%,98%)] text-[hsl(222,47%,11%)] font-sans">
      <div className="flex-1 flex flex-col pt-12 pb-24">
        
        {/* Header */}
        <header className="px-8 mb-12 max-w-6xl mx-auto w-full">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-[hsl(222,47%,11%)]">Financial Overview</h1>
            <button className="bg-[hsl(210,100%,50%)] hover:bg-[hsl(210,100%,45%)] text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-sm">
              Generate Report
            </button>
          </div>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <MetricCard title="Total Balance" value="$284,592.00" trend="+12.5%" isPositive={true} icon={<DollarSign className="w-5 h-5" />} />
            <MetricCard title="Monthly Spend" value="$42,100.50" trend="-2.4%" isPositive={true} icon={<CreditCard className="w-5 h-5" />} />
            <MetricCard title="Active Users" value="8,492" trend="+18.2%" isPositive={true} icon={<Users className="w-5 h-5" />} />
            <MetricCard title="Churn Rate" value="3.2%" trend="+0.8%" isPositive={false} icon={<Activity className="w-5 h-5" />} />
          </div>
        </header>

        {/* Main Content Area */}
        <main className="px-8 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Chart Area */}
          <div className="lg:col-span-2 bg-white border border-[hsl(210,20%,92%)] rounded-2xl p-6 shadow-sm flex flex-col min-h-[400px]">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold text-lg text-[hsl(222,47%,11%)]">Cash Flow Analytics</h3>
              <select className="bg-[hsl(210,20%,98%)] border border-[hsl(210,20%,92%)] text-sm rounded-lg px-3 py-1.5 outline-none">
                <option>Last 30 Days</option>
                <option>This Year</option>
              </select>
            </div>
            
            {/* Mock Chart */}
            <div className="flex-1 border-b border-l border-[hsl(210,20%,92%)] relative mt-4">
               {/* Grid lines */}
               <div className="absolute inset-0 flex flex-col justify-between">
                 {[1,2,3,4,5].map(i => (
                   <div key={i} className="w-full h-px bg-[hsl(210,20%,96%)]" />
                 ))}
               </div>
               {/* Fake bar chart */}
               <div className="absolute inset-x-0 bottom-0 flex items-end justify-between px-8 pt-10 h-full">
                  {[40, 65, 45, 80, 55, 95, 70, 85].map((h, i) => (
                    <div key={i} className="w-12 bg-[hsl(210,100%,50%)] rounded-t-sm hover:bg-[hsl(210,100%,40%)] transition-colors cursor-pointer group relative" style={{ height: `${h}%` }}>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[hsl(222,47%,11%)] text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        ${h}k
                      </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-white border border-[hsl(210,20%,92%)] rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-lg text-[hsl(222,47%,11%)] mb-6">Recent Transactions</h3>
            <div className="space-y-4">
              <TransactionItem title="Stripe Payout" date="Today, 2:45 PM" amount="+$12,450.00" isPositive={true} />
              <TransactionItem title="AWS Services" date="Yesterday" amount="-$845.20" isPositive={false} />
              <TransactionItem title="GitHub Copilot" date="Oct 24, 2026" amount="-$190.00" isPositive={false} />
              <TransactionItem title="Client Retainer" date="Oct 22, 2026" amount="+$5,000.00" isPositive={true} />
              <TransactionItem title="Vercel Hosting" date="Oct 20, 2026" amount="-$120.00" isPositive={false} />
            </div>
            <button className="w-full mt-6 py-2.5 text-sm font-medium text-[hsl(210,100%,50%)] bg-[hsl(210,100%,95%)] hover:bg-[hsl(210,100%,90%)] rounded-xl transition-colors">
              View All Activity
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

function MetricCard({ title, value, trend, isPositive, icon }: any) {
  return (
    <div className="bg-white border border-[hsl(210,20%,92%)] rounded-2xl p-5 shadow-sm hover:border-[hsl(210,100%,80%)] transition-colors group cursor-pointer">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-[hsl(210,20%,98%)] rounded-lg text-[hsl(215,16%,47%)] group-hover:text-[hsl(210,100%,50%)] group-hover:bg-[hsl(210,100%,95%)] transition-colors">
          {icon}
        </div>
        <div className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-md ${isPositive ? 'bg-[hsl(142,71%,95%)] text-[hsl(142,71%,35%)]' : 'bg-[hsl(0,84%,95%)] text-[hsl(0,84%,50%)]'}`}>
          {isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
          {trend}
        </div>
      </div>
      <p className="text-[hsl(215,16%,47%)] text-sm font-medium mb-1">{title}</p>
      <h4 className="text-2xl font-bold text-[hsl(222,47%,11%)]">{value}</h4>
    </div>
  );
}

function TransactionItem({ title, date, amount, isPositive }: any) {
  return (
    <div className="flex items-center justify-between p-3 hover:bg-[hsl(210,20%,98%)] rounded-xl cursor-pointer transition-colors">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[hsl(210,20%,96%)] flex items-center justify-center text-[hsl(215,16%,47%)]">
          {isPositive ? <ArrowDownRight className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
        </div>
        <div>
          <p className="font-medium text-sm text-[hsl(222,47%,11%)]">{title}</p>
          <p className="text-xs text-[hsl(215,16%,47%)]">{date}</p>
        </div>
      </div>
      <span className={`text-sm font-semibold ${isPositive ? 'text-[hsl(142,71%,45%)]' : 'text-[hsl(222,47%,11%)]'}`}>
        {amount}
      </span>
    </div>
  );
}
