"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, ArrowRight, Loader2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

interface EmailGateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  title?: string;
  description?: string;
}

export function EmailGateModal({
  isOpen,
  onClose,
  onSuccess,
  title = "Unlock Your Download",
  description = "Enter your email to download your generated instructions and get a taste of Pro vibes.",
}: EmailGateModalProps) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const supabase = createClient();
      
      // Save lead to Supabase
      const { error: insertError } = await supabase
        .from("leads")
        .insert([{ email, source: "download_gate" }]);

      if (insertError && insertError.code !== "23505") { // Ignore unique constraint violation if they already exist
        throw new Error(insertError.message);
      }
      
      // We also trigger the edge function here directly for simplicity,
      // though typically this could be a Database Webhook.
      // If we use Webhook, we don't need this step.
      await supabase.functions.invoke("send-drip-email", {
        body: { email }
      }).catch(console.error); // Best effort, don't block user if email fails to send

      // Store in local storage so we don't ask again this session
      localStorage.setItem("vibecraft_lead_email", email);
      
      onSuccess();
    } catch (err: any) {
      console.error("Failed to submit email:", err);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
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
          <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#0a0a0a] border border-white/10 p-8 rounded-3xl w-full max-w-md shadow-2xl pointer-events-auto relative overflow-hidden"
            >
              {/* Decorative background glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[150px] bg-[#b1ff62]/10 blur-[80px] rounded-[100%] pointer-events-none" />

              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
              >
                <X size={20} />
              </button>

              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[#b1ff62]/10 border border-[#b1ff62]/20 flex items-center justify-center">
                  <Mail size={32} className="text-[#b1ff62]" />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-center text-white mb-2 tracking-tight">
                {title}
              </h2>
              <p className="text-center text-white/60 text-sm mb-8 leading-relaxed">
                {description}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError(null);
                      }}
                      placeholder="you@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#b1ff62]/50 focus:border-transparent transition-all pr-12"
                      required
                    />
                  </div>
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-xs mt-2 font-medium px-1"
                    >
                      {error}
                    </motion.p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-2 bg-[#b1ff62] hover:bg-[#8eff00] text-black font-bold rounded-xl py-3 px-4 transition-all duration-300 shadow-[0_0_15px_rgba(177,255,98,0.2)] hover:shadow-[0_0_25px_rgba(177,255,98,0.4)] disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isLoading ? (
                    <Loader2 size={18} className="animate-spin" />
                  ) : (
                    <>
                      <span>Continue to Download</span>
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
                <p className="text-[10px] text-center text-white/40 mt-4 leading-relaxed px-4">
                  By continuing, you agree to receive follow-up emails. We promise not to spam.
                </p>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
