import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Input from '../../ui/CustomInput';
import styled from 'styled-components';
import { Divider } from '@mui/material';
import { ReactComponent as BasketLogo } from './../../assets/icons/basket.svg';
import { ReactComponent as FavoriteLogo } from './../../assets/icons/favorite.svg';
import MuiDrawer from './Drawer';
import { useNavigate } from 'react-router-dom';
import { getLogoRequest } from '../../api/service';
import { ReactComponent as SearchSvg } from '../../assets/icons/searchIcon.svg';
import { ReactComponent as FavoritedSvg } from '../../assets/icons/favorite2.svg';
import { useSelector } from 'react-redux';
const StyledLayout = styled.div`
  margin: 22px 0;
  display: flex;
  justify-content: space-between;
`;

const StyledContainer = styled.div`
  width: 274px;
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  font-size: 17px;
  line-height: 21px;
`;

const StyledContent = styled.div`
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
  const [isFavorite, setIsFavorite] = useState([]);
  const favoriteItems = useSelector((state) => state.favorite.favoriteItems);

  useEffect(() => {
    setIsFavorite(favoriteItems);
  }, [favoriteItems]);

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
    <div className="container">
      <StyledLayout>
        <StyledContainer>
          <NavLink style={{ color: 'black' }} to="/about">
            О нас
          </NavLink>
          <NavLink style={{ color: 'black' }} to="/collection">
            Коллекции
          </NavLink>
          <NavLink style={{ color: 'black' }} to="/news">
            Новости
          </NavLink>
        </StyledContainer>
        <StyledContact>
          <span>
            Тел:<a href="tel"> +996 000 00 00 00</a>
          </span>
        </StyledContact>
      </StyledLayout>
      <Divider />
      <StyledContent>
        <MuiDrawer navigate={navigate} />
        <Link to="/">
          <img alt="logo" src={logo} />
        </Link>

        <Input width="50%" placeholder="Поиск">
          <span>
            <SearchSvg />
          </span>
        </Input>
        <NavLink style={{ color: 'black' }} to="/favorite">
          {isFavorite.length > 0 ? (
            <FavoritedSvg style={{ marginRight: 10 }} />
          ) : (
            <FavoriteLogo style={{ marginRight: 10 }} fill="#393939" />
          )}
          Избранное
        </NavLink>
        <NavLink style={{ color: 'black' }} to="/cart">
          <BasketLogo style={{ marginRight: 10 }} fill="#393939" />
          Корзина
        </NavLink>
      </StyledContent>
    </div>
  );
};

export default Header;
