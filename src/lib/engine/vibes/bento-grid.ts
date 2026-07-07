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
      name: "Bento Card Small",
      description: "Standard bento grid card (1x1)",
      classes:
        "bg-white rounded-3xl border border-[hsl(220,13%,91%)] p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300",
    },
    {
      name: "Bento Card Large",
      description: "Feature bento card (2x1 or 1x2)",
      classes:
        "bg-white rounded-3xl border border-[hsl(220,13%,91%)] p-8 md:col-span-2 hover:shadow-lg hover:-translate-y-1 transition-all duration-300",
    },
    {
      name: "Bento Card Accent",
      description: "Highlighted bento card with accent gradient",
      classes:
        "bg-gradient-to-br from-[hsl(24,95%,53%)] to-[hsl(38,92%,50%)] rounded-3xl p-8 text-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300",
    },
    {
      name: "Button Primary",
      description: "Bold rounded button with accent color",
      classes:
        "bg-[hsl(24,95%,53%)] hover:bg-[hsl(24,95%,46%)] text-white rounded-full px-8 py-3.5 font-semibold text-base transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5",
    },
    {
      name: "Button Secondary",
      description: "Ghost button with border",
      classes:
        "bg-transparent hover:bg-[hsl(220,14%,96%)] text-[hsl(220,14%,10%)] rounded-full px-8 py-3.5 font-semibold border-2 border-[hsl(220,13%,91%)] transition-all duration-200",
    },
    {
      name: "Grid Layout",
      description: "Bento grid container",
      classes:
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6",
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
    "Bento grids must use CSS Grid (not flexbox) for proper asymmetric layouts",
    "Mix card sizes: combine 1x1, 2x1, and 1x2 cards for visual variety",
    "At least one card in each grid should use the Accent gradient",
    "Large hero typography is a defining feature — go BIG on headings (text-8xl on desktop)",
    "Rounded corners should be consistently large (rounded-3xl / 24px) across all cards",
    "Background should be a subtle warm gray, NOT pure white — this creates contrast with white cards",
  ],
};
