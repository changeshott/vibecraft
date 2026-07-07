import type { VibeDefinition } from "@/lib/types";
import { darkSaasPro } from "./dark-saas-pro";
import { minimalistClean } from "./minimalist-clean";
import { bentoGrid } from "./bento-grid";
import { glassmorphism } from "./glassmorphism";
import { neoBrutalism } from "./neo-brutalism";

export const allVibes: VibeDefinition[] = [
  darkSaasPro,
  minimalistClean,
  bentoGrid,
  glassmorphism,
  neoBrutalism,
];

export const freeVibes = allVibes.filter((v) => v.tier === "free");
export const proVibes = allVibes.filter((v) => v.tier === "pro" || v.tier === "pro_plus");

export function getVibeById(id: string): VibeDefinition | undefined {
  return allVibes.find((v) => v.id === id);
}

export { darkSaasPro, minimalistClean, bentoGrid, glassmorphism, neoBrutalism };
