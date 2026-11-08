import { Link as RouterLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { AppIcon, GlassCard } from '@/shared/ui';
import type { Project } from '../types';

const label = { mobile: 'Mobile', web: 'Web', backend: 'Backend' };

export function ProjectCard({ project: p }: { project: Project }) {
  return (
    <Box component={RouterLink} to={`/projects/${p.slug}`} sx={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
      <GlassCard sx={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 1.5, transition: 'border-color .2s', '&:hover': { borderColor: 'primary.main' } }}>
        <Chip size="small" label={label[p.category]} color="secondary" variant="outlined" sx={{ alignSelf: 'flex-start' }} />
        <Typography variant="h6" fontWeight={700}>{p.title}</Typography>
        <Typography color="text.secondary" sx={{ flex: 1 }}>{p.summary}</Typography>
        <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap' }}>
          {p.stack.map((s) => <Chip key={s} size="small" label={s} />)}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'secondary.main', fontWeight: 600 }}>
          View case study <AppIcon icon={ArrowRight} size={16} />
        </Box>
      </GlassCard>
    </Box>
  );
}
