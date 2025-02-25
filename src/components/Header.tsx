import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Avatar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import avatar from '@/assets/images/avatar.png';
import { HEADER, NAV } from '@/constants';
import { useResponsive } from '@/hooks';

import { Flex } from './Flex';

export function Header({ onOpenNav }: { onOpenNav: () => void }) {
  const theme = useTheme();

  const lgUp = useResponsive('up', 'lg');

  const renderContent = (
    <>
      {!lgUp && (
        <IconButton onClick={onOpenNav} sx={{ mr: 1 }}>
          <MenuIcon />
        </IconButton>
      )}

      <Flex justifyContent="space-between" alignItems="center" flexGrow={1}>
        <Flex alignItems="center">
          <Button>
            <Typography sx={{ fontFamily: 'Inter', color: 'text.secondary' }}>
              Trang chủ
            </Typography>
          </Button>
          <ArrowForwardIosIcon sx={{ color: 'text.secondary', fontSize: 11 }} />
          <Button>
            <Typography sx={{ fontFamily: 'Inter', color: 'text.primary' }}>
              Sản phẩm
            </Typography>
          </Button>
        </Flex>
        <Flex alignItems="center" gap={1.5}>
          <Avatar src={avatar} sx={{ width: 36, height: 36 }} />
          <Typography
            color="text.primary"
            sx={{ display: { xs: 'none', sm: 'inline-block' } }}
          >
            Nguyễn Chí Toàn
          </Typography>
          <IconButton>
            <KeyboardArrowDownIcon />
          </IconButton>
        </Flex>
      </Flex>
    </>
  );

  return (
    <AppBar
      color="secondary"
      sx={{
        boxShadow: 'none',
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(lgUp && {
          width: `calc(100% - ${NAV.WIDTH}px)`,
          height: HEADER.H_DESKTOP,
        }),
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 3.75 },
        }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}
