import { Github, Linkedin, Mail } from 'lucide-react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { brand } from '@/config/brand';
import { AppIcon } from '@/shared/ui';

export function Footer() {
  return (
    <Box component="footer" sx={(t) => ({ borderTop: `1px solid ${t.palette.brand.border}`, py: 4, mt: 6 })}>
      <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
        <Typography variant="body2" color="text.secondary">© {new Date().getFullYear()} {brand.name}</Typography>
        <Box>
          <IconButton aria-label="GitHub" href={brand.github} target="_blank" rel="noreferrer" color="inherit"><AppIcon icon={Github} /></IconButton>
          <IconButton aria-label="LinkedIn" href={brand.linkedin} target="_blank" rel="noreferrer" color="inherit"><AppIcon icon={Linkedin} /></IconButton>
          <IconButton aria-label="Email" href={`mailto:${brand.email}`} color="inherit"><AppIcon icon={Mail} /></IconButton>
        </Box>
      </Container>
    </Box>
  );
}
