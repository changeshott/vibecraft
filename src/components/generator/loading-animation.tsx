"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, Cpu, Network, Database, ShieldCheck, CheckCircle2, Activity } from "lucide-react";

const loadingSteps = [
  { id: "init", label: "initializing core engine", duration: 800 },
  { id: "stack", label: "analyzing tech stack topology", duration: 1000 },
  { id: "vibe", label: "injecting aesthetic parameters", duration: 1200 },
  { id: "rules", label: "compiling behavior guardrails", duration: 1000 },
  { id: "synth", label: "synthesizing system instructions", duration: 1000 },
];

export function LoadingAnimation() {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  // Handle steps timing
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const runStep = (index: number) => {
      if (index >= loadingSteps.length) return;
      setCurrentStep(index);
      timeoutId = setTimeout(() => {
        runStep(index + 1);
      }, loadingSteps[index].duration);
    };

    runStep(0);
    return () => clearTimeout(timeoutId);
  }, []);

  // Handle smooth progress bar
  useEffect(() => {
    const startTime = Date.now();
    const duration = 5000;
    
    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const p = Math.min((elapsed / duration) * 100, 100);
      setProgress(p);
      if (p < 100) {
        requestAnimationFrame(updateProgress);
      }
    };
    
    requestAnimationFrame(updateProgress);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center py-4 sm:py-10 min-h-[500px]">
      
      {/* HUD Header */}
      <div className="w-full max-w-4xl flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 px-4 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#b1ff62]/10 flex items-center justify-center border border-[#b1ff62]/20">
            <Cpu className="text-[#b1ff62]" size={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold tracking-widest text-base sm:text-lg uppercase">Instruction Compiler</span>
            <span className="text-[#b1ff62]/60 text-[10px] sm:text-xs font-mono">v1.0.0 // SYSTEM_BUILD</span>
          </div>
        </div>
      </div>

      {/* Main Matrix Grid */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        
        {/* Left Panel: Status Sequence */}
        <div className="col-span-1 space-y-4 md:space-y-6 flex flex-col justify-between">
          <div className="bg-black/40 rounded-2xl border border-white/5 p-5 shadow-inner">
            <h4 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-5 flex items-center gap-2">
              <Database size={14} /> Operation Sequence
            </h4>
            <div className="space-y-4">
              {loadingSteps.map((step, index) => (
                <div key={step.id} className="flex items-center gap-3 font-mono text-xs">
                  {index < currentStep ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    >
                      <CheckCircle2 size={16} className="text-[#b1ff62]" />
                    </motion.div>
                  ) : index === currentStep ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-[#b1ff62] border-t-transparent rounded-full shadow-[0_0_5px_rgba(177,255,98,0.5)]"
                    />
                  ) : (
                    <div className="w-4 h-4 rounded-full border border-white/10" />
                  )}
                  <span className={index <= currentStep ? "text-white" : "text-white/30"}>
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-black/40 rounded-2xl border border-white/5 p-5 shadow-inner">
            <h4 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
              <ShieldCheck size={14} /> Security & Rules
            </h4>
            <div className="space-y-3">
              {[
                { label: "Anti-Hallucination", status: "Active" },
                { label: "Context Window", status: "Optimized" },
                { label: "Format Parser", status: "Ready" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center text-[10px] sm:text-xs font-mono border-b border-white/5 pb-2 last:border-0 last:pb-0">
                  <span className="text-white/50">{item.label}</span>
                  <span className="text-[#b1ff62]/80">{item.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Center Panel: Main AI Core */}
        <div className="col-span-1 md:col-span-2 bg-black/40 rounded-2xl border border-[#b1ff62]/10 p-6 shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] relative flex flex-col items-center justify-center overflow-hidden min-h-[300px]">
          
          {/* Graphic Section */}
          <div className="relative w-full flex-1 flex flex-col items-center justify-center mb-6 mt-2">
            <div className="w-4/5 h-40 bg-black/50 rounded-xl border border-white/10 overflow-hidden relative shadow-inner">
              {/* Fake Code Lines */}
              <div className="absolute inset-0 p-6 flex flex-col gap-3">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0.1, width: "20%" }}
                    animate={{ 
                      opacity: [0.2, 0.6, 0.2],
                      width: ["20%", `${Math.random() * 50 + 30}%`, "20%"] 
                    }}
                    transition={{ duration: 2 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                    className="h-1.5 bg-[#b1ff62]/50 rounded-full"
                    style={{ marginLeft: i % 2 === 0 ? "10%" : "0" }}
                  />
                ))}
              </div>
              
              {/* Scanner Line */}
              <motion.div
                animate={{ y: ["-10%", "110%", "-10%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-transparent via-[#b1ff62]/10 to-transparent border-b border-[#b1ff62]/40 shadow-[0_5px_15px_rgba(177,255,98,0.1)]"
              />
            </div>
            
            {/* Animated Nodes */}
            <div className="flex gap-8 mt-8">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 1.5, delay: i * 0.4, repeat: Infinity }}
                  className="w-2.5 h-2.5 bg-[#b1ff62] rounded-full shadow-[0_0_12px_#b1ff62]"
                />
              ))}
            </div>
          </div>

          {/* Core Log & Progress */}
          <div className="w-full max-w-sm mt-auto relative z-10 bg-black/60 p-4 rounded-xl border border-white/5 backdrop-blur-md">
            <div className="flex justify-between items-end mb-3 font-mono">
              <span className="text-[#b1ff62] text-xs font-bold uppercase tracking-wider">
                {loadingSteps[currentStep]?.label || "Finalizing..."}
              </span>
              <span className="text-white/60 text-xs font-bold">{Math.floor(progress)}%</span>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden relative">
              {/* Animated scanning line inside progress */}
              <motion.div 
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent z-10"
              />
              <motion.div 
                className="h-full bg-gradient-to-r from-[#b1ff62]/50 to-[#b1ff62] shadow-[0_0_15px_rgba(177,255,98,0.5)] relative z-0"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
