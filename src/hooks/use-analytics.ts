"use client";

import { useEffect, useCallback } from "react";
import { trackEvent } from "@/app/actions/analytics";

export function useAnalytics() {
  const getSessionId = useCallback(() => {
    if (typeof window === "undefined") return null;
    let sessionId = localStorage.getItem("vibecraft_session_id");
    if (!sessionId) {
      sessionId = crypto.randomUUID();
      localStorage.setItem("vibecraft_session_id", sessionId);
    }
    return sessionId;
  }, []);

  const track = useCallback(async (
    eventType: string, 
    stepName?: string, 
    vibeId?: string
  ) => {
    try {
      const sessionId = getSessionId();
      if (sessionId) {
        await trackEvent({ eventType, stepName, vibeId, sessionId });
      }
    } catch (error) {
      console.error("Analytics tracking failed:", error);
    }
  }, [getSessionId]);

  return { track };
}

// Helper component to track page views
export function PageTracker({ stepName }: { stepName: string }) {
  const { track } = useAnalytics();

  useEffect(() => {
    track("funnel_step", stepName);
  }, [track, stepName]);

  return null;
}
