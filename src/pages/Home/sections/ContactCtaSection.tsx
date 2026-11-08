import { Mail } from 'lucide-react';
import Typography from '@mui/material/Typography';
import { brand } from '@/config/brand';
import { AppButton, AppIcon, GlassCard, Section } from '@/shared/ui';

export function ContactCtaSection() {
  return (
    <Section>
      <GlassCard sx={{ textAlign: 'center', py: 6 }}>
        <Typography variant="h3" sx={{ fontSize: { xs: '1.8rem', md: '2.4rem' }, mb: 1.5 }}>Have a role or a project in mind?</Typography>
        <Typography color="text.secondary" sx={{ mb: 4 }}>Tell me what you need. I reply within 1–2 business days.</Typography>
        <AppButton variant="gradient" to="/contact">Let&apos;s Talk</AppButton>{' '}
        <AppButton variant="ghost" href={`mailto:${brand.email}`} startIcon={<AppIcon icon={Mail} size={18} />}>Email me</AppButton>
      </GlassCard>
    </Section>
  );
}
