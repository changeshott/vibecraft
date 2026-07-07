"use client";

import { allVibes } from "@/lib/engine/vibes";
import { cn } from "@/lib/utils";
import { Lock, Check } from "lucide-react";
import { DynamicIcon } from "@/components/shared/dynamic-icon";
import type { UserTier } from "@/lib/types";

interface VibeSelectorProps {
  selectedVibe: string;
  onSelect: (vibeId: string) => void;
  userTier: UserTier;
}

export function VibeSelector({ selectedVibe, onSelect, userTier }: VibeSelectorProps) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-xl font-bold text-white tracking-tight tracking-wide">design vibe</h3>
        <p className="text-sm text-white/50 mt-1 tracking-tight">
          choose the visual identity for your ai&apos;s output
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {allVibes.map((vibe) => {
          const isSelected = selectedVibe === vibe.id;
          const isLocked = vibe.tier !== "free" && userTier === "free";

          return (
            <button
              key={vibe.id}
              onClick={() => !isLocked && onSelect(vibe.id)}
              disabled={isLocked}
              className={cn(
                "relative group text-left p-5 rounded-[1.5rem] border transition-all duration-300",
                isSelected
                  ? "border-[#b1ff62] bg-[#b1ff62]/[0.02] shadow-[0_0_20px_rgba(177,255,98,0.15)] scale-[1.02]"
                  : "border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.15]",
                isLocked && "opacity-50 cursor-not-allowed hover:bg-white/[0.02] hover:border-white/[0.08] scale-100"
              )}
            >
              {/* Selection indicator */}
              {isSelected && (
                <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-[#b1ff62] flex items-center justify-center shadow-[0_0_15px_rgba(177,255,98,0.4)]">
                  <Check size={14} className="text-black" strokeWidth={4} />
                </div>
              )}

              {/* Lock indicator */}
              {isLocked && (
                <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                  <Lock size={12} className="text-white/40" />
                </div>
              )}

              {/* Content */}
              <div className="flex items-start gap-4">
                <div className="text-white/80 p-2 bg-white/5 rounded-xl border border-white/10 group-hover:scale-110 group-hover:text-[#b1ff62] group-hover:border-[#b1ff62]/30 transition-all duration-300">
                  <DynamicIcon name={vibe.iconName} size={28} strokeWidth={1.5} />
                </div>
                <div className="min-w-0 pt-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-base text-white truncate tracking-tight tracking-wide">
                      {vibe.name}
                    </span>
                    {vibe.tier !== "free" && (
                      <span className="flex-shrink-0 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#b1ff62]/10 text-[#b1ff62] border border-[#b1ff62]/20">
                        pro
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-white/50 mt-1.5 line-clamp-2 tracking-tight leading-relaxed">
                    {vibe.shortDescription}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
