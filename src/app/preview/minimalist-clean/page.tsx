"use client";

import { ArrowRight, PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative overflow-hidden bg-white pt-24 pb-32 min-h-screen flex items-center shrink-0">
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[hsl(0,0%,98%)] border border-[hsl(0,0%,90%)] text-[hsl(0,0%,40%)] text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-[hsl(221,83%,53%)] mr-2" />
            Introducing Minimalist v2.0
          </div>
          
          <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.03em] leading-[1.1] text-[hsl(0,0%,9%)] mb-6">
            Focus on what matters.<br className="hidden md:block"/> Leave the rest behind.
          </h1>
          
          <p className="text-lg md:text-xl text-[hsl(0,0%,40%)] mb-10 max-w-2xl mx-auto leading-relaxed">
            A design system that gets out of your way. Build elegant, high-performance interfaces with our refined component library.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all bg-[hsl(221,83%,53%)] text-white hover:bg-[hsl(221,83%,46%)] shadow-sm hover:shadow-md h-12 px-8 gap-2">
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
            <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all bg-white border border-[hsl(0,0%,90%)] hover:bg-[hsl(0,0%,98%)] text-[hsl(0,0%,9%)] shadow-sm h-12 px-8 gap-2">
              <PlayCircle className="w-4 h-4" /> Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Components Section */}
      <section className="relative py-24 bg-white border-t border-[hsl(0,0%,90%)] flex-1 z-10">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-[hsl(0,0%,9%)] mb-4">UI Components</h2>
            <p className="text-[hsl(0,0%,40%)]">Interactive elements styled with Minimalist Clean.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Form Card */}
            <div className="p-8 rounded-2xl border border-[hsl(0,0%,90%)] bg-white shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <h3 className="text-xl font-semibold text-[hsl(0,0%,9%)] mb-2">Create Account</h3>
              <p className="text-[hsl(0,0%,40%)] text-sm mb-6">Join thousands of developers.</p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[hsl(0,0%,20%)] mb-1.5">Email Address</label>
                  <input type="email" placeholder="you@example.com" className="w-full bg-white border border-[hsl(0,0%,90%)] rounded-lg px-4 py-2.5 text-sm text-[hsl(0,0%,9%)] focus:border-[hsl(221,83%,53%)] focus:ring-1 focus:ring-[hsl(221,83%,53%)] outline-none transition-all placeholder:text-[hsl(0,0%,60%)]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[hsl(0,0%,20%)] mb-1.5">Password</label>
                  <input type="password" placeholder="••••••••" className="w-full bg-white border border-[hsl(0,0%,90%)] rounded-lg px-4 py-2.5 text-sm text-[hsl(0,0%,9%)] focus:border-[hsl(221,83%,53%)] focus:ring-1 focus:ring-[hsl(221,83%,53%)] outline-none transition-all placeholder:text-[hsl(0,0%,60%)]" />
                </div>
                <button className="w-full bg-[hsl(221,83%,53%)] text-white text-sm font-medium px-6 py-2.5 rounded-lg hover:bg-[hsl(221,83%,46%)] transition-colors mt-2">
                  Sign Up
                </button>
              </div>
            </div>

            {/* Elements Card */}
            <div className="space-y-6">
              <div className="p-6 rounded-2xl border border-[hsl(0,0%,90%)] bg-[hsl(0,0%,98%)]">
                 <h4 className="text-xs font-semibold text-[hsl(0,0%,40%)] mb-4 uppercase tracking-wider">Buttons & Badges</h4>
                 <div className="flex flex-wrap gap-3">
                    <button className="px-4 py-2 bg-[hsl(221,83%,53%)] text-white rounded-lg text-sm font-medium hover:bg-[hsl(221,83%,46%)] transition-colors shadow-sm">Primary</button>
                    <button className="px-4 py-2 bg-white text-[hsl(0,0%,9%)] rounded-lg text-sm font-medium hover:bg-[hsl(0,0%,98%)] border border-[hsl(0,0%,90%)] transition-colors shadow-sm">Secondary</button>
                    <button className="px-4 py-2 bg-transparent text-[hsl(0,0%,40%)] hover:bg-[hsl(0,0%,94%)] hover:text-[hsl(0,0%,9%)] rounded-lg text-sm font-medium transition-colors">Ghost</button>
                 </div>
                 <div className="flex flex-wrap gap-3 mt-4">
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-[hsl(142,71%,45%)]/10 text-[hsl(142,71%,35%)] border border-[hsl(142,71%,45%)]/20">Success</span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-[hsl(346,87%,43%)]/10 text-[hsl(346,87%,43%)] border border-[hsl(346,87%,43%)]/20">Error</span>
                 </div>
              </div>
              
              <div className="p-6 rounded-2xl border border-[hsl(0,0%,90%)] bg-[hsl(0,0%,98%)]">
                <h4 className="text-xs font-semibold text-[hsl(0,0%,40%)] mb-4 uppercase tracking-wider">Interactive Card</h4>
                <div className="p-4 rounded-xl border border-[hsl(0,0%,90%)] bg-white hover:border-[hsl(221,83%,53%)] hover:shadow-sm cursor-pointer transition-all duration-200 group">
                  <div className="flex justify-between items-center">
                    <div>
                      <h5 className="text-[hsl(0,0%,9%)] font-medium">Project Alpha</h5>
                      <p className="text-xs text-[hsl(0,0%,40%)] mt-1">Updated 2 hours ago</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[hsl(0,0%,70%)] group-hover:text-[hsl(221,83%,53%)] group-hover:translate-x-1 transition-all" />
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
