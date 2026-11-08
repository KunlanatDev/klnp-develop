import { Cloud, Code, Database, Smartphone, type LucideIcon } from 'lucide-react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, keyframes } from '@mui/material/styles';
import { brand } from '@/config/brand';
import { techStack } from '@/data/techStack';
import { AppButton, AppIcon, GlassCard, GradientText, LogoMark, TechChip } from '@/shared/ui';

const float = keyframes`0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}`;

function FloatIcon({ icon, sx }: { icon: LucideIcon; sx: object }) {
  return (
    <GlassCard sx={{ position: 'absolute', p: 1.75, display: 'grid', placeItems: 'center', color: 'secondary.main',
      animation: `${float} 6s ease-in-out infinite`, '@media (prefers-reduced-motion: reduce)': { animation: 'none' }, ...sx }}>
      <AppIcon icon={icon} size={28} />
    </GlassCard>
  );
}

function HeroVisual() {
  return (
    <Box sx={{ position: 'relative', height: 380, display: { xs: 'none', md: 'block' } }}>
      <GlassCard sx={(t) => ({ position: 'absolute', inset: '40px 60px', display: 'grid', placeItems: 'center',
        boxShadow: `0 0 90px ${alpha(t.palette.primary.main, 0.35)}` })}>
        <LogoMark size={150} />
      </GlassCard>
      <FloatIcon icon={Code} sx={{ top: 10, left: 10 }} />
      <FloatIcon icon={Smartphone} sx={{ top: 0, right: 20, animationDelay: '1s' }} />
      <FloatIcon icon={Cloud} sx={{ top: 150, right: 0, animationDelay: '2s' }} />
      <FloatIcon icon={Database} sx={{ bottom: 20, right: 70, animationDelay: '3s' }} />
    </Box>
  );
}

export function HeroSection() {
  return (
    <Container maxWidth="lg" sx={{ pt: { xs: 6, md: 10 }, pb: { xs: 6, md: 10 } }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.1fr .9fr' }, gap: 6, alignItems: 'center' }}>
        <Box>
          {brand.available && (
            <Box sx={(t) => ({ display: 'inline-flex', alignItems: 'center', gap: 1, px: 1.75, py: 0.6, mb: 3, borderRadius: 99,
              border: `1px solid ${t.palette.brand.border}`, background: t.palette.brand.glass, fontSize: 14, fontWeight: 600 })}>
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'success.main' }} />
              {brand.availableText}
            </Box>
          )}
          <Typography variant="h1" sx={{ fontSize: { xs: '2.9rem', md: '4.6rem' } }}>
            From Ideas<br />to <GradientText>Innovation.</GradientText>
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 3, mb: 4, fontSize: '1.15rem', maxWidth: 520 }}>
            I&apos;m a frontend developer who also builds the backend. I turn ideas into mobile and web products with modern technologies and scalable architecture.
          </Typography>
          <Box sx={{ display: 'flex', gap: 1.25, flexWrap: 'wrap', mb: 4 }}>
            {techStack.map((t) => <TechChip key={t.name} tech={t} />)}
          </Box>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <AppButton variant="gradient" to="/projects">Explore My Work</AppButton>
            <AppButton variant="ghost" to="/contact">Let&apos;s Talk</AppButton>
          </Box>
        </Box>
        <HeroVisual />
      </Box>
    </Container>
  );
}
