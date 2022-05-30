import * as React from 'react';
import { ReactComponent as FavoriteLogo } from './../../assets/icons/favorite.svg';
import { ReactComponent as BasketLogo } from './../../assets/icons/basket.svg';
import {
  Drawer,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

const MuiDrawer = ({ navigate }) => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const itemList = [
    {
      text: 'Меню',
      onClick: () => navigate('/menu'),
    },
    {
      text: 'О нас',
      onClick: () => navigate('/aboutUs'),
    },
    {
      text: 'Новости',
      onClick: () => navigate('/news'),
    },
    {
      text: 'Коллекция',
      onClick: () => navigate('/collection'),
    },
  ];

  const itemList2 = [
    {
      text: 'Избранное',
      onClick: () => navigate('/favorite'),
    },
    {
      text: 'Корзина',
      onClick: () => navigate('/basket'),
    },
  ];
  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setIsDrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <List>
            {itemList.map((item) => {
              const { text, onClick } = item;
              return (
                <ListItem key={text} onClick={onClick} disablePadding>
                  <ListItemButton>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
          <Divider />
          <List>
            {itemList2.map((item, index) => {
              const { text, onClick } = item;
              return (
                <ListItem key={text} onClick={onClick} disablePadding>
                  <ListItemButton>
                    {index % 2 === 0 ? (
                      <FavoriteLogo style={{ marginRight: 5 }} />
                    ) : (
                      <BasketLogo style={{ marginRight: 5 }} />
                    )}

                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default MuiDrawer;
