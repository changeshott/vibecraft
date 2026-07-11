import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { CommunityVibeCard } from "@/components/community/community-vibe-card";
import { getCommunityVibes } from "@/lib/supabase/vibes-api";

export async function TopCommunityVibesSection() {
  // Fetch top 4 approved vibes
  const topVibes = await getCommunityVibes("top");
  const displayVibes = topVibes.slice(0, 4);

  if (displayVibes.length === 0) {
    return null; // Don't show the section if no community vibes exist yet
  }

  return (
    <section className="py-24 bg-[#0a0a0a] relative border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a1a1a] border border-[#333] text-sm text-[#b1ff62] mb-4">
              <Sparkles className="w-4 h-4" />
              Community Driven
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Top Community Vibes
            </h2>
            <p className="text-lg text-gray-400">
              Amazing design systems submitted and voted on by Pro users. 
              Find the perfect aesthetic for your next project.
            </p>
          </div>
          
          <Link
            href="/community"
            className="flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] border border-[#333] rounded-xl text-white font-medium hover:border-[#b1ff62] hover:text-[#b1ff62] transition-colors whitespace-nowrap"
          >
            Explore Marketplace
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayVibes.map((vibe) => (
            <CommunityVibeCard key={vibe.id} vibe={vibe} />
          ))}
        </div>
      </div>
    </section>
  );
}
