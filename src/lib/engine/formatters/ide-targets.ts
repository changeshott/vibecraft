import type { IDETarget } from "@/lib/types";

export const ideTargets: IDETarget[] = [
  {
    id: "cursor",
    name: "Cursor (.mdc)",
    iconName: "simple-icons:cursor",
    fileName: ".cursor/rules/*.mdc",
    description: "Cursor IDE (Local) — place in .cursor/rules/",
  },
  {
    id: "cursor-plugin",
    name: "Cursor Marketplace Plugin",
    iconName: "Blocks",
    fileName: "cursor-plugin.json",
    description: "Cursor Marketplace Plugin bundle — native JSON format containing rules, hooks, and subagents.",
  },
  {
    id: "design-md",
    name: "DESIGN.md (Google Stitch Standard)",
    iconName: "Figma",
    fileName: "DESIGN.md",
    description: "Google Stitch open standard — exports design tokens (YAML) + AI Rules (Markdown)",
  },
  {
    id: "agents-md",
    name: "AGENTS.md (Universal Standard)",
    iconName: "FileText",
    fileName: "AGENTS.md",
    description: "AGENTS.md — Agentic AI Foundation / Linux Foundation standard. 1 file, works in all AI assistants (Codex, Copilot, Cursor, Windsurf, Devin, etc).",
  },
  {
    id: "copilot",
    name: "GitHub Copilot",
    iconName: "simple-icons:githubcopilot",
    fileName: ".github/copilot-instructions.md",
    description: "GitHub Copilot — place in .github/copilot-instructions.md",
  },
  {
    id: "claude-code",
    name: "Claude Code",
    iconName: "simple-icons:anthropic",
    fileName: "CLAUDE.md",
    description: "Claude Code — place in project root as CLAUDE.md",
  },
  {
    id: "gemini",
    name: "Gemini CLI",
    iconName: "simple-icons:googlegemini",
    fileName: "GEMINI.md",
    description: "Gemini CLI — place in project root as GEMINI.md",
  },
  {
    id: "skill",
    name: "Claude Skill",
    iconName: "FileText",
    fileName: "SKILL.md",
    description: "Claude Skill format — place in .agents/skills/my-skill/SKILL.md",
  },
  {
    id: "generic",
    name: "Generic (.md)",
    iconName: "FileText",
    fileName: "AI_RULES.md",
    description: "Generic markdown — works with any AI assistant",
  },
];

export function getIDETarget(id: string): IDETarget | undefined {
  return ideTargets.find((t) => t.id === id);
}
