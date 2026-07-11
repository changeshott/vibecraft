"use server";

import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { Database } from "@/lib/database.types";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";

// Helper to get service role client for admin data fetching
const getAdminClient = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  if (!url || !key) {
    throw new Error("Missing Supabase URL or Key");
  }

  return createSupabaseClient<Database>(url, key);
};

export async function trackEvent({
  eventType,
  stepName,
  vibeId,
  sessionId,
}: {
  eventType: string;
  stepName?: string;
  vibeId?: string;
  sessionId?: string;
}) {
  try {
    const supabase = await createClient();
    const { data: { session } } = await supabase.auth.getSession();
    
    await supabase.from("analytics_events").insert({
      event_type: eventType,
      step_name: stepName || null,
      vibe_id: vibeId || null,
      session_id: sessionId || null,
      user_id: session?.user?.id || null,
    });
  } catch (error) {
    console.error("Error tracking analytics event:", error);
    // Don't throw - we don't want analytics to break the main flow
  }
}

export async function getDashboardData() {
  try {
    const adminClient = getAdminClient();
    
    // Total generations
    const { count: totalGenerations } = await adminClient
      .from("analytics_events")
      .select("*", { count: "exact", head: true })
      .eq("event_type", "generation");

    // Total unique users (using session_id as proxy for unique visitors if not logged in)
    const { data: uniqueSessions } = await adminClient
      .from("analytics_events")
      .select("session_id")
      .not("session_id", "is", null);
      
    // Calculate unique active users
    const uniqueUsersSet = new Set(uniqueSessions?.map(s => s.session_id));
    const activeUsers = uniqueUsersSet.size;

    // Daily generations (last 7 days)
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    
    const { data: dailyData } = await adminClient
      .from("analytics_events")
      .select("created_at")
      .eq("event_type", "generation")
      .gte("created_at", sevenDaysAgo.toISOString());

    // Aggregate by day
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dailyCounts: Record<string, number> = {};
    
    // Initialize last 7 days with 0
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      dailyCounts[dayNames[d.getDay()]] = 0;
    }

    dailyData?.forEach(event => {
      const date = new Date(event.created_at || Date.now());
      const dayName = dayNames[date.getDay()];
      if (dailyCounts[dayName] !== undefined) {
        dailyCounts[dayName]++;
      }
    });

    const dailyGenerations = Object.entries(dailyCounts).map(([date, generations]) => ({
      date,
      generations
    }));

    // Popular vibes
    const { data: vibesData } = await adminClient
      .from("analytics_events")
      .select("vibe_id")
      .eq("event_type", "generation")
      .not("vibe_id", "is", null);

    const vibeCounts: Record<string, number> = {};
    let maxVibeUses = 0;
    vibesData?.forEach(event => {
      if (event.vibe_id) {
        vibeCounts[event.vibe_id] = (vibeCounts[event.vibe_id] || 0) + 1;
        if (vibeCounts[event.vibe_id] > maxVibeUses) {
          maxVibeUses = vibeCounts[event.vibe_id];
        }
      }
    });

    const popularVibes = Object.entries(vibeCounts)
      .map(([name, uses]) => ({
        name,
        uses,
        percentage: maxVibeUses > 0 ? Math.round((uses / maxVibeUses) * 100) : 0,
      }))
      .sort((a, b) => b.uses - a.uses)
      .slice(0, 4);

    // Funnel Steps
    const { data: funnelData } = await adminClient
      .from("analytics_events")
      .select("step_name")
      .eq("event_type", "funnel_step");
      
    const stepCounts: Record<string, number> = {
      'landing_page': 0,
      'generator_started': 0,
      'vibe_selected': 0,
      'code_exported': 0,
    };
    
    funnelData?.forEach(event => {
      if (event.step_name && stepCounts[event.step_name] !== undefined) {
        stepCounts[event.step_name]++;
      }
    });
    
    // Code generated is tracked under event_type = "generation"
    const funnelSteps = [
      { step: "Landing Page", users: stepCounts.landing_page, color: "bg-indigo-500" },
      { step: "Started Generator", users: stepCounts.generator_started, color: "bg-blue-500" },
      { step: "Selected Vibe", users: stepCounts.vibe_selected, color: "bg-cyan-500" },
      { step: "Generated Code", users: totalGenerations || 0, color: "bg-emerald-500" },
      { step: "Exported", users: stepCounts.code_exported, color: "bg-teal-500" },
    ];

    // Conversion rate (mocked for now as we don't track payments in analytics_events)
    // To do this properly we'd query the profiles table for tier = 'pro' vs 'free'
    const { count: proUsers } = await adminClient
      .from("profiles")
      .select("*", { count: "exact", head: true })
      .in("tier", ["pro", "pro_plus"]);
      
    const { count: allUsers } = await adminClient
      .from("profiles")
      .select("*", { count: "exact", head: true });
      
    const conversionRate = allUsers && allUsers > 0 && proUsers 
      ? ((proUsers / allUsers) * 100).toFixed(1) + "%" 
      : "0%";

    return {
      totalGenerations: totalGenerations || 0,
      activeUsers: activeUsers || 0,
      conversionRate,
      dailyGenerations,
      popularVibes,
      funnelSteps
    };
    
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    return null;
  }
}
