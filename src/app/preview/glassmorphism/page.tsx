"use client";

import { ArrowRight, Cpu } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[hsl(230,35%,7%)] py-32 h-screen">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[hsl(174,80%,50%)]/20 rounded-full blur-[100px] mix-blend-screen animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[hsl(260,80%,50%)]/20 rounded-full blur-[120px] mix-blend-screen" />
      
      <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
        <div className="bg-[hsl(230,25%,12%)/0.4] backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-16 shadow-2xl">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[hsl(174,80%,50%)/0.15] text-[hsl(174,80%,50%)] border border-[hsl(174,80%,50%)/0.3] shadow-[0_0_10px_hsl(174,80%,50%/0.2)] text-sm font-semibold mb-8">
            <Cpu className="w-4 h-4 mr-2" /> AI Copilot Engine
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            The future of interface <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(174,80%,50%)] to-white">is transparent.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-[hsl(220,15%,70%)] mb-10 max-w-2xl mx-auto leading-relaxed">
            Harness the power of layered spatial design. Build immersive web applications with our advanced glassmorphism rendering engine.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-[hsl(174,80%,50%)] text-[hsl(230,35%,7%)] hover:bg-[hsl(174,80%,43%)] px-8 py-4 font-semibold transition-all shadow-[0_0_20px_hsl(174,80%,50%/0.3)] hover:shadow-[0_0_30px_hsl(174,80%,50%/0.5)] hover:-translate-y-0.5 gap-2">
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-md hover:bg-white/15 text-white border border-white/10 px-8 py-4 font-medium transition-all hover:-translate-y-0.5 gap-2">
              View Components
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
