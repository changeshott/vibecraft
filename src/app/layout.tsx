import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});



export const metadata: Metadata = {
  metadataBase: new URL("https://vibecraftz.vercel.app"),
  title: {
    default: "VibeCraftz — Craft Stunning AI Output, Every Time",
    template: "%s | VibeCraftz",
  },
  description:
    "Generate AI system instructions that transform your coding assistant's design output. Pick a vibe, configure your stack, and download rules for Cursor, AGENTS.md (Universal Standard), or Claude Code.",
  keywords: [
    "ai coding assistant",
    "cursor rules",
    "AGENTS.md",
    "Agentic AI Foundation",
    "claude code configuration",
    "system instructions",
    "design system",
    "AI design",
    "developer tools",
  ],
  authors: [{ name: "changeshott" }],
  creator: "changeshott",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vibecraftz.vercel.app",
    siteName: "VibeCraftz",
    title: "VibeCraftz — Craft Stunning AI Output, Every Time",
    description:
      "Generate AI system instructions that transform your coding assistant's design output.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VibeCraftz — AI Design System Instructions Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VibeCraftz — Craft Stunning AI Output, Every Time",
    description:
      "Generate AI system instructions that transform your coding assistant's design output.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://vibecraftz.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${jetbrainsMono.variable} antialiased text-[15px]`}
      style={{ backgroundColor: "#090909" }}
    >
      <body className="min-h-screen flex flex-col bg-[#090909] text-white overflow-x-clip relative">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "VibeCraftz",
              url: "https://vibecraftz.vercel.app",
              description: "Generate AI system instructions that transform your coding assistant's design output.",
              publisher: {
                "@type": "Organization",
                name: "VibeCraftz"
              }
            })
          }}
        />
        <div className="fixed inset-0 opacity-[0.2] mix-blend-overlay pointer-events-none noise z-0" />
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>

      </body>
    </html>
  );
}
