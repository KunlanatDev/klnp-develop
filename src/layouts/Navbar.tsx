import { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Mail, Menu, X } from 'lucide-react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { alpha } from '@mui/material/styles';
import { AppButton, AppIcon, Logo } from '@/shared/ui';
import { ThemeSwitcher } from './ThemeSwitcher';

const links = [
  { label: 'Home', to: '/' }, { label: 'About', to: '/#about' }, { label: 'Tech Stack', to: '/#tech' },
  { label: 'Projects', to: '/projects' }, { label: 'Services', to: '/#services' }, { label: 'Contact', to: '/contact' },
];

export function Navbar() {
  const { pathname, hash } = useLocation();
  const [open, setOpen] = useState(false);
  const here = pathname + hash;
  const isActive = (to: string) => to === here || (to === '/projects' && pathname.startsWith('/projects'));

  return (
    <AppBar position="sticky" elevation={0} color="transparent"
      sx={(t) => ({ backdropFilter: 'blur(12px)', background: alpha(t.palette.background.default, 0.7), borderBottom: `1px solid ${t.palette.brand.border}` })}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 72, gap: 2 }}>
          <Box component={RouterLink} to="/" sx={{ color: 'text.primary', textDecoration: 'none', flexGrow: { xs: 1, md: 0 } }}>
            <Logo />
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, mx: 'auto' }}>
            {links.map((l) => (
              <Button key={l.to} component={RouterLink} to={l.to} color="inherit"
                sx={(t) => ({ color: isActive(l.to) ? t.palette.text.primary : t.palette.text.secondary, borderRadius: 0,
                  borderBottom: `2px solid ${isActive(l.to) ? t.palette.brand.accent : 'transparent'}` })}>
                {l.label}
              </Button>
            ))}
          </Box>
          <ThemeSwitcher />
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <AppButton variant="ghost" to="/contact" startIcon={<AppIcon icon={Mail} size={18} />}>Let&apos;s Talk</AppButton>
          </Box>
          <IconButton sx={{ display: { md: 'none' } }} aria-label="Open menu" onClick={() => setOpen(true)} color="inherit">
            <AppIcon icon={Menu} />
          </IconButton>
        </Toolbar>
      </Container>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)} PaperProps={{ sx: { width: 260, p: 2 } }}>
        <IconButton sx={{ alignSelf: 'flex-end' }} aria-label="Close menu" onClick={() => setOpen(false)}><AppIcon icon={X} /></IconButton>
        {links.map((l) => (
          <Button key={l.to} component={RouterLink} to={l.to} color="inherit" onClick={() => setOpen(false)}
            sx={{ justifyContent: 'flex-start', py: 1.5 }}>{l.label}</Button>
        ))}
        <AppButton variant="gradient" to="/contact" onClick={() => setOpen(false)}>Let&apos;s Talk</AppButton>
      </Drawer>
    </AppBar>
  );
}
