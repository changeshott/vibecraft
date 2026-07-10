import { lemonSqueezySetup, createCheckout } from "@lemonsqueezy/lemonsqueezy.js";

lemonSqueezySetup({
  apiKey: process.env.LEMON_SQUEEZY_API_KEY,
});

async function main() {
  const storeId = process.env.LEMON_SQUEEZY_STORE_ID;
  const variantId = "1207006"; // Numeric ID from the URL

  console.log("Store ID:", storeId);
  console.log("Variant ID:", variantId);

  const { error, data } = await createCheckout(
    storeId,
    variantId,
    {
      checkoutData: {
        email: "test@example.com",
        custom: {
          user_id: "test",
        },
      },
    }
  );

  if (error) {
    console.error("Error creating checkout:", JSON.stringify(error, null, 2));
  } else {
    console.log("Success:", data);
  }
}

main();
