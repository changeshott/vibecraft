import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});



export const metadata: Metadata = {
  title: {
    default: "VibeCraft — Craft Stunning AI Output, Every Time",
    template: "%s | VibeCraft",
  },
  description:
    "Generate AI system instructions that transform your coding assistant's design output. Pick a vibe, configure your stack, and download rules for Cursor, Windsurf, or Claude Code.",
  keywords: [
    "AI coding",
    "cursor rules",
    "windsurf rules",
    "vibe coding",
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
    url: "https://vibecraft.dev",
    siteName: "VibeCraft",
    title: "VibeCraft — Craft Stunning AI Output, Every Time",
    description:
      "Generate AI system instructions that transform your coding assistant's design output.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VibeCraft — AI Design System Instructions Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VibeCraft — Craft Stunning AI Output, Every Time",
    description:
      "Generate AI system instructions that transform your coding assistant's design output.",
    images: ["/og-image.png"],
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
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
