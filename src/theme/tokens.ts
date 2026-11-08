// Semantic tokens: every theme provides the same names. Components never check "isDark".
export interface PaletteTokens {
  mode: 'light' | 'dark';
  background: { default: string; paper: string };
  text: { primary: string; secondary: string };
  brand: { primary: string; accent: string; highlight: string; gradient: string; glass: string; border: string; glow: string };
  state: { success: string; warning: string; error: string; info: string };
}
