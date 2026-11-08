import { useParams } from 'react-router-dom';
import { ArrowLeft, Github } from 'lucide-react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import { AppButton, AppIcon, GlassCard, Section } from '@/shared/ui';
import { FlutterEmbed } from '@/features/projects/components/FlutterEmbed';
import { useGetProjectQuery } from '@/features/projects/projectsApi';
import NotFound from './NotFound';

export default function ProjectDetail() {
  const { slug = '' } = useParams();
  const { data: p, isLoading, isError } = useGetProjectQuery(slug);
  if (isLoading) return <Section><Skeleton variant="rounded" height={320} /></Section>;
  if (isError || !p) return <NotFound />;
  const blocks = [['Problem', p.problem], ['Solution', p.solution], ['Result', p.result]] as const;
  return (
    <Section>
      <AppButton variant="ghost" to="/projects" startIcon={<AppIcon icon={ArrowLeft} size={18} />}>All projects</AppButton>
      <Typography variant="h1" sx={{ fontSize: { xs: '2.2rem', md: '3.2rem' }, mt: 4, mb: 2 }}>{p.title}</Typography>
      <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap', mb: 4 }}>{p.stack.map((s) => <Chip key={s} label={s} />)}</Box>
      <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', md: 'repeat(3,1fr)' }, mb: 5 }}>
        {blocks.map(([h, text]) => (
          <GlassCard key={h}><Typography variant="h6" fontWeight={700} gutterBottom>{h}</Typography><Typography color="text.secondary">{text}</Typography></GlassCard>
        ))}
      </Box>
      {p.flutterDemo && <FlutterEmbed path={p.flutterDemo.path} title={p.title} height={p.flutterDemo.height} />}
      <Box sx={{ display: 'flex', gap: 2, mt: 4, flexWrap: 'wrap' }}>
        {p.links?.live && <AppButton variant="gradient" href={p.links.live} target="_blank">Open live site</AppButton>}
        {p.links?.github && <AppButton variant="ghost" href={p.links.github} target="_blank" startIcon={<AppIcon icon={Github} size={18} />}>View code</AppButton>}
      </Box>
    </Section>
  );
}
