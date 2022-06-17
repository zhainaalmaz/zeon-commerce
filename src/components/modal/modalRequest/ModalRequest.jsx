import React, { useEffect, useRef } from 'react';
import { ReactComponent as UserLogo } from '../../../assets/icons/user-logo.svg';
import { ReactComponent as Phonelogo } from '../../../assets/icons/phone.svg';
import { ReactComponent as DeleteSvg } from '../../../assets/icons/delete.svg';
import { useForm } from 'react-hook-form';
import cls from './ModalRequest.module.css';

const ModalRequest = ({ setOpenDialog, showsuccess, setshowsuccess }) => {
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
    setOpenDialog(false);
    reset();
  };

  useEffect(() => {}, [errors]);

  return (
    <div className="request-container">
      <div className="request-overlay">
        <div className="request-modal" ref={divRef}>
          <form className={cls.form} onSubmit={handleSubmit(submitHandler)}>
            <DeleteSvg
              style={{ position: 'absolute', top: -10, right: 20 }}
              onClick={() => {
                setOpenDialog(false);
              }}
            />
            <div className={cls.content}>
              <div style={{ textAlign: 'start' }}>
                <h5 className={cls.title}>Если у Вас остались вопросы</h5>
                <p className={cls.text}>
                  Оставьте заявку и мы обязательно <br /> Вам перезвоним
                </p>

                <label
                  className={cls.request_label}
                  style={
                    errors.user
                      ? { border: '1px solid red' }
                      : { border: '1px solid #e7e7e7' }
                  }
                >
                  <UserLogo style={{ width: 30, margin: '10px 5px' }} />
                  <input
                    className={cls.request_input}
                    placeholder="Как к Вам обращаться?"
                    {...register('user', {
                      required: true,
                    })}
                  />
                </label>

                <label
                  className={cls.request_label}
                  style={
                    errors.tel
                      ? { border: '1px solid red' }
                      : { border: '1px solid #e7e7e7' }
                  }
                >
                  <Phonelogo style={{ width: 30, margin: '10px 5px' }} />
                  <input
                    className={cls.request_input}
                    type="tel"
                    placeholder="Номер телефона"
                    {...register('tel', {
                      required: true,
                      minLength: 3,
                    })}
                  />
                </label>

                <input
                  className={cls.request_submit}
                  type="submit"
                  disabled={!isValid}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalRequest;
