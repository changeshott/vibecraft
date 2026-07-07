"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { pricingPlans } from "@/config/pricing";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { fadeInUp } from "@/lib/animations";

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 bg-[#090909] min-h-screen relative overflow-hidden">
        {/* Ambient background blob */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} 
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} 
          className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[60vw] h-[60vw] bg-[#b1ff62]/5 rounded-full blur-[150px] mix-blend-screen pointer-events-none" 
        />
        
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white tracking-tight">
              simple, transparent <span className="text-white/40">pricing</span>
            </h1>
            <p className="mt-6 text-lg text-white/60 max-w-xl mx-auto tracking-tight">
              start free with 3 design vibes. upgrade when you need the full collection.
            </p>
          </motion.div>

          {/* Pricing cards */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={plan.id}
                variants={fadeInUp}
                custom={i}
                className={cn(
                  "relative p-8 rounded-[2rem] border transition-all duration-300 backdrop-blur-md",
                  plan.highlighted
                    ? "border-[#b1ff62]/30 bg-[#b1ff62]/[0.02] shadow-[0_0_30px_rgba(177,255,98,0.1)] scale-[1.02]"
                    : "border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04]"
                )}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#b1ff62] text-black text-xs font-bold shadow-[0_0_20px_rgba(177,255,98,0.3)] tracking-tight tracking-wide">
                    most popular
                  </div>
                )}

                <h3 className="text-xl font-bold text-white tracking-tight tracking-wide">{plan.name}</h3>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white tracking-tight">
                    ${plan.price}
                  </span>
                  {plan.period === "monthly" && (
                    <span className="text-sm text-white/50 tracking-tight">/month</span>
                  )}
                  {plan.period === "one-time" && plan.price > 0 && (
                    <span className="text-sm text-white/50 tracking-tight">one-time</span>
                  )}
                </div>

                <p className="mt-4 text-sm text-white/60 min-h-[40px] tracking-tight leading-relaxed">
                  {plan.description}
                </p>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-white/70 tracking-tight"
                    >
                      <Check size={18} className="text-[#b1ff62] flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.price === 0 ? "/generator" : "#"}
                  className={cn(
                    "mt-10 flex items-center justify-center gap-3 w-full py-3.5 rounded-xl text-sm font-bold transition-all duration-300 tracking-tight tracking-wide",
                    plan.highlighted
                      ? "bg-[#b1ff62] hover:bg-[#8eff00] text-black shadow-[0_0_20px_rgba(177,255,98,0.2)] hover:shadow-[0_0_30px_rgba(177,255,98,0.3)] hover:-translate-y-0.5"
                      : "bg-white/5 hover:bg-white/10 border border-white/10 text-white"
                  )}
                >
                  {plan.price === 0 ? "get started free" : "upgrade now"}
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* FAQ note */}
          <div className="mt-20 text-center">
            <p className="text-sm text-white/50 tracking-tight">
              questions? check our{" "}
              <Link href="/#faq" className="text-[#b1ff62] hover:underline">
                faq
              </Link>{" "}
              or reach out on{" "}
              <a
                href="https://x.com/changeshott"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b1ff62] hover:underline"
              >
                twitter/x
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
