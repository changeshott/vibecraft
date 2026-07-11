/* ============================================
   VIBECRAFTZ — Core TypeScript Types
   ============================================ */

// --- Color Palette ---
export interface ColorPalette {
  background: string;
  surface: string;
  surfaceHover: string;
  elevated: string;
  border: string;
  borderSubtle: string;
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  accent: string;
  accentHover: string;
  accentMuted: string;
  success: string;
  warning: string;
  error: string;
  [key: string]: string;
}

// --- Typography ---
export interface TypographyScale {
  fontFamily: string;
  fontFamilyMono: string;
  hero: string;
  h1: string;
  h2: string;
  h3: string;
  body: string;
  small: string;
  code: string;
  [key: string]: string;
}

// --- Component Pattern ---
export interface ComponentPattern {
  name: string;
  description: string;
  classes: string;
}

// --- Vibe Definition ---
export interface VibeDefinition {
  id: string;
  name: string;
  iconName: string;
  description: string;
  shortDescription: string;
  tier: "free" | "pro" | "pro_plus";
  previewImage: string;
  colors: ColorPalette;
  typography: TypographyScale;
  componentPatterns: ComponentPattern[];
  animationRules: string[];
  specialInstructions: string[];
  architectureNotes?: string;
  enterpriseBlueprints?: { title: string; code: string; language: string; description?: string }[];
  incompatibleRules?: string[];
  isCommunity?: boolean;
}

// --- Stack Definition ---
export interface StackDefinition {
  id: string;
  name: string;
  category: StackCategory;
  version: string;
  iconName: string;
  description: string;
  rules: string[];
  imports: string[];
  fileStructure: string[];
  incompatibleWith?: string[];
}

export type StackCategory =
  | "framework"
  | "styling"
  | "components"
  | "icons"
  | "animation"
  | "database"
  | "auth"
  | "deploy";

// --- AI Rule ---
export interface AIRule {
  id: string;
  name: string;
  description: string;
  category: RuleCategory;
  tier: "free" | "pro" | "pro_plus";
  rules: string[];
}

export type RuleCategory =
  | "anti-hallucination"
  | "architecture"
  | "responsive"
  | "accessibility"
  | "animation"
  | "dark-mode"
  | "performance";

// --- IDE Target ---
export interface IDETarget {
  id: string;
  name: string;
  iconName: string;
  fileName: string;
  description: string;
}

// --- Generator Config ---
export interface GeneratorConfig {
  vibe: string;
  customVibeObj?: VibeDefinition;
  stacks: Record<StackCategory, string>;
  rules: string[];
  targetIdes: string[];
}

// --- Generated Output ---
export interface GeneratedOutput {
  content: string;
  fileName: string;
  ideName: string;
  iconName: string;
}

// --- User Tier ---
export type UserTier = "free" | "starter" | "pro" | "pro_plus" | "teams";

// --- Pricing Plan ---
export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: "one-time" | "monthly";
  description: string;
  features: string[];
  highlighted: boolean;
  tier: UserTier;
  lemonSqueezyProductId?: string;
}
