import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import crypto from "crypto";

export async function POST(request: Request) {
  try {
    const rawBody = await request.text();
    const signature = request.headers.get("x-signature") || "";
    const secret = process.env.LEMON_SQUEEZY_WEBHOOK_SECRET;

    if (!secret) {
      console.error("Missing LEMON_SQUEEZY_WEBHOOK_SECRET");
      return NextResponse.json({ error: "Server Configuration Error" }, { status: 500 });
    }

    // Verify signature
    const hmac = crypto.createHmac("sha256", secret);
    const digest = Buffer.from(hmac.update(rawBody).digest("hex"), "utf8");
    const signatureBuffer = Buffer.from(signature, "utf8");

    if (digest.length !== signatureBuffer.length || !crypto.timingSafeEqual(digest, signatureBuffer)) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 403 });
    }

    const payload = JSON.parse(rawBody);
    const eventName = payload.meta.event_name;
    const customData = payload.meta.custom_data;

    // Check if it's an event we care about
    if (eventName === "order_created" || eventName === "subscription_created") {
      const userId = customData?.user_id;

      if (!userId) {
        console.error("No user_id in custom data");
        return NextResponse.json({ error: "Missing user_id" }, { status: 400 });
      }

      // Identify which plan was bought. In a real app, map variant_id to our plans (Pro, Pro+).
      // For MVP, we'll just set them to "pro" if they buy anything.
      const tier = "pro";

      const supabase = await createClient();

      // Call our secure RPC function to update the user's tier
      const { error } = await supabase.rpc("update_user_tier", {
        p_user_id: userId,
        p_tier: tier,
        p_secret: process.env.WEBHOOK_DB_SECRET || "",
      });

      if (error) {
        console.error("Failed to update user tier in Supabase:", error);
        return NextResponse.json({ error: "Database update failed" }, { status: 500 });
      }

      return NextResponse.json({ message: "Tier updated successfully" }, { status: 200 });
    }

    return NextResponse.json({ message: "Event ignored" }, { status: 200 });
  } catch (error) {
    console.error("Webhook processing error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
