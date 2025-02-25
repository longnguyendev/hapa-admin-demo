import Box, { BoxProps } from '@mui/material/Box';

import { HEADER, NAV } from '@/constants';
import { useResponsive } from '@/hooks';

const SPACING = 16;

export function Main({ sx, ...props }: BoxProps) {
  const lgUp = useResponsive('up', 'lg');

  return (
    <Box
      component="main"
      sx={{
        position: 'relative',
        flexGrow: 1,
        minHeight: 1,
        display: 'flex',
        flexDirection: 'column',
        px: { xs: 2, md: 3.75 },
        pb: 2,
        pt: `${HEADER.H_MOBILE + SPACING}px`,
        ...(lgUp && {
          pt: `${HEADER.H_DESKTOP + SPACING}px`,
          width: `calc(100% - ${NAV.WIDTH}px)`,
        }),
        ...sx,
      }}
      {...props}
    />
  );
}
