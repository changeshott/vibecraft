import type { VibeDefinition } from "@/lib/types";

export const darkSaasPro: VibeDefinition = {
  id: "dark-saas-pro",
  name: "Dark SaaS Pro",
  iconName: "Moon",
  description:
    "A sleek, modern dark theme inspired by Linear, Vercel, and Raycast. Features deep blue-black backgrounds, vibrant purple accents, and glassmorphism cards.",
  shortDescription: "Dark mode with purple accents & glassmorphism",
  tier: "free",
  previewImage: "/vibes/dark-saas-pro.png",
  colors: {
    background: "hsl(222, 47%, 6%)",
    surface: "hsl(222, 30%, 10%)",
    surfaceHover: "hsl(222, 30%, 14%)",
    elevated: "hsl(222, 25%, 12%)",
    border: "hsl(222, 20%, 18%)",
    borderSubtle: "hsl(222, 15%, 14%)",
    textPrimary: "hsl(210, 40%, 98%)",
    textSecondary: "hsl(215, 20%, 65%)",
    textTertiary: "hsl(215, 15%, 45%)",
    accent: "hsl(262, 83%, 65%)",
    accentHover: "hsl(262, 83%, 58%)",
    accentMuted: "hsl(262, 60%, 30%)",
    success: "hsl(142, 71%, 45%)",
    warning: "hsl(38, 92%, 50%)",
    error: "hsl(0, 84%, 60%)",
  },
  typography: {
    fontFamily: "Inter, system-ui, sans-serif",
    fontFamilyMono: "JetBrains Mono, Fira Code, monospace",
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
      name: "Card",
      description: "Elevated surface with subtle border and hover glow",
      classes:
        "bg-[hsl(222,30%,10%)] rounded-2xl border border-[hsl(222,20%,18%)] p-6 shadow-lg shadow-black/20 hover:border-[hsl(262,83%,65%)/0.3] transition-all duration-300",
    },
    {
      name: "Button Primary",
      description: "Accent-colored button with glow shadow",
      classes:
        "bg-[hsl(262,83%,65%)] hover:bg-[hsl(262,83%,58%)] text-white rounded-xl px-6 py-3 font-medium transition-all duration-200 shadow-lg shadow-[hsl(262,83%,65%)/0.25] hover:-translate-y-0.5",
    },
    {
      name: "Button Secondary",
      description: "Surface button with border",
      classes:
        "bg-[hsl(222,30%,10%)] hover:bg-[hsl(222,30%,14%)] text-[hsl(210,40%,98%)] rounded-xl px-6 py-3 font-medium border border-[hsl(222,20%,18%)] transition-all duration-200",
    },
    {
      name: "Input",
      description: "Dark input with focus ring",
      classes:
        "bg-[hsl(222,30%,10%)] border border-[hsl(222,20%,18%)] rounded-xl px-4 py-3 text-[hsl(210,40%,98%)] placeholder:text-[hsl(215,15%,45%)] focus:border-[hsl(262,83%,65%)] focus:ring-2 focus:ring-[hsl(262,83%,65%)/0.2] outline-none transition-all",
    },
    {
      name: "Badge",
      description: "Small label with muted accent background",
      classes:
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[hsl(262,60%,30%)/0.3] text-[hsl(262,83%,65%)] border border-[hsl(262,83%,65%)/0.2]",
    },
    {
      name: "Navigation",
      description: "Glass-effect sticky navbar",
      classes:
        "fixed top-0 w-full bg-[hsl(222,47%,6%)/0.8] backdrop-blur-xl border-b border-[hsl(222,20%,18%)/0.5] z-50",
    },
  ],
  animationRules: [
    "Use fade-in with translateY(8px) for page content appearing, duration 300ms ease-out",
    "Cards should translateY(-2px) and add a subtle border glow on hover",
    "Buttons should scale(0.98) on active press and scale(1.02) on hover",
    "Stagger child elements by 60ms on page load for a cascading effect",
    "Use framer-motion for page transitions with opacity and y-axis animation",
    "NEVER use animation duration longer than 500ms",
    "NEVER use bounce or elastic easing — always use ease-out or spring",
    "Add a subtle pulse-glow animation to primary CTA buttons",
  ],
  specialInstructions: [
    "This design favors depth and layering — use multiple surface levels (background → surface → elevated) to create visual hierarchy",
    "Accent color (purple) should be used sparingly — only for primary actions, active states, and key highlights",
    "Text hierarchy is critical: primary for headings, secondary for body, tertiary for labels and metadata",
    "Glassmorphism should be used for overlays and navigation only — not for content cards",
    "Always add a subtle grid background pattern (60px grid) to hero sections for visual texture",
  ],
};
