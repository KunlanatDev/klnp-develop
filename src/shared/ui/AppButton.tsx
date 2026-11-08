import { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Button, { type ButtonProps } from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

export interface AppButtonProps extends Omit<ButtonProps, 'variant' | 'sx'> {
  variant?: 'primary' | 'gradient' | 'ghost';
  loading?: boolean;
  to?: string; // internal route
  target?: string;
  download?: boolean;
}

export const AppButton = forwardRef<HTMLButtonElement, AppButtonProps>(function AppButton(
  { variant = 'primary', loading, to, children, disabled, ...rest }, ref,
) {
  const link = to ? ({ component: RouterLink, to } as object) : {};
  return (
    <Button
      ref={ref}
      {...link}
      {...rest}
      disabled={disabled || loading}
      sx={(t) => ({
        borderRadius: 3, px: 3, py: 1.2,
        ...(variant === 'gradient' && { background: t.palette.brand.gradient, color: '#fff', '&:hover': { filter: 'brightness(1.1)' } }),
        ...(variant === 'primary' && { background: t.palette.primary.main, color: '#fff', '&:hover': { background: t.palette.primary.dark } }),
        ...(variant === 'ghost' && { border: `1px solid ${t.palette.brand.accent}`, color: t.palette.text.primary, '&:hover': { background: t.palette.brand.glass } }),
      })}
    >
      {loading ? <CircularProgress size={20} color="inherit" /> : children}
    </Button>
  );
});
