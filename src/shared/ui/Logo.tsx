import { useId } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

export function LogoMark({ size = 40 }: { size?: number }) {
  const { palette } = useTheme();
  const id = useId().replace(/:/g, '');
  return (
    <svg width={size} height={(size * 56) / 64} viewBox="0 0 64 56" role="img" aria-label="KLNP mark">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={palette.brand.accent} />
          <stop offset="1" stopColor={palette.brand.primary} />
        </linearGradient>
      </defs>
      <g fill={`url(#${id})`}>
        <polygon points="6,52 18,4 30,4 18,52" />
        <polygon points="31,30 49,4 63,4 41,34" />
        <polygon points="29,36 43,36 60,52 45,52" />
      </g>
    </svg>
  );
}

export function Logo({ size = 36 }: { size?: number }) {
  return (
    <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.25, lineHeight: 1 }}>
      <LogoMark size={size} />
      <Box>
        <Box sx={{ fontWeight: 800, fontSize: size * 0.6, letterSpacing: '0.02em' }}>KLNP</Box>
        <Box sx={{ fontSize: size * 0.2, letterSpacing: '0.5em', color: 'text.secondary', mt: 0.4 }}>DEVELOP</Box>
      </Box>
    </Box>
  );
}
