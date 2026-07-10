"use client";

import { useState, useRef } from "react";
import { Upload, Palette, Wand2 } from "lucide-react";
import { generateVibeFromColor, extractColorFromImage } from "@/lib/color-utils";
import type { VibeDefinition } from "@/lib/types";
import { cn } from "@/lib/utils";

interface CustomVibeBuilderProps {
  onCustomVibeGenerated: (vibe: VibeDefinition) => void;
  isActive: boolean;
}

export function CustomVibeBuilder({ onCustomVibeGenerated, isActive }: CustomVibeBuilderProps) {
  const [hex, setHex] = useState("#");
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setHex(val);
    
    // Basic validation for 6-char hex
    if (/^#[0-9A-Fa-f]{6}$/.test(val)) {
      handleGenerate(val);
    }
  };

  const handleGenerate = (colorHex: string) => {
    try {
      const customVibe = generateVibeFromColor(colorHex);
      onCustomVibeGenerated(customVibe);
      setError(null);
    } catch (err) {
      setError("Invalid color format.");
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsProcessing(true);
    setError(null);

    try {
      const extractedHex = await extractColorFromImage(file);
      setHex(extractedHex);
      handleGenerate(extractedHex);
    } catch (err) {
      setError("Could not process image.");
      console.error(err);
    } finally {
      setIsProcessing(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  return (
    <div className={cn(
      "mb-8 p-6 rounded-[2rem] border transition-all duration-300",
      isActive 
        ? "border-[#b1ff62] bg-[#b1ff62]/[0.02] shadow-[0_0_20px_rgba(177,255,98,0.1)]"
        : "border-white/[0.08] bg-white/[0.02]"
    )}>
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
        <div className="flex-1">
          <h4 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
            <Wand2 size={18} className="text-[#b1ff62]" />
            custom brand vibe
          </h4>
          <p className="text-sm text-white/50 mt-1 tracking-tight">
            paste a hex code or upload your logo to auto-generate a custom UI palette.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          {/* Hex Input */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Palette size={16} className="text-white/40 group-focus-within:text-white/80 transition-colors" />
            </div>
            <input
              type="text"
              value={hex}
              onChange={handleHexChange}
              placeholder="#FF5733"
              className="w-full sm:w-32 bg-black/50 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm font-mono text-white placeholder-white/20 focus:outline-none focus:border-[#b1ff62]/50 transition-colors"
            />
            {/* Color preview dot */}
            {/^#[0-9A-Fa-f]{6}$/.test(hex) && (
              <div 
                className="absolute inset-y-0 right-3 my-auto w-4 h-4 rounded-full border border-white/20"
                style={{ backgroundColor: hex }}
              />
            )}
          </div>

          <div className="text-white/20 hidden sm:flex items-center text-sm font-mono">or</div>

          {/* File Upload */}
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={isProcessing}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-sm font-medium text-white/80 disabled:opacity-50"
          >
            {isProcessing ? (
              <span className="animate-pulse">processing...</span>
            ) : (
              <>
                <Upload size={16} />
                upload logo
              </>
            )}
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept="image/*"
            className="hidden"
          />
        </div>
      </div>
      
      {error && (
        <p className="mt-4 text-xs text-error/80">{error}</p>
      )}
    </div>
  );
}
