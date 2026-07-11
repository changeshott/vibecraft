"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Code, CheckCircle, AlertCircle } from "lucide-react";
import { submitCommunityVibe } from "@/lib/supabase/vibes-api";
import type { VibeDefinition } from "@/lib/types";

interface SubmitVibeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SubmitVibeModal({ isOpen, onClose }: SubmitVibeModalProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [jsonInput, setJsonInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      if (!name.trim()) throw new Error("Vibe name is required");
      if (!description.trim()) throw new Error("Description is required");
      
      let parsedJson: any;
      try {
        parsedJson = JSON.parse(jsonInput);
      } catch (err) {
        throw new Error("Invalid JSON format");
      }

      // Basic validation of VibeDefinition
      if (!parsedJson.colors || !parsedJson.typography || !parsedJson.componentPatterns) {
        throw new Error("JSON must contain 'colors', 'typography', and 'componentPatterns'");
      }

      await submitCommunityVibe(name, description, parsedJson as VibeDefinition);
      
      setSuccess(true);
      setTimeout(() => {
        onClose();
        // Reset form
        setName("");
        setDescription("");
        setJsonInput("");
        setSuccess(false);
      }, 2000);
      
    } catch (err: any) {
      setError(err.message || "Failed to submit vibe");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-[#111111] border border-[#333] rounded-2xl p-6 md:p-8 z-50 max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-2xl font-bold text-white mb-2">Submit a Community Vibe</h2>
            <p className="text-gray-400 mb-6">
              Share your custom vibe with the community. It will be reviewed before appearing in the marketplace.
            </p>

            {success ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="w-16 h-16 text-[#b1ff62] mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Vibe Submitted!</h3>
                <p className="text-gray-400">Your vibe is now pending review.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Vibe Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Neon Cyberpunk"
                    className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#333] rounded-lg text-white focus:outline-none focus:border-[#b1ff62] transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Short Description</label>
                  <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="A glowing, dark-mode design system..."
                    className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#333] rounded-lg text-white focus:outline-none focus:border-[#b1ff62] transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1 flex items-center gap-2">
                    <Code className="w-4 h-4" /> Vibe Definition (JSON)
                  </label>
                  <textarea
                    value={jsonInput}
                    onChange={(e) => setJsonInput(e.target.value)}
                    placeholder={`{\n  "colors": { ... },\n  "typography": { ... },\n  "componentPatterns": [ ... ]\n}`}
                    className="w-full h-64 px-4 py-3 bg-[#1a1a1a] border border-[#333] rounded-lg text-gray-300 font-mono text-sm focus:outline-none focus:border-[#b1ff62] transition-colors"
                    required
                  />
                </div>

                <div className="pt-4 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-2 rounded-lg text-gray-400 hover:text-white transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2 rounded-lg bg-[#b1ff62] text-black font-medium hover:bg-[#9de653] transition-colors disabled:opacity-50 flex items-center gap-2"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Vibe"}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
