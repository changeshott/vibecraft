import { icons } from "lucide-react";
import { Icon } from "@iconify/react";

export interface DynamicIconProps {
  name: string;
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export function DynamicIcon({ name, size = 24, className, strokeWidth = 2 }: DynamicIconProps) {
  if (name.includes(":")) {
    return <Icon icon={name} width={size} height={size} className={className} />;
  }

  const LucideIcon = icons[name as keyof typeof icons];

  if (!LucideIcon) {
    return null;
  }

  return <LucideIcon size={size} className={className} strokeWidth={strokeWidth} />;
}
