import Box from '@mui/material/Box';
import type { Tech } from '@/data/techStack';

export function TechChip({ tech }: { tech: Tech }) {
  const Icon = tech.icon;
  return (
    <Box
      sx={(t) => ({
        display: 'inline-flex', alignItems: 'center', gap: 1, px: 1.75, py: 0.75, borderRadius: 99,
        border: `1px solid ${t.palette.brand.border}`, background: t.palette.brand.glass, fontSize: 14, fontWeight: 600,
      })}
    >
      <Icon color={tech.color} size={18} aria-hidden />
      {tech.name}
    </Box>
  );
}
