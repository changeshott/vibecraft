import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read the latest tips, tricks, and updates on AI system instructions and Agentic design.",
  alternates: {
    canonical: "https://vibecraftz.vercel.app/blog",
  },
};

const POSTS = [
  {
    slug: "how-to-write-perfect-cursor-rules",
    title: "How to Write Perfect Cursor Rules for Next.js",
    date: "July 12, 2026",
    excerpt: "Learn the secrets to creating context-rich .cursorrules files that actually improve AI generation quality.",
  },
  {
    slug: "introducing-agents-md",
    title: "Introducing AGENTS.md: The Universal Standard",
    date: "July 5, 2026",
    excerpt: "Why the industry is moving towards AGENTS.md and how you can implement it in your repositories today.",
  },
  {
    slug: "ai-driven-design-systems",
    title: "Building Consistent UI with AI-Driven Design Systems",
    date: "June 28, 2026",
    excerpt: "Stop getting generic Tailwind components. Here is how to lock down your vibe and brand guidelines.",
  }
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-[#090909] min-h-screen relative">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              the <span className="text-[#b1ff62]">vibe</span> blog
            </h1>
            <p className="text-lg text-white/60">
              thoughts, tutorials, and updates on ai coding assistants.
            </p>
          </div>

          <div className="space-y-8">
            {POSTS.map((post) => (
              <article 
                key={post.slug} 
                className="p-8 rounded-[1.5rem] border border-white/[0.08] bg-[#111] hover:bg-white/[0.02] transition-colors group cursor-pointer"
              >
                <div className="text-[#b1ff62] text-sm font-bold tracking-widest uppercase mb-4">
                  {post.date}
                </div>
                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[#b1ff62] transition-colors">
                  {post.title}
                </h2>
                <p className="text-white/60 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <div className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2">
                  Read article <span className="text-[#b1ff62] group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </article>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-white/40 italic">More articles coming soon...</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
