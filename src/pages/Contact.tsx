import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { brand } from '@/config/brand';
import { ContactForm } from '@/features/contact/ContactForm';
import { AppIcon, GlassCard, Section } from '@/shared/ui';

export default function Contact() {
  const channels = [
    { icon: Mail, label: brand.email, href: `mailto:${brand.email}` },
    { icon: MessageCircle, label: 'LINE', href: brand.line },
    { icon: Github, label: 'GitHub', href: brand.github },
    { icon: Linkedin, label: 'LinkedIn', href: brand.linkedin },
  ];
  return (
    <Section title="Let's Talk" subtitle="Tell me about the role or project. I reply within 1–2 business days.">
      <Box sx={{ display: 'grid', gap: 4, gridTemplateColumns: { xs: '1fr', md: '1.2fr .8fr' }, alignItems: 'start' }}>
        <GlassCard><ContactForm /></GlassCard>
        <GlassCard>
          <Typography variant="h6" fontWeight={700} gutterBottom>Prefer another way?</Typography>
          {channels.map((c) => (
            <Link key={c.label} href={c.href} target="_blank" rel="noreferrer" underline="hover" color="text.primary"
              sx={{ display: 'flex', alignItems: 'center', gap: 1.5, py: 1 }}>
              <AppIcon icon={c.icon} /> {c.label}
            </Link>
          ))}
        </GlassCard>
      </Box>
    </Section>
  );
}
