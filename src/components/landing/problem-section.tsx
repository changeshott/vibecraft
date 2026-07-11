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
export function ProblemSection() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);

  const handleSimulate = () => {
    setIsGenerating(true);
    setHasGenerated(false);
    setTimeout(() => {
      setIsGenerating(false);
      setHasGenerated(true);
    }, 2500);
  };

  return (
    <section className="py-20 md:py-28 relative">
      {/* Background ambient glow to tie into hero section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[20vw] bg-white/5 rounded-full blur-[100px] mix-blend-screen opacity-50 pointer-events-none" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            custom={0}
            className="text-2xl md:text-4xl font-bold tracking-tight text-white"
          >
            no figma? no design team? <span className="text-white/40">no problem.</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            custom={1}
            className="mt-6 text-white/60 max-w-2xl mx-auto tracking-tight text-lg"
          >
            vibecraftz gives solo developers and hackers instant, premium ui rules without the hassle of a design tool. get curated palettes, typography, and constraints injected directly into your ide.
          </motion.p>
        </motion.div>

        {/* Before / After */}
        {/* Interactive Prompt Trigger */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeInUp}
          custom={1.5}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="p-2 pl-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center gap-3 hover:border-white/40 transition-all shadow-xl group">
            <span className="text-[#b1ff62] font-mono font-bold">~</span>
            <div className="flex-1 text-sm text-white/80 font-mono overflow-hidden">
              <span className="opacity-50">/prompt:</span> "Create a modern account creation form"
            </div>
            <button
              onClick={handleSimulate}
              disabled={isGenerating}
              className="px-6 py-2 rounded-full bg-white text-black font-bold text-sm hover:bg-[#b1ff62] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isGenerating ? (
                <>
                  <div className="w-3 h-3 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Zap size={14} className="fill-black/20" />
                  Run Simulation
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Before / After */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
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
                  without vibecraftz
                </div>
              </div>
              
              <div className="mt-6 p-5 bg-white rounded border border-gray-200 shadow-sm relative overflow-hidden group min-h-[220px] flex flex-col justify-center">
                {!hasGenerated && !isGenerating && (
                  <div className="text-center text-gray-400 text-sm italic w-full">Waiting for prompt...</div>
                )}
                
                {isGenerating && (
                  <div className="flex flex-col items-center justify-center gap-3 w-full text-gray-500">
                    <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                    <div className="text-xs font-mono">Writing HTML/CSS...</div>
                  </div>
                )}

                {hasGenerated && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full">
                    <div className="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">GENERIC AI OUTPUT</span>
                    </div>
                    <h4 className="text-black font-sans text-lg font-normal mb-1">Create Account</h4>
                    <p className="text-gray-500 font-sans text-xs mb-3">Sign up for free.</p>
                    <input type="text" placeholder="Email address" className="w-full border border-gray-300 p-2 text-sm mb-3 text-black" disabled />
                    <button className="bg-blue-600 text-white text-sm px-4 py-2 w-full">Submit</button>
                  </motion.div>
                )}
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
                  with vibecraftz
                  <span className="px-2 py-0.5 rounded-full bg-[#b1ff62] text-black text-[10px] font-bold uppercase tracking-wider not-italic">
                    Pro
                  </span>
                </div>
              </div>

              <div className="mt-6 p-6 bg-[#0a0f1c] rounded-2xl border border-white/10 shadow-lg relative group min-h-[220px] flex flex-col justify-center">
                {!hasGenerated && !isGenerating && (
                  <div className="text-center text-white/30 text-sm italic w-full font-mono">Waiting for prompt...</div>
                )}

                {isGenerating && (
                  <div className="flex flex-col items-center justify-center gap-3 w-full text-[#b1ff62]">
                    <div className="w-6 h-6 border-2 border-[#b1ff62] border-t-transparent rounded-full animate-spin" />
                    <div className="text-xs font-mono">Applying AGENTS.md rules...</div>
                  </div>
                )}

                {hasGenerated && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full">
                    <div className="absolute inset-0 bg-[#b1ff62]/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm z-10 rounded-2xl">
                      <span className="bg-[#b1ff62] text-black text-xs font-bold px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(177,255,98,0.5)]">VIBECRAFTZ OUTPUT</span>
                    </div>
                    <h4 className="text-white font-bold text-xl mb-1 tracking-tight">Create Account</h4>
                    <p className="text-white/50 text-xs mb-4">Join thousands of developers.</p>
                    <input type="text" placeholder="Email address" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white mb-3 focus:border-[#b1ff62] focus:ring-1 focus:ring-[#b1ff62] outline-none transition-all placeholder:text-white/30" disabled />
                    <button className="bg-[#b1ff62] text-black text-sm font-bold px-6 py-2.5 rounded-xl w-full hover:bg-[#9dec52] hover:-translate-y-0.5 shadow-[0_0_15px_rgba(177,255,98,0.2)] transition-all">Get Started</button>
                  </motion.div>
                )}
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



