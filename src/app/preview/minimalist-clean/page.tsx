"use client";

import { ArrowRight, PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-32 min-h-screen flex items-center">
      <div className="container mx-auto px-4 text-center max-w-5xl">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-[hsl(0,0%,98%)] border border-[hsl(0,0%,90%)] text-[hsl(0,0%,40%)] text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-[hsl(221,83%,53%)] mr-2" />
          Introducing Minimalist v2.0
        </div>
        
        <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.03em] leading-[1.1] text-[hsl(0,0%,9%)] mb-6">
          Focus on what matters.<br className="hidden md:block"/> Leave the rest behind.
        </h1>
        
        <p className="text-lg md:text-xl text-[hsl(0,0%,40%)] mb-10 max-w-2xl mx-auto leading-relaxed">
          A design system that gets out of your way. Build elegant, high-performance interfaces with our refined component library.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all bg-[hsl(221,83%,53%)] text-white hover:bg-[hsl(221,83%,46%)] shadow-sm hover:shadow-md h-12 px-8 gap-2">
            Get Started <ArrowRight className="w-4 h-4" />
          </button>
          <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all bg-white border border-[hsl(0,0%,90%)] hover:bg-[hsl(0,0%,98%)] text-[hsl(0,0%,9%)] shadow-sm h-12 px-8 gap-2">
            <PlayCircle className="w-4 h-4" /> Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
}
