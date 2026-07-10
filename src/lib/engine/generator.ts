/* ============================================
   VIBECRAFTZ — Generator Engine
   The core that composes all pieces into a 
   complete system instructions file.
   ============================================ */

import type { GeneratorConfig, GeneratedOutput, VibeDefinition, UserTier } from "@/lib/types";
import { getVibeById } from "./vibes";
import { getStackById } from "./stacks";
import { getRuleById } from "./templates/rules";
import { getIDETarget } from "./formatters/ide-targets";

interface GenerateOptions {
  config: GeneratorConfig;
  userTier: UserTier;
}

export function generateSystemInstructions({
  config,
  userTier,
}: GenerateOptions): GeneratedOutput[] {
  const vibe = config.vibe === "custom" && config.customVibeObj
    ? config.customVibeObj
    : getVibeById(config.vibe);

  if (!vibe) throw new Error(`Vibe not found: ${config.vibe}`);

  // Check tier access
  if (vibe.tier !== "free" && (userTier === "free")) {
    throw new Error(`Vibe "${vibe.name}" requires a Pro plan or higher`);
  }

  const outputs: GeneratedOutput[] = [];

  for (const ideId of config.targetIdes) {
    const ide = getIDETarget(ideId);
    if (!ide) continue;

    if (ideId === "cursor") {
      const isFree = userTier === "free";

      // 1. Always Apply (Core constraints) - kept very short
      const alwaysApplyContent = [
        "---",
        `description: Critical AI Behavior Rules - ${vibe.name}`,
        `globs: ["*"]`,
        `alwaysApply: true`,
        "---",
        buildHeader(vibe, ide.name, isFree),
        "## STRICT AI CONSTRAINTS",
        "1. Never guess or hallucinate components. Check design tokens first.",
        "2. Follow the specific .mdc rules for routing, UI, and architecture based on file globs.",
        "3. Preserve all existing comments and structure unless explicitly asked to modify.",
        buildSpecialInstructionsSection(vibe),
        buildFooter(isFree)
      ].filter(Boolean).join("\n\n");

      outputs.push({
        content: alwaysApplyContent,
        fileName: ".cursor/rules/000-always-apply.mdc",
        ideName: ide.name,
        iconName: ide.iconName,
      });

      // 2. Tech Stack Rules
      const techContent = [
        "---",
        `description: Technology Stack & Architecture - ${vibe.name}`,
        `globs: ["package.json", "next.config.*", "vite.config.*", "tsconfig.*", "src/**/*.ts", "src/**/*.tsx"]`,
        "---",
        buildHeader(vibe, ide.name, isFree),
        buildTechnologySection(config),
        buildFooter(isFree)
      ].filter(Boolean).join("\n\n");
      
      outputs.push({
        content: techContent,
        fileName: ".cursor/rules/100-tech-stack.mdc",
        ideName: ide.name,
        iconName: ide.iconName,
      });

      // 3. Design Tokens
      const designContent = [
        "---",
        `description: Design Tokens & Palette - ${vibe.name}`,
        `globs: ["**/*.css", "tailwind.config.*", "src/**/*.tsx", "src/**/*.jsx"]`,
        "---",
        buildHeader(vibe, ide.name, isFree),
        buildDesignVibeSection(vibe),
        buildFooter(isFree)
      ].filter(Boolean).join("\n\n");

      outputs.push({
        content: designContent,
        fileName: ".cursor/rules/200-design-tokens.mdc",
        ideName: ide.name,
        iconName: ide.iconName,
      });

      // 4. UI Components
      const uiContent = [
        "---",
        `description: UI Component Patterns - ${vibe.name}`,
        `globs: ["src/components/**/*.tsx", "src/components/**/*.jsx", "src/components/**/*.vue", "src/components/**/*.svelte", "src/ui/**/*.tsx", "src/ui/**/*.jsx"]`,
        "---",
        buildHeader(vibe, ide.name, isFree),
        buildComponentPatternsSection(vibe),
        buildFooter(isFree)
      ].filter(Boolean).join("\n\n");

      outputs.push({
        content: uiContent,
        fileName: ".cursor/rules/300-ui-components.mdc",
        ideName: ide.name,
        iconName: ide.iconName,
      });

      // 5. Animations
      if (config.stacks.animation && vibe.animationRules && vibe.animationRules.length > 0) {
        const animContent = [
          "---",
          `description: Animation Rules - ${vibe.name}`,
          `globs: ["src/components/**/*.tsx", "src/components/**/*.jsx", "src/**/*.css"]`,
          "---",
          buildHeader(vibe, ide.name, isFree),
          buildAnimationSection(vibe),
          buildFooter(isFree)
        ].filter(Boolean).join("\n\n");

        outputs.push({
          content: animContent,
          fileName: ".cursor/rules/400-animations.mdc",
          ideName: ide.name,
          iconName: ide.iconName,
        });
      }

      // 6. Enterprise / Architecture
      const enterpriseText = buildEnterpriseSection(vibe);
      if (enterpriseText.trim()) {
        const entContent = [
          "---",
          `description: Enterprise Architecture Blueprints - ${vibe.name}`,
          `globs: ["src/lib/**/*.ts", "src/services/**/*.ts", "src/architecture/**/*.md", "src/core/**/*.ts"]`,
          "---",
          buildHeader(vibe, ide.name, isFree),
          enterpriseText,
          buildFooter(isFree)
        ].filter(Boolean).join("\n\n");

        outputs.push({
          content: entContent,
          fileName: ".cursor/rules/500-enterprise.mdc",
          ideName: ide.name,
          iconName: ide.iconName,
        });
      }

      // 7. Extended AI Rules
      const aiRulesText = buildAIRulesSection(config, userTier);
      if (aiRulesText.trim()) {
         const aiRulesContent = [
           "---",
           `description: Extended AI Rules & Best Practices - ${vibe.name}`,
           `globs: ["src/**/*.ts", "src/**/*.tsx", "src/**/*.js", "src/**/*.jsx"]`,
           "---",
           buildHeader(vibe, ide.name, isFree),
           aiRulesText,
           buildFooter(isFree)
         ].filter(Boolean).join("\n\n");
         
         outputs.push({
           content: aiRulesContent,
           fileName: ".cursor/rules/600-ai-rules.mdc",
           ideName: ide.name,
           iconName: ide.iconName,
         });
      }

    } else if (ideId === "design-md") {
      const content = composeDesignMd(vibe, config, userTier, ide.name);
      outputs.push({
        content,
        fileName: ide.fileName,
        ideName: ide.name,
        iconName: ide.iconName,
      });
    } else if (ideId === "cursor-plugin") {
      const content = composeCursorPlugin(vibe, config, userTier, ide.name);
      outputs.push({
        content,
        fileName: ide.fileName,
        ideName: ide.name,
        iconName: ide.iconName,
      });
    } else {
      const content = composeContent(vibe, config, userTier, ide.name);
      outputs.push({
        content,
        fileName: ide.fileName,
        ideName: ide.name,
        iconName: ide.iconName,
      });
    }
  }

  return outputs;
}

