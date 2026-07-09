import type { VibeDefinition } from "@/lib/types";

export const minimalistClean: VibeDefinition = {
  id: "minimalist-clean",
  name: "Minimalist Clean",
  iconName: "Square",
  description:
    "A refined, typography-driven light theme inspired by Stripe, Linear's marketing site, and Notion. Focuses on whitespace, subtle shadows, and crisp contrast.",
  shortDescription: "White space, typography-driven, Stripe-inspired",
  tier: "free",
  previewImage: "/vibes/minimalist-clean.png",
  colors: {
    background: "hsl(0, 0%, 100%)",
    surface: "hsl(0, 0%, 98%)",
    surfaceHover: "hsl(0, 0%, 96%)",
    elevated: "hsl(0, 0%, 100%)",
    border: "hsl(0, 0%, 90%)",
    borderSubtle: "hsl(0, 0%, 94%)",
    textPrimary: "hsl(0, 0%, 9%)",
    textSecondary: "hsl(0, 0%, 40%)",
    textTertiary: "hsl(0, 0%, 60%)",
    accent: "hsl(221, 83%, 53%)",
    accentHover: "hsl(221, 83%, 46%)",
    accentMuted: "hsl(221, 60%, 93%)",
    success: "hsl(142, 71%, 35%)",
    warning: "hsl(38, 92%, 45%)",
    error: "hsl(0, 84%, 50%)",
  },
  typography: {
    fontFamily: "Inter, system-ui, sans-serif",
    fontFamilyMono: "JetBrains Mono, Fira Code, monospace",
    hero: "text-5xl md:text-7xl font-semibold tracking-[-0.03em] leading-[1.1]",
    h1: "text-4xl md:text-5xl font-semibold tracking-[-0.02em]",
    h2: "text-2xl md:text-3xl font-medium tracking-tight",
    h3: "text-lg font-medium",
    body: "text-base leading-relaxed text-[hsl(0,0%,40%)]",
    small: "text-sm text-[hsl(0,0%,60%)]",
    code: "font-mono text-sm",
  },
  componentPatterns: [
    {
      name: "Card Base",
      description: "Clean white card with subtle border",
      classes:
        "bg-white rounded-2xl border border-[hsl(0,0%,90%)] shadow-sm overflow-hidden",
    },
    {
      name: "Card Interactive",
      description: "Clean white card with subtle hover shadow",
      classes:
        "bg-white rounded-2xl border border-[hsl(0,0%,90%)] shadow-sm hover:shadow-md hover:border-[hsl(0,0%,85%)] transition-all duration-300 overflow-hidden group cursor-pointer",
    },
    {
      name: "Button Primary",
      description: "Solid accent button",
      classes:
        "inline-flex items-center justify-center whitespace-nowrap rounded-lg px-5 py-2.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(221,83%,53%)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[hsl(221,83%,53%)] text-white hover:bg-[hsl(221,83%,46%)] shadow-sm hover:shadow-md",
    },
    {
      name: "Button Secondary",
      description: "Outlined button",
      classes:
        "inline-flex items-center justify-center whitespace-nowrap rounded-lg px-5 py-2.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(221,83%,53%)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white border border-[hsl(0,0%,90%)] hover:bg-[hsl(0,0%,98%)] text-[hsl(0,0%,9%)] shadow-sm",
    },
    {
      name: "Input Base",
      description: "Clean input with focus border",
      classes:
        "flex w-full rounded-lg border border-[hsl(0,0%,90%)] bg-white px-4 py-2.5 text-sm text-[hsl(0,0%,9%)] ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[hsl(0,0%,60%)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(221,83%,53%)/0.2] focus-visible:border-[hsl(221,83%,53%)] disabled:cursor-not-allowed disabled:opacity-50 transition-all",
    },
    {
      name: "Badge",
      description: "Light accent badge",
      classes:
        "inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-[hsl(221,60%,93%)] text-[hsl(221,83%,53%)]",
    },
    {
      name: "Navigation Header",
      description: "Clean sticky navbar with border bottom",
      classes:
        "sticky top-0 w-full bg-white/80 backdrop-blur-lg border-b border-[hsl(0,0%,94%)] z-50",
    },
  ],
  animationRules: [
    "Use subtle fade-in with minimal translateY(4px) for page elements, duration 400ms ease",
    "Hover effects should be understated — only shadow changes and slight color shifts",
    "AVOID flashy animations — this vibe is about calm elegance",
    "Stagger child elements by 80ms for a smooth cascading reveal",
    "Use framer-motion with gentle spring settings: stiffness 100, damping 20",
    "NEVER use animation duration longer than 400ms",
    "NEVER use glow effects or neon-style shadows",
    "Prefer opacity transitions over transform animations",
  ],
  specialInstructions: [
    "UNIVERSAL ADAPTABILITY: This design system is built to be universally adaptable. Whether the user asks for a Developer Portfolio, a SaaS Dashboard, an E-commerce Store, or a Blog, apply these colors, typography, and clean rules seamlessly.",
    "This design is driven by typography and whitespace — generous padding and margins are essential",
    "Use a maximum content width of 680px for text-heavy pages (blog-style readability)",
    "Accent color (blue) should be used ONLY for interactive elements — links, buttons, focus rings",
    "Shadows should be extremely subtle — never heavy or dramatic",
    "Section spacing should be at least 80px (py-20) to let content breathe",
    "Borders should be barely visible — use 1px with low-opacity colors",
  ],
  enterpriseBlueprints: [
    {
      title: "Clean Hero Section (SaaS/Landing)",
      description: "A highly readable, Stripe-inspired hero section with generous whitespace and elegant typography.",
      language: "tsx",
      code: `// src/components/hero.tsx
import { ArrowRight, PlayCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-32">
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
  );
}`
    },
    {
      title: "Clean Feature Grid (Products or Services)",
      description: "Subtle, bordered cards that look clean and crisp.",
      language: "tsx",
      code: `// src/components/features.tsx
import { Shield, Zap, Globe, Cpu } from "lucide-react";

export function FeatureGrid() {
  const features = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Enterprise Security",
      description: "Bank-grade encryption and SOC2 compliance built-in from day one."
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Instant Deployments",
      description: "Push to main and see your changes live globally in milliseconds."
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Global Edge Network",
      description: "Serve your content from 200+ edge locations around the world."
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "Serverless Compute",
      description: "Scale from zero to millions of requests without managing servers."
    }
  ];

  return (
    <section className="py-24 bg-[hsl(0,0%,98%)] border-t border-[hsl(0,0%,90%)]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[hsl(0,0%,9%)] mb-4">Everything you need</h2>
          <p className="text-[hsl(0,0%,40%)] text-lg">Powerful features without the complexity. Designed for teams that want to move fast.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="bg-white rounded-2xl border border-[hsl(0,0%,90%)] p-6 shadow-sm hover:shadow-md hover:border-[hsl(0,0%,85%)] transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-[hsl(221,60%,93%)] text-[hsl(221,83%,53%)] flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium text-[hsl(0,0%,9%)] mb-2">{feature.title}</h3>
              <p className="text-[hsl(0,0%,40%)] text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`
    },
    {
      title: "Clean Article / Detail Page",
      description: "A narrow, typography-driven layout ideal for reading.",
      language: "tsx",
      code: `// src/app/post/page.tsx
import { ArrowLeft } from "lucide-react";

export default function ArticlePage() {
  return (
    <article className="min-h-screen bg-white pt-24 pb-32">
      <div className="max-w-[680px] mx-auto px-4">
        <button className="inline-flex items-center gap-2 text-[hsl(0,0%,40%)] hover:text-[hsl(0,0%,9%)] mb-12 transition-colors text-sm font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to writing
        </button>
        
        <header className="mb-12">
          <div className="text-sm text-[hsl(0,0%,60%)] font-medium mb-4">
            Published on October 24, 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-[hsl(0,0%,9%)] mb-8 leading-tight">
            The beauty of negative space in interface design
          </h1>
        </header>

        <div className="prose prose-slate prose-p:leading-relaxed prose-headings:tracking-tight prose-a:text-[hsl(221,83%,53%)] max-w-none">
          <p className="text-lg text-[hsl(0,0%,40%)] leading-relaxed mb-8">
            When we design interfaces, our first instinct is often to fill the screen. We see empty space as wasted space, an opportunity to add more features or information. But the truth is quite the opposite.
          </p>
          
          <h2 className="text-2xl font-medium mt-12 mb-4 text-[hsl(0,0%,9%)]">Why space matters</h2>
          <p className="text-[hsl(0,0%,40%)] leading-relaxed mb-6">
            Negative space is not empty space. It is a powerful design element that provides breathing room for the user's eyes. It clarifies structure, emphasizes important elements, and creates a sense of elegance and calm.
          </p>

          <div className="my-10 p-6 bg-[hsl(0,0%,98%)] rounded-2xl border border-[hsl(0,0%,90%)]">
            <p className="text-[hsl(0,0%,9%)] font-medium italic m-0">
              "Whitespace is like air: it is necessary for design to breathe."
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}`
    }
  ],
  incompatibleRules: ["dark-mode"],
};
