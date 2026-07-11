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
              className="mt-12 flex flex-col items-center justify-center gap-4"
            >
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
                <Link
                  href="/generator"
                  className="inline-flex items-center justify-center gap-2 px-8 rounded-xl bg-[#b1ff62] text-black font-bold hover:bg-[#9de552] transition-all duration-300 tracking-tight text-base h-[52px] shadow-[0_0_30px_rgba(177,255,98,0.3)] hover:shadow-[0_0_50px_rgba(177,255,98,0.5)] hover:-translate-y-0.5 w-full sm:w-auto z-10"
                >
                  <Zap size={18} className="fill-black/10" />
                  Try Free First
                </Link>

                <div className="text-white/40 text-sm font-medium tracking-wide">or</div>

                <div className="flex items-center bg-black/40 border border-white/20 hover:border-white/40 rounded-xl overflow-hidden pr-2 h-[52px] shadow-sm backdrop-blur-md transition-colors max-w-sm w-full sm:w-auto">
                  <div className="px-4 text-white/50 font-mono text-sm border-r border-white/10 flex items-center h-full">
                    $
                  </div>
                  <div className="px-4 text-white/80 font-mono text-sm tracking-tight w-full sm:w-56 text-left outline-none bg-transparent h-full flex items-center">
                    npx vibecraftz@latest
                  </div>
                  <button 
                    onClick={(e) => {
                      navigator.clipboard.writeText("npx vibecraftz@latest");
                      const target = e.currentTarget;
                      const originalHTML = target.innerHTML;
                      target.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white/80"><polyline points="20 6 9 17 4 12"></polyline></svg>';
                      setTimeout(() => { target.innerHTML = originalHTML; }, 2000);
                    }}
                    className="p-2.5 bg-white/5 hover:bg-white/10 rounded-lg transition-colors group relative border border-white/5"
                    title="Copy to clipboard"
                  >
                    <Copy size={16} className="text-white/60 group-hover:text-white transition-colors" />
                  </button>
                </div>
              </div>
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





