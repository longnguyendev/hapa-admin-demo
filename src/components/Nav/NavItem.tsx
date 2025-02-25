import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import clsx from 'clsx';
import { useState } from 'react';
import { Link } from 'react-router';

import { usePathname } from '@/hooks';
import { type NavItem as NavItemType } from '@/types';

import { Icon } from '../Icon';

export function NavItem({ item }: { item: NavItemType }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (!item?.path) setOpen(!open);
  };
  const pathname = usePathname();

  const active = item.path === pathname;

  return (
    <>
      <ListItemButton
        disableGutters
        component={item?.path ? Link : 'button'}
        {...(item?.path && { to: item.path })}
        onClick={handleClick}
        className={clsx({ active })}
      >
        {item.icon && (
          <ListItemIcon>
            <Icon
              name={item.icon}
              sx={{ width: 24, height: 24, mr: 2, color: 'white' }}
            />
          </ListItemIcon>
        )}
        <ListItemText primary={item.title} />
        {Boolean(item?.children?.length) && (
          <>{open ? <ExpandLess /> : <ExpandMore />}</>
        )}
      </ListItemButton>
      {item.children && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {item.children.map((item) => (
              <ListItemButton
                disableGutters
                sx={{
                  pl: 7,
                }}
                key={item.title}
                component={item?.path ? Link : 'button'}
                {...(item?.path && { to: item.path })}
                className={clsx({ active: item.path === pathname })}
              >
                <ListItemText primary={item.title} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
}
