import React, { useState, useEffect } from 'react';
import { getLogoRequest, getNumberRequest } from '../../api/service';
import { Routes, Route, Link } from 'react-router-dom';
import Help from '../../pages/Help';
import styled from 'styled-components';
import { ReactComponent as TelegramSvg } from './../../assets/icons/telegram.svg';
import { ReactComponent as WhatsappSvg } from './../../assets/icons/whatsapp.svg';
import { ReactComponent as InstagramSvg } from './../../assets/icons/instagram.svg';

const StyledContainer = styled.div`
  width: 100%;
  height: 235px;
  background-color: black;
  display: flex;
  justify-content: space-between;
  text-align: start;
`;

const StyledContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 48px 100px;
`;

const StyledP = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  padding: 3px;
`;

const StyledSpan = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #e2e2e2;
`;

const Footer = () => {
  const [logo, setLogo] = useState();
  const [number, setNumber] = useState([]);

  useEffect(() => {
    const getLogo = async () => {
      try {
        const logoResponse = await getLogoRequest();
        setLogo(logoResponse.data.footerLogo);
      } catch (error) {
        console.log(error);
      }
    };
    getLogo();
  }, []);

  useEffect(() => {
    const getNumber = async () => {
      try {
        const numberResponse = await getNumberRequest();
        setNumber(numberResponse.data.contacts.mobile);
      } catch (error) {
        console.log(error);
      }
    };
    getNumber();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/help" element={<Help />} />
      </Routes>
      <StyledContainer>
        <StyledContent>
          <div>
            <img src={logo} alt="footerLogo" />
            <p style={{ color: '#B9B9B9', marginTop: '32px' }}>
              Developed by Zeon 2022
            </p>
          </div>
          <div>
            <StyledSpan>Компания</StyledSpan>
            <StyledP>
              <Link style={{ color: '#ffffff' }} to="/about">
                О нас
              </Link>
            </StyledP>
            <StyledP>
              <Link style={{ color: 'white' }} to="/news">
                Новости
              </Link>
            </StyledP>
            <StyledP>
              <Link style={{ color: 'white' }} to="/help">
                Помощь
              </Link>
            </StyledP>
          </div>
          <div>
            <StyledSpan>Контакты</StyledSpan>
            {number.map((item) => (
              <StyledP key={item.id}>
                <img src={item.image} alt="svg" />
                <a style={{ color: 'white' }} href={item.title}>
                  {item.data}
                </a>
              </StyledP>
            ))}
          </div>
          <div>
            <StyledSpan>Мы в социальных сетях:</StyledSpan>
            <StyledP>
              <InstagramSvg />
              Instagram
            </StyledP>
            <StyledP>
              <TelegramSvg />
              Telegram
            </StyledP>
            <StyledP>
              <WhatsappSvg />
              Whatsapp
            </StyledP>
          </div>
        </StyledContent>
      </StyledContainer>
    </>
  );
};

export default Footer;
