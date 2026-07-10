"use client";

import { ArrowRight, Globe } from "lucide-react";

export default function Hero() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative flex items-center justify-center overflow-hidden pt-20 pb-32 min-h-screen shrink-0">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[hsl(222,47%,6%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDAuNWg0ME0wLjUgMHY0MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-50" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[hsl(262,83%,65%)]/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-[hsl(262,83%,65%)/0.3] bg-[hsl(262,83%,65%)/0.1] text-[hsl(262,83%,65%)] text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-[hsl(262,83%,65%)] mr-2 animate-pulse" />
            Available for new projects
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 leading-[1.1]">
            Crafting digital experiences with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(262,83%,65%)] to-[hsl(210,100%,60%)]">extreme precision.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-[hsl(215,20%,65%)] mb-10 max-w-2xl mx-auto leading-relaxed">
            I build high-performance web applications, enterprise SaaS platforms, and stunning e-commerce experiences using modern web technologies.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(262,83%,65%)] focus-visible:ring-offset-2 bg-[hsl(262,83%,65%)] text-white hover:bg-[hsl(262,83%,58%)] shadow-lg shadow-[hsl(262,83%,65%)/0.25] hover:-translate-y-0.5 h-12 px-8 gap-2">
              View My Work <ArrowRight className="w-4 h-4" />
            </button>
            <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(262,83%,65%)] focus-visible:ring-offset-2 border border-[hsl(222,20%,25%)] bg-[hsl(222,30%,10%)] hover:bg-[hsl(222,20%,18%)] hover:text-white text-[hsl(210,40%,98%)] h-12 px-8 gap-2">
              <Globe className="w-4 h-4" /> Read Documentation
            </button>
          </div>
        </div>
      </section>

      {/* Components Section */}
      <section className="relative py-24 bg-[hsl(222,47%,6%)] border-t border-[hsl(222,20%,15%)] flex-1">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">UI Components</h2>
            <p className="text-[hsl(215,20%,65%)]">Interactive elements styled with Dark SaaS Pro.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Form Card */}
            <div className="p-8 rounded-2xl border border-[hsl(222,20%,25%)] bg-[hsl(222,30%,10%)] shadow-xl relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_0_30px_hsl(262,83%,65%,0.15)] hover:border-[hsl(262,83%,65%,0.3)]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[hsl(262,83%,65%)]/10 blur-[50px] rounded-full" />
              <h3 className="text-xl font-bold text-white mb-2 relative z-10">Create Account</h3>
              <p className="text-[hsl(215,20%,65%)] text-sm mb-6 relative z-10">Join thousands of developers.</p>
              
              <div className="space-y-4 relative z-10">
                <div>
                  <label className="block text-sm font-medium text-[hsl(215,20%,80%)] mb-1.5">Email Address</label>
                  <input type="email" placeholder="you@example.com" className="w-full bg-[hsl(222,47%,6%)] border border-[hsl(222,20%,25%)] rounded-xl px-4 py-2.5 text-sm text-white focus:border-[hsl(262,83%,65%)] focus:ring-1 focus:ring-[hsl(262,83%,65%)] outline-none transition-all placeholder:text-[hsl(215,20%,40%)]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[hsl(215,20%,80%)] mb-1.5">Password</label>
                  <input type="password" placeholder="••••••••" className="w-full bg-[hsl(222,47%,6%)] border border-[hsl(222,20%,25%)] rounded-xl px-4 py-2.5 text-sm text-white focus:border-[hsl(262,83%,65%)] focus:ring-1 focus:ring-[hsl(262,83%,65%)] outline-none transition-all placeholder:text-[hsl(215,20%,40%)]" />
                </div>
                <button className="w-full bg-[hsl(262,83%,65%)] text-white text-sm font-bold px-6 py-3 rounded-xl hover:bg-[hsl(262,83%,58%)] shadow-lg shadow-[hsl(262,83%,65%)/0.2] transition-all hover:-translate-y-0.5 mt-2">
                  Sign Up
                </button>
              </div>
            </div>

            {/* Elements Card */}
            <div className="space-y-6">
              <div className="p-6 rounded-2xl border border-[hsl(222,20%,25%)] bg-[hsl(222,30%,10%)]">
                 <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Buttons & Badges</h4>
                 <div className="flex flex-wrap gap-3">
                    <button className="px-4 py-2 bg-[hsl(262,83%,65%)] text-white rounded-lg text-sm font-medium hover:bg-[hsl(262,83%,58%)] transition-colors">Primary</button>
                    <button className="px-4 py-2 bg-[hsl(222,20%,20%)] text-white rounded-lg text-sm font-medium hover:bg-[hsl(222,20%,25%)] border border-[hsl(222,20%,30%)] transition-colors">Secondary</button>
                    <button className="px-4 py-2 bg-transparent text-[hsl(262,83%,65%)] hover:bg-[hsl(262,83%,65%)]/10 rounded-lg text-sm font-medium transition-colors">Ghost</button>
                 </div>
                 <div className="flex flex-wrap gap-3 mt-4">
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-[hsl(142,71%,45%)]/10 text-[hsl(142,71%,45%)] border border-[hsl(142,71%,45%)]/20">Success</span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-[hsl(346,87%,43%)]/10 text-[hsl(346,87%,43%)] border border-[hsl(346,87%,43%)]/20">Error</span>
                 </div>
              </div>
              
              <div className="p-6 rounded-2xl border border-[hsl(222,20%,25%)] bg-[hsl(222,30%,10%)]">
                <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Interactive Card</h4>
                <div className="p-4 rounded-xl border border-[hsl(222,20%,25%)] bg-[hsl(222,47%,6%)] hover:border-[hsl(262,83%,65%)]/50 cursor-pointer transition-colors group">
                  <div className="flex justify-between items-center">
                    <div>
                      <h5 className="text-white font-medium group-hover:text-[hsl(262,83%,65%)] transition-colors">Project Alpha</h5>
                      <p className="text-xs text-[hsl(215,20%,65%)] mt-1">Updated 2 hours ago</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[hsl(215,20%,50%)] group-hover:text-[hsl(262,83%,65%)] group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
