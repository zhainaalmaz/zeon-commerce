import React from 'react';
import Button from '../../ui/Button';
import styled from 'styled-components';
import { ReactComponent as CloseSvg } from '../../assets/icons/delete.svg';
import Modal from '../../ui/modal/Modal';

const StyledLayout = styled.div`
  width: 440px;
  height: 672px;
`;

const StyledForm = styled.form`
  width: 392px;
  height: 608px;
  margin: 32px 24px;
  padding: 0px;
  gap: 32px;
`;

const StyledTitle = styled.h1`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #393939;
  text-align: start;
`;

const StyledLabel = styled.label`
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #808080;
  margin-top: 12px;
`;

const StyledInput = styled.input`
  padding: 13px 10px 13px 12px;
  gap: 10px;
  width: 392px;
  height: 44px;
  background: #ffffff;
  border: 1px solid #e7e7e7;
  margin-top: 4px;

  ::placeholder {
    color: #d0d0d0;
    font-size: 14px;
    line-height: 17px;
  }
`;

const StyledDiv = styled.div`
  margin-top: 12px;
`;

const StyledSection = styled.section`
  margin-top: 24px;
`;

const StyledCheckedDiv = styled.div`
  height: 24px;
  margin-top: 16px;
  text-align: start;
`;

const StyledSpan = styled.span`
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #393939;
`;

const StyledButton = styled(Button)`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;

const ModalForm = ({ showModal }) => {
  return (
    <Modal>
      <StyledLayout>
        <StyledForm>
          <StyledDiv>
            <StyledTitle>
              Оформление заказа <CloseSvg onClick={showModal} />
            </StyledTitle>
          </StyledDiv>
          <StyledSection>
            <StyledLabel>Ваше имя</StyledLabel>
            <StyledInput
              placeholder="Например Иван"
              type="text"
              name="username"
              // value={}
              // onChange={}
            />
            <StyledLabel>Ваше фамилия</StyledLabel>
            <StyledInput
              placeholder="Например Иванов"
              type="text"
              name="userSurname"
            />
            <StyledLabel htmlFor="Электронная почта">
              Электронная почта
            </StyledLabel>
            <StyledInput
              placeholder="example@mail.com"
              type="text"
              name="email"
            />

            <StyledDiv>
              <StyledLabel>Ваш номер телефона </StyledLabel>
              <select>
                <option>🇰🇬 +996</option>
                <option>🇷🇺 +79</option>
                <option>🇺🇸 +711</option>
              </select>

              <StyledInput type="select" placeholder="Введите номер телефона" />
            </StyledDiv>
            <StyledLabel>Страна</StyledLabel>
            <StyledInput
              placeholder="Введите страну"
              type="text"
              name="country"
            />
            <StyledLabel>Город</StyledLabel>
            <StyledInput placeholder="Введите город" type="text" name="city" />
          </StyledSection>
          <StyledCheckedDiv>
            <input style={{ marginRight: 8 }} type="checkbox" />
            <StyledSpan>
              Согласен с условиями <a href="/">публичной оферты</a>
            </StyledSpan>
          </StyledCheckedDiv>
          <StyledButton style={{ width: '100%' }}>Заказать</StyledButton>
        </StyledForm>
      </StyledLayout>
    </Modal>
  );
};

export default ModalForm;
