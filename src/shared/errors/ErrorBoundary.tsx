import { Component, type ReactNode } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { AppButton } from '@/shared/ui/AppButton';
import { handleError } from './handleError';

export class ErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  state = { error: null as Error | null };
  static getDerivedStateFromError(error: Error) { return { error }; }
  componentDidCatch(error: Error) { handleError(error, { silent: true }); }
  render() {
    if (!this.state.error) return this.props.children;
    return (
      <Box sx={{ minHeight: '100vh', display: 'grid', placeItems: 'center', textAlign: 'center', p: 3 }}>
        <Box>
          <Typography variant="h4" gutterBottom>Something went wrong</Typography>
          <Typography color="text.secondary" sx={{ mb: 3 }}>The page hit an unexpected error.</Typography>
          <AppButton variant="gradient" onClick={() => window.location.reload()}>Reload page</AppButton>
        </Box>
      </Box>
    );
  }
}
