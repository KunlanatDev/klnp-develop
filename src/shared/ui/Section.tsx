import type { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

interface Props { id?: string; title?: string; subtitle?: string; children: ReactNode }

export function Section({ id, title, subtitle, children }: Props) {
  return (
    <Box component="section" id={id} sx={{ py: { xs: 7, md: 10 }, scrollMarginTop: '72px' }}>
      <Container maxWidth="lg">
        {title && (
          <Box sx={(t) => ({ borderLeft: `3px solid ${t.palette.primary.main}`, pl: 2, mb: 5 })}>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.2rem' } }}>{title}</Typography>
            {subtitle && <Typography color="text.secondary" sx={{ mt: 1, maxWidth: 560 }}>{subtitle}</Typography>}
          </Box>
        )}
        {children}
      </Container>
    </Box>
  );
}
