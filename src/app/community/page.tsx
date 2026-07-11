"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { CommunityVibeCard } from "@/components/community/community-vibe-card";
import { SubmitVibeModal } from "@/components/community/submit-vibe-modal";
import { getCommunityVibes, type CommunityVibe } from "@/lib/supabase/vibes-api";
import { createClient } from "@/lib/supabase/client";
import { Loader2, Plus, Sparkles } from "lucide-react";

export default function CommunityVibesPage() {
  const [vibes, setVibes] = useState<CommunityVibe[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<"top" | "recent">("top");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userTier, setUserTier] = useState<string>("free");

  useEffect(() => {
    const fetchVibes = async () => {
      setIsLoading(true);
      try {
        const data = await getCommunityVibes(filter);
        setVibes(data);
      } catch (err) {
        console.error("Failed to load community vibes", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchVibes();
  }, [filter]);

  useEffect(() => {
    const checkTier = async () => {
      const supabase = createClient();
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        const { data } = await supabase
          .from("profiles")
          .select("tier")
          .eq("id", session.user.id)
          .single();
        if (data) setUserTier(data.tier);
      }
    };
    checkTier();
  }, []);

  const handleOpenModal = () => {
    if (userTier === "free" || userTier === "starter") {
      alert("Only Pro and Teams users can submit custom vibes. Upgrade your account to share your vibes!");
      return;
    }
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col font-sans selection:bg-[#b1ff62] selection:text-black">
      <Navbar />
      
      <main className="flex-1 flex flex-col pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a1a1a] border border-[#333] text-sm text-gray-300 mb-6">
                <Sparkles className="w-4 h-4 text-[#b1ff62]" />
                Vibe Marketplace
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
                Community <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b1ff62] to-[#00f0ff]">Vibes</span>
              </h1>
              <p className="text-lg text-gray-400">
                Discover custom design systems crafted by top engineers. Vote on your favorites, or submit your own pro-level vibes to the marketplace.
              </p>
            </div>

            <button
              onClick={handleOpenModal}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-[#b1ff62] transition-colors whitespace-nowrap"
            >
              <Plus className="w-5 h-5" />
              Submit a Vibe
            </button>
          </div>

          {/* Filters */}
          <div className="flex gap-2 mb-8 border-b border-[#333] pb-4">
            <button
              onClick={() => setFilter("top")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === "top" ? "bg-[#1a1a1a] text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              Top Rated
            </button>
            <button
              onClick={() => setFilter("recent")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === "recent" ? "bg-[#1a1a1a] text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              Recently Added
            </button>
          </div>

          {/* Grid */}
          {isLoading ? (
            <div className="flex-1 flex flex-col items-center justify-center min-h-[300px]">
              <Loader2 className="w-8 h-8 text-[#b1ff62] animate-spin mb-4" />
              <p className="text-gray-400">Loading community vibes...</p>
            </div>
          ) : vibes.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center min-h-[300px] text-center border border-dashed border-[#333] rounded-2xl bg-[#111]">
              <Sparkles className="w-12 h-12 text-gray-600 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">No vibes found</h3>
              <p className="text-gray-400 max-w-md mx-auto mb-6">
                The community hasn't submitted any approved vibes yet. Be the first to share your design system!
              </p>
              <button
                onClick={handleOpenModal}
                className="px-6 py-2 bg-[#1a1a1a] border border-[#333] rounded-lg text-white hover:border-[#b1ff62] hover:text-[#b1ff62] transition-colors"
              >
                Submit the first vibe
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {vibes.map((vibe) => (
                <CommunityVibeCard key={vibe.id} vibe={vibe} />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />

      <SubmitVibeModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
