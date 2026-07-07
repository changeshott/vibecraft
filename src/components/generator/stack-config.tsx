"use client";

import { allStacks, stackCategories } from "@/lib/engine/stacks";
import { cn } from "@/lib/utils";
import type { StackCategory } from "@/lib/types";
import { DynamicIcon } from "@/components/shared/dynamic-icon";

interface StackConfigProps {
  selectedStacks: Record<StackCategory, string>;
  onSelect: (category: StackCategory, stackId: string) => void;
}

export function StackConfig({ selectedStacks, onSelect }: StackConfigProps) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-xl font-bold text-white tracking-tight tracking-wide">tech stack</h3>
        <p className="text-sm text-white/50 mt-1 tracking-tight">
          configure the technologies your ai should use
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {stackCategories.map((category) => {
          const options = allStacks.filter((s) => s.category === category.id);
          if (options.length === 0) return null;

          const selectedId = selectedStacks[category.id as StackCategory];

          return (
            <div key={category.id} className="space-y-2">
              <label className="flex items-center gap-1.5 text-xs font-bold text-white/40 tracking-tight tracking-widest">
                {category.label}
                {category.required && (
                  <span className="text-[#b1ff62]">*</span>
                )}
              </label>
              <div className="relative">
                <select
                  value={selectedId || ""}
                  onChange={(e) =>
                    onSelect(category.id as StackCategory, e.target.value)
                  }
                  className={cn(
                    "w-full appearance-none",
                    "bg-white/[0.03] border border-white/[0.08] rounded-xl py-3.5 pr-10",
                    selectedId ? "pl-11" : "pl-4",
                    "text-sm text-white/90 tracking-tight",
                    "focus:border-[#b1ff62]/50 focus:ring-2 focus:ring-[#b1ff62]/20 outline-none",
                    "transition-all duration-300 cursor-pointer"
                  )}
                >
                  {!category.required && (
                    <option value="" className="bg-[#090909] text-white">none</option>
                  )}
                  {options.map((stack) => (
                    <option key={stack.id} value={stack.id} className="bg-[#090909] text-white">
                      {stack.name}
                    </option>
                  ))}
                </select>
                
                {/* Selected Icon */}
                {selectedId && (() => {
                  const selectedStack = options.find(s => s.id === selectedId);
                  if (!selectedStack) return null;
                  return (
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#b1ff62]">
                      <DynamicIcon name={selectedStack.iconName} size={18} strokeWidth={2} />
                    </div>
                  );
                })()}

                {/* Custom dropdown arrow */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
