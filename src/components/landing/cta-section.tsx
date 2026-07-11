"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Palette,
  Code2,
  Layers,
  Shield,
  Zap,
  Check,
  Star,
  ChevronDown,
  Copy,
} from "lucide-react";
import { DynamicIcon } from "@/components/shared/dynamic-icon";
import { allVibes } from "@/lib/engine/vibes";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { fadeInUp } from "@/lib/animations";
export function CTASection() {
  const radialItems = [
    "generic colors", "bad padding", "fake APIs", "broken mobile",
    "wrong hex", "no animations", "ugly forms", "text-gray-500",
    "bad grids", "janky motion", "wrong weights", "no focus",
    "default shadows", "clashing colors", "bad tables", "tiny targets",
    "generic UI", "bad spacing", "fake code", "broken layout",
    "random colors", "static UI", "messy forms", "bad contrast",
    "misaligned", "janky hover", "wrong fonts", "hidden focus",
    "flat shadows", "ugly borders", "slow UI", "bad clicks"
  ];

  return (
    <section className="py-24 md:py-40 relative flex flex-col items-center">
      {/* Background ambient light */}
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[800px] h-[80vw] max-h-[800px] bg-white/5 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

      {/* Scattered Radial Background */}
      <div 
        className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] pointer-events-none opacity-30 md:opacity-40"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 60%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, black 0%, black 60%, transparent 100%)'
        }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="w-full h-full relative"
        >
          {radialItems.map((item, i) => {
            const angle = (360 / radialItems.length) * i;
            return (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 origin-left whitespace-nowrap text-[10px] md:text-xs font-mono text-white/50 tracking-wider uppercase"
                style={{ transform: `translate(0, -50%) rotate(${angle}deg) translateX(450px)` }}
              >
                <span className="text-[#b1ff62] mr-2">✗</span>
                {item}
              </div>
            );
          })}
        </motion.div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">


        {/* Middle Mockup Image/Component */}
        <div className="relative w-full max-w-6xl mx-auto mb-40 mt-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full rounded-[2rem] border border-white/[0.08] bg-[#111] shadow-2xl overflow-hidden min-h-[400px] flex items-center justify-center group pb-8"
            style={{
              WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)',
              maskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)'
            }}
          >
            {/* Subtle grid in mockup */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

            <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/20 to-transparent z-10 pointer-events-none" />

            {/* Dashboard overlay UI */}
            <div className="relative z-20 p-6 md:p-10 w-full h-full flex flex-col">
              <div className="flex gap-2 mb-8">
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
              </div>

              <div className="flex flex-col gap-6 h-full flex-1">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1 min-h-[220px]">
                  <div className="md:col-span-2 rounded-[1.5rem] border border-white/[0.08] bg-white/[0.02] p-8 backdrop-blur-xl hover:bg-white/[0.04] transition-colors duration-300 flex flex-col justify-between shadow-2xl group-hover:border-white/[0.15]">
                    <div>
                      <div className="inline-flex items-center px-2.5 py-1 rounded-sm bg-white/5 border border-white/10 text-[9px] font-bold text-white/60 tracking-widest uppercase w-fit mb-4">
                        Knowledge Graph
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">Dark SaaS Pro Ruleset</h3>
                    </div>
                    <div className="w-full flex-1 mt-6 relative rounded-xl border border-white/[0.08] overflow-hidden bg-white/[0.02]">
                      {/* Simulated node graph */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-[#b1ff62] absolute top-1/4 left-1/4 shadow-[0_0_15px_rgba(177,255,98,0.5)]" />
                        <div className="w-3 h-3 rounded-full bg-white absolute top-2/3 left-1/3 shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
                        <div className="w-3 h-3 rounded-full bg-[#b1ff62] absolute top-1/3 right-1/4 shadow-[0_0_15px_rgba(177,255,98,0.5)]" />
                        <div className="w-3 h-3 rounded-full bg-white absolute bottom-1/4 right-1/3 shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
                        <svg className="absolute inset-0 w-full h-full opacity-20">
                          <line x1="25%" y1="25%" x2="33%" y2="66%" stroke="white" strokeWidth="1.5" />
                          <line x1="25%" y1="25%" x2="75%" y2="33%" stroke="white" strokeWidth="1.5" />
                          <line x1="33%" y1="66%" x2="66%" y2="75%" stroke="white" strokeWidth="1.5" />
                          <line x1="75%" y1="33%" x2="66%" y2="75%" stroke="white" strokeWidth="1.5" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.02] p-8 backdrop-blur-xl hover:bg-white/[0.04] transition-colors duration-300 flex flex-col gap-6 justify-center shadow-2xl group-hover:border-white/[0.15]">
                    <div>
                      <div className="inline-flex items-center px-2.5 py-1 rounded-sm bg-white/5 border border-white/10 text-[9px] font-bold text-white/60 tracking-widest uppercase w-fit mb-3">
                        Tokens
                      </div>
                      <p className="text-4xl lg:text-5xl font-bold text-white tracking-tighter">1,024</p>
                      <p className="text-white/40 text-sm mt-1 tracking-tight">lines of context injected</p>
                    </div>
                    <div className="w-full h-px bg-white/[0.08]" />
                    <div>
                      <div className="inline-flex items-center px-2.5 py-1 rounded-sm bg-white/5 border border-white/10 text-[9px] font-bold text-white/60 tracking-widest uppercase w-fit mb-3">
                        Consistency
                      </div>
                      <p className="text-4xl lg:text-5xl font-bold text-[#b1ff62] tracking-tighter">100%</p>
                      <p className="text-white/40 text-sm mt-1 tracking-tight">across all generated files</p>
                    </div>
                  </div>
                </div>

                {/* New Features Row */}
                <div className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-xl hover:bg-white/[0.04] transition-colors duration-300 shadow-2xl group-hover:border-white/[0.15]">
                  <div className="inline-flex items-center px-2.5 py-1 rounded-sm bg-white/5 border border-white/10 text-[9px] font-bold text-white/60 tracking-widest uppercase w-fit mb-4">
                    Injected Anti-Hallucination Constraints
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "🚫 NO GENERIC CLASSES", "🔒 STRICT HEX CODES", "📐 FLUID LAYOUTS", "✨ FORCED ANIMATIONS",
                      "🎛️ CUSTOM SHADOWS", "✅ ACCESSIBLE FORMS", "📏 LOCKED PADDING SCALES", "🔠 PRECISE FONT WEIGHTS",
                      "🎨 HARMONIOUS COLORS", "📱 RESPONSIVE GRIDS", "🎯 ENFORCED FOCUS STATES", "🚫 NO TEXT-GRAY-500",
                      "🧩 COMPONENT PATTERNS", "🛡️ ANTI-HALLUCINATION", "⚡ FRAMEWORK OPTIMIZED", "🔍 SEMANTIC HTML"
                    ].map((rule, i) => (
                      <div key={i} className="px-2.5 py-1.5 rounded-md bg-[#111] border border-white/10 text-[10px] font-mono text-white/60 hover:bg-[#b1ff62]/10 hover:text-[#b1ff62] hover:border-[#b1ff62]/30 transition-colors cursor-default whitespace-nowrap shadow-sm">
                        {rule}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Blur Overlay covering the fading part of the card */}
          <div className="absolute bottom-[-20%] left-0 w-full h-[100%] backdrop-blur-[64px] pointer-events-none z-20" style={{ WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 50%, transparent 100%)', maskImage: 'linear-gradient(to bottom, transparent 0%, black 50%, transparent 100%)' }} />

          {/* CTA Positioned overlapping the faded bottom edge */}
          <div className="absolute bottom-0 left-0 w-full translate-y-1/3 flex flex-col items-center text-center z-30">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-4 drop-shadow-2xl">
              Fix that in 2 minutes.
            </h2>
            <p className="text-base md:text-lg text-white/60 max-w-xl mx-auto leading-relaxed mb-8 drop-shadow-lg">
              A 2-minute setup built for your exact stack. <br className="hidden sm:block" /> We&apos;ll generate your definitive system instruction.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center pointer-events-auto mt-4">
              <Link
                href="/generator"
                className="inline-flex items-center justify-center gap-2 px-8 rounded-2xl bg-[#b1ff62] text-black font-bold hover:bg-[#9de552] transition-all duration-300 tracking-tight text-lg h-[60px] shadow-[0_0_30px_rgba(177,255,98,0.3)] hover:shadow-[0_0_50px_rgba(177,255,98,0.5)] hover:-translate-y-0.5 w-full sm:w-auto z-10"
              >
                <Zap size={20} className="fill-black/10" />
                Try Free First
              </Link>
              
              <div className="text-white/40 text-sm font-medium tracking-wide">or</div>

              <div className="flex items-center bg-black/60 border border-white/20 hover:border-white/40 rounded-2xl overflow-hidden pr-2 h-[60px] shadow-sm backdrop-blur-xl transition-colors max-w-md w-full sm:w-auto">
                <div className="px-5 text-white/50 font-mono text-base border-r border-white/10 flex items-center h-full">
                  $
                </div>
                <div className="px-5 text-white/80 font-mono text-base tracking-tight w-full sm:w-64 text-left outline-none bg-transparent h-full flex items-center">
                  npx vibecraftz@latest
                </div>
                <button 
                  onClick={(e) => {
                    navigator.clipboard.writeText("npx vibecraftz@latest");
                    const target = e.currentTarget;
                    const originalHTML = target.innerHTML;
                    target.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white/80"><polyline points="20 6 9 17 4 12"></polyline></svg>';
                    setTimeout(() => { target.innerHTML = originalHTML; }, 2000);
                  }}
                  className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-colors group relative border border-white/5 mr-1"
                  title="Copy to clipboard"
                >
                  <Copy size={20} className="text-white/60 group-hover:text-white transition-colors" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



