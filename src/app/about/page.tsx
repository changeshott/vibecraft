"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { Code2, Paintbrush, Zap } from "lucide-react";
import { DynamicIcon } from "@/components/shared/dynamic-icon";
import { fadeInUp } from "@/lib/animations";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-[#090909] min-h-screen relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#b1ff62]/5 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-white/5 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={0}
            className="mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 mb-6">
              <span className="text-xs font-bold text-white/80 tracking-tight">The Maker's Story</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-white leading-[1.1]">
              i got tired of <br />
              <span className="text-white/40">ugly AI websites.</span>
            </h1>
          </motion.div>

          <div className="space-y-12">
            {/* The Problem */}
            <motion.section 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={1}
              className="prose prose-invert prose-lg max-w-none"
            >
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-1">
                  <Paintbrush size={24} className="text-white/70" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">The Problem</h2>
                  <p className="text-white/60 leading-relaxed tracking-tight text-lg mb-4">
                    As a frontend engineer obsessed with design details, watching AI coding assistants write UI code was painful. Sure, Cursor and Claude can write the logic perfectly, but without strict design constraints, they default to generic, lifeless outputs.
                  </p>
                  <p className="text-white/60 leading-relaxed tracking-tight text-lg">
                    I spent more time arguing with AI about border radii, shadow opacities, and hex codes than I did actually building features. Every project looked the same: generic blue buttons on a white background.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* The Solution */}
            <motion.section 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={2}
              className="prose prose-invert prose-lg max-w-none"
            >
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-[#b1ff62]/10 border border-[#b1ff62]/20 flex items-center justify-center shrink-0 mt-1">
                  <Zap size={24} className="text-[#b1ff62]" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">Enter VibeCraftz</h2>
                  <p className="text-white/60 leading-relaxed tracking-tight text-lg mb-4">
                    I realized the issue wasn't the AI — it was the context. AI doesn't have "taste", it has patterns. If you feed it a strict, tokenized design system as a system prompt, it will follow those rules flawlessly.
                  </p>
                  <p className="text-white/60 leading-relaxed tracking-tight text-lg">
                    That's why I built VibeCraftz. I curated premium design "vibes" and packaged them into hardened system instructions. Now, you can inject world-class design taste directly into your IDE's brain.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Credibility */}
            <motion.section 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={3}
              className="p-8 mt-12 rounded-[2rem] border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl shadow-2xl"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-24 h-24 rounded-full border border-white/20 bg-white/10 overflow-hidden shrink-0 relative">
                  {/* Avatar Placeholder - uses a subtle geometric pattern for the dark aesthetic */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white/50">
                    {siteConfig.author.charAt(0).toUpperCase()}
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                    {siteConfig.author}
                  </h3>
                  <p className="text-white/50 text-sm mb-6 max-w-md mx-auto md:mx-0">
                    Design-engineer bridging the gap between aesthetics and artificial intelligence.
                  </p>
                  
                  <div className="flex items-center justify-center md:justify-start gap-4">
                    <a
                      href={siteConfig.links.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                    >
                      <DynamicIcon name="simple-icons:x" size={18} />
                    </a>
                    <a
                      href={siteConfig.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                    >
                      <DynamicIcon name="simple-icons:github" size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* CTA */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={4}
              className="pt-12 text-center"
            >
              <Link 
                href="/generator"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold bg-white text-black hover:bg-white/90 hover:-translate-y-1 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] tracking-tight"
              >
                <Code2 size={18} />
                Try VibeCraftz Now
              </Link>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
