import type { VibeDefinition, ColorPalette } from "./types";

/**
 * Parses a hex string to HSL values [h (0-360), s (0-1), l (0-1)]
 */
function hexToHSL(hex: string): [number, number, number] {
  let r = 0, g = 0, b = 0;
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7) {
    r = parseInt(hex.substring(1, 3), 16);
    g = parseInt(hex.substring(3, 5), 16);
    b = parseInt(hex.substring(5, 7), 16);
  }

  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return [Math.round(h * 360), s, l];
}

/**
 * Automatically calculates a full color palette based on a primary brand color
 */
export function generateVibeFromColor(hexColor: string): VibeDefinition {
  const [h, s, l] = hexToHSL(hexColor);
  
  // Decide Dark vs Light mode based on the brand color's brightness.
  // We prefer dark mode by default unless the brand color is very dark, 
  // then we might want a light background to contrast, OR 
  // actually, let's always make a premium dark-ish theme if possible, 
  // but if the brand color is super dark, we do a crisp light theme.
  const isThemeDark = true; // We'll force a dark mode SaaS vibe by default because it looks premium

  // Construct the palette
  let background, surface, textPrimary, textSecondary, border;
  
  if (isThemeDark) {
    background = `hsl(${h}, ${Math.min(s * 100, 30)}%, 5%)`;
    surface = `hsl(${h}, ${Math.min(s * 100, 30)}%, 9%)`;
    border = `hsl(${h}, ${Math.min(s * 100, 30)}%, 15%)`;
    textPrimary = `hsl(0, 0%, 98%)`;
    textSecondary = `hsl(${h}, ${Math.min(s * 100, 20)}%, 65%)`;
  } else {
    background = `hsl(${h}, ${Math.min(s * 100, 20)}%, 98%)`;
    surface = `hsl(${h}, ${Math.min(s * 100, 20)}%, 100%)`;
    border = `hsl(${h}, ${Math.min(s * 100, 20)}%, 90%)`;
    textPrimary = `hsl(${h}, ${Math.min(s * 100, 30)}%, 10%)`;
    textSecondary = `hsl(${h}, ${Math.min(s * 100, 20)}%, 40%)`;
  }

  const palette: ColorPalette = {
    background,
    surface,
    surfaceHover: isThemeDark ? `hsl(${h}, ${Math.min(s * 100, 30)}%, 12%)` : `hsl(${h}, ${Math.min(s * 100, 20)}%, 96%)`,
    elevated: isThemeDark ? `hsl(${h}, ${Math.min(s * 100, 30)}%, 12%)` : `hsl(${h}, ${Math.min(s * 100, 20)}%, 100%)`,
    border,
    borderSubtle: isThemeDark ? `hsl(${h}, ${Math.min(s * 100, 30)}%, 10%)` : `hsl(${h}, ${Math.min(s * 100, 20)}%, 94%)`,
    textPrimary,
    textSecondary,
    textTertiary: isThemeDark ? `hsl(${h}, ${Math.min(s * 100, 20)}%, 45%)` : `hsl(${h}, ${Math.min(s * 100, 20)}%, 60%)`,
    accent: `hsl(${h}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`,
    accentHover: `hsl(${h}, ${Math.round(s * 100)}%, ${Math.max(10, Math.round((l - 0.1) * 100))}%)`,
    accentMuted: `hsl(${h}, ${Math.round(s * 100)}%, ${isThemeDark ? 20 : 90}%)`,
    success: "hsl(142, 70%, 45%)",
    warning: "hsl(38, 92%, 50%)",
    error: "hsl(348, 83%, 47%)",
  };

  // Determine a simple name based on Hue
  let colorName = "Custom";
  if (h < 15 || h > 345) colorName = "Ruby";
  else if (h < 45) colorName = "Sunset";
  else if (h < 75) colorName = "Gold";
  else if (h < 150) colorName = "Emerald";
  else if (h < 210) colorName = "Ocean";
  else if (h < 260) colorName = "Sapphire";
  else if (h < 315) colorName = "Amethyst";
  else colorName = "Magenta";

  return {
    id: "custom",
    name: `${colorName} Auto-Vibe`,
    iconName: "Wand2",
    description: `A custom generated UI vibe based on ${hexColor}.`,
    shortDescription: `Auto-generated theme based on your brand color.`,
    tier: "free",
    previewImage: "", // We don't have an image for custom
    colors: palette,
    typography: {
      fontFamily: "Inter, sans-serif",
      fontFamilyMono: "JetBrains Mono, monospace",
      hero: "text-5xl md:text-7xl font-extrabold tracking-tight",
      h1: "text-4xl md:text-5xl font-bold tracking-tight",
      h2: "text-3xl md:text-4xl font-bold tracking-tight",
      h3: "text-2xl font-semibold tracking-tight",
      body: "text-base leading-relaxed",
      small: "text-sm leading-normal",
      code: "text-sm font-mono",
    },
    componentPatterns: [
      {
        name: "Buttons",
        description: "Solid accent buttons with subtle hover states.",
        classes: "rounded-lg font-medium transition-all duration-200 active:scale-[0.98]",
      },
      {
        name: "Cards",
        description: "Sleek surface cards with subtle borders.",
        classes: "rounded-xl border shadow-sm backdrop-blur-sm",
      }
    ],
    animationRules: [
      "Keep animations subtle and purposeful.",
      "Use spring physics for interactive elements (buttons, cards).",
    ],
    specialInstructions: [
      `Use ${hexColor} as the primary brand accent.`,
      `Maintain a clean, premium layout prioritizing readability.`
    ],
  };
}

/**
 * Extracts dominant color from an image File
 */
export function extractColorFromImage(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return reject("Canvas not supported");

        // Scale down for faster processing
        const MAX_DIM = 100;
        let w = img.width, h = img.height;
        if (w > h && w > MAX_DIM) { h *= MAX_DIM / w; w = MAX_DIM; }
        else if (h > MAX_DIM) { w *= MAX_DIM / h; h = MAX_DIM; }
        
        canvas.width = w;
        canvas.height = h;
        ctx.drawImage(img, 0, 0, w, h);
        
        try {
          const data = ctx.getImageData(0, 0, w, h).data;
          let r = 0, g = 0, b = 0, count = 0;
          
          // Simple average color extraction ignoring fully transparent pixels
          for (let i = 0; i < data.length; i += 4) {
            if (data[i + 3] > 128) {
              // Ignore pure white or near-white backgrounds often found in logos
              if (data[i] > 240 && data[i+1] > 240 && data[i+2] > 240) continue;
              
              r += data[i];
              g += data[i + 1];
              b += data[i + 2];
              count++;
            }
          }
          
          if (count === 0) {
            // fallback if logo was mostly white
            for (let i = 0; i < data.length; i += 4) {
              if (data[i + 3] > 128) {
                r += data[i];
                g += data[i + 1];
                b += data[i + 2];
                count++;
              }
            }
          }

          if (count === 0) count = 1; // prevent division by zero

          r = Math.floor(r / count);
          g = Math.floor(g / count);
          b = Math.floor(b / count);
          
          const hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
          resolve(hex);
        } catch (err) {
          reject(err);
        }
      };
      img.src = e.target?.result as string;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
