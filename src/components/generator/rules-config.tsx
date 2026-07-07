"use client";

import { allRules } from "@/lib/engine/templates/rules";
import { cn } from "@/lib/utils";
import { Check, Lock } from "lucide-react";
import type { UserTier } from "@/lib/types";

interface RulesConfigProps {
  selectedRules: string[];
  onToggle: (ruleId: string) => void;
  userTier: UserTier;
}

export function RulesConfig({ selectedRules, onToggle, userTier }: RulesConfigProps) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-xl font-bold text-white tracking-tight tracking-wide">ai rules</h3>
        <p className="text-sm text-white/50 mt-1 tracking-tight">
          select constraints and guidelines for your ai assistant
        </p>
      </div>

      <div className="space-y-2">
        {allRules.map((rule) => {
          const isSelected = selectedRules.includes(rule.id);
          const isLocked = rule.tier !== "free" && userTier === "free";

          return (
            <button
              key={rule.id}
              onClick={() => !isLocked && onToggle(rule.id)}
              disabled={isLocked}
              className={cn(
                "w-full flex items-start gap-4 p-4 rounded-2xl border transition-all duration-300 text-left",
                isSelected
                  ? "border-[#b1ff62]/50 bg-[#b1ff62]/5 shadow-[0_0_15px_rgba(177,255,98,0.05)]"
                  : "border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04]",
                isLocked && "opacity-40 cursor-not-allowed hover:bg-white/[0.02]"
              )}
            >
              {/* Checkbox */}
              <div
                className={cn(
                  "flex-shrink-0 mt-0.5 w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all",
                  isSelected
                    ? "bg-[#b1ff62] border-[#b1ff62] shadow-[0_0_10px_rgba(177,255,98,0.3)]"
                    : "border-white/20 bg-black/40"
                )}
              >
                {isSelected && <Check size={12} className="text-black" strokeWidth={4} />}
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-white tracking-tight tracking-wide">
                    {rule.name}
                  </span>
                  {rule.tier !== "free" && (
                    <span className="flex-shrink-0 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#b1ff62]/10 text-[#b1ff62] border border-[#b1ff62]/20">
                      pro
                    </span>
                  )}
                  {isLocked && <Lock size={12} className="text-white/40" />}
                </div>
                <p className="text-xs text-white/50 mt-1.5 tracking-tight leading-relaxed">
                  {rule.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
