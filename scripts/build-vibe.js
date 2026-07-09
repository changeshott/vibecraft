const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '..', 'src', 'lib', 'engine', 'vibes', 'dark-saas-pro.ts');

const output = [];

output.push(`import type { VibeDefinition } from "@/lib/types";

export const darkSaasPro: VibeDefinition = {
  id: "dark-saas-pro",
  name: "Dark SaaS Pro (Universal Architecture)",
  iconName: "Moon",
  description:
    "An exhaustive, ultra-detailed modern dark theme inspired by Linear, Vercel, and Raycast. Universal architecture suited for SaaS, Portfolios, E-Commerce, and Blogs. Features deep blue-black backgrounds, vibrant purple accents, and glassmorphism.",
  shortDescription: "Universal dark mode for SaaS, Portfolios & E-Commerce",
  tier: "pro",
  previewImage: "/vibes/dark-saas-pro.png",
  colors: {
    background: "hsl(222, 47%, 6%)",
    surface50: "hsl(222, 30%, 8%)",
    surface100: "hsl(222, 30%, 10%)",
    surface200: "hsl(222, 30%, 12%)",
    surface300: "hsl(222, 30%, 14%)",
    surface400: "hsl(222, 30%, 16%)",
    surface500: "hsl(222, 30%, 18%)",
    surface600: "hsl(222, 30%, 20%)",
    surface700: "hsl(222, 30%, 24%)",
    surface800: "hsl(222, 30%, 28%)",
    surface900: "hsl(222, 30%, 32%)",
    surface: "hsl(222, 30%, 10%)",
    surfaceHover: "hsl(222, 30%, 14%)",
    surfaceActive: "hsl(222, 30%, 16%)",
    elevated: "hsl(222, 25%, 12%)",
    elevatedHover: "hsl(222, 25%, 16%)",
    border: "hsl(222, 20%, 18%)",
    borderSubtle: "hsl(222, 15%, 14%)",
    borderHover: "hsl(222, 20%, 25%)",
    borderActive: "hsl(222, 20%, 30%)",
    textPrimary: "hsl(210, 40%, 98%)",
    textSecondary: "hsl(215, 20%, 65%)",
    textTertiary: "hsl(215, 15%, 45%)",
    textMuted: "hsl(215, 10%, 35%)",
    textInverse: "hsl(222, 47%, 6%)",
    accent50: "hsl(262, 83%, 95%)",
    accent100: "hsl(262, 83%, 90%)",
    accent200: "hsl(262, 83%, 80%)",
    accent300: "hsl(262, 83%, 70%)",
    accent400: "hsl(262, 83%, 65%)", 
    accent500: "hsl(262, 83%, 58%)",
    accent600: "hsl(262, 83%, 50%)",
    accent700: "hsl(262, 83%, 40%)",
    accent800: "hsl(262, 83%, 30%)",
    accent900: "hsl(262, 83%, 20%)",
    accent950: "hsl(262, 83%, 10%)",
    accent: "hsl(262, 83%, 65%)",
    accentHover: "hsl(262, 83%, 58%)",
    accentMuted: "hsl(262, 60%, 30%)",
    secondary50: "hsl(210, 100%, 95%)",
    secondary100: "hsl(210, 100%, 90%)",
    secondary200: "hsl(210, 100%, 80%)",
    secondary300: "hsl(210, 100%, 70%)",
    secondary400: "hsl(210, 100%, 60%)",
    secondary500: "hsl(210, 100%, 50%)", 
    secondary600: "hsl(210, 100%, 40%)",
    secondary700: "hsl(210, 100%, 30%)",
    secondary800: "hsl(210, 100%, 20%)",
    secondary900: "hsl(210, 100%, 10%)",
    success50: "hsl(142, 71%, 95%)",
    success100: "hsl(142, 71%, 90%)",
    success200: "hsl(142, 71%, 80%)",
    success300: "hsl(142, 71%, 70%)",
    success400: "hsl(142, 71%, 55%)",
    success500: "hsl(142, 71%, 45%)", 
    success600: "hsl(142, 71%, 35%)",
    success700: "hsl(142, 71%, 25%)",
    success800: "hsl(142, 71%, 15%)",
    success900: "hsl(142, 71%, 10%)",
    success: "hsl(142, 71%, 45%)",
    warning50: "hsl(38, 92%, 95%)",
    warning100: "hsl(38, 92%, 90%)",
    warning200: "hsl(38, 92%, 80%)",
    warning300: "hsl(38, 92%, 70%)",
    warning400: "hsl(38, 92%, 60%)",
    warning500: "hsl(38, 92%, 50%)", 
    warning600: "hsl(38, 92%, 40%)",
    warning700: "hsl(38, 92%, 30%)",
    warning800: "hsl(38, 92%, 20%)",
    warning900: "hsl(38, 92%, 10%)",
    warning: "hsl(38, 92%, 50%)",
    error50: "hsl(0, 84%, 95%)",
    error100: "hsl(0, 84%, 90%)",
    error200: "hsl(0, 84%, 80%)",
    error300: "hsl(0, 84%, 70%)",
    error400: "hsl(0, 84%, 60%)", 
    error500: "hsl(0, 84%, 50%)",
    error600: "hsl(0, 84%, 40%)",
    error700: "hsl(0, 84%, 30%)",
    error800: "hsl(0, 84%, 20%)",
    error900: "hsl(0, 84%, 10%)",
    error: "hsl(0, 84%, 60%)",
    info: "hsl(199, 89%, 48%)",
  },
  typography: {
    fontFamily: "Inter, system-ui, sans-serif",
    fontFamilyMono: "JetBrains Mono, Fira Code, monospace",
    display1: "text-7xl md:text-9xl font-black tracking-tighter leading-none",
    display2: "text-6xl md:text-8xl font-black tracking-tighter leading-[1.1]",
    hero: "text-5xl md:text-7xl font-bold tracking-tight leading-[1.15]",
    h1: "text-4xl md:text-5xl font-bold tracking-tight leading-tight",
    h2: "text-3xl md:text-4xl font-semibold tracking-tight leading-snug",
    h3: "text-2xl md:text-3xl font-semibold tracking-tight leading-snug",
    h4: "text-xl md:text-2xl font-medium tracking-tight leading-normal",
    h5: "text-lg md:text-xl font-medium tracking-tight leading-normal",
    h6: "text-base md:text-lg font-medium leading-normal",
    bodyLarge: "text-lg md:text-xl leading-relaxed",
    body: "text-base leading-relaxed",
    bodySmall: "text-sm leading-relaxed",
    small: "text-sm font-medium",
    xs: "text-xs font-medium",
    micro: "text-[10px] font-bold uppercase tracking-wider",
    code: "font-mono text-sm tracking-tight",
    codeSmall: "font-mono text-xs tracking-tight",
    prose: "prose prose-invert prose-p:leading-relaxed prose-headings:tracking-tight prose-a:text-[hsl(262,83%,65%)] hover:prose-a:text-[hsl(262,83%,58%)] max-w-none"
  },
  animationRules: [
    "Use fade-in with translateY(12px) for page content appearing, duration 400ms ease-out, staggered by 50ms for siblings.",
    "Use framer-motion <AnimatePresence mode='wait'> for route transitions, fading out current content before scaling in new content (scale from 0.98 to 1).",
    "Cards should translateY(-4px) and add a prominent border glow ([hsl(262,83%,65%)/0.4]) on hover. Duration 300ms cubic-bezier(0.4, 0, 0.2, 1).",
    "Buttons should scale(0.97) on active press and scale(1.03) on hover.",
    "Links should have an under-animated underline that expands from left to right on hover.",
    "Add a subtle pulse-glow animation to primary CTA buttons (box-shadow pulsing from 20% to 50% opacity every 2s)."
  ],
  specialInstructions: [
    "UNIVERSAL ADAPTABILITY: This design system is built to be universally adaptable. Whether the user asks for a Developer Portfolio, a SaaS Dashboard, an E-commerce Store, or a Blog, apply these colors, typography, and glassmorphism rules seamlessly. DO NOT ask the user what they want; execute their prompt immediately using this theme.",
    "IMAGE ASSETS: Use relevant high-quality placeholders for images. If building a portfolio, use mock project screenshots or tech-themed abstract images. If e-commerce, use sleek product mockups. Always apply a subtle dark overlay or blend mode (mix-blend-luminosity) to make images blend into the dark theme.",
    "This design favors extreme depth and layering. Use multiple surface levels (background -> surface -> elevated -> overlay) and shadow layers to create visual hierarchy.",
    "Glassmorphism (backdrop-blur) should be used for sticky navigation, floating command palettes, and modal overlays. Avoid using it for dense content cards as it impacts performance.",
    "Always add a subtle grid background pattern (40px or 60px grid with very low opacity lines) to hero sections and empty states for visual texture."
  ],
  componentPatterns: [
    {
      name: "Badge (Solid)",
      description: "Solid background badge for high emphasis status.",
      classes: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[hsl(262,83%,65%)] text-white shadow-sm shadow-[hsl(262,83%,65%)/0.3]",
    },
    {
      name: "Badge (Subtle)",
      description: "Subtle background badge for low emphasis status or categories (good for blog tags or portfolio skills).",
      classes: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[hsl(262,83%,65%)/0.1] text-[hsl(262,83%,65%)] border border-[hsl(262,83%,65%)/0.2]",
    },
    {
      name: "Button Primary",
      description: "Primary action button with glow. Use for main CTAs.",
      classes: "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-[hsl(222,47%,6%)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(262,83%,65%)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[hsl(262,83%,65%)] text-white hover:bg-[hsl(262,83%,58%)] shadow-lg shadow-[hsl(262,83%,65%)/0.25] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] h-11 px-8",
    },
    {
      name: "Button Outline",
      description: "Outline button for secondary actions.",
      classes: "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-[hsl(222,47%,6%)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(262,83%,65%)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-[hsl(222,20%,25%)] bg-transparent hover:bg-[hsl(222,20%,18%)] hover:text-white text-[hsl(210,40%,98%)] h-11 px-8",
    },
    {
      name: "Card Base",
      description: "Standard elevated surface for projects, products, or dashboard panels.",
      classes: "rounded-2xl border border-[hsl(222,20%,18%)] bg-[hsl(222,30%,10%)] text-[hsl(210,40%,98%)] shadow-lg shadow-black/20 overflow-hidden",
    },
    {
      name: "Card Interactive",
      description: "Card with hover effects for clickable items like portfolio projects or blog posts.",
      classes: "rounded-2xl border border-[hsl(222,20%,18%)] bg-[hsl(222,30%,10%)] text-[hsl(210,40%,98%)] shadow-lg shadow-black/20 overflow-hidden transition-all duration-300 hover:border-[hsl(262,83%,65%)/0.5] hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)] hover:-translate-y-1 group cursor-pointer",
    },
    {
      name: "Glass Header",
      description: "Sticky navigation bar with glassmorphism.",
      classes: "sticky top-0 z-50 w-full border-b border-[hsl(222,20%,18%)/0.5] bg-[hsl(222,47%,6%)/0.8] backdrop-blur-xl supports-[backdrop-filter]:bg-[hsl(222,47%,6%)/0.6]",
    },
    {
      name: "Input Base",
      description: "Standard text input for contact forms, search, or settings.",
      classes: "flex h-11 w-full rounded-xl border border-[hsl(222,20%,18%)] bg-[hsl(222,30%,10%)] px-4 py-2 text-sm text-[hsl(210,40%,98%)] ring-offset-[hsl(222,47%,6%)] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[hsl(215,15%,45%)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(262,83%,65%)] focus-visible:border-[hsl(262,83%,65%)] focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 transition-all",
    }
  ],
  enterpriseBlueprints: [
    {
      title: "Universal Hero Section (Portfolio/Landing)",
      description: "A highly impactful hero section suitable for a developer portfolio or product landing page. Features glowing abstract backgrounds and dual CTAs.",
      language: "tsx",
      code: \`// src/components/hero.tsx
import { ArrowRight, Github } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20 pb-32">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[hsl(222,47%,6%)]" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[hsl(262,83%,65%)]/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
        <div className="inline-flex items-center px-3 py-1 rounded-full border border-[hsl(262,83%,65%)/0.3] bg-[hsl(262,83%,65%)/0.1] text-[hsl(262,83%,65%)] text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-[hsl(262,83%,65%)] mr-2 animate-pulse" />
          Available for new projects
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 leading-[1.1]">
          Crafting digital experiences with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(262,83%,65%)] to-[hsl(210,100%,60%)]">extreme precision.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-[hsl(215,20%,65%)] mb-10 max-w-2xl mx-auto leading-relaxed">
          I build high-performance web applications, enterprise SaaS platforms, and stunning e-commerce experiences using modern web technologies.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(262,83%,65%)] focus-visible:ring-offset-2 bg-[hsl(262,83%,65%)] text-white hover:bg-[hsl(262,83%,58%)] shadow-lg shadow-[hsl(262,83%,65%)/0.25] hover:-translate-y-0.5 h-12 px-8 gap-2">
            View My Work <ArrowRight className="w-4 h-4" />
          </button>
          <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(262,83%,65%)] focus-visible:ring-offset-2 border border-[hsl(222,20%,25%)] bg-[hsl(222,30%,10%)] hover:bg-[hsl(222,20%,18%)] hover:text-white text-[hsl(210,40%,98%)] h-12 px-8 gap-2">
            <Github className="w-4 h-4" /> GitHub Profile
          </button>
        </div>
      </div>
    </section>
  );
}\`
    },
    {
      title: "Bento Grid (Projects or Features)",
      description: "A visually stunning asymmetric bento grid layout perfect for showing off portfolio projects or SaaS features.",
      language: "tsx",
      code: \`// src/components/bento-grid.tsx
import { ExternalLink, Code2, Rocket, Zap } from "lucide-react";

export function BentoGrid() {
  return (
    <section className="py-24 bg-[hsl(222,47%,6%)] relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Featured Work</h2>
          <p className="text-[hsl(215,20%,65%)] text-lg">A selection of my recent engineering and design projects.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* Main Large Card */}
          <div className="md:col-span-2 md:row-span-2 rounded-3xl border border-[hsl(222,20%,18%)] bg-[hsl(222,30%,10%)] overflow-hidden group cursor-pointer relative">
             <div className="absolute inset-0 bg-gradient-to-br from-[hsl(262,83%,65%)/0.1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="p-8 h-full flex flex-col justify-end relative z-10">
                <div className="mb-4 inline-flex items-center px-3 py-1 rounded-full bg-[hsl(222,20%,18%)] border border-[hsl(222,20%,25%)] text-xs font-semibold text-white w-fit">2026</div>
                <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-[hsl(262,83%,65%)] transition-colors">Enterprise E-Commerce Platform</h3>
                <p className="text-[hsl(215,20%,65%)] max-w-md">Built a headless Shopify storefront using Next.js 15, handling 10k+ daily transactions with extreme performance.</p>
             </div>
             {/* Abstract Graphic */}
             <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')] bg-cover bg-center [mask-image:linear-gradient(to_left,white,transparent),linear-gradient(to_bottom,white,transparent)] transition-transform duration-700 group-hover:scale-105" />
          </div>

          {/* Small Top Card */}
          <div className="rounded-3xl border border-[hsl(222,20%,18%)] bg-[hsl(222,30%,10%)] p-8 flex flex-col justify-between group cursor-pointer hover:border-[hsl(262,83%,65%)/0.5] transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[hsl(222,20%,18%)] flex items-center justify-center text-[hsl(262,83%,65%)] group-hover:bg-[hsl(262,83%,65%)] group-hover:text-white transition-colors">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Open Source Library</h3>
              <p className="text-sm text-[hsl(215,20%,65%)]">A widely adopted React animation primitive library with 5k+ stars.</p>
            </div>
          </div>

          {/* Small Bottom Card */}
          <div className="rounded-3xl border border-[hsl(222,20%,18%)] bg-[hsl(222,30%,10%)] p-8 flex flex-col justify-between group cursor-pointer hover:border-[hsl(262,83%,65%)/0.5] transition-colors relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[hsl(210,100%,60%)]/20 blur-[50px] rounded-full" />
            <div className="w-12 h-12 rounded-xl bg-[hsl(222,20%,18%)] flex items-center justify-center text-[hsl(210,100%,60%)] group-hover:bg-[hsl(210,100%,60%)] group-hover:text-white transition-colors relative z-10">
              <Zap className="w-6 h-6" />
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-2">AI Trading Bot</h3>
              <p className="text-sm text-[hsl(215,20%,65%)]">Real-time sentiment analysis and high-frequency execution engine.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}\`
    },
    {
      title: "E-Commerce Product Detail Page",
      description: "A sleek product page layout for a premium tech or apparel store.",
      language: "tsx",
      code: \`// src/app/product/[id]/page.tsx
"use client";
import { Star, ShieldCheck, Truck, ArrowRight, Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function ProductPage() {
  const [qty, setQty] = useState(1);

  return (
    <div className="min-h-screen bg-[hsl(222,47%,6%)] pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square rounded-3xl bg-[hsl(222,30%,10%)] border border-[hsl(222,20%,18%)] overflow-hidden relative group">
              <img src="https://images.unsplash.com/photo-1526406915894-7bcd65f60845?auto=format&fit=crop&q=80" alt="Product" className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex text-[hsl(38,92%,50%)]">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current opacity-30" />
                </div>
                <span className="text-sm text-[hsl(215,20%,65%)]">(128 reviews)</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Neural Engine Pro</h1>
              <p className="text-3xl font-light text-[hsl(215,20%,65%)]">$499.00</p>
            </div>

            <p className="text-[hsl(215,20%,65%)] leading-relaxed mb-8">
              The ultimate processing unit for local AI execution. Built with premium materials and engineered for maximum thermal efficiency. Ships directly from our manufacturing hub.
            </p>

            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center border border-[hsl(222,20%,18%)] rounded-xl bg-[hsl(222,30%,10%)] p-1">
                <button onClick={() => setQty(Math.max(1, qty-1))} className="w-10 h-10 flex items-center justify-center text-[hsl(215,20%,65%)] hover:text-white hover:bg-[hsl(222,20%,18%)] rounded-lg transition-colors"><Minus className="w-4 h-4"/></button>
                <span className="w-12 text-center text-white font-medium">{qty}</span>
                <button onClick={() => setQty(qty+1)} className="w-10 h-10 flex items-center justify-center text-[hsl(215,20%,65%)] hover:text-white hover:bg-[hsl(222,20%,18%)] rounded-lg transition-colors"><Plus className="w-4 h-4"/></button>
              </div>
              
              <button className="flex-1 h-12 bg-[hsl(262,83%,65%)] hover:bg-[hsl(262,83%,58%)] text-white font-bold rounded-xl shadow-[0_0_20px_hsl(262,83%,65%/0.3)] transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2">
                Add to Cart <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 pt-8 border-t border-[hsl(222,20%,18%)]">
              <div className="flex items-center gap-3 text-sm text-[hsl(215,20%,65%)]">
                <ShieldCheck className="w-5 h-5 text-[hsl(142,71%,45%)]" /> 2-Year International Warranty
              </div>
              <div className="flex items-center gap-3 text-sm text-[hsl(215,20%,65%)]">
                <Truck className="w-5 h-5 text-[hsl(142,71%,45%)]" /> Free Express Shipping Worldwide
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}\`
    },
    {
      title: "Blog / Article Layout",
      description: "A clean, highly readable layout for a technical blog post or documentation.",
      language: "tsx",
      code: \`// src/app/blog/[slug]/page.tsx
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BlogPost() {
  return (
    <article className="min-h-screen bg-[hsl(222,47%,6%)] pt-24 pb-32">
      <div className="max-w-3xl mx-auto px-4">
        <Link href="/blog" className="inline-flex items-center gap-2 text-[hsl(215,20%,65%)] hover:text-white mb-12 transition-colors text-sm font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to all articles
        </Link>
        
        <header className="mb-14">
          <div className="flex items-center gap-4 text-sm text-[hsl(215,20%,65%)] font-medium mb-6">
            <span className="px-3 py-1 rounded-full bg-[hsl(262,83%,65%)/0.1] text-[hsl(262,83%,65%)] border border-[hsl(262,83%,65%)/0.2]">Engineering</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Oct 24, 2026</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 8 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8 leading-tight">
            Building a Type-Safe Router from Scratch in Next.js 15
          </h1>
        </header>

        <div className="aspect-[21/9] rounded-2xl bg-[hsl(222,30%,10%)] border border-[hsl(222,20%,18%)] mb-14 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80" alt="Cover" className="w-full h-full object-cover mix-blend-luminosity opacity-80" />
        </div>

        <div className="prose prose-invert prose-p:leading-relaxed prose-headings:tracking-tight prose-a:text-[hsl(262,83%,65%)] hover:prose-a:text-[hsl(262,83%,58%)] max-w-none">
          <p className="text-xl text-[hsl(215,20%,65%)] leading-relaxed mb-8">
            Routing in single-page applications has always been a complex beast. With the introduction of React Server Components, the paradigm shifted entirely. Here is how we built a strict type-safe layer on top of it.
          </p>
          
          <h2>The Problem with Magic Strings</h2>
          <p>
            Traditionally, linking in React apps involves passing string literals to a Link component. This is inherently unsafe. If a route changes, your compiler won't warn you, and your users will encounter 404s.
          </p>
          
          <pre><code className="language-typescript">
// The unsafe way
&lt;Link href="/dashboard/settings" /&gt;

// The type-safe way
&lt;Link href={routes.dashboard.settings()} /&gt;
          </code></pre>
          
          <h2>Implementation Details</h2>
          <p>
            By leveraging TypeScript's advanced template literal types and recursive types, we generated a route manifest at build time.
          </p>
        </div>
      </div>
    </article>
  );
}\`
    }
  ]
};
`);

const finalOutput = output.join('\n');
fs.writeFileSync(targetFile, finalOutput);
console.log('Done! Refactored file.');
