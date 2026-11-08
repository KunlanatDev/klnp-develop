import { Download, Lightbulb, Code, TrendingUp } from 'lucide-react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { brand } from '@/config/brand';
import { AppButton, AppIcon, GlassCard, GradientText, Section } from '@/shared/ui';

const values = [
  { icon: Lightbulb, title: 'Innovation', text: 'Turn ideas into real solutions.' },
  { icon: Code, title: 'Engineering Excellence', text: 'Build with quality and care.' },
  { icon: TrendingUp, title: 'Growing Together', text: 'Create a better future together.' },
];

export function AboutSection() {
  return (
    <Section id="about" title="About">
      <Box sx={{ display: 'grid', gap: 5, gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, alignItems: 'center' }}>
        <Box>
          <Typography variant="h3" sx={{ fontSize: { xs: '1.8rem', md: '2.4rem' }, mb: 2 }}>
            From Ideas<br />to <GradientText>Innovation.</GradientText>
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 3 }}>
            Hi, I&apos;m {brand.owner}. I build mobile apps with Flutter and web apps with React and TypeScript, and I can take on the backend in Go or Spring Boot when a project needs it. (Edit this paragraph in AboutSection.tsx.)
          </Typography>
          <AppButton variant="ghost" href={brand.resumeUrl} download startIcon={<AppIcon icon={Download} size={18} />}>Download resume</AppButton>
        </Box>
        <GlassCard sx={{ display: 'grid', gap: 3 }}>
          {values.map((v) => (
            <Box key={v.title} sx={{ display: 'flex', gap: 2 }}>
              <Box sx={{ color: 'secondary.main', mt: 0.3 }}><AppIcon icon={v.icon} size={26} /></Box>
              <Box><Typography fontWeight={700}>{v.title}</Typography><Typography variant="body2" color="text.secondary">{v.text}</Typography></Box>
            </Box>
          ))}
        </GlassCard>
      </Box>
    </Section>
  );
}
