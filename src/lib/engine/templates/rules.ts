import type { AIRule } from "@/lib/types";

export const allRules: AIRule[] = [
  {
    id: "anti-hallucination",
    name: "Anti-Hallucination",
    description: "Prevent AI from inventing packages, APIs, or patterns that don't exist",
    category: "anti-hallucination",
    tier: "free",
    rules: [
      "NEVER import packages or modules that were not explicitly listed in the project dependencies",
      "NEVER invent API endpoints, function signatures, or component props that don't exist in the codebase",
      "NEVER use deprecated APIs or features — always use the latest stable version syntax",
      "If you are unsure about a package API, state your uncertainty and suggest the user verify — do NOT guess",
      "NEVER create placeholder or mock data in production code without clearly marking it as TODO",
      "ALWAYS verify that imported CSS classes, Tailwind utilities, and component names actually exist",
      "When referencing external services (APIs, databases), use ONLY the configuration patterns documented above",
    ],
  },
  {
    id: "architecture",
    name: "Component Architecture",
    description: "Enforce clean separation of concerns and file organization",
    category: "architecture",
    tier: "free",
    rules: [
      "Separate components into Client Components ('use client') and Server Components — Server Components are the DEFAULT",
      "Add 'use client' ONLY when the component needs: useState, useEffect, event handlers (onClick, onChange), browser APIs, or third-party client libraries",
      "Keep components small and focused — if a component exceeds 150 lines, split it into sub-components",
      "Use a flat component structure: components/ui/ for primitives, components/[feature]/ for feature-specific",
      "Co-locate related files: component, styles, types, and tests should be near each other",
      "Export components as named exports (NOT default exports) for better refactoring support",
      "Shared types go in lib/types.ts — component-specific types stay in the component file",
    ],
  },
  {
    id: "responsive",
    name: "Responsive-First",
    description: "Enforce mobile-first responsive design patterns",
    category: "responsive",
    tier: "free",
    rules: [
      "ALWAYS design mobile-first — write base styles for mobile, then add breakpoint modifiers (sm:, md:, lg:, xl:)",
      "Use these breakpoints consistently: sm (640px), md (768px), lg (1024px), xl (1280px)",
      "Navigation: hamburger/drawer on mobile (< md), horizontal nav on desktop (>= md)",
      "Grid layouts: 1 column on mobile → 2 columns on tablet (md:) → 3-4 columns on desktop (lg:)",
      "Touch targets must be minimum 44x44 pixels on mobile — use min-h-11 min-w-11",
      "Font sizes: NEVER go below text-sm (14px) on mobile screens",
      "Test at these key widths: 375px (phone), 768px (tablet), 1280px (desktop), 1536px (wide)",
      "Use max-w-7xl mx-auto for main content containers to prevent ultra-wide layouts",
    ],
  },
  {
    id: "accessibility",
    name: "Accessibility (a11y)",
    description: "Ensure WCAG 2.1 AA compliance for all UI elements",
    category: "accessibility",
    tier: "pro",
    rules: [
      "All interactive elements MUST have visible focus styles — use focus-visible: outline with accent color",
      "Color contrast ratio must be at least 4.5:1 for normal text and 3:1 for large text",
      "All images must have meaningful alt text — decorative images use alt=''",
      "Use semantic HTML elements: <nav>, <main>, <section>, <article>, <aside>, <header>, <footer>",
      "Forms must have associated <label> elements — use htmlFor to link labels to inputs",
      "Keyboard navigation must work for ALL interactive elements — test Tab, Enter, Escape, Arrow keys",
      "Use aria-label, aria-describedby, and role attributes when semantic HTML alone is insufficient",
      "Modals must trap focus and return focus to the trigger element on close",
      "Page must have exactly ONE <h1> element, with heading levels in logical order (h1 → h2 → h3)",
    ],
  },
  {
    id: "animation-guidelines",
    name: "Animation Guidelines",
    description: "Standardize animation patterns for consistent UX",
    category: "animation",
    tier: "pro",
    rules: [
      "Use CSS transitions for simple state changes (hover, focus) — reserve framer-motion for complex sequences",
      "Standard durations: fast (150ms), base (200ms), slow (300ms) — NEVER exceed 500ms",
      "Standard easing: ease-out for entrances, ease-in for exits, ease-in-out for state changes",
      "Page content should fade in with a subtle upward motion: opacity 0→1, translateY 8px→0",
      "Stagger children by 50-80ms for list/grid items appearing sequentially",
      "ALWAYS respect prefers-reduced-motion: disable animations for users who prefer reduced motion",
      "Use will-change: transform on GPU-accelerated animations to prevent paint jank",
      "NEVER animate layout properties (width, height, top, left) — use transform and opacity only",
    ],
  },
  {
    id: "dark-mode",
    name: "Dark Mode",
    description: "Enforce consistent dark mode implementation",
    category: "dark-mode",
    tier: "pro",
    rules: [
      "Support both light and dark modes — use CSS custom properties for theming",
      "Use prefers-color-scheme media query as the default, with a manual toggle option",
      "Dark mode colors must maintain the same contrast ratios as light mode",
      "Dark backgrounds should be warm-tinted (blue-black or neutral), NOT pure black (#000)",
      "Surface hierarchy in dark mode: background (darkest) → surface → elevated (lightest)",
      "Images and icons should work in both modes — use SVGs with currentColor when possible",
      "Test ALL components in both modes — shadows, borders, and text must be visible in both",
    ],
  },
  {
    id: "performance",
    name: "Performance",
    description: "Optimize for fast loading and smooth interactions",
    category: "performance",
    tier: "pro",
    rules: [
      "Use next/image with appropriate width, height, and priority props for above-the-fold images",
      "Lazy load below-the-fold content using dynamic() imports or Suspense boundaries",
      "Minimize client-side JavaScript — prefer Server Components for non-interactive content",
      "Use React.memo() for expensive components that receive stable props",
      "Debounce search inputs and window resize handlers (300ms default)",
      "Optimize fonts: use next/font with display: 'swap' and preload only required subsets",
      "Bundle analysis: keep First Load JS under 100KB for critical pages",
    ],
  },
];

export const freeRules = allRules.filter((r) => r.tier === "free");
export const proRules = allRules.filter((r) => r.tier === "pro" || r.tier === "pro_plus");

export function getRuleById(id: string): AIRule | undefined {
  return allRules.find((r) => r.id === id);
}
