import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, IconButton, Stack } from '@mui/material';

import { NavItem } from '@/types';

import { Flex } from '../Flex';
import { Logo } from '../Logo';
import Scrollbar from '../Scrollbar/scrollbar';
import { NavItem as Item } from './NavItem';

const navItems: NavItem[] = [
  {
    title: 'Menu1',
    path: '/',
    icon: 'Home',
  },
  {
    title: 'Menu2',
    path: '/order',
    icon: 'Cart',
  },
  {
    title: 'Menu3',
    path: '/customer',
    icon: 'NotificationIcon',
  },
  {
    title: 'Menu4',
    icon: 'User',
    children: [
      {
        title: 'Menu 4a',
        path: '/menu-4a',
      },
      {
        title: 'Menu 4b',
        path: '/menu-4b',
      },
      {
        title: 'Menu 4c',
        path: '/menu-4c',
      },
    ],
  },
  {
    title: 'Menu5',
    icon: 'Setting',
    children: [
      {
        title: 'menu 5a',
        path: '/menu-5a',
      },
      {
        title: 'menu 5b',
        path: '/menu-5b',
      },
      {
        title: 'menu 5c',
        path: '/menu-5c',
      },
    ],
  },
];

export function Menu() {
  return (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        sx={{ mt: '18px', mx: '10px' }}
      >
        <Logo />
        <IconButton>
          <MoreVertIcon sx={{ color: 'white' }} />
        </IconButton>
      </Flex>

      <Stack component="nav" spacing={0.5} sx={{ mt: '30px', px: '10px' }}>
        {navItems.map((item) => (
          <Item key={item.title} item={item} />
        ))}
      </Stack>
      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );
}
