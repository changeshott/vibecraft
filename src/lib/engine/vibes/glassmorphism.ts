import type { VibeDefinition } from "@/lib/types";

export const glassmorphism: VibeDefinition = {
  id: "glassmorphism",
  name: "Glassmorphism",
  iconName: "Droplets",
  description:
    "A futuristic, layered design featuring frosted glass panels, teal accents, and deep backgrounds. Inspired by Apple's visionOS and modern fintech apps.",
  shortDescription: "Frosted glass, teal accents, futuristic depth",
  tier: "pro",
  previewImage: "/vibes/glassmorphism.png",
  colors: {
    background: "hsl(230, 35%, 7%)",
    surface: "hsl(230, 25%, 12% / 0.6)",
    surfaceHover: "hsl(230, 25%, 16% / 0.7)",
    elevated: "hsl(230, 25%, 14% / 0.8)",
    border: "hsl(230, 20%, 30% / 0.3)",
    borderSubtle: "hsl(230, 20%, 25% / 0.2)",
    textPrimary: "hsl(0, 0%, 98%)",
    textSecondary: "hsl(220, 15%, 70%)",
    textTertiary: "hsl(220, 10%, 50%)",
    accent: "hsl(174, 80%, 50%)",
    accentHover: "hsl(174, 80%, 43%)",
    accentMuted: "hsl(174, 50%, 20%)",
    success: "hsl(142, 71%, 45%)",
    warning: "hsl(38, 92%, 50%)",
    error: "hsl(0, 84%, 60%)",
  },
  typography: {
    fontFamily: "Plus Jakarta Sans, Inter, system-ui, sans-serif",
    fontFamilyMono: "JetBrains Mono, monospace",
    hero: "text-5xl md:text-7xl font-bold tracking-tight",
    h1: "text-4xl md:text-5xl font-bold tracking-tight",
    h2: "text-2xl md:text-3xl font-semibold",
    h3: "text-xl font-medium",
    body: "text-base leading-relaxed",
    small: "text-sm",
    code: "font-mono text-sm",
  },
  componentPatterns: [
    {
      name: "Card Base",
      description: "Frosted glass card with blur backdrop",
      classes:
        "bg-[hsl(230,25%,12%)/0.4] backdrop-blur-xl rounded-2xl border border-[hsl(230,20%,30%)/0.3] p-6 shadow-lg shadow-black/20 transition-all duration-300",
    },
    {
      name: "Card Interactive",
      description: "Frosted glass card that glows on hover",
      classes:
        "bg-[hsl(230,25%,12%)/0.4] backdrop-blur-xl rounded-2xl border border-[hsl(230,20%,30%)/0.3] p-6 shadow-lg shadow-black/20 hover:bg-[hsl(230,25%,16%)/0.5] hover:border-[hsl(174,80%,50%)/0.4] hover:shadow-[0_8px_30px_hsl(174,80%,50%/0.15)] hover:-translate-y-1 transition-all duration-300 cursor-pointer",
    },
    {
      name: "Button Primary",
      description: "Teal accent button with glow",
      classes:
        "inline-flex items-center justify-center whitespace-nowrap bg-[hsl(174,80%,50%)] hover:bg-[hsl(174,80%,43%)] text-[hsl(230,35%,7%)] rounded-xl px-6 py-3 font-semibold transition-all duration-200 shadow-[0_0_20px_hsl(174,80%,50%/0.3)] hover:shadow-[0_0_30px_hsl(174,80%,50%/0.5)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(174,80%,50%)] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(230,35%,7%)]",
    },
    {
      name: "Button Secondary",
      description: "Glass-effect button",
      classes:
        "inline-flex items-center justify-center whitespace-nowrap bg-white/10 backdrop-blur-md hover:bg-white/15 text-white rounded-xl px-6 py-3 font-medium border border-white/10 hover:border-white/20 transition-all duration-200 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
    },
    {
      name: "Input Base",
      description: "Glass-effect input field",
      classes:
        "flex w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus-visible:border-[hsl(174,80%,50%)/0.5] focus-visible:ring-2 focus-visible:ring-[hsl(174,80%,50%)/0.2] outline-none transition-all",
    },
    {
      name: "Badge",
      description: "Glowing accent badge",
      classes:
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[hsl(174,80%,50%)/0.15] text-[hsl(174,80%,50%)] border border-[hsl(174,80%,50%)/0.3] shadow-[0_0_10px_hsl(174,80%,50%/0.2)]",
    },
    {
      name: "Navigation Header",
      description: "High-blur floating header",
      classes:
        "fixed top-4 left-4 right-4 md:left-auto md:right-auto md:w-[calc(100%-2rem)] max-w-5xl md:translate-x-0 bg-[hsl(230,25%,12%)/0.4] backdrop-blur-2xl border border-white/10 rounded-2xl px-6 py-4 shadow-xl z-50 supports-[backdrop-filter]:bg-[hsl(230,25%,12%)/0.2]",
    },
  ],
  animationRules: [
    "Glass panels should appear with a fade + scale(0.95 → 1) animation, 400ms ease-out",
    "Hovering glass cards should brighten the backdrop and shift border to accent color",
    "Use a subtle parallax effect on background elements for depth",
    "CTA buttons should have a breathing glow animation (pulse-glow, 3s infinite)",
    "NEVER use sharp or instant transitions — everything should feel smooth and fluid",
    "Use framer-motion spring animations with damping: 25, stiffness: 120",
  ],
  specialInstructions: [
    "UNIVERSAL ADAPTABILITY: This design system is built to be universally adaptable. Whether the user asks for a Developer Portfolio, a SaaS Dashboard, an E-commerce Store, or a Blog, apply these translucent, futuristic glassmorphism rules seamlessly.",
    "Glassmorphism requires a visually rich background — use gradient orbs, mesh gradients, or blurred shapes BEHIND the glass panels",
    "backdrop-blur values should be between 12px and 24px — too little loses the glass effect, too much looks flat",
    "Layer depth: background orbs → glass panels → content. Minimum 3 visual layers",
    "Accent color (teal) creates striking contrast against the dark purple-blue background — use it for key CTAs and data highlights",
    "Borders on glass elements must be semi-transparent white or accent — NEVER solid colors",
    "This style is heavy on GPU — use will-change: transform on animated glass elements for performance",
  ],
  enterpriseBlueprints: [
    {
      title: "Glassmorphism Hero",
      description: "A deeply layered hero section featuring glowing orbs behind a frosted glass content panel.",
      language: "tsx",
      code: `// src/components/hero.tsx
import { ArrowRight, Cpu } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[hsl(230,35%,7%)] py-32">
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
  );
}`
    },
    {
      title: "Glassmorphism Feature Grid",
      description: "Grid of frosted glass cards over a dark gradient background.",
      language: "tsx",
      code: `// src/components/features.tsx
import { Layers, Activity, Lock, Maximize } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Spatial Layering",
      desc: "True Z-axis depth using dynamic backdrop filters and multi-layered rendering."
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Hardware Accelerated",
      desc: "Optimized blur calculations pushed directly to the GPU for solid 60fps."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Secure by Design",
      desc: "Content is isolated. What happens behind the glass stays behind the glass."
    },
    {
      icon: <Maximize className="w-6 h-6" />,
      title: "Fluid Layouts",
      desc: "Responsive geometries that adapt seamlessly from watch screens to 8K displays."
    }
  ];

  return (
    <section className="relative py-24 bg-[hsl(230,35%,7%)] overflow-hidden">
      {/* Background effect */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[hsl(174,80%,50%)]/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">Core Architecture</h2>
          <p className="text-[hsl(220,15%,70%)] text-lg max-w-2xl mx-auto">Engineered from the ground up to support massive scale spatial computing interfaces.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="bg-[hsl(230,25%,12%)/0.4] backdrop-blur-xl rounded-2xl border border-[hsl(230,20%,30%)/0.3] p-8 shadow-lg shadow-black/20 hover:bg-[hsl(230,25%,16%)/0.5] hover:border-[hsl(174,80%,50%)/0.4] hover:shadow-[0_8px_30px_hsl(174,80%,50%/0.15)] hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-[hsl(174,80%,50%)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_hsl(174,80%,50%/0.1)]">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-[hsl(220,15%,70%)] leading-relaxed flex-grow">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`
    },
    {
      title: "Glassmorphism Article / Setup",
      description: "A reading layout utilizing multiple levels of glass opacity.",
      language: "tsx",
      code: `// src/app/post/page.tsx
import { ArrowLeft } from "lucide-react";

export default function DetailPage() {
  return (
    <article className="min-h-screen bg-[hsl(230,35%,7%)] py-24 relative overflow-hidden">
      {/* Background Meshes */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[hsl(174,80%,50%)]/10 to-transparent pointer-events-none" />
      <div className="absolute top-40 right-20 w-[300px] h-[300px] bg-[hsl(260,80%,50%)]/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <button className="inline-flex items-center gap-2 text-[hsl(220,15%,70%)] hover:text-white mb-8 transition-colors font-medium bg-white/5 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 hover:border-white/20">
          <ArrowLeft className="w-4 h-4" /> Go Back
        </button>

        <div className="bg-[hsl(230,25%,12%)/0.6] backdrop-blur-2xl rounded-[2rem] border border-[hsl(230,20%,30%)/0.3] shadow-2xl overflow-hidden">
          <div className="aspect-[21/9] w-full bg-[hsl(230,25%,12%)] relative">
             <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80" alt="Cover" className="w-full h-full object-cover mix-blend-luminosity opacity-40" />
             <div className="absolute inset-0 bg-gradient-to-t from-[hsl(230,25%,12%)/0.8] to-transparent" />
          </div>

          <div className="p-8 md:p-12 lg:p-16">
            <header className="mb-12">
              <span className="inline-block px-3 py-1 rounded-full bg-[hsl(174,80%,50%)/0.1] text-[hsl(174,80%,50%)] text-sm font-medium mb-4 border border-[hsl(174,80%,50%)/0.2]">
                Documentation
              </span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                Initializing the Rendering Engine
              </h1>
              <p className="text-xl text-[hsl(220,15%,70%)] leading-relaxed">
                Learn how to bootstrap the VibeOS spatial renderer within your Next.js application.
              </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-[hsl(174,80%,50%)]">
              <h2>Installation</h2>
              <p>
                First, install the core engine packages via npm or pnpm. Ensure you have the peer dependencies satisfied.
              </p>
              
              <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-white/10 my-8 shadow-inner">
                 <code className="text-[hsl(174,80%,50%)] font-mono">npm install @vibecraft/engine framer-motion</code>
              </div>
              
              <h2>Configuring the Provider</h2>
              <p>
                Wrap your application root with the <code>SpatialProvider</code>. This sets up the WebGL context necessary for advanced backdrop-filter calculations on unsupported devices.
              </p>
              
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 my-8">
                <h3 className="text-white mt-0 mb-2">Performance Tip</h3>
                <p className="text-[hsl(220,15%,70%)] m-0 text-base">
                  For mobile devices, you can set the <code>reduceMotion</code> prop to true, which will fallback to standard opacity layers instead of expensive gaussian blurs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}`
    }
  ]
};
