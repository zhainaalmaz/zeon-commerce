import React, { useRef } from 'react';
import styled from 'styled-components';
import Button from '../../ui/Button';
import userLogo from '../../assets/icons/user-logo.svg';
import phoneLogo from '../../assets/icons/telephone.svg';
import { ReactComponent as DeleteSvg } from '../../assets/icons/delete.svg';

const StyledContent = styled.div`
  padding: 32px 24px;
`;

const StyledTitle = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 125%;
  color: #393939;
`;

const StyledText = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  display: flex;
  align-items: flex-end;
  color: #393939;
  margin-top: 6px;
`;

const StyledInput = styled.input`
  padding: 10px 12px;
  width: 392px;
  height: 44px;
  background: #ffffff;
  border: 1px solid #e7e7e7;
  margin-top: 10px;
  ::placeholder {
    color: #d0d0d0;
    font-size: 14px;
    line-height: 17px;
    padding-left: 20px;
  }
`;

const StyledButton = styled(Button)`
  width: 280px;
  height: 44px;
  background: #1d1d1b;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;

const StyledDiv = styled.div`
  position: relative;
`;

const ModalRequest = () => {
  const divRef = useRef(null);
  return (
    <div className="request-container">
      <div className="request-overlay">
        <div className="request-modal" ref={divRef}>
          <StyledContent>
            <DeleteSvg style={{ display: 'flex', textAlign: 'end' }} />
            <div style={{ textAlign: 'start' }}>
              <StyledTitle>Если у Вас остались вопросы</StyledTitle>
              <StyledText>
                Оставьте заявку и мы обязательно <br /> Вам перезвоним
              </StyledText>
              <StyledDiv>
                <img
                  style={{ position: 'absolute', top: '19px', left: '8px' }}
                  src={userLogo}
                  alt="userlogo"
                />
                <StyledInput type="logo" placeholder="Как к Вам обращаться?" />
              </StyledDiv>
              <StyledDiv>
                <img
                  style={{ position: 'absolute', top: '19px', left: '8px' }}
                  src={phoneLogo}
                  alt="/"
                />
                <StyledInput placeholder="Номер телефона" />
              </StyledDiv>
              <StyledButton style={{ width: '100%', backgroundColor: 'black' }}>
                Заказать звонок
              </StyledButton>
            </div>
          </StyledContent>
        </div>
      </div>
    </div>
  );
};

export default ModalRequest;
