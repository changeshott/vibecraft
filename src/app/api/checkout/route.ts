import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createCheckout, lemonSqueezySetup } from "@lemonsqueezy/lemonsqueezy.js";

// Ensure Lemon Squeezy is initialized
const setupLemonSqueezy = () => {
  if (!process.env.LEMON_SQUEEZY_API_KEY) {
    throw new Error("Missing LEMON_SQUEEZY_API_KEY");
  }
  lemonSqueezySetup({
    apiKey: process.env.LEMON_SQUEEZY_API_KEY,
    onError: (error) => console.error("Lemon Squeezy Error:", error),
  });
};

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const variantId = searchParams.get("variant");

    if (!variantId) {
      return NextResponse.json({ error: "Missing variant ID" }, { status: 400 });
    }

    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    setupLemonSqueezy();

    const storeId = process.env.LEMON_SQUEEZY_STORE_ID;
    if (!storeId) {
      throw new Error("Missing LEMON_SQUEEZY_STORE_ID");
    }

    // Create a Lemon Squeezy checkout session
    const { error, data } = await createCheckout(
      storeId,
      variantId,
      {
        checkoutData: {
          email: user.email,
          custom: {
            user_id: user.id, // We'll extract this in the webhook
          },
        },
      }
    );

    if (error) {
      console.error("Error creating checkout:", error);
      return NextResponse.json({ error: "Failed to create checkout" }, { status: 500 });
    }

    // Redirect to the Lemon Squeezy checkout URL
    if (data?.data?.attributes?.url) {
      return NextResponse.redirect(data.data.attributes.url);
    }

    return NextResponse.json({ error: "No checkout URL returned" }, { status: 500 });
  } catch (error) {
    console.error("Checkout route error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
