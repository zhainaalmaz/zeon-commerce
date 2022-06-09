import React, { useState } from 'react';
import Button from '../../ui/Button';
import styled from 'styled-components';
import { ReactComponent as CloseSvg } from '../../assets/icons/delete.svg';
import Modal from '../../ui/modal/Modal';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import './Modal.css';
import useForm from '../../hooks/useForm';
import { validate } from '../../hooks/useForm';
import axios from 'axios';

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

const StyledErrorLabel = styled.label`
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: red;
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

const ErrorInput = styled.input`
  padding: 13px 10px 13px 12px;
  gap: 10px;
  width: 392px;
  height: 44px;
  background: #ffffff;
  border: 1px solid red;
  margin-top: 4px;
  ::placeholder {
    color: red;
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
  const [touched, setTouched] = useState(false);
  const { handleChange, handleSubmit, values, errors, setValues } =
    useForm(validate);

  const blurHandler = () => {
    console.log(values);
    // console.log('input blurred');
    setValues((values) => ({
      ...values,
      // touched,
    }));
  };

  return (
    <Modal>
      <StyledLayout>
        <StyledForm onSubmit={handleSubmit}>
          <StyledDiv>
            <StyledTitle>
              Оформление заказа <CloseSvg onClick={showModal} />
            </StyledTitle>
          </StyledDiv>
          <StyledSection>
            {!errors.username ? (
              <>
                <StyledLabel>Ваше имя</StyledLabel>
                <StyledInput
                  placeholder="Например Иван"
                  type="text"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={blurHandler}
                />
              </>
            ) : (
              <>
                <StyledErrorLabel>Ваше имя</StyledErrorLabel>
                <ErrorInput
                  placeholder="Например Иван"
                  type="text"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={blurHandler}
                />
              </>
            )}

            {!errors.surname ? (
              <>
                <StyledLabel>Ваше фамилия</StyledLabel>
                <StyledInput
                  placeholder="Например Иванов"
                  type="text"
                  name="surname"
                  value={values.surname}
                  onChange={handleChange}
                  onBlur={blurHandler}
                />
              </>
            ) : (
              <>
                <StyledErrorLabel>Ваше фамилия</StyledErrorLabel>
                <ErrorInput
                  placeholder="Например Иванов"
                  type="text"
                  name="surname"
                  value={values.surname}
                  onChange={handleChange}
                  onBlur={blurHandler}
                />
              </>
            )}

            {!errors.email ? (
              <>
                <StyledLabel htmlFor="Электронная почта">
                  Электронная почта
                </StyledLabel>
                <StyledInput
                  placeholder="example@mail.com"
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={blurHandler}
                />
              </>
            ) : (
              <>
                <StyledErrorLabel> Электронная почта</StyledErrorLabel>
                <ErrorInput
                  placeholder="example@mail.com"
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={blurHandler}
                />
              </>
            )}

            <StyledDiv>
              {errors.number ? (
                <>
                  <StyledErrorLabel>Ваш номер телефона</StyledErrorLabel>
                  <ErrorInput
                    placeholder="Введите номер телефона"
                    type="number"
                    name="number"
                    value={values.number}
                    onChange={handleChange}
                    onBlur={blurHandler}
                  />
                </>
              ) : (
                <>
                  <StyledLabel>Ваш номер телефона </StyledLabel>
                  <StyledInput
                    placeholder="Введите номер телефона"
                    type="number"
                    name="number"
                    value={values.number}
                    onChange={handleChange}
                    onBlur={blurHandler}
                  />
                </>
              )}
            </StyledDiv>

            {!errors.country ? (
              <>
                <StyledLabel>Страна</StyledLabel>
                <StyledInput
                  placeholder="Введите страну"
                  type="text"
                  name="country"
                  value={values.country}
                  onChange={handleChange}
                  onBlur={blurHandler}
                />
              </>
            ) : (
              <>
                <StyledErrorLabel>Страна</StyledErrorLabel>
                <ErrorInput
                  placeholder="Введите страну"
                  type="text"
                  name="country"
                  value={values.country}
                  onChange={handleChange}
                  onBlur={blurHandler}
                />
              </>
            )}

            {!errors.city ? (
              <>
                <StyledLabel>Город</StyledLabel>
                <StyledInput
                  placeholder="Введите город"
                  type="text"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  onBlur={blurHandler}
                />
              </>
            ) : (
              <>
                <StyledErrorLabel>Город</StyledErrorLabel>
                <ErrorInput
                  placeholder="Введите город"
                  type="text"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  onBlur={blurHandler}
                />
              </>
            )}
          </StyledSection>
          <StyledCheckedDiv>
            <input style={{ marginRight: 8 }} type="checkbox" />
            <StyledSpan>
              Согласен с условиями <a href="/">публичной оферты</a>
            </StyledSpan>
          </StyledCheckedDiv>
          {!errors ? (
            <StyledButton style={{ width: '100%' }} onClick={handleSubmit}>
              Заказать
            </StyledButton>
          ) : (
            <StyledButton
              style={{ width: '100%', background: 'grey' }}
              onClick={handleSubmit}
            >
              Заказать
            </StyledButton>
          )}
        </StyledForm>
      </StyledLayout>
    </Modal>
  );
};

export default ModalForm;
