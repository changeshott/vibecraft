import type { PricingPlan } from "@/lib/types";

export const pricingPlans: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    price: 0,
    period: "one-time",
    description: "Try VibeCraftz with basic vibes and limited options.",
    features: [
      "3 basic design vibes",
      "Next.js + Tailwind stack only",
      "1 IDE format (Cursor)",
      "Basic AI rules",
      "Watermark in output",
    ],
    highlighted: false,
    tier: "free",
  },
  {
    id: "pro",
    name: "Lifetime Pass",
    price: 39,
    period: "one-time",
    description: "Lifetime access to all current AND future vibes. The ultimate value.",
    features: [
      "All 7 current premium vibes",
      "All future premium vibes",
      "All tech stack options",
      "All IDE formats",
      "All AI rules",
      "No watermark",
      "Priority email support",
    ],
    highlighted: true,
    tier: "pro",
  }
];
