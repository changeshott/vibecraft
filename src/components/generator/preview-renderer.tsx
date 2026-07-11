"use client";

import dynamic from "next/dynamic";
import { LoadingAnimation } from "./loading-animation";
import { motion, AnimatePresence } from "framer-motion";

const previews = {
  "ai-chat-saas": dynamic(() => import("@/app/preview/ai-chat-saas/page"), {
    loading: () => <LoadingAnimation />,
  }),
  "bento-grid": dynamic(() => import("@/app/preview/bento-grid/page"), {
    loading: () => <LoadingAnimation />,
  }),
  "custom": dynamic(() => import("@/app/preview/custom/page"), {
    loading: () => <LoadingAnimation />,
  }),
  "dark-saas-pro": dynamic(() => import("@/app/preview/dark-saas-pro/page"), {
    loading: () => <LoadingAnimation />,
  }),
  "fintech-dashboard": dynamic(() => import("@/app/preview/fintech-dashboard/page"), {
    loading: () => <LoadingAnimation />,
  }),
  "glassmorphism": dynamic(() => import("@/app/preview/glassmorphism/page"), {
    loading: () => <LoadingAnimation />,
  }),
  "minimalist-clean": dynamic(() => import("@/app/preview/minimalist-clean/page"), {
    loading: () => <LoadingAnimation />,
  }),
  "neo-brutalism": dynamic(() => import("@/app/preview/neo-brutalism/page"), {
    loading: () => <LoadingAnimation />,
  }),
};

export function PreviewRenderer({ vibe }: { vibe: string }) {
  const Component = previews[vibe as keyof typeof previews];

  if (!Component) {
    return (
      <div className="flex items-center justify-center h-full text-white/50">
        Preview not available for {vibe}
      </div>
    );
  }

  return (
    <div className="w-full h-full overflow-y-auto overflow-x-hidden relative preview-container">
      {/* Hide the global noise background inside the preview */}
      <style dangerouslySetInnerHTML={{ __html: `
        .noise { display: none !important; }
        .preview-container {
          /* Scale down slightly to fit nicely within the container without breaking min-h-screen */
          transform-origin: top center;
        }
      ` }} />
      <AnimatePresence mode="wait">
        <motion.div
          key={vibe}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="min-h-full"
        >
          <Component />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
