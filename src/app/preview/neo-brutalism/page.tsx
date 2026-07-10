"use client";

import { ArrowRight, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative overflow-hidden bg-[#e0e7ff] pt-32 pb-24 border-b-4 border-black min-h-screen flex items-center shrink-0">
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

      {/* Components Section */}
      <section className="relative py-24 bg-[#e0e7ff] flex-1 z-10 border-b-4 border-black">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-12 border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center">
            <h2 className="text-4xl font-black uppercase text-black mb-2 tracking-tighter">UI Components</h2>
            <p className="text-xl font-bold text-black border-l-4 border-[#c084fc] pl-4 inline-block">Interactive elements styled with Neo Brutalism.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Form Card */}
            <div className="p-8 border-4 border-black bg-[#fef08a] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all relative overflow-hidden group">
              <h3 className="text-2xl font-black uppercase text-black mb-2">Create Account</h3>
              <p className="text-black font-bold mb-6">Join the revolution.</p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold uppercase text-black mb-1.5">Email Address</label>
                  <input type="email" placeholder="you@example.com" className="w-full bg-white border-4 border-black p-3 text-black font-bold focus:bg-[#fbcfe8] focus:outline-none focus:ring-0 transition-all placeholder:text-gray-500" />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase text-black mb-1.5">Password</label>
                  <input type="password" placeholder="••••••••" className="w-full bg-white border-4 border-black p-3 text-black font-bold focus:bg-[#fbcfe8] focus:outline-none focus:ring-0 transition-all placeholder:text-gray-500" />
                </div>
                <button className="w-full bg-[#c084fc] text-black text-lg font-black uppercase tracking-wider p-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all mt-4">
                  Sign Up
                </button>
              </div>
            </div>

            {/* Elements Card */}
            <div className="space-y-8">
              <div className="p-6 border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                 <h4 className="text-lg font-black text-black mb-4 uppercase tracking-tighter bg-[#fbcfe8] inline-block px-2 border-2 border-black">Buttons & Badges</h4>
                 <div className="flex flex-wrap gap-4 mt-2">
                    <button className="px-6 py-3 bg-[#c084fc] text-black font-black uppercase border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all">Primary</button>
                    <button className="px-6 py-3 bg-white text-black font-black uppercase border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all">Secondary</button>
                 </div>
                 <div className="flex flex-wrap gap-4 mt-6">
                    <span className="px-3 py-1 font-bold text-black bg-[#4ade80] border-2 border-black uppercase text-sm">Success</span>
                    <span className="px-3 py-1 font-bold text-black bg-[#f87171] border-2 border-black uppercase text-sm">Error</span>
                 </div>
              </div>
              
              <div className="p-4 border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#c084fc] cursor-pointer transition-all group">
                <div className="flex justify-between items-center">
                  <div>
                    <h5 className="text-black font-black uppercase text-xl">Project Alpha</h5>
                    <p className="text-sm font-bold text-black mt-1">Updated 2 hours ago</p>
                  </div>
                  <div className="w-10 h-10 bg-white border-4 border-black flex items-center justify-center group-hover:bg-[#fef08a] transition-all">
                    <ArrowRight className="w-5 h-5 text-black" strokeWidth={3} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
