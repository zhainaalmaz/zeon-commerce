import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Divider } from '@mui/material';
import { ReactComponent as BasketLogo } from './../../assets/icons/basket.svg';
import { ReactComponent as FavoriteLogo } from './../../assets/icons/favorite.svg';
import MuiDrawer from './Drawer';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as FavoritedSvg } from '../../assets/icons/favorite2.svg';
import { ReactComponent as AddedBasketIcon } from '../../assets/icons/basket2.svg';
import { useSelector } from 'react-redux';
import SearchBar from '../search/SearchBar';
import cls from './Header.module.css';
import { ReactComponent as SearchIcon } from '../../assets/icons/search2.svg';
import HeaderNavLink from './HeaderNavLink';
import { ReactComponent as RemoveSvg } from '../../assets/icons/delete.svg';
import LoginIcon from '@mui/icons-material/Login';
import { Login } from '../auth/Login';

const Header = () => {
  const headerLogo = useSelector((state) => state.commerce.data);
  const [isFavorite, setIsFavorite] = useState([]);
  const [isAdded, setIsAdded] = useState([]);
  const favoriteItems = useSelector((state) => state.favorite.favoriteItems);
  const addedItems = useSelector((state) => state.cart.cartItems);
  const [isShowInput, setIsShowInput] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsFavorite(favoriteItems);
    setIsAdded(addedItems);
  }, [addedItems, favoriteItems]);

  const headerLinks = [
    {
      linkName: 'О нас',
      linkPath: '/about',
    },
    {
      linkName: 'Коллекции',
      linkPath: '/collections',
    },
    {
      linkName: 'Новости',
      linkPath: '/news',
    },
  ];

  const showInputHandler = () => {
    setIsShowInput(!isShowInput);
  };

  return (
    <div className="divider-line">
      <div className="container">
        <div className={cls.layout}>
          <div className={cls.container}>
            {headerLinks.map(({ linkName, linkPath }, index) => {
              return (
                <HeaderNavLink
                  key={index}
                  linkName={linkName}
                  linkPath={linkPath}
                />
              );
            })}
          </div>

          <span className={cls.sign}>
            Тел:
            <a href="tel:+996 000 00 00 00" className={cls.phone}>
              +996 000 00 00 00
            </a>
            <Link to="/login" element={<Login />}>
              <LoginIcon />
            </Link>
          </span>
        </div>
      </div>
      <Divider />
      <div className="container">
        <div className={cls.content}>
          <div className={cls.burger_menu}>
            <MuiDrawer navigate={navigate} />
          </div>

          <Link to="/">
            <img alt="logo" src={headerLogo.headerLogo} />
          </Link>
          <div className={cls.search_icon}>
            {isShowInput ? (
              <SearchBar showInputHandler={showInputHandler} />
            ) : null}
            {isShowInput ? (
              <RemoveSvg style={{ width: 36 }} onClick={showInputHandler} />
            ) : (
              <SearchIcon onClick={showInputHandler} />
            )}
          </div>
          <div className={cls.search_input}>
            <SearchBar />
          </div>

          <NavLink className={cls.navLink_styles} to="/favorite">
            {isFavorite.length > 0 ? (
              <FavoritedSvg style={{ marginRight: 10 }} />
            ) : (
              <FavoriteLogo style={{ marginRight: 10 }} fill="#393939" />
            )}
            <span className={cls.title}>Избранное</span>
          </NavLink>
          <NavLink className={cls.navLink_styles} to="/cart">
            {isAdded?.length > 0 ? (
              <AddedBasketIcon style={{ marginRight: 10 }} />
            ) : (
              <BasketLogo style={{ marginRight: 10 }} fill="#393939" />
            )}
            <span className={cls.title}> Корзина</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
