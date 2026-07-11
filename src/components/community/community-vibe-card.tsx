"use client";

import { useState } from "react";
import { ArrowUp, User } from "lucide-react";
import type { CommunityVibe } from "@/lib/supabase/vibes-api";
import { toggleVibeVote, hasVotedForVibe } from "@/lib/supabase/vibes-api";
import { useEffect } from "react";
import { createClient } from "@/lib/supabase/client";

interface CommunityVibeCardProps {
  vibe: CommunityVibe;
}

export function CommunityVibeCard({ vibe }: CommunityVibeCardProps) {
  const [upvotes, setUpvotes] = useState(vibe.upvotes_count || 0);
  const [hasVoted, setHasVoted] = useState(false);
  const [isVoting, setIsVoting] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkVoteStatus = async () => {
      const supabase = createClient();
      const { data } = await supabase.auth.getSession();
      if (data.session?.user) {
        setIsLoggedIn(true);
        const voted = await hasVotedForVibe(vibe.id);
        setHasVoted(voted);
      }
    };
    checkVoteStatus();
  }, [vibe.id]);

  const handleVote = async () => {
    if (!isLoggedIn) {
      alert("Please log in to vote.");
      return;
    }
    
    if (isVoting) return;
    setIsVoting(true);
    
    try {
      await toggleVibeVote(vibe.id, hasVoted);
      setUpvotes((prev) => (hasVoted ? prev - 1 : prev + 1));
      setHasVoted(!hasVoted);
    } catch (err) {
      console.error("Failed to vote:", err);
    } finally {
      setIsVoting(false);
    }
  };

  // Safe color parsing
  const primaryColor = vibe.definition_json.colors?.accent || "#b1ff62";
  const bgColor = vibe.definition_json.colors?.background || "#111111";
  const textColor = vibe.definition_json.colors?.textPrimary || "#ffffff";

  return (
    <div className="group relative rounded-2xl overflow-hidden border border-[#333] bg-[#1a1a1a] transition-all hover:border-[#b1ff62]/50 hover:shadow-[0_0_30px_rgba(177,255,98,0.1)]">
      {/* Vibe Preview Strip */}
      <div 
        className="h-24 w-full relative p-4 flex items-center justify-center border-b border-[#333]"
        style={{ backgroundColor: bgColor }}
      >
        <span style={{ color: textColor }} className="font-bold text-xl tracking-tight">
          Aa
        </span>
        <div 
          className="absolute right-4 bottom-4 w-6 h-6 rounded-full" 
          style={{ backgroundColor: primaryColor }}
        />
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#b1ff62] transition-colors">
              {vibe.name}
            </h3>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <User className="w-3 h-3" />
              <span>Community Submit</span>
            </div>
          </div>
          <button
            onClick={handleVote}
            disabled={isVoting}
            className={`flex flex-col items-center justify-center p-2 rounded-lg border transition-colors ${
              hasVoted 
                ? "bg-[#b1ff62]/20 border-[#b1ff62]/50 text-[#b1ff62]" 
                : "bg-[#111] border-[#333] text-gray-400 hover:text-white hover:border-gray-500"
            }`}
          >
            <ArrowUp className={`w-4 h-4 mb-1 ${hasVoted ? "fill-current" : ""}`} />
            <span className="text-xs font-bold leading-none">{upvotes}</span>
          </button>
        </div>

        <p className="text-sm text-gray-400 line-clamp-2 mt-2">
          {vibe.short_description}
        </p>
      </div>
    </div>
  );
}
