/* ============================================
   VIBECRAFTZ — Site Configuration
   ============================================ */

export const siteConfig = {
  name: "VibeCraftz",
  tagline: "Craft Stunning AI Output, Every Time",
  description:
    "Generate AI system instructions that transform your coding assistant's design output. Pick a vibe, configure your stack, and download rules for Cursor, Windsurf / Devin Desktop, or Claude Code.",
  url: "https://vibecraftz.dev",
  author: "changeshott",
  links: {
    twitter: "https://x.com/changeshott",
    github: "https://github.com/changeshott",
  },
  navLinks: [
    { label: "Generator", href: "/generator" },
    { label: "Gallery", href: "/gallery" },
    { label: "Pricing", href: "/pricing" },
    { label: "Docs", href: "/docs" },
    { label: "About", href: "/about" },
  ],
} as const;
