import { createClient } from "./client";
import type { VibeDefinition } from "@/lib/types";

export type CommunityVibe = {
  id: string;
  user_id: string;
  name: string;
  short_description: string;
  definition_json: VibeDefinition;
  status: "pending" | "approved" | "rejected";
  upvotes_count: number;
  created_at: string;
};

export async function getCommunityVibes(filter: "top" | "recent" = "top"): Promise<CommunityVibe[]> {
  const supabase = createClient();
  let query = supabase
    .from("community_vibes")
    .select("*")
    .eq("status", "approved");

  if (filter === "top") {
    query = query.order("upvotes_count", { ascending: false }).order("created_at", { ascending: false });
  } else {
    query = query.order("created_at", { ascending: false });
  }

  const { data, error } = await query;

  if (error) {
    // 42P01 is "undefined_table", PGRST116 is "schema cache error"
    if (error.code !== "42P01" && error.code !== "PGRST116") {
      console.error("Error fetching community vibes:", error.message || error);
    }
    return [];
  }

  // Cast JSONB to VibeDefinition
  return data.map((v) => ({
    ...v,
    definition_json: v.definition_json as unknown as VibeDefinition,
  })) as CommunityVibe[];
}

export async function submitCommunityVibe(name: string, description: string, definition: VibeDefinition) {
  const supabase = createClient();
  const { data: session } = await supabase.auth.getSession();
  
  if (!session?.session?.user) {
    throw new Error("Must be logged in to submit a vibe");
  }

  // Ensure the user is Pro or Teams tier
  const { data: profile } = await supabase
    .from("profiles")
    .select("tier")
    .eq("id", session.session.user.id)
    .single();

  if (!profile || (profile.tier !== "pro" && profile.tier !== "pro_plus" && profile.tier !== "teams")) {
    throw new Error("Must be a Pro user to submit community vibes");
  }

  const { data, error } = await supabase
    .from("community_vibes")
    .insert({
      user_id: session.session.user.id,
      name,
      short_description: description,
      definition_json: definition as any,
    })
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function hasVotedForVibe(vibeId: string): Promise<boolean> {
  const supabase = createClient();
  const { data: session } = await supabase.auth.getSession();
  
  if (!session?.session?.user) {
    return false;
  }

  const { data, error } = await supabase
    .from("community_vibe_votes")
    .select("vibe_id")
    .eq("vibe_id", vibeId)
    .eq("user_id", session.session.user.id)
    .single();

  return !error && !!data;
}

export async function toggleVibeVote(vibeId: string, currentlyVoted: boolean) {
  const supabase = createClient();
  const { data: session } = await supabase.auth.getSession();
  
  if (!session?.session?.user) {
    throw new Error("Must be logged in to vote");
  }

  const userId = session.session.user.id;

  if (currentlyVoted) {
    const { error } = await supabase
      .from("community_vibe_votes")
      .delete()
      .eq("vibe_id", vibeId)
      .eq("user_id", userId);
      
    if (error) throw error;
  } else {
    const { error } = await supabase
      .from("community_vibe_votes")
      .insert({
        vibe_id: vibeId,
        user_id: userId,
      });
      
    if (error) throw error;
  }
}
