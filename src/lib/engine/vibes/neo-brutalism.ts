import type { VibeDefinition } from "@/lib/types";

export const neoBrutalism: VibeDefinition = {
  id: "neo-brutalism",
  name: "Neo-Brutalism",
  iconName: "Paintbrush",
  description:
    "A bold, unapologetically raw design featuring thick borders, flat primary colors, visible box shadows, and mono typography. Inspired by Gumroad, Figma community, and indie web.",
  shortDescription: "Thick borders, bold colors, raw typography",
  tier: "free",
  previewImage: "/vibes/neo-brutalism.png",
  colors: {
    background: "hsl(60, 30%, 96%)",
    surface: "hsl(0, 0%, 100%)",
    surfaceHover: "hsl(60, 20%, 94%)",
    elevated: "hsl(0, 0%, 100%)",
    border: "hsl(0, 0%, 0%)",
    borderSubtle: "hsl(0, 0%, 85%)",
    textPrimary: "hsl(0, 0%, 0%)",
    textSecondary: "hsl(0, 0%, 30%)",
    textTertiary: "hsl(0, 0%, 50%)",
    accent: "hsl(265, 90%, 60%)",
    accentHover: "hsl(265, 90%, 50%)",
    accentMuted: "hsl(265, 60%, 90%)",
    success: "hsl(130, 70%, 50%)",
    warning: "hsl(50, 100%, 55%)",
    error: "hsl(0, 90%, 55%)",
  },
  typography: {
    fontFamily: "Space Mono, monospace",
    fontFamilyMono: "Space Mono, JetBrains Mono, monospace",
    hero: "text-5xl md:text-7xl font-bold uppercase tracking-tight",
    h1: "text-4xl md:text-5xl font-bold uppercase",
    h2: "text-2xl md:text-3xl font-bold",
    h3: "text-xl font-bold",
    body: "text-base leading-relaxed font-mono",
    small: "text-sm font-mono",
    code: "font-mono text-sm",
  },
  componentPatterns: [
    {
      name: "Card Base",
      description: "Card with thick border and offset shadow",
      classes:
        "bg-white rounded-lg border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 overflow-hidden",
    },
    {
      name: "Card Interactive",
      description: "Interactive card that pushes down on active",
      classes:
        "bg-white rounded-lg border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 transition-all duration-150 overflow-hidden cursor-pointer",
    },
    {
      name: "Button Primary",
      description: "Bold button with hard shadow",
      classes:
        "inline-flex items-center justify-center whitespace-nowrap bg-[hsl(265,90%,60%)] hover:bg-[hsl(265,90%,50%)] text-white font-bold uppercase text-sm tracking-wider rounded-lg px-6 py-3 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] active:translate-x-[3px] active:translate-y-[3px] transition-all duration-150 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[hsl(265,90%,60%)/0.3]",
    },
    {
      name: "Button Secondary",
      description: "White button with hard shadow",
      classes:
        "inline-flex items-center justify-center whitespace-nowrap bg-white hover:bg-[hsl(60,20%,94%)] text-black font-bold uppercase text-sm tracking-wider rounded-lg px-6 py-3 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] active:translate-x-[3px] active:translate-y-[3px] transition-all duration-150 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[hsl(265,90%,60%)/0.3]",
    },
    {
      name: "Input Base",
      description: "Bold-bordered input",
      classes:
        "flex w-full bg-white border-2 border-black rounded-lg px-4 py-3 text-black placeholder:text-[hsl(0,0%,50%)] focus-visible:ring-4 focus-visible:ring-[hsl(265,90%,60%)/0.3] outline-none font-mono transition-all disabled:opacity-50",
    },
    {
      name: "Badge",
      description: "Colored tag with border",
      classes:
        "inline-flex items-center px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-[hsl(50,100%,55%)] text-black border-2 border-black",
    },
    {
      name: "Navigation Header",
      description: "Thick-bordered brutalist navbar",
      classes:
        "sticky top-0 w-full bg-[hsl(60,30%,96%)] border-b-4 border-black z-50 py-4",
    },
  ],
  animationRules: [
    "Buttons MUST move toward their shadow on press — translate and shrink shadow simultaneously",
    "Hover on cards should expand the shadow outward while the card shifts up-left",
    "Use bouncy, playful transitions — spring with stiffness: 300, damping: 15",
    "Page elements should pop in with a quick scale(0.9 → 1) + opacity, 250ms",
    "NEVER use smooth fades alone — always pair with a transform",
    "Add a slight rotation (-1deg to 1deg) on hover for playful elements like badges or tags",
    "Keep animations SHORT and SNAPPY — max 250ms",
  ],
  specialInstructions: [
    "UNIVERSAL ADAPTABILITY: This design system is built to be universally adaptable. Whether the user asks for a Developer Portfolio, a SaaS Dashboard, an E-commerce Store, or a Blog, apply these bold, high-contrast brutalist rules seamlessly.",
    "Borders are the PRIMARY design element — they must be 2px solid black everywhere, NO exceptions",
    "Box shadows must be HARD (no blur) — offset shadow creates the brutal depth effect",
    "Typography should be monospace or bold sans-serif — fonts should feel raw and intentional",
    "Use a warm off-white background (not pure white) — hsl(60, 30%, 96%) for a paper-like feel",
    "Color splashes: use 2-3 bright accent colors (purple, yellow, green) — flat, no gradients",
    "This style embraces imperfection — slight rotations, mixed sizes, and asymmetry are GOOD",
    "NEVER use gradients, glassmorphism, or blur effects — they contradict the brutal aesthetic",
  ],
  enterpriseBlueprints: [
    {
      title: "Neo-Brutalist Hero Section",
      description: "A loud, high-impact hero section with massive typography and offset shadows.",
      language: "tsx",
      code: `// src/components/hero.tsx
import { ArrowRight, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[hsl(60,30%,96%)] pt-24 pb-32 border-b-4 border-black">
      <div className="container mx-auto px-4 text-center max-w-5xl relative z-10">
        <div className="inline-flex items-center px-4 py-2 rounded-md bg-[hsl(50,100%,55%)] border-2 border-black text-black font-bold uppercase tracking-wider text-sm mb-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-rotate-2 transition-transform cursor-pointer">
          <Star className="w-4 h-4 mr-2 fill-black" />
          Radical Design System
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tight text-black mb-8 leading-[0.95]">
          Make it <span className="bg-[hsl(265,90%,60%)] text-white px-4 pb-2 border-4 border-black rounded-lg inline-block -rotate-1 mt-2">Loud</span> & Make it <span className="bg-[hsl(130,70%,50%)] text-black px-4 pb-2 border-4 border-black rounded-lg inline-block rotate-1 mt-2">Bold</span>
        </h1>
        
        <p className="text-xl md:text-2xl font-mono text-black mb-12 max-w-2xl mx-auto leading-relaxed border-l-4 border-black pl-6 text-left">
          Stop building boring websites. Embrace the raw, unapologetic power of Neo-Brutalism. Hard shadows, thick borders, and attitude.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="w-full sm:w-auto inline-flex items-center justify-center whitespace-nowrap bg-[hsl(265,90%,60%)] text-white font-bold uppercase text-lg tracking-wider rounded-lg px-8 py-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] transition-all duration-150 gap-3">
            Build Something <ArrowRight className="w-5 h-5" />
          </button>
          <button className="w-full sm:w-auto inline-flex items-center justify-center whitespace-nowrap bg-white text-black font-bold uppercase text-lg tracking-wider rounded-lg px-8 py-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] transition-all duration-150">
            Read The Docs
          </button>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[hsl(0,90%,55%)] border-4 border-black rounded-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -z-10" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-[hsl(50,100%,55%)] border-4 border-black rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-12 -z-10" />
    </section>
  );
}`
    },
    {
      title: "Neo-Brutalist Feature Grid",
      description: "Thick-bordered cards with flat colors and playful interactions.",
      language: "tsx",
      code: `// src/components/features.tsx
import { Terminal, Cpu, Database, CloudLightning } from "lucide-react";

export function BrutalGrid() {
  const features = [
    {
      icon: <Terminal className="w-8 h-8" />,
      title: "CLI Driven",
      desc: "Generate components directly from your terminal. No mouse required.",
      color: "bg-[hsl(50,100%,55%)]"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Bare Metal",
      desc: "Zero abstractions. You have full control over every single pixel.",
      color: "bg-[hsl(265,90%,60%)]",
      textColor: "text-white"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Local First",
      desc: "Data lives on the device. Syncs when online. Blazing fast.",
      color: "bg-[hsl(130,70%,50%)]"
    },
    {
      icon: <CloudLightning className="w-8 h-8" />,
      title: "Edge Deploy",
      desc: "Push to worldwide edge nodes in less than 500 milliseconds.",
      color: "bg-[hsl(0,90%,55%)]",
      textColor: "text-white"
    }
  ];

  return (
    <section className="py-24 bg-[hsl(60,30%,96%)]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-16 border-4 border-black bg-white p-8 rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] inline-block">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-black mb-2">Core Features</h2>
          <p className="font-mono text-xl text-[hsl(0,0%,30%)]">What makes this stack unstoppable.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <div key={i} className={\`\${feature.color} \${feature.textColor || "text-black"} rounded-xl border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col h-full\`}>
              <div className="mb-6 p-3 border-2 border-current rounded-lg inline-flex w-fit">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold uppercase mb-4">{feature.title}</h3>
              <p className="font-mono leading-relaxed flex-grow font-medium">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`
    },
    {
      title: "Neo-Brutalist Blog / Detail Page",
      description: "High-contrast reading experience with monospace and sans-serif pairing.",
      language: "tsx",
      code: `// src/app/post/page.tsx
import { ArrowLeft } from "lucide-react";

export default function ArticlePage() {
  return (
    <article className="min-h-screen bg-[hsl(60,30%,96%)] pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-4">
        <button className="inline-flex items-center gap-2 font-bold uppercase tracking-wider text-black mb-12 hover:bg-[hsl(50,100%,55%)] px-4 py-2 border-2 border-transparent hover:border-black rounded-lg transition-colors">
          <ArrowLeft className="w-5 h-5" /> Return
        </button>
        
        <header className="mb-12 border-b-4 border-black pb-12">
          <div className="flex gap-4 mb-6">
            <span className="bg-black text-white px-3 py-1 font-mono text-sm font-bold border-2 border-black">TUTORIAL</span>
            <span className="font-mono text-black font-bold py-1">2026-10-24</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-black leading-none">
            Shipping code without breaking production
          </h1>
        </header>

        <div className="aspect-video w-full border-4 border-black rounded-xl mb-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden bg-white">
           <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80" alt="Cover" className="w-full h-full object-cover grayscale contrast-125" />
        </div>

        <div className="prose prose-lg prose-black max-w-none font-mono font-medium">
          <p className="text-xl leading-relaxed mb-8 font-sans font-bold">
            Everyone breaks production at least once. It's a rite of passage. But doing it twice for the same reason is just bad engineering. Let's fix that.
          </p>
          
          <h2 className="text-3xl font-black uppercase mt-16 mb-6 font-sans">1. The CI/CD Pipeline</h2>
          <p className="mb-8">
            Your pipeline shouldn't just run tests; it should aggressively try to destroy your application before it reaches the public internet.
          </p>

          <pre className="bg-black text-[hsl(50,100%,55%)] p-6 rounded-xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
            <code>npm run test:chaos && npm run deploy</code>
          </pre>
          
          <div className="bg-[hsl(265,90%,60%)] text-white p-8 rounded-xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] my-12 rotate-1">
             <h3 className="font-sans font-black text-2xl uppercase mb-2">Golden Rule</h3>
             <p className="m-0 text-lg">If it's not automated, it's going to fail when you are tired.</p>
          </div>
        </div>
      </div>
    </article>
  );
}`
    }
  ]
};
