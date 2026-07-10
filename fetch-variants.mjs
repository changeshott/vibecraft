import { lemonSqueezySetup, listVariants } from "@lemonsqueezy/lemonsqueezy.js";

lemonSqueezySetup({
  apiKey: process.env.LEMON_SQUEEZY_API_KEY,
});

async function main() {
  const { error, data, statusCode } = await listVariants();

  if (error) {
    console.error("Error fetching variants:", error);
  } else {
    console.log("Variants found:", data.data.length);
    data.data.forEach((variant) => {
      console.log(`- ID: ${variant.id}, Name: ${variant.attributes.name}`);
    });
  }
}

main();
