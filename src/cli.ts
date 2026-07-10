#!/usr/bin/env node

import { intro, outro, select, multiselect, spinner, cancel, isCancel } from "@clack/prompts";
import pc from "picocolors";
import fs from "fs";
import path from "path";

// We import from local paths to allow tsup to bundle everything nicely.
import { allVibes } from "@/lib/engine/vibes";
import { allStacks, stackCategories } from "@/lib/engine/stacks";
import { allRules } from "@/lib/engine/templates/rules";
import { ideTargets } from "@/lib/engine/formatters/ide-targets";
import { generateSystemInstructions } from "@/lib/engine/generator";
import type { GeneratorConfig, StackCategory } from "@/lib/types";

async function main() {
  console.clear();
  console.log(pc.magenta(`
   __      ___ _          
   \\ \\    / (_) |         
    \\ \\  / / _| |__   ___ 
     \\ \\/ / | | '_ \\ / _ \\
      \\  /  | | |_) |  __/
       \\/   |_|_.__/ \\___| craftz
  `));
  intro(pc.bgMagenta(pc.black(" VIBECRAFTZ CLI - AI System Instruction Generator ")));

  // 1. Select Vibe
  const vibeId = await select({
    message: "Select a Design Vibe:",
    options: allVibes.map((v) => ({
      value: v.id,
      label: v.name,
      hint: v.tier !== "free" ? pc.yellow("(Pro)") : pc.green("(Free)"),
    })),
  });

  if (isCancel(vibeId)) {
    cancel("Operation cancelled.");
    return process.exit(0);
  }

  // 2. Configure Stack
  const stacks: Record<StackCategory, string> = {
    framework: "",
    styling: "",
    components: "",
    icons: "",
    animation: "",
    database: "",
    auth: "",
    deploy: "",
  };

  for (const category of stackCategories) {
    const optionsForCategory = allStacks.filter((s) => s.category === category);
    
    // Some categories might have 0 or 1 option, but let's prompt if there's more than 1
    if (optionsForCategory.length > 0) {
      const selectedStack = await select({
        message: `Select ${category.charAt(0).toUpperCase() + category.slice(1)}:`,
        options: optionsForCategory.map((s) => ({
          value: s.id,
          label: s.name,
        })),
      });

      if (isCancel(selectedStack)) {
        cancel("Operation cancelled.");
        return process.exit(0);
      }
      stacks[category as StackCategory] = selectedStack as string;
    }
  }

  // 3. Select AI Rules
  const selectedRules = await multiselect({
    message: "Select AI Rules to enforce:",
    options: allRules.map((r) => ({
      value: r.id,
      label: r.name,
      hint: r.tier !== "free" ? pc.yellow("(Pro)") : "",
    })),
    required: false,
  });

  if (isCancel(selectedRules)) {
    cancel("Operation cancelled.");
    return process.exit(0);
  }

  // 4. Target IDE
  const selectedIdes = await multiselect({
    message: "Select Target IDE(s) or Format:",
    options: ideTargets.map((t) => ({
      value: t.id,
      label: t.name,
      hint: t.fileName,
    })),
    required: true,
  });

  if (isCancel(selectedIdes)) {
    cancel("Operation cancelled.");
    return process.exit(0);
  }

  const config: GeneratorConfig = {
    vibe: vibeId as string,
    stacks,
    rules: selectedRules as string[],
    targetIdes: selectedIdes as string[],
  };

  const s = spinner();
  s.start("Generating system instructions...");

  try {
    // Generate output
    const outputs = generateSystemInstructions({
      config,
      userTier: "pro_plus", // Local CLI gets all access by default
    });

    s.stop("Generated successfully!");

    // Write to file system
    for (const output of outputs) {
      const filePath = path.join(process.cwd(), output.fileName);
      const dirPath = path.dirname(filePath);

      // Create directories if they don't exist
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }

      fs.writeFileSync(filePath, output.content, "utf-8");
      console.log(`${pc.green("✔")} Created ${pc.cyan(output.fileName)}`);
    }

    outro(pc.green("You're all set! Enjoy your tailored AI assistant."));
  } catch (error) {
    s.stop("Generation failed.");
    console.error(pc.red(error instanceof Error ? error.message : "Unknown error"));
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
