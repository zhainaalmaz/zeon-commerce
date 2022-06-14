import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ReactComponent as UserLogo } from '../../assets/icons/user-logo.svg';
import { ReactComponent as Phonelogo } from '../../assets/icons/phone.svg';
import { ReactComponent as DeleteSvg } from '../../assets/icons/delete.svg';
import { useForm } from 'react-hook-form';

const StyledContent = styled.div`
  margin: 22px 38px 32px 38px;
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
  margin-bottom: 12px;
`;

const StyledInput = styled.input`
  border: none;
  padding: 10px 12px;
  width: 392px;
  height: 44px;
  background: #ffffff;
  ::placeholder {
    color: #d0d0d0;
    font-size: 14px;
    line-height: 17px;
  }
`;

const StyledLabel = styled.label`
  margin-bottom: 10px;
  display: flex;
  gap: 10;
  border: 1px solid #e7e7e7;
`;

const ModalRequest = ({
  setOpenDialog,
  setOpen,
  showsuccess,
  setshowsuccess,
}) => {
  const divRef = useRef(null);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'all',
  });

  const submitHandler = () => {
    setshowsuccess(!showsuccess);
    reset();
    console.log('work');
  };
  useEffect(() => {}, [errors]);

  return (
    <div className="request-container">
      <div className="request-overlay">
        <div className="request-modal" ref={divRef}>
          <form
            onSubmit={handleSubmit(submitHandler)}
            style={{ position: 'relative' }}
          >
            <DeleteSvg
              style={{ position: 'absolute', top: -10, right: 20 }}
              onClick={() => {
                setOpenDialog(false);
                setOpen(false);
              }}
            />
            <StyledContent>
              <div style={{ textAlign: 'start' }}>
                <StyledTitle>Если у Вас остались вопросы</StyledTitle>
                <StyledText>
                  Оставьте заявку и мы обязательно <br /> Вам перезвоним
                </StyledText>

                <StyledLabel
                  style={
                    errors.user
                      ? { border: '1px solid red' }
                      : { border: '1px solid #e7e7e7' }
                  }
                >
                  <UserLogo style={{ width: 30, margin: '10px 5px' }} />
                  <StyledInput
                    placeholder="Как к Вам обращаться?"
                    {...register('user', {
                      required: true,
                    })}
                  />
                </StyledLabel>

                <StyledLabel
                  style={
                    errors.tel
                      ? { border: '1px solid red' }
                      : { border: '1px solid #e7e7e7' }
                  }
                >
                  <Phonelogo style={{ width: 30, margin: '10px 5px' }} />
                  <StyledInput
                    type="tel"
                    placeholder="Номер телефона"
                    {...register('tel', {
                      required: true,
                      minLength: 3,
                      // pattern:
                      //   /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                    })}
                  />
                </StyledLabel>

                <input
                  style={{ width: 360, marginTop: 12 }}
                  type="submit"
                  disabled={!isValid}
                />
              </div>
            </StyledContent>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalRequest;
