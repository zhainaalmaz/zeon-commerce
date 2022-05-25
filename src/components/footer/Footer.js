import React, { useState, useEffect } from 'react';
import { getLogoRequest, getNumberRequest } from '../../api/service';
import { Routes, Route, Link } from 'react-router-dom';
import Help from '../../pages/Help';
import styled from 'styled-components';
import { ReactComponent as EmailSvg } from './../../assets/icons/email.svg';
import { ReactComponent as PhoneSvg } from './../../assets/icons/phone.svg';
import { ReactComponent as TelegramSvg } from './../../assets/icons/telegram.svg';
import { ReactComponent as WhatsappSvg } from './../../assets/icons/whatsapp.svg';
import { ReactComponent as InstagramSvg } from './../../assets/icons/instagram.svg';

const StyledContainer = styled.div`
  width: 100%;
  height: 235px;
  background-color: black;
  display: flex;
  justify-content: space-between;
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
  const [number, setNumber] = useState({});

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
        setNumber(numberResponse.data.contacts);
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
            <p>Developed by Zeon 2022</p>
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
            <StyledP>
              <PhoneSvg />
              {number.phoneNumber}
            </StyledP>
            <StyledP>
              <PhoneSvg />
              {number.officeNumber}
            </StyledP>
            <StyledP>
              <EmailSvg />
              {number.email}
            </StyledP>
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