function composeContent(
  vibe: VibeDefinition,
  config: GeneratorConfig,
  userTier: UserTier,
  ideName: string
): string {
  const sections: string[] = [];
  const isFree = userTier === "free";

  // --- Header ---
  sections.push(buildHeader(vibe, ideName, isFree));

  // --- Technology Rules ---
  sections.push(buildTechnologySection(config));

  // --- Design Vibe ---
  sections.push(buildDesignVibeSection(vibe));

  // --- Component Patterns ---
  sections.push(buildComponentPatternsSection(vibe));

  // --- Animation Rules ---
  if (config.stacks.animation && vibe.animationRules && vibe.animationRules.length > 0) {
    sections.push(buildAnimationSection(vibe));
  }

  // --- AI Rules ---
  sections.push(buildAIRulesSection(config, userTier));

  // --- Special Instructions ---
  sections.push(buildSpecialInstructionsSection(vibe));

  // --- Enterprise Blueprints ---
  sections.push(buildEnterpriseSection(vibe));

  // --- Footer ---
  sections.push(buildFooter(isFree));

  return sections.filter(Boolean).join("\n\n");
}



function composeCursorPlugin(
  vibe: VibeDefinition,
  config: GeneratorConfig,
  userTier: UserTier,
  ideName: string
): string {
  const isFree = userTier === "free";
  
  const plugin = {
    name: `vibecraftz-${config.vibe === 'custom' ? 'custom' : config.vibe}`,
    version: "1.0.0",
    displayName: `VibeCraftz: ${vibe.name}`,
    description: isFree ? `${vibe.description} (Generated with VibeCraftz Free)` : vibe.description,
    publisher: "vibecraftz",
    engines: {
      cursor: "^0.40.0"
    },
    capabilities: {
      rules: [
        {
          id: "core-design",
          description: "Core Design Rules",
          content: buildDesignVibeSection(vibe) + "\\n\\n" + buildComponentPatternsSection(vibe)
        },
        {
          id: "technology",
          description: "Technology Stack Rules",
          content: buildTechnologySection(config)
        },
        {
          id: "ai-behavior",
          description: "AI Behavior Constraints",
          content: buildAIRulesSection(config, userTier)
        }
      ]
    }
  };

  return JSON.stringify(plugin, null, 2);
}

