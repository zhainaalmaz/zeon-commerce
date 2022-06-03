import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import styled from 'styled-components';
import { ReactComponent as ArrowSvg } from '../assets/icons/arrow.svg';
import { NavLink } from 'react-router-dom';

const StyledCard = styled.div`
  width: 286px;
  border-radius: none;
  margin: 3px;
  margin-top: 10px;
  position: relative;
`;

const StyledTitle = styled.div`
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
`;

const StyledButton = styled.button`
  background-color: black;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 286px;
  height: 44px;
  cursor: pointer;
  :hover {
    background-color: white;
    span {
      color: black;
    }
    svg {
      fill: black;
    }
  }
`;

const StyledSpan = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
`;

export default function CollectionCard({ item }) {
  return (
    <>
      <StyledCard key={item.id}>
        <CardMedia component="img" height="374" image={item.image} alt="hhhh" />
        <StyledTitle>{item.title}</StyledTitle>

        <NavLink
          to={`/${item.id}`}
          style={{
            fontWeight: '500',
            fontSize: '14px',
            lineHeight: '17px',
            color: '#ffffff',
          }}
        >
          <StyledButton>
            <StyledSpan> Смотреть все</StyledSpan> <ArrowSvg fill="white" />
          </StyledButton>
        </NavLink>
      </StyledCard>
    </>
  );
}
