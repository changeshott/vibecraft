import type { VibeDefinition } from "@/lib/types";

export const neoBrutalism: VibeDefinition = {
  id: "neo-brutalism",
  name: "Neo-Brutalism",
  iconName: "Paintbrush",
  description:
    "A bold, unapologetically raw design featuring thick borders, flat primary colors, visible box shadows, and mono typography. Inspired by Gumroad, Figma community, and indie web.",
  shortDescription: "Thick borders, bold colors, raw typography",
  tier: "pro",
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
      name: "Brutal Card",
      description: "Card with thick border and offset shadow",
      classes:
        "bg-white rounded-lg border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200",
    },
    {
      name: "Brutal Card Accent",
      description: "Accent-colored card with brutal shadow",
      classes:
        "bg-[hsl(265,90%,60%)] rounded-lg border-2 border-black p-6 text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200",
    },
    {
      name: "Button Primary",
      description: "Bold button with hard shadow",
      classes:
        "bg-[hsl(265,90%,60%)] hover:bg-[hsl(265,90%,50%)] text-white font-bold uppercase text-sm tracking-wider rounded-lg px-6 py-3 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150",
    },
    {
      name: "Button Secondary",
      description: "White button with hard shadow",
      classes:
        "bg-white hover:bg-[hsl(60,20%,94%)] text-black font-bold uppercase text-sm tracking-wider rounded-lg px-6 py-3 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150",
    },
    {
      name: "Input",
      description: "Bold-bordered input",
      classes:
        "bg-white border-2 border-black rounded-lg px-4 py-3 text-black placeholder:text-[hsl(0,0%,50%)] focus:ring-4 focus:ring-[hsl(265,90%,60%)/0.3] outline-none font-mono transition-all",
    },
    {
      name: "Badge",
      description: "Colored tag with border",
      classes:
        "inline-flex items-center px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-[hsl(50,100%,55%)] text-black border-2 border-black",
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
    "Borders are the PRIMARY design element — they must be 2px solid black everywhere, NO exceptions",
    "Box shadows must be HARD (no blur) — offset shadow creates the brutal depth effect",
    "Typography should be monospace or bold sans-serif — fonts should feel raw and intentional",
    "Use a warm off-white background (not pure white) — hsl(60, 30%, 96%) for a paper-like feel",
    "Color splashes: use 2-3 bright accent colors (purple, yellow, green) — flat, no gradients",
    "This style embraces imperfection — slight rotations, mixed sizes, and asymmetry are GOOD",
    "NEVER use gradients, glassmorphism, or blur effects — they contradict the brutal aesthetic",
  ],
};
