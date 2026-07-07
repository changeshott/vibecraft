import type { IDETarget } from "@/lib/types";

export const ideTargets: IDETarget[] = [
  {
    id: "cursor",
    name: "Cursor",
    iconName: "simple-icons:cursor",
    fileName: ".cursorrules",
    description: "Cursor IDE — place in project root as .cursorrules",
  },
  {
    id: "windsurf",
    name: "Windsurf",
    iconName: "simple-icons:windsurf",
    fileName: "AGENTS.md",
    description: "Windsurf IDE — place in project root as AGENTS.md",
  },
  {
    id: "claude-code",
    name: "Claude Code",
    iconName: "simple-icons:anthropic",
    fileName: "CLAUDE.md",
    description: "Claude Code — place in project root as CLAUDE.md",
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
