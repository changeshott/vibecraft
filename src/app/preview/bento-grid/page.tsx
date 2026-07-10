"use client";

import { ArrowUpRight, Mail, Globe } from "lucide-react";

export default function Hero() {
  return (
    <div className="flex flex-col min-h-screen bg-[hsl(220,14%,96%)]">
      <section className="relative overflow-hidden min-h-screen py-12 md:py-24 flex items-center justify-center shrink-0">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-auto md:auto-rows-[320px]">
          
          {/* 1. Large Left Card */}
          <div className="md:col-span-2 md:row-span-2 bg-white rounded-[2.5rem] border border-[hsl(220,13%,91%)] p-8 md:p-12 shadow-sm flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
            <div>
              <div className="text-[hsl(220,10%,40%)] font-medium text-lg mb-8">
                Hi, I am Kamil,<br/>
                Currently UX/ UI Designer @ STS
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[4.2rem] font-bold tracking-tight text-[hsl(220,14%,10%)] leading-[1.05] mb-10">
                Polish-originated UX designer, crafting <span className="text-[hsl(24,95%,53%)]">products, interactions</span> and <span className="text-[hsl(24,95%,53%)]">stories.</span>
              </h1>
              <div className="inline-flex items-center gap-3 text-[hsl(220,14%,10%)] font-semibold bg-[hsl(220,14%,96%)] px-4 py-2 rounded-full border border-[hsl(220,13%,91%)]">
                <span className="w-2.5 h-2.5 rounded-full bg-[hsl(142,71%,35%)] shadow-[0_0_8px_hsl(142,71%,35%)] animate-pulse" /> 
                Available for a job
              </div>
            </div>
            
            <div className="flex flex-wrap items-center justify-between mt-12 pt-8 border-t border-[hsl(220,13%,91%)] gap-4">
              <div className="flex gap-4">
                <button className="bg-[hsl(220,14%,10%)] hover:bg-[hsl(220,14%,20%)] text-white px-8 py-4 rounded-full font-bold transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5">
                  Contact
                </button>
                <button className="bg-white hover:bg-[hsl(220,14%,96%)] text-[hsl(220,14%,10%)] border-2 border-[hsl(220,13%,91%)] px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2 hover:-translate-y-0.5 shadow-sm">
                  Resume <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
              <div className="flex gap-3">
                <a href="#" className="w-14 h-14 flex items-center justify-center rounded-full bg-[hsl(220,14%,96%)] hover:bg-[hsl(220,13%,91%)] transition-colors">
                  <Mail className="w-6 h-6 text-[hsl(220,14%,10%)]" />
                </a>
                <a href="#" className="w-14 h-14 flex items-center justify-center rounded-full bg-[hsl(220,14%,96%)] hover:bg-[hsl(220,13%,91%)] transition-colors">
                  <Globe className="w-6 h-6 text-[hsl(220,14%,10%)]" />
                </a>
              </div>
            </div>
          </div>

          {/* 2. Middle Top Card (Image) */}
          <div className="md:col-span-1 md:row-span-1 bg-[hsl(220,13%,91%)] rounded-[2.5rem] overflow-hidden relative group shadow-sm">
             <img 
               src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80" 
               alt="Cat" 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
             />
          </div>

          {/* 3. Middle Bottom Card (Works) */}
          <div className="md:col-span-1 md:row-span-1 bg-white rounded-[2.5rem] border border-[hsl(220,13%,91%)] p-8 shadow-sm flex flex-col justify-between group cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div>
              <h2 className="text-3xl font-bold text-[hsl(220,14%,10%)] mb-4">Works</h2>
              <p className="text-[hsl(220,10%,40%)] leading-relaxed font-medium">Have a glimpse on selected works of mine.</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-[hsl(220,14%,96%)] flex items-center justify-center group-hover:bg-[hsl(24,95%,53%)] group-hover:text-white text-[hsl(220,14%,10%)] transition-colors mt-8">
               <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>

          {/* 4. Right Tall Card (About Me) */}
          <div className="md:col-span-1 md:row-span-2 bg-[hsl(220,14%,10%)] rounded-[2.5rem] p-8 shadow-sm flex flex-col justify-between relative overflow-hidden group cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-[hsl(220,14%,20%)]">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">About me</h2>
              <p className="text-[hsl(220,8%,55%)] font-medium leading-relaxed">Have a glimpse on selected stories of mine.</p>
            </div>

            {/* Overlapping Images representation */}
            <div className="relative flex-1 min-h-[200px] mt-8 z-10 pointer-events-none">
               <div className="absolute top-10 right-0 w-36 h-48 rounded-2xl overflow-hidden shadow-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500 border-4 border-[hsl(220,14%,10%)]">
                 <img 
                   src="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80" 
                   alt="Design" 
                   className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all" 
                 />
               </div>
               <div className="absolute bottom-10 left-0 w-36 h-48 rounded-2xl overflow-hidden shadow-2xl -rotate-6 group-hover:-rotate-12 transition-transform duration-500 border-4 border-[hsl(220,14%,10%)]">
                 <img 
                   src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80" 
                   alt="Process" 
                   className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all" 
                 />
               </div>
            </div>

            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white text-white group-hover:text-[hsl(220,14%,10%)] transition-colors relative z-10 mt-8">
               <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>

        </div>
      </div>
      </section>

      {/* Components Section */}
      <section className="relative py-24 bg-[hsl(220,14%,96%)] flex-1 z-10 border-t border-[hsl(220,13%,91%)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[hsl(220,14%,10%)] mb-4">UI Components</h2>
            <p className="text-[hsl(220,10%,40%)] font-medium">Interactive elements styled with Bento Grid.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Form Card */}
            <div className="p-8 bg-white rounded-[2.5rem] border border-[hsl(220,13%,91%)] shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
              <h3 className="text-2xl font-bold text-[hsl(220,14%,10%)] mb-2">Create Account</h3>
              <p className="text-[hsl(220,10%,40%)] font-medium text-sm mb-8">Join thousands of developers.</p>
              
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-[hsl(220,14%,10%)] mb-2">Email Address</label>
                  <input type="email" placeholder="you@example.com" className="w-full bg-[hsl(220,14%,96%)] border border-[hsl(220,13%,91%)] rounded-2xl px-5 py-3.5 text-sm text-[hsl(220,14%,10%)] font-medium focus:border-[hsl(24,95%,53%)] focus:ring-1 focus:ring-[hsl(24,95%,53%)] outline-none transition-all placeholder:text-[hsl(220,10%,50%)]" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[hsl(220,14%,10%)] mb-2">Password</label>
                  <input type="password" placeholder="••••••••" className="w-full bg-[hsl(220,14%,96%)] border border-[hsl(220,13%,91%)] rounded-2xl px-5 py-3.5 text-sm text-[hsl(220,14%,10%)] font-medium focus:border-[hsl(24,95%,53%)] focus:ring-1 focus:ring-[hsl(24,95%,53%)] outline-none transition-all placeholder:text-[hsl(220,10%,50%)]" />
                </div>
                <button className="w-full bg-[hsl(220,14%,10%)] text-white text-sm font-bold px-6 py-4 rounded-full hover:bg-[hsl(220,14%,20%)] hover:-translate-y-0.5 shadow-md hover:shadow-lg transition-all mt-4">
                  Sign Up
                </button>
              </div>
            </div>

            {/* Elements Card */}
            <div className="space-y-6">
              <div className="p-8 bg-white rounded-[2.5rem] border border-[hsl(220,13%,91%)] shadow-sm hover:shadow-md transition-all duration-300">
                 <h4 className="text-sm font-bold text-[hsl(220,14%,10%)] mb-6 uppercase tracking-wider">Buttons & Badges</h4>
                 <div className="flex flex-wrap gap-4">
                    <button className="px-6 py-3 bg-[hsl(220,14%,10%)] text-white rounded-full text-sm font-bold hover:bg-[hsl(220,14%,20%)] hover:-translate-y-0.5 transition-all shadow-md">Primary</button>
                    <button className="px-6 py-3 bg-[hsl(220,14%,96%)] text-[hsl(220,14%,10%)] rounded-full text-sm font-bold border border-[hsl(220,13%,91%)] hover:bg-white hover:-translate-y-0.5 transition-all shadow-sm">Secondary</button>
                 </div>
                 <div className="flex flex-wrap gap-4 mt-6">
                    <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-[hsl(142,71%,45%)]/10 text-[hsl(142,71%,35%)] border border-[hsl(142,71%,45%)]/20">Success</span>
                    <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-[hsl(346,87%,43%)]/10 text-[hsl(346,87%,43%)] border border-[hsl(346,87%,43%)]/20">Error</span>
                 </div>
              </div>
              
              <div className="p-6 bg-white rounded-[2.5rem] border border-[hsl(220,13%,91%)] shadow-sm hover:shadow-lg cursor-pointer hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex justify-between items-center px-2">
                  <div>
                    <h5 className="text-[hsl(220,14%,10%)] font-bold text-lg">Project Alpha</h5>
                    <p className="text-sm text-[hsl(220,10%,40%)] font-medium mt-1">Updated 2 hours ago</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-[hsl(220,14%,96%)] flex items-center justify-center group-hover:bg-[hsl(24,95%,53%)] transition-colors">
                     <ArrowUpRight className="w-5 h-5 text-[hsl(220,14%,10%)] group-hover:text-white transition-colors" />
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
