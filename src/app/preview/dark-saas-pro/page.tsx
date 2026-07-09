"use client";

import { ArrowRight, Globe } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20 pb-32 h-screen">
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
  );
}
