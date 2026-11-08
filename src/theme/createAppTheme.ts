import { createTheme } from '@mui/material/styles';
import './muiAugment';
import { palettes, type ThemeId } from './palettes';

export function createAppTheme(id: ThemeId) {
  const t = palettes[id];
  return createTheme({
    palette: {
      mode: t.mode,
      primary: { main: t.brand.primary }, secondary: { main: t.brand.accent },
      background: t.background, text: t.text, divider: t.brand.border,
      success: { main: t.state.success }, warning: { main: t.state.warning },
      error: { main: t.state.error }, info: { main: t.state.info },
      brand: t.brand,
    },
    shape: { borderRadius: 14 },
    typography: {
      fontFamily: '"Plus Jakarta Sans","Noto Sans Thai",system-ui,sans-serif',
      h1: { fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.08 },
      h2: { fontWeight: 800, letterSpacing: '-0.01em' },
      h3: { fontWeight: 700 }, h4: { fontWeight: 700 }, button: { textTransform: 'none', fontWeight: 600 },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: { scrollBehavior: 'smooth' },
          body: { backgroundImage: t.brand.glow, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' },
        },
      },
    },
  });
}
