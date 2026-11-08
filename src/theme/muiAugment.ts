import type { PaletteTokens } from './tokens';

declare module '@mui/material/styles' {
  interface Palette { brand: PaletteTokens['brand'] }
  interface PaletteOptions { brand?: PaletteTokens['brand'] }
}
export {};
