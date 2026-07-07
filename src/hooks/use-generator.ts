"use client";

import { useState, useCallback } from "react";
import type { GeneratorConfig, GeneratedOutput, StackCategory, UserTier } from "@/lib/types";
import { generateSystemInstructions } from "@/lib/engine/generator";

const defaultConfig: GeneratorConfig = {
  vibe: "dark-saas-pro",
  stacks: {
    framework: "nextjs-15",
    styling: "tailwindcss-4",
    components: "shadcn-ui",
    icons: "lucide-react",
    animation: "framer-motion",
    database: "supabase",
    auth: "supabase-auth",
    deploy: "vercel",
  },
  rules: ["anti-hallucination", "architecture", "responsive"],
  targetIdes: ["cursor"],
};

export function useGenerator() {
  const [config, setConfig] = useState<GeneratorConfig>(defaultConfig);
  const [outputs, setOutputs] = useState<GeneratedOutput[]>([]);
  const [activeOutput, setActiveOutput] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // For MVP, all users are "free" tier
  const userTier: UserTier = "free";

  const updateVibe = useCallback((vibeId: string) => {
    setConfig((prev) => ({ ...prev, vibe: vibeId }));
    setOutputs([]);
  }, []);

  const updateStack = useCallback((category: StackCategory, stackId: string) => {
    setConfig((prev) => ({
      ...prev,
      stacks: { ...prev.stacks, [category]: stackId },
    }));
    setOutputs([]);
  }, []);

  const toggleRule = useCallback((ruleId: string) => {
    setConfig((prev) => ({
      ...prev,
      rules: prev.rules.includes(ruleId)
        ? prev.rules.filter((r) => r !== ruleId)
        : [...prev.rules, ruleId],
    }));
    setOutputs([]);
  }, []);

  const toggleIde = useCallback((ideId: string) => {
    setConfig((prev) => ({
      ...prev,
      targetIdes: prev.targetIdes.includes(ideId)
        ? prev.targetIdes.filter((i) => i !== ideId)
        : [...prev.targetIdes, ideId],
    }));
    setOutputs([]);
  }, []);

  const generate = useCallback(() => {
    setIsGenerating(true);
    setError(null);

    try {
      const result = generateSystemInstructions({ config, userTier });
      setOutputs(result);
      setActiveOutput(0);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Generation failed");
    } finally {
      setIsGenerating(false);
    }
  }, [config, userTier]);

  const copyToClipboard = useCallback(async (text: string) => {
    await navigator.clipboard.writeText(text);
  }, []);

  const downloadFile = useCallback((content: string, fileName: string) => {
    const blob = new Blob([content], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
  }, []);

  return {
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
  };
}
