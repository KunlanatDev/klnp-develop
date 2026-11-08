import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { services } from '@/data/services';
import { AppIcon, GlassCard, Section } from '@/shared/ui';

export function ServicesSection() {
  return (
    <Section id="services" title="Services" subtitle="What you can hire me for.">
      <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', md: 'repeat(3,1fr)' } }}>
        {services.map((s) => (
          <GlassCard key={s.title}>
            <Box sx={{ color: 'secondary.main', mb: 2 }}><AppIcon icon={s.icon} size={30} /></Box>
            <Typography variant="h6" fontWeight={700} gutterBottom>{s.title}</Typography>
            <Typography color="text.secondary" sx={{ mb: 2 }}>{s.desc}</Typography>
            <Typography variant="body2" color="text.secondary">Typical time: {s.time}</Typography>
          </GlassCard>
        ))}
      </Box>
    </Section>
  );
}
