import React, { useEffect, useState } from 'react';
import { ReactComponent as FavoriteLogo } from './../../assets/icons/favorite.svg';
import { ReactComponent as FavoritedSvg } from './../../assets/icons/favorite2.svg';
import { ReactComponent as BasketLogo } from './../../assets/icons/basket.svg';
import { ReactComponent as AddedBasketIcon } from './../../assets/icons/basket2.svg';
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
import Floating from '../floatingButtons/Floating';
import './Drawer.css';
import { ReactComponent as DeleteSvg } from '../../assets/icons/delete.svg';
import { useSelector } from 'react-redux';

const MuiDrawer = ({ navigate }) => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const favoriteItems = useSelector((state) => state.favorite.favoriteItems);
  const addedItems = useSelector((state) => state.cart.cartItems);

  const [isFavorite, setIsFavorite] = useState([]);
  const [isAdded, setIsAdded] = useState([]);

  const itemList = [
    {
      text: 'О нас',
      onClick: () => navigate('/about'),
    },
    {
      text: 'Новости',
      onClick: () => navigate('/news'),
    },
    {
      text: 'Коллекция',
      onClick: () => navigate('/collections'),
    },
  ];

  const itemList2 = [
    {
      text: 'Избранное',
      onClick: () => navigate('/favorite'),
    },
    {
      text: 'Корзина',
      onClick: () => navigate('/cart'),
    },
  ];
  useEffect(() => {
    setIsFavorite(favoriteItems);
    setIsAdded(addedItems);
  }, [addedItems, favoriteItems]);

  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setIsDrawerOpen(true)}
      >
        <MenuIcon
          style={{ border: '2px solid #EDEDED', width: '36px', height: 36 }}
        />
      </IconButton>

      <Drawer
        className="drawer_container"
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box className="drawer_box" p={2} role="presentation">
          <div className="drawer_header">
            <h5 className="drawer_menu">Меню</h5>
            <DeleteSvg onClick={() => setIsDrawerOpen(false)} />
          </div>
          <List className="drawer_list">
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
                      <div>
                        {!isFavorite ? (
                          <FavoriteLogo style={{ marginRight: 5 }} />
                        ) : (
                          <FavoritedSvg style={{ marginRight: 5 }} />
                        )}
                      </div>
                    ) : (
                      <div>
                        {!isAdded ? (
                          <BasketLogo style={{ marginRight: 5 }} />
                        ) : (
                          <AddedBasketIcon style={{ marginRight: 5 }} />
                        )}
                      </div>
                    )}

                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              );
            })}
            <div className="drawer_footer">
              <div style={{ marginBottom: 8 }}>
                <h5 className="drawer_phone"> Свяжитeсь с нами:</h5>
                <span className="drawer_number">
                  Тел:
                  <a
                    href="tel:+996 000 00 00 00"
                    style={{ color: 'black', marginLeft: 5 }}
                  >
                    +996 000 00 00 00
                  </a>
                </span>
              </div>
              <Floating />
            </div>
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default MuiDrawer;
