"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MoreHorizontal, X, ArrowRight, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import { createClient } from "@/lib/supabase/client";
import type { User as AuthUser } from "@supabase/supabase-js";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<AuthUser | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
      }
    );

    // Initial fetch
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-6 px-4 sm:px-6">
      <nav className="relative mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          
          {/* Left: Optional extra link matching the aesthetic */}
          <div className="hidden sm:flex flex-1">
            <Link 
              href="/" 
              className="text-white/50 hover:text-white tracking-tight text-sm tracking-wide transition-colors"
            >
              about
            </Link>
          </div>

          {/* Center: Text Logo to match Hero Vibe */}
          <div className="flex-1 flex justify-start sm:justify-center">
            <Link href="/" className="relative z-10 flex items-center gap-2 group">
               <span className="tracking-tight text-xl font-bold tracking-tight text-white group-hover:opacity-80 transition-opacity">
                 vibecraftz
               </span>
            </Link>
          </div>

          {/* Right: Modern Hamburger / Menu Button */}
          <div className="flex-1 flex justify-end items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-black/20 hover:bg-white/10 text-white transition-all tracking-tight text-sm backdrop-blur-xl shadow-lg"
              aria-label="Toggle menu"
            >
              <span className="hidden sm:inline">menu</span>
              {mobileMenuOpen ? <X size={18} /> : <MoreHorizontal size={18} />}
            </button>
          </div>
        </div>

        {/* Dropdown Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, scale: 0.95, filter: "blur(10px)" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-16 right-0 w-64 rounded-3xl border border-white/[0.08] bg-black/60 backdrop-blur-[40px] shadow-2xl overflow-hidden p-3 origin-top-right"
            >
              <div className="flex flex-col gap-1">
                {siteConfig.navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3.5 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-2xl transition-all tracking-tight"
                  >
                    {link.label}
                  </Link>
                ))}
                
                <div className="h-px w-full bg-white/10 my-2" />

                {user ? (
                  <Link
                    href="/account"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3.5 text-sm font-medium text-white hover:bg-white/10 rounded-2xl transition-all tracking-tight"
                  >
                    <User size={16} className="opacity-70" />
                    account
                  </Link>
                ) : (
                  <Link
                    href="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-3.5 mt-1 text-sm font-bold bg-white text-black hover:bg-white/90 rounded-2xl transition-all tracking-tight"
                  >
                    sign in
                    <ArrowRight size={16} />
                  </Link>
                )}
                
                {!user && (
                  <Link
                    href="/generator"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-3.5 text-sm font-medium text-white border border-white/20 hover:bg-white/10 rounded-2xl transition-all tracking-tight mt-1"
                  >
                    try generator
                    <ArrowRight size={16} className="opacity-50" />
                  </Link>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
