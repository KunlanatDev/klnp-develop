import { useState } from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import { Section } from '@/shared/ui';
import { ProjectCard } from '@/features/projects/components/ProjectCard';
import { useGetProjectsQuery } from '@/features/projects/projectsApi';
import type { ProjectCategory } from '@/features/projects/types';

const filters: { v: ProjectCategory | 'all'; label: string }[] = [
  { v: 'all', label: 'All' }, { v: 'mobile', label: 'Mobile' }, { v: 'web', label: 'Web' }, { v: 'backend', label: 'Backend' },
];

export default function Projects() {
  const { data, isLoading } = useGetProjectsQuery();
  const [f, setF] = useState<ProjectCategory | 'all'>('all');
  const list = (data ?? []).filter((p) => f === 'all' || p.category === f);
  return (
    <Section title="Projects" subtitle="Each case study covers the problem, how I solved it, and the result.">
      <Box sx={{ display: 'flex', gap: 1, mb: 4, flexWrap: 'wrap' }}>
        {filters.map((x) => (
          <Chip key={x.v} label={x.label} clickable onClick={() => setF(x.v)} color={f === x.v ? 'primary' : 'default'} variant={f === x.v ? 'filled' : 'outlined'} />
        ))}
      </Box>
      {!isLoading && list.length === 0 && <Typography color="text.secondary">No projects in this category yet.</Typography>}
      <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', sm: 'repeat(2,1fr)', md: 'repeat(3,1fr)' } }}>
        {isLoading ? [0, 1, 2].map((i) => <Skeleton key={i} variant="rounded" height={220} />) : list.map((p) => <ProjectCard key={p.id} project={p} />)}
      </Box>
    </Section>
  );
}
