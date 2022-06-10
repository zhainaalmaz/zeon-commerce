import React from 'react';
import { useForm } from 'react-hook-form';
import Modal from '../../ui/modal/Modal';
import styled from 'styled-components';
import { ReactComponent as CloseSvg } from '../../assets/icons/delete.svg';
import { Link } from 'react-router-dom';
import { axiosinstance } from '../../api/api';

const StyledLayout = styled.div`
  width: 450px;
  height: 652px;
`;

const StyledForm = styled.form`
  width: 392px;
  height: 608px;
  margin: 32px 24px;
  padding: 0px;
  gap: 32px;
`;

const StyledDiv = styled.div`
  margin-top: 12px;
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

const StyledSection = styled.section`
  margin-top: 24px;
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

const ModalForm = ({
  showModal,
  totalFinalPrice,
  data,
  success,
  successHandler,
}) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  const order = {
    product: data,
    totalPrice: totalFinalPrice,
  };

  const onSubmithandler = (data) => {
    axiosinstance
      .post('/orders.json', {
        ...data,
        order,
      })
      .then((res) => {
        console.log(res.data, 'dsta');
      });

    reset();
    showModal();
    successHandler();
  };

  return (
    <Modal style={{ width: '440px' }}>
      <StyledLayout>
        <StyledForm onSubmit={handleSubmit(onSubmithandler)}>
          <StyledDiv>
            <StyledTitle>
              Оформление заказа{' '}
              <CloseSvg style={{ width: 24 }} onClick={showModal} />
            </StyledTitle>
          </StyledDiv>
          <StyledSection>
            {errors.username ? (
              <>
                <StyledErrorLabel>Ваше имя</StyledErrorLabel>
                <ErrorInput placeholder="Например Иван" />
              </>
            ) : (
              <>
                <StyledLabel>Ваше имя</StyledLabel>
                <StyledInput
                  placeholder="Например Иван"
                  {...register('username', {
                    required: true,
                  })}
                />
              </>
            )}

            {errors.surname ? (
              <>
                <StyledErrorLabel>Ваше фамилия</StyledErrorLabel>
                <ErrorInput placeholder="Например Иванов" />
              </>
            ) : (
              <>
                <StyledLabel>Ваше фамилия </StyledLabel>
                <StyledInput
                  placeholder="Например Иванов"
                  {...register('surname', {
                    required: true,
                  })}
                />
              </>
            )}

            {errors.email ? (
              <>
                <StyledErrorLabel> Электронная почта</StyledErrorLabel>
                <ErrorInput placeholder="example@mail.com" />
              </>
            ) : (
              <>
                <StyledLabel htmlFor="Электронная почта">
                  Электронная почта
                </StyledLabel>
                <StyledInput
                  placeholder="example@mail.com"
                  {...register('email', {
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                  })}
                />
              </>
            )}

            {errors.number ? (
              <>
                <StyledErrorLabel>Ваш номер телефона</StyledErrorLabel>
                <ErrorInput placeholder="Введите номер телефона" />
              </>
            ) : (
              <>
                <StyledLabel>Ваш номер телефона</StyledLabel>
                <StyledInput
                  placeholder="Введите номер телефона"
                  {...register('number', {
                    pattern:
                      /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                  })}
                />
              </>
            )}

            {errors.country ? (
              <>
                <StyledErrorLabel>Страна</StyledErrorLabel>
                <ErrorInput placeholder="Введите страну" />
              </>
            ) : (
              <>
                <StyledLabel>Страна</StyledLabel>
                <StyledInput
                  placeholder="Введите страну"
                  {...register('country', {
                    required: true,
                  })}
                />
              </>
            )}

            {errors.city ? (
              <>
                <StyledErrorLabel>Город</StyledErrorLabel>
                <ErrorInput placeholder="Введите город" />
              </>
            ) : (
              <>
                <StyledLabel>Город</StyledLabel>
                <StyledInput
                  placeholder="Введите город"
                  {...register('city', {
                    required: true,
                  })}
                />
              </>
            )}

            <StyledCheckedDiv>
              <input style={{ marginRight: 8 }} type="checkbox" />
              <StyledSpan>
                Согласен с условиями <Link to="/offert">публичной оферты</Link>
              </StyledSpan>
            </StyledCheckedDiv>
          </StyledSection>

          <input type="submit" disabled={!isValid} onSubmit={onSubmithandler} />
        </StyledForm>
      </StyledLayout>
    </Modal>
  );
};

export default ModalForm;
