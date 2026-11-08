import { useState } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { AppButton } from '@/shared/ui';

// Loads the (large) Flutter web build only after the visitor presses the button.
export function FlutterEmbed({ path, title, height = 640 }: { path: string; title: string; height?: number }) {
  const [on, setOn] = useState(false);
  return (
    <Box sx={(t) => ({ height, border: `1px solid ${t.palette.brand.border}`, borderRadius: 3, overflow: 'hidden', background: t.palette.background.paper })}>
      {on ? (
        <iframe src={path} title={title} style={{ width: '100%', height: '100%', border: 0 }} allow="clipboard-write" />
      ) : (
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
          <AppButton variant="gradient" onClick={() => setOn(true)}>Launch live demo</AppButton>
          <Link href={path} target="_blank" rel="noreferrer">Open full screen in a new tab</Link>
        </Box>
      )}
    </Box>
  );
}
