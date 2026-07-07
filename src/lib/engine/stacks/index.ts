import type { StackDefinition } from "@/lib/types";

export const allStacks: StackDefinition[] = [
  // --- Frameworks ---
  {
    id: "nextjs-15",
    name: "Next.js 15",
    category: "framework",
    version: "15",
    iconName: "simple-icons:nextdotjs",
    description: "React framework with App Router, SSR, and API routes",
    rules: [
      "ALWAYS use Next.js 15 with the App Router (app/ directory)",
      "ALWAYS use Server Components by default — add 'use client' ONLY when the component needs browser APIs, hooks, or event handlers",
      "ALWAYS use next/image for images — NEVER use raw <img> tags",
      "ALWAYS use next/link for internal navigation — NEVER use <a> for internal routes",
      "ALWAYS use next/font for loading fonts — NEVER use external CSS font imports",
      "Place API endpoints in app/api/ directory using route.ts files",
      "Use loading.tsx for loading states and error.tsx for error boundaries",
      "Use metadata exports for SEO — NEVER use raw <meta> tags in components",
    ],
    imports: ["next", "next/image", "next/link", "next/font/google"],
    fileStructure: [
      "app/layout.tsx — Root layout with providers and global styles",
      "app/page.tsx — Home page",
      "app/[route]/page.tsx — Route pages",
      "app/api/[endpoint]/route.ts — API routes",
      "components/ — Reusable components",
      "lib/ — Utility functions and configurations",
      "public/ — Static assets",
    ],
  },
  {
    id: "vite-react",
    name: "Vite + React",
    category: "framework",
    version: "6",
    iconName: "simple-icons:vite",
    description: "Lightning-fast React development with Vite bundler",
    rules: [
      "Use Vite 6 with React 19 and TypeScript",
      "Use react-router-dom v7 for routing",
      "Use Vite's built-in environment variable handling (import.meta.env)",
      "Place all pages in src/pages/ directory",
      "Place reusable components in src/components/ directory",
      "Use lazy() and Suspense for code-splitting routes",
    ],
    imports: ["react", "react-dom", "react-router-dom"],
    fileStructure: [
      "src/main.tsx — Entry point",
      "src/App.tsx — Root component with router",
      "src/pages/ — Page components",
      "src/components/ — Reusable components",
      "src/lib/ — Utilities",
      "public/ — Static assets",
    ],
  },

  // --- Styling ---
  {
    id: "tailwindcss-4",
    name: "Tailwind CSS 4",
    category: "styling",
    version: "4",
    iconName: "simple-icons:tailwindcss",
    description: "Utility-first CSS framework — latest version with CSS-first config",
    rules: [
      "ALWAYS use Tailwind CSS utility classes for styling — NEVER write custom CSS unless absolutely necessary",
      "NEVER use arbitrary values like text-[#ff0000] — define design tokens in the CSS @theme block instead",
      "NEVER use inline style={{ }} attributes — Tailwind classes cover all cases",
      "NEVER use !important — restructure your class order or specificity instead",
      "Use responsive prefixes mobile-first: sm:, md:, lg:, xl:",
      "Use hover:, focus:, active: state prefixes for interactive styles",
      "Group related utilities logically: layout → spacing → sizing → colors → typography → effects",
    ],
    imports: ["tailwindcss"],
    fileStructure: [
      "app/globals.css — Global styles with @import 'tailwindcss' and @theme block",
      "postcss.config.mjs — PostCSS configuration with @tailwindcss/postcss",
    ],
  },

  // --- Component Libraries ---
  {
    id: "shadcn-ui",
    name: "shadcn/ui",
    category: "components",
    version: "latest",
    iconName: "simple-icons:shadcnui",
    description: "Beautifully designed, accessible components built on Radix UI",
    rules: [
      "ALWAYS use shadcn/ui components as the base for UI elements — DO NOT build custom implementations of common components (Button, Dialog, Select, etc.)",
      "Import shadcn components from @/components/ui/",
      "Customize shadcn components via Tailwind classes and the cn() utility — NEVER modify the component source directly",
      "Use the shadcn CLI to add new components: npx shadcn@latest add [component]",
      "All shadcn components support dark mode out of the box — leverage this",
    ],
    imports: ["@radix-ui/*", "class-variance-authority"],
    fileStructure: [
      "components/ui/ — shadcn/ui components (auto-generated via CLI)",
      "lib/utils.ts — cn() utility function for class merging",
    ],
  },

  // --- Icons ---
  {
    id: "lucide-react",
    name: "Lucide React",
    category: "icons",
    version: "latest",
    iconName: "simple-icons:lucide",
    description: "Beautiful, consistent open-source icon library",
    rules: [
      "ALWAYS use lucide-react for icons — NEVER use other icon libraries or raw SVGs",
      "Import icons individually: import { IconName } from 'lucide-react'",
      "Use consistent icon sizing: size={16} for small, size={20} for medium, size={24} for large",
      "Use strokeWidth={2} by default, strokeWidth={2.5} for emphasis",
      "Add meaningful aria-label to decorative icons that convey meaning",
    ],
    imports: ["lucide-react"],
    fileStructure: [],
  },

  // --- Animation ---
  {
    id: "framer-motion",
    name: "Framer Motion",
    category: "animation",
    version: "latest",
    iconName: "simple-icons:framer",
    description: "Production-ready motion library for React",
    rules: [
      "Use framer-motion for all complex animations — page transitions, layout animations, gestures",
      "Import motion components: import { motion, AnimatePresence } from 'framer-motion'",
      "Use AnimatePresence for exit animations on conditionally rendered elements",
      "Define reusable animation variants as constant objects outside components",
      "Use CSS transitions (via Tailwind) for simple hover/focus effects — reserve framer-motion for complex sequences",
      "ALWAYS add the 'will-change' property for GPU-accelerated animations to avoid jank",
    ],
    imports: ["framer-motion"],
    fileStructure: [],
  },

  // --- Database ---
  {
    id: "supabase",
    name: "Supabase",
    category: "database",
    version: "latest",
    iconName: "simple-icons:supabase",
    description: "Open-source Firebase alternative with PostgreSQL, Auth, and Storage",
    rules: [
      "Use @supabase/supabase-js for database operations and @supabase/ssr for auth in Next.js",
      "Create separate Supabase clients for browser (client.ts) and server (server.ts) usage",
      "ALWAYS use Row Level Security (RLS) policies — NEVER expose tables without RLS",
      "Use Supabase Auth for authentication — supports Magic Link, OAuth, and password",
      "Store environment variables in .env.local: NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY",
      "Use typed queries with generated types from supabase gen types",
    ],
    imports: ["@supabase/supabase-js", "@supabase/ssr"],
    fileStructure: [
      "lib/supabase/client.ts — Browser Supabase client",
      "lib/supabase/server.ts — Server Supabase client",
      "supabase/migrations/ — SQL migration files",
    ],
  },

  // --- Auth ---
  {
    id: "supabase-auth",
    name: "Supabase Auth",
    category: "auth",
    version: "latest",
    iconName: "ShieldCheck",
    description: "Built-in authentication with Supabase",
    rules: [
      "Use Supabase Auth for all authentication — Magic Link (passwordless) as default",
      "Support GitHub OAuth as a secondary login method",
      "Use middleware.ts to protect routes and refresh auth tokens",
      "Store user session in cookies using @supabase/ssr helpers",
      "Create a profiles table linked to auth.users for extended user data",
    ],
    imports: ["@supabase/ssr"],
    fileStructure: [
      "app/auth/login/page.tsx — Login page",
      "app/auth/callback/route.ts — OAuth callback handler",
      "middleware.ts — Auth middleware for route protection",
    ],
  },

  // --- Deploy ---
  {
    id: "vercel",
    name: "Vercel",
    category: "deploy",
    version: "latest",
    iconName: "Triangle",
    description: "Optimal deployment platform for Next.js applications",
    rules: [
      "Deploy to Vercel for zero-configuration hosting optimized for Next.js",
      "Use Vercel Environment Variables for secrets — NEVER commit .env files",
      "Use Vercel Analytics for web vitals tracking",
      "Configure vercel.json only if custom headers, redirects, or rewrites are needed",
      "Use Vercel's Edge Functions for low-latency API routes when appropriate",
    ],
    imports: [],
    fileStructure: ["vercel.json — Optional Vercel configuration"],
  },
];

export function getStacksByCategory(category: string): StackDefinition[] {
  return allStacks.filter((s) => s.category === category);
}

export function getStackById(id: string): StackDefinition | undefined {
  return allStacks.find((s) => s.id === id);
}

export const stackCategories = [
  { id: "framework", label: "Framework", required: true },
  { id: "styling", label: "Styling", required: true },
  { id: "components", label: "Components", required: false },
  { id: "icons", label: "Icons", required: false },
  { id: "animation", label: "Animation", required: false },
  { id: "database", label: "Database", required: false },
  { id: "auth", label: "Authentication", required: false },
  { id: "deploy", label: "Deployment", required: false },
] as const;
