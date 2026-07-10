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

// ============================================
// IDE SIMULATOR (HERO)
// ============================================
function IDESimulator() {
  const [step, setStep] = useState(0);

  // Animation sequence
  // 0: Typing prompt
  // 1: Enter pressed, thinking
  // 2: Reading AGENTS.md
  // 3: Generating code
  // 4: Done, reset after delay
  useEffect(() => {
    if (step === 0) {
      const t1 = setTimeout(() => setStep(1), 1500);
      return () => clearTimeout(t1);
    } else if (step === 1) {
      const t2 = setTimeout(() => setStep(2), 800);
      return () => clearTimeout(t2);
    } else if (step === 2) {
      const t3 = setTimeout(() => setStep(3), 1500);
      return () => clearTimeout(t3);
    } else if (step === 3) {
      const t4 = setTimeout(() => setStep(4), 2000);
      return () => clearTimeout(t4);
    } else if (step === 4) {
      const t5 = setTimeout(() => setStep(0), 4000);
      return () => clearTimeout(t5);
    }
  }, [step]);

  return (
    <div className="relative rounded-2xl border border-white/[0.08] bg-[#0c0c0e] overflow-hidden shadow-2xl flex flex-col font-mono text-sm">
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.08] bg-[#1a1a1e]">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="flex-1 text-center flex items-center justify-center gap-2 text-xs text-white/40">
          <Code2 size={12} />
          page.tsx — vibecraftz-demo
        </div>
      </div>
      
      {/* Main IDE area */}
      <div className="flex flex-1 min-h-[300px]">
        {/* Sidebar */}
        <div className="w-12 bg-[#141417] border-r border-white/5 flex flex-col items-center py-4 gap-4 text-white/20">
          <Layers size={18} />
          <Zap size={18} className="text-white/40" />
        </div>
        
        {/* Editor Area */}
        <div className="flex-1 p-4 flex flex-col relative overflow-hidden bg-[#0a0a0c]">
          {/* Top code context */}
          <div className="text-white/30 text-xs mb-4">
            <span className="text-[#c678dd]">import</span> {'{'} Button {'}'} <span className="text-[#c678dd]">from</span> <span className="text-[#98c379]">"@/components/ui/button"</span>;
            <br />
            <span className="text-[#c678dd]">export default function</span> <span className="text-[#61afef]">Hero</span>() {'{'}
            <br />
            &nbsp;&nbsp;<span className="text-[#c678dd]">return</span> (
          </div>

          {/* AI Chat Box */}
          <div className="mt-auto z-10 w-full max-w-md ml-auto mr-auto absolute bottom-4 left-0 right-0">
            <div className="bg-[#1e1e24] border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col">
              
              {/* Output / Status area */}
              {step > 0 && (
                <div className="p-3 bg-[#18181d] border-b border-white/5 text-xs flex flex-col gap-2">
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5 shrink-0">
                      <Zap size={10} className="text-blue-400" />
                    </div>
                    <div className="flex-1 space-y-1.5">
                      {step >= 1 && (
                        <div className="text-white/80">I will create a modern pricing card for you.</div>
                      )}
                      
                      {step >= 2 && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="flex flex-col gap-1 text-[10px] text-white/50 bg-black/30 p-2 rounded-md font-mono mt-1 border border-white/5">
                          <div className="flex items-center gap-1.5 text-[#b1ff62]">
                            <Check size={10} /> Reading AGENTS.md...
                          </div>
                          <div className="flex items-center gap-1.5 text-[#b1ff62]">
                            <Check size={10} /> Applying Dark SaaS Pro vibe
                          </div>
                          <div className="flex items-center gap-1.5 text-[#b1ff62]">
                            <Check size={10} /> Forcing Tailwind CSS 4 syntax
                          </div>
                        </motion.div>
                      )}

                      {step >= 3 && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-[#98c379] mt-2">
                          <div className="w-3 h-3 border-2 border-[#98c379] border-t-transparent rounded-full animate-spin" />
                          Generating component...
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Input area */}
              <div className="p-3 flex items-center gap-3">
                <div className="text-white/40"><ChevronDown size={16} /></div>
                <div className="flex-1 text-sm">
                  {step === 0 ? (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.2, ease: "linear" }}
                      className="overflow-hidden whitespace-nowrap text-white/90"
                    >
                      Create a modern pricing card...
                    </motion.div>
                  ) : (
                    <div className="text-white/90">Create a modern pricing card...</div>
                  )}
                </div>
                <div className="px-2 py-1 bg-white/10 rounded text-[10px] text-white/40">⏎</div>
              </div>
            </div>
          </div>

          {/* Code appearing animation */}
          {step >= 4 && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="pl-6 text-sm"
            >
              <div className="text-[#abb2bf]">
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-[#e06c75]">div</span> <span className="text-[#d19a66]">className</span>=<span className="text-[#98c379]">"p-8 rounded-2xl bg-[#0a0f1c] border border-white/10 hover:border-[#b1ff62]/50 transition-all shadow-xl"</span>&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-[#e06c75]">h3</span> <span className="text-[#d19a66]">className</span>=<span className="text-[#98c379]">"text-white font-bold text-2xl"</span>&gt;Pro Plan&lt;/<span className="text-[#e06c75]">h3</span>&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-[#e06c75]">div</span> <span className="text-[#d19a66]">className</span>=<span className="text-[#98c379]">"mt-4 text-[#b1ff62] font-mono"</span>&gt;$15/mo&lt;/<span className="text-[#e06c75]">div</span>&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-[#e06c75]">Button</span> <span className="text-[#d19a66]">className</span>=<span className="text-[#98c379]">"w-full mt-6 bg-[#b1ff62] text-black hover:bg-white"</span>&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Upgrade Now
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-[#e06c75]">Button</span>&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-[#e06c75]">div</span>&gt;
              </div>
            </motion.div>
          )}

          {/* Bottom context */}
          <div className="text-white/30 text-xs mt-auto pb-8 pt-4">
            &nbsp;&nbsp;);
            <br />
            {'}'}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// HERO
// ============================================
export function HeroSection() {
  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Background fluid/grainy effects matching image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] bg-white/20 rounded-full blur-[120px] mix-blend-screen opacity-40" />
        <div className="absolute bottom-[20%] right-[5%] w-[50vw] h-[50vw] bg-white/20 rounded-full blur-[150px] mix-blend-screen opacity-30" />
        <div className="absolute top-[60%] left-[60%] -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-white/10 rounded-full blur-[150px] mix-blend-screen" />
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
              your stack, and generate system instructions for cursor, copilot, or any ai assistant via DESIGN.md or AGENTS.md.
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

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 flex flex-col items-center gap-3"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-white/10 overflow-hidden relative z-10 hover:z-20 transition-transform hover:scale-110">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${i + 20}.jpg`} alt="user avatar" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <div className="flex text-yellow-500">
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                  </div>
                  <span>Loved by <strong>10,000+</strong> developers</span>
                </div>
                <div className="text-xs text-white/40 tracking-tight">
                  Over 100k+ vibes generated this month.
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Interactive IDE Simulator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="mx-auto w-full max-w-4xl"
        >
          <IDESimulator />
        </motion.div>
      </div>
    </section>
  );
}

// ============================================
// PROBLEM
// ============================================
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

// ============================================
// VIBE SHOWCASE
// ============================================
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
          <p className="mt-6 text-white/50 max-w-2xl mx-auto text-lg tracking-tight font-medium">
            <span className="text-white">cursor.directory gives you basic coding standards.</span> VibeCraftz gives you a premium design agency in a file. Stand out from the sea of generic AI outputs.
          </p>
        </div>

        {/* Quality vs Quantity Banner */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeInUp}
          custom={0}
          className="mb-12 rounded-[1.5rem] border border-[#b1ff62]/20 bg-[#b1ff62]/5 p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Why 7 Vibes? Quality {'>'} Quantity</h3>
          <p className="text-white/70 max-w-3xl mx-auto leading-relaxed">
            cursor.directory has thousands of community-dumped, often conflicting rules. VibeCraftz focuses on <strong className="text-white">deep, highly-engineered, full-stack architectures</strong>. It takes us weeks to perfect a single vibe. Your $39 lifetime pass gets you the current 7 production-ready vibes, plus <strong className="text-[#b1ff62]">guaranteed access to all future premium vibes</strong> as we expand the catalog.
          </p>
        </motion.div>

        {/* Free Tier Banner */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
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
          viewport={{ once: true, amount: 0.15 }}
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
            desc="Lifetime access to all current AND future vibes. The ultimate value."
            features={[
              "All current design vibes",
              "All future premium vibes",
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
            price="$15"
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

        {/* Guarantee Banner */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeInUp}
          custom={4}
          className="mt-12 max-w-3xl mx-auto flex items-center justify-center gap-4 p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl"
        >
          <div className="p-3 bg-[#b1ff62]/10 rounded-full border border-[#b1ff62]/20">
            <Shield size={24} className="text-[#b1ff62]" />
          </div>
          <div className="text-sm md:text-base text-white/60">
            <span className="font-bold text-white">14-Day Money-Back Guarantee.</span> Not vibing with the rules? Get a full refund, no questions asked.
          </div>
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

      <button className={`w-full py-4 rounded-md text-xs font-bold uppercase tracking-widest transition-all mb-2 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center ${buttonType === 'primary'
        ? 'bg-[#b1ff62] hover:bg-[#8eff00] text-black shadow-[0_0_30px_rgba(177,255,98,0.25)] border border-[#b1ff62]/50'
        : 'bg-white/5 hover:bg-white/10 border border-white/10 text-white shadow-xl'
        }`}>
        {title === 'Pro+' ? 'Start 7-Day Free Trial' : 'Get Started'}
      </button>

      {title === 'Pro+' ? (
        <p className="text-[10px] text-center text-white/40 mb-6 tracking-tight">cancel anytime. no charge for 7 days.</p>
      ) : (
        <div className="mb-10" />
      )}

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
// TESTIMONIALS
// ============================================
export function TestimonialSection() {
  const testimonials = [
    {
      name: "Alex Rivera",
      role: "Indie Hacker",
      content: "VibeCraftz completely changed how I use Cursor. My UIs went from looking like basic Bootstrap to feeling like a premium SaaS instantly. Worth every penny.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sarah Chen",
      role: "Frontend Engineer",
      content: "I was spending hours fixing the terrible CSS my AI was generating. Now I just drop the rules file in my project and it writes perfect Tailwind every single time.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Mike Johnson",
      role: "Startup Founder",
      content: "The dark mode vibe pack is insane. I generated my entire landing page with Claude Code and didn't have to touch a single hex code. Huge time saver.",
      avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    }
  ];

  return (
    <section className="py-20 md:py-28 relative">
      <div className="absolute top-1/2 right-0 w-[40vw] h-[40vw] bg-white/5 rounded-full blur-[120px] mix-blend-screen pointer-events-none -translate-y-1/2" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            custom={0}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white"
          >
            Don't just take our word for it
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            custom={1}
            className="mt-6 text-white/50 max-w-2xl mx-auto text-lg tracking-tight"
          >
            Join thousands of developers shipping better UIs faster.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              custom={i + 2}
              className="p-8 rounded-[1.5rem] border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl flex flex-col justify-between shadow-xl hover:bg-white/[0.04] transition-colors"
            >
              <div className="flex gap-1 mb-6 text-yellow-500">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p className="text-white/80 leading-relaxed tracking-tight mb-8 text-sm md:text-base font-medium">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-white/[0.08]">
                <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-white font-bold tracking-tight">{t.name}</h4>
                  <p className="text-[#b1ff62]/80 text-xs font-bold tracking-wider uppercase mt-1">{t.role}</p>
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
// FAQ
// ============================================
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

// ============================================
// CTA
// ============================================
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
            <Link
              href="/generator"
              className="inline-flex items-center justify-center px-12 py-4 text-base font-bold rounded-full bg-[#b1ff62] hover:bg-[#8eff00] text-black shadow-[0_0_40px_rgba(177,255,98,0.4)] transition-all duration-300 hover:scale-105 tracking-wide pointer-events-auto"
            >
              Request Rules
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// FREE SAMPLE SECTION
// ============================================
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
