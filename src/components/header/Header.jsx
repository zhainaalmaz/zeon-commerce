import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Input from '../../ui/CustomInput';
import styled from 'styled-components';
import { Divider } from '@mui/material';
import { ReactComponent as BasketLogo } from './../../assets/icons/basket.svg';
import { ReactComponent as FavoriteLogo } from './../../assets/icons/favorite.svg';
import MuiDrawer from './Drawer';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as SearchSvg } from '../../assets/icons/searchIcon.svg';
import { ReactComponent as FavoritedSvg } from '../../assets/icons/favorite2.svg';
import { ReactComponent as AddedBasketIcon } from '../../assets/icons/basket2.svg';
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
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledContent = styled.div`
  margin: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media {
    display: flex;
  }
`;

const StyledSpan = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #393939;
`;

const StyledPhoneBlock = styled.span`
  @media (min-width: 320px) {
    display: none;
  }
`;

const StyledDivider = styled.div`
  @media (min-width: 320px) {
    display: none;
  }
`;

const Header = () => {
  let navigate = useNavigate();
  const headerLogo = useSelector((state) => state.commerce.data);
  const [isFavorite, setIsFavorite] = useState([]);
  const [isAdded, setIsAdded] = useState([]);
  const favoriteItems = useSelector((state) => state.favorite.favoriteItems);
  const addedItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    setIsFavorite(favoriteItems);
    setIsAdded(addedItems);
  }, [addedItems, favoriteItems]);

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

        <StyledPhoneBlock>
          Тел:
          <a
            href="tel:+996 000 00 00 00"
            style={{ color: 'black', marginLeft: 5 }}
          >
            +996 000 00 00 00
          </a>
        </StyledPhoneBlock>
      </StyledLayout>
      <StyledDivider>
        <Divider />
      </StyledDivider>
      <StyledContent>
        <MuiDrawer navigate={navigate} />
        <Link to="/">
          <img alt="logo" src={headerLogo.headerLogo} />
        </Link>

        <Input width="50%" placeholder="Поиск">
          <span>
            <SearchSvg />
          </span>
        </Input>
        <NavLink
          style={{ color: 'black', display: 'flex', alignItems: 'center' }}
          to="/favorite"
        >
          {isFavorite.length > 0 ? (
            <FavoritedSvg style={{ marginRight: 10 }} />
          ) : (
            <FavoriteLogo style={{ marginRight: 10 }} fill="#393939" />
          )}
          <StyledSpan> Избранное</StyledSpan>
        </NavLink>
        <NavLink
          style={{ color: 'black', display: 'flex', alignItems: 'center' }}
          to="/cart"
        >
          {isAdded?.length > 0 ? (
            <AddedBasketIcon style={{ marginRight: 10 }} />
          ) : (
            <BasketLogo style={{ marginRight: 10 }} fill="#393939" />
          )}
          <StyledSpan> Корзина</StyledSpan>
        </NavLink>
      </StyledContent>
    </div>
  );
};

export default Header;
