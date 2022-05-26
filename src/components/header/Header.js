import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../ui/CustomInput';
import styled from 'styled-components';
import { Divider } from '@mui/material';
import { ReactComponent as BasketLogo } from './../../assets/icons/basket.svg';
import { ReactComponent as FavoriteLogo } from './../../assets/icons/favorite.svg';
import MuiDrawer from './Drawer';
import { useNavigate } from 'react-router-dom';
import { getLogoRequest } from '../../api/service';

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
  margin: 10px;
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
  const [logo, setLogo] = useState();

  useEffect(() => {
    const getLogo = async () => {
      try {
        const logoResponse = await getLogoRequest();
        setLogo(logoResponse.data.headerLogo);
      } catch (error) {
        console.log(error);
      }
    };
    getLogo();
  }, []);

  return (
    <div style={{ background: 'white' }}>
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
        <Link to="/">
          <img href="/" alt="logo" src={logo} />
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
    </div>
  );
};

export default Header;
