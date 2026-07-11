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
        "download your design.md, .mdc, or agents.md files, drop them in your project, and watch ai deliver.",
    },
  ];

  return (
    <section className="py-20 md:py-28 relative">
      <div className="absolute top-[20%] left-[-10%] w-[40vw] h-[40vw] bg-white/5 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

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
            three steps. <span className="text-white/40">zero effort.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
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



