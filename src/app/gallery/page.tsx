"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { allVibes } from "@/lib/engine/vibes";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { fadeInUp } from "@/lib/animations";
import { DynamicIcon } from "@/components/shared/dynamic-icon";

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 bg-[#090909] min-h-screen relative overflow-hidden">
        {/* Ambient background blob */}
        <motion.div 
          animate={{ x: [-20, 20, -20], y: [-20, 20, -20] }} 
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} 
          className="absolute top-[20%] left-[20%] w-[50vw] h-[50vw] bg-white/5 rounded-full blur-[150px] mix-blend-screen pointer-events-none" 
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }} 
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} 
          className="absolute bottom-[20%] right-[10%] w-[40vw] h-[40vw] bg-[#b1ff62]/5 rounded-full blur-[120px] mix-blend-screen pointer-events-none" 
        />
        
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white tracking-tight">
              vibe <span className="text-white/40">gallery</span>
            </h1>
            <p className="mt-6 text-lg text-white/60 max-w-xl mx-auto tracking-tight">
              explore the design vibes and see what your ai could build with
              vibecraft rules.
            </p>
          </motion.div>

          {/* Vibe showcase */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {allVibes.map((vibe, i) => (
              <motion.div
                key={vibe.id}
                variants={fadeInUp}
                custom={i}
                className="rounded-[2rem] border border-white/[0.08] bg-white/[0.02] backdrop-blur-[40px] overflow-hidden hover:bg-white/[0.04] transition-colors duration-300"
              >
                <div className="p-8 md:p-10">
                  {/* Vibe header */}
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex items-center gap-6">
                      <div className="text-white/80 p-4 bg-white/5 rounded-2xl border border-white/10 flex-shrink-0 group-hover:scale-110 group-hover:text-[#b1ff62] group-hover:border-[#b1ff62]/30 transition-all duration-300">
                        <DynamicIcon name={vibe.iconName} size={40} strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="flex items-center gap-4">
                          <h2 className="text-2xl font-bold text-white tracking-tight tracking-wide">
                            {vibe.name}
                          </h2>
                          {vibe.tier !== "free" ? (
                            <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#b1ff62]/10 text-[#b1ff62] border border-[#b1ff62]/20">
                              pro
                            </span>
                          ) : (
                            <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/10 text-white/70 border border-white/20">
                              free
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-white/60 mt-2 max-w-lg tracking-tight leading-relaxed">
                          {vibe.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Color palette */}
                  <div className="mb-8">
                    <h3 className="text-sm font-bold text-white mb-4 tracking-tight tracking-wide">
                      color palette
                    </h3>
                    <div className="flex gap-3 flex-wrap">
                      {Object.entries(vibe.colors).map(([name, value]) => (
                        <div key={name} className="group relative">
                          <div
                            className="w-12 h-12 rounded-xl border border-white/10 shadow-sm cursor-pointer hover:scale-110 transition-transform"
                            style={{ backgroundColor: value }}
                          />
                          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 hidden group-hover:block px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-xl border border-white/20 text-xs tracking-tight text-white whitespace-nowrap z-10 shadow-xl">
                            {name}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Component patterns preview */}
                  <div className="mb-8">
                    <h3 className="text-sm font-bold text-white mb-4 tracking-tight tracking-wide">
                      component patterns
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {vibe.componentPatterns.slice(0, 3).map((pattern) => (
                        <div
                          key={pattern.name}
                          className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]"
                        >
                          <span className="text-sm font-bold text-white tracking-tight">
                            {pattern.name}
                          </span>
                          <p className="text-xs text-white/50 mt-1 tracking-tight leading-relaxed">
                            {pattern.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Typography preview */}
                  <div className="mb-10">
                    <h3 className="text-sm font-bold text-white mb-4 tracking-tight tracking-wide">
                      typography
                    </h3>
                    <div className="space-y-2 bg-black/40 border border-white/10 rounded-xl p-5">
                      <p className="text-sm text-white/60 tracking-tight">
                        <span className="text-[#b1ff62]">font:</span>{" "}
                        {vibe.typography.fontFamily.split(",")[0]}
                      </p>
                      <p className="text-sm text-white/60 tracking-tight">
                        <span className="text-[#b1ff62]">hero:</span>{" "}
                        {vibe.typography.hero}
                      </p>
                      <p className="text-sm text-white/60 tracking-tight">
                        <span className="text-[#b1ff62]">body:</span>{" "}
                        {vibe.typography.body}
                      </p>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/generator?vibe=${vibe.id}`}
                    className={cn(
                      "inline-flex items-center gap-3 px-8 py-3.5 rounded-xl text-sm font-bold transition-all duration-300",
                      "bg-[#b1ff62] hover:bg-[#8eff00] text-black shadow-[0_0_20px_rgba(177,255,98,0.2)] hover:shadow-[0_0_30px_rgba(177,255,98,0.3)] hover:-translate-y-1 tracking-tight tracking-wide"
                    )}
                  >
                    use this vibe
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
