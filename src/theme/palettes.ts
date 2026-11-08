import type { PaletteTokens } from './tokens';

const grad = (a: string, b: string) => `linear-gradient(90deg, ${a}, ${b})`;
const glow = (a: string, b: string) =>
  `radial-gradient(60% 50% at 85% 5%, ${a}, transparent 70%), radial-gradient(40% 40% at 5% 0%, ${b}, transparent 70%)`;

const dark: PaletteTokens = {
  mode: 'dark',
  background: { default: '#060A14', paper: '#0D1424' },
  text: { primary: '#F8FAFC', secondary: '#9FB0CC' },
  brand: {
    primary: '#3988FF', accent: '#00D4FF', highlight: '#8B5CF6', gradient: grad('#3988FF', '#8B5CF6'),
    glass: 'rgba(20,32,60,0.55)', border: 'rgba(90,140,255,0.22)',
    glow: glow('rgba(57,136,255,0.28)', 'rgba(139,92,246,0.16)'),
  },
  state: { success: '#34D399', warning: '#FBBF24', error: '#F87171', info: '#38BDF8' },
};

const light: PaletteTokens = {
  mode: 'light',
  background: { default: '#F4F7FD', paper: '#FFFFFF' },
  text: { primary: '#0F172A', secondary: '#475569' },
  brand: {
    primary: '#2563EB', accent: '#0891B2', highlight: '#7C3AED', gradient: grad('#2563EB', '#7C3AED'),
    glass: 'rgba(255,255,255,0.78)', border: 'rgba(37,99,235,0.18)',
    glow: glow('rgba(37,99,235,0.12)', 'rgba(124,58,237,0.08)'),
  },
  state: { success: '#059669', warning: '#D97706', error: '#DC2626', info: '#0284C7' },
};

// Example of an extra theme — copy this block, change colors, register below.
const red: PaletteTokens = {
  mode: 'dark',
  background: { default: '#0F0709', paper: '#1A0C10' },
  text: { primary: '#FFF5F5', secondary: '#C9A3A8' },
  brand: {
    primary: '#F0434F', accent: '#FF8A5B', highlight: '#FF3D81', gradient: grad('#F0434F', '#FF3D81'),
    glass: 'rgba(46,16,22,0.55)', border: 'rgba(255,90,100,0.25)',
    glow: glow('rgba(240,67,79,0.25)', 'rgba(255,61,129,0.14)'),
  },
  state: { success: '#34D399', warning: '#FBBF24', error: '#FCA5A5', info: '#38BDF8' },
};

export const palettes = { dark, light, red } satisfies Record<string, PaletteTokens>;
export type ThemeId = keyof typeof palettes;
export const themeIds = Object.keys(palettes) as ThemeId[];
