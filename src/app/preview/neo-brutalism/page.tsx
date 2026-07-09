"use client";

import { ArrowRight, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#e0e7ff] pt-32 pb-24 border-b-4 border-black min-h-screen flex items-center">
      {/* Brutalist decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#fef08a] border-4 border-black rounded-full mix-blend-multiply opacity-50 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#fbcfe8] border-4 border-black mix-blend-multiply opacity-50" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
      
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="inline-flex items-center px-4 py-2 bg-white border-4 border-black text-black font-bold uppercase tracking-widest text-sm mb-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all cursor-pointer">
          <Terminal className="w-4 h-4 mr-2" /> VibeOS Beta Live
        </div>
        
        <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] text-black mb-8 drop-shadow-[8px_8px_0px_#fef08a]">
          Build.<br />
          Break.<br />
          <span className="text-[#c084fc] drop-shadow-[8px_8px_0px_#000]">Repeat.</span>
        </h1>
        
        <p className="text-xl md:text-3xl font-medium text-black mb-12 max-w-2xl leading-snug border-l-8 border-[#c084fc] pl-6 bg-white/50 p-4">
          The unapologetic UI kit for developers who are tired of boring, perfectly rounded corners.
        </p>

        <div className="flex flex-col sm:flex-row items-start gap-6">
          <button className="w-full sm:w-auto inline-flex items-center justify-center bg-[#c084fc] text-black px-10 py-5 font-bold uppercase tracking-wider text-lg border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[8px] hover:translate-y-[8px] transition-all">
            Clone Repo <ArrowRight className="w-6 h-6 ml-3" strokeWidth={3} />
          </button>
          <button className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-black px-10 py-5 font-bold uppercase tracking-wider text-lg border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[8px] hover:translate-y-[8px] transition-all">
            Read Docs
          </button>
        </div>
      </div>
    </section>
  );
}
