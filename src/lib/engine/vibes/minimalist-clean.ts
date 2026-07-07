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
      name: "Card",
      description: "Clean white card with subtle shadow",
      classes:
        "bg-white rounded-2xl border border-[hsl(0,0%,90%)] p-6 shadow-sm hover:shadow-md transition-shadow duration-300",
    },
    {
      name: "Button Primary",
      description: "Solid accent button",
      classes:
        "bg-[hsl(221,83%,53%)] hover:bg-[hsl(221,83%,46%)] text-white rounded-lg px-5 py-2.5 font-medium transition-all duration-200 shadow-sm hover:shadow-md",
    },
    {
      name: "Button Secondary",
      description: "Outlined button",
      classes:
        "bg-white hover:bg-[hsl(0,0%,98%)] text-[hsl(0,0%,9%)] rounded-lg px-5 py-2.5 font-medium border border-[hsl(0,0%,90%)] transition-all duration-200",
    },
    {
      name: "Input",
      description: "Clean input with focus border",
      classes:
        "bg-white border border-[hsl(0,0%,90%)] rounded-lg px-4 py-2.5 text-[hsl(0,0%,9%)] placeholder:text-[hsl(0,0%,60%)] focus:border-[hsl(221,83%,53%)] focus:ring-2 focus:ring-[hsl(221,83%,53%)/0.1] outline-none transition-all",
    },
    {
      name: "Badge",
      description: "Light accent badge",
      classes:
        "inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-[hsl(221,60%,93%)] text-[hsl(221,83%,53%)]",
    },
    {
      name: "Navigation",
      description: "Clean sticky navbar with border bottom",
      classes:
        "fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-[hsl(0,0%,94%)] z-50",
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
    "This design is driven by typography and whitespace — generous padding and margins are essential",
    "Use a maximum content width of 680px for text-heavy pages (blog-style readability)",
    "Accent color (blue) should be used ONLY for interactive elements — links, buttons, focus rings",
    "Shadows should be extremely subtle — never heavy or dramatic",
    "Section spacing should be at least 80px (py-20) to let content breathe",
    "Borders should be barely visible — use 1px with low-opacity colors",
  ],
};
