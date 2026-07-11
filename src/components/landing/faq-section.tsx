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
export function FAQSection() {
  const faqs = [
    {
      q: "what exactly is a vibecraftz file?",
      a: "it's a structured markdown file (.mdc, agents.md, or claude.md) that tells your ai coding assistant exactly how to design your ui — including colors, typography, component patterns, animation rules, and architecture constraints.",
    },
    {
      q: "which ai tools does vibecraftz work with?",
      a: "vibecraftz generates files for cursor (.mdc), the universal AGENTS.md standard (supported by 28+ tools), claude code (claude.md), and any other ai assistant that accepts system instructions in markdown format.",
    },
    {
      q: "how is this different from cursor.directory and free community rules?",
      a: "cursor.directory is fantastic for standardizing your code (like enforcing strict TypeScript or standardizing imports). vibecraftz is entirely different—it's a premium design engine. we inject curated hex codes, typography scales, animation tokens, and UI constraints so your AI generates stunning, production-ready interfaces instead of basic Bootstrap-looking layouts.",
    },
    {
      q: "why should i pay $29-$99 when community rules are free?",
      a: "because you're not buying generic rules—you're buying a premium design system converted into prompt engineering. manually tokenizing colors, spacing, and animations for AI takes hours. for the price of a decent lunch, you get instant access to top-tier aesthetics that make your product look professionally designed, giving you a massive edge over everyone else shipping generic AI UI.",
    },
    {
      q: "will it work with my specific tech stack?",
      a: "yes! the generator lets you configure your exact stack (next.js, vite, tailwind, supabase, etc.) and produces rules tailored to that combination.",
    },
    {
      q: "if i buy pro (one-time), do i get future vibes?",
      a: "pro gives you lifetime access to our current library of vibes. if you want the new vibes we release every month, you can upgrade to pro+ anytime. existing pro users get a 50% discount on their first 6 months of pro+.",
    },
    {
      q: "what if i need a custom vibe not listed?",
      a: "pro+ and teams plans include early access to new vibes. we release new design vibes monthly based on community votes and trends.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 relative">
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-white/5 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-7 lg:border-r lg:border-dashed lg:border-white/20 lg:pr-12 xl:pr-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="mb-12"
            >
              <motion.h2
                variants={fadeInUp}
                custom={0}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight"
              >
                quick answers <br className="hidden md:block" /> for creators
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="space-y-0 border-t border-dashed border-white/20"
            >
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  custom={i + 1}
                  className="border-b border-dashed border-white/20"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between py-6 text-left group"
                  >
                    <span className="text-base md:text-lg font-bold text-white pr-4 tracking-tight group-hover:text-white/80 transition-colors">
                      {faq.q}
                    </span>
                    <span className="relative flex-shrink-0 w-6 h-6 flex items-center justify-center text-white/40 transition-colors group-hover:text-white">
                      <motion.div
                        initial={false}
                        animate={{ rotate: openIndex === i ? 45 : 0 }}
                        className={cn("text-3xl font-light leading-none", openIndex === i && "text-[#b1ff62]")}
                      >
                        +
                      </motion.div>
                    </span>
                  </button>
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300 ease-in-out",
                      openIndex === i ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0 pb-0"
                    )}
                  >
                    <p className="text-sm md:text-base text-white/60 leading-relaxed tracking-tight max-w-2xl">
                      {faq.a}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 mt-12 lg:mt-0 lg:pl-12 xl:pl-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeInUp}
              custom={1}
              className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl p-8 lg:p-10 flex flex-col"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">
                didn't find what you needed?
              </h3>
              <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8 tracking-tight">
                we listen closely. ask a question, share feedback, or drop a quick hello.
              </p>
              <Link 
                href="mailto:support@vibecraftz.dev" 
                className="block w-full text-center py-4 px-6 rounded-xl bg-white text-black text-sm font-bold tracking-tight hover:bg-white/90 transition-colors duration-200"
              >
                write to us
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}



