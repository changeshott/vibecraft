"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { motion } from "framer-motion";
import { Mail, Loader2, ArrowRight } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const supabase = createClient();

  const handleMagicLink = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setMessage({ type: "error", text: error.message });
    } else {
      setMessage({ type: "success", text: "Check your email for the magic link!" });
    }
    setIsLoading(false);
  };

  const handleGithub = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 pb-20 flex flex-col items-center justify-center bg-[#090909] relative">
        {/* Ambient background blob */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} 
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} 
          className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-white/5 rounded-full blur-[150px] mix-blend-screen pointer-events-none" 
        />
        
        <div className="w-full max-w-md px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-[2rem] border border-white/[0.08] bg-white/[0.02] backdrop-blur-[40px] shadow-2xl"
          >
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold text-white mb-3 tracking-tight">welcome back</h1>
              <p className="text-sm text-white/60 tracking-tight tracking-wide">sign in to access your vibecraft account</p>
            </div>

            {message && (
              <div
                className={cn(
                  "p-4 rounded-xl mb-6 text-sm",
                  message.type === "success"
                    ? "bg-success/10 text-success border border-success/20"
                    : "bg-error/10 text-error border border-error/20"
                )}
              >
                {message.text}
              </div>
            )}

            <form onSubmit={handleMagicLink} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-white/80 mb-2 tracking-tight tracking-wide">
                  email address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail size={18} className="text-white/40" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-11 pr-4 py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white placeholder:text-white/30 focus:border-[#b1ff62]/50 focus:ring-2 focus:ring-[#b1ff62]/20 outline-none transition-all tracking-tight"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading || !email}
                className="w-full flex items-center justify-center gap-3 py-3.5 px-4 rounded-xl text-sm font-bold bg-[#b1ff62] text-black hover:bg-[#8eff00] shadow-[0_0_20px_rgba(177,255,98,0.2)] hover:shadow-[0_0_30px_rgba(177,255,98,0.3)] transition-all disabled:opacity-50 tracking-tight tracking-wide"
              >
                {isLoading ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : (
                  <>
                    continue with email
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>

            <div className="my-8 flex items-center">
              <div className="flex-1 border-t border-white/[0.08]"></div>
              <span className="px-4 text-xs text-white/40 tracking-tight tracking-widest">or</span>
              <div className="flex-1 border-t border-white/[0.08]"></div>
            </div>

            <button
              onClick={handleGithub}
              className="w-full flex items-center justify-center gap-3 py-3.5 px-4 rounded-xl text-sm font-bold bg-transparent hover:bg-white/5 border border-white/[0.08] hover:border-white/20 text-white transition-all tracking-tight tracking-wide"
            >
              <GithubIcon className="w-5 h-5" />
              continue with github
            </button>
            
            <p className="mt-8 text-center text-xs text-white/40 tracking-tight leading-relaxed">
              by signing in, you agree to our{" "}
              <Link href="#" className="text-[#b1ff62] hover:underline">
                terms of service
              </Link>{" "}
              and{" "}
              <Link href="#" className="text-[#b1ff62] hover:underline">
                privacy policy
              </Link>
              .
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
