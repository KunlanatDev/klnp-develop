import type { LucideIcon } from 'lucide-react';

// One place that decides icon size and stroke so every icon looks consistent.
export function AppIcon({ icon: Icon, size = 20 }: { icon: LucideIcon; size?: number }) {
  return <Icon size={size} strokeWidth={1.6} aria-hidden />;
}
