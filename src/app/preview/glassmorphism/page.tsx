"use client";

import { ArrowRight, Cpu } from "lucide-react";

export default function Hero() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[hsl(230,35%,7%)] py-32 h-screen shrink-0">
        {/* Background Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[hsl(174,80%,50%)]/20 rounded-full blur-[100px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[hsl(260,80%,50%)]/20 rounded-full blur-[120px] mix-blend-screen" />
        
        <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
          <div className="bg-[hsl(230,25%,12%)/0.4] backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-16 shadow-2xl">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[hsl(174,80%,50%)/0.15] text-[hsl(174,80%,50%)] border border-[hsl(174,80%,50%)/0.3] shadow-[0_0_10px_hsl(174,80%,50%/0.2)] text-sm font-semibold mb-8">
              <Cpu className="w-4 h-4 mr-2" /> AI Copilot Engine
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
              The future of interface <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(174,80%,50%)] to-white">is transparent.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-[hsl(220,15%,70%)] mb-10 max-w-2xl mx-auto leading-relaxed">
              Harness the power of layered spatial design. Build immersive web applications with our advanced glassmorphism rendering engine.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-[hsl(174,80%,50%)] text-[hsl(230,35%,7%)] hover:bg-[hsl(174,80%,43%)] px-8 py-4 font-semibold transition-all shadow-[0_0_20px_hsl(174,80%,50%/0.3)] hover:shadow-[0_0_30px_hsl(174,80%,50%/0.5)] hover:-translate-y-0.5 gap-2">
                Start Free Trial <ArrowRight className="w-5 h-5" />
              </button>
              <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-md hover:bg-white/15 text-white border border-white/10 px-8 py-4 font-medium transition-all hover:-translate-y-0.5 gap-2">
                View Components
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Components Section */}
      <section className="relative py-24 border-t border-white/5 flex-1 z-10 bg-[hsl(230,35%,7%)]/80 backdrop-blur-3xl">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">UI Components</h2>
            <p className="text-[hsl(220,15%,70%)]">Interactive elements styled with Glassmorphism.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Form Card */}
            <div className="p-8 rounded-3xl border border-white/20 bg-white/5 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:bg-white/10 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[hsl(174,80%,50%)]/20 blur-[40px] rounded-full" />
              <h3 className="text-xl font-bold text-white mb-2 relative z-10">Create Account</h3>
              <p className="text-[hsl(220,15%,70%)] text-sm mb-6 relative z-10">Join thousands of developers.</p>
              
              <div className="space-y-4 relative z-10">
                <div>
                  <label className="block text-sm font-medium text-[hsl(220,15%,90%)] mb-1.5">Email Address</label>
                  <input type="email" placeholder="you@example.com" className="w-full bg-black/20 border border-white/10 rounded-2xl px-4 py-3 text-sm text-white focus:border-[hsl(174,80%,50%)] focus:ring-1 focus:ring-[hsl(174,80%,50%)] outline-none transition-all placeholder:text-[hsl(220,15%,50%)] backdrop-blur-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[hsl(220,15%,90%)] mb-1.5">Password</label>
                  <input type="password" placeholder="••••••••" className="w-full bg-black/20 border border-white/10 rounded-2xl px-4 py-3 text-sm text-white focus:border-[hsl(174,80%,50%)] focus:ring-1 focus:ring-[hsl(174,80%,50%)] outline-none transition-all placeholder:text-[hsl(220,15%,50%)] backdrop-blur-md" />
                </div>
                <button className="w-full bg-[hsl(174,80%,50%)] text-[hsl(230,35%,7%)] text-sm font-bold px-6 py-3 rounded-2xl hover:bg-[hsl(174,80%,45%)] shadow-[0_0_15px_hsl(174,80%,50%/0.4)] transition-all hover:-translate-y-0.5 mt-2">
                  Sign Up
                </button>
              </div>
            </div>

            {/* Elements Card */}
            <div className="space-y-6">
              <div className="p-6 rounded-3xl border border-white/20 bg-white/5 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                 <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider opacity-80">Buttons & Badges</h4>
                 <div className="flex flex-wrap gap-3">
                    <button className="px-5 py-2.5 bg-[hsl(174,80%,50%)] text-[hsl(230,35%,7%)] rounded-xl text-sm font-bold hover:bg-[hsl(174,80%,45%)] transition-colors shadow-[0_0_15px_hsl(174,80%,50%/0.3)]">Primary</button>
                    <button className="px-5 py-2.5 bg-white/10 text-white rounded-xl text-sm font-medium hover:bg-white/20 border border-white/10 backdrop-blur-md transition-colors">Secondary</button>
                    <button className="px-5 py-2.5 bg-transparent text-[hsl(174,80%,50%)] hover:bg-[hsl(174,80%,50%)]/10 rounded-xl text-sm font-medium transition-colors">Ghost</button>
                 </div>
              </div>
              
              <div className="p-6 rounded-3xl border border-white/20 bg-white/5 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider opacity-80">Interactive Card</h4>
                <div className="p-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-md cursor-pointer transition-all duration-300 group hover:shadow-[0_0_20px_hsl(174,80%,50%/0.2)] hover:border-[hsl(174,80%,50%)]/30">
                  <div className="flex justify-between items-center">
                    <div>
                      <h5 className="text-white font-semibold group-hover:text-[hsl(174,80%,50%)] transition-colors">Project Alpha</h5>
                      <p className="text-xs text-[hsl(220,15%,70%)] mt-1">Updated 2 hours ago</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/50 group-hover:text-[hsl(174,80%,50%)] group-hover:translate-x-1 transition-all" />
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
