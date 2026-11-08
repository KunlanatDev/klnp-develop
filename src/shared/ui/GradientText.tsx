import { styled } from '@mui/material/styles';

export const GradientText = styled('span')(({ theme }) => ({
  background: theme.palette.brand.gradient,
  WebkitBackgroundClip: 'text', backgroundClip: 'text',
  color: 'transparent', WebkitTextFillColor: 'transparent',
}));
