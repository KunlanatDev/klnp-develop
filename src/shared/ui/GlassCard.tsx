import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const GlassCard = styled(Box)(({ theme }) => ({
  background: theme.palette.brand.glass,
  border: `1px solid ${theme.palette.brand.border}`,
  borderRadius: theme.shape.borderRadius * 1.5,
  backdropFilter: 'blur(14px)',
  padding: theme.spacing(3),
}));
