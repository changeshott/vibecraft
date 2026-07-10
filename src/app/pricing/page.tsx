"use client";

import { motion } from "framer-motion";
import { Check, Palette, Layers, Code2, Star } from "lucide-react";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { fadeInUp } from "@/lib/animations";

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 bg-[#090909] min-h-screen relative">
        {/* Ambient background blob */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} 
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} 
          className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[60vw] h-[60vw] bg-[#b1ff62]/5 rounded-full blur-[150px] mix-blend-screen pointer-events-none" 
        />
        
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              simple, transparent <span className="text-white/40">pricing</span>
            </h1>
            <p className="text-lg text-white/60 max-w-xl mx-auto tracking-tight">
              start free with 3 design vibes. upgrade when you need the full collection.
            </p>
          </div>

          {/* Free Tier Banner */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={0}
            className="mb-8 rounded-[1.5rem] border border-white/[0.08] bg-[#111] overflow-hidden flex flex-col md:flex-row shadow-2xl relative group"
          >
            <div className="p-8 md:p-12 flex-1 flex flex-col justify-center relative z-20">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight">Start with basic vibes</h3>
              <div className="flex flex-wrap items-center gap-8">
                <div className="flex items-center gap-2 text-white/70 text-sm font-medium tracking-tight">
                  <Palette size={18} className="text-[#b1ff62]/60" />
                  3 basic vibes
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm font-medium tracking-tight">
                  <Layers size={18} className="text-[#b1ff62]/60" />
                  Next.js + Tailwind
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm font-medium tracking-tight">
                  <Code2 size={18} className="text-[#b1ff62]/60" />
                  Cursor IDE only
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-[45%] relative h-64 md:h-auto overflow-hidden bg-[#1a1a1a]">
               {/* Gradient overlay to fade into image mosaic */}
               <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#111] to-transparent z-10 hidden md:block" />
               
               {/* Abstract mosaic representation */}
               <div className="absolute inset-0 opacity-[0.15] grid grid-cols-4 grid-rows-2 gap-1 p-2 transform scale-110 group-hover:scale-100 transition-transform duration-1000">
                 {[...Array(8)].map((_, i) => (
                   <div key={i} className="bg-[#b1ff62] rounded shadow-inner" style={{ opacity: i % 2 === 0 ? 0.7 : 0.2 }} />
                 ))}
               </div>
               
               <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/20 backdrop-blur-[2px]">
                 <Link href="/generator" className="px-8 py-3.5 bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 text-xs font-bold uppercase tracking-widest rounded-sm shadow-2xl transition-all hover:scale-105 active:scale-95">
                   Start For Free
                 </Link>
               </div>
            </div>
          </motion.div>

          {/* Paid Tiers Grid */}
          <motion.div 
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Card 1 */}
            <PricingCard 
               delay={1}
               title="Starter"
               price="$19"
               period="one-time"
               badge="1 Premium Pack"
               desc="Unlock 1 premium vibe pack with full stack options and no watermarks."
               features={[
                 "1 premium vibe pack",
                 "All tech stack options",
                 "All IDE formats",
                 "No watermark"
               ]}
               buttonType="secondary"
               href="/api/checkout?variant=starter"
            />
            {/* Card 2 */}
            <PricingCard 
               delay={2}
               title="Pro"
               badgeTitle="Most Popular"
               badgeColor="text-[#b1ff62]"
               price="$39"
               period="one-time"
               badge="Lifetime Access"
               desc="Full access to all current vibes and the complete generator."
               features={[
                 "All design vibes",
                 "All tech stack options",
                 "All IDE formats",
                 "Priority support"
               ]}
               buttonType="primary"
               href="/api/checkout?variant=pro"
            />
            {/* Card 3 */}
            <PricingCard 
               delay={3}
               title="Pro+"
               price="$9"
               period="/mo"
               badge="Monthly Updates"
               desc="Everything in Pro, plus monthly new vibes and private community."
               features={[
                 "Everything in Pro",
                 "Monthly new vibe packs",
                 "Community Discord",
                 "Vote on next vibes"
               ]}
               buttonType="secondary"
               href="/api/checkout?variant=pro-plus"
            />
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

interface PricingCardProps {
  delay: number;
  title: string;
  badgeTitle?: string;
  badgeColor?: string;
  price: string;
  period?: string;
  originalPrice?: string;
  badge: string;
  desc: string;
  features: string[];
  buttonType: "primary" | "secondary";
  href: string;
}

function PricingCard({ delay, title, badgeTitle, badgeColor, price, period, originalPrice, badge, desc, features, buttonType, href }: PricingCardProps) {
  return (
    <motion.div 
      variants={fadeInUp}
      custom={delay}
      className={cn(
        "p-8 lg:p-10 rounded-[1.5rem] border flex flex-col h-full shadow-2xl transition-colors duration-300 relative",
        buttonType === 'primary' 
          ? "border-[#b1ff62]/30 bg-[#b1ff62]/[0.02] hover:bg-[#b1ff62]/[0.05]" 
          : "border-white/[0.08] bg-[#111] hover:bg-white/[0.04]"
      )}
    >
      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 tracking-tight">
        {title} 
        {badgeTitle && (
          <span className={cn(
            "text-[10px] font-bold uppercase tracking-widest ml-1 bg-[#b1ff62]/10 px-2 py-0.5 rounded-sm border border-[#b1ff62]/20",
            badgeColor
          )}>
            {badgeTitle}
          </span>
        )}
      </h3>
      
      <div className="flex items-end gap-1 mb-4">
         <span className="text-3xl lg:text-4xl font-bold text-white tracking-tight">{price}</span>
         {period && <span className="text-sm text-white/40 tracking-tight mb-2 font-medium">{period}</span>}
         {originalPrice && <span className="text-lg text-white/30 line-through font-bold mb-1 ml-2">{originalPrice}</span>}
      </div>
      
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-[11px] text-white/70 font-bold tracking-widest mb-6 w-fit uppercase">
         <Star size={12} className={buttonType === 'primary' ? "text-[#b1ff62]" : "text-white/40"} />
         {badge}
      </div>
      
      <p className="text-sm text-white/50 leading-relaxed mb-8 flex-grow tracking-tight">
        {desc}
      </p>
      
      <Link href={href} className={cn(
        "w-full py-4 rounded-md text-xs font-bold uppercase tracking-widest transition-all mb-2 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center",
        buttonType === 'primary' 
          ? 'bg-[#b1ff62] hover:bg-[#8eff00] text-black shadow-[0_0_30px_rgba(177,255,98,0.25)] border border-[#b1ff62]/50' 
          : 'bg-white/5 hover:bg-white/10 border border-white/10 text-white shadow-xl'
      )}>
        {title === 'Pro+' ? 'Start 7-Day Free Trial' : 'Get Started'}
      </Link>
      
      {title === 'Pro+' ? (
        <p className="text-[10px] text-center text-white/40 mb-6 tracking-tight">cancel anytime. no charge for 7 days.</p>
      ) : (
        <div className="mb-10" />
      )}

      <div className="space-y-5 pt-8 border-t border-white/[0.08]">
        {features.map((feat: string, i: number) => (
          <div key={i} className="flex items-center gap-4 text-white/80 text-sm font-medium tracking-tight">
             <Check size={18} className={buttonType === 'primary' ? "text-[#b1ff62]" : "text-white/40"} />
             {feat}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
