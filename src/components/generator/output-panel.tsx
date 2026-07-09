"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Copy, Download, Check, FileText } from "lucide-react";
import { DynamicIcon } from "@/components/shared/dynamic-icon";
import { motion, AnimatePresence } from "framer-motion";
import type { GeneratedOutput } from "@/lib/types";

interface OutputPanelProps {
  outputs: GeneratedOutput[];
  activeOutput: number;
  onSetActive: (index: number) => void;
  onCopy: (text: string) => Promise<void>;
  onDownload: (content: string, fileName: string) => void;
}

export function OutputPanel({
  outputs,
  activeOutput,
  onSetActive,
  onCopy,
  onDownload,
}: OutputPanelProps) {
  const [copied, setCopied] = useState(false);

  if (outputs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center p-8 bg-black/20 rounded-2xl border border-white/5">
        <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6 shadow-inner">
          <FileText size={28} className="text-white/40" />
        </div>
        <h3 className="text-lg font-bold text-white mb-2 tracking-tight tracking-wide">
          no output yet
        </h3>
        <p className="text-sm text-white/50 max-w-sm tracking-tight leading-relaxed">
          configure your vibe, tech stack, and rules above, then click
          &quot;generate&quot; to create your ai system instructions.
        </p>
      </div>
    );
  }

  const current = outputs[activeOutput];

  const handleCopy = async () => {
    await onCopy(current.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col h-full min-h-0">
      {/* IDE tabs */}
      {outputs.length > 1 && (
        <div className="flex gap-1 p-1.5 bg-black/40 rounded-xl mb-4 border border-white/5">
          {outputs.map((output, i) => (
            <button
              key={output.ideName}
              onClick={() => onSetActive(i)}
              className={cn(
                "flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all tracking-tight tracking-wide",
                i === activeOutput
                  ? "bg-white/10 text-white shadow-sm border border-white/10"
                  : "text-white/40 hover:text-white/80 hover:bg-white/5"
              )}
            >
              <DynamicIcon name={output.iconName} size={14} strokeWidth={2.5} />
              {output.fileName}
            </button>
          ))}
        </div>
      )}

      {/* Action buttons */}
      <div className="flex gap-3 mb-4">
        <button
          onClick={handleCopy}
          className={cn(
            "flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 tracking-tight tracking-wide min-w-[120px] justify-center",
            copied
              ? "bg-[#b1ff62]/10 border-[#b1ff62]/50 text-[#b1ff62]"
              : "bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 text-white"
          )}
        >
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.div
                key="copied"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center gap-2"
              >
                <Check size={16} strokeWidth={3} />
                <span>copied!</span>
              </motion.div>
            ) : (
              <motion.div
                key="copy"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center gap-2"
              >
                <Copy size={16} />
                <span>copy</span>
              </motion.div>
            )}
          </AnimatePresence>
        </button>
        <button
          onClick={() => onDownload(current.content, current.fileName)}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-[#b1ff62] hover:bg-[#8eff00] text-black transition-all duration-300 shadow-[0_0_15px_rgba(177,255,98,0.2)] tracking-tight tracking-wide"
        >
          <Download size={16} />
          download {current.fileName}
        </button>
      </div>

      {/* Code preview */}
      <div className="flex-1 min-h-0 overflow-auto p-5 sm:p-6 bg-[#0a0a0a] rounded-2xl border border-white/5 shadow-inner relative">
        <pre className="text-[11px] sm:text-xs leading-relaxed whitespace-pre-wrap break-words text-white/80 font-mono">
          {current.content}
        </pre>
      </div>

      {/* Stats */}
      <div className="flex-none flex flex-wrap items-center gap-4 sm:gap-6 mt-4 pt-4 border-t border-white/10">
        <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
          <span className="text-[10px] text-white/40 tracking-wider uppercase font-bold">Lines</span>
          <span className="text-xs text-white/80 font-mono font-bold">{current.content.split("\n").length}</span>
        </div>
        <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
          <span className="text-[10px] text-white/40 tracking-wider uppercase font-bold">Size</span>
          <span className="text-xs text-white/80 font-mono font-bold">{(new Blob([current.content]).size / 1024).toFixed(1)} KB</span>
        </div>
        <div className="flex items-center gap-2 px-1">
          <span className="text-[10px] text-white/40 tracking-wider uppercase font-bold">File</span>
          <span className="text-xs text-[#b1ff62] font-mono font-bold">{current.fileName}</span>
        </div>
      </div>
    </div>
  );
}
