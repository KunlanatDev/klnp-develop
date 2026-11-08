import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { AppButton, Section } from '@/shared/ui';
import { ProjectCard } from '@/features/projects/components/ProjectCard';
import { useGetProjectsQuery } from '@/features/projects/projectsApi';

export function FeaturedProjectsSection() {
  const { data, isLoading } = useGetProjectsQuery();
  const featured = (data ?? []).filter((p) => p.featured);
  return (
    <Section id="projects" title="Featured Projects" subtitle="A few things I've built, with the problem each one solved.">
      <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', md: 'repeat(3,1fr)' } }}>
        {isLoading ? [0, 1, 2].map((i) => <Skeleton key={i} variant="rounded" height={220} />) : featured.map((p) => <ProjectCard key={p.id} project={p} />)}
      </Box>
      <Box sx={{ mt: 4 }}><AppButton variant="ghost" to="/projects">See all projects</AppButton></Box>
    </Section>
  );
}
