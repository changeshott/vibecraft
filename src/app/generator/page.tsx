"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Zap } from "lucide-react";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { VibeSelector } from "@/components/generator/vibe-selector";
import { StackConfig } from "@/components/generator/stack-config";
import { RulesConfig } from "@/components/generator/rules-config";
import { IdeSelector } from "@/components/generator/ide-selector";
import { OutputPanel } from "@/components/generator/output-panel";
import { useGenerator } from "@/hooks/use-generator";
import { cn } from "@/lib/utils";

export default function GeneratorPage() {
  const {
    config,
    outputs,
    activeOutput,
    setActiveOutput,
    isGenerating,
    error,
    userTier,
    updateVibe,
    updateStack,
    toggleRule,
    toggleIde,
    generate,
    copyToClipboard,
    downloadFile,
  } = useGenerator();

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-16 bg-[#090909] min-h-screen relative">
        {/* Ambient background blob */}
        <div className="absolute top-[10%] left-[50%] -translate-x-1/2 w-[60vw] h-[60vw] bg-white/5 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              generator
            </h1>
            <p className="text-white/60 mt-4 max-w-lg mx-auto tracking-tight text-lg">
              configure your vibe, stack, and rules — then generate system
              instructions for your ai coding assistant.
            </p>
          </motion.div>

          {/* Main layout */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Left: Configuration */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
              className="lg:col-span-3 space-y-6"
            >
              {/* Step 1: Vibe */}
              <section className="p-6 rounded-[2rem] border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-xl bg-[#b1ff62]/10 flex items-center justify-center text-sm font-bold text-[#b1ff62] tracking-tight">
                    1
                  </div>
                  <span className="text-base font-bold text-white tracking-tight tracking-wide">choose your vibe</span>
                </div>
                <VibeSelector
                  selectedVibe={config.vibe}
                  onSelect={updateVibe}
                  userTier={userTier}
                />
              </section>

              {/* Step 2: Stack */}
              <section className="p-6 rounded-[2rem] border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-xl bg-[#b1ff62]/10 flex items-center justify-center text-sm font-bold text-[#b1ff62] tracking-tight">
                    2
                  </div>
                  <span className="text-base font-bold text-white tracking-tight tracking-wide">configure tech stack</span>
                </div>
                <StackConfig
                  selectedStacks={config.stacks}
                  onSelect={updateStack}
                />
              </section>

              {/* Step 3: Rules */}
              <section className="p-6 rounded-[2rem] border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-xl bg-[#b1ff62]/10 flex items-center justify-center text-sm font-bold text-[#b1ff62] tracking-tight">
                    3
                  </div>
                  <span className="text-base font-bold text-white tracking-tight tracking-wide">select ai rules</span>
                </div>
                <RulesConfig
                  selectedRules={config.rules}
                  onToggle={toggleRule}
                  userTier={userTier}
                />
              </section>

              {/* Step 4: IDE */}
              <section className="p-6 rounded-[2rem] border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-xl bg-[#b1ff62]/10 flex items-center justify-center text-sm font-bold text-[#b1ff62] tracking-tight">
                    4
                  </div>
                  <span className="text-base font-bold text-white tracking-tight tracking-wide">target ide</span>
                </div>
                <IdeSelector
                  selectedIdes={config.targetIdes}
                  onToggle={toggleIde}
                />
              </section>

              {/* Generate Button */}
              <button
                onClick={async () => {
                  const success = await generate();
                  if (success) {
                    // Scroll to output on mobile
                    if (window.innerWidth < 1024) {
                      document.getElementById("output-preview")?.scrollIntoView({ behavior: "smooth" });
                    }
                  }
                }}
                disabled={isGenerating || config.targetIdes.length === 0}
                className={cn(
                  "w-full flex items-center justify-center gap-3 py-5 rounded-xl text-base font-bold",
                  "bg-[#b1ff62] hover:bg-[#8eff00] text-black",
                  "shadow-[0_0_20px_rgba(177,255,98,0.2)] hover:shadow-[0_0_30px_rgba(177,255,98,0.3)]",
                  "transition-all duration-300 hover:-translate-y-0.5",
                  "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0",
                  "tracking-tight tracking-wide"
                )}
              >
                {isGenerating ? (
                  <>
                    <Zap size={20} className="animate-spin" />
                    generating...
                  </>
                ) : (
                  <>
                    <Sparkles size={20} />
                    generate system instructions
                  </>
                )}
              </button>

              {/* Error */}
              <AnimatePresence>
                {error && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0, y: -10 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -10 }}
                    className="p-4 rounded-xl border border-error/30 bg-error/5 text-error text-sm mt-4"
                  >
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Right: Output */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-2"
              id="output-preview"
            >
              <div className="sticky top-28 p-6 rounded-[2rem] border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl">
                <h3 className="text-base font-bold text-white mb-6 tracking-tight tracking-wide">
                  output preview
                </h3>
                <OutputPanel
                  outputs={outputs}
                  activeOutput={activeOutput}
                  onSetActive={setActiveOutput}
                  onCopy={copyToClipboard}
                  onDownload={downloadFile}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
