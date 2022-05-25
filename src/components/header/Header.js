import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Input from '../../ui/CustomInput';
import styled from 'styled-components';
import { Divider } from '@mui/material';
import { ReactComponent as ZeonLogo } from './../../assets/icons/zeonLogo.svg';
import { ReactComponent as BasketLogo } from './../../assets/icons/basket.svg';
import { ReactComponent as FavoriteLogo } from './../../assets/icons/favorite.svg';
import AboutUs from '../../pages/AboutUs';
import Collection from '../../pages/Collection';
import News from '../../pages/News';
import Main from '../../pages/Main';
import Cart from '../../pages/Cart';
import Favorite from '../../pages/Favorite';
import MuiDrawer from './Drawer';
import { useNavigate } from 'react-router-dom';

const StyledLayout = styled.div`
  width: 90%;
  margin: 22px 100px;
  display: flex;
  justify-content: space-between;
`;

const StyledContainer = styled.div`
  width: 274px;
  display: flex;
  justify-content: space-around;
  font-weight: 400;
  font-size: 17px;
  line-height: 21px;
`;

const StyledContent = styled.div`
  width: 90%;
  margin: 10px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledContact = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Header = () => {
  let navigate = useNavigate();
  return (
    <>
      <StyledLayout>
        <StyledContainer>
          <Link to="/about">О нас</Link>
          <Link to="/collection">Коллекции </Link>
          <Link to="/news">Новости </Link>
        </StyledContainer>
        <StyledContact>
          <span>
            Тел:<a href="/"> +996 000 00 00 00</a>
          </span>
        </StyledContact>
      </StyledLayout>
      <Divider />
      <StyledContent>
        <MuiDrawer navigate={navigate} />
        <Link to="/main">
          <ZeonLogo />
        </Link>

        <Input width="50%" placeholder="Поиск" />
        <Link to="/favorite">
          <FavoriteLogo style={{ marginRight: 5 }} />
          Избранное
        </Link>
        <Link to="/cart">
          <BasketLogo style={{ marginRight: 5 }} />
          Корзина
        </Link>
      </StyledContent>
      <Divider />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/news" element={<News />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default Header;
