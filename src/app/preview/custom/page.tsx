"use client";

import { motion } from "framer-motion";
import { Wand2 } from "lucide-react";

export default function CustomPreviewPage() {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-white/5 rounded-full blur-[100px]" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-md"
      >
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
          <Wand2 size={32} className="text-[#b1ff62]" />
        </div>
        
        <h1 className="text-2xl font-bold text-white mb-3 tracking-tight">
          Custom Brand Vibe
        </h1>
        
        <p className="text-white/50 text-sm leading-relaxed">
          Your custom palette has been generated and applied to the configuration. 
          Generate the system instructions to see the detailed design tokens.
        </p>
      </motion.div>
    </div>
  );
}
