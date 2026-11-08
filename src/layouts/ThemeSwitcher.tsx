import { Palette } from 'lucide-react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { cycleTheme } from '@/features/theme/themeSlice';
import { AppIcon } from '@/shared/ui';

export function ThemeSwitcher() {
  const id = useAppSelector((s) => s.theme.id);
  const dispatch = useAppDispatch();
  return (
    <Tooltip title={`Theme: ${id} (click to change)`}>
      <IconButton aria-label="Change theme" onClick={() => dispatch(cycleTheme())} color="inherit">
        <AppIcon icon={Palette} />
      </IconButton>
    </Tooltip>
  );
}
