"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { allVibes } from "@/lib/engine/vibes";
import { cn } from "@/lib/utils";
import { ArrowRight, LayoutTemplate } from "lucide-react";
import Link from "next/link";
import { fadeInUp } from "@/lib/animations";
import { DynamicIcon } from "@/components/shared/dynamic-icon";
import Image from "next/image";

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-32 bg-[#090909] min-h-screen relative overflow-x-clip">
        {/* Ambient background blob */}
        <motion.div 
          animate={{ x: [-20, 20, -20], y: [-20, 20, -20] }} 
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} 
          className="absolute top-[10%] left-[20%] w-[50vw] h-[50vw] bg-white/5 rounded-full blur-[150px] mix-blend-screen pointer-events-none" 
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }} 
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} 
          className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] bg-[#b1ff62]/5 rounded-full blur-[120px] mix-blend-screen pointer-events-none" 
        />
        
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#b1ff62] text-sm font-medium mb-6 tracking-wide">
              <LayoutTemplate className="w-4 h-4" /> Infinite Possibilities
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
              vibe <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/40 to-white/10">gallery</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto tracking-tight leading-relaxed">
              Explore universally adaptable design systems. See how Vibecraft transforms standard structures into spectacular, unique web experiences.
            </p>
          </motion.div>

          {/* Vibe showcase Grid */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
          >
            {allVibes.map((vibe, i) => (
              <motion.div
                key={vibe.id}
                variants={fadeInUp}
                custom={i}
                className="group rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-[40px] overflow-hidden hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 flex flex-col"
              >
                {/* Image Showcase Section */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black border-b border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  {vibe.previewImage ? (
                    <>
                      {/* Interactive Live Preview Iframe */}
                      <iframe 
                        src={`/preview/${vibe.id}`}
                        className="w-[150%] h-[150%] absolute top-0 left-0 origin-top-left scale-[0.666] border-none group-hover:scale-[0.7] transition-transform duration-700 ease-out"
                        title={`${vibe.name} Live Preview`}
                        tabIndex={-1}
                      />
                      {/* Invisible overlay to prevent iframe stealing scroll/clicks while still allowing visual hover */}
                      <div className="absolute inset-0 z-10" />
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white/20">
                      <LayoutTemplate size={64} strokeWidth={1} />
                    </div>
                  )}
                  
                  {/* Floating Action Button on Image */}
                  <div className="absolute bottom-6 right-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <Link
                      href={`/generator?vibe=${vibe.id}`}
                      className="w-14 h-14 rounded-full bg-[#b1ff62] text-black flex items-center justify-center shadow-[0_0_30px_rgba(177,255,98,0.4)] hover:scale-110 transition-transform"
                    >
                      <ArrowRight size={24} strokeWidth={2.5} />
                    </Link>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-10 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-5">
                        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 group-hover:text-[#b1ff62] group-hover:border-[#b1ff62]/30 transition-colors duration-300 shadow-inner">
                          <DynamicIcon name={vibe.iconName} size={28} strokeWidth={1.5} />
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <h2 className="text-3xl font-bold text-white tracking-tight">
                              {vibe.name}
                            </h2>
                            {vibe.tier !== "free" ? (
                              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#b1ff62]/10 text-[#b1ff62] border border-[#b1ff62]/20">
                                pro
                              </span>
                            ) : (
                              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/10 text-white/70 border border-white/20">
                                free
                              </span>
                            )}
                          </div>
                          <p className="text-[#b1ff62]/80 text-sm font-medium tracking-wide">
                            {vibe.shortDescription}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-white/60 leading-relaxed mb-8">
                      {vibe.description}
                    </p>
                  </div>

                  {/* Metadata Row */}
                  <div className="flex flex-col sm:flex-row gap-8 pt-8 border-t border-white/10">
                    {/* Palette */}
                    <div className="flex-1">
                      <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">
                        Color Palette
                      </h3>
                      <div className="flex gap-2">
                        {['background', 'surface', 'border', 'accent'].map((colorKey) => {
                          const val = vibe.colors[colorKey];
                          if (!val) return null;
                          return (
                            <div 
                              key={colorKey}
                              className="w-10 h-10 rounded-full border border-white/20 shadow-md ring-2 ring-transparent group-hover:ring-white/10 transition-all cursor-help"
                              style={{ backgroundColor: val }}
                              title={colorKey}
                            />
                          );
                        })}
                      </div>
                    </div>

                    {/* Typography */}
                    <div className="flex-1">
                      <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">
                        Typography
                      </h3>
                      <div className="bg-black/30 rounded-xl px-4 py-3 border border-white/5">
                        <p className="text-sm text-white/80 font-medium truncate" title={vibe.typography.fontFamily}>
                          {vibe.typography.fontFamily.split(",")[0]}
                        </p>
                        <p className="text-xs text-white/40 mt-1 font-mono">
                          {vibe.typography.fontFamilyMono.split(",")[0]}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1 }}
             className="mt-20 text-center"
          >
             <p className="text-white/40 text-sm">More universally adaptable vibes coming soon...</p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
