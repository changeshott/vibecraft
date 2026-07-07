"use client";

import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}

export function Logo({ className, size = "md", showTagline = false }: LogoProps) {
  const sizes = {
    sm: { icon: 18, text: "text-lg" },
    md: { icon: 22, text: "text-xl" },
    lg: { icon: 28, text: "text-2xl" },
  };

  const s = sizes[size];

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 rounded-lg bg-accent/20 blur-md" />
        <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-accent to-info">
          <Sparkles size={s.icon} className="text-white" strokeWidth={2.5} />
        </div>
      </div>
      <div className="flex flex-col">
        <span className={cn("font-bold tracking-tight text-text-primary", s.text)}>
          Vibe<span className="text-gradient">Craft</span>
        </span>
        {showTagline && (
          <span className="text-xs text-text-tertiary -mt-0.5">by changeshott</span>
        )}
      </div>
    </div>
  );
}
