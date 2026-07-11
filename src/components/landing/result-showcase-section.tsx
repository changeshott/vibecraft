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
export function ResultShowcaseSection() {
  const steps = [
    {
      id: "configure",
      tab: "1. Configure Stack",
      icon: Layers,
      badge: "CONFIGURE",
      title: "Select your exact framework and styling engine.",
      desc: "No generic advice. Tell VibeCraftz exactly what you're building with, and it adapts the rules perfectly for Next.js, Tailwind, and more.",
      mockup: (
        <div className="w-full h-full bg-[#0a0a0a] p-6 flex flex-col gap-4 justify-center items-center">
          <div className="flex gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-xl">
              <DynamicIcon name="simple-icons:nextdotjs" size={32} className="text-white" />
            </div>
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-xl">
              <DynamicIcon name="simple-icons:tailwindcss" size={32} className="text-[#38bdf8]" />
            </div>
          </div>
          <div className="w-48 h-2 bg-white/10 rounded-full mt-4" />
          <div className="w-32 h-2 bg-white/5 rounded-full" />
        </div>
      )
    },
    {
      id: "design",
      tab: "2. Pick Vibe",
      icon: Palette,
      badge: "DESIGN",
      title: "Choose from curated, premium design systems.",
      desc: "Dark SaaS, Brutalist, or Bento. Complete with fluid typography, exact hex color tokens, and animation presets.",
      mockup: (
        <div className="w-full h-full bg-gradient-to-br from-[#0a0a0a] to-[#111] p-8 flex flex-col justify-center items-center">
          <div className="p-5 rounded-2xl border border-white/10 bg-white/5 space-y-4 w-full max-w-[200px] shadow-2xl">
            <div className="flex gap-3 justify-center mb-2">
              <div className="w-8 h-8 rounded-full bg-[#b1ff62] shadow-[0_0_15px_rgba(177,255,98,0.3)]" />
              <div className="w-8 h-8 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
              <div className="w-8 h-8 rounded-full bg-[#111] border border-white/20" />
            </div>
            <div className="text-[10px] text-center text-white/50 font-mono bg-black/40 py-1 rounded">--accent: 262 83% 65%;</div>
            <div className="w-full h-10 rounded-lg bg-[#b1ff62] mt-2 flex items-center justify-center shadow-lg">
              <span className="text-black text-[10px] font-bold uppercase tracking-widest">Button</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "export",
      tab: "3. Generate MD",
      icon: Zap,
      badge: "EXPORT",
      title: "Instantly compile thousands of lines of prompt engineering.",
      desc: "VibeCraftz generates hardened DESIGN.md, .mdc, or AGENTS.md files containing strict design constraints for your AI.",
      mockup: (
        <div className="w-full h-full bg-[#050505] p-6 md:p-10 border-l border-white/5 font-mono text-[10px] md:text-xs text-white/60 leading-relaxed flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-[#050505] to-transparent z-10" />
          <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#050505] to-transparent z-10" />

          <span className="text-white/30"># VibeCraftz AI Rules</span>
          <br />
          <span className="text-[#b1ff62]">## 1. Core Constraints</span>
          <span>- NEVER invent CSS variables.</span>
          <span>- Use exact tokens provided below.</span>
          <span>- Avoid generic rounded corners.</span>
          <br />
          <span className="text-[#b1ff62]">## 2. Color System</span>
          <span className="text-blue-400">background</span><span>: hsl(222, 47%, 6%);</span>
          <span className="text-blue-400">accent</span><span>: hsl(83, 100%, 69%);</span>
        </div>
      )
    },
    {
      id: "build",
      tab: "4. AI Writes Code",
      icon: Code2,
      badge: "BUILD",
      title: "Watch your AI assistant write pixel-perfect code.",
      desc: "Drop the file into your IDE. Your AI now deeply understands your design language and outputs beautiful UI on the first try.",
      mockup: (
        <div className="w-full h-full bg-[#0f0f0f] p-4 flex flex-col rounded-tl-xl border-t border-l border-white/10 ml-8 mt-8 shadow-[-10px_-10px_30px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          </div>
          <div className="flex-1 flex gap-4">
            <div className="w-1/3 border-r border-white/5 space-y-3 pt-2 pr-2 hidden sm:block">
              <div className="w-full h-2 bg-white/10 rounded" />
              <div className="w-2/3 h-2 bg-white/5 rounded" />
              <div className="w-4/5 h-2 bg-white/5 rounded" />
            </div>
            <div className="w-full sm:w-2/3 space-y-4 pt-2">
              <div className="w-fit h-5 bg-[#b1ff62]/10 rounded-md text-[9px] text-[#b1ff62] font-bold flex items-center px-2.5 uppercase tracking-widest border border-[#b1ff62]/20">Generating UI...</div>
              <div className="w-full h-2 bg-white/10 rounded" />
              <div className="w-full h-2 bg-white/10 rounded" />
              <div className="w-3/4 h-2 bg-white/10 rounded" />
              <div className="w-1/2 h-2 bg-white/5 rounded mt-4" />
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-16">
          <motion.h2 variants={fadeInUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white">
            Made for building,<br className="md:hidden" /> not prompting.
          </motion.h2>
          <motion.p variants={fadeInUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="mt-6 text-white/50 max-w-2xl mx-auto text-lg tracking-tight">
            Set up your brand and stack once. Generate a strict constraint system for your AI, and output on-brand visuals forever.
          </motion.p>
        </div>

        {/* Carousel Container */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={fadeInUp} custom={2}
          className="relative w-full -mx-4 sm:mx-0 px-4 sm:px-0"
        >
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 hide-scrollbar scroll-smooth" id="result-carousel">
            {steps.map((step) => (
              <div
                key={step.id}
                className="w-[90vw] md:w-[850px] shrink-0 snap-center rounded-[2rem] bg-[#111] border border-white/[0.08] flex flex-col md:flex-row overflow-hidden shadow-2xl"
              >
                {/* Left Side: Content */}
                <div className="w-full md:w-[55%] p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-[#161616] to-[#0a0a0a] relative">

                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 shadow-lg">
                    <step.icon size={22} className="text-white/80" />
                  </div>

                  <div className="inline-flex items-center px-2.5 py-1 rounded-sm bg-white/5 border border-white/10 text-[9px] font-bold text-white/60 tracking-widest uppercase w-fit mb-4">
                    {step.badge}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight leading-tight">
                    {step.title}
                  </h3>

                  <p className="text-sm md:text-base text-white/50 leading-relaxed tracking-tight">
                    {step.desc}
                  </p>
                </div>

                {/* Right Side: Mockup */}
                <div className="w-full md:w-[45%] h-64 md:h-auto bg-[#050505] relative overflow-hidden flex items-center justify-center border-t md:border-t-0 md:border-l border-white/5">
                  {step.mockup}
                </div>
              </div>
            ))}
          </div>

          {/* Fading edges for carousel */}
          <div className="absolute top-0 left-0 w-8 md:w-24 h-full bg-gradient-to-r from-[#090909] to-transparent pointer-events-none hidden md:block" />
          <div className="absolute top-0 right-0 w-8 md:w-24 h-full bg-gradient-to-l from-[#090909] to-transparent pointer-events-none hidden md:block" />
        </motion.div>

        {/* Tabs indicator */}
        <motion.div variants={fadeInUp} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="flex items-center justify-center gap-2 flex-wrap mt-4">
          {steps.map((step, i) => (
            <button
              key={step.id}
              onClick={() => {
                const carousel = document.getElementById('result-carousel');
                if (carousel) {
                  const scrollWidth = carousel.scrollWidth;
                  const itemWidth = scrollWidth / steps.length;
                  carousel.scrollTo({ left: itemWidth * i, behavior: 'smooth' });
                }
              }}
              className="px-5 py-2.5 rounded-full text-xs font-bold text-white/50 tracking-tight hover:bg-white/10 hover:text-white transition-all border border-transparent hover:border-white/10 active:scale-95"
            >
              {step.tab}
            </button>
          ))}
        </motion.div>

      </div>
    </section>
  );
}



