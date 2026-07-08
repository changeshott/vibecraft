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
} from "lucide-react";
import { DynamicIcon } from "@/components/shared/dynamic-icon";
import { allVibes } from "@/lib/engine/vibes";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { fadeInUp } from "@/lib/animations";

// ============================================
// HERO
// ============================================
export function HeroSection() {
  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Background fluid/grainy effects matching image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <motion.div animate={{ x: [-20, 20, -20], y: [-20, 20, -20] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] bg-white/20 rounded-full blur-[120px] mix-blend-screen opacity-40" />
        <motion.div animate={{ x: [30, -30, 30], y: [20, -20, 20] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-[20%] right-[5%] w-[50vw] h-[50vw] bg-white/20 rounded-full blur-[150px] mix-blend-screen opacity-30" />
        <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[60%] left-[60%] -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-white/10 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">

        {/* Main Glass Card matching the image */}
        <div className="relative w-full max-w-4xl mx-auto mt-10 md:mt-16 mb-24">
          {/* Floating Decorations */}
          <motion.div
            animate={{ y: [-8, 8, -8], rotate: [-10, -5, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-8 -left-2 md:-top-12 md:-left-8 z-20"
          >
            <div className="px-5 py-2.5 rounded-[0.5rem] bg-white text-black font-bold text-sm transform -rotate-12 shadow-[0_0_20px_rgba(255,255,255,0.2)] border border-white/20 tracking-tight flex items-center justify-center gap-1.5 lowercase">
              <span className="text-lg">⌘</span> cmd
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [8, -8, 8], rotate: [5, 10, 5] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-8 -right-2 md:-bottom-12 md:-right-8 z-20"
          >
            <div className="px-5 py-2.5 rounded-[0.5rem] bg-[#b1ff62] text-black font-bold text-sm transform rotate-12 shadow-[0_0_20px_rgba(177,255,98,0.2)] border border-[#b1ff62]/50 tracking-tight flex items-center justify-center gap-1.5 lowercase">
              <DynamicIcon name="Zap" size={16} className="text-orange-500 fill-orange-500/20" />
              <span className="tracking-tight font-bold tracking-wide">zest</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative backdrop-blur-[40px] bg-white/[0.03] border border-white/[0.08] rounded-[2rem] p-8 md:p-12 lg:p-16 text-center shadow-2xl"
          >
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tight text-white leading-tight"
            >
              craft stunning<br />ai output,<br />every time
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 text-sm md:text-base text-white/60 max-w-xl mx-auto leading-relaxed"
            >
              stop shipping ugly ai-generated uis. pick a design vibe, configure
              your stack, and generate system instructions for cursor, windsurf, or claude code.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/generator"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-[0.75rem] bg-transparent text-white border border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-200 tracking-tight text-sm tracking-wide"
              >
                try generator free
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Preview mockup - preserved but restyled to match dark aesthetic */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="mx-auto w-full max-w-4xl"
        >
          <div className="relative rounded-2xl border border-white/[0.08] bg-black/40 backdrop-blur-xl overflow-hidden shadow-2xl">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.08] bg-white/[0.02]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs text-white/40 font-mono">
                  vibecraft.dev/generator
                </span>
              </div>
            </div>
            {/* Content mock */}
            <div className="p-6 md:p-8 space-y-4">
              <div className="flex gap-4 flex-wrap">
                {[
                  { name: "Dark SaaS", icon: "Moon" },
                  { name: "Minimalist", icon: "Square" },
                  { name: "Bento", icon: "LayoutGrid" }
                ].map((v) => (
                  <div
                    key={v.name}
                    className="px-4 py-2.5 rounded-xl border border-white/[0.08] bg-white/[0.03] text-sm font-medium text-white/80 flex items-center gap-2"
                  >
                    <DynamicIcon name={v.icon} size={14} className="text-[#b1ff62]" />
                    {v.name}
                  </div>
                ))}
              </div>
              <div className="code-block p-4 text-xs leading-loose bg-black/60 border border-white/[0.05]">
                <span className="text-white/40"># VibeCraft Design System: Dark SaaS Pro</span>
                <br />
                <span className="text-white">## 1. TECHNOLOGY RULES</span>
                <br />
                <span className="text-white/60">- ALWAYS use Next.js 15 with App Router</span>
                <br />
                <span className="text-white/60">- ALWAYS use Tailwind CSS 4 for styling</span>
                <br />
                <span className="text-white">## 2. DESIGN VIBE</span>
                <br />
                <span className="text-white/60">- Background: hsl(222, 47%, 6%)</span>
                <br />
                <span className="text-white/60">- Accent: hsl(262, 83%, 65%)</span>
                <br />
                <span className="text-white/40">...</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================
// PROBLEM
// ============================================
export function ProblemSection() {
  return (
    <section className="py-20 md:py-28 relative">
      {/* Background ambient glow to tie into hero section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[20vw] bg-white/5 rounded-full blur-[100px] mix-blend-screen opacity-50 pointer-events-none" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            custom={0}
            className="text-2xl md:text-4xl font-bold tracking-tight text-white"
          >
            your ai makes <span className="text-white/40">ugly websites</span>.
            <br />
            here&apos;s why.
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            custom={1}
            className="mt-6 text-white/60 max-w-2xl mx-auto tracking-tight text-lg"
          >
            without design constraints, ai coding assistants produce generic,
            inconsistent, and visually bland output. every project looks the
            same.
          </motion.p>
        </motion.div>

        {/* Before / After */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Before */}
          <motion.div variants={fadeInUp} custom={2}>
            <div className="p-8 rounded-[2rem] border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl hover:bg-white/[0.04] transition-colors duration-300 shadow-2xl h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 font-bold">
                  ✗
                </div>
                <div className="tracking-tight text-white/80 font-bold tracking-wide">
                  without vibecraft
                </div>
              </div>
              <div className="mt-6 p-5 bg-white rounded border border-gray-200 shadow-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">GENERIC AI OUTPUT</span>
                </div>
                <h4 className="text-black font-sans text-lg font-normal mb-1">Create Account</h4>
                <p className="text-gray-500 font-sans text-xs mb-3">Sign up for free.</p>
                <input type="text" placeholder="Email address" className="w-full border border-gray-300 p-2 text-sm mb-3 text-black" disabled />
                <button className="bg-blue-600 text-white text-sm px-4 py-2 w-full">Submit</button>
              </div>

              <ul className="mt-8 space-y-4 text-xs text-white/50 tracking-tight leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-white/20">•</span> generic colors — plain blue on white
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white/20">•</span> inconsistent spacing & typography
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white/20">•</span> static, lifeless UI without animations
                </li>
              </ul>
            </div>
          </motion.div>

          {/* After */}
          <motion.div variants={fadeInUp} custom={3}>
            <div className="p-8 rounded-[2rem] border border-[#b1ff62]/20 bg-[#b1ff62]/[0.03] backdrop-blur-xl hover:bg-[#b1ff62]/[0.05] transition-colors duration-300 shadow-2xl h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#b1ff62]/10 blur-[50px] rounded-full pointer-events-none" />

              <div className="flex items-center gap-3 mb-4 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-[#b1ff62]/10 border border-[#b1ff62]/20 flex items-center justify-center text-[#b1ff62] font-bold">
                  ✓
                </div>
                <div className="tracking-tight text-white font-bold tracking-wide flex items-center gap-2">
                  with vibecraft
                  <span className="px-2 py-0.5 rounded-full bg-[#b1ff62] text-black text-[10px] font-bold uppercase tracking-wider not-italic">
                    Pro
                  </span>
                </div>
              </div>

              <div className="mt-6 p-6 bg-[#0a0f1c] rounded-2xl border border-white/10 shadow-lg relative group">
                <div className="absolute inset-0 bg-[#b1ff62]/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm z-10 rounded-2xl">
                  <span className="bg-[#b1ff62] text-black text-xs font-bold px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(177,255,98,0.5)]">VIBECRAFT OUTPUT</span>
                </div>
                <h4 className="text-white font-bold text-xl mb-1 tracking-tight">Create Account</h4>
                <p className="text-white/50 text-xs mb-4">Join thousands of developers.</p>
                <input type="text" placeholder="Email address" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white mb-3 focus:border-[#b1ff62] focus:ring-1 focus:ring-[#b1ff62] outline-none transition-all placeholder:text-white/30" disabled />
                <button className="bg-[#b1ff62] text-black text-sm font-bold px-6 py-2.5 rounded-xl w-full hover:bg-[#9dec52] hover:-translate-y-0.5 shadow-[0_0_15px_rgba(177,255,98,0.2)] transition-all">Get Started</button>
              </div>

              <ul className="mt-8 space-y-4 text-xs text-white/80 tracking-tight leading-relaxed relative z-10">
                <li className="flex items-start gap-2">
                  <span className="text-[#b1ff62] font-bold">→</span> curated palette (Dark SaaS Pro)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#b1ff62] font-bold">→</span> modern glassmorphism & spacing
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#b1ff62] font-bold">→</span> interactive hover states & glows
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================
// HOW IT WORKS
// ============================================
export function HowItWorksSection() {
  const steps = [
    {
      icon: Palette,
      title: "pick a vibe",
      description:
        "choose from curated design vibes like dark saas, minimalist clean, or neo-brutalism.",
    },
    {
      icon: Code2,
      title: "configure stack",
      description:
        "select your tech stack — framework, styling, database, auth — and set ai behavior rules.",
    },
    {
      icon: Zap,
      title: "generate & ship",
      description:
        "download your .cursorrules or agents.md file, drop it in your project, and watch ai deliver.",
    },
  ];

  return (
    <section className="py-20 md:py-28 relative">
      <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute top-[20%] left-[-10%] w-[40vw] h-[40vw] bg-white/5 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            custom={0}
            className="text-2xl md:text-4xl font-bold tracking-tight text-white"
          >
            three steps. <span className="text-white/40">zero effort.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              variants={fadeInUp}
              custom={i + 1}
              className="relative p-8 rounded-[2rem] border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl hover:bg-white/[0.04] transition-colors duration-300 shadow-2xl group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#b1ff62]/10 group-hover:border-[#b1ff62]/20 transition-colors">
                <step.icon size={24} className="text-white group-hover:text-[#b1ff62] transition-colors" />
              </div>
              <div className="absolute top-8 right-8 text-6xl font-bold text-white/[0.03] tracking-tight">
                {i + 1}
              </div>
              <h3 className="text-lg font-bold text-white mb-3 tracking-tight tracking-wide">
                {step.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed tracking-tight">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ============================================
// RESULT SHOWCASE
// ============================================
export function ResultShowcaseSection() {
  const steps = [
    {
      id: "configure",
      tab: "1. Configure Stack",
      icon: Layers,
      badge: "CONFIGURE",
      title: "Select your exact framework and styling engine.",
      desc: "No generic advice. Tell VibeCraft exactly what you're building with, and it adapts the rules perfectly for Next.js, Tailwind, and more.",
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
      desc: "VibeCraft generates a hardened .cursorrules or AGENTS.md file containing strict design constraints for your AI.",
      mockup: (
        <div className="w-full h-full bg-[#050505] p-6 md:p-10 border-l border-white/5 font-mono text-[10px] md:text-xs text-white/60 leading-relaxed flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-[#050505] to-transparent z-10" />
          <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#050505] to-transparent z-10" />

          <span className="text-white/30"># VibeCraft AI Rules</span>
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
          <motion.h2 variants={fadeInUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.15 }} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white">
            Made for building,<br className="md:hidden" /> not prompting.
          </motion.h2>
          <motion.p variants={fadeInUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.15 }} className="mt-6 text-white/50 max-w-2xl mx-auto text-lg tracking-tight">
            Set up your brand and stack once. Generate a strict constraint system for your AI, and output on-brand visuals forever.
          </motion.p>
        </div>

        {/* Carousel Container */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.15 }} variants={fadeInUp} custom={2}
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
        <motion.div variants={fadeInUp} custom={3} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.15 }} className="flex items-center justify-center gap-2 flex-wrap mt-4">
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

// ============================================
// VIBE SHOWCASE
// ============================================
export function VibeShowcaseSection() {
  return (
    <section className="py-20 md:py-28 relative">
      <motion.div animate={{ y: [-30, 30, -30], opacity: [0.4, 0.6, 0.4] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[50%] right-[-10%] w-[30vw] h-[30vw] bg-white/5 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            custom={0}
            className="text-2xl md:text-4xl font-bold tracking-tight text-white"
          >
            choose your <span className="text-[#b1ff62]">design vibe</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            custom={1}
            className="mt-6 text-white/60 max-w-lg mx-auto tracking-tight text-lg"
          >
            each vibe pack includes a complete design system with colors,
            typography, component patterns, and animation rules.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {allVibes.map((vibe, i) => (
            <motion.div
              key={vibe.id}
              variants={fadeInUp}
              custom={i + 1}
              className="group p-6 rounded-[1.5rem] border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl hover:bg-white/[0.04] hover:border-white/[0.12] hover:-translate-y-1 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-white/80 p-3 bg-white/5 rounded-xl border border-white/10 group-hover:scale-110 group-hover:text-[#b1ff62] group-hover:border-[#b1ff62]/30 transition-all duration-300">
                  <DynamicIcon name={vibe.iconName} size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-bold text-white tracking-tight tracking-wide">
                    {vibe.name.toLowerCase()}
                  </h3>
                  {vibe.tier !== "free" && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#b1ff62]/10 text-[#b1ff62] border border-[#b1ff62]/20 mt-1 inline-block">
                      Pro
                    </span>
                  )}
                  {vibe.tier === "free" && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/10 text-white/70 border border-white/20 mt-1 inline-block">
                      Free
                    </span>
                  )}
                </div>
              </div>
              <p className="text-sm text-white/50 leading-relaxed tracking-tight">
                {vibe.shortDescription.toLowerCase()}
              </p>
              {/* Mini color preview */}
              <div className="flex gap-2 mt-6 p-2 bg-black/40 rounded-xl border border-white/5">
                {[
                  vibe.colors.background,
                  vibe.colors.surface,
                  vibe.colors.accent,
                  vibe.colors.accentHover,
                  vibe.colors.textPrimary,
                ].map((color, ci) => (
                  <div
                    key={ci}
                    className="flex-1 aspect-square rounded-lg border border-white/10 shadow-sm"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            </motion.div>
          ))}
          {/* Coming soon card */}
          <motion.div
            variants={fadeInUp}
            custom={allVibes.length + 1}
            className="p-6 rounded-[1.5rem] border border-dashed border-white/[0.08] bg-white/[0.01] flex items-center justify-center text-center backdrop-blur-xl"
          >
            <div>
              <span className="text-3xl opacity-50 grayscale">🚧</span>
              <p className="text-sm font-bold text-white/40 mt-3 tracking-tight tracking-wide">
                more vibes coming soon
              </p>
              <p className="text-xs text-white/30 mt-1 tracking-tight">
                web3, e-commerce, dashboard...
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================
// FEATURES
// ============================================
export function FeaturesSection() {
  const features = [
    {
      icon: Palette,
      title: "Design System Engine",
      description: "Complete color palettes, typography scales, and tokenized spacing injected directly into your AI.",
      bullets: [
        "Curated dark mode colors",
        "Fluid typography scales",
        "Bento & Brutalist presets"
      ]
    },
    {
      icon: Shield,
      title: "Anti-Hallucination",
      description: "Strict constraints that prevent AI from inventing non-existent packages, APIs, or custom CSS.",
      bullets: [
        "Forced Tailwind utility usage",
        "Package version locking",
        "Component library enforcement"
      ]
    },
    {
      icon: Layers,
      title: "Multi-IDE Compatibility",
      description: "Generate native configuration formats across all major AI code assistants instantly.",
      bullets: [
        ".cursorrules support",
        "Windsurf AGENTS.md",
        "Claude Code integration"
      ]
    },
    {
      icon: Code2,
      title: "Stack-Aware Rules",
      description: "Technology-specific rules ensuring the AI perfectly respects your exact framework and tools.",
      bullets: [
        "Next.js App Router rules",
        "Supabase auth patterns",
        "shadcn/ui consistency"
      ]
    },
  ];

  return (
    <section className="py-24 md:py-32 relative">
      <motion.div animate={{ x: [-40, 40, -40] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[-10%] left-[20%] w-[50vw] h-[50vw] bg-white/5 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20"
        >
          <div className="max-w-2xl">
            <motion.div variants={fadeInUp} custom={0} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 mb-6">
              <Zap size={14} className="text-[#b1ff62]" />
              <span className="text-xs font-bold text-white/80 tracking-tight">VibeCraft Engine</span>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              custom={1}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.1]"
            >
              Control the chaos.<br />
              <span className="text-white/40">Command the output.</span>
            </motion.h2>
          </div>
          <motion.div variants={fadeInUp} custom={2} className="max-w-lg lg:pb-2">
            <p className="text-base md:text-lg text-white/50 leading-relaxed tracking-tight">
              Stop fighting with your AI over design decisions. VibeCraft injects a hardened, production-ready rule system into your IDE that forces the AI to write beautiful, consistent code on the first try.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              custom={i + 2}
              className="p-8 rounded-[1.5rem] border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl hover:bg-white/[0.04] transition-colors duration-300 group shadow-xl flex flex-col h-full"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-[#b1ff62]/10 group-hover:border-[#b1ff62]/20 transition-colors">
                <feature.icon size={20} className="text-white group-hover:text-[#b1ff62] transition-colors" />
              </div>

              <div className="mb-6 flex-grow">
                <h3 className="font-bold text-white mb-3 tracking-tight text-lg">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed tracking-tight">
                  {feature.description}
                </p>
              </div>

              <div className="pt-6 border-t border-white/[0.08]">
                <ul className="space-y-3">
                  {feature.bullets.map((bullet, bi) => (
                    <li key={bi} className="flex items-start gap-3 text-sm text-white/60 tracking-tight">
                      <span className="text-[#b1ff62]/70 mt-0.5">→</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ============================================
// PRICING
// ============================================
export function PricingSection() {
  return (
    <section id="pricing" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.1]">
            Unlock premium vibes,<br />
            <span className="text-white/40">generate perfect code.</span>
          </h2>
        </div>

        {/* Free Tier Banner */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={fadeInUp}
          custom={0}
          className="mb-8 rounded-[1.5rem] border border-white/[0.08] bg-[#111] overflow-hidden flex flex-col md:flex-row shadow-2xl relative group"
        >
          <div className="p-8 md:p-12 flex-1 flex flex-col justify-center relative z-20">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight">Start with basic vibes</h3>
            <div className="flex flex-wrap items-center gap-8">
              <div className="flex items-center gap-2 text-white/70 text-sm font-medium tracking-tight">
                <Palette size={18} className="text-[#b1ff62]/60" />
                3 basic vibes
              </div>
              <div className="flex items-center gap-2 text-white/70 text-sm font-medium tracking-tight">
                <Layers size={18} className="text-[#b1ff62]/60" />
                Next.js + Tailwind
              </div>
              <div className="flex items-center gap-2 text-white/70 text-sm font-medium tracking-tight">
                <Code2 size={18} className="text-[#b1ff62]/60" />
                Cursor IDE only
              </div>
            </div>
          </div>

          <div className="w-full md:w-[45%] relative h-64 md:h-auto overflow-hidden bg-[#1a1a1a]">
            {/* Gradient overlay to fade into image mosaic */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#111] to-transparent z-10 hidden md:block" />

            {/* Abstract mosaic representation */}
            <div className="absolute inset-0 opacity-[0.15] grid grid-cols-4 grid-rows-2 gap-1 p-2 transform scale-110 group-hover:scale-100 transition-transform duration-1000">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-[#b1ff62] rounded shadow-inner" style={{ opacity: i % 2 === 0 ? 0.7 : 0.2 }} />
              ))}
            </div>

            <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/20 backdrop-blur-[2px]">
              <button className="px-8 py-3.5 bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 text-xs font-bold uppercase tracking-widest rounded-sm shadow-2xl transition-all hover:scale-105 active:scale-95">
                Start For Free
              </button>
            </div>
          </div>
        </motion.div>

        {/* Paid Tiers Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Card 1 */}
          <PricingCard
            delay={1}
            title="Starter"
            price="$19"
            period="one-time"
            badge="1 Premium Pack"
            desc="Unlock 1 premium vibe pack with full stack options and no watermarks."
            features={[
              "1 premium vibe pack",
              "All tech stack options",
              "All IDE formats",
              "No watermark"
            ]}
            buttonType="secondary"
          />
          {/* Card 2 */}
          <PricingCard
            delay={2}
            title="Pro"
            badgeTitle="Most Popular"
            badgeColor="text-[#b1ff62]"
            price="$39"
            period="one-time"
            badge="Lifetime Access"
            desc="Full access to all current vibes and the complete generator."
            features={[
              "All design vibes",
              "All tech stack options",
              "All IDE formats",
              "Priority support"
            ]}
            buttonType="primary"
          />
          {/* Card 3 */}
          <PricingCard
            delay={3}
            title="Pro+"
            price="$9"
            period="/mo"
            badge="Monthly Updates"
            desc="Everything in Pro, plus monthly new vibes and private community."
            features={[
              "Everything in Pro",
              "Monthly new vibe packs",
              "Community Discord",
              "Vote on next vibes"
            ]}
            buttonType="secondary"
          />
        </motion.div>

      </div>
    </section>
  );
}

interface PricingCardProps {
  delay: number;
  title: string;
  badgeTitle?: string;
  badgeColor?: string;
  price: string;
  period: string;
  originalPrice?: string;
  badge?: string;
  desc: string;
  features: string[];
  buttonType?: "primary" | "secondary";
}

function PricingCard({ delay, title, badgeTitle, badgeColor, price, period, originalPrice, badge, desc, features, buttonType }: PricingCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      custom={delay}
      className={cn(
        "p-8 lg:p-10 rounded-[1.5rem] border flex flex-col h-full shadow-2xl transition-colors duration-300 relative",
        buttonType === 'primary'
          ? "border-[#b1ff62]/30 bg-[#b1ff62]/[0.02] hover:bg-[#b1ff62]/[0.05]"
          : "border-white/[0.08] bg-[#111] hover:bg-white/[0.04]"
      )}
    >
      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 tracking-tight">
        {title}
        {badgeTitle && <span className={`text-[10px] ${badgeColor} font-bold uppercase tracking-widest ml-1 bg-[#b1ff62]/10 px-2 py-0.5 rounded-sm border border-[#b1ff62]/20`}>{badgeTitle}</span>}
      </h3>

      <div className="flex items-end gap-1 mb-4">
        <span className="text-4xl lg:text-5xl font-bold text-white tracking-tighter">{price}</span>
        {period && <span className="text-sm text-white/40 tracking-tight mb-2 font-medium">{period}</span>}
        {originalPrice && <span className="text-lg text-white/30 line-through font-bold mb-1 ml-2">{originalPrice}</span>}
      </div>

      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-[11px] text-white/70 font-bold tracking-widest mb-6 w-fit uppercase">
        <Star size={12} className={buttonType === 'primary' ? "text-[#b1ff62]" : "text-white/40"} />
        {badge}
      </div>

      <p className="text-sm text-white/50 leading-relaxed mb-8 flex-grow tracking-tight">
        {desc}
      </p>

      <button className={`w-full py-4 rounded-md text-xs font-bold uppercase tracking-widest transition-all mb-10 hover:scale-[1.02] active:scale-[0.98] ${buttonType === 'primary'
        ? 'bg-[#b1ff62] hover:bg-[#8eff00] text-black shadow-[0_0_30px_rgba(177,255,98,0.25)] border border-[#b1ff62]/50'
        : 'bg-white/5 hover:bg-white/10 border border-white/10 text-white shadow-xl'
        }`}>
        {title === 'Pro+' ? 'Subscribe' : 'Get Started'}
      </button>

      <div className="space-y-5 pt-8 border-t border-white/[0.08]">
        {features.map((feat: string, i: number) => (
          <div key={i} className="flex items-center gap-4 text-white/80 text-sm font-medium tracking-tight">
            <Check size={18} className={buttonType === 'primary' ? "text-[#b1ff62]" : "text-white/40"} />
            {feat}
          </div>
        ))}
      </div>
    </motion.div>
  )
}

// ============================================
// FAQ
// ============================================
export function FAQSection() {
  const faqs = [
    {
      q: "what exactly is a vibecraft file?",
      a: "it's a structured markdown file (.cursorrules, agents.md, or claude.md) that tells your ai coding assistant exactly how to design your ui — including colors, typography, component patterns, animation rules, and architecture constraints.",
    },
    {
      q: "which ai tools does vibecraft work with?",
      a: "vibecraft generates files for cursor (.cursorrules), windsurf (agents.md), claude code (claude.md), and any other ai assistant that accepts system instructions in markdown format.",
    },
    {
      q: "how is this different from free cursor rules on github?",
      a: "free rules are generic coding guidelines. vibecraft provides complete, curated design systems — specific color palettes, typography scales, component patterns, animation rules, and anti-hallucination constraints that produce consistent, beautiful output.",
    },
    {
      q: "will it work with my specific tech stack?",
      a: "yes! the generator lets you configure your exact stack (next.js, vite, tailwind, supabase, etc.) and produces rules tailored to that combination.",
    },
    {
      q: "what if i need a custom vibe not listed?",
      a: "pro+ and teams plans include early access to new vibes. we release new design vibes monthly based on community votes and trends.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 relative">
      <motion.div animate={{ rotate: [0, 180, 360] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-white/5 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="text-center mb-16 py-2 overflow-visible"
        >
          <motion.h2
            variants={fadeInUp}
            custom={0}
            className="text-2xl md:text-4xl font-bold tracking-tight text-white leading-normal"
          >
            frequently asked questions
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="space-y-4"
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              custom={i + 1}
              className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl overflow-hidden hover:bg-white/[0.04] transition-colors duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-base font-bold text-white pr-4 tracking-tight tracking-wide">
                  {faq.q}
                </span>
                <ChevronDown
                  size={20}
                  className={cn(
                    "text-white/40 flex-shrink-0 transition-transform duration-300",
                    openIndex === i && "rotate-180 text-[#b1ff62]"
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="px-6 pb-6">
                  <p className="text-sm text-white/60 leading-relaxed tracking-tight">
                    {faq.a}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ============================================
// CTA
// ============================================
export function CTASection() {
  const radialItems = [
    "generic blue buttons",
    "inconsistent padding",
    "hallucinated APIs",
    "broken mobile layouts",
    "random hex codes",
    "missing animations",
    "ugly forms",
    "text-gray-500 everywhere",
    "unaligned grids",
    "janky transitions",
    "wrong font weights",
    "missing focus states",
    "default tailwind shadows",
    "clashing brand colors",
    "unresponsive tables",
    "tiny click targets"
  ];

  return (
    <section className="py-24 md:py-40 relative flex flex-col items-center">
      {/* Background ambient light */}
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[800px] h-[80vw] max-h-[800px] bg-white/5 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

      {/* Scattered Radial Background */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-30 md:opacity-40">
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
                style={{ transform: `translate(0, -50%) rotate(${angle}deg) translateX(300px)` }}
              >
                <span className="text-[#b1ff62] mr-2">✗</span>
                {item}
              </div>
            );
          })}
        </motion.div>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
        {/* Top Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-20"
        >
          Your AI&apos;s design logic is scattered <br className="hidden md:block" /> across random prompts, generic classes, and broken layouts.
        </motion.h2>

        {/* Middle Mockup Image/Component */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full max-w-4xl mx-auto rounded-[2rem] border border-white/10 bg-[#0a0f1c] shadow-[0_0_100px_rgba(0,0,0,0.8)] overflow-hidden mb-24 min-h-[400px] flex items-center justify-center group"
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full flex-1">
              <div className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <h4 className="text-white/40 font-mono text-xs uppercase tracking-widest mb-1">Knowledge Graph</h4>
                  <p className="text-white font-bold text-lg">Dark SaaS Pro Ruleset</p>
                </div>
                <div className="w-full flex-1 mt-6 relative rounded-xl border border-white/5 overflow-hidden">
                  {/* Simulated node graph */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#b1ff62] absolute top-1/4 left-1/4 shadow-[0_0_10px_#b1ff62]" />
                    <div className="w-2 h-2 rounded-full bg-purple-500 absolute top-2/3 left-1/3 shadow-[0_0_10px_purple]" />
                    <div className="w-2 h-2 rounded-full bg-blue-500 absolute top-1/3 right-1/4 shadow-[0_0_10px_blue]" />
                    <div className="w-2 h-2 rounded-full bg-white absolute bottom-1/4 right-1/3 shadow-[0_0_10px_white]" />
                    <svg className="absolute inset-0 w-full h-full opacity-20">
                      <line x1="25%" y1="25%" x2="33%" y2="66%" stroke="white" strokeWidth="1" />
                      <line x1="25%" y1="25%" x2="75%" y2="33%" stroke="white" strokeWidth="1" />
                      <line x1="33%" y1="66%" x2="66%" y2="75%" stroke="white" strokeWidth="1" />
                      <line x1="75%" y1="33%" x2="66%" y2="75%" stroke="white" strokeWidth="1" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md flex flex-col gap-6 justify-center">
                <div>
                  <h4 className="text-white/40 font-mono text-xs uppercase tracking-widest mb-2">Tokens</h4>
                  <p className="text-3xl font-bold text-white tracking-tight">1,024</p>
                  <p className="text-white/40 text-xs mt-1">lines of context injected</p>
                </div>
                <div className="w-full h-px bg-white/10" />
                <div>
                  <h4 className="text-white/40 font-mono text-xs uppercase tracking-widest mb-2">Consistency</h4>
                  <p className="text-3xl font-bold text-[#b1ff62] tracking-tight">100%</p>
                  <p className="text-white/40 text-xs mt-1">across all generated files</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          className="flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
            Fix that <br className="hidden md:block" /> in 2 minutes.
          </h2>
          <p className="text-base md:text-lg text-white/60 max-w-xl mx-auto leading-relaxed mb-10">
            A 2-minute setup built for your exact stack. <br className="hidden sm:block" /> We&apos;ll generate your definitive system instructions.
          </p>
          <Link
            href="/generator"
            className="inline-flex items-center justify-center px-10 py-3.5 text-sm font-bold rounded-full bg-[#f97316] hover:bg-[#ea580c] text-white shadow-[0_0_30px_rgba(249,115,22,0.3)] transition-all duration-300 hover:scale-105 tracking-wide"
          >
            Request Rules
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
