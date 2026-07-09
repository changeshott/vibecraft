"use client";

import { useState, useCallback, useEffect } from "react";
import type { GeneratorConfig, GeneratedOutput, StackCategory, UserTier } from "@/lib/types";
import { generateSystemInstructions } from "@/lib/engine/generator";
import { allVibes } from "@/lib/engine/vibes";

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
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const vibeParam = urlParams.get("vibe");
      if (vibeParam && allVibes.some(v => v.id === vibeParam)) {
        setConfig((prev) => ({ ...prev, vibe: vibeParam }));
      }
    }
  }, []);
  const [activeOutput, setActiveOutput] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // For MVP, all users are "pro" tier temporarily to disable restrictions
  const userTier: UserTier = "pro";

  const updateVibe = useCallback((vibeId: string) => {
    setConfig((prev) => ({ ...prev, vibe: vibeId }));
    setOutputs([]);
  }, []);

  const updateStack = useCallback((category: StackCategory, stackId: string) => {
    setConfig((prev) => {
      const newStacks = { ...prev.stacks, [category]: stackId };
      
      // Auto-select Supabase Auth if Supabase Database is selected
      if (category === "database" && stackId === "supabase") {
        newStacks.auth = "supabase-auth";
      }
      
      return {
        ...prev,
        stacks: newStacks,
      };
    });
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
    setConfig((prev) => {
      const isAdding = !prev.targetIdes.includes(ideId);

      if (isAdding && (userTier as string) === "free" && prev.targetIdes.length >= 1) {
        setError("Free tier is limited to 1 Target IDE at a time. Upgrade to Pro to generate multiple files simultaneously.");
        return prev;
      }

      setError(null);
      return {
        ...prev,
        targetIdes: isAdding
          ? [...prev.targetIdes, ideId]
          : prev.targetIdes.filter((i) => i !== ideId),
      };
    });
    setOutputs([]);
  }, [userTier]);

  const generate = useCallback(async () => {
    setIsGenerating(true);
    setError(null);

    // Artificial delay for UX (feels like it's thinking)
    await new Promise((resolve) => setTimeout(resolve, 5000));

    try {
      if (config.targetIdes.length === 0) {
        throw new Error("Please select at least one Target IDE.");
      }

      const result = generateSystemInstructions({ config, userTier });
      setOutputs(result);
      setActiveOutput(0);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Generation failed");
      return false;
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
