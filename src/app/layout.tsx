import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});



export const metadata: Metadata = {
  metadataBase: new URL("https://vibecraftz.dev"),
  title: {
    default: "VibeCraftz — Craft Stunning AI Output, Every Time",
    template: "%s | VibeCraftz",
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
    url: "https://vibecraftz.dev",
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
        <div className="fixed inset-0 opacity-[0.2] mix-blend-overlay pointer-events-none noise z-0" />
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
