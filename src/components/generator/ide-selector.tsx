"use client";

import { ideTargets } from "@/lib/engine/formatters/ide-targets";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { DynamicIcon } from "@/components/shared/dynamic-icon";
import { motion, AnimatePresence } from "framer-motion";

interface IdeSelectorProps {
  selectedIdes: string[];
  onToggle: (ideId: string) => void;
}

export function IdeSelector({ selectedIdes, onToggle }: IdeSelectorProps) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-xl font-bold text-white tracking-tight tracking-wide">target ide</h3>
        <p className="text-sm text-white/50 mt-1 tracking-tight">
          choose which ide format(s) to generate
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {ideTargets.map((ide) => {
          const isSelected = selectedIdes.includes(ide.id);

          return (
            <motion.button
              key={ide.id}
              onClick={() => onToggle(ide.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                "relative group flex flex-col items-center gap-3 p-5 rounded-[1.5rem] border transition-all duration-300",
                isSelected
                  ? "border-[#b1ff62] bg-[#b1ff62]/[0.05] shadow-[0_0_30px_rgba(177,255,98,0.2)]"
                  : "border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.15]"
              )}
            >
              <AnimatePresence>
                {isSelected && (
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="absolute top-3 right-3 w-5 h-5 rounded-full bg-[#b1ff62] flex items-center justify-center shadow-[0_0_15px_rgba(177,255,98,0.4)]"
                  >
                    <Check size={12} className="text-black" strokeWidth={4} />
                  </motion.div>
                )}
              </AnimatePresence>
              <div className={cn(
                "p-3 rounded-xl border transition-all duration-300",
                isSelected 
                  ? "bg-[#b1ff62]/10 border-[#b1ff62]/30 text-[#b1ff62]" 
                  : "text-white/80 bg-white/5 border-white/10 group-hover:text-[#b1ff62] group-hover:border-[#b1ff62]/30 group-hover:-translate-y-1"
              )}>
                <DynamicIcon name={ide.iconName} size={24} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col items-center">
                <span className={cn(
                  "text-sm font-bold tracking-tight tracking-wide mt-1 transition-colors",
                  isSelected ? "text-[#b1ff62]" : "text-white"
                )}>{ide.name}</span>
                <span className="text-[10px] text-white/40 font-mono mt-0.5">{ide.fileName}</span>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
