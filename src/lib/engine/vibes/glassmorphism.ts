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
      name: "Glass Card",
      description: "Frosted glass card with blur backdrop",
      classes:
        "bg-[hsl(230,25%,12%)/0.4] backdrop-blur-xl rounded-2xl border border-[hsl(230,20%,30%)/0.3] p-6 shadow-lg shadow-black/20 hover:bg-[hsl(230,25%,16%)/0.5] hover:border-[hsl(174,80%,50%)/0.3] transition-all duration-300",
    },
    {
      name: "Button Primary",
      description: "Teal accent button with glow",
      classes:
        "bg-[hsl(174,80%,50%)] hover:bg-[hsl(174,80%,43%)] text-[hsl(230,35%,7%)] rounded-xl px-6 py-3 font-semibold transition-all duration-200 shadow-lg shadow-[hsl(174,80%,50%)/0.3] hover:-translate-y-0.5",
    },
    {
      name: "Button Glass",
      description: "Glass-effect button",
      classes:
        "bg-white/10 backdrop-blur-md hover:bg-white/15 text-white rounded-xl px-6 py-3 font-medium border border-white/10 transition-all duration-200",
    },
    {
      name: "Input",
      description: "Glass-effect input field",
      classes:
        "bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:border-[hsl(174,80%,50%)/0.5] focus:ring-2 focus:ring-[hsl(174,80%,50%)/0.1] outline-none transition-all",
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
    "Glassmorphism requires a visually rich background — use gradient orbs, mesh gradients, or blurred shapes BEHIND the glass panels",
    "backdrop-blur values should be between 12px and 24px — too little loses the glass effect, too much looks flat",
    "Layer depth: background orbs → glass panels → content. Minimum 3 visual layers",
    "Accent color (teal) creates striking contrast against the dark purple-blue background — use it for key CTAs and data highlights",
    "Borders on glass elements must be semi-transparent white or accent — NEVER solid colors",
    "This style is heavy on GPU — use will-change: transform on animated glass elements for performance",
  ],
};
