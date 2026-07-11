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
export function FreeSampleSection() {
  const [copied, setCopied] = useState(false);
  
  const sampleCode = `# VibeCraftz Design System: Free Demo
## 1. Core Constraints
- ALWAYS use Next.js App Router and Tailwind CSS.
- NEVER use inline styles. Always use Tailwind utility classes.
- NEVER use generic colors like 'blue-500' or 'red-500'.

## 2. Color Palette (Minimalist Monochrome)
- Background: \`bg-[#fcfcfc]\` (light mode) / \`bg-[#09090b]\` (dark mode)
- Text Primary: \`text-[#09090b]\` (light) / \`text-[#fafafa]\` (dark)
- Accent/Primary: \`bg-[#18181b] text-white\` (light) / \`bg-[#fafafa] text-black\` (dark)
- Border: \`border-[#e4e4e7]\` (light) / \`border-[#27272a]\` (dark)

## 3. UI Components & Patterns
- Buttons: Always use \`rounded-md font-medium px-4 py-2 transition-colors\`.
- Cards: Always use \`rounded-xl border shadow-sm p-6\`.
- Inputs: Always use \`rounded-md border px-3 py-2 text-sm focus:ring-2 focus:ring-offset-2\`.
- Animation: Add \`hover:opacity-80 transition-opacity\` to interactive elements.

## 4. Instructions
When asked to generate a component, strictly adhere to the palette and patterns above to ensure a premium, minimalist aesthetic.`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(sampleCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-[2.5rem] bg-gradient-to-b from-[#111] to-[#0a0a0c] border border-white/10 p-8 md:p-12 lg:p-16 text-center shadow-2xl relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-[#b1ff62]/5 blur-[100px] pointer-events-none rounded-full" />
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
            <motion.div variants={fadeInUp} custom={0} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 mb-6">
              <Zap size={14} className="text-[#b1ff62]" />
              <span className="text-xs font-bold text-white/80 tracking-tight">Free Trial</span>
            </motion.div>
            
            <motion.h2 variants={fadeInUp} custom={1} className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-6">
              Don't believe us? <br />
              <span className="text-[#b1ff62]">Try it yourself.</span>
            </motion.h2>
            
            <motion.p variants={fadeInUp} custom={2} className="text-white/60 max-w-2xl mx-auto mb-10 text-lg">
              Copy this basic VibeCraftz ruleset into a file named <code className="bg-white/10 px-1.5 py-0.5 rounded text-white font-mono text-sm">AGENTS.md</code> in your project root. Open Cursor or Windsurf and ask it to "create a login form". See the magic instantly.
            </motion.p>
            
            <motion.div variants={fadeInUp} custom={3} className="max-w-3xl mx-auto relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-white/10 via-[#b1ff62]/20 to-white/10 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              
              <div className="relative bg-[#050505] rounded-2xl border border-white/10 overflow-hidden text-left shadow-2xl">
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#0a0a0a]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                  </div>
                  <div className="text-xs text-white/40 font-mono">AGENTS.md</div>
                  <button 
                    onClick={copyToClipboard}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-white transition-all"
                  >
                    {copied ? <Check size={12} className="text-[#b1ff62]" /> : <Copy size={12} />}
                    {copied ? "Copied!" : "Copy Code"}
                  </button>
                </div>
                
                <div className="p-6 overflow-x-auto max-h-[400px] overflow-y-auto hide-scrollbar">
                  <pre className="font-mono text-xs md:text-sm text-white/70 leading-relaxed">
                    <code>{sampleCode}</code>
                  </pre>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



