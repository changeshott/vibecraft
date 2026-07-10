"use client";

import { useState, useCallback, useEffect } from "react";
import type { GeneratorConfig, GeneratedOutput, StackCategory, UserTier, VibeDefinition } from "@/lib/types";
import { generateSystemInstructions } from "@/lib/engine/generator";
import { allVibes } from "@/lib/engine/vibes";

const defaultConfig: GeneratorConfig = {
  vibe: "minimalist-clean",
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
  const [userTier, setUserTier] = useState<UserTier>("free");
  const [activeOutput, setActiveOutput] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    
    const initialize = async () => {
      let currentTier: UserTier = "free";
      
      try {
        const { createClient } = await import("@/lib/supabase/client");
        const supabase = createClient();
        const { data: { session } } = await supabase.auth.getSession();
        
        if (session?.user) {
          const { data } = await supabase
            .from("profiles")
            .select("tier")
            .eq("id", session.user.id)
            .single();
            
          if (data && (data.tier === "pro" || data.tier === "free")) {
            currentTier = data.tier as UserTier;
          }
        }
      } catch (err) {
        console.error("Failed to fetch tier:", err);
      }
      
      if (isMounted) {
        setUserTier(currentTier);
        
        // After determining tier, check URL for vibe param
        if (typeof window !== "undefined") {
          const urlParams = new URLSearchParams(window.location.search);
          const vibeParam = urlParams.get("vibe");
          
          if (vibeParam) {
            const vibeObj = allVibes.find(v => v.id === vibeParam);
            if (vibeObj && (vibeObj.tier === "free" || currentTier === "pro")) {
              setConfig((prev) => ({ ...prev, vibe: vibeParam }));
            }
          }
        }
      }
    };
    
    initialize();
    
    return () => {
      isMounted = false;
    };
  }, []);

  const updateVibe = useCallback((vibeId: string) => {
    setConfig((prev) => ({ ...prev, vibe: vibeId, customVibeObj: undefined }));
    setOutputs([]);
  }, []);

  const setCustomVibe = useCallback((vibe: VibeDefinition) => {
    setConfig((prev) => ({ ...prev, vibe: "custom", customVibeObj: vibe }));
    setOutputs([]);
  }, []);

  const updateStack = useCallback((category: StackCategory, stackId: string) => {
    setConfig((prev) => {
      const newStacks = { ...prev.stacks, [category]: stackId };
      
      // Auto-select Auth based on Database
      if (category === "database") {
        if (stackId === "supabase") {
          newStacks.auth = "supabase-auth";
        } else if (stackId === "firebase-db") {
          newStacks.auth = "firebase-auth";
        }
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
    setCustomVibe,
    updateStack,
    toggleRule,
    toggleIde,
    generate,
    copyToClipboard,
    downloadFile,
  };
}
