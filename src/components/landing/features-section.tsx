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
        "Cursor Marketplace Plugin Export",
        "Google Stitch DESIGN.md",
        "AGENTS.md & .mdc support"
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
      <div className="absolute bottom-[-10%] left-[20%] w-[50vw] h-[50vw] bg-white/5 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20"
        >
          <div className="max-w-2xl">
            <motion.div variants={fadeInUp} custom={0} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 mb-6">
              <Zap size={14} className="text-[#b1ff62]" />
              <span className="text-xs font-bold text-white/80 tracking-tight">VibeCraftz Engine</span>
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
              Stop fighting with your AI over design decisions. VibeCraftz injects a hardened, production-ready rule system into your IDE that forces the AI to write beautiful, consistent code on the first try.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
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



