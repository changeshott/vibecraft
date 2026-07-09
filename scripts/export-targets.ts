import fs from "fs";
import path from "path";
import { generateSystemInstructions } from "../src/lib/engine/generator";
import { ideTargets } from "../src/lib/engine/formatters/ide-targets";
import type { GeneratorConfig } from "../src/lib/types";

// Setup a comprehensive configuration selecting all options to ensure maximum fidelity
const config: GeneratorConfig = {
  vibe: "dark-saas-pro",
  stacks: {
    framework: "nextjs-app",
    styling: "tailwind",
    components: "shadcn",
    icons: "lucide",
    animation: "framer-motion",
    database: "supabase",
    auth: "supabase-auth",
    deploy: "vercel"
  },
  rules: ["no-hallucination", "mobile-first", "accessibility-strict"],
  targetIdes: ideTargets.map(t => t.id)
};

async function main() {
  console.log("Generating prompts for all IDE targets...");
  try {
    const outputs = generateSystemInstructions({ config, userTier: "pro_plus" });
    
    for (const output of outputs) {
      const filePath = path.join(process.cwd(), "output-targets", output.fileName);
      
      // Ensure directory exists
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      
      fs.writeFileSync(filePath, output.content);
      console.log(`✅ Successfully generated ${output.ideName} -> output-targets/${output.fileName}`);
      console.log(`   Size: ${(output.content.length / 1024).toFixed(2)} KB`);
    }
    
    console.log("\\nAll outputs generated successfully in the 'output-targets' directory!");
  } catch (error) {
    console.error("Error generating outputs:", error);
  }
}

main();
