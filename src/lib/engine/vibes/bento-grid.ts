import type { VibeDefinition } from "@/lib/types";

export const bentoGrid: VibeDefinition = {
  id: "bento-grid",
  name: "Bento Grid",
  iconName: "LayoutGrid",
  description:
    "A bold, card-based layout system inspired by Apple's product pages and modern portfolio sites. Features asymmetric grids, large typography, and vibrant accent colors.",
  shortDescription: "Card-based grids, bold type, Apple-inspired",
  tier: "free",
  previewImage: "/vibes/bento-grid.png",
  colors: {
    background: "hsl(220, 14%, 96%)",
    surface: "hsl(0, 0%, 100%)",
    surfaceHover: "hsl(0, 0%, 98%)",
    elevated: "hsl(0, 0%, 100%)",
    border: "hsl(220, 13%, 91%)",
    borderSubtle: "hsl(220, 13%, 94%)",
    textPrimary: "hsl(220, 14%, 10%)",
    textSecondary: "hsl(220, 10%, 40%)",
    textTertiary: "hsl(220, 8%, 55%)",
    accent: "hsl(24, 95%, 53%)",
    accentHover: "hsl(24, 95%, 46%)",
    accentMuted: "hsl(24, 80%, 92%)",
    success: "hsl(142, 71%, 35%)",
    warning: "hsl(38, 92%, 50%)",
    error: "hsl(0, 84%, 50%)",
  },
  typography: {
    fontFamily: "Space Grotesk, Inter, system-ui, sans-serif",
    fontFamilyMono: "JetBrains Mono, monospace",
    hero: "text-6xl md:text-8xl font-bold tracking-[-0.04em] leading-[0.95]",
    h1: "text-4xl md:text-6xl font-bold tracking-[-0.03em]",
    h2: "text-2xl md:text-4xl font-bold tracking-tight",
    h3: "text-xl font-semibold",
    body: "text-base leading-relaxed",
    small: "text-sm",
    code: "font-mono text-sm",
  },
  componentPatterns: [
    {
      name: "Card Base",
      description: "Standard bento grid card (1x1)",
      classes:
        "bg-white rounded-3xl border border-[hsl(220,13%,91%)] p-6 shadow-sm overflow-hidden",
    },
    {
      name: "Card Interactive",
      description: "Interactive bento card that lifts on hover",
      classes:
        "bg-white rounded-3xl border border-[hsl(220,13%,91%)] p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer",
    },
    {
      name: "Card Accent",
      description: "Highlighted bento card with accent gradient",
      classes:
        "bg-gradient-to-br from-[hsl(24,95%,53%)] to-[hsl(38,92%,50%)] rounded-3xl p-8 text-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer",
    },
    {
      name: "Button Primary",
      description: "Bold rounded button with accent color",
      classes:
        "inline-flex items-center justify-center whitespace-nowrap bg-[hsl(24,95%,53%)] hover:bg-[hsl(24,95%,46%)] text-white rounded-full px-8 py-3.5 font-semibold text-base transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(24,95%,53%)] focus-visible:ring-offset-2",
    },
    {
      name: "Button Secondary",
      description: "Ghost button with border",
      classes:
        "inline-flex items-center justify-center whitespace-nowrap bg-transparent hover:bg-[hsl(220,14%,96%)] text-[hsl(220,14%,10%)] rounded-full px-8 py-3.5 font-semibold border-2 border-[hsl(220,13%,91%)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(220,13%,91%)] focus-visible:ring-offset-2",
    },
    {
      name: "Input Base",
      description: "Highly rounded input field",
      classes:
        "flex w-full rounded-full border-2 border-[hsl(220,13%,91%)] bg-white px-6 py-3.5 text-base text-[hsl(220,14%,10%)] placeholder:text-[hsl(220,8%,55%)] focus-visible:outline-none focus-visible:border-[hsl(24,95%,53%)] focus-visible:ring-4 focus-visible:ring-[hsl(24,95%,53%)/0.1] transition-all",
    },
    {
      name: "Navigation Header",
      description: "Floating pill-shaped navbar",
      classes:
        "fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl bg-white/80 backdrop-blur-xl border border-[hsl(220,13%,91%)] rounded-full px-6 py-4 shadow-lg shadow-black/5 z-50",
    },
  ],
  animationRules: [
    "Cards should scale up slightly (scale 1.02) and lift (translateY -4px) on hover with shadow increase",
    "Use staggered reveals with 80ms delay between bento grid items",
    "Page-level transitions should use a cascade from top-left to bottom-right",
    "Icons inside cards should have a subtle rotate or bounce on card hover",
    "Use framer-motion layout animations for grid reordering if filtering is added",
    "NEVER use animation duration longer than 400ms",
    "ALWAYS use ease-out timing for hover transitions",
  ],
  specialInstructions: [
    "UNIVERSAL ADAPTABILITY: This design system is built to be universally adaptable. Whether the user asks for a Developer Portfolio, a SaaS Dashboard, an E-commerce Store, or a Blog, apply these bento grid, rounded, Apple-inspired rules seamlessly.",
    "Bento grids must use CSS Grid (not flexbox) for proper asymmetric layouts",
    "Mix card sizes: combine 1x1, 2x1, and 1x2 cards for visual variety",
    "At least one card in each grid should use the Accent gradient",
    "Large hero typography is a defining feature — go BIG on headings (text-8xl on desktop)",
    "Rounded corners should be consistently large (rounded-3xl / 24px) across all cards",
    "Background should be a subtle warm gray, NOT pure white — this creates contrast with white cards",
  ],
  enterpriseBlueprints: [
    {
      title: "Bento Portfolio Hero",
      description: "A highly asymmetric, 4-column portfolio hero section identical to modern UI trends. Best for designers and developers.",
      language: "tsx",
      code: `// src/components/hero.tsx
import { ArrowUpRight, Mail, Globe } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[hsl(220,14%,96%)] min-h-screen py-12 md:py-24 flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-auto md:auto-rows-[320px]">
          
          {/* 1. Large Left Card */}
          <div className="md:col-span-2 md:row-span-2 bg-white rounded-[2.5rem] border border-[hsl(220,13%,91%)] p-8 md:p-12 shadow-sm flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
            <div>
              <div className="text-[hsl(220,10%,40%)] font-medium text-lg mb-8">
                Hi, I am Developer,<br/>
                Currently Fullstack Engineer @ Tech
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[4.2rem] font-bold tracking-tight text-[hsl(220,14%,10%)] leading-[1.05] mb-10">
                Crafting scalable <span className="text-[hsl(24,95%,53%)]">systems, interfaces</span> and <span className="text-[hsl(24,95%,53%)]">experiences.</span>
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
               src="https://images.unsplash.com/photo-1531297172867-4f4013642461?auto=format&fit=crop&q=80" 
               alt="Setup" 
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
  );
}`
    },
    {
      title: "Bento Feature Grid",
      description: "An asymmetric grid layout mixing different card sizes.",
      language: "tsx",
      code: `// src/components/bento-features.tsx
import { LineChart, Smartphone, Globe2, ShieldCheck } from "lucide-react";

export function BentoFeatures() {
  return (
    <section className="py-24 bg-[hsl(220,14%,96%)]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[hsl(220,14%,10%)] mb-4">Powerful Features</h2>
          <p className="text-[hsl(220,10%,40%)] text-lg">Everything you need in a single, perfectly organized box.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
          {/* Large Card (2 columns, 1 row) */}
          <div className="md:col-span-2 bg-white rounded-[2rem] border border-[hsl(220,13%,91%)] p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden relative group cursor-pointer">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-[hsl(220,14%,10%)] mb-3">Real-time Analytics</h3>
              <p className="text-[hsl(220,10%,40%)] text-lg max-w-md">Monitor your traffic, engagement, and conversion rates as they happen.</p>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-[hsl(24,80%,92%)] text-[hsl(24,95%,53%)] flex items-center justify-center group-hover:scale-110 transition-transform origin-bottom-left">
              <LineChart className="w-7 h-7" />
            </div>
            <div className="absolute right-0 bottom-0 w-1/2 h-4/5 bg-gradient-to-t from-[hsl(24,80%,92%)] to-transparent opacity-50 pointer-events-none rounded-br-[2rem]" />
          </div>

          {/* Small Card (1x1) */}
          <div className="bg-gradient-to-br from-[hsl(24,95%,53%)] to-[hsl(38,92%,50%)] rounded-[2rem] p-8 text-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer">
            <div>
               <h3 className="text-2xl font-bold mb-2">Mobile First</h3>
               <p className="text-white/80">Looks perfect on every device.</p>
            </div>
            <Smartphone className="w-12 h-12 text-white/90" />
          </div>

          {/* Small Card (1x1) */}
          <div className="bg-white rounded-[2rem] border border-[hsl(220,13%,91%)] p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer">
             <div>
               <h3 className="text-2xl font-bold text-[hsl(220,14%,10%)] mb-2">Global Edge</h3>
               <p className="text-[hsl(220,10%,40%)]">Deployed everywhere.</p>
             </div>
             <Globe2 className="w-12 h-12 text-[hsl(220,13%,91%)]" />
          </div>

          {/* Large Card (2 columns) */}
          <div className="md:col-span-2 bg-white rounded-[2rem] border border-[hsl(220,13%,91%)] p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer group">
             <div className="flex items-center justify-between w-full">
                <div>
                   <h3 className="text-3xl font-bold text-[hsl(220,14%,10%)] mb-3">Bank-grade Security</h3>
                   <p className="text-[hsl(220,10%,40%)] text-lg">Your data is encrypted at rest and in transit.</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-[hsl(142,71%,35%)]/10 text-[hsl(142,71%,35%)] flex items-center justify-center group-hover:rotate-12 transition-transform">
                   <ShieldCheck className="w-8 h-8" />
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}`
    },
    {
      title: "Bento Card Detail / Article",
      description: "Content contained within a massive rounded card.",
      language: "tsx",
      code: `// src/app/post/page.tsx
import { ArrowLeft } from "lucide-react";

export default function DetailPage() {
  return (
    <article className="min-h-screen bg-[hsl(220,14%,96%)] py-24">
      <div className="max-w-4xl mx-auto px-4">
        <button className="inline-flex items-center gap-2 text-[hsl(220,10%,40%)] hover:text-[hsl(220,14%,10%)] mb-8 transition-colors font-semibold">
          <ArrowLeft className="w-5 h-5" /> Back
        </button>

        <div className="bg-white rounded-[2.5rem] border border-[hsl(220,13%,91%)] p-8 md:p-16 shadow-lg">
          <header className="mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[hsl(24,80%,92%)] text-[hsl(24,95%,53%)] text-sm font-bold mb-6">
              Product Update
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[hsl(220,14%,10%)] mb-6 leading-[1.1]">
              Introducing the new Layout Engine
            </h1>
            <p className="text-xl text-[hsl(220,10%,40%)] leading-relaxed">
              We've completely rewritten our core rendering pipeline to bring you 60fps animations across all bento grid items.
            </p>
          </header>

          <div className="aspect-video w-full rounded-[1.5rem] bg-[hsl(220,14%,96%)] mb-12 overflow-hidden border border-[hsl(220,13%,91%)]">
             <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80" alt="Cover" className="w-full h-full object-cover" />
          </div>

          <div className="prose prose-lg prose-slate max-w-none prose-headings:tracking-tight prose-a:text-[hsl(24,95%,53%)]">
            <h2>The Need for Speed</h2>
            <p>
              When dealing with complex, asymmetric grid layouts, the browser's paint times can skyrocket. By utilizing the new layout engine, we've bypassed the main thread for all transform-based animations.
            </p>
            
            <div className="bg-[hsl(220,14%,96%)] p-6 rounded-2xl border border-[hsl(220,13%,91%)] my-8">
               <h3 className="mt-0">Key Improvements</h3>
               <ul>
                 <li>Zero layout thrashing during drag-and-drop</li>
                 <li>Sub-pixel rendering for borders</li>
                 <li>Automatic GPU acceleration for large cards</li>
               </ul>
            </div>
            
            <p>
              This update is rolling out to all Pro users starting today. Free users will receive the update early next month.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}`
    }
  ]
};
