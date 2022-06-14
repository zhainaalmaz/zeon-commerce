import React, { useRef } from 'react';
import { ReactComponent as SuccessOrder } from '../../assets/icons/check.svg';
import Button from '../../ui/Button';
import styled from 'styled-components';

const StyledContent = styled.div`
  padding: 28px 24px;
`;

const StyledTitle = styled.p`
  font-weight: 500;
  font-size: 22px;
  line-height: 100%;
  color: #393939;
  padding-top: 12px;
`;

const StyledText = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 150%;
  color: #393939;
  padding-top: 8px;
`;

const StyledButton = styled(Button)`
  width: 280px;
  height: 44px;
  background: #1d1d1b;
`;

const SuccessModal = ({ setOpen, setshowsuccess, showsuccess, ...props }) => {
  const divRef = useRef(null);

  return (
    <div className="success-container">
      <div className="success-overlay">
        <div className="success-modal" ref={divRef}>
          <StyledContent>
            <SuccessOrder />
            <StyledTitle>Спасибо!</StyledTitle>
            <StyledText>
              Ваша заявка была принята ожидайте,
              <br /> скоро Вам перезвонят
            </StyledText>
            <StyledButton
              style={{ width: '100%', background: 'black' }}
              onClick={() => setOpen(false)}
              {...props}
            >
              Продолжить покупки
            </StyledButton>
          </StyledContent>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
