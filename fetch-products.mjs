import { lemonSqueezySetup, listProducts, listVariants } from "@lemonsqueezy/lemonsqueezy.js";

lemonSqueezySetup({
  apiKey: process.env.LEMON_SQUEEZY_API_KEY,
});

async function main() {
  const { error, data } = await listProducts({ include: ["variants"] });

  if (error) {
    console.error("Error fetching products:", error);
  } else {
    data.data.forEach((product) => {
      console.log(`Product: ${product.attributes.name} (ID: ${product.id})`);
      const variants = product.relationships.variants.data;
      variants.forEach((v) => {
        console.log(`  -> Variant ID: ${v.id}`);
      });
    });
  }
}

main();
