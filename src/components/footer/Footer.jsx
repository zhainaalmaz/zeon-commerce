import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Help from '../../pages/Help';
import styled from 'styled-components';
import { ReactComponent as TelegramSvg } from './../../assets/icons/telegram.svg';
import { ReactComponent as WhatsappSvg } from './../../assets/icons/whatsapp.svg';
import { ReactComponent as InstagramSvg } from './../../assets/icons/instagram.svg';
import { useSelector } from 'react-redux';

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
  display: flex;
  align-items: center;
`;

const StyledSpan = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #e2e2e2;
`;

const StyledAtag = styled.a`
  color: white;
`;

const Footer = () => {
  const footerData = useSelector((state) => state.commerce.data);

  return (
    <>
      <Routes>
        <Route path="/help" element={<Help />} />
      </Routes>
      <StyledContainer>
        <StyledContent>
          <div>
            <img src={footerData.footerLogo} alt="footerLogo" />
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
            {footerData.mobile?.map((item) => (
              <StyledP key={item.id}>
                <img style={{ marginRight: 5 }} src={item.image} alt="svg" />
                <a style={{ color: 'white' }} href={item.title}>
                  {item.data}
                </a>
              </StyledP>
            ))}
          </div>
          <div>
            <StyledSpan>Мы в социальных сетях:</StyledSpan>

            <StyledAtag href={footerData.socialMedia?.instagram}>
              <StyledP>
                <InstagramSvg style={{ marginRight: 5 }} />
                {footerData.socialMedia?.instagramTitle}
              </StyledP>
            </StyledAtag>

            <StyledAtag href={footerData.socialMedia?.telegram}>
              <StyledP>
                <TelegramSvg style={{ marginRight: 5 }} />
                {footerData.socialMedia?.telegramTitle}
              </StyledP>
            </StyledAtag>

            <StyledAtag href={footerData.socialMedia?.whatsapp}>
              <StyledP>
                <WhatsappSvg style={{ marginRight: 5 }} />
                {footerData.socialMedia?.whatsappTitle}
              </StyledP>
            </StyledAtag>
          </div>
        </StyledContent>
      </StyledContainer>
    </>
  );
};

export default Footer;
