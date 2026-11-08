import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { techStack } from '@/data/techStack';
import { GlassCard, Section } from '@/shared/ui';

const groups = [
  { key: 'frontend', title: 'Frontend & Mobile' },
  { key: 'backend', title: 'Backend' },
] as const;

export function TechStackSection() {
  return (
    <Section id="tech" title="Tech Stack" subtitle="Tools I use to ship from screen to server.">
      <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', md: '3fr 2fr' } }}>
        {groups.map((g) => (
          <GlassCard key={g.key}>
            <Typography fontWeight={700} sx={{ mb: 2 }}>{g.title}</Typography>
            <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
              {techStack.filter((t) => t.group === g.key).map((t) => {
                const Icon = t.icon;
                return (
                  <Box key={t.name} sx={{ textAlign: 'center', minWidth: 80 }}>
                    <Icon size={44} color={t.color} aria-hidden />
                    <Typography variant="body2" sx={{ mt: 1 }}>{t.name}</Typography>
                  </Box>
                );
              })}
            </Box>
          </GlassCard>
        ))}
      </Box>
    </Section>
  );
}