function composeDesignMd(
  vibe: VibeDefinition,
  config: GeneratorConfig,
  userTier: UserTier,
  ideName: string
): string {
  const sections: string[] = [];
  const isFree = userTier === "free";

  // --- YAML Frontmatter (Google Stitch Standard) ---
  sections.push("---");
  sections.push(`version: "1.0"`);
  sections.push(`designSystem: "${vibe.name}"`);
  sections.push(`description: "${vibe.description}"`);
  sections.push(`theme:`);
  sections.push(`  colors:`);
  const colorEntries = Object.entries(vibe.colors);
  for (const [name, value] of colorEntries) {
    sections.push(`    ${name}: "${value}"`);
  }
  sections.push(`  typography:`);
  const typoEntries = Object.entries(vibe.typography);
  for (const [name, value] of typoEntries) {
    sections.push(`    ${name}: "${value}"`);
  }
  sections.push("---");

  // --- Header ---
  sections.push(buildHeader(vibe, ideName, isFree));

  // --- Technology Rules ---
  sections.push(buildTechnologySection(config));

  // --- Design Vibe ---
  sections.push(buildDesignVibeSection(vibe));

  // --- Component Patterns ---
  sections.push(buildComponentPatternsSection(vibe));

  // --- Animation Rules ---
  if (config.stacks.animation && vibe.animationRules && vibe.animationRules.length > 0) {
    sections.push(buildAnimationSection(vibe));
  }

  // --- AI Rules ---
  sections.push(buildAIRulesSection(config, userTier));

  // --- Special Instructions ---
  sections.push(buildSpecialInstructionsSection(vibe));

  // --- Enterprise Blueprints ---
  sections.push(buildEnterpriseSection(vibe));

  // --- Footer ---
  sections.push(buildFooter(isFree));

  return sections.filter(Boolean).join("\n\n");
}

// ---- Section Builders ----

function buildHeader(vibe: VibeDefinition, ideName: string, isFree: boolean): string {
  const lines: string[] = [];

  lines.push(
    `# VibeCraftz Design System: ${vibe.name}`,
    `# Generated by VibeCraftz (https://vibecraftz.dev) — by changeshott`,
    `# Target: ${ideName}`,
    `# Generated: ${new Date().toISOString().split("T")[0]}`
  );

  if (isFree) {
    lines.push(
      `#`,
      `# ====================================================================`,
      `# ⚠️ GENERATED BY VIBECRAFTZ (FREE VERSION)`,
      `# Upgrade to Pro at https://vibecraftz.dev/pricing to remove this watermark,`,
      `# unlock all premium vibes, and export to multiple IDEs simultaneously.`,
      `# ====================================================================`,
      `#`
    );
  } else {
    lines.push(`#`);
  }

  lines.push(`# ${vibe.description}`);
  lines.push("");
  lines.push("---");

  return lines.join("\n");
}

function buildTechnologySection(config: GeneratorConfig): string {
  const lines = ["## TECHNOLOGY RULES (Strict)", ""];

  const stackEntries = Object.entries(config.stacks);
  const allImports = new Set<string>();
  const allFileStructure = new Set<string>();

  for (const [, stackId] of stackEntries) {
    if (!stackId) continue;
    const stack = getStackById(stackId);
    if (!stack) continue;

    lines.push(`### ${stack.name} (v${stack.version})`);
    for (const rule of stack.rules) {
      lines.push(`- ${rule}`);
    }
    lines.push("");

    if (stack.imports && stack.imports.length > 0) {
      stack.imports.forEach((i: string) => allImports.add(i));
    }
    if (stack.fileStructure && stack.fileStructure.length > 0) {
      stack.fileStructure.forEach((f: string) => allFileStructure.add(f));
    }
  }

  if (allImports.size > 0) {
    lines.push("### Allowed Core Imports");
    lines.push("```typescript");
    Array.from(allImports).forEach(i => lines.push(`import { ... } from "${i}";`));
    lines.push("```");
    lines.push("");
  }

  if (allFileStructure.size > 0) {
    lines.push("### Required File Structure");
    Array.from(allFileStructure).forEach(f => lines.push(`- \`${f}\``));
    lines.push("");
  }

  return lines.join("\n");
}

