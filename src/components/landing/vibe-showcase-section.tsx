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
export function VibeShowcaseSection() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="absolute top-[50%] right-[-10%] w-[30vw] h-[30vw] bg-white/5 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />

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
          viewport={{ once: true, amount: 0.15 }}
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



