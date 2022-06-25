// import { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Box,  Divider, Drawer, Typography, useMediaQuery } from '@mui/material';

import { ChartBar as ChartBarIcon } from '../icons/chart-bar';
import { ShoppingBag as ShoppingBagIcon } from '../icons/shopping-bag';
import { User as UserIcon } from '../icons/user';
import { LogOut as LogOutIcon } from '../icons/log-out';

import { NavItem } from './nav-item';

const Navitems = [
  {
    href: '/',
    icon: (<ChartBarIcon fontSize="small" />),
    title: 'Dashboard'
  },
  // {
  //   href: '/productdata',
  //   icon: (<ShoppingBagIcon fontSize="small" />),
  //   title: 'Production Data'
  // }
];

const items = [
  // {
  //   href: '/profiles',
  //   icon: (<UserIcon fontSize="small" />),
  //   title: 'Profile'
  // },
  // {
  //   href: '/login',
  //   icon: (<LogOutIcon fontSize="small" />),
  //   title: 'Logout'
  // }
];

export const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false
  });

  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <div>
          <Box sx={{ px: 2, py:3 }}>
            <Box
              sx={{
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                px: 3,
                py: '0',
                borderRadius: 1
              }}
            >
              <div>
                <Typography
                  color="inherit"
                  variant="h5"
                >
                  Mona Plastics
                </Typography>
              </div>
            </Box>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: '#2D3748',
            my: 3
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {Navitems.map((Navitem) => (
            <NavItem
              key={Navitem.title}
              icon={Navitem.icon}
              href={Navitem.href}
              title={Navitem.title}
            />
          ))}
        </Box>
        <Divider sx={{ borderColor: '#2D3748' }} />
        <Box
          sx={{
            px: 2,
            py: 3
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            {items.map((item) => (
              <NavItem
                key={item.title}
                icon={item.icon}
                href={item.href}
                title={item.title}
              />
            ))}
          </Box>
        
        </Box>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.900',
            color: '#FFFFFF',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

// DashboardSidebar.propTypes = {
//   onClose: PropTypes.func,
//   open: PropTypes.bool
// };