function buildDesignVibeSection(vibe: VibeDefinition): string {
  const lines = [
    `## DESIGN VIBE: ${vibe.name}`,
    "",
    `> ${vibe.description}`,
    "",
    "### Color Palette",
    "Use ONLY these colors. Do NOT invent new colors or use arbitrary values.",
    "",
  ];

  const colorEntries = Object.entries(vibe.colors) as [string, string][];
  for (const [name, value] of colorEntries) {
    const label = name.replace(/([A-Z])/g, " $1").trim();
    lines.push(`- **${label}**: \`${value}\``);
  }

  lines.push("");
  lines.push("### Typography");

  const typoEntries = Object.entries(vibe.typography) as [string, string][];
  for (const [name, value] of typoEntries) {
    const label = name.replace(/([A-Z])/g, " $1").trim();
    lines.push(`- **${label}**: \`${value}\``);
  }

  return lines.join("\n");
}

function buildComponentPatternsSection(vibe: VibeDefinition): string {
  const lines = [
    "## COMPONENT PATTERNS",
    "",
    "Use these exact class combinations for consistency. Customize content, NOT structure.",
    "",
  ];

  for (const pattern of vibe.componentPatterns) {
    lines.push(`### ${pattern.name}`);
    lines.push(`${pattern.description}`);
    lines.push("```");
    lines.push(pattern.classes);
    lines.push("```");
    lines.push("");
  }

  return lines.join("\n");
}

function buildAnimationSection(vibe: VibeDefinition): string {
  const lines = [
    "## ANIMATION RULES",
    "",
  ];

  for (const rule of vibe.animationRules) {
    lines.push(`- ${rule}`);
  }

  return lines.join("\n");
}

function buildAIRulesSection(config: GeneratorConfig, userTier: UserTier): string {
  const validRules = config.rules
    .map(id => getRuleById(id))
    .filter(rule => rule !== undefined && (rule.tier === "free" || userTier !== "free"));

  if (validRules.length === 0) {
    return "";
  }

  const lines = [
    "## AI BEHAVIOR RULES",
    "",
  ];

  for (const rule of validRules) {
    if (!rule) continue;
    lines.push(`### ${rule.name}`);
    lines.push(`${rule.description}`);
    lines.push("");
    for (const r of rule.rules) {
      lines.push(`- ${r}`);
    }
    lines.push("");
  }

  return lines.join("\n");
}

function buildSpecialInstructionsSection(vibe: VibeDefinition): string {
  const lines = [
    "## SPECIAL INSTRUCTIONS FOR THIS VIBE",
    "",
  ];

  for (const instruction of vibe.specialInstructions) {
    lines.push(`- ${instruction}`);
  }

  return lines.join("\n");
}

function buildEnterpriseSection(vibe: VibeDefinition): string {
  if (!vibe.architectureNotes && (!vibe.enterpriseBlueprints || vibe.enterpriseBlueprints.length === 0)) {
    return "";
  }

  const lines = [
    "## ENTERPRISE ARCHITECTURE & BLUEPRINTS",
    "",
    "> *Note: These blueprints provide the structural foundation for this vibe.*",
    "",
  ];

  if (vibe.architectureNotes) {
    lines.push("### Architecture Notes");
    lines.push(vibe.architectureNotes);
    lines.push("");
  }

  if (vibe.enterpriseBlueprints && vibe.enterpriseBlueprints.length > 0) {
    lines.push("### Component & System Blueprints");
    lines.push("");

    for (const bp of vibe.enterpriseBlueprints) {
      lines.push(`#### ${bp.title}`);
      if (bp.description) {
        lines.push(bp.description);
      }
      lines.push("");
      lines.push(`\`\`\`${bp.language}`);
      lines.push(bp.code);
      lines.push(`\`\`\``);
      lines.push("");
    }
  }

  return lines.join("\n");
}

function buildFooter(isFree: boolean): string {
  const lines = [
    "---",
    "",
    "## Summary",
    "",
    "Follow ALL rules above strictly. When in doubt, refer back to the design vibe section",
    "for colors, typography, and component patterns. Consistency is more important than creativity",
    "— every page and component should feel like part of the same application.",
  ];

  if (isFree) {
    lines.push("");
    lines.push("---");
    lines.push("*Generated with VibeCraftz Free — Upgrade at https://vibecraftz.dev/pricing*");
  }

  return lines.join("\n");
}
