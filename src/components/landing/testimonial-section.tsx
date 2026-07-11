"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, X, Zap } from "lucide-react";
import { useState } from "react";
import { fadeInUp } from "@/lib/animations";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { submitTestimonial } from "@/app/actions/testimonials";
import { Database } from "@/lib/database.types";

type Testimonial = Database['public']['Tables']['testimonials']['Row'];

interface TestimonialSectionProps {
  initialTestimonials?: Testimonial[];
}

export function TestimonialSection({ initialTestimonials = [] }: TestimonialSectionProps) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const fallbackTestimonials = [
    {
      name: "Alex Rivera",
      role: "Indie Hacker",
      content: "VibeCraftz completely changed how I use Cursor. My UIs went from looking like basic Bootstrap to feeling like a premium SaaS instantly. Worth every penny.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sarah Chen",
      role: "Frontend Engineer",
      content: "I was spending hours fixing the terrible CSS my AI was generating. Now I just drop the rules file in my project and it writes perfect Tailwind every single time.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Mike Johnson",
      role: "Startup Founder",
      content: "The dark mode vibe pack is insane. I generated my entire landing page with Claude Code and didn't have to touch a single hex code. Huge time saver.",
      avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    }
  ];

  const displayTestimonials = initialTestimonials.length >= 3 
    ? initialTestimonials.slice(0, 3) 
    : fallbackTestimonials;

  const handleAddClick = async () => {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      router.push("/login");
      return;
    }
    
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const result = await submitTestimonial(formData);

    if (result.error) {
      setError(result.error);
    } else if (result.success) {
      setSuccess(true);
      setTimeout(() => {
        setIsModalOpen(false);
        setSuccess(false);
      }, 3000);
    }
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 md:py-28 relative">
      <div className="absolute top-1/2 right-0 w-[40vw] h-[40vw] bg-white/5 rounded-full blur-[120px] mix-blend-screen pointer-events-none -translate-y-1/2" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            custom={0}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white"
          >
            Don't just take our word for it
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            custom={1}
            className="mt-6 text-white/50 max-w-2xl mx-auto text-lg tracking-tight"
          >
            Join thousands of developers shipping better UIs faster.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {displayTestimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              custom={i + 2}
              className="p-8 rounded-[1.5rem] border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl flex flex-col justify-between shadow-xl hover:bg-white/[0.04] transition-colors"
            >
              <div className="flex gap-1 mb-6 text-yellow-500">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p className="text-white/80 leading-relaxed tracking-tight mb-8 text-sm md:text-base font-medium">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-white/[0.08]">
                <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(t.name)}`} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-white font-bold tracking-tight">{t.name}</h4>
                  <p className="text-[#b1ff62]/80 text-xs font-bold tracking-wider uppercase mt-1">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="flex justify-center"
        >
          <motion.button
            variants={fadeInUp}
            custom={5}
            onClick={handleAddClick}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all font-medium text-sm"
          >
            Submit Your Testimonial
          </motion.button>
        </motion.div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-[#0c0c0e] border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              <h3 className="text-2xl font-bold text-white mb-2">Share your experience</h3>
              <p className="text-white/50 mb-6 text-sm">Tell us how VibeCraftz helped your workflow. We review all submissions.</p>

              {success ? (
                <div className="p-4 rounded-xl border border-[#b1ff62]/30 bg-[#b1ff62]/10 text-[#b1ff62] text-center flex flex-col items-center gap-3">
                  <Zap size={24} />
                  <p className="font-medium">Thanks for your feedback!</p>
                  <p className="text-sm opacity-80">It will be visible once approved.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3 rounded-lg border border-red-500/30 bg-red-500/10 text-red-400 text-sm">
                      {error}
                    </div>
                  )}
                  
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-white/80">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#b1ff62]/50 transition-colors"
                      placeholder="e.g. John Doe"
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-white/80">Role</label>
                    <input
                      type="text"
                      name="role"
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#b1ff62]/50 transition-colors"
                      placeholder="e.g. Frontend Developer"
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-white/80">Testimonial</label>
                    <textarea
                      name="content"
                      required
                      rows={4}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#b1ff62]/50 transition-colors resize-none"
                      placeholder="How has VibeCraftz helped you?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-[#b1ff62] text-black font-bold hover:bg-[#9de552] transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Testimonial"}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}



