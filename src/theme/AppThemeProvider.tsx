import { useMemo, type ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useAppSelector } from '@/app/hooks';
import { createAppTheme } from './createAppTheme';

export function AppThemeProvider({ children }: { children: ReactNode }) {
  const id = useAppSelector((s) => s.theme.id);
  const theme = useMemo(() => createAppTheme(id), [id]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
